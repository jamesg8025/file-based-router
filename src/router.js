const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

/**
 * Set up router
 * @param {object} app - Express app instance
 */
function setupRouter(app) {
    // Get all .js files in the pages directory
    const pageFiles = glob.sync('src/pages/**/*.js');

    // Sort routes to ensure static routes take precedence over dynamic ones
    pageFiles.sort((a, b) => {
        const isDynamicA = a.includes('[');
        const isDynamicB = b.includes('[');

        if (isDynamicA && !isDynamicB) return 1;
        if (!isDynamicA && isDynamicB) return -1;
        return 0;
    });

    // Register each page as a route
    pageFiles.forEach(filePath => {
        // Convert file path to route path
        let routePath = filePath
            .replace('src/pages', '') // Remove src/pages from path
            .replace('.js', '') // Remove file extension
            .replace('/index', '/'); // Remove /index from end of path

        // Convert empty string to root path
        if (routePath === '') {
            routePath = '/';
        }

        // Check if the route has dynamic segments
        const hasDynamicSegments = routePath.includes('[') && routePath.includes(']');

        if (hasDynamicSegments) {
            // Convert [paramName] to :paramName for Express
            routePath = routePath.replace(/\[([^\]]+)\]/g, ':$1');
        }

        console.log(`Registering route: ${routePath} -> ${filePath}`);

        // Register the route handler
        app.get(routePath, async (req, res) => {
            try {
                // Import the page module
                const pageModule = require(path.resolve(filePath));

                // Check if the module exports a handler function
                if (typeof pageModule.handler === 'function') {
                    return pageModule.handler(req, res);
                }

                // If no handler function, return the contents as JSON
                res.json(pageModule);
            } catch (error) {
                console.error(`Error handling route ${routePath}:`, error);
                res.status(500).send('Internal Server Error');
            }
        });
    });

    // Add a 404 handler for routes that don't match
    app.use((req, res) => {
        res.status(404).send(
            `<html>
                <head>
                    <title>404 Not Found</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            max-width: 800px;
                            margin: 0 auto;
                            padding: 20px;
                            text-align: center;
                        }
                        h1 {
                            color: #d32f2f;
                        }
                        .back-link {
                            display: inline-block;
                            margin-top: 20px;
                        }
                        .back-link:hover {
                            text-decoration: underline;
                        }
                    </style>
                </head>
                <body>
                    <h1>404 - Not Found</h1>
                    <p>The page you're looking for doesn't exist.</p>
                    <a href="/" class="back-link">Back to Home</a>
                </body>
            </html>
        `);
    });
}

module.exports = { setupRouter };
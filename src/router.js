const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');



/**
 * Set up router
 * @param {Express} app - Express app instance
 */

function setupRouter(app) {

    let mainLayout;
    try {
        const layoutPath = path.resolve(__dirname, 'layouts', 'main.js');
        console.log(`Loading layout from: ${layoutPath}`);

        // Delete cache to ensure latest version is loaded
        delete require.cache[require.resolve(layoutPath)];

        mainLayout = require(layoutPath);
        console.log('Layout loaded successfully.');


    } catch (error) {
        console.error(`Error loading layout: ${error.message}`);
        mainLayout = null;
    }

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
                // Clear require cache to get fresh module
                delete require.cache[require.resolve(path.resolve(filePath))];

                // Import the page module
                const pageModule = require(path.resolve(filePath));

                // Add the sendWithLayout method to the response object
                res.sendWithLayout = (content, options = {}) => {
                    console.log('Using the sendWithLayout method', options);

                    // If layout is explicitly set to false, don't use layout
                    if (options.layout === false) {
                        console.log('Layout explicitly disabled');
                        return res.send(content);
                    }

                    // If layout exists and useLayout isn't set to false, wrap the content
                    if (mainLayout && pageModule.useLayout !== false) {
                        console.log('Applying layout to content')
                        return res.send(mainLayout(content, options));
                    }

                    // Otherwise, just send the content as is
                    console.log('Sending content without layout');
                    res.send(content);
                };
                // Check if the module exports a handler function
                if (typeof pageModule.handler === 'function') {

                    
                    // Call the handler with custom response function
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
        const notFoundContent = `
            <h1>404 - Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <a href="/" style="display: inline-block; margin-top: 20px;">← Back to Home</a>
        `;
        // If mainLayout is available, use it
        if (mainLayout) {
            return res.status(404).send(mainLayout(notFoundContent, { title: '404 Not Found' }));
        }

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
                    ${notFoundContent}
                </body>
            </html>
        `);
    });
}

module.exports = { setupRouter };
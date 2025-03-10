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

        console.log(`Registering route: ${routePath}`);

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
        res.status(404).send('Page Not Found');
    });
}

module.exports = { setupRouter };
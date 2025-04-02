/**
 * Home page handler
 */
exports.handler = async (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Home Page</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 20px;
                    }
                    nav {
                        margin-bottom: 20px;
                    }
                    nav a {
                        margin-right: 10px;
                    }
                    .routes {
                        margin-top: 30px;
                    }
                    .route-category {
                        margin-bottom: 20px;
                    }
                    .route-category h2 {
                        border-bottom: 1px solid #eee;
                        padding-bottom: 5px;
                    }
                    .route-list {
                        list-style-type: none;
                        padding-left: 0;
                    }
                    .route-list li {
                        margin-bottom: 10px;
                    }
                    .route-path {
                        font-family: monospace;
                        background-color: #f5f5f5;
                        padding: 2px 6px;
                        border-radius: 3px;
                    }
                </style>
            </head>
            <body>
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/about">Users</a>
                    <a href="/about">Admin</a>
                </nav>
                <h1>Welcome to My File Router</h1>
                <p>This is the home page served by a custom file-based router!</p>

                <div class="routes">
                    <h2>Available Routes</h2>
                    <div class="route-category">
                        <h3>Static Routes</h3>
                        <ul class="route-list">
                            <li><span class="route-path">/about</span> - Home page</li>
                            <li><span class="route-path">/users</span> - Users page</li>
                        </ul>
                    </div>
                
                    <div class="route-category">
                        <h3>User Routes</h3>
                        <ul class="route-list">
                            <li><span class="route-path">/users</span> - List of users</li>
                            <li><span class="route-path">/users/:id</span> - User details (dynamic route)</li>
                        </ul>
                    </div>

                    <div class="route-category">
                        <h3>Admin Routes</h3>
                        <ul class="route-list">
                            <li><span class="route-path">/admin</span> - Admin dashboard</li>
                            <li><span class="route-path">/admin/users</span> - Manage users</li>
                            <li><span class="route-path">/admin/settings</span> - Application settings</li>
                        </ul>
                    </div>
                
                </div>

            </body>
        </html>
    `);
};
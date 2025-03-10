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
                </style>
            </head>
            <body>
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/about">Users</a>
                </nav>
                <h1>Welcome to My File Router</h1>
                <p>This is the home page served by our custom file-based router!</p>
            </body>
        </html>
    `);
};
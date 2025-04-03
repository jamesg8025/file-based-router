/**
 * Main layout component
 */
function mainLayout(content, {title = 'My File Router', } = {}) {
    return `
        <html>
            <head>
                <title>${title}</title>
                <style>
                body {
                    font-family: Arial, sans-serif;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                }
                header {
                    border-bottom: 1px solid #eee;
                    padding-bottom: 10px;
                    margin-bottom: 20px;
                }
                nav {
                    margin-bottom: 20px;
                    
                }
                nav a {
                    margin-right: 10px;
                    text-decoration: none;
                    color: #333;
                    font-weight: bold;
                }
                nav a:hover {
                    text-decoration: underline;
                }
                footer {
                    margin-top: 40px;
                    border-top: 1px solid #eee;
                    padding-top: 10px;
                    color: #666;
                    font-size: 0.8em;
                }
                </style>
            </head>
            <body>
                <header>
                    <h1>My File Router</h1>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/users">Users</a>
                        <a href="/admin">Admin</a>
                    </nav>
                </header>

                <main>
                    ${content}
                </main>

                <footer>
                    <p>&copy; ${new Date().getFullYear()} My File Router. A custom file-based router demonstration.</p>
                </footer>
            </body>
        </html>
    `;
}

// Export the mainLayout function
module.exports = { setupRouter };
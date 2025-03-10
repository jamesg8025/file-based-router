/**
 * About page handler
 */
exports.handler = (req, res) => {
    res.send(`
      <html>
        <head>
          <title>About Page</title>
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
            <a href="/users">Users</a>
          </nav>
          <h1>About My File Router</h1>
          <p>This is a simple file-based router implementation, similar to Next.js but much simpler.</p>
          <p>Each JavaScript file in the pages directory becomes a route automatically!</p>
        </body>
      </html>
    `);
};
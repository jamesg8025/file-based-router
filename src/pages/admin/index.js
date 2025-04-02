/**
 * Admin dashboard page
 */
exports.handler = (req, res) => {
    res.send(`
      <html>
        <head>
          <title>Admin Dashboard</title>
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
            .dashboard {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
              margin-top: 20px;
            }
            .card {
              border: 1px solid #ccc;
              border-radius: 5px;
              padding: 20px;
            }
            .card h3 {
              margin-top: 0;
            }
          </style>
        </head>
        <body>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/users">Users</a>
            <a href="/admin">Admin</a>
          </nav>
          <h1>Admin Dashboard</h1>
          <p>Welcome to the admin area. This demonstrates nested routing.</p>
          
          <div class="dashboard">
            <div class="card">
              <h3>Users</h3>
              <p>Manage user accounts</p>
              <a href="/admin/users">Manage Users</a>
            </div>
            <div class="card">
              <h3>Settings</h3>
              <p>Configure application settings</p>
              <a href="/admin/settings">Manage Settings</a>
            </div>
          </div>
        </body>
      </html>
    `);
  };
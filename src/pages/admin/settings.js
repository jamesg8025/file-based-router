/**
 * Admin settings page
 */
exports.handler = (req, res) => {
    res.send(`
      <html>
        <head>
          <title>Admin - Settings</title>
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
            .form-group {
              margin-bottom: 15px;
            }
            label {
              display: block;
              margin-bottom: 5px;
              font-weight: bold;
            }
            input, select {
              width: 100%;
              padding: 8px;
              border: 1px solid #ddd;
              border-radius: 4px;
            }
            button {
              background-color: #4CAF50;
              color: white;
              padding: 10px 15px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            }
            button:hover {
              background-color: #45a049;
            }
            .back-link {
              display: inline-block;
              margin-top: 20px;
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
          <h1>Settings</h1>
          <p>Configure application settings</p>
          
          <form>
            <div class="form-group">
              <label for="siteName">Site Name</label>
              <input type="text" id="siteName" value="My File Router" />
            </div>
            
            <div class="form-group">
              <label for="theme">Theme</label>
              <select id="theme">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="maintenance">Maintenance Mode</label>
              <select id="maintenance">
                <option>Off</option>
                <option>On</option>
              </select>
            </div>
            
            <button type="button">Save Settings</button>
          </form>
          
          <a href="/admin" class="back-link">← Back to Dashboard</a>
        </body>
      </html>
    `);
};
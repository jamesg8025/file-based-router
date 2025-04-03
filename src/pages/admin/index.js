/**
 * Admin dashboard page
 */
exports.handler = (req, res) => {
    const content = `
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin area. This demonstrates nested routing.</p>
      
      <div class="dashboard" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 20px;">
        <div class="card" style="border: 1px solid #ccc; border-radius: 5px; padding: 20px;">
          <h3>Users</h3>
          <p>Manage user accounts</p>
          <a href="/admin/users">Manage Users</a>
        </div>
        <div class="card" style="border: 1px solid #ccc; border-radius: 5px; padding: 20px;">
          <h3>Settings</h3>
          <p>Configure application settings</p>
          <a href="/admin/settings">Manage Settings</a>
        </div>
      </div> 
    `;

    // If layout is available, use it
    if (res.sendWithLayout) {
        res.sendWithLayout(content, { title: 'Admin Dashboard - My File Router' });
    } else {
        res.send(content);
    }
  };
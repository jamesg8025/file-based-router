/**
 * Home page handler
 */
exports.handler =  (req, res) => {
    const content = `
    <h1>Welcome to My File Router</h1>
    <p>This is a demonstration of a custom file-based router, similar to how Next.js works but much simpler.</p>
    
    <div class="routes">
      <h2>Available Routes</h2>
      
      <div class="route-category">
        <h3>Static Routes</h3>
        <ul class="route-list">
          <li><span class="route-path">/</span> - Home page</li>
          <li><span class="route-path">/about</span> - About page</li>
        </ul>
      </div>
      
      <div class="route-category">
        <h3>User Routes</h3>
        <ul class="route-list">
          <li><span class="route-path">/users</span> - List of users</li>
          <li><span class="route-path">/users/[id]</span> - User details (dynamic route)</li>
        </ul>
      </div>
      
      <div class="route-category">
        <h3>Admin Routes</h3>
        <ul class="route-list">
          <li><span class="route-path">/admin</span> - Admin dashboard</li>
          <li><span class="route-path">/admin/users</span> - User management</li>
          <li><span class="route-path">/admin/settings</span> - Application settings</li>
        </ul>
      </div>
    </div>
    `;

    // If layout is there, use it
    if (res.sendWithLayout) {
        res.sendWithLayout(content, { title: 'Home - My File Router' });
    } else {
        res.send(content);
    }
};
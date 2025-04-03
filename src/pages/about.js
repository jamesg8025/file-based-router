/**
 * About page handler
 */
exports.handler = (req, res) => {
    const content = `
    <h1>About My File Router</h1>
    <p>This is a simple file-based router implementation, similar to Next.js but much simpler.</p>
    <p>Each JavaScript file in the pages directory becomes a route automatically!</p>
    
    <h2>How It Works</h2>
    <p>The router scans the <code>pages</code> directory and creates routes based on the file structure:</p>
    <ul>
      <li><code>pages/index.js</code> becomes <code>/</code></li>
      <li><code>pages/about.js</code> becomes <code>/about</code></li>
      <li><code>pages/users/index.js</code> becomes <code>/users</code></li>
      <li><code>pages/users/[id].js</code> becomes <code>/users/:id</code></li>
    </ul>
    
    <h2>Features</h2>
    <ul>
      <li>File-based routing</li>
      <li>Dynamic routes with parameters</li>
      <li>Nested routes</li>
      <li>Layouts support</li>
    </ul> 
    `;

  // Use layout system
  if (res.sendWithLayout) {
    res.sendWithLayout(content, { title: 'About My File Router' });
  } else {
    res.send(content);
  }
};
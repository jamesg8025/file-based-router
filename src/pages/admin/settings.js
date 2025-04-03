/**
 * Admin settings page
 */
exports.handler = (req, res) => {
    const content = `
      <h1>Settings</h1>
      <p>Configure application settings</p>
      
      <form style="margin-top: 20px;">
        <div style="margin-bottom: 15px;">
          <label style="display: block; margin-bottom: 5px; font-weight: bold;" for="siteName">Site Name</label>
          <input style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;" type="text" id="siteName" value="My File Router" />
        </div>
        
        <div style="margin-bottom: 15px;">
          <label style="display: block; margin-bottom: 5px; font-weight: bold;" for="theme">Theme</label>
          <select style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;" id="theme">
            <option>Light</option>
            <option>Dark</option>
            <option>System</option>
          </select>
        </div>
        
        <div style="margin-bottom: 15px;">
          <label style="display: block; margin-bottom: 5px; font-weight: bold;" for="maintenance">Maintenance Mode</label>
          <select style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;" id="maintenance">
            <option>Off</option>
            <option>On</option>
          </select>
        </div>
        
        <button style="background-color: #4CAF50; color: white; padding: 10px 15px; border: none; border-radius: 4px; cursor: pointer;" type="button">Save Settings</button>
      </form>
      
      <a href="/admin" style="display: inline-block; margin-top: 20px;">← Back to Dashboard</a>
    `;

    // If layout is available, use it
    if (res.sendWithLayout) {
        res.sendWithLayout(content, { title: 'Settings - My File Router' });
    }
    else {
        res.send(content);
    }
};
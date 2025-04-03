/**
 * admin users management page handler
 */
exports.handler = (req, res) => {

    // Mock user data
    // In a real application, this data would come from a database
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' },
    ];

    const content = `
        <h1>User Management</h1>
        <p>Admin interface for managing users</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <thead>
            <tr>
            <th style="padding: 10px; border: 1px solid #ddd; text-align: left; background-color: #f2f2f2;">ID</th>
            <th style="padding: 10px; border: 1px solid #ddd; text-align: left; background-color: #f2f2f2;">Name</th>
            <th style="padding: 10px; border: 1px solid #ddd; text-align: left; background-color: #f2f2f2;">Email</th>
            <th style="padding: 10px; border: 1px solid #ddd; text-align: left; background-color: #f2f2f2;">Role</th>
            <th style="padding: 10px; border: 1px solid #ddd; text-align: left; background-color: #f2f2f2;">Actions</th>
            </tr>
        </thead>
        <tbody>
            ${users.map(user => `
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">${user.id}</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${user.name}</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${user.email}</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${user.role}</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                <a href="/users/${user.id}">View</a>
                </td>
            </tr>
            `).join('')}
        </tbody>
        </table>
        
        <a href="/admin" style="display: inline-block; margin-top: 20px;">← Back to Dashboard</a>
    `;

    // If layout is available, use it
    if (res.sendWithLayout) {
        res.sendWithLayout(content, { title: 'User Management - My File Router' });
    } else {
        res.send(content);
    }
};
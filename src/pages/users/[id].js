/**
 * User detail page
 */
exports.handler = (req, res) => {
    // Get user ID from URL params
    const userId = req.params.id;

    // Mock user data (soon to come from a database)
    const users = {
        '1': { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer' },
        '2': { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
        '3': { id: 3, name: 'Bob Johnson', email: 'john@example.com', role: 'Manager' },
    };

    const user = users[userId];

    if (!user) {
        return res.status(404).send('User not found');
    }

    const content = `
        <h1>User Details</h1>
        <div class="user-card" style="border: 1px solid #ccc; border-radius: 5px; padding: 20px; margin-top: 20px;">
        <h2>${user.name}</h2>
        <p><strong>ID:</strong> ${user.id}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Role:</strong> ${user.role}</p>
        </div>
        <a href="/users" style="display: inline-block; margin-top: 20px;">← Back to Users</a>
    `;

    // If layout is available, use it
    if (res.sendWithLayout) {
        res.sendWithLayout(content, { title: `${user.name} - My File Router` });
    } else {
        res.send(content);
    }
}
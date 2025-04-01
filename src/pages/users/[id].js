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

    res.send(`
        <html>
            <head>
                <title>${user.name}</title>
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
                    .user-card {
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        padding: 20px;
                        margin-bottom: 20px;
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
                </nav>
                <h1>User Details</h1>
                <div class="user-card">
                    <h2>${user.name}</h2>
                    <p><strong>ID:</strong> ${user.id}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Role:</strong> ${user.role}</p>
                </div>
                <a href="/users" class="back-link">Back to Users</a>
            </body>
        </html>
    `);
}
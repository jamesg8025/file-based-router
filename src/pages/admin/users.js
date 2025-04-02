/**
 * admin users management page handler
 */
exports.handler = (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Admin Users Management</title>
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
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }
                    th, td {
                        border: 1px solid #ddd;
                        padding: 10px;
                        text-align: left;
                    }
                    th {
                        background-color: #f2f2f2;
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
                <h1>Admin Users Management</h1>
                <p>Manage user accounts from this page.</p>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${users.map(user => `
                            <tr>
                                <td>${user.id}</td>
                                <td>${user.name}</td>
                                <td>${user.email}</td>
                                <td>${user.role}</td>
                                <td><a href="/admin/users/${user.id}">View</a></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                <a href="/admin" class="back-link">Back to Admin Dashboard</a>
            </body>
        </html>
    `);
};
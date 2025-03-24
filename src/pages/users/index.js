/*
* Users list page
*/
exports.handler = (req, res) => {
    // Mock user data
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Bob Johnson' },
    ];

    res.send(`
        <html>
            <head>
                <title>Users</title>
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
                    ul {
                        list-style: none;
                        padding: 0;
                    }
                    li {
                        margin-bottom: 10px;
                    }
                </style>
            </head>
            <body>
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/users">Users</a>
                </nav>
                <h1>Users</h1>
                <ul>
                    ${users.map(user => `
                        <li>
                            <a href="/users/${user.id}">${user.name}</a>
                        </li>
                    `).join('')}
                </ul>
            </body>
        </html>
    `)
};
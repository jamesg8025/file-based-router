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

    const content = `
        <h1>Users</h1>
        <ul>
        ${users.map(user => `
            <li>
            <a href="/users/${user.id}">${user.name}</a>
            </li>
        `).join('')}
        </ul>  
    `;

    // Use our layout system if available
    if (res.sendWithLayout) {
        res.sendWithLayout(content, { title: 'Users - My File Router' });
    } else {
        res.send(content);
    }
};
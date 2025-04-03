# File-Based Router Project

A simple implementation of a file-based router, inspired by frameworks like Next.js. This project demonstrates how to create a router that automatically generates routes based on the file structure.

## Features

- 📁 File-based routing
- 🔄 Dynamic routes with parameters
- 🌳 Nested routes
- 🎨 Layout system
- 📱 Simple and lightweight

## Project Structure

```
file-router-project/
├── package.json
├── server.js            # Main server file
├── src/
│   ├── layouts/         # Layout templates
│   │   └── main.js      # Main layout
│   ├── pages/           # Routes are based on files in this directory
│   │   ├── index.js     # Home page (/)
│   │   ├── about.js     # About page (/about)
│   │   ├── users/
│   │   │   ├── index.js # Users list page (/users)
│   │   │   └── [id].js  # User detail page (/users/:id)
│   │   └── admin/
│   │       ├── index.js # Admin dashboard (/admin)
│   │       ├── users.js # User management (/admin/users)
│   │       └── settings.js # Admin settings (/admin/settings)
│   └── router.js        # Router implementation
└── README.md
```

## How It Works

The router scans the `pages` directory and creates routes based on the file structure:

- `pages/index.js` becomes `/`
- `pages/about.js` becomes `/about`
- `pages/users/index.js` becomes `/users`
- `pages/users/[id].js` becomes `/users/:id` (dynamic route)

Each page file should export a `handler` function that processes requests for that route.

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the server:
   ```
   npm start
   ```
   or for development with auto-reload:
   ```
   npm run dev
   ```
4. Visit http://localhost:3000 in your browser

## Creating Routes

To create a new route, simply add a JavaScript file to the `pages` directory:

```javascript
// src/pages/hello.js
exports.handler = (req, res) => {
  res.send('<h1>Hello World!</h1>');
};
```

This will create a route at `/hello`.

### Dynamic Routes

To create a dynamic route with parameters, use square brackets in the filename:

```javascript
// src/pages/posts/[slug].js
exports.handler = (req, res) => {
  const { slug } = req.params;
  res.send(`<h1>Post: ${slug}</h1>`);
};
```

This will create a route at `/posts/:slug`.

### Using Layouts

The router supports a layout system. To use a layout:

```javascript
exports.handler = (req, res) => {
  const content = '<h1>My Page</h1><p>This is my page content.</p>';
  res.sendWithLayout(content, { title: 'My Page Title' });
};
```

## Extending the Router

This project provides a simple implementation of a file-based router. You can extend it with additional features:

- Add support for different HTTP methods (POST, PUT, DELETE)
- Implement middleware handling
- Add support for API routes
- Add support for multiple layouts
- Add static file serving

## License

MIT
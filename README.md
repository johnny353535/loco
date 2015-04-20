# Loco
A location-based communication service that utilizes isomorphism in web applications. Views are pre-rendered on the server and run in the client.

`(C) Jonas Hartweg, 2015`

## Setup

Install:
- Node.js
- Webpack

Preparation:

1. Setup project via `npm install`.
2. Run `webpack --progress --colors --watch` at root to build server.js and client.js.

Execution:
3. Run `python static-server.py` to start the static file server.
4. Run `node api` to start the API server.
5. Run `node server` to start the webserver.
6. Navigate to http://localhost:3000/ to access Loco.

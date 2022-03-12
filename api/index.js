/*
 * This file is the entry point for the server.
 */
const app = require("./app");

const port = 8080;

// Instruct app to listen.
app.listen(port, () => {
    console.log(`API is listening to port ${port}`)
});
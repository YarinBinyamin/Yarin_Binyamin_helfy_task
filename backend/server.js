require("dotenv").config();
const app = require("./app");
const PORT = 4000;
app.listen( PORT , () => {
    console.log(`the server running on http://localhost:${PORT}`);
});
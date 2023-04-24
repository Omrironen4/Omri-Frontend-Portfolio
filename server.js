const express = require("express");
const path = require("path");

const app = express();

// Serve the static PDF file
app.use(express.static(path.join(__dirname, "public")));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Server running on port ${port}`);
});

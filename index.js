import express from "express";

//new server
const app = express();
const port = 3000;

app.listen(3000, () => console.log(`Server is running on port ${port}.`));

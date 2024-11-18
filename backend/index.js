const connectToMongo = require('./db');
const path = require('path');
const express = require('express');
var cors = require('cors');
connectToMongo();
const app = express();
app.use(cors());

const __dirname = path.resolve();
const port = 2000;
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/expenses', require('./routes/expense'));

app.use(express.static(path.join(__dirname, "/Frontend/dist")));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
const app = require("./app");
const cors = require("cors");

const PORT = process.env.PORT || 4000;

app.use(cors());

app.get("/", (req, res) => { 
    res.json("Hi all Good");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

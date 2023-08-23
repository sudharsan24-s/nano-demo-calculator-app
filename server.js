const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const baseUrl = '/calculator'
app.use(express.json());
const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello World!');
    return res.send('');
});

baseRouter.post('/add', (req, res) => {
    const { first, second } = req.body;
    res.json({ "result": first + second });
    res.json({ "": null });
});


baseRouter.post('/subtract', (req, res) => {
    const { first, second } = req.body;
    res.json({ "result": first - second });
    res.json({ "": null });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});
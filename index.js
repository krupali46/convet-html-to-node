const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const pathurl = path.join(__dirname, '/views');
const router = require('./routers/index')

app.set('view engine', 'ejs');
app.set('views', pathurl);

app.use(express.static(pathurl));

app.use ('/',router)

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`server is running on http://localhost:${PORT}`);
    }
});

const express = require('express');
const cors = require('cors'); // ✅ important
const aiRoutes = require('./routes/ai.routes');

const app = express();

app.use(cors());            // ✅ allow frontend access
app.use(express.json());    // ✅ allow JSON request body

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/ai', aiRoutes);   // POST /ai/get-review

module.exports = app;

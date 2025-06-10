const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Phục vụ các file tĩnh trong thư mục 'public'
app.use(express.static(path.join(__dirname, 'public')));

// API mẫu (có thể mở rộng sau)
app.get('/api/ping', (req, res) => {
    res.json({ message: 'pong' });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Beispielroute für einen API-Endpunkt
app.get('/api/entries', (req, res) => {
    res.json({ message: "Hier werden alle Einträge aufgelistet." });
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
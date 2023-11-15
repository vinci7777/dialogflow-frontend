const express = require('express');
const cors = require('cors');
const path = require('path');
const {WebhookClient} = require('dialogflow-fulfillment');

const app = express();

app.use(cors());

// Ustawienie folderu publicznego jako miejsca na pliki statyczne
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
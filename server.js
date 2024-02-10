const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const { email, password } = req.body; // À nouveau, stocker des mots de passe en clair est dangereux.
    const data = `Email: ${email}, Mot de passe: ${password}\n`;
    
    fs.appendFile('data.txt', data, (err) => {
        if (err) {
            console.error('Impossible d'enregistrer les données.', err);
            res.status(500).send('Erreur lors de l'enregistrement des données.');
            return;
        }
        console.log('Données enregistrées avec succès.');
        res.status(200).json({message: 'Données enregistrées avec succès.'});
    });
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
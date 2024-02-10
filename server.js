const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const { email, password } = req.body; // � nouveau, stocker des mots de passe en clair est dangereux.
    const data = `Email: ${email}, Mot de passe: ${password}\n`;
    
    fs.appendFile('data.txt', data, (err) => {
        if (err) {
            console.error('Impossible d'enregistrer les donn�es.', err);
            res.status(500).send('Erreur lors de l'enregistrement des donn�es.');
            return;
        }
        console.log('Donn�es enregistr�es avec succ�s.');
        res.status(200).json({message: 'Donn�es enregistr�es avec succ�s.'});
    });
});

app.listen(port, () => {
    console.log(`Serveur d�marr� sur http://localhost:${port}`);
});
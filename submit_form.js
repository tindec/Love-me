function submitForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = { email, password };

    // Envoyer les données au serveur Node.js
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        alert('Informations soumises avec succès.');
    })
    .catch((error) => {
        console.error('Erreur:', error);
    });
}
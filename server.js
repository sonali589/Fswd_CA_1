const express = require('express');
const app = express();

app.get('/signup', (req, res) => {
    const { password, email } = req.query;

    if (email) {
        if (!email.includes('@') || !email.includes('.') || email.indexOf('@') > email.lastIndexOf('.')) {
            return res.send("Email cannot be empty");
        }
    }

    if (password) {
        if (password.length < 8) {
            return res.send("Password length should be greater than 8 or less than equal to 16");
        }
    }

    res.send("Signup successful!");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running live on http://localhost:${PORT}`);
});
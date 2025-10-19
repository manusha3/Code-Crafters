const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.json({ message: '🚀 Quick Park Server is working!' });
});

// Parking locations
app.get('/api/locations', (req, res) => {
    const locations = [
        {
            id: 1,
            name: 'Rajmundry Central Parking',
            address: 'Near GT Hospital, Rajmundry',
            total_slots: 50,
            available_slots: 35,
            rating: 4.2
        },
        {
            id: 2, 
            name: 'City Mall Parking',
            address: 'Godavari Bund Road, Rajmundry',
            total_slots: 80,
            available_slots: 60,
            rating: 4.5
        }
    ];
    res.json(locations);
});

// User login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    
    if (username === 'admin' && password === 'admin123') {
        res.json({
            token: 'test-token-123',
            user: {
                id: 1,
                username: 'admin',
                email: 'admin@quickpark.com'
            }
        });
    } else {
        res.status(400).json({ error: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log('🚀 Server started on http://localhost:' + PORT);
});

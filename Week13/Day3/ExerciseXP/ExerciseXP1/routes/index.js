const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({message : 'Welcome to the Home Page'})
});
router.get('/about', (req, res) => {
    res.status(200).json({message : 'Welcome to the About Page'})
});

module.exports = router
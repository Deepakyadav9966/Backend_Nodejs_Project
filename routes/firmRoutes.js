const express = require('express');
const firmController = require('../controllers/firmController');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

router.post('/add-firm',verifyToken,firmController.addFirm);

router.get('/uploads/:image-name', (req,res)=>{
    const imageName = req.params.imageName;
    req.headersSent('Conten-Type','image/jpeg');
    res.sendFile(Path.join(__dirname,'..','uploads',imageName))
})

router.delete('/:firmId',firmController.deleteFirmById)

module.exports = router;
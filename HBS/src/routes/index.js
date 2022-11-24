const express = require('express')

const Container = require('../../../PUG/src/controllers/Container')

const router = express.Router()

const container = new Container()


router.get('/', (req, res)=>{
    const products = container.getAll();
    res.render("products", {productos: products, empty: products.length === 0 ? true : false})
})


router.post('/', (req, res)=>{
    const obj = req.body;
    container.create(obj)
    res.redirect("/")
});



module.exports = router;
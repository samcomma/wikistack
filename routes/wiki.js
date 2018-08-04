const express = require('express');
const router = express.Router();
const { Page, User } = require('../models')
const { addPage, editPage, main, userList, userPages, wikiPage } = require('../views')

router.get('/', async (req,res,send) => {
    try {    
        const pages = await Page.findAll()
        res.send(main(pages))
    } catch(error) { next(error) }
})

router.post('/', async (req,res,next) => {
    const page = new Page(req.body)
    try {
        await page.save();
        res.redirect(`/wiki/${page.slug}`);
    } catch(error) { next(error) }
})

router.get('/add', (req,res,next) => {
    res.send(addPage())
})

router.get('/:slug', async (req, res, next) => {
    try {
        const page = await Page.findOne({
            where: {
                slug: req.params.slug
            }
        })
        res.send(wikiPage(page))

    } catch (error) { next(error)}
});


module.exports = router;

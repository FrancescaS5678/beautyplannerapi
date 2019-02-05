const express = require('express')
const router = express.Router()
const app = express()
const db = require('monk')('mongodb://admin:password1@ds042888.mlab.com:42888/beauty-planner')
const bodyParser = require('body-parser')
const port = 4001

const apparelCollection = db.get('apparel')
const tagCollection = db.get('tags')
const categoryCollection = db.get('categories')

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
   })

router.get('/apparel', async (req, res) => {
    try {
        const apparelList = await apparelCollection.find({})
        res.json(res.send(apparelList))
    } catch (err) {
        return
    }
})

router.get('/tags', async (req, res) => {
    try {
        const tagList = await tagCollection.find({})
        res.json(res.send(tagList))
    } catch (err) {
        return
    }
})

router.get('/categories', async (req, res) => {
    try {
        const categoryList = await categoryCollection.find({})
        res.json(res.send(categoryList))
    } catch (err) {
        return
    }
})

router.post('/apparel', async (req, res) => {
    try {
        const apparelList = await apparelCollection.insert(req.body)
        res.send(apparelList)
    } catch (err) {
        return
    }
})

router.post('/tags', async (req, res) => {
    try {
        const tagList = await tagCollection.insert(req.body)
        res.json(res.send(tagList))
    } catch (err) {
        return
    }
})

router.post('/category', async (req, res) => {
    try {
        const categoryList = await categoryCollection.insert(req.body)
        res.json(res.send(categoryList))
    } catch (err) {
        return
    }
})

router.put('/apparel', async (req, res) => {
    try {
        const apparelList = await apparelCollection.insert(req.body)
        res.send(apparelList)
    } catch (err) {
        return
    }
})

router.put('/tags', async (req, res) => {
    try {
        const tagList = await tagCollection.insert(req.body)
        res.json(res.send(tagList))
    } catch (err) {
        return
    }
})

router.put('/categories', async (req, res) => {
    try {
        const categoryList = await categoryCollection.insert(req.body)
        res.json(res.send(categoryList))
    } catch (err) {
        return
    }
})

router.delete('/apparel', async (req, res) => {
    try {
        const apparelList = await apparelCollection.remove(req.body)
        res.json(res.send(apparelList))
    } catch (err) {
        return
    }
})

router.delete('/tags', async (req, res) => {
    try {
        const tagList = await tagCollection.remove(req.body)
        res.json(res.send(tagList))
    } catch (err) {
        return
    }
})

router.delete('/categories', async (req, res) => {
    try {
        const categoryList = await categoryCollection.remove(req.body)
        res.json(res.send(categoryList))
    } catch (err) {
        return
    }
})

app.use(('/', router))

app.listen(port, () => console.log(`Beauty planner api listening on port ${port}!`))
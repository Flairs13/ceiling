const express = require ('express')
const {Router} = require ('express')
const router = Router ()
const config = require ('config')
const mongoose = require ('mongoose')
const bodyParser = require ("body-parser")
const path = require ('path')
const profileRoutes = require ("./routes/profile")
const accessoriesRoutes = require ('./routes/accessories')
const lightRouter = require ('./routes/light')
const constructionsRouter = require ('./routes/constructions')
const ledRouter = require ('./routes/led')
const consumablesRouter = require ('./routes/consumables')
const toolsRouter = require ('./routes/tools')
const additionalRouter = require ('./routes/additional')
const clothRouter = require ('./routes/cloth')


const app = express ()
app.use ('/uploads', express.static ('uploads'));


app.use(bodyParser.json())
app.use (bodyParser.urlencoded ({extended: true}));
app.use (
    '/api',
    require ('./routes/tape'),
    router,
    profileRoutes,
    accessoriesRoutes,
    lightRouter,
    constructionsRouter,
    ledRouter,
    consumablesRouter,
    toolsRouter,
    additionalRouter,
    clothRouter,
)

if (process.env.NODE_ENV === 'production') {
    app.use ('/', express.static (path.join (__dirname, 'client', 'build')))
    app.get ('*', (req, res) => {
        res.sendFile (path.resolve (__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = config.get ('port')


async function start () {
    try {
        await mongoose.connect (config.get ('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        app.listen (PORT, () => console.log (`App started on port${PORT}....`))
    } catch (e) {
        console.log ('Server Error', e.message)
        process.exit (1)
    }
}


start ()




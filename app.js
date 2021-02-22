const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const Profile = require('./models/profile')
const path = require('path')
const initRoutes = require("./routes/uploads");
const profileRoutes = require("./routes/profile")







const app = express()
initRoutes(app);




app.use('/uploads', express.static('./uploads'));





// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', require('./routes/tape'), profileRoutes)

if (process.env.NODE_ENV === 'production'){
    app.use('/', express.static(path.join(__dirname,'client', 'build')))
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

const PORT = config.get('port')


async function start(){
    try {
        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        app.listen(PORT, () => console.log(`App started on port${PORT}....`))
    } catch (e) {
        console.log ('Server Error', e.message)
        process.exit(1)
    }
}

start()

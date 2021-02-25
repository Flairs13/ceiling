const express = require('express')
const {Router} = require ('express')
const router = Router ()
const config = require('config')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const path = require('path')
const profileRoutes = require("./routes/profile")
const multer = require ('multer');
const uploadController = require("./Controllers/profileController");


const storage = multer.diskStorage ({
                                        destination: function (req, file, cb) {
                                            cb (null,  './uploads');
                                        },
                                        filename: function (req, file, cb) {
                                            cb (null, file.originalname);
                                        }
                                    });

const uploadImg = multer ({
                              storage: storage,
                              limits : {fileSize : 1000000}
})
    .single ('image');




const app = express()
app.use('/uploads', express.static('uploads'));



// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', require('./routes/tape'),router, profileRoutes)

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

router.post('/uploads',uploadImg, uploadController.newProfile)


start()




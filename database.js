const mongoose = require("mongoose")

const connectDB = async ()=> {
    try {
        await mongoose.connect('mongodb+srv://lucas:lucas@cluster0.pw2uxb9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
            useNewUrlParser: true,
            useUnifiedTopology: true
    })
    console.log('mongodb conectado com sucesso')
    }
    catch (error) {
        console.error('conexão com o mongo db zoada: ', error.message)
        process.exit(1)
    }
}

module.exports = connectDB;
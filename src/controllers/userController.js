const userRepositories = require('../repositories/userRepositories');
require('dotenv').config();
const jsonwebtoken = require('jsonwebtoken')
const { user } = require('../../src/autentication/auth');


exports.createUser = async (req, res) => {
    try {
        const user = await userRepositories.create(req.body);
        res.status(201).json(user)
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
}

exports.getAllUsers = async (req, res) => {
    try{
        console.log(req.params)
        const users = await userRepositories.findAll();
        res.status(200).json(users);
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
}

exports.getById = async (req, res) => {
    try {
        const user = await userRepositories.findById(req.params.id);
        res.status(200).json(user);
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await userRepositories.updateById(req.params.id, req.body);
        res.status(200).json(user);
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const deleteUsers = await userRepositories.deleteById(req.params.id);
        res.status(200).json({message: "Usuario deletado com sucesso"});
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
}


exports.authUser = async (req, res, next) => {

    const PRIVATE_KEY = process.env.PRIVATE_KEY;
    const hash = req.headers.authorization
    const [email, password] = Buffer.from(hash, 'base64').toString().split(':');

    try {
        const correctPassword = email === 'lucas' && password === '123';

        if (!correctPassword) {
            return res.status(401).json({ message: 'Email ou senha inválidos' });
        }

        const token = jsonwebtoken.sign(
            { user: JSON.stringify(user)},
            PRIVATE_KEY,
            { expiresIn: '1h' }
        );

        return res.status(200).json({ data: { user, token} });
    }
    catch (error) {
        return res.send(error);
    }
}

exports.privateUser = async (req, res) => {
    const { user } = req.headers;
    const currentUser = JSON.parse(user);
    return res.status(200).json({ 
        message: `Bem vindo ${currentUser.name}`,
        userLogged: currentUser
     });
}

// exports.getAllUsers = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };


// exports.createUser = async (req, res) => {
//     const user = new User({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//     });
//     try {
//         const savedUser = await user.save();
//         res.status(201).json(savedUser);
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// exports.updateUser = async (req, res) => {
//     try {
//         const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.status(200).json(updateUser);
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// exports.deleteUser = async (req, res) => {
//     try {
//         const deleteUser = await User.findByIdAndDelete(req.params.id);
//         res.status(200).json({message: "Usuario deletado com sucesso"});
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };


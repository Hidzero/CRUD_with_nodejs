const User = require('../src/routes/models/User');
const UserRepository = require("../repositories/userRepositories");
const userRepositories = require('../repositories/userRepositories');

exports.createUser = async (req, res) => {
    try {
        const user = await userRepositories.create(req.body);
        res.status(201).json(user)
    }
    catch {
        res.status(400).json({ message: error.message})
    }
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


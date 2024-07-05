import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
    try {
        //  users = response 
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
       console.log(error.message)
    }
}

export const getUsersById = async (req, res) => {
    try {
        //  users = response 
        const response = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
       console.log(error.message)
    }
}

export const createUser = async (req, res) => {
    try {
        //  users = response 
        await User.create(req.body);
        res.status(201).json({msg: "User created successfully"});
    } catch (error) {
       console.log(error.message)
    }
}

export const updateUser = async (req, res) => {
    try {
        //  users = response 
        await User.update(req.body, {
            where: {
                id: req.params.id
            }    
        });
        res.status(200).json({msg: "User Updated successfully"});
    } catch (error) {
       console.log(error.message)
    }
}

export const deleteUser = async (req, res) => {
    try {
        //  users = response 
        await User.destroy({
            where: {
                id: req.params.id
            }    
        });
        res.status(200).json({msg: "User Deleted successfully"});
    } catch (error) {
       console.log(error.message)
    }
}


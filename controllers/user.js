import {User} from "../models/user.js";

export const getAllUsers = async (req,res)=>{

    const users = await User.find({});

    res.status(201).json({
        success: true,
        users,
    });
}; 

export const AddNewUser = async (req,res)=>{

    const {name, email, password} = req.body;

    await User.create({
        name,
        email,
        password });

    res.json({
        success: true,
        message: "Registered Successfully",
    });
};

export const getUserDetails = async (req,res) => {
    const {id} = req.params;
    const user = await User.findById(id);

    res.json({
        success: true,
        message: "ok",
        user,
    });
};

export const updateUser = async (req,res) => {
    const {id} = req.params;
    const user = await User.findById(id);

    res.json({
        success: true,
        message: "Updated",
    });
};

export const deleteUser = async (req,res) => {
    const {id} = req.params;
    const user = await User.findById(id);
    
   // await user.remove(),

    res.json({
        success: true,
        message: "Deleted",
    });
};
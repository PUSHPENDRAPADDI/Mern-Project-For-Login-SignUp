const UserDetails = require("../model/UserrDetails");
const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken')
// Add New product

const JWT_SECRET = 'Sunnyisagood$oy'

const user_create = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let preUser = await UserDetails.findOne({ email: req.body.email })
        if (!preUser) {
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);
            console.log("This is here");
            preUser = await UserDetails.create({
                id: req.body.id,
                name: req.body.name,
                email: req.body.email,
                password: secPass,
                secretQuestion: req.body.secretQuestion,
                role: req.body.role
            })
            const data = {
                preUser: {
                    id: preUser.id
                }
            }
            const authoken = jwt.sign(data, JWT_SECRET);
            res.status(200).json({ authoken, massage: "Account is Created Successfully" })
        } else {
            return res.status(400).json({ error: "This Email is already exist" })
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error")
    }
}

const user_forgot_pass = async (req, res) => {
    // const userDetail = new UserDetails({
    //     id: req.body.id,
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password,
    //     secretQuestion: req.body.secretQuestion,
    // });
    try {
        const preUser = await UserDetails.findOne({ email: req.body.email })
        if (preUser) {
            if (preUser.secretQuestion === req.body.secretQuestion) {
                res.status(200).json({ ...preUser, massage: "Email Found" })
            }
            // const updatedUsers = await UserDetails.findOneAndUpdate(
            //     { email: req.body.email },
            //     preUser = await UserDetails.create({
            //         id: req.body.id,
            //         name: req.body.name,
            //         email: req.body.email,
            //         password: secPass,
            //         secretQuestion: req.body.secretQuestion,
            //         role: req.body.role
            //     }),
            //     { new: true }, function (err, doc) {
            //         console.log(req.body.email, "This is here");
            //         if (err) {
            //             console.log(err);
            //             res.status(500).send('Error updating data');
            //         } else {
            //             res.status(200).send('Data updated successfully');
            //         }
            //     }
            // );
        } else {
            res.status(400).json({ massage: "Account Not found" })
        }
    } catch (error) {
        res.status(400).send(error);
    }
}

const user_login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await UserDetails.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: "This email is not registred please register first" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please enter corect password" });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authoken = jwt.sign(data, JWT_SECRET);
        res.json({ authoken, massage: "Login successfully" })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error")
    }
}

module.exports = {
    user_create,
    user_forgot_pass,
    user_login
}
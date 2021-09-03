// // Write your "projects" router here!
// const express = require("express");
// //import middleware here
// const Projects = require("./projects-model");
// const router = express.Router();
//
// //Array of projects
// router.get("/", (req, res) => {
//     Projects.get()
//         .then(projects=>{ res.status(200).json(projects); })
//         .catch();
// });

const express = require('express');
const {validateId} = require("projects-middleware");
const Projects = require('./projects-model')

const router = express.Router();
//Get projects1
router.get('/', (req, res, next) => {
    Projects.get()
        .then(projects =>{
            res.status(200).json(projects)
        })
        .catch(next)
})

//Project with given id
router.get("/:id", validateId,(req,res) => {
    res.json(req.projects);
})

//Returns the newly created project as the body
router.post("/", (req,res) => {
    console.log("CREATED PROJECT");
})

router.put("/:id", (req,res) => {
    console.log("UPDATED PROJECT");
})

router.delete("/:id", (req,res) => {
    console.log("DELETED PROJECT");
})

router.get("/:id/actions", (req,res) => {
    console.log("DELETED PROJECT");
})

module.exports = router;
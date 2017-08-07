const express = require('express');
const router = express.Router();
// const request = require('request');
// const _ = require('lodash');
const { mongoose } = require('./../db/mongoose');
// const { Wait } = require('./../models/waitlister');
// const { Announce } = require('./../models/announce');
// const { ObjectID } = require('mongodb');

//add waitlister
// router.post('/waitlisters', (req, res) => {
//     let waiter = new Wait(req.body);
//     waiter.save().then((item) => {
//         res.status(200).send(item);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// });

//get all waitlisters
// router.get('/waitlisters', (req, res) => {
//     Wait.find().then((person) => {
//         if (!person.length) {
//             return res.status(404).send();
//         }
//         res.status(200).send(person);
//     }).catch((e) => {
//         res.status(400).send(e);
//     });
// });

//delete waitlisters
// router.delete('/waitlisters/:id', (req, res) => {
//     Wait.findById(req.params.id, (err, person) => {
//         if (err) {
//             return res.status(500).json({
//                 title: 'An error occurred',
//                 error: err
//             });
//         }
//         if (!person) {
//             return res.status(500).json({
//                 title: 'Waitlisted person not found',
//                 error: err
//             })
//         }
//         person.remove((err, result) => {
//             if(err) {
//                 return res.status(500).json({
//                     title: 'An error occurred',
//                     error: err
//                 });
//             }
//             res.status(200).json({
//                 message: 'Waitlister successfully deleted',
//                 obj: result
//             });
//         });
//     });
// });

//get announcement
// router.get('/announce', (req, res) => {
//     Announce.find().then((ann) => {
//         if (!ann) {
//             return res.status(404).send();
//         }
//         res.status(200).send(ann);
//     }).catch((e) => {
//         res.status(400).send(e);
//     });
// });

//update announcement
// router.patch('/announce', (req, res) => {
//     Announce.findById('58e2a2ebfaaddb41ca3df840', (err, ann) => {
//         if (err) {
//             return res.status(500).json({
//                 title: 'An error occurred',
//                 error: err
//             });
//         }
//         if (!ann) {
//             return res.status(500).json({
//                 title: 'announcement not found',
//                 error: err
//             })
//         }
//         ann.text = req.body.announce
//         ann.save((err, result) => {
//             if(err) {
//                 return res.status(500).json({
//                     title: 'An error occurred',
//                     error: err
//                 });
//             }
//             res.status(200).json({
//                 message: 'Announcement successfully updated!',
//                 obj: result
//             });
//         });
//     })
// });

module.exports = router;

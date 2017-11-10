const express = require('express');
const router = express.Router();
const request = require('request');
// const _ = require('lodash');
// const { mongoose } = require('./../db/mongoose');
// const { Wait } = require('./../models/waitlister');
// const { Announce } = require('./../models/announce');
// const { ObjectID } = require('mongodb');

// CORS
var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
    var cors = require('cors');
    var whitelist = [
        'http://localhost:3000',
        'http://localhost:4200',
        'https://joshsummerhays.com',
        'http://joshsummerhays.com'
    ];
    var corsOptions = {
        // exposedHeaders: ['x-auth'],
        // origin: function (origin, callback) {
        //     if (whitelist.indexOf(origin) !== -1) {
        //         callback(null, true)
        //     } else {
        //         callback(new Error('Not allowed by CORS'))
        //     }
        // },
        origin: '*',
        credentials: true
    }
    router.all('*', cors(corsOptions));
}

//get codeWars info
router.get('/codewars', (req, res) => {
    let options = {
        uri: `https://www.codewars.com/api/v1/users/joshSummerhays?access_key=${process.env.GET_USER_CODEWARS}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        agentOptions: {
            rejectUnauthorized: false
        },
        body: JSON.stringify(req.body)
    };
    return request(options, function (err, result, body) {
        if(result.statusCode === 200){
            res.status(200).send(body);
        } else {
            res.status(401).send({'e': body});
        }
    });
});

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

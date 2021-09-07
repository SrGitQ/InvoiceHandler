const { body, validationResult } = require("express-validator");
var Item = require("../models/item")

var async = require('async');

exports.req_get = function ( req, res ){
    res.render('index', {title:'Invoice Handler', item_list:[]})
};

exports.req_post = [
    body('search', 'empty field.').trim().isLength({ min: 1 }).escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        var search = req.body.search
        Item.find({article:{$regex:search}})
            .exec(function(err, list_items){
                if (err) {return next(err)}
                res.render('index', {title:"Invoice Handler", item_list: list_items})
            })
    }
]


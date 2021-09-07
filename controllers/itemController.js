const { body, validationResult } = require("express-validator");
var Item = require("../models/item")

exports.item_create_get = function ( req, res ){
    res.render('additem', {title:'Create item'})
};

exports.item_create_post = [
    body('name', 'Name must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('partida', 'Partida must not be empty.').trim().isLength({ min: 1 }).escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        
        var item = new Item(
            { 
                article: req.body.name,
                partida: req.body.partida
            }
        )
        if ( !errors.isEmpty() ){
            console.log("loco no!")
        } else {
            item.save( function (err) {
                if ( err ) { return next(err)}
                res.redirect('/')
            }) 
        }
    }
]
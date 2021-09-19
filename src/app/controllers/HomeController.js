const Items = require('../models/items');
const Users = require('../models/users');
class HomeController {
    index(req, res, next) {

       res.render('home', {
           style: 'home.css',
           scripts: 'home.js',
       });
        // Users.find()
        //     .then(items => res.json(items))
        //     .catch(next);
    }
}

module.exports = new HomeController;
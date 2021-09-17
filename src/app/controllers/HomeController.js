const Items = require('../models/items');
class HomeController {
    index(req, res, next) {

        res.render('home');
        // Items.find()
        //     .then(items => res.json(items))
        //     .catch(next);
    }
}

module.exports = new HomeController;
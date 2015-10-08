const slug = require('slug');


module.exports = {

    slugged(text){
        return slug(text, {lower: true});
    }

};
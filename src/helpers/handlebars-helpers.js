const slug = require('slug');


module.exports = {

    slugged(text){
        return slug(text, {lower: true});
    },

    this_year(){
        return new Date().getFullYear();
    }

};
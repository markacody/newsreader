var controller = require('./controller/controller');

module.exports = function(app){
    //main routes
    app.get('/', controller.Index);
    
};
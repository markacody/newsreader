var config = {
    

 
    development: {
 
        application: {
            port: 1337
        }
    },
    production: {
 
        application: {
            port: 80
        }    
    }
};
 
config.environment = 'development';
 
module.exports = config;

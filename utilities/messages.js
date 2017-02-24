exports.UserNotifications = function(request, response, next) {
     
    response.pageInfo = {};
    response.pageInfo.notifications = {};
    response.pageInfo.notifications.message = '';
    
    if(request.param('message')) {
        response.pageInfo.notifications.message = request.param('message'); 
    }

 
    if(request.param('success')) {
        response.pageInfo.notifications.success = "The operation was successful."
    }
    else if (request.param('error')){
        response.pageInfo.notifications.error = "An error occured. Please try again."
    }
     
    next();
     
};

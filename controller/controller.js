exports.Index = function(request, response){
    response.pageInfo = {};
    response.pageInfo.title = "Newsreader";
    response.render("./index", response.pageInfo);
};


const
    express 	= require('express'),
    path 		= require('path'),
    adminRoutes = require(path.resolve('./config/admin_router')),
    matchRoute 	= require(path.resolve('./config/matchRoute')),
    database	= require(path.resolve('./config/database'));
    router 		= express.Router(),
    // expressJWT 	= require('express-jwt'), //to add jwt
    // config 		= require(require(path.resolve('./env/')).getEnv),
    admin 		= express.Router();
    const expressJWT 	= require('express-jwt');
    
   

admin.use(expressJWT({
	secret: new Buffer(database.secret).toString('base64'),
}).unless({
	path:[
		'/adminapi/user/login',
		'/adminapi/user/sign',
        
	]
}));

adminRoutes.routes.forEach(x => matchRoute(admin, x));


module.exports = {
    admin: admin
};

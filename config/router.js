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
    
    // router.use(expressJWT({
    //     secret: database.secret
    // }).unless({
    //     path:[
    //         '/posts/paginate',
    //         '/users/login',
    //         'adminapi/user/sign',
    //         '/favicon.ico'
    //     ]
    // }));

adminRoutes.routes.forEach(x => matchRoute(admin, x));



module.exports = {
    router: router,
    admin: admin
};

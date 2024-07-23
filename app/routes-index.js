const CONFIG = require('../config/config.js');

module.exports = {
    v1routes: function (app) {
        app.use(`${CONFIG.BASEURL}/auth`, require('./auth/auth.route'));
        app.use(`${CONFIG.BASEURL}/user`,require("./user/user.route"));
        app.use(`${CONFIG.BASEURL}/company`,require("./company/company.router")); 
        app.use(`${CONFIG.BASEURL}/account`,require("./accounts/account.route.js")); 
        app.use(`${CONFIG.BASEURL}/job`,require("./job/job.router.js"))
    }
};

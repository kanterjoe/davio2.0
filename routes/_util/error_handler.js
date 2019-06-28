const express_error_handler = (err, req,res,next) => {
    if (res.headersSent) {
        return next(err)
    }
    err = typeof err === 'string'? {message: err} : err; //if all we get is a string, then that string is the message
    const message = err.message || err.Error || err.error;
    if (process.env.NODE_ENV !== 'production') {
        const chalk = require('chalk');
        console.error(chalk.white.bgRed("Default Error Handler:" + message));
    }
    res.status(err.status || 500).json({success:false, error:message, ...err});
};

module.exports = express_error_handler;
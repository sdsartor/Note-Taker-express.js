const middle = (req, res, next) => {
    const green = '\x1b[36m';
    switch (req.method) {
        case 'GET': {
            console.info(`${green}${req.method} request to ${req.path}`);
            break;
        }
        case 'POST': {
            console.info(`${green}${req.method} request to ${req.path}`);
            break;
        }
        default:
            console.log(`${green}${req.method} request to ${req.path}`);
    }

    next();
};

exports.middle = middle
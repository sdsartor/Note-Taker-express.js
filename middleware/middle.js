// Const middle allows for the data printed in the terminal to be a specific color and also helps to make it look more presentable.
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
// This exports the code from the middle constant.
exports.middle = middle
// exxpress.router in route folder
// fetch get  
// apiroute htmlroute
// helpers fsutil.js
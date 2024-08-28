// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// };

// module.exports = logger;


const logger = (req, res, next) => {
    const start = Date.now(); // Track start time

    // Capture the original send function
    const originalSend = res.send;

    // Override the res.send function to log the status code
    res.send = function (body) {
        const duration = Date.now() - start;
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} ${res.statusCode} ${duration}ms`);
        originalSend.call(this, body); // Call the original send function
    };

    // Call the next middleware or route handler
    next();
};

module.exports = logger;

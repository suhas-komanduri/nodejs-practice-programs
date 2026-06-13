// Importing custom modules
const { getCurrentDate, formatCurrency } = require('./utils');
const Logger = require('./logger');

// Create a logger instance
const logger = new Logger('App');

// Create Server
const server = http.createServer((req, res) => {
    try {
        logger.log(`Request received for ${req.url}`);

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<h1>Welcome to our app!</h1>`);
        res.write(`<p>Current Date: ${getCurrentDate()}</p>`);
        res.write(`<p>Formatted Amount: ${formatCurrency(99.99)}</p>`);
        res.end;
    } catch (error) {
        logger.error (error);
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end('Internal Server Error');
    }
});

// Start Server
const PORT = process.env.port || 3000;
server.listen(PORT, () => {
    logger.log(`Server running at http://localhost:${PORT}`);
});
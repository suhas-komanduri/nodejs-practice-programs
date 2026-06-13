// Exporting multiple functions
const getCurrentDate = () => new Date().toISOString();

const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency'
    }).format(amount);
};

exports.getCurrentDate = getCurrentDate;
exports.formatCurrency = formatCurrency;

class Logger {
    constructor(name) {
        this.name = name;
    }

    log(message) {
        console.log(`[${this.name}] ${message}`);
    }

    error(error) {
        console.error(`[${this.name}] ERROR: `, error.message);
    }
}
module.exports = Logger;

const http = require('http');
const path = require('path');

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
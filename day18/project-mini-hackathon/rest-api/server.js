// server.js

// by RazmanR  
// by RazmanR, Team3 date 14/1/24
// minihackathon assignment-
//  mobile phone gagdet web app


// server define

// like import
const http = require('http');
const app = require('./app');

// defines
const port = process.env.PORT || 3001; //3000
//port 3000;

const server = http.createServer(app);
server.listen(port);


const fs = require('fs');

function logToFile(logMessage) {
  const timestamp = new Date().toLocaleString();
  const logEntry = `${timestamp} ${logMessage}\n`;

  fs.appendFile('log.txt', logEntry, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Entry added:', logEntry);
    }
  });
}

logToFile('Sample log message 1');
logToFile('Sample log message 2');
logToFile('Sample log message 3');
logToFile('Sample log message 4');
logToFile('Sample log message 5');
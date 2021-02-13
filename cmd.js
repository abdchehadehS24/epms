const { exec } = require("child_process");

const lineReader = require('line-reader');

lineReader.eachLine('./models.js', function(line) {
    console.log(line);
});

lineReader.eachLine('./models.js', function(line) {
    console.log(line);

    //execute each command
    exec(line, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    //
    if (line.includes('STOP') ){
        return false; // stop reading
    }
});


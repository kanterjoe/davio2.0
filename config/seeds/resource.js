const fs = require('fs');

const resourceFiles = fs.readdirSync(__dirname + '/../../resources/');
module.exports = resourceFiles.map(file => ({
    name: file,
    type: "audio",
    notes: "Auto-added from seed",
    location: './resources/'+file
}))
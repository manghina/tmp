const appJson = require("./app.json");
const fs = require("fs");
const path = require("path");

// Increment the build number
appJson.expo.ios.buildNumber = (
  parseInt(appJson.expo.ios.buildNumber) + 1
).toString();

// Write the file back
fs.writeFileSync(
  path.resolve(__dirname, "app.json"),
  JSON.stringify(appJson, null, 2),
);

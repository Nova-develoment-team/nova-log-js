const { red, green, grey, blue, yellow, black, bold } = require("chalk");
const chalk = require('chalk')
const dayjs = require("dayjs");
const fs = require("fs");
const formatted = dayjs().format("YYYY-MM-DD H:m:s");
var folderName = "./logs"
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}

const debug = function (text) {
  console.debug(
    `${grey(`${formatted}`)} || ${chalk.bgBlue("[ DEBUG ]")} ${grey(" :: ")} ${green(
      `${text}`
    )}`
  );
  fs.readFile("./logs/debug.log", "utf8", (err, data) => {
    var abc = fs.createWriteStream(`./logs/debug.log`);
    abc.write(`${data} \n`);
    abc.write(`${formatted} || [ DEBUG ] :: ${text} \n`);
    abc.write(
      "< - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - > \n"
    );
    abc.end();
  });
};

const error = function (text) {
  console.error(
    `${black(`${formatted} ||`)} ${chalk.bgRed("[ ERROR ]")} ${grey(" :: ")} ${red(
      `${text}`
    )}`
  );
  fs.readFile("./logs/error.log", "utf8", (err, data) => {
    var abc = fs.createWriteStream(`./logs/error.log`);
    abc.write(`${data} \n`);
    abc.write(`${formatted} || [ ERROR ] :: ${text} \n`);
    abc.write(
      "< - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - > \n"
    );
    abc.end();
  });
};

const warn = function (text) {
  console.warn(
    `${black(`${formatted} ||`)} ${chalk.bgYellow("[ WARNING ]")} ${grey(
      " :: "
    )} ${yellow(`${text}`)}`
  );
  fs.readFile("./logs/warnings.log", "utf8", (err, data) => {
    var abc = fs.createWriteStream(`./logs/warning.log`);
    abc.write(`${data} \n`);
    abc.write(`${formatted} || [ WARNING ] :: ${text} \n`);
    abc.write(
      "< - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - > \n"
    );
    abc.end();
  });
};

module.exports = {
  debug,
  error,
  warn,
};

/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-rest-params */
/* eslint-disable guard-for-in */
const chalk = require('chalk');
const { getCurrentTime } = require('./utils');

const LOG = 'log';
const INFO = 'info';
const ERROR = 'error';
const WARN = 'warn';

const COLOR = {
  ORANGE: '#FF5733',
  STRING: '#E5FFEA',
};

const normalize = (value) => {
  switch (typeof (value)) {
    case 'string':
      return ` ${chalk.hex(COLOR.STRING)(value)}`;
    case 'object':
      if (Array.isArray(value)) {
        const s = JSON.stringify(value).split(',').join(', ');

        return ` ${chalk.green(s[0])}${s.slice(1, s.length - 1)}${chalk.green(s[s.length - 1])}`;
      }
      return `\n${JSON.stringify(value, null, 2)}`;
    case 'boolean':
      return ` ${chalk.hex('#cf0073')(value)}`;
    case 'symbol':
      return ` ${chalk.hex('#cf5c00')(value)}`;
    case 'number':
      return ` ${chalk.hex('#00cfc4')(value)}`;
    default:
      break;
  }
  return ` ${value}`;
};

const enhanceConsole = (method) => {
  const oldMethod = console[method].bind(console);
  return function () {
    let logString = '';

    if (method === LOG) {
      logString += chalk.bgBlueBright(chalk.black('[Log]'));
    } else if (method === ERROR) {
      logString += chalk.bgRedBright(chalk.black('[Error]'));
    } else if (method === INFO) {
      logString += chalk.bgYellowBright(chalk.black('[Info]'));
    } else if (method === WARN) {
      logString += chalk.bgHex(COLOR.ORANGE)(chalk.black('[Warn]'));
    }

    for (const i in arguments) {
      const v = arguments[i];
      logString += `${normalize(v)}`;
    }

    oldMethod.apply(
      console,
      [chalk.bgWhite(chalk.black(`[${getCurrentTime()}]`))].concat(logString),
    );
  };
};

let l; let e; let i; let w;
[LOG, INFO, WARN, ERROR].forEach((method) => {
  const newLog = enhanceConsole(method);
  switch (method) {
    case LOG:
      l = newLog;
      break;
    case INFO:
      i = newLog;
      break;
    case WARN:
      w = newLog;
      break;
    case ERROR:
      e = newLog;
      break;
    default:
      l = newLog;
  }
});

const apply = () => {
  console[LOG] = l;
  console[INFO] = i;
  console[WARN] = w;
  console[ERROR] = e;
};

module.exports = {
  l, e, i, w, apply,
};

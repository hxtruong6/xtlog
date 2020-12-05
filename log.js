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
  ORANGE: '#EE7000',
};

const normalize = (value) => {
  switch (typeof (value)) {
    case 'string':
      return ` ${value}`;
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
  switch (method) {
    case LOG:
      l = enhanceConsole(method);
      break;
    case INFO:
      i = enhanceConsole(method);
      break;
    case WARN:
      w = enhanceConsole(method);
      break;
    case ERROR:
      e = enhanceConsole(method);
      break;
    default:
      l = enhanceConsole(method);
  }
});

module.exports = {
  l, e, i, w,
};

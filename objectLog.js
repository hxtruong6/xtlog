const chalk = require("chalk");
const { COLOR } = require("./variables");

const colorKeyObj = (logValue) => {
    const regex = /"[A-Za-z_\d]+":/g;
    return logValue.replace(regex, (v) => `${v[0]}${chalk.hex(COLOR.KEYS)(v.slice(1, v.length - 2))}${v[v.length - 2]}${chalk.hex(COLOR.COLON_KEYS)(v[v.length - 1])}`)
}

const colorNumObj = (logValue) => {
    const regex = / \d+/g;
    return logValue.replace(regex, (v) => `${chalk.hex(COLOR.NUMBER)(v)}`)
}

const colorBracesObj = (logValue) => {
    const regex = /{|}/g;
    return logValue.replace(regex, (v) => `${chalk.hex(COLOR.BRACES)(v)}`)
}

const colorSquareBracesObj = (logValue) => {
    const regex = /\s\[|\]/g;
    return logValue.replace(regex, (v) => `${chalk.hex(COLOR.SQUARE_BRACKETS)(v)}`)
}

const colorDoubleQuotationMarkObj = (logValue) => {
    return logValue.replace(/"/g, (v) => `${chalk.hex(COLOR.ORANGE)(v)}`)
}


const handleObjectLog = (logValue) => {
    let strLog = JSON.stringify(logValue, null, 4);
    strLog = `\n${strLog}`
    strLog = colorNumObj(strLog)
    strLog = colorKeyObj(strLog)
    strLog = colorBracesObj(strLog)
    strLog = colorSquareBracesObj(strLog)
    strLog = colorDoubleQuotationMarkObj(strLog)

    return strLog
}



module.exports = handleObjectLog;
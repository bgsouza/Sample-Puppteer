require('dotenv').config();
//const publicIp = require('public-ip');
const request = require('request');
const { MonitorCategoria } = require('./bin/monitor');

function main() {
  let monitor = new MonitorCategoria();
  monitor.init();
  return;
}

main();
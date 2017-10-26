'use strict';

var webpack = require('webpack');
var path = require('path');
var chalk = require('chalk');
var progress = require('progress');
var objectAssign = require('object-assign');

var messageTemplate = [':bar', chalk.green(':percent'), ':msg'].join(' ');
var progressOptions = {
  complete: chalk.bgGreen(' '),
  incomplete: chalk.bgWhite(' '),
  width: 40,
  total: 100,
  clear: false
};

function SimpleProgressPlugin(options) {
  if (!process.stderr.isTTY) {
    return function () {};
  }

  if (options) {
    messageTemplate = options.messageTemplate || messageTemplate;
    progressOptions = objectAssign(progressOptions, options.progressOptions);
  }

  var progressBar = new progress(messageTemplate, progressOptions);

  return new webpack.ProgressPlugin(function(percentage, msg) {
    progressBar.update(percentage, { msg: msg });
  });
}

module.exports = SimpleProgressPlugin;

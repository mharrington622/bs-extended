"use strict";

var browserSync = require("browser-sync").create(),
	path = require("path"),
	extend = require("extend"),
	args = require('minimist')(process.argv.slice(2)),
	bsConfigName = args.config || 'bs-config',
	bsConfigPath = path.resolve(bsConfigName),
	options = require(bsConfigPath) || {};

console.log("bs-config: " + bsConfigPath);

//	Don't need to extend these properties.
delete args.config;
delete args._;

//	Merge the config with our options.
extend(true, options, args);

//	Start browser-sync.
browserSync.init(options);
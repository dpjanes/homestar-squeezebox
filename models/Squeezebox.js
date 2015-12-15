/*
 *  Squeezebox.js
 *
 *  David Janes
 *  IOTDB
 *  2015-12-14
 */

var iotdb = require("iotdb");

exports.Model = iotdb.make_model('Squeezebox')
    .facet(":media")
    .name("Squeezebox")
    .description("Logitech Squeezebox")
    .io("on", iotdb.boolean.on)
    .make();

exports.binding = {
    bridge: require('../SqueezeboxBridge').Bridge,
    model: exports.Model,
};

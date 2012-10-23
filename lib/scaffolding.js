var html = require("html-helpers"),
    util = html.util;

/**
 * Return a .container opening tag
 *
 * Options:
 *  - class: user-defined class names (appended to generated list)
 *  - fluid: use `container-fluid` instead of `container` class
 *  - tag:   the tag name (default: `div`)
 *
 * @param {Object} attr  Additional options and/or HTML attributes
 * @return {String}
 */
exports.container = function (attr) {
    attr = attr || Object.create(null);

    var opts = util.extract(attr, [ "class", "fluid", "tag" ], { tag: "div" }),
        cls  = [ opts.fluid ? "container-fluid" : "container" ];

    if (opts["class"]) cls.push(opts["class"]);
    attr["class"] = cls.join(" ");

    return html.tag.open(opts.tag, attr);
};

/**
 * Return a .row opening tag
 *
 * Options:
 *  - class: user-defined class names (appended to generated list)
 *  - fluid: use `row-fluid` instead of `row` class
 *  - tag:   the tag name (default: `div`)
 *
 * @param {Object} attr  Additional options and/or HTML attributes
 * @return {String}
 */
exports.row = function (attr) {
    attr = attr || Object.create(null);

    var opts = util.extract(attr, [ "fluid", "class", "tag" ], { tag: "div" }),
        cls  = [ opts.fluid ? "row-fluid" : "row" ];

    if (opts["class"]) cls.push(opts["class"]);
    attr["class"] = cls.join(" ");

    return html.tag.open(opts.tag, attr);
};

/**
 * Return a .span{size} opening tag
 *
 * Options:
 *  - class:  user-defined class names (appended to generated list)
 *  - offset: include an `offset{offset}` class
 *  - tag:    the tag name (default: `div`)
 *
 * @param {Number} span  A number (usually between 1 and 12) for the span size
 * @param {Object} attr  Additional options and/or HTML attributes
 * @return {String}
 */
exports.col = exports.column = function (span, attr) {
    attr = attr || Object.create(null);

    var opts = util.extract(attr, [ "class", "offset", "tag" ], { tag: "div" }),
        cls = [ "span" + span ];

    if (opts.offset)   cls.push("offset" + opts.offset);
    if (opts["class"]) cls.push(opts["class"]);
    attr["class"] = cls.join(" ");

    return html.tag.open(opts.tag, attr);
};

/**
 * Return a closing tag for either .container, .row, .col or .column
 *
 * @param {String} tag  The tag name (default: `div`)
 * @return {String}
 */
exports.containerEnd = exports.rowEnd = exports.colEnd = exports.columnEnd = function (tag) {
    return html.tag.close(tag || "div");
};

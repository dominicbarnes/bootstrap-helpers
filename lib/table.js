var _     = require("lodash"),
    html  = require("html-helpers"),
    util  = html.util,
    flags = [ "bordered", "condensed", "hover", "striped" ];

// import the entire namespace, overwrite as necessary
_.extend(exports, html.table);

/**
 * Return an opening table.table tag
 *
 * Options:
 *  - bordered:  include the `table-bordered` class
 *  - class:     user-defined class names (appended to generated list)
 *  - condensed: include the `table-condensed` class
 *  - hover:     include the `table-hover` class
 *  - striped:   include the `table-striped` class
 *
 * @param {Object} attr  Additional options and/or HTML attributes
 * @return {String}
 */
exports.begin = function (attr) {
    var opts = util.extract(attr, flags.concat("class")),
        cls = [ "table" ];

    attr = attr || Object.create(null);

    _.each(flags, function (flag) {
        if (flag in opts && opts[flag]) {
            cls.push("table-" + flag);
        }
    });
    attr["class"] = cls.join(" ");

    return html.table.begin(attr);
};

/**
 * Return a tr tag
 *
 * Options:
 *  - style: Additional style class (success, warning, danger, etc)
 *
 * @param {Object} attr  Additional options and/or HTML attributes
 * @return {String}
 */
exports.tr = exports.row = function (attr) {
    attr = attr || Object.create(null);

    var opts = util.extract(attr, [ "style" ]),
        cls  = [];

    if (opts.style) cls.push(opts.style);
    attr["class"] = cls.join(" ");

    return html.table.row(attr);
};

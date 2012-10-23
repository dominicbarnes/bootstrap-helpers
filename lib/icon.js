var html = require("html-helpers"),
    util = html.util;

/**
 * Returns an icon tag
 *
 * Options:
 *  - class: user-defined class names (appended to generated list)
 *  - tag:   the tag name (default: `i`)
 *  - white: append the `icon-white` class
 *
 * @param {String} name  The icon name
 * @param {Object} attr  Additional options and/or HTML attributes
 * @return {String}
 */
exports.icon = function (name, attr) {
    attr = attr || Object.create(null);

    var opts = util.extract(attr, [ "class", "tag", "white" ], { tag: "i" }),
        cls  = [ "icon-" + name ];

    if (opts.white)    cls.push("icon-white");
    if (opts["class"]) cls.push(opts["class"]);
    attr["class"] = cls.join(" ");

    return html.tag(opts.tag, "", attr);
};

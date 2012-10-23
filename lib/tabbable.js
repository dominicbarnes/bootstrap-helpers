var _ = require("lodash"),
    html = require("html-helpers"),
    nav = require("./nav"),
    extract = html.util.extract,
    tag = html.tag;

/**
 * Output the opening tag for a .tabbable component
 *
 * Options:
 *  - class:       user-defined class names (appended to generated list)
 *  - orientation: include the `tabs-{orientation}` class
 *
 * @param {Object} attr  Additional options and/or HTML attributes
 * @return {String}
 */
exports.begin = function (attr) {
    attr = attr || Object.create(null);

    var opts = extract(attr, [ "class", "orientation" ]),
        cls = [ "tabbable" ];

    if (opts.orientation) cls.push("tabs-" + opts.orientation);
    if (opts["class"])    cls.push(opts["class"]);
    attr["class"] = cls.join(" ");

    return tag.open("div", attr);
};

/**
 * Returns a closing tag for .tabbable component
 *
 * @return {String}
 */
exports.end = function () {
    return tag.close("div");
};

/**
 * Return the opening tag for a nav component within the .tabbable component
 *
 * @param {Object} attr  Additional HTML attributes
 * @return {String}
 */
exports.nav = function (attr) {
    attr = attr || Object.create(null);
    attr.type = "tabs";

    return nav.begin(attr);
};

// This is the exact same thing as the nav.end method
exports.navEnd = nav.end;

/**
 * Return a nav item (must be data-toggle="tab")
 *
 * @param {String} label  The label for this menu item
 * @param {Object} attr   Additional options and/or HTML attributes
 * @return {String}
 */
exports.navItem = function (label, attr) {
    return nav.item(label, _.extend({}, attr, {
        link: { "data-toggle": "tab" }
    }));
};

/**
 * Return the opening tag for .tab-content
 *
 * @param {Object} attr  Additional HTML attributes
 * @return {String}
 */
exports.content = function (attr) {
    attr = attr || Object.create(null);

    var opts = extract(attr, [ "class" ]),
        cls = [ "tab-content" ];

    if (opts["class"]) cls.push(opts["class"]);
    attr["class"] = cls.join(" ");

    return tag.open("div", attr);
};

/**
 * Return the closing tag for the .tab-content
 *
 * @return {String}
 */
exports.contentEnd = function () {
    return tag.close("div");
};

/**
 * Return the opening tag for a .tab-pane
 *
 * Options:
 *  - class: user-defined class names (appended to generated list)
 *  - fade:  include the `fade` class
 *  - tag:   the tag name (default: `div`)
 *
 * @param {Object} attr  Additional options and/or HTML attributes
 * @return {String}
 */
exports.pane = function (attr) {
    attr = attr || Object.create(null);

    var opts = extract(attr, [ "class", "fade", "tag" ], { tag: "div" }),
        cls = [ "tab-pane" ];

    if (opts.fade)     cls.push("fade");
    if (opts["class"]) cls.push(opts["class"]);
    attr["class"] = cls.join(" ");

    return tag.open(opts.tag, attr);
};

/**
 * Return the closing tag for a .tab-pane
 *
 * @param {String} tagName  The tag name (default: `div`)
 * @return {String}
 */
exports.paneEnd = function (tagName) {
    return tag.close(tagName || "div");
};

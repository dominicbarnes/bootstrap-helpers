var html = require("html-helpers"),
    nav = require("./nav"),
    extract = html.util.extract,
    tag = html.tag;

/**
 * Return an opening tag for a dropdown component
 *
 * Options:
 *  - class: user-defined class names (appended to generated list)
 *  - tag: the tag name (default: `div`)
 *
 * @param {Object} attr  Additional options and/or HTML attributes
 * @return {String}
 */
exports.begin = function (attr) {
    attr = attr || Object.create(null);

    var opts = extract(attr, [ "class", "tag" ], { tag: "div" }),
        cls = [ "dropdown" ];

    if (opts["class"]) cls.push(opts["class"]);
    attr["class"] = cls.join(" ");

    return tag.open(opts.tag, attr);
};

/**
 * Return a closing tag for a dropdown
 *
 * @param {String} tagName  The tag name (default: `div`)
 * @return {String}
 */
exports.end = function (tagName) {
    return tag.close(tagName || "div");
};

/**
 * Return an opening tag for a dropdown menu
 *
 * Options:
 *  - class: user-defined class names (appended to generated list)
 *
 * @param {Object} attr  Additional options and/or HTML attributes
 * @return {String}
 */
exports.menu = function (attr) {
    attr = attr || Object.create(null);

    var opts = extract(attr, [ "class" ]),
        cls = [ "dropdown-menu" ];

    if (opts["class"]) cls.push(opts["class"]);
    attr["class"] = cls.join(" ");

    return tag.open("ul", attr);
};

/**
 * Return a closing tag for a dropdown menu
 *
 * @return {String}
 */
exports.menuEnd = function () {
    return tag.close("ul");
};

// these just map to the equivalent nav methods
exports.item = nav.item;
exports.divider = nav.divider;

/**
 * Return a li.dropdown-submenu opening tag (plus the anchor/trigger)
 *
 * @param {String} label  The content for the label (ie. trigger)
 * @return {String}
 */
exports.submenu = function (label) {
    return tag.open("li", { "class": "dropdown-submenu" })  + tag("a", label, { href: "#" });
};

/**
 * Return a closing tag for the submenu
 *
 * @return {String}
 */
exports.submenuEnd = function () {
    return tag.close("li");
};

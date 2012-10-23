var html = require("html-helpers"),
    list = html.list,
    extract = html.util.extract;

/**
 * Returns an opening tag for a nav component
 *
 * Options:
 *  - class:   user-defined class names (appended to generated list)
 *  - list:    includes the `nav-list` class
 *  - stacked: includes the `nav-stacked` class
 *  - type:    includes the `nav-{type}` class
 *
 * @param {Object} attr  Additional options and/or HTML attributes
 * @return {String}
 */
exports.begin = function (attr) {
    attr = attr || Object.create(null);

    var opts = extract(attr, [ "class", "list", "stacked", "type" ]),
        cls = [ "nav" ];

    if (opts.list)     cls.push("nav-list");
    if (opts.stacked)  cls.push("nav-stacked");
    if (opts.type)     cls.push("nav-" + opts.type);
    if (opts["class"]) cls.push(opts["class"]);
    attr["class"] = cls.join(" ");

    return list.begin(attr);
};

/**
 * Returns a closing tag for a nav component
 *
 * @return {String}
 */
exports.end = function () {
    return html.tag.close("ul");
};

/**
 * Returns a nav list item element
 *
 * Options:
 *  - active:   include the `active` class
 *  - class:    user-defined class names (appended to generated list)
 *  - disabled: include the `disabled` class
 *  - href:     if included, the label will become a link with this href
 *  - link:     if included, this will act as the HTML attributes for the a tag
 *
 * @param {String} label  The label for the nav list item
 * @param {Object} attr   Additional options and/or HTML attributes
 * @return {String}
 */
exports.item = function (label, attr) {
    attr = attr || Object.create(null);

    var opts = extract(attr, [ "active", "class", "disabled", "href", "link" ]),
        cls = [];

    if (opts.active)   cls.push("active");
    if (opts.disabled) cls.push("disabled");
    if (opts["class"]) cls.push(opts["class"]);
    attr["class"] = cls.join(" ") || null;

    if (opts.link || opts.href) {
        opts.link = opts.link || Object.create(null);
        opts.link.href = opts.link.href || opts.href;

        label = html.tag("a", label, opts.link);
    }

    return list.item(label, attr);
};

/**
 * Convenience method for a list item header
 *
 * @param {String} label  The header content
 * @return {String}
 */
exports.header = function (label) {
    return list.item(label, { "class": "nav-header" });
};

/**
 * Convenience method for a list item divider
 *
 * @return {String}
 */
exports.divider = function () {
    return list.item("", { "class": "divider" });
};

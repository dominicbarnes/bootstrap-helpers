var html     = require("html-helpers"),
    _        = require("lodash"),
    icon     = require("./icon").icon,
    dropdown = require("./dropdown"),
    extract  = html.util.extract;

/**
 * Outputs a Bootstrap-ready button component
 *
 * **Note:** Aliased as `btn` and `button`
 *
 * Options:
 *  - block: appends `btn-block` class
 *  - class: user-defined class names (appended to generated list)
 *  - icon:  prepends an icon to the label of the button
 *  - size:  appends a `btn-{size}`class (small, medium, large)
 *  - style: appends a `btn-{style}` class (primary, warning, error, etc)
 *  - tag:   change the tag name (default: `button`)
 *
 * @param {String} label  The content of the button tag itself
 * @param {Object} attr   Additional HTML attributes
 * @return {String}
 */
exports.btn = exports.button = function (label, attr) {
    var opts = extract(attr, [ "block", "class", "icon", "size", "style", "tag" ], { tag: "button" }),
        cls = [ "btn" ];

    attr = attr || Object.create(null);

    if (opts.style)    cls.push("btn-" + opts.style);
    if (opts.size)     cls.push("btn-" + opts.size);
    if (opts.block)    cls.push("btn-block");
    if (opts["class"]) cls.push(opts["class"]);
    attr["class"] = cls.join(" ");

    if (opts.tag === "button") {
        attr.type = attr.type || "button";
    } else if (opts.tag === "a") {
        attr.href = attr.href || "#";
    }

    if (opts.icon) {
        label = icon(opts.icon) + " " + label;
    }

    return html.tag(opts.tag, label, attr);
};

/**
 * Intended for internal use, but this wraps `button()` to create a button that
 * is ready for use as a dropdown toggle
 *
 * @param {Object} attr  Additional HTML attributes
 * @return {String}
 */
exports.btnDropdownToggle = function (attr) {
    attr = attr || Object.create(null);

    var opts = extract(attr, [ "class", "label" ]),
        cls = [ "dropdown-toggle" ];

    opts.label += " " + html.tag("span", "", { "class": "caret" });

    if (opts["class"]) cls.push(opts["class"]);
    attr["class"] = cls.join(" ");

    attr["data-toggle"] = "dropdown";

    return exports.btn(opts.label, attr);
};

/**
 * Output the opening tag for a .btn-group
 *
 * Options:
 *  - class:    user-defined class names (appended to generated list)
 *  - tag:      change the tag name (default: `div`)
 *  - vertical: appends `btn-group-vertical` class
 *
 * @param {Object} attr  Additional options and/or HTML attributes
 * @return {String}
 */
exports.btnGroup = exports.buttonGroup = function (attr) {
    var opts = extract(attr, [ "class", "tag", "vertical" ], { tag: "div" }),
        cls  = [ "btn-group" ];

    attr = attr || Object.create(null);

    if (opts.vertical) cls.push("btn-group-vertical");
    if (opts["class"]) cls.push(opts["class"]);
    attr["class"] = cls.join(" ");

    // TODO: add automatic rendering with a hash of buttons

    return html.tag.open(opts.tag, attr);
};

/**
 * Output the opening tag for a .btn-toolbar
 *
 * Options:
 *  - class: user-defined class names (appended to generated list)
 *  - tag:   change the tag name (default: `div`)
 */
exports.toolbar = exports.btnToolbar = function (attr) {
    var opts = extract(attr, [ "class", "tag" ], { tag: "div" });

    attr = attr || Object.create(null);

    attr["class"] = "btn-toolbar";
    if (opts["class"]) attr["class"] += " " + opts["class"];

    return html.tag.open(opts.tag, attr);
};

/**
 * Output closing tags for .btn-toolbar and .btn-group
 *
 * @param {String} tag  The tag name (default: `div`)
 * @return {String}
 */
exports.toolbarEnd = exports.btnToolbarEnd = exports.btnGroupEnd = function (tag) {
    return html.tag.close(tag || "div");
};

/**
 * Output a complete button dropdown menu
 *
 * @param {Array}  items   The array of items (see dropdown for more details)
 * @param {Object} button  Options for the button itself
 * @param {Object} attr    Options for the outer element
 * @return {String}
 */
exports.btnDropdown = function (items, button, attr) {
    attr = attr || Object.create(null);

    var output = [];

    output.push(exports.btnGroup(attr));
    output.push(exports.btnDropdownToggle(button));
    output.push(dropdown.menu());
    output.push(_.map(items, function (item) {
        if (item.divider) {
            return dropdown.divider();
        } else {
            var label = item.label;
            delete item.label;
            return dropdown.item(label, item);
        }
    }).join(""));
    output.push(dropdown.menuEnd());
    output.push(exports.btnGroupEnd());

    return output.join("");
};

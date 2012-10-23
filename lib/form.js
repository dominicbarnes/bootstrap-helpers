var html    = require("html-helpers"),
    _       = require("lodash"),
    form    = html.form,
    tag     = html.tag,
    extract = html.util.extract;

// grab entire namespace from html.form, we will override where necessary
_.extend(exports, form);

/**
 * Output an opening form tag
 *
 * Options:
 *  - class:  user-defined class names (appended to generated list)
 *  - layout: append a `form-{layout}` class (horizontal, vertical, etc)
 *
 * @param {String} action  The URL action for the form
 * @param {Object} attr    Additional options and/or HTML attributes
 * @return {String}
 */
exports.begin = function (action, attr) {
    attr = attr || Object.create(null);

    var opts = extract(attr, [ "class", "layout" ]),
        cls  = [];

    if (opts.layout)   cls.push("form-" + opts.layout);
    if (opts["class"]) cls.push(opts["class"]);
    attr["class"] = cls.join(" ") || null;

    return form.begin(action, attr);
};

/**
 * Return an opening .control-group tag
 *
 * @param {Object} attr  Additional HTML attributes
 * @return {String}
 */
exports.controlGroup = function (attr) {
    attr = attr || Object.create(null);

    var opts = extract(attr, [ "class" ]),
        cls = [ "control-group" ];

    if (opts["class"]) cls.push(opts["class"]);
    attr["class"] = cls.join(" ");

    return tag.open("div", attr);
};

/**
 * Return an opening .controls tag
 *
 * @param {Object} attr  Additional HTML attributes
 * @return {String}
 */
exports.controls = function (attr) {
    attr = attr || Object.create(null);

    var opts = extract(attr, [ "class" ]),
        cls = [ "controls" ];

    if (opts["class"]) cls.push(opts["class"]);
    attr["class"] = cls.join(" ");

    return tag.open("div", attr);
};

/**
 * Return a closing tag for both .controls and .control-group
 *
 * @return {String}
 */
exports.controlsEnd = exports.controlGroupEnd = function () {
    return tag.close("div");
};

/**
 * Return a label.control-label element
 *
 * @param {String} content  The content of the label
 * @param {Object} attr     Additional options and/or HTML attributes
 * @return {String}
 */
exports.label = function (content, attr) {
    attr = attr || Object.create(null);

    var opts = extract(attr, [ "class" ]),
        cls = [ "control-label" ];

    if (opts["class"]) cls.push(opts["class"]);
    attr["class"] = cls.join(" ");

    return tag("label", content, attr);
};

/**
 * Return an input element (very polymorphic with the type param)
 *
 * Input Types:
 *  - select: Uses form.select
 *  - else:   Uses form.input
 *
 * Options:
 *  - class:    user-defined class names (appended to generated list)
 *  - options:  options param for form.select (if type = select)
 *  - selected: selected param for form.select (if type = select)
 *  - size:     append class `input-{size}` (if string) or `span{size}` (if number)
 *
 * @param {String} name  The form element name
 * @param {String} type  The input type
 * @param {Object} attr  Additional options and/or HTML attributes
 * @return {String}
 */
exports.input = function (name, type, attr) {
    attr = attr || Object.create(null);

    var opts = extract(attr, [ "class", "options", "selected", "size" ]),
        cls = [];

    if (opts.size) {
        cls.push((typeof opts.size === "number" ? "span" : "input-")  + opts.size);
    }
    if (opts["class"]) cls.push(opts["class"]);
    attr["class"] = cls.join(" ") || null;

    switch (type) {
    case "select": return form.select(name, opts.options, opts.selected, attr);
    default:       return form.input(name, type, attr);
    }
};

/**
 * Return a checkbox element
 *
 * Options:
 *  - inline: appends inline to the wrapping div
 *
 * @param {String} name   The form element name
 * @param {String} label  The label for the checkbox (wraps the input)
 * @param {Object} attr   Additional options and/or HTML attributes
 * @return {String}
 */
exports.checkbox = function (name, label, attr) {
    attr = attr || Object.create(null);

    var opts = extract(attr, [ "inline" ]),
        cls = [ "checkbox" ];

    if (opts.inline) cls.push("inline");

    return tag("label", exports.input(name, "checkbox", attr) + " " + label, {
        "class": cls.join(" ")
    });
};

/**
 * Return a select element
 *
 * **Note:** If a nested set of options is detected, it will include `optgroup`
 * elements where needed.
 *
 * @param {String}       name      The form element name
 * @param {Array|Object} options   The options for the select element
 * @param {Mixed}        selected  The value to be selected
 * @param {Object}       attr      Additional options and/or HTML attributes
 */
exports.select = function (name, options, selected, attr) {
    attr = attr || Object.create(null);

    var opts = extract(attr, [ "checkboxes" ]);

    if (!opts.checkboxes) {
        return form.select(name, options, selected, attr);
    }

    return _.map(options, function (label, val, list) {
        var chk = { value: val };

        if (Array.isArray(list)) {
            delete chk.value;
            chk.checked = label == selected;
        } else {
            chk.checked = val == selected || label == selected;
        }

        return exports.checkbox(name, label, _.extend(attr, chk));
    }).join("");
};

// each of the input types gets a convenience method
_.each([
    // typical
    "file", "hidden", "password", "radio", "submit", "text",
    // html5
    "color", "date", "email", "number", "search", "tel", "url"
], function (type) {
    exports[type] = function (name, attr) {
        return exports.input(name, type, attr);
    };
});

/**
 * Return a help text element
 *
 * Options:
 *  - block: use `help-block` instead of `help-inline` as the class
 *  - class: user-defined class names (appended to generated list)
 *  - tag:   the element name (default: `p`)
 *
 * @param {String} text  The content of the element
 * @param {Object} attr  Additional options and/or HTML attributes
 * @return {String}
 */
exports.help = function (text, attr) {
    attr = attr || Object.create(null);

    var opts = extract(attr, [ "block", "class", "tag" ], { tag: "p" }),
        cls = [ opts.block ? "help-block" : "help-inline" ];

    if (opts["class"]) cls.push(opts["class"]);
    attr["class"] = cls.join(" ");

    return tag(opts.tag, text, attr);
};

/**
 * Convenience wrapper for generating a complete control group structure
 *
 * Options:
 *  - help:      includes a `.help-inline` element
 *  - helpBlock: includes a `.help-block` element
 *  - type:      the form element input type
 *
 * @param {String} label  The content for the label element
 * @param {String} name   The form element name
 * @param {Object} attr   Additional options and/or HTML attributes
 * @return {String}
 */
exports.control = function (label, name, attr) {
    attr = attr || Object.create(null);

    var output = [],
        opts = extract(attr, [ "help", "helpBlock", "type" ]);

    output.push(exports.controlGroup());
    if (attr.id) {
        output.push(exports.label(label, { "for": attr.id }));
    } else {
        output.push(exports.label(label));
    }
    output.push(exports.controls());
    output.push(exports.input(name, opts.type, attr));
    if (opts.help)      output.push(exports.help(opts.help));
    if (opts.helpBlock) output.push(exports.help(opts.helpBlock, { block: true }));
    output.push(exports.controlsEnd());
    output.push(exports.controlGroupEnd());

    return output.join("");
};

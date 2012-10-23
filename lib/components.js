var html = require("html-helpers"),
    _    = require("lodash"),
    util = html.util;

/**
 * Return a breadcrumbs component
 *
 * @param {Array}  crumbs  The list of crumbs in the list
 * @param {Object} attr    Additional options and/or HTML attributes
 * @return {String}
 */
exports.breadcrumbs = function (crumbs, attr) {
    attr = attr || Object.create(null);

    // TODO: utilize `html.list` helpers

    var opts = util.extract(attr, [ "class", "divider" ], { divider: "/" }),
        cls = [ "breadcrumb" ],
        output;

    if (opts["class"]) cls.push(opts["class"]);
    attr["class"] = cls.join(" ");

    output = _.map(crumbs, function (crumb) {
        if (crumb.active) {
            return html.tag("li", crumb.title, { "class": "active" });
        }

        var inner = [
            html.tag("a", crumb.title, { href: crumb.href }),
            html.tag("span", opts.divider, { "class": "divider" })
        ];

        return html.tag("li", inner.join(" "));
    }).join("");

    return html.tag("ul", output, attr);
};

// Badges and labels are practically the same structure, so they are created programmatically
_.each([ "badge", "label" ], function (component) {
    /**
     * Return a badge/label component
     *
     * Options:
     *  - class: user-defined class names (appended to generated list)
     *  - style: appends a `.{component}-{style}` class (style: primary, warning, danger, etc)
     *  - tag:   the tag name (default: `span`)
     *
     * @param {String} content  The content of the component
     * @param {Object} attr     Additional options and/or HTML attributes
     * @return {String}
     */
    exports[component] = function (content, attr) {
        attr = attr || Object.create(null);

        var opts = util.extract(attr, [ "class", "style", "tag" ], { tag: "span" }),
            cls  = [ component ];

        if (opts.style)    cls.push(component + "-" + opts.style);
        if (opts["class"]) cls.push(opts["class"]);
        attr["class"] = cls.join(" ");

        return html.tag(opts.tag, content, attr);
    };
});

var _ = require("lodash");

// each of these is included in the bootstrap namespace directly
_.extend(exports,
    require("./scaffolding"),
    require("./icon"),
    require("./buttons"),
    require("./components")
);

// each of these creates a namespace of their own
_.each([
    "form",
    "dropdown",
    "nav",
    "tabbable",
    "table"
], function (mod) {
    exports[mod] = require("./" + mod);
});

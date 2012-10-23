var bootstrap = require("../");

describe(".table", function () {
    describe(".begin()", function () {
        it("should return a basic table.table with no arguments", function () {
            bootstrap.table.begin()
                .should.equal('<table class="table">');
        });

        [ "striped", "bordered", "hover", "condensed" ].forEach(function (flag) {
            it("should allow for flag option " + flag + " and add class table-" + flag, function () {
                var params = {};
                params[flag] = true;

                bootstrap.table.begin(params)
                    .should.equal('<table class="table table-' + flag + '">');
            });
        });
    });
});

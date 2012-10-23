var bootstrap = require("../");

describe("buttons", function () {
    describe(".btn()", function () {
        it("should return a button.btn string", function () {
            bootstrap.btn("Click Me")
                .should.equal('<button class="btn" type="button">Click Me</button>');
        });

        it("should allow the tag to be overridden", function () {
            bootstrap.btn("Register", { tag: "a" })
                .should.equal('<a class="btn" href="#">Register</a>');
        });

        it("should allow for the style (primary, info, etc) of the button to be set", function () {
            bootstrap.btn("Save", { style: "primary" })
                .should.equal('<button class="btn btn-primary" type="button">Save</button>');
        });

        it("should allow for the size of the button to be set", function () {
            bootstrap.btn("Cancel", { size: "mini" })
                .should.equal('<button class="btn btn-mini" type="button">Cancel</button>');
        });

        it("should allow for block-level buttons", function () {
            bootstrap.btn("Block", { block: true })
                .should.equal('<button class="btn btn-block" type="button">Block</button>');
        });

        it("should append additional class names", function () {
            bootstrap.btn("Hello", { "class": "pull-left" })
                .should.equal('<button class="btn pull-left" type="button">Hello</button>');
        });

        it("should include additional HTML attributes", function () {
            bootstrap.btn("Test", { id: "my-button" })
                .should.equal('<button class="btn" id="my-button" type="button">Test</button>');
        });
    });

    describe(".btnGroup()", function () {
        it("should return a div.btn-group opening tag", function () {
            bootstrap.btnGroup()
                .should.equal('<div class="btn-group">');
        });

        it("should allow for the tag to be overridden", function () {
            bootstrap.btnGroup({ tag: "nav" })
                .should.equal('<nav class="btn-group">');
        });

        it("should add the btn-group-vertical class", function () {
            bootstrap.btnGroup({ vertical: true })
                .should.equal('<div class="btn-group btn-group-vertical">');
        });

        it("should add other HTML attributes", function () {
            bootstrap.btnGroup({ id: "my-group", "class": "pull-left" })
                .should.equal('<div class="btn-group pull-left" id="my-group">');
        });
    });

    describe(".btnGroupEnd()", function () {
        it("should return a closing div tag", function () {
            bootstrap.btnGroupEnd().should.equal('</div>');
        });

        it("should allow for the tag to be overridden", function () {
            bootstrap.btnGroupEnd("nav").should.equal('</nav>');
        });
    });

    describe(".btnToolbar()", function () {
        it("should have .toolbar() as an alias", function () {
            bootstrap.btnToolbar.should.equal(bootstrap.toolbar);
        });

        it("should return a div.btn-toolbar opening tag", function () {
            bootstrap.btnToolbar()
                .should.equal('<div class="btn-toolbar">');
        });

        it("should allow for the tag to be overridden", function () {
            bootstrap.btnToolbar({ tag: "nav" })
                .should.equal('<nav class="btn-toolbar">');
        });

        it("should include additional HTML attributes", function () {
            bootstrap.btnToolbar({ id: "my-toolbar", "class": "pull-right" })
                .should.equal('<div class="btn-toolbar pull-right" id="my-toolbar">');
        });
    });

    describe(".btnToolbarEnd()", function () {
        it("should return a closing div tag", function () {
            bootstrap.btnToolbarEnd().should.equal('</div>');
        });

        it("should allow for the tag to be overridden", function () {
            bootstrap.btnToolbarEnd("nav").should.equal('</nav>');
        });
    });

    describe(".btnDropdown()", function () {
        it("should return a button with a nested dropdown menu", function () {
            bootstrap.btnDropdown([
                { label: "Action", href: "#" },
                { label: "Another action", href: "#" },
                { divider: true },
                { label: "Separated link", href: "#" }
            ], { label: "Action" })
                .should.equal('<div class="btn-group"><button class="btn dropdown-toggle" data-toggle="dropdown" type="button">Action <span class="caret"></span></button><ul class="dropdown-menu"><li><a href="#">Action</a></li><li><a href="#">Another action</a></li><li class="divider"></li><li><a href="#">Separated link</a></li></ul></div>');
        });
    });
});

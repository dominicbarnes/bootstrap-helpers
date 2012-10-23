var bootstrap = require("../");

describe(".form", function () {
    it("should allow for the layout to change", function () {
        bootstrap.form.begin("/my-action", { layout: "horizontal" })
            .should.equal('<form action="/my-action" class="form-horizontal">');
    });

    describe(".controlGroup()", function () {
        it("should return a div.control-group opening tag", function () {
            bootstrap.form.controlGroup()
                .should.equal('<div class="control-group">');
        });

        it("should include additional HTML attributes", function () {
            bootstrap.form.controlGroup({ id: "group", "class": "my-class" })
                .should.equal('<div class="control-group my-class" id="group">');
        });
    });

    describe(".controlGroupEnd()", function () {
        it("should return a closing div tag", function () {
            bootstrap.form.controlGroupEnd().should.equal('</div>');
        });
    });

    describe(".controls()", function () {
        it("should return a div.controls opening tag", function () {
            bootstrap.form.controls()
                .should.equal('<div class="controls">');
        });

        it("should include additional HTML attributes", function () {
            bootstrap.form.controls({ "class": "clearfix", id: "my-controls" })
                .should.equal('<div class="controls clearfix" id="my-controls">');
        });
    });

    describe(".controlsEnd()", function () {
        it("should return a closing div tag", function () {
            bootstrap.form.controlsEnd().should.equal('</div>');
        });
    });

    describe(".label()", function () {
        it("should return a label.control-label", function () {
            bootstrap.form.label("Test")
                .should.equal('<label class="control-label">Test</label>');
        });

        it("should include additional HTML attributes", function () {
            bootstrap.form.label("Hello", { "for": "world" })
                .should.equal('<label class="control-label" for="world">Hello</label>');
        });
    });

    describe(".input()", function () {
        it("should add input-{size} class if size is a string", function () {
            bootstrap.form.input("username", "text", { size: "medium" })
                .should.equal('<input class="input-medium" name="username" type="text">');
        });

        it("should add span{size} class if size is a number", function () {
            bootstrap.form.input("name", "text", { size: 6 })
                .should.equal('<input class="span6" name="name" type="text">');
        });

        it("should also affect the other helpers", function () {
            bootstrap.form.password("pass", { size: "small" })
                .should.equal('<input class="input-small" name="pass" type="password">');
        });

        it("should create a select box", function () {
            bootstrap.form.input("letters", "select", {
                options: [ "A", "B" ]
            }).should.equal('<select name="letters"><option>A</option><option>B</option></select>');
        });
    });

    describe(".select()", function () {
        it("should wrap form.select and return a select tag", function () {
            bootstrap.form.select("num", [ 1, 2 ], 2)
                .should.equal('<select name="num"><option>1</option><option selected>2</option></select>');
        });

        it("should convert the select into a list of checkboxes", function () {
            bootstrap.form.select("sort", {
                asc:  "Ascending",
                desc: "Descending"
            }, "desc", {
                checkboxes: true
            }).should.equal('<label class="checkbox"><input name="sort" type="checkbox" value="asc"> Ascending</label><label class="checkbox"><input checked name="sort" type="checkbox" value="desc"> Descending</label>');
        });
    });

    describe(".help()", function () {
        it("should return a p.help-inline tag", function () {
            bootstrap.form.help("Test")
                .should.equal('<p class="help-inline">Test</p>');
        });

        it("should return a p.help-block tag", function () {
            bootstrap.form.help("Hello World", { block: true })
                .should.equal('<p class="help-block">Hello World</p>');
        });

        it("should allow the tag to be overridden", function () {
            bootstrap.form.help("Foo", { tag: "span" })
                .should.equal('<span class="help-inline">Foo</span>');
        });
    });

    describe(".control()", function () {
        it("should return a full control-group structure", function () {
            bootstrap.form.control("Name", "name")
                .should.equal('<div class="control-group"><label class="control-label">Name</label><div class="controls"><input name="name" type="text"></div></div>');
        });

        it("should append a p.help-inline", function () {
            bootstrap.form.control("Password", "pass", {
                help: "At least one letter and one number"
            }).should.equal('<div class="control-group"><label class="control-label">Password</label><div class="controls"><input name="pass" type="text"><p class="help-inline">At least one letter and one number</p></div></div>');
        });

        it("should append a p.help-block", function () {
            bootstrap.form.control("Password", "pass", {
                helpBlock: "At least one letter and one number"
            }).should.equal('<div class="control-group"><label class="control-label">Password</label><div class="controls"><input name="pass" type="text"><p class="help-block">At least one letter and one number</p></div></div>');
        });

        it("should include additional HTML attributes on the input", function () {
            bootstrap.form.control("Email", "email", {
                type: "email",
                size: "small",
                "class": "my-class"
            }).should.equal('<div class="control-group"><label class="control-label">Email</label><div class="controls"><input class="input-small my-class" name="email" type="email"></div></div>');
        });

        it("should detect an id and use that as the for attribute of the label", function () {
            bootstrap.form.control("Agree?", "agree", {
                type: "checkbox",
                id:   "agree"
            }).should.equal('<div class="control-group"><label class="control-label" for="agree">Agree?</label><div class="controls"><input id="agree" name="agree" type="checkbox"></div></div>');
        });
    });
});

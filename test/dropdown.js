var _ = require("lodash"),
    bootstrap = require("../");

describe(".dropdown", function () {
    describe(".begin()", function () {
        it("should return a div.dropdown opening tag", function () {
            bootstrap.dropdown.begin().should.equal('<div class="dropdown">');
        });

        it("should include additional HTML attributes", function () {
            bootstrap.dropdown.begin({ id: "my-dropdown", "class": "my-class" })
                .should.equal('<div class="dropdown my-class" id="my-dropdown">');
        });
    });

    describe(".end()", function () {
        it("should return a closing div tag", function () {
            bootstrap.dropdown.end().should.equal('</div>');
        });
    });

    describe(".menu()", function () {
        it("should return a ul.dropdown-menu opening tag", function () {
            bootstrap.dropdown.menu()
                .should.equal('<ul class="dropdown-menu">');
        });

        it("should include additional HTML attributes", function () {
            bootstrap.dropdown.menu({ role: "menu", "aria-labelledby": "dropdownMenu" })
                .should.equal('<ul aria-labelledby="dropdownMenu" class="dropdown-menu" role="menu">');
        });
    });

    describe(".menuEnd()", function () {
        it("should return a ul closing tag", function () {
            bootstrap.dropdown.menuEnd()
                .should.equal('</ul>');
        });
    });

    describe(".item()", function () {
        it("should be an alias for bootstrap.nav.item", function () {
            bootstrap.dropdown.item.should.equal(bootstrap.nav.item);
        });
    });

    describe(".divider()", function () {
        it("should be an alias for bootstrap.nav.divider", function () {
            bootstrap.dropdown.divider.should.equal(bootstrap.nav.divider);
        });
    });

    describe(".submenu()", function () {
        it("should return a li.submenu opening tag and a label link", function () {
            bootstrap.dropdown.submenu("More Options").should.equal('<li class="dropdown-submenu"><a href="#">More Options</a>');
        });
    });

    describe(".submenuEnd()", function () {
        it("should return a closing li tag", function () {
            bootstrap.dropdown.submenuEnd().should.equal('</li>');
        });
    });
});

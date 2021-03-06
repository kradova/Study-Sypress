describe("Assertions", () => {
    const attr = "placeholder";
    const placeholder = "What needs to be done?";

    it("Implicit subjects - should", () => {
        cy.visit("http://todomvc.com/examples/react/#/");

        cy.get(".new-todo")
            .should("have.attr", attr,
                placeholder)
            .and("have.class", "new-todo");
    });

    it("Explicit subjects", () => {
        cy.visit("http://todomvc.com/examples/react/#/");

        cy.get(".new-todo")
            .should(($elem) => {
                expect($elem).to.have.class("new-todo");
                expect($elem).to.have.attr(attr, placeholder);
            });

    });

    it("assert explicit subjects", () => {
        const eqString = "foo";
        expect(eqString).to.eq("foo");
        expect(eqString).to.have.lengthOf(3);
        expect(eqString).to.be.a("string");
    });

    it("Should with Explicit subjects", () => {
        cy.visit("http://todomvc.com/examples/react/#/");
        cy.get(".new-todo").should(($elem) => {
            expect($elem).to.have.class("new-todo");
        });

    });
});
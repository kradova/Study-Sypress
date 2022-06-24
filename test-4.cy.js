describe("Assertions", () => {
    it("Implicit subjects - should", () => {
        cy.visit("http://todomvc.com/examples/react/#/");

        cy.get(".new-todo")
            .should("have.attr", "placeholder",
                "What needs to be done?")
                .and("have.class", "new-todo");
    });
});
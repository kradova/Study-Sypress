//Interacting with the Todo input element(pg 80)
describe("empty spec", () => {
    it("Adds a new ToDo", () => {
        cy.visit("http://todomvc.com/examples/react/#/");

        cy.get(".new-todo").type("New Todo {enter}");
        cy.get(".new-todo").type("Anoter Todo{enter}");
        cy.get(".todo-list").find("li").should("have.length", 3);
    });
});
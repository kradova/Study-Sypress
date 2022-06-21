//Interacting with the Todo input element(pg 80)
describe("empty spec", () => {
    it("Adds a new ToDo", () => {
        cy.visit("http://todomvc.com/examples/react/#/");

        cy.get(".new-todo").type("New Todo {enter}");
        cy.get(".new-todo").type("Another Todo{enter}");
        cy.get(".todo-list").find("li").should("have.length", 2);
        cy.get("li:nth-child(1)>div>label").should("have.text", "New Todo");
        cy.get("li:nth-child(2)>div>label").should("have.text", "Another Todo");

        
    });
});
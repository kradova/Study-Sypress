it('can add a todo', () => {
    cy.visit("http://todomvc.com/examples/react/#/");

    cy.get(".new-todo").type("New Todo {Enter}");
    cy.get(".todo-list").find('li').should('have.length', 1);
});

it('Error Test: can add a todo', () => {
    cy.visit("http://todomvc.com/examples/react/#/");

    cy.get(".new-todo").type("New Todo {Enter}");
    cy.get(".todo-list").find('li').should('have.length', 2);
});
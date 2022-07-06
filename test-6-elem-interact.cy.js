it('can mark a todo as completed - with changed hitbox position', () => {
    cy.visit('http://todomvc.com/examples/react/#/');
    cy.get(".new-todo").type("New Todo {Enter}");
    cy.get(".new-todo").type("Another New Todo {Enter}");
    cy.get('.todo-list>li:nth-child(1)')
        .find('.toggle').click({ position: 'topLeft' });
});


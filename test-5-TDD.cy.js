it('can create and display new todo', () => {
    cy.get('[data-testid="todo-item-input"]')
        .type('New todo');
    cy.get('[data-testid="add-todo-button"]')
        .click();
    cy.contains('New Todo');
});
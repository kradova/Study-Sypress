it('can create and display new todo', () => {
    cy.get('[data-testid="todo-item-input"]')
        .type('New todo');
    cy.get('[data-testid="add-todo-button"]')
        .click();
    cy.contains('New Todo');
});

it('can delete added todo item', () => {
    cy.get('[data-testid="todo-item-input"]')
        .type('New todo');
    cy.get('[data-testid="add-todo-button"]')
        .click();
    cy.get('[data-testid="delete-todo-1-button"]')
        .click();
    expect('[data-testid="todolist"]').not.to.contain('New Todo');
});

it('can view added todo item', () => {
    cy.get('[data-testid="todo-item-input"]')
        .type('New todo');
    cy.get('[data-testid="add-todo-button"]')
        .click();
    expect('[data-testid="todolist"]').to.contain('New Todo');
});

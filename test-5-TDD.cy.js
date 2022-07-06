it('can create and display new todo', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="todo-input-element"]')
        .type('New todo');
    cy.get('[data-testid="add-todo-button"]')
        .click();
    cy.get('[data-testid="todolist"]')
        .contains('New todo');
});

it('can delete added todo item', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="todo-input-element"]')
        .type('New todo');
    cy.get('[data-testid="add-todo-button"]')
        .click();
    cy.get('[data-testid="delete-todo-0-button"]')
        .click();
    expect('[data-testid="todolist"]')
        .not.to.contain('New todo');
});

it('can view added todo item', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="todo-input-element"]')
        .type('New todo, {enter}');
    cy.get('[data-testid="todo-input-element"]')
        .type('Another todo, {enter}');
    cy.get('[data-testid="todolist"]').contains(
        'New todo');
    cy.get('[data-testid="todolist"]')
        .contains('Another todo');
});

it.only('can view number of added todo items', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="todo-input-element"]')
        .type('New todo, {enter}');
    cy.get('[data-testid="todo-input-element"]')
        .type('Another todo, {enter}');
    cy.get('[data-testid="todo-item-number"]')
        .should(($header) => {
            expect($header.get(0).innerText).to.contain('2')
        });
    cy.get('[data-testid="delete-todo-1-button"]')
        .click();
    cy.get('[data-testid="todo-item-number"]')
        .should(($header) => {
            expect($header.get(0).innerText).to.contain('1')
        });
});




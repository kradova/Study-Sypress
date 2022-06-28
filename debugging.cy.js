it.skip('can add a todo', () => {
    cy.visit("http://todomvc.com/examples/react/#/");

    cy.get(".new-todo").type("New Todo {Enter}");
    cy.get(".todo-list").find('li').should('have.length', 1);
});

it.skip('Error Test: can add a todo', () => {
    cy.visit("http://todomvc.com/examples/react/#/");

    cy.get(".new-todo").type("New Todo {Enter}");
    cy.get(".todo-list").find('li').should('have.length', 2);
});

it.skip('can mark a todo as completed', () => {
    cy.visit("http://todomvc.com/examples/react/#/");

    cy.get(".new-todo").type("New Todo {Enter}");
    cy.get(".new-todo").type("Another New Todo {Enter}");
    cy.get('.todo-list>li:nth-child(1)').find('.toggle').click();
    cy.get('.todo-list>li:nth-child(2)').find('.toggle').click();
});

it.skip('Special commands-debug : can mark a todo as completed',
    () => {
        cy.visit("http://todomvc.com/examples/react/#/");

        cy.get(".new-todo").type("New Todo {Enter}");
        cy.get(".new-todo").type("Another New Todo {Enter}").debug();
        cy.get('.todo-list>li:nth-child(1)').find('.toggle').click();
        cy.get('.todo-list>li:nth-child(2)').find('.toggle').click();
    });

it('Special commands - Pause: can mark a todo as completed', () => {
    cy.visit("http://todomvc.com/examples/react/#/");

    cy.get(".new-todo").type("New Todo {Enter}");
    cy.pause();
    cy.get('.todo-list>li:nth-child(1)').find('.toggle').click();
});  
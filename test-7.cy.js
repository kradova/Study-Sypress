/**
 * Chapter 8. Variables
 */
it.skip('carries out asynchronous events', () => {
    cy.visit('http://todomvc.com/examples/react/#/');

    const button = cy.get('#submit-button');
    const username = cy.get('#username-input');
    button.click();
});

it('can Add todo item - (Closures)', () => {
    cy.visit('http://todomvc.com/examples/react/#/')
    cy.get(".new-todo").type("New Todo {Enter}");
    cy.get('.todo-list>li:nth-child(1)').then(($todoItem) => {
        // Storing our todo item Name
        const txt = $todoItem.text()
        expect(txt).to.eq('New Todo')
    });
    // This command will run after all the above commands
    // have finished their execution.
    cy.get(".new-todo").type("Another New Todo {Enter}");
});


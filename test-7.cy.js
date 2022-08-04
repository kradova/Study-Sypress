/**
 * Chapter 8. Variables
 */
it.skip('carries out asynchronous events', () => {
    cy.visit('http://todomvc.com/examples/react/#/');

    const button = cy.get('#submit-button');
    const username = cy.get('#username-input');
    button.click();
});

it.skip('can Add todo item - (Closures)', () => {
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

describe('Cypress Variables', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://todomvc.com/examples/react/#/')
    })
    
    var a = 20;
    it('var scope context', () => {
        a = 30; // overriding global scope
        expect(a).to.eq(30) // a = 30
    });
    it('var scope context - changed context', () => {
        // Variable scope remains the same as the change affects
        // the global scope
        expect(a).to.eq(30) //a = 30
    });
});

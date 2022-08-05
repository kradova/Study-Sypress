/**
 * Chapter 8. Aliases
 */

context.skip('TODO MVC - Aliases Tests', () => {
    let text;

    beforeEach(() => {
        cy.visit('http://todomvc.com/examples/react/#/')
        cy.get(".new-todo").type("New Todo {Enter}");
        cy.get('.todo-list>li:nth-child(1)').then(($todoItem) => {
            text = $todoItem.text()
        });
    });

    it('gets added todo item', () => {
        // todo item text is available for use
        expect(text).to.eq('New Todo')
    });
});

describe('Sharing Context between hooks and tests', () => {
    beforeEach(() => {
        cy.visit('http://todomvc.com/examples/react/#/');
        cy.get(".new-todo").type("New Todo {Enter}");
        cy.get('.todo-list>li:nth-child(1)').invoke('text').as('todoItem');
    });
    it('gets added todo item', function () {
        // todo item text is available for use
        expect(this.todoItem).to.eq('New Todo');
    });
});
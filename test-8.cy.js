/**
 * Chapter 8. Aliases
 */

context('TODO MVC - Aliases Tests', () => {
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
describe('empty spec', () => {
  it('Contains todo input element', () => {
    cy.visit('http://todomvc.com/examples/react/#/')
 
    cy.get('.new-todo')
  });
})
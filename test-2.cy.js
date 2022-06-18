describe('empty spec', () => {
  it.skip('Contains todo input element', () => {
    cy.visit('http://todomvc.com/examples/react/#/')
 
    cy.get('.new-todo')
  });
  
  it('test rozetka site search by enter in input field', () => {
    cy.visit('https://rozetka.com.ua/')
 
    cy.get('.search-form__input').type("sony {enter}")
    /**
     * @TODO check if element contains the needed text
     */
    //cy.get('.catalog-heading.ng-star-inserted')?????????????????????????????????????
    cy.contains('sony').should('exist')
  });
  
  it('test rozetka site search by press on "Поиск" button', () => {
    cy.visit('https://rozetka.com.ua/')
 
    cy.get('.search-form__input').type("sony")
    cy.get('.button.button_color_green.button_size_medium.search-form__submit.ng-star-inserted').click()
  });
})
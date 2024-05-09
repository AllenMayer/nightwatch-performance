describe('BSTD-015 Order Total', () => {
  it('Visit bstackdemo,select 2nd and 5th item and validate order total', () => {
    cy.visit('https://bstackdemo.com/')
    .get("#signin")
    .click()
    .get("#react-select-2-input")
    .type("demouser{enter}",{force: true})
    .get("#react-select-3-input")
    .type("testingisfun99{enter}",{force: true})
    .get("#login-btn")
    .click()
    .get(".float-cart__content")
    .should('not.be.visible')
    .get(".shelf-item:nth-child(3) > .shelf-item__buy-btn")
    .click()
    .get(".shelf-item:nth-child(6) > .shelf-item__buy-btn")
    .click({force: true})
    .get(".float-cart__content")
    .should('be.visible')
    .get(".buy-btn")
    .click()
    .get(".checkoutHeader-link")
    .should("be.visible")
    .get(".cart-priceItem-value > span")
    .should('include.text',"1298")
  })
})
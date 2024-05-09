describe('BSTD-016 Continue Shopping', () => {
  it('Visit bstackdemo,sign in, add to cart, click checkout, fill form, submit and continue shopping', () => {
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
    .get(".float-cart__content")
    .should('be.visible')
    .get(".buy-btn")
    .click()
    .get(".checkoutHeader-link")
    .should("be.visible")
    .get("#firstNameInput")
    .type("John")
    .get("#lastNameInput")
    .type("Doe")
    .get("#addressLine1Input")
    .type("North Pole")
    .get("#provinceInput")
    .type("Alaska")
    .get("#postCodeInput")
    .type("000000")
    .get("#checkout-shipping-continue")
    .click()
    .get("div")
    .contains("Your Order has been successfully placed.")
    .should('be.visible')
    .get(".optimizedCheckout-buttonSecondary")
    .click()
    .get("span.username")
    .should("have.text","demouser")
    .url()
    .should("eq","https://bstackdemo.com/")
  })
})
describe('Cart - Checkout (Logged In) - Positive', () => {
  it('User is logged in, product added to cart → Checkout completed', () => {
    cy.login()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('John')
    cy.get('[data-test="lastName"]').type('Doe')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
  })
})

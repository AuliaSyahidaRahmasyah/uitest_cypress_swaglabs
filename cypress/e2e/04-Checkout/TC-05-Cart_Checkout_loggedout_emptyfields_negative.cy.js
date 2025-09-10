describe('Cart - Checkout Empty Fields - Negative', () => {
  it('User is logged in, product added to cart → Empty fields block checkout', () => {
    cy.login()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('contain', 'First Name is required')
  })
})

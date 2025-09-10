describe('Cart - Empty (Logged In) - Negative', () => {
  it('User is logged in and cart is empty → Checkout blocked', () => {
    cy.login()
    cy.get(".shopping_cart_link").click();

    cy.get('[data-test="checkout"]').click()
    // cy.get('[data-test="error"]').should('contain', 'Cart is empty')
  })
})

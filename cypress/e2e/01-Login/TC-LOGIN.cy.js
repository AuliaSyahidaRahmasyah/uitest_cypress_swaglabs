describe('Login Page', () => {

  afterEach(() => {
    cy.wait(5000) 
  })

  it('TC-LOGIN-01: Valid username & password (Positive)', () => {
    cy.login()
    cy.url().should('include', '/inventory.html')
    cy.contains('Products')
  })

  it('TC-LOGIN-02: Valid username & invalid password (Negative)', () => {
    cy.login(Cypress.env('standardUser'), 'wrong')
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })

  it('TC-LOGIN-03: Locked out user (Negative)', () => {
    cy.login(Cypress.env('lockedUser'), Cypress.env('password'))
    cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out.')
  })

  it('TC-LOGIN-04: Empty username (Negative)', () => {
    cy.login('', Cypress.env('password'))
    cy.get('[data-test="error"]').should('contain', 'Username is required')
  })

  it('TC-LOGIN-05: Empty password (Negative)', () => {
    cy.login(Cypress.env('standardUser'), '')
    cy.get('[data-test="error"]').should('contain', 'Password is required')
  })

})

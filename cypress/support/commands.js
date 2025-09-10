Cypress.Commands.add('login', (username = Cypress.env('standardUser'), password = Cypress.env('password')) => {
  cy.visit(Cypress.env('baseUrl'))

  if (username) {
    cy.get('[data-test="username"]').type(username)
  }
  if (password) {
    cy.get('[data-test="password"]').type(password)
  }

  cy.get('[data-test="login-button"]').click()
})

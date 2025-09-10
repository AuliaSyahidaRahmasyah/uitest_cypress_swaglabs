describe("Cart - Empty (Logged Out) - Negative", () => {
  it("Attempt to access cart without login", () => {
    cy.visit("https://www.saucedemo.com/cart.html", {
      failOnStatusCode: false,
    });
    cy.wait(2000);

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and(
        "contain",
        "Epic sadface: You can only access '/cart.html' when you are logged in."
      );
  });
});

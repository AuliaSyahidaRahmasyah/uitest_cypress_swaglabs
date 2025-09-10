describe("Cart - Checkout (Logged Out) - Positive", () => {
  it("User is logged out, product added to cart → Redirect to login then checkout completed", () => {
    cy.visit("https://www.saucedemo.com/cart.html", {
      failOnStatusCode: false,
    });
    cy.wait(3000);

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and(
        "contain",
        "Epic sadface: You can only access '/cart.html' when you are logged in."
      );

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.wait(2000);

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="checkout"]').click();
    cy.wait(2000);

    cy.get('[data-test="firstName"]').type("Jane");
    cy.get('[data-test="lastName"]').type("Smith");
    cy.get('[data-test="postalCode"]').type("54321");
    cy.get('[data-test="continue"]').click();
    cy.wait(3000);

    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="complete-header"]').should(
      "contain",
      "Thank you for your order!"
    );
  });
});

describe("Cart - Basic Positive", () => {
  beforeEach(() => {
    cy.login();
  });

  afterEach(() => {
    cy.wait(5000);
  });

  it("TC-Cart-01: Navigate to cart page from products", () => {
    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");
  });

  it("TC-Cart-02: Continue shopping from cart", () => {
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="continue-shopping"]').click();
    cy.url().should("include", "/inventory.html");
  });

  it("TC-Cart-03: Remove product from cart (Cart Page)", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").should("contain", "1");
    cy.wait(3000);
    // cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get(".cart_item").should("not.exist");
  });
});

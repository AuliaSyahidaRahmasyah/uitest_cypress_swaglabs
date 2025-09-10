describe("Products Page - Basic", () => {
  beforeEach(() => {
    cy.login();
    cy.url().should("include", "/inventory.html");
    cy.contains("Products").should("be.visible");
  });

  afterEach(() => {
    cy.wait(5000);
  });

  it("TC-PRODUCT-01: Scroll down & up", () => {
    cy.scrollTo("bottom");
    cy.wait(1000);
    cy.scrollTo("top");
  });

  it("TC-PRODUCT-02: Click first product title", () => {
    cy.get(".inventory_item_name").first().click();
    cy.url().should("include", "/inventory-item.html");
    cy.get(".inventory_details_name").should("contain", "Sauce Labs Backpack");
  });

  it("TC-PRODUCT-03: Add first product to cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").should("contain", "1");
  });

  it("TC-PRODUCT-04: Remove product from cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").should("contain", "1");
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").should("not.exist");
  });
});

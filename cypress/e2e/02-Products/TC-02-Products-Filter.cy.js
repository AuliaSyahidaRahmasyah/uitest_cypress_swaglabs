describe("Products Page - Filter", () => {
  beforeEach(() => {
    cy.login();
    cy.url().should("include", "/inventory.html");
    cy.contains("Products").should("be.visible");
  });

  afterEach(() => {
    cy.wait(5000);
  });

  it("TC-PRODUCT-05: Filter Name (Z to A)", () => {
    cy.get('[data-test="product-sort-container"]').select("za");
    cy.get(".inventory_item_name").then((items) => {
      const names = [...items].map((el) => el.innerText);
      const sorted = [...names].sort().reverse();
      expect(names).to.deep.equal(sorted);
    });
  });

  it("TC-PRODUCT-06: Filter Price (Low to High)", () => {
    cy.get('[data-test="product-sort-container"]').select("lohi");
    cy.get(".inventory_item_price").then((prices) => {
      const values = [...prices].map((el) =>
        parseFloat(el.innerText.replace("$", ""))
      );
      const sorted = [...values].sort((a, b) => a - b);
      expect(values).to.deep.equal(sorted);
    });
  });

  it("TC-PRODUCT-07: Filter Price (High to Low)", () => {
    cy.get('[data-test="product-sort-container"]').select("hilo");
    cy.get(".inventory_item_price").then((prices) => {
      const values = [...prices].map((el) =>
        parseFloat(el.innerText.replace("$", ""))
      );
      const sorted = [...values].sort((a, b) => b - a);
      expect(values).to.deep.equal(sorted);
    });
  });
});

describe("Main Page", () => {
  it("loads the main page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-test=component-menu]").should("not.be.visible");
  });
});

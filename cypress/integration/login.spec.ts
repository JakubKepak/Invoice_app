describe("Main login page", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Successful login", () => {
    cy.get("[data-test=component-menu]").should("not.be.visible");

    cy.get("[data-test=component-login-username]").type("Pepa");
    cy.get("[data-test=component-login-password]").type("test");

    cy.get("[data-test=component-loginButton]").click();
    cy.get("[data-test=component-loginButton]")
      .invoke("text")
      .should("equal", "Logging in ...");

    cy.get("[data-test=component-overviewPage-Header]").should("be.visible");
  });

  it("Wrong User", () => {
    cy.get("[data-test=component-login-username]").type("Nesmysl");
    cy.get("[data-test=component-login-password]").type("test");
    cy.get("[data-test=component-loginButton]").click();

    cy.get("[data-test=component-login-error-message]")
      .invoke("text")
      .should("equal", "User does not exist");
  });

  it("Wrong Password", () => {
    cy.get("[data-test=component-login-username]").type("Pepa");
    cy.get("[data-test=component-login-password]").type("lol");
    cy.get("[data-test=component-loginButton]").click();

    cy.get("[data-test=component-login-error-message]")
      .invoke("text")
      .should("equal", "incorrect password");
  });
});

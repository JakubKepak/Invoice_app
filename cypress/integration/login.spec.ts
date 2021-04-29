describe("Main login page", () => {
  beforeEach(() => {
    cy.visit("/login");

    // aliasing
    cy.get("[data-test=component-login-username]").as("usernameInputField");
    cy.get("[data-test=component-login-password]").as("passwordInputField");
    cy.get("[data-test=component-loginButton]").as("loginButton");
  });

  it("Successful login", () => {
    cy.get("[data-test=component-menu]").should("not.be.visible");

    cy.get("@usernameInputField").type("Pepa");
    cy.get("@passwordInputField").type("test");

    cy.get("@loginButton").click();
    cy.get("@loginButton").invoke("text").should("equal", "Logging in ...");

    cy.get("[data-test=component-overviewPage-Header]").should("be.visible");
  });

  it("Wrong User", () => {
    cy.get("@usernameInputField").type("Nesmysl");
    cy.get("@passwordInputField").type("test");
    cy.get("@loginButton").click();

    cy.get("[data-test=component-login-error-message]")
      .invoke("text")
      .should("equal", "User does not exist");
  });

  it("Wrong Password", () => {
    cy.get("@usernameInputField").type("Pepa");
    cy.get("@passwordInputField").type("lol");
    cy.get("@loginButton").click();

    cy.get("[data-test=component-login-error-message]")
      .invoke("text")
      .should("equal", "incorrect password");
  });

  it("Form validations", () => {
    cy.get("@loginButton").click();

    cy.get("[data-test=form-input-filed-error-message]")
      .first()
      .invoke("text")
      .should("equal", "Username is required");

    cy.get("[data-test=form-input-filed-error-message]")
      .last()
      .invoke("text")
      .should("equal", "Password is required");
  });
});

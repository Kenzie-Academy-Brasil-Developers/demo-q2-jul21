context("Cart", () => {
  it("Enter the landing page and select products", () => {
    cy.visit("http://localhost:3000");

    cy.viewport(1440, 900);
    cy.wait(500);

    cy.get(":nth-child(1) > div > button > span").click();

    cy.get(":nth-child(2) > div > button > span").click();

    cy.get('[href="/cart"] > :nth-child(2)').click();
  });

  it("Tries to login after finishing order in cart - Missing Credentials", () => {
    cy.intercept("POST", "/sessions", {
      statusCode: 200,
      body: {
        access: "jwt-token",
      },
    }).as("login");

    cy.get(".MuiButtonBase-root").click();

    cy.get('[data-testid="submitButton"]').click();
    cy.get('[data-testid="passwordTestId"] > .MuiFormHelperText-root').should(
      "have.text",
      "Mínimo de 6 dígitos"
    );
  });

  it("Tries to login after finishing order in cart - Wrong Credentials", () => {
    cy.get(
      '[data-testid="userNameTestId"] > .MuiInputBase-root > .MuiInputBase-input'
    ).type("invalid-user");

    cy.get(
      '[data-testid="passwordTestId"] > .MuiInputBase-root > .MuiInputBase-input'
    ).type("123456789");

    cy.get(".MuiButtonBase-root").click();

    cy.get('[data-testid="submitButton"]').click();

    cy.get(".sc-gKclnd > :nth-child(2)").should(
      "have.text",
      "Usuário ou senha incorretas!"
    );
  });

  it("Tries to login after finishing order in cart - Right Credentials", () => {
    cy.get(
      '[data-testid="userNameTestId"] > .MuiInputBase-root > .MuiInputBase-input'
    )
      .clear()
      .type("gabriel");

    cy.get(
      '[data-testid="passwordTestId"] > .MuiInputBase-root > .MuiInputBase-input'
    )
      .clear()
      .type("123456");

    cy.get(".MuiButtonBase-root").click();

    cy.get('[data-testid="submitButton"]').click();
  });
});

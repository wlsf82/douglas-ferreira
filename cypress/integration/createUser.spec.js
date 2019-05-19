describe("Create user", () => {
  beforeEach(() => cy.visit("/users/new"));

  it("successfully creates a user", () => {
    cy.createUser("Douglas", "Ferreira", "foo@bar.baz");

    cy.get("#notice")
      .should("contain", "Usuário Criado com sucesso");
  });
});
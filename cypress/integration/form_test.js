describe("Form - testing our form inputs", function() {
  this.beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  it('Sprint test the pizza form', function() {
    cy.get('[data-cy="name"]').type("Paulo").should("have.value", "Paulo");
    cy.get('[type="checkbox"]').check();
    cy.get('[type="submit"]').click();
  });
});
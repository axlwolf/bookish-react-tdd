describe('Bookish App', () => {
  it("Visits the Bookish", () => {
    cy.visit("http://localhost:5173/");
    cy.get("h2[data-test='heading']").contains("Bookish")
  })
})

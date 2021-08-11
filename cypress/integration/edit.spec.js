describe("Edit mode", () => {
  it("should enter edit mode", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get(
      '[style="position:fixed;bottom:56px;left:0px;z-index:200"] > a'
    ).click();
    /* ==== End Cypress Studio ==== */
  });
  it("add content to the home page", () => {
    cy.visit("http://localhost:3000/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get(
      '[style="position:fixed;bottom:56px;left:0px;z-index:200"] > a'
    ).click();
    cy.get(`[aria-label="toggles cms sidebar"]`).click();
    cy.get(".edit-page--list-parent > :nth-child(1)").click();
    cy.get(":nth-child(1) > .BaseTextField-sc-1hz3p6r").clear();
    cy.get(":nth-child(1) > .BaseTextField-sc-1hz3p6r").type("This is an edit");
    const test = cy.get(".ProseMirror");
    console.log({ test });
    test.click();
    cy.get('[data-tooltip="Heading"]').click();
    cy.get(".HeadingThree-sc-18gsyhq").click();
    cy.get(".lgsGjh").click();
    /* ==== End Cypress Studio ==== */
  });
});

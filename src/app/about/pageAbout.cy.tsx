import About from "../page";

describe("<About/>", () => {
  it("renders", () => {
    cy.mount(<About />);

    cy.get("h1").contains("About Page");
    cy.get('a[href="/"]').should("be.visible");
  });
});

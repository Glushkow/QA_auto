import AccessoriesPage from "../../cypress/page_objects/accessoriesPage";
import SearchResultsPage from "../../cypress/page_objects/searchResultsPage";

//let url='https://store.google.com/us/collection/accessories_wall?=en-US';

/*describe("Google store", () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  it("Positive:Create user", () => {
    cy.visit(url);
    cy.get('.header-search-icon').click({force: true});
    cy.get('input[aria-label="Search Google Store"]').type(
      `Google pixel buds{enter}`);
    cy.get('a[href="/us/product/pixel_buds"]').should("exist");
  });
});*/

describe("Test store", () => {
  before(() => {
    cy.fixture("product").then((data) => {
      cy.wrap(data).as("productData");
    });
  });
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  it("Search google", () => {
    cy.get("@productData").then((productData) => {
      cy.log("given User is at AcPage");
      AccessoriesPage.open();

      cy.log("search product by name");
      AccessoriesPage.performSearch(productData.name);

      SearchResultsPage.getProductByDocId(productData.url).should("exist")

      //cy.get('a[href="/product/pixel_buds"]').should("exist");
    });
  });
});

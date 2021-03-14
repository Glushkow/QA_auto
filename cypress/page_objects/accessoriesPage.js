import searchResultsPage from './searchResultsPage';

class AccessoriesPage {
  open() {
    cy.visit(`${Cypress.env('googleURL')}/collection/accessories_wall?=en-US`);
  }

  get searchIcon() {
    return cy.get('.header-search-icon');
  }

  get searchInput() {
    return cy.get('input[aria-label="Search Google Store"]');
  }

  performSearch(productToSearch) {
    this.searchIcon.click();
    this.searchInput.type(`${productToSearch} {enter}`);
  }
}

export default new AccessoriesPage();

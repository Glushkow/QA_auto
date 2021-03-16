//Training to find elements on Techstep Academy

describe("Locators search", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    it("Finding elements on page", () => {
        cy.visit(`${Cypress.env('UIpracticeURl')}/training-ground`);
        cy.get('input[id="ipt2"]').should("exist");
        cy.get('//button[id="@b4"]').should("exist")
    });
});


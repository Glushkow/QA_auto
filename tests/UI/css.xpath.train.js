//Training to find elements on Techstep Academy

describe("Locators search", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    let test = it("Finding elements on page", () => {
        cy.visit(`${Cypress.env('UIpracticeURl')}/training-ground`);
        //train css
        cy.get('input[id="ipt2"]').should("exist");
        //train xpath
        cy.xpath('//button[@id="b4"]').should("exist")
        cy.xpath('//div[@id="lower-logo"]//a[.="TechStep Academy"]').should("exist")
        cy.xpath('//a[@href="#"]').should("exist")
        //train css with 2 param
        cy.get('nav[data-content-field="navigation"] [href="/workshops"]').should("exist")
        //css empty field check
        cy.get('input[id="ipt1"]').should("be.empty")
        //css dropdown list has element
        cy.get('select[id="sel1"]').should("have.value", "first")

    })

});


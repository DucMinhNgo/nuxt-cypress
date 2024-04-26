describe("Check UI Elements", () => {
    it("Checking Radio Buttons", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

        // visibility of radio buttons
        cy.get('input#sex_1').should('be.visible');
        cy.get('input#sex_2').should('be.visible');
        
        // selecting radio buttons
        cy.get('input#sex_1').check().should('be.checked');
        cy.get('input#sex_2').should('not.be.checked');

        cy.get('input#sex_2').check().should('be.checked');
        cy.get('input#sex_1').should('not.be.checked');
    })
})
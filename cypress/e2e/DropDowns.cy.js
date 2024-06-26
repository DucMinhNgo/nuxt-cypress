describe("Handle dropdown", () => {
    it('dropdown with select', () => {
        cy.visit("http://localhost:3000");

        cy.get('select[name="country"]').select('Chile').should('have.value', 'Chile');
    });

    it('dropdown without select', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');

        cy.get("#select2-billing_country-container").click();

        cy.get("input[role='combobox']").type("Italy").type('{enter}');

        cy.get("#select2-billing_country-container").should('have.text', 'Italy');
    })

    it('search wikipedia', () => {
        cy.visit('https://www.wikipedia.org/');

        cy.get('input#searchInput').type('Delhi');

        cy.get(".suggestion-title").contains("Delhi University").click();

        // cy.get('input#searchInput').type('Delhi').type('{enter}');

        cy.get('#firstHeading').should('have.text', 'Delhi University');
    })

    it('Dynamic dropdown', () => {
        cy.visit('https://www.google.com/');

        cy.get("textarea[name='q']").type("cypress automation tool");

        cy.get('div.wM6W7d').should('have.length', 13);

        cy.get("div.wM6W7d>span").each(($el, index, $list) => {
            if ($el.text() == 'cypress automation tool cost') {
                cy.wrap($el).click();
            }
        })

        cy.get("textarea[name='q']").should('have.value', 'cypress automation tool cost');
    })
})
describe('XpathLocators', () => {

    it('xpath-locators-1', () => {
        cy.visit('http://www.automationpractice.pl/index.php');
        cy.xpath('//*[@id="home-page-tabs"]/li[2]').click();
        cy.xpath('//*[@id="blockbestsellers"]/li').should('have.length', 6); // add /li at suffix
    })

    it('xpath-locators-2', () => {
        cy.visit('http://www.automationpractice.pl/index.php');
        cy.xpath('//*[@id="home-page-tabs"]/li[2]').click();
        cy.xpath('//*[@id="blockbestsellers"]').xpath('./li').should('have.length', 6); // add ./li with xpath
    })

    it('xpath-locators-3', () => {
        cy.visit('http://www.automationpractice.pl/index.php');
        cy.xpath('//*[@id="home-page-tabs"]/li[2]').click();
        cy.xpath('//*[@id="blockbestsellers"]').within(() => { // within element
            cy.xpath('./li').should('have.length', 6);
        })
    })
})
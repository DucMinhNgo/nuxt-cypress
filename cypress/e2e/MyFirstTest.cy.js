describe('My First Test', () => {
    it('verify title-positive', () => {
      cy.visit('http://localhost:3000/')
      cy.title().should('eq', 'Nuxt Dustin');
    })

    // it('verify title-negative', () => {
    //   cy.visit('http://localhost:3000/')
    //   cy.title().should('eq', 'Nuxt Dustin 123');
    // })

    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
})
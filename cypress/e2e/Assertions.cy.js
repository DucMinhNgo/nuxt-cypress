describe("Assertions", () => {
    it("Implicit assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        // should and
        cy.url().should('include', 'orangehrmlive.com');
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.url().should('contain', 'orangehrmlive');


        cy.url()
        .should('include', 'orangehrmlive.com')
        .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain', 'orangehrmlive');

        cy.url()
        .should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrmlive');

        cy.url()
        .should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('not.contain', 'orangehrmlive1');

        cy.title().should('eq', 'OrangeHRM')
        .and('contain', 'Orange')
        .and('contain', 'HRM');

        cy.get(".orangehrm-login-branding > img").should("be.visible")
        .and("exist");

        cy.xpath("//a").should("have.length", "5");

        // cy.get("input[placeholder='Nombre de usuario']").type("Admin");
        // cy.get("input[placeholder='Nombre de usuario']").should("have.value", "Admin");
        // cy.get("input[placeholder='Contraseña']").type("admin123");
        // cy.get("input[placeholder='Contraseña']").should("have.value", "admin123");
        // cy.get("button[type='submit']").click();

    })

    it("Explicit assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[name='username']").type("Admin");
        cy.get("input[name='username']").should("have.value", "Admin");
        cy.get("input[name='password']").type("admin123");
        cy.get("input[name='password']").should("have.value", "admin123");
        cy.get("button[type='submit']").click();

        cy.get(".oxd-userdropdown-name").contains("manda user");

        let expName = "manda user";
        cy.get(".oxd-userdropdown-name").then((x) => {
            let actName =  x.text();

            // BDD style
            expect(actName).to.equal(expName);
            expect(actName).to.not.equal(expName);

            // TDD style
            assert.equal(actName, expName);
            assert.notEqual(actName, expName);
        })
    });
})
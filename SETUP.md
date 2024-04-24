> yarn add -D vuetify vite-plugin-vuetify

> yarn add @mdi/font

https://www.codybontecou.com/how-to-use-vuetify-with-nuxt-3.html

# Cypress (Unit testing)

https://www.codybontecou.com/lets-setup-nuxt-3-with-cypress.html

> yarn add cypress

> npx cypress open

https://www.youtube.com/watch?v=cnnkb0AuIFI&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU&index=2

# Write the basic test case

> yarn cypress:run --spec cypress/e2e/MyFirstTest.cy.js

# Locators

- CSS selector
  - tag id (tag.#id)
  - tag class tag.class
  - tag attribute tag.([attribute='value']) (ex: input[name="dustin"])
  - tag class attribute tag.class[[attribute='value']]
- Xpath
  > yarn add cypress-xpath

cy.get(Locator)

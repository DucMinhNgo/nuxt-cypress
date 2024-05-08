import L1AtomCountrySelect from '../../components/L1_Atom/CountrySelect.vue'

describe('<L1AtomCountrySelect />', () => {
  it('renders', async () => {
    const data  = await import('../../mock/data/address.json');
    cy.mount(L1AtomCountrySelect, { props: { products: data.default } });

    cy.get('select[name="country"]').should('be.visible')

    cy.wait(1000)

    cy.get('select[name="country"]').select('Angola').should('have.value', 'Angola');
  })
})
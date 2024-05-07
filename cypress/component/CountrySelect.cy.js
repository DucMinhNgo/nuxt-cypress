import L1AtomCountrySelect from '../../components/L1_Atom/CountrySelect.vue'

describe('<L1AtomCountrySelect />', () => {
  it('renders', () => {
    cy.mount(L1AtomCountrySelect, { props: { products: [{name: 'Dustin', id: 'Dustin'}] } });

    cy.get('select[name="country"]').select('Chile').should('have.value', 'Chile');
  })
})
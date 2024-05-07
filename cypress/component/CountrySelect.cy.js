import CountrySelect from '../../components/L1_Atom/CountrySelect.vue'

describe('<CountrySelect />', () => {
  it('renders', () => {
    cy.mount(CountrySelect);

    cy.get('select[name="country"]').select('Chile').should('have.value', 'Chile');
  })
})
import ProductCard from '../../components/L1_Atom/ProductCard.vue';

describe('<ProductCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ProductCard)
  })
})
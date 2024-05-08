import L1AtomProductCard from '../../components/L1_Atom/ProductCard.vue';

describe('<L1AtomProductCard />', () => {
  it('renders', () => {
    const product = {
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      id: "1",
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    };
    // see: https://on.cypress.io/mounting-vue
    cy.mount(L1AtomProductCard, {props: {
      product,
    }});

    cy.get('div.card>p').should('have.text', 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'); 
  })
})
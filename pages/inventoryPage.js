import basePage from './basePage';

const inventoryPage = {
  url:            '/inventory',
  productLabel:   'div.product_label',

  productsTitle() {
    return cy.get(this.productLabel)
  }

}
export default {...basePage, ...inventoryPage}
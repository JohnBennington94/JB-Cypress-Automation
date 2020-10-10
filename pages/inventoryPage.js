import basePage from './basePage';

const inventoryPage = {
  url:            '/inventory',
  productLabel:   'div.product_label',
  inventoryItem:  'div.inventory_item',
  addToCart:      'button.btn_primary.btn_inventory',

  productsTitle() {
    return cy.get(this.productLabel)
  },

  inventoryItems() {
    return cy.get(this.inventoryItem)
  },

  addToCartButton() {
    return cy.get(this.addToCart)
  }

}
export default {...basePage, ...inventoryPage}
import inventoryPage from '../pages/inventoryPage'
import loginPage from '../pages/loginPage'

describe('Checking list of products', () => {
  
  //Setup method - before every test
    beforeEach(() => {
    loginPage.goto()
    loginPage.populateLoginFormAndSubmit('standard_user', 'secret_sauce')
    inventoryPage.productsTitle().should('be.visible')
  })

  //Example of only flag, only this test will be ran in this file
  it.only('should show a list of products to a logged in user', () => {
    inventoryPage.inventoryItems().should('have.length.at.least', 1)
  })

  it('should show add to cart buttons on the products page', () => {
    inventoryPage.addToCartButton().should('have.length.at.least', 1)
  })

})
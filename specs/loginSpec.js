import inventoryPage from '../pages/inventoryPage'
import loginPage from '../pages/loginPage'

describe('Checking front end login', () => {
  
  //Setup method - before every test
    beforeEach(() => {
    loginPage.goto()
  })

  it('should login a user with correct credentials entered', () => {
    loginPage.populateLoginFormAndSubmit('standard_user', 'secret_sauce')
    inventoryPage.productsTitle().should('be.visible')
  })

  it('should not login a user with a locked out account', () => {
    loginPage.populateLoginFormAndSubmit('locked_out_user', 'secret_sauce')
    loginPage.loginErrors().should('be.visible')
    loginPage.loginErrors().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
  })

  it('should not login a user without specifying a password', () => {
    loginPage.populateUsernameInput('standard_user')
    loginPage.submitLoginForm()
    loginPage.loginErrors().should('be.visible')
    loginPage.loginErrors().should('have.text', 'Epic sadface: Password is required')
  })

  //Failure example
  it('should not login a user without specifying a username', () => {
    loginPage.submitLoginForm()
    loginPage.loginErrors().should('be.visible')
    loginPage.loginErrors().should('have.text', 'sadface: Username is required')
  })

})
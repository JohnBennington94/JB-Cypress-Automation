import basePage from './basePage';

const loginPage = {
  url:            '/',
  usernameInput:  'input#user-name',
  passwordInput:  'input#password',
  loginButton:    'input#login-button',
  loginError:     'h3',

  populateUsernameInput(username) {
    cy.get(this.usernameInput)
      .click().type(username)
  },

  populatePasswordInput(password) {
    cy.get(this.passwordInput)
      .click().type(password)
  },

  submitLoginForm(){
    cy.get(this.loginButton)
    .click()
  },

  populateLoginFormAndSubmit(username, password) {
    this.populateUsernameInput(username)
    this.populatePasswordInput(password)
    this.submitLoginForm()
  },

  loginErrors() {
     return cy.get(this.loginError)
  },

}
export default {...basePage, ...loginPage}
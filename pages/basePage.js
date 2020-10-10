const basePage = {
  baseUrl: 'https://www.saucedemo.com',

  /**
   * wrapper for visit so we can use relative urls and append them to baseUrl
   * @param  {string} relativeUrl
   */
  goto(relativeUrl = '') {
    cy.visit(`${this.baseUrl}${this.url}${relativeUrl}`)
  }
}
export default basePage
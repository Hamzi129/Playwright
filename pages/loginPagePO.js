class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginclick = ".ico-login";
    this.email = "#Email";
    this.password = "#Password";
    this.loginButton = ".button-1.login-button";
  }

  async Loginfun() {
    await this.page.locator(this.loginclick).click();
    await this.page.locator(this.email).fill("hamza69@gmail.com");
    await this.page.locator(this.password).fill("hamza129");
    await this.page.locator(this.loginButton).click();
  }
  async LoginSuccessful() {
    return await this.page.locator(".ico-logout").isVisible(); // Assuming a success message appears
  }
}
module.exports = LoginPage;

// pages/registerPage.js
class RegisterPage {
    constructor(page) {
      this.page = page;
      //this.registerlink = page.locator('[class="ico-register"]'); // click Register Button
      this.registerclick = ".ico-register";
      this.genderSelection = "#gender-male"; // gender selection
      this.firstNameInput = "#FirstName"; // First name field
      this.lastNameInput = "#LastName"; // Last name field
      this.emailInput = "#Email"; // Email field
      this.passwordInput = "#Password"; // Password field
      this.confirmPasswordInput = "#ConfirmPassword"; // Confirm password field
      this.submitButton = "#register-button"; // Submit button
      this.verifyRegistration = ".ico-logout";
    }
  
    // Method to register a new user
    async registerUser() {
      await this.page.locator(this.registerclick).click();
      await this.page.locator(this.genderSelection).click();
      await this.page.fill(this.firstNameInput, "hamza");
      await this.page.fill(this.lastNameInput, "saleem");
      await this.page.fill(this.emailInput, "hamza90090@gmail.com");
      await this.page.fill(this.passwordInput, "hamza129");
      await this.page.fill(this.confirmPasswordInput, "hamza129");
      await this.page.click(this.submitButton);
    }
  
    // Method to verify registration success
    async registrationSuccessful() {
      return await this.page.locator(".ico-logout").isVisible(); // Assuming a success message appears
    }
  }
  module.exports = RegisterPage;
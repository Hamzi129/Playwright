const  { test, expect } = require ("playwright/test");
const RegisterPage = require("../pages/registerpagePO")
const LoginPage = require("../pages/loginPagePO");

test.beforeEach(async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
});

test.describe("DemoWebshop Register and Login usin POM", () => {
  test("Register a new user", async ({ page }) => {
    const register = new RegisterPage();
    await register.registerUser();
    await register.registrationSuccessful();
    await page.waitForTimeout(4000);
  });

  test("Login with Registered User", async ({ page }) => {
    const lg = new LoginPage();
    await lg.Loginfun();
    await lg.LoginSuccessful();
    await page.waitForTimeout(4000);
  });
});
package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefenition extends TestBase {

	LoginPage loginPage;

	@Before
	public void method() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);//initializing PageObject before any action where we enter password first not username
	}

	@Given("^User is on the TechFios login page$")
	public void user_is_on_the_TechFios_login_page() {
		driver.get("https://techfios.com/billing/?ng=admin/");
	}

	@When("^Users enter username as \"([^\"]*)\"$")
	public void users_enter_username_as(String username) {
		loginPage.enterUserName(username);
	}

	@When("^Users enter password as \"([^\"]*)\"$")
	public void users_enter_password_as(String password) {
		loginPage.enterPassword(password);
	}

	@When("^Users clicks on Submit button$")
	public void users_clicks_on_Submit_button() {
		loginPage.clickSignInButton();
	}

	@Then("^User lands on Dashboard page$")
	public void user_lands_on_Dashboard_page() {

		Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
		takeScreenshot(driver);
	}
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
}

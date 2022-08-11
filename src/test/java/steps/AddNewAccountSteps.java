package steps;


import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.AddNewAccount;
import pages.LoginPage;
import pages.TestBase;

public class AddNewAccountSteps extends TestBase{
	
	AddNewAccount addNewAccount;
	LoginPage loginPage;
	
	@Before
	public void method() {
		initDriver();
		addNewAccount=PageFactory.initElements(driver, AddNewAccount.class);
		loginPage=PageFactory.initElements(driver, LoginPage.class);
	}
	@Given("^The user is on the Techfios login page$")
	public void the_user_is_on_the_Techfios_login_page() throws Throwable {
	    driver.get("https://techfios.com/billing/?ng=admin/");
	    
	}

	@When("^User inserts \"([^\"]*)\"$")
	public void user_inserts(String username){
		loginPage.enterUserName(username);
	}
	
	@When("^User enters the \"([^\"]*)\"$")
	public void user_enters_the(String password){
		loginPage.enterPassword(password);
	}

	@When("^User clicks on the \"([^\"]*)\" button$")
	public void user_clicks_on_the_button(String arg1){
		loginPage.clickSignInButton();
	}

	@Then("^User should land on the Dashboard page$")
	public void user_should_land_on_the_Dashboard_page(){
		Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
		takeScreenshot(driver);
	}

	@Then("^User clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String arg1) throws Throwable {
	   addNewAccount.clickBankAndCashElement(); 
	   
	}
	@Then("^User clicks on the \"([^\"]*)\"$")
	public void user_clicks_on_the(String arg1){
		
		
	}


	@Then("^User enters \"([^\"]*)\" in accounts page$")
	public void user_enters_in_accounts_page(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully(DataTable arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
	    throw new PendingException();
	}
	
	
	public void tearDown() {
		driver.close();
		driver.quit();
	}
	
}

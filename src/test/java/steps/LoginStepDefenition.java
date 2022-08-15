package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.AddNewAccountPage;
import pages.DataBasePage;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefenition extends TestBase {
	
	AddNewAccountPage addNewAccount;
	LoginPage loginPage;
	DataBasePage dataBasePage;

	@Before
	public void method() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);// initializing PageObject before any action where
		dataBasePage=new DataBasePage();																// we enter password first not username
		addNewAccount=PageFactory.initElements(driver, AddNewAccountPage.class);
	}

	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() throws Throwable {
		driver.get("https://techfios.com/billing/?ng=admin/");
	}

	@When("^User enters the \"([^\"]*)\"$")
	public void user_enters_the_username(String username){
		loginPage.enterUserName(username);
	}

	@When("^User enters the\"([^\"]*)\"$")
	public void user_enters_the_password(String password){
		loginPage.enterPassword(password);
	}

	@When("^User clicks on\"([^\"]*)\" button$")
	public void user_clicks_on_login_button(String arg){
		loginPage.clickSignInButton();
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page(){
		Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
		loginPage.getPageTitle();
	}

	@Then("^User clicks on\"([^\"]*)\"$")
	public void user_clicks_on_bank_cash(String arg){
		addNewAccount.clickBankAndCashElement();
	}

	@Then("^User clicks on the\"([^\"]*)\"$")
	public void user_clicks_on_the_new_account(String arg){
		addNewAccount.clickNewAccountElement();
	}

	@Then("^User enters\"([^\"]*)\"in accounts page$")
	public void user_enters_account_title_in_accounts_page(String accountTitle){
		addNewAccount.insertAccountTitle(accountTitle);
	}
	
	@Then("^User enters\"([^\"]*)\"in the accounts page$")
	public void user_enters_description_in_the_accounts_page(String description){
		addNewAccount.insertAccountDescription(description);
	}
	
	@Then("^User enters \"([^\"]*)\"in accounts page$")
	public void user_enters_initial_balance_in_accounts_page(String initialBalance){
		addNewAccount.insertInitialBalance(initialBalance);
	}
	
	@Then("^User enters\"([^\"]*)\" in accounts page$")
	public void user_enters_account_number_in_accounts_page(String accountNumber){
		addNewAccount.insertAccountNumber(accountNumber);
	}
	
	@Then("^User enters as\"([^\"]*)\"in accounts page$")
	public void user_enters_contact_person_in_accounts_page(String contactPerson){
		addNewAccount.insertContactPerson(contactPerson);
	}
	
	@Then("^User enters as \"([^\"]*)\"in accounts page$")
	public void user_enters_phone_in_accounts_page(String phone){
		addNewAccount.insertPhoneNumber(phone);
	}
	
	@Then("^User enters \"([^\"]*)\" in accounts page$")
	public void user_enters_banking_url_in_accounts_page(String bankingURL){
		addNewAccount.insertInternetBankingUrl(bankingURL);
	}
	
	@Then("^User clicks on \"([^\"]*)\" button$")
	public void user_clicks_on_submit_button(String arg1){
		addNewAccount.clickSubmitButton();
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully(){
		addNewAccount.clickListAccounts();
		addNewAccount.validateInsertedCustomer();
	}
	
	
	

//	@When("^Users enter username from database$")
//	public void users_enter_username_from_database() {
//
//	}
//
//	@When("^Users enter password from database$")
//	public void users_enter_password_from_database() {
//
//	}
//
//	@When("^Users enter \"([^\"]*)\" from database$")
//	public void users_enter_from_database(String userData) {
////		if(userData.equalsIgnoreCase("username")) {
////			loginPage.enterUserName("Get from Db");
////		}else if(userData.equalsIgnoreCase("username")) {
////			loginPage.enterPassword("Get from Db");
////		}else {
////			System.out.println("unable to retreive data:'"+userData+"' from DB");
////		}
//		
//		switch(userData) {
//		case "username":
//			loginPage.enterUserName(dataBasePage.getDataFromDatabase("username"));
//			System.out.println("Username from DB: "+ dataBasePage.getDataFromDatabase("username"));
//			break;
//		case "password":
//			loginPage.enterPassword(dataBasePage.getDataFromDatabase("password"));
//			System.out.println("Password from DB: "+ dataBasePage.getDataFromDatabase("password"));
//			break;
//			default:
//				System.out.println("unable to retreive data:'"+userData+"' from DB");
//		}
//
//	}



	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
}

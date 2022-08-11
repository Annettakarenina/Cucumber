package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import junit.framework.Assert;

public class AddNewAccount {
	
	WebDriver driver;
	
	public AddNewAccount(WebDriver driver) {
		this.driver=driver;
	}
	
	
	@FindBy(how=How.XPATH, using="//*[contains(text(), 'Bank & Cash')]") WebElement BANK_AND_CASH_ELEMENT;
	@FindBy(how=How.XPATH, using="//*[contains(text(), 'New Account')]") WebElement NEW_ACCOUNT_ELEMENT;
	@FindBy(how=How.XPATH, using="//h2[contains(text(), 'Accounts')]") WebElement NEW_ACCOUNT_PAGE_HEADER_ELEMENT;
	@FindBy(how=How.XPATH, using="//input[@id='account']") WebElement ACCOUNT_TITLE_ELEMENT;
	@FindBy(how=How.XPATH, using="//input[@id='description']") WebElement ACCOUNT_DESCRIPTION_ELEMENT;
	@FindBy(how=How.XPATH, using="//input[@id='balance']") WebElement INITIAL_BALANCE_ELEMENT;
	@FindBy(how=How.XPATH, using="//input[@id='account_number']") WebElement ACCOUNT_NUMBER_ELEMENT;
	@FindBy(how=How.XPATH, using="//input[@id='contact_person']") WebElement CONTACT_PERSON_ELEMENT;
	@FindBy(how=How.XPATH, using="//input[@id='contact_phone']") WebElement PHONE_ELEMENT;
	@FindBy(how=How.XPATH, using="//input[@id='ib_url']") WebElement INTERNET_BANKING_URL_ELEMENT;
	@FindBy(how=How.XPATH, using="//button[@class='btn btn-primary']") WebElement SUBMIT_BUTTON_ELEMENT;
	@FindBy(how=How.XPATH, using="//a[contains(text(), 'List Accounts')]") WebElement LIST_ACCOUNTS_ELEMENT;
	
	public void clickBankAndCashElement() {
		BANK_AND_CASH_ELEMENT.click();
	}
	public void clickNewAccountElement() {
		NEW_ACCOUNT_ELEMENT.click();
	}
	public void verifyNewAccountPageHeader() {
		Assert.assertEquals("Accounts", NEW_ACCOUNT_PAGE_HEADER_ELEMENT.getText());
	}
	public void insertAccountTitle(String accountTitle) {
		ACCOUNT_TITLE_ELEMENT.sendKeys(accountTitle);
	}
	public void insertAccountDescription(String accountDescription) {
		ACCOUNT_DESCRIPTION_ELEMENT.sendKeys(accountDescription);
	}
	public void insertInitialBalance(String initialBalance) {
		INITIAL_BALANCE_ELEMENT.sendKeys(initialBalance);
	}
	public void insertAccountNumber(String accountNumber) {
		ACCOUNT_NUMBER_ELEMENT.sendKeys(accountNumber);
	}
	public void insertContactPerson(String personName) {
		CONTACT_PERSON_ELEMENT.sendKeys(personName);
	}
	public void insertPhoneNumber(String number) {
		PHONE_ELEMENT.sendKeys(number);
	}
	public void insertInternetBankingUrl(String url) {
		INTERNET_BANKING_URL_ELEMENT.sendKeys(url);
	}
	public void clickSubmitButton() {
		SUBMIT_BUTTON_ELEMENT.click();
	}
	public void clickListAccounts() {
		LIST_ACCOUNTS_ELEMENT.click();
	}
}
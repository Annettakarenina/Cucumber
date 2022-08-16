package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import junit.framework.Assert;

<<<<<<< HEAD
public class AddNewAccountPage extends TestBase {
	
 
		
		WebDriver driver;
		
		public AddNewAccountPage(WebDriver driver) {
			this.driver=driver;
		}
		int genNumber;
		String insertedName;
		
		@FindBy(how=How.XPATH, using="//span[contains(text(), 'Bank & Cash')]") WebElement BANK_AND_CASH_ELEMENT;
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
			genNumber=generateRandomNumber(95);
			ACCOUNT_NUMBER_ELEMENT.sendKeys(accountNumber+genNumber);
		}
		public void insertContactPerson(String personName) {
			genNumber=generateRandomNumber(95);
			CONTACT_PERSON_ELEMENT.sendKeys(personName+genNumber);
		}
		public void insertPhoneNumber(String number) {
			genNumber=generateRandomNumber(95);
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
			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		
		String beforeXpath="//tbody/tr[";
		String afterXpath="]/td[1]";
		
		public void validateInsertedCustomer() {
		for(int i=2;i<+10;i++) {
			String namesFromList=driver.findElement(By.xpath(beforeXpath+i+afterXpath)).getText();
//			System.out.println(namesFromList);
//			Assert.assertEquals(namesFromList, insertedName, "Inserted name is not available");
			
			if(namesFromList.equalsIgnoreCase(insertedName)) {
				System.out.println("Inserted name exists");
			}
			
			break;//         loop has to stop once the value matches
		}
	}
	}
	

=======
public class AddNewAccountPage extends TestBase{
	
	WebDriver driver;
	
	public AddNewAccountPage(WebDriver driver) {
		this.driver=driver;
	}
	int genNumber;
	String insertedName;
	
	@FindBy(how=How.XPATH, using="//span[contains(text(), 'Bank & Cash')]") WebElement BANK_AND_CASH_ELEMENT;
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
		genNumber=generateRandomNumber(95);
		ACCOUNT_NUMBER_ELEMENT.sendKeys(accountNumber+genNumber);
	}
	public void insertContactPerson(String personName) {
		genNumber=generateRandomNumber(95);
		CONTACT_PERSON_ELEMENT.sendKeys(personName+genNumber);
	}
	public void insertPhoneNumber(String number) {
		genNumber=generateRandomNumber(95);
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
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	String beforeXpath="//tbody/tr[";
	String afterXpath="]/td[1]";
	
	public void validateInsertedCustomer() {
	for(int i=2;i<+10;i++) {
		String namesFromList=driver.findElement(By.xpath(beforeXpath+i+afterXpath)).getText();
//		System.out.println(namesFromList);
//		Assert.assertEquals(namesFromList, insertedName, "Inserted name is not available");
		
		if(namesFromList.equalsIgnoreCase(insertedName)) {
			System.out.println("Inserted name exists");
		}
		
		break;//         loop has to stop once the value matches
	}
}
}
>>>>>>> 02d0ca98d1341b6ea6bb70a0540b39ec0d784ece

Feature: Techfios bank abd cash New Account Functionality

@AddAccountScenario
Scenario Outline: User should be able to login with valid credentials 
	and open a new account	
	Given User is on the techfios login page 
	When User enters the "<username>" 
	When User enters the"<password>"
	And  User clicks on"<login>" button
	Then User should land on Dashboard page 
	And User clicks on"<bankCash>"
	And User clicks on the"<newAccount>"
	And User enters"<accountTitle>"in accounts page 
	And User enters"<description>"in the accounts page 
	And User enters "<initialBalance>"in accounts page 
	And User enters"<accountNumber>" in accounts page 
	And User enters as"<contactPerson>"in accounts page 
	And User enters as "<Phone>"in accounts page  
	And User enters "<internetBankingURL>" in accounts page 
	And User clicks on "<submit>" button
	Then User should be able to validate account created successfully
    Examples:
    
  | username 	      | password|accountTitle|description|initialBalance|accountNumber|contactPerson|phone      |bankingURL|
  |demo@techfios.com| abc123  |Anya's      |checking   |20            |12365498   |Anna Thomas  |41256863|abc@gtr.com       |
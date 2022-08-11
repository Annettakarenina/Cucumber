

Feature: Techfios bank abd cash New Account Functionality


  Scenario: User should be able to login with valid credentials and open a new account
    Given The user is on the Techfios login page
    When User inserts "<username>"
    When User enters the "<password>"
    And User clicks on the "<login>" button
    Then User should land on the Dashboard page
    And User clicks on "<bankCash>"
    And User clicks on the "<newAccount>"
    And User enters "<accountTitle>" in accounts page
    And User enters "<description>" in accounts page
    And User enters "<initialBalance>" in accounts page
    And User enters "<accountNumber>" in accounts page
    And User enters "<contactPerson>" in accounts page
    And User enters "<Phone>" in accounts page
    And User enters "<accountTitle>" in accounts page
    And User enters "<internetBankingURL>" in accounts page
    And User clicks on "<newAccount>"
    Then User should be able to validate account created successfully
    
    #Examples:
    
    |  	|    |
    



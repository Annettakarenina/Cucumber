@DBFeature @Regression
Feature: TechFios Login functionality validation
@DBScenario
  Scenario: User should be able to login with correct credentials
    Given User is on the TechFios login page
    #When Users enter username from database
    #When Users enter password from database
    When Users enter "username" from database
    When Users enter "password" from database
    When Users clicks on Submit button
    Then User lands on Dashboard page
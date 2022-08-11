
@OtherLoginFeature
Feature: TechFios Other Login validation

Background:    Given User is on the TechFios login page
    
@OtherScenario1
  Scenario Outline: User should not be able to login with incorrect credentials
    Given User is on the TechFios login page
    When Users enter username as "<username>"
    When Users enter password as "<password>"
    When Users clicks on Submit button
    Then User lands on Dashboard page
       
    Examples:
    |username          |password|
    |demo2@techfios.com|abc123|
    |demo@techfios.com|abc124|
    |demo2@techfios.com|abc124|
    

#@OtherScenario2
  #Scenario: User should not be able to login with incorrect credentials
    #Given User is on the TechFios login page
    #When Users enter username as "demo@techfios.com"
    #When Users enter password as "abc124"
    #When Users clicks on Submit button
    #Then User lands on Dashboard page
    #
#@OtherScenario3 @Smoke
  #Scenario: User should be able to login with correct credentials
    #Given User is on the TechFios login page
    #When Users enter username as "demo2@techfios.com"
    #When Users enter password as "abc124"
    #When Users clicks on Submit button
    #Then User lands on Dashboard page


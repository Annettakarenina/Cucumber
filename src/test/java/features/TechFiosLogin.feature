
@LoginFeature
Feature: TechFios Login functionality validation

  Scenario: User should be able to login with correct credentials
    Given User is on the TechFios login page
    When Users enter username as "demo@techfios.com"
    When Users enter password as "abc123"
    When Users clicks on Submit button
    Then User lands on Dashboard page

@OtherScenario2 @Smoke
  Scenario: User should be able to login with correct credentials
    Given User is on the TechFios login page
    When Users enter username as "demo2@techfios.com"
    When Users enter password as "abc123"
    When Users clicks on Submit button
    Then User lands on Dashboard page
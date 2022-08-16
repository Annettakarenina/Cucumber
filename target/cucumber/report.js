$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/TechFiosLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank abd cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-abd-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-abd-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AddAccountScenario"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters the\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on\"\u003clogin\u003e\" button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on\"\u003cbankCash\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on the\"\u003cnewAccount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters\"\u003caccountTitle\u003e\"in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters\"\u003cdescription\u003e\"in the accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters \"\u003cinitialBalance\u003e\"in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters\"\u003caccountNumber\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters as\"\u003ccontactPerson\u003e\"in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters as \"\u003cPhone\u003e\"in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters \"\u003cinternetBankingURL\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on \"\u003csubmit\u003e\" button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-bank-abd-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "phone",
        "bankingURL"
      ],
      "line": 24,
      "id": "techfios-bank-abd-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Anya\u0027s",
        "checking",
        "20",
        "12365498",
        "Anna Thomas",
        "41256863",
        "abc@gtr.com"
      ],
      "line": 25,
      "id": "techfios-bank-abd-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2224370700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-abd-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AddAccountScenario"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters the\"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on\"\u003clogin\u003e\" button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on\"\u003cbankCash\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on the\"\u003cnewAccount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters\"Anya\u0027s\"in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters\"checking\"in the accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters \"20\"in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters\"12365498\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters as\"Anna Thomas\"in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters as \"\u003cPhone\u003e\"in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters \"\u003cinternetBankingURL\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on \"\u003csubmit\u003e\" button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 877728900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    }
  ],
  "location": "LoginStepDefenition.user_enters_the_username(String)"
});
formatter.result({
  "duration": 5075794700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 16
    }
  ],
  "location": "LoginStepDefenition.user_enters_the_password(String)"
});
formatter.result({
  "duration": 3067179100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clogin\u003e",
      "offset": 15
    }
  ],
  "location": "LoginStepDefenition.user_clicks_on_login_button(String)"
});
formatter.result({
  "duration": 9375656000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 6832500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cbankCash\u003e",
      "offset": 15
    }
  ],
  "location": "LoginStepDefenition.user_clicks_on_bank_cash(String)"
});
formatter.result({
  "duration": 53938100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cnewAccount\u003e",
      "offset": 19
    }
  ],
  "location": "LoginStepDefenition.user_clicks_on_the_new_account(String)"
});
formatter.result({
  "duration": 695451500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anya\u0027s",
      "offset": 12
    }
  ],
  "location": "LoginStepDefenition.user_enters_account_title_in_accounts_page(String)"
});
formatter.result({
  "duration": 64656800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "checking",
      "offset": 12
    }
  ],
  "location": "LoginStepDefenition.user_enters_description_in_the_accounts_page(String)"
});
formatter.result({
  "duration": 61417600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 13
    }
  ],
  "location": "LoginStepDefenition.user_enters_initial_balance_in_accounts_page(String)"
});
formatter.result({
  "duration": 62187400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12365498",
      "offset": 12
    }
  ],
  "location": "LoginStepDefenition.user_enters_account_number_in_accounts_page(String)"
});
formatter.result({
  "duration": 68595900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anna Thomas",
      "offset": 15
    }
  ],
  "location": "LoginStepDefenition.user_enters_contact_person_in_accounts_page(String)"
});
formatter.result({
  "duration": 66722500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cPhone\u003e",
      "offset": 16
    }
  ],
  "location": "LoginStepDefenition.user_enters_phone_in_accounts_page(String)"
});
formatter.result({
  "duration": 54126000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cinternetBankingURL\u003e",
      "offset": 13
    }
  ],
  "location": "LoginStepDefenition.user_enters_banking_url_in_accounts_page(String)"
});
formatter.result({
  "duration": 67387700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003csubmit\u003e",
      "offset": 16
    }
  ],
  "location": "LoginStepDefenition.user_clicks_on_submit_button(String)"
});
formatter.result({
  "duration": 633633000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 4064325300,
  "status": "passed"
});
formatter.after({
  "duration": 688985900,
  "status": "passed"
});
});
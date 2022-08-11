$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/TechFiosLogin.feature");
formatter.feature({
  "line": 3,
  "name": "TechFios Login functionality validation",
  "description": "",
  "id": "techfios-login-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@LoginFeature"
    }
  ]
});
formatter.before({
  "duration": 2177766600,
  "status": "passed"
});
formatter.before({
  "duration": 1321910300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to login with correct credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-correct-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on the TechFios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Users enter username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Users enter password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Users clicks on Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User lands on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_is_on_the_TechFios_login_page()"
});
formatter.result({
  "duration": 963029200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefenition.users_enter_username_as(String)"
});
formatter.result({
  "duration": 10042033700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027username\u0027]\"}\n  (Session info: chrome\u003d104.0.5112.81)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-2F3S0DP\u0027, ip: \u0027192.168.254.130\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.81, chrome: {chromedriverVersion: 103.0.5060.134 (8ec6fce403b..., userDataDir: C:\\Users\\annar\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50374}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b53fbd5c3eb01eb65b67043cc9455997\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027username\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat pages.LoginPage.enterUserName(LoginPage.java:23)\r\n\tat steps.LoginStepDefenition.users_enter_username_as(LoginStepDefenition.java:31)\r\n\tat ✽.When Users enter username as \"demo@techfios.com\"(src/test/java/features/TechFiosLogin.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefenition.users_enter_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefenition.users_clicks_on_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefenition.user_lands_on_Dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 683547500,
  "status": "passed"
});
formatter.before({
  "duration": 1378798200,
  "status": "passed"
});
formatter.before({
  "duration": 1399882100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should be able to login with correct credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-correct-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@OtherScenario2"
    },
    {
      "line": 12,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on the TechFios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Users enter username as \"demo2@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Users enter password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Users clicks on Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User lands on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_is_on_the_TechFios_login_page()"
});
formatter.result({
  "duration": 558836200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo2@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefenition.users_enter_username_as(String)"
});
formatter.result({
  "duration": 10059726500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027username\u0027]\"}\n  (Session info: chrome\u003d104.0.5112.81)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-2F3S0DP\u0027, ip: \u0027192.168.254.130\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.81, chrome: {chromedriverVersion: 103.0.5060.134 (8ec6fce403b..., userDataDir: C:\\Users\\annar\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50411}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 69d3a46226c34551d307fb08a77f36c8\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027username\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat pages.LoginPage.enterUserName(LoginPage.java:23)\r\n\tat steps.LoginStepDefenition.users_enter_username_as(LoginStepDefenition.java:31)\r\n\tat ✽.When Users enter username as \"demo2@techfios.com\"(src/test/java/features/TechFiosLogin.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefenition.users_enter_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefenition.users_clicks_on_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefenition.user_lands_on_Dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 618501000,
  "status": "passed"
});
});
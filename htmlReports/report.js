$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("mSpace.feature");
formatter.feature({
  "line": 1,
  "name": "mSpace Login Example",
  "description": "",
  "id": "mspace-login-example",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verification of admin login",
  "description": "",
  "id": "mspace-login-example;verification-of-admin-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user go to mspace login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the Username \"sdpadmin\" and Password \"test123#\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "username need to be as \"SDPADMIN\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "test.user_go_to_mspace_login_page()"
});
formatter.result({
  "duration": 128854415666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdpadmin",
      "offset": 20
    },
    {
      "val": "test123#",
      "offset": 44
    }
  ],
  "location": "test.enter_the_Username_and_Password2(String,String)"
});
formatter.result({
  "duration": 34624172,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#username\"}\n  (Session info: headless chrome\u003d81.0.4044.138)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027shehan-Laptop\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-118-generic\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.138, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /tmp/.com.google.Chrome.x4iyqs}, goog:chromeOptions: {debuggerAddress: localhost:39199}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5e94af86c3dbc74fa936612efc8604d8\n*** Element info: {Using\u003did, value\u003dusername}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\n\tat steps.test.enter_the_Username_and_Password2(test.java:30)\n\tat ✽.When Enter the Username \"sdpadmin\" and Password \"test123#\"(mSpace.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "test.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDPADMIN",
      "offset": 24
    }
  ],
  "location": "test.username_need_to_be_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "test.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Verification of sp login",
  "description": "",
  "id": "mspace-login-example;verification-of-sp-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user go to mspace login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Enter the Username \"akalanka1\" and Password \"mytest123#\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "username need to be as \"AKALANKA1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "test.user_go_to_mspace_login_page()"
});
formatter.result({
  "duration": 75715978995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "akalanka1",
      "offset": 20
    },
    {
      "val": "mytest123#",
      "offset": 45
    }
  ],
  "location": "test.enter_the_Username_and_Password2(String,String)"
});
formatter.result({
  "duration": 53277236,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#username\"}\n  (Session info: headless chrome\u003d81.0.4044.138)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027shehan-Laptop\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-118-generic\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.138, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /tmp/.com.google.Chrome.5sfr9O}, goog:chromeOptions: {debuggerAddress: localhost:42555}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 780648ece28f8e07d7d0e54c7419e265\n*** Element info: {Using\u003did, value\u003dusername}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\n\tat steps.test.enter_the_Username_and_Password2(test.java:30)\n\tat ✽.When Enter the Username \"akalanka1\" and Password \"mytest123#\"(mSpace.feature:12)\n",
  "status": "failed"
});
formatter.match({
  "location": "test.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AKALANKA1",
      "offset": 24
    }
  ],
  "location": "test.username_need_to_be_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "test.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("mSpace2.feature");
formatter.feature({
  "line": 1,
  "name": "mSpace Login Example 2",
  "description": "",
  "id": "mspace-login-example-2",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verification of admin login",
  "description": "",
  "id": "mspace-login-example-2;verification-of-admin-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user go to mspace login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the Username \"sdpadmin\" and Password \"test123#\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "username need to be as \"SDPADMIN\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "test.user_go_to_mspace_login_page()"
});
formatter.result({
  "duration": 99967593704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdpadmin",
      "offset": 20
    },
    {
      "val": "test123#",
      "offset": 44
    }
  ],
  "location": "test.enter_the_Username_and_Password2(String,String)"
});
formatter.result({
  "duration": 43123408,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#username\"}\n  (Session info: headless chrome\u003d81.0.4044.138)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027shehan-Laptop\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-118-generic\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.138, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /tmp/.com.google.Chrome.t5mPaZ}, goog:chromeOptions: {debuggerAddress: localhost:38047}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 17ba86bccb7bdbb7e6f3c485e3e820db\n*** Element info: {Using\u003did, value\u003dusername}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\n\tat steps.test.enter_the_Username_and_Password2(test.java:30)\n\tat ✽.When Enter the Username \"sdpadmin\" and Password \"test123#\"(mSpace2.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "test.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDPADMIN",
      "offset": 24
    }
  ],
  "location": "test.username_need_to_be_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "test.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Verification of sp login",
  "description": "",
  "id": "mspace-login-example-2;verification-of-sp-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user go to mspace login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Enter the Username \"akalanka1\" and Password \"mytest123#\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "username need to be as \"AKALANKA2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "test.user_go_to_mspace_login_page()"
});
formatter.result({
  "duration": 300169539046,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: -0.002\n  (Session info: headless chrome\u003d81.0.4044.138)\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027shehan-Laptop\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-118-generic\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.138, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /tmp/.com.google.Chrome.bysH98}, goog:chromeOptions: {debuggerAddress: localhost:42051}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8327c30567e9acf6f9b1c63d76288e05\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:324)\n\tat steps.test.user_go_to_mspace_login_page(test.java:23)\n\tat ✽.Given user go to mspace login page(mSpace2.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "akalanka1",
      "offset": 20
    },
    {
      "val": "mytest123#",
      "offset": 45
    }
  ],
  "location": "test.enter_the_Username_and_Password2(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "test.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AKALANKA2",
      "offset": 24
    }
  ],
  "location": "test.username_need_to_be_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "test.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});
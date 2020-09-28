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
  "duration": 2983508747,
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
  "duration": 2295423109,
  "status": "passed"
});
formatter.match({
  "location": "test.click_on_login_button()"
});
formatter.result({
  "duration": 5850072447,
  "status": "passed"
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
  "duration": 70502248,
  "status": "passed"
});
formatter.match({
  "location": "test.close_browser()"
});
formatter.result({
  "duration": 125391262,
  "status": "passed"
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
  "duration": 2298731803,
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
  "duration": 2231793826,
  "status": "passed"
});
formatter.match({
  "location": "test.click_on_login_button()"
});
formatter.result({
  "duration": 5943011032,
  "status": "passed"
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
  "duration": 81891194,
  "status": "passed"
});
formatter.match({
  "location": "test.close_browser()"
});
formatter.result({
  "duration": 112130404,
  "status": "passed"
});
});
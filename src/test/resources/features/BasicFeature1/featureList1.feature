Feature: Basic Login Example

  Scenario: Verification of admin login
    Given user go to mspace login page
    When Enter the Username "sdpadmin" and Password "test123#"
    Then click on login button
    Then username need to be as "SDPADMIN"
    Then close browser

  Scenario: Verification of sp login
    Given user go to mspace login page
    When Enter the Username "akalanka1" and Password "mytest123#"
    Then click on login button
    Then username need to be as "AKALANKA1"
    Then close browser
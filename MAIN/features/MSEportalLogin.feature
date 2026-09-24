Feature: Verify login

    Scenario: Verify user is able to login with valid credentials
        Given I navigate to "https://mse-dev-test.portal.siemens.com/"
        And I accept the cookie policy
        And I initiate login
        And I enter my email "siddhant.paradkar@siemens.com"
        And I enter my password
        Then I should reach the "dashboard"
        
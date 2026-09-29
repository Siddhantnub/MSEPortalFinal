Feature: Create a new Service Case

    Scenario: Successfully create a case with an existing asset
        Given I navigate to "https://mse-dev-test.portal.siemens.com/"
        And I accept the cookie policy
        And I initiate login
        And I enter my email "siddhant.paradkar@siemens.com"
        And I enter my password
        And I should reach the "dashboard"
        When I click on the "Create Case" link
        And I select the "Report an Issue" category
        And I select the asset with serial "725969399799"
        And I enter case title "ThisTitle1"
        And I search and select customer account "abc"
        And I enter description "This is the description"
        And I select impact "1" and AWV code "CC"
        And I upload the file "test-screenshot.png"
        And I proceed to the final step
        And I submit the case
        Then I should see the "Go to Service Cases" link
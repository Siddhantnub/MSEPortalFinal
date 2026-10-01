Feature: Interactive Branching with Auto-Completion

    Scenario: Manually branch and automatically complete workflow
        # These steps use your existing logic in MSEportalLoginSteps.js
        Given I navigate to "https://mse-dev-test.portal.siemens.com/"
        And I accept the cookie policy
        And I initiate login
        And I enter my email "siddhant.paradkar@siemens.com"
        And I enter my password
        And I should reach the "dashboard"
        
        # These steps handle the branching logic
        When I manually click a branch button on the dashboard
        And the automation completes the selected workflow
        Then I should see the final success state
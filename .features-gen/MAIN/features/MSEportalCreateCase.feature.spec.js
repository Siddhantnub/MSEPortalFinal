// Generated from: MAIN\features\MSEportalCreateCase.feature
import { test } from "playwright-bdd";

test.describe('Interactive Branching with Auto-Completion', () => {

  test('Manually branch and automatically complete workflow', async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to "https://mse-dev-test.portal.siemens.com/"', null, { page }); 
    await And('I accept the cookie policy', null, { page }); 
    await And('I initiate login', null, { page }); 
    await And('I enter my email "siddhant.paradkar@siemens.com"', null, { page }); 
    await And('I enter my password', null, { page }); 
    await And('I should reach the "dashboard"', null, { page }); 
    await When('I manually click a branch button on the dashboard', null, { page }); 
    await And('the automation completes the selected workflow', null, { page }); 
    await Then('I should see the final success state', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('MAIN\\features\\MSEportalCreateCase.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://mse-dev-test.portal.siemens.com/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://mse-dev-test.portal.siemens.com/\"","children":[{"start":15,"value":"https://mse-dev-test.portal.siemens.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And I accept the cookie policy","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And I initiate login","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I enter my email \"siddhant.paradkar@siemens.com\"","stepMatchArguments":[{"group":{"start":17,"value":"\"siddhant.paradkar@siemens.com\"","children":[{"start":18,"value":"siddhant.paradkar@siemens.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"And I enter my password","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"And I should reach the \"dashboard\"","stepMatchArguments":[{"group":{"start":19,"value":"\"dashboard\"","children":[{"start":20,"value":"dashboard","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I manually click a branch button on the dashboard","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And the automation completes the selected workflow","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see the final success state","stepMatchArguments":[]}]},
]; // bdd-data-end
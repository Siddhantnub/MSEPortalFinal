// Generated from: MAIN\features\MSEportalLogin.feature
import { test } from "playwright-bdd";

test.describe('Verify login', () => {

  test('Verify user is able to login with valid credentials', async ({ Given, Then, And, page }) => { 
    await Given('I navigate to "https://mse-dev-test.portal.siemens.com/"', null, { page }); 
    await And('I accept the cookie policy', null, { page }); 
    await And('I initiate login', null, { page }); 
    await And('I enter my email "siddhant.paradkar@siemens.com"', null, { page }); 
    await And('I enter my password', null, { page }); 
    await Then('I should reach the "dashboard"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('MAIN\\features\\MSEportalLogin.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://mse-dev-test.portal.siemens.com/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://mse-dev-test.portal.siemens.com/\"","children":[{"start":15,"value":"https://mse-dev-test.portal.siemens.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And I accept the cookie policy","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And I initiate login","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And I enter my email \"siddhant.paradkar@siemens.com\"","stepMatchArguments":[{"group":{"start":17,"value":"\"siddhant.paradkar@siemens.com\"","children":[{"start":18,"value":"siddhant.paradkar@siemens.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I enter my password","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should reach the \"dashboard\"","stepMatchArguments":[{"group":{"start":19,"value":"\"dashboard\"","children":[{"start":20,"value":"dashboard","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end
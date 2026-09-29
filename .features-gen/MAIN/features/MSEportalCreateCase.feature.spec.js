// Generated from: MAIN\features\MSEportalCreateCase.feature
import { test } from "playwright-bdd";

test.describe('Create a new Service Case', () => {

  test('Successfully create a case with an existing asset', async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to "https://mse-dev-test.portal.siemens.com/"', null, { page }); 
    await And('I accept the cookie policy', null, { page }); 
    await And('I initiate login', null, { page }); 
    await And('I enter my email "siddhant.paradkar@siemens.com"', null, { page }); 
    await And('I enter my password', null, { page }); 
    await And('I should reach the "dashboard"', null, { page }); 
    await When('I click on the "Create Case" link', null, { page }); 
    await And('I select the "Report an Issue" category', null, { page }); 
    await And('I select the asset with serial "725969399799"', null, { page }); 
    await And('I enter case title "ThisTitle1"', null, { page }); 
    await And('I search and select customer account "abc"', null, { page }); 
    await And('I enter description "This is the description"', null, { page }); 
    await And('I select impact "1" and AWV code "CC"', null, { page }); 
    await And('I upload the file "test-screenshot.png"', null, { page }); 
    await And('I proceed to the final step', null, { page }); 
    await And('I submit the case', null, { page }); 
    await Then('I should see the "Go to Service Cases" link', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('MAIN\\features\\MSEportalCreateCase.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://mse-dev-test.portal.siemens.com/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://mse-dev-test.portal.siemens.com/\"","children":[{"start":15,"value":"https://mse-dev-test.portal.siemens.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And I accept the cookie policy","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And I initiate login","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And I enter my email \"siddhant.paradkar@siemens.com\"","stepMatchArguments":[{"group":{"start":17,"value":"\"siddhant.paradkar@siemens.com\"","children":[{"start":18,"value":"siddhant.paradkar@siemens.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I enter my password","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"And I should reach the \"dashboard\"","stepMatchArguments":[{"group":{"start":19,"value":"\"dashboard\"","children":[{"start":20,"value":"dashboard","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I click on the \"Create Case\" link","stepMatchArguments":[{"group":{"start":15,"value":"\"Create Case\"","children":[{"start":16,"value":"Create Case","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I select the \"Report an Issue\" category","stepMatchArguments":[{"group":{"start":13,"value":"\"Report an Issue\"","children":[{"start":14,"value":"Report an Issue","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And I select the asset with serial \"725969399799\"","stepMatchArguments":[{"group":{"start":31,"value":"\"725969399799\"","children":[{"start":32,"value":"725969399799","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And I enter case title \"ThisTitle1\"","stepMatchArguments":[{"group":{"start":19,"value":"\"ThisTitle1\"","children":[{"start":20,"value":"ThisTitle1","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And I search and select customer account \"abc\"","stepMatchArguments":[{"group":{"start":37,"value":"\"abc\"","children":[{"start":38,"value":"abc","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And I enter description \"This is the description\"","stepMatchArguments":[{"group":{"start":20,"value":"\"This is the description\"","children":[{"start":21,"value":"This is the description","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And I select impact \"1\" and AWV code \"CC\"","stepMatchArguments":[{"group":{"start":16,"value":"\"1\"","children":[{"start":17,"value":"1","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":33,"value":"\"CC\"","children":[{"start":34,"value":"CC","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And I upload the file \"test-screenshot.png\"","stepMatchArguments":[{"group":{"start":18,"value":"\"test-screenshot.png\"","children":[{"start":19,"value":"test-screenshot.png","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And I proceed to the final step","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And I submit the case","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Go to Service Cases\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Go to Service Cases\"","children":[{"start":18,"value":"Go to Service Cases","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end
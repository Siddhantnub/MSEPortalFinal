import { expect } from '@playwright/test';
import path from 'path';

export async function runCaseWorkflow(page) {
    console.log("💣 Executing CREATE CASE Workflow...");
    
    const categoryButton = page.getByRole('button', { name: /Report an Issue/i });
    await categoryButton.waitFor({ state: 'visible', timeout: 15000 });
    await categoryButton.click();
    
    // 1. Select Asset
    const assetButtonXpath = 'xpath=//*[@id="siit-page-content"]/lib-layout/div/si-navbar-vertical/main/div/lib-cases-router/lib-creation-case-v2/div/div/div/div/div/div[2]/div/si-wizard/div[2]/si-wizard-step[2]/div/lib-informative-step/div/div/div[1]/lib-action-selection-button/button';
    await page.locator(assetButtonXpath).click();

    //after this the code waits for you to choose which asset you want to select

    await page.locator('ngx-datatable').waitFor({ state: 'visible' });
    // 2. DECIDE the value: The script "looks" at the first row
    const serialXpath = 'xpath=/html/body/app-root/app-guarded/div/div/lib-layout/div/si-navbar-vertical/main/div/lib-cases-router/lib-creation-case-v2/div/div/div/div/div/div[2]/div/si-wizard/div[2]/si-wizard-step[3]/div/lib-asset-selection-step/div/div[3]/lib-assets-preference-table/ngx-datatable/div/div/datatable-body/datatable-scroller/div/datatable-row-wrapper[1]/datatable-body-row/div[2]/datatable-body-cell[1]/div/a';
    
    const serialValue = await page.locator(serialXpath).innerText();
    console.log(`💣 Branching decision made! Serial is: ${serialValue}`);

    // 3. APPLY the decision
    if (serialValue.trim() === 'AssetForTamilNadu') {
        // 2. Fill Case Title
        await page.getByRole('textbox', { name: /Title/i }).waitFor({ state: 'visible' });
        await page.getByRole('textbox', { name: /Title/i }).fill("Automated Case - for AssetForTamilNadu");

        // 3. Account Lookup
        const lookupTriggerXpath = 'xpath=/html/body/app-root/app-guarded/div/div/lib-layout/div/si-navbar-vertical/main/div/lib-cases-router/lib-creation-case-v2/div/div/div/div/div/div[2]/div/si-wizard/div[2]/si-wizard-step[4]/div/div/lib-case-details-form/div[2]/div/div/div/lib-form-case-create-ea/div/div[1]/form/div/div[2]/div/span';
        await page.locator(lookupTriggerXpath).click({ force: true });

        const accountSearch = page.getByRole('textbox', { name: 'Search by Accounts' });
        await accountSearch.fill('abc');
        await accountSearch.press('Enter');
        
        await page.waitForTimeout(5000); 
        await page.locator('datatable-row-wrapper:nth-child(8) input').check({ force: true });
        await page.getByRole('button', { name: 'Submit' }).click({ force: true });

        // 4. Description & Impact
        await page.locator('.ql-editor').fill("Automated case description.");
        await page.getByRole('combobox').filter({ hasText: 'Select Impact' }).click();
        await page.getByText(/^1/).first().click();
        await page.getByRole('combobox').filter({ hasText: 'Select AWV Code' }).click();
        await page.getByText(/^CC/).first().click();

        // 5. Upload & Final Submit
        await page.getByRole('button', { name: /Attachments/i }).click();
        await page.locator('input[type="file"]').setInputFiles(path.join(process.cwd(), 'test-screenshot.png'));
        await page.waitForTimeout(5000); 
        
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Submit Case' }).click();
    } 
    else if (serialValue.trim() === 'SerialNumber123456'){
                // 2. Fill Case Title
        await page.getByRole('textbox', { name: /Title/i }).waitFor({ state: 'visible' });
        await page.getByRole('textbox', { name: /Title/i }).fill("Automated Case - for AssetForTamilNadu");

        // 3. Account Lookup
        const lookupTriggerXpath = 'xpath=/html/body/app-root/app-guarded/div/div/lib-layout/div/si-navbar-vertical/main/div/lib-cases-router/lib-creation-case-v2/div/div/div/div/div/div[2]/div/si-wizard/div[2]/si-wizard-step[4]/div/div/lib-case-details-form/div[2]/div/div/div/lib-form-case-create-ea/div/div[1]/form/div/div[2]/div/span';
        await page.locator(lookupTriggerXpath).click({ force: true });

        const accountSearch = page.getByRole('textbox', { name: 'Search by Accounts' });
        await accountSearch.fill('abc');
        await accountSearch.press('Enter');
        
        await page.waitForTimeout(5000); 
        await page.locator('datatable-row-wrapper:nth-child(8) input').check({ force: true });
        await page.getByRole('button', { name: 'Submit' }).click({ force: true });

        // 4. Description & Impact
        await page.locator('.ql-editor').fill("Automated case description.");
        await page.getByRole('combobox').filter({ hasText: 'Select Impact' }).click();
        await page.getByText(/^1/).first().click();
        await page.getByRole('combobox').filter({ hasText: 'Select AWV Code' }).click();
        await page.getByText(/^CC/).first().click();

        // 5. Upload & Final Submit
        await page.getByRole('button', { name: /Attachments/i }).click();
        await page.locator('input[type="file"]').setInputFiles(path.join(process.cwd(), 'test-screenshot.png'));
        await page.waitForTimeout(5000); 
        
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Submit Case' }).click();
    }
    else if (serialValue.trim() === 'AssetForMaharashtra'){
                // 2. Fill Case Title
        await page.getByRole('textbox', { name: /Title/i }).waitFor({ state: 'visible' });
        await page.getByRole('textbox', { name: /Title/i }).fill("Automated Case - for AssetForTamilNadu");

        // 3. Account Lookup
        const lookupTriggerXpath = 'xpath=/html/body/app-root/app-guarded/div/div/lib-layout/div/si-navbar-vertical/main/div/lib-cases-router/lib-creation-case-v2/div/div/div/div/div/div[2]/div/si-wizard/div[2]/si-wizard-step[4]/div/div/lib-case-details-form/div[2]/div/div/div/lib-form-case-create-ea/div/div[1]/form/div/div[2]/div/span';
        await page.locator(lookupTriggerXpath).click({ force: true });

        const accountSearch = page.getByRole('textbox', { name: 'Search by Accounts' });
        await accountSearch.fill('abc');
        await accountSearch.press('Enter');
        
        await page.waitForTimeout(5000); 
        await page.locator('datatable-row-wrapper:nth-child(8) input').check({ force: true });
        await page.getByRole('button', { name: 'Submit' }).click({ force: true });

        // 4. Description & Impact
        await page.locator('.ql-editor').fill("Automated case description.");
        await page.getByRole('combobox').filter({ hasText: 'Select Impact' }).click();
        await page.getByText(/^1/).first().click();
        await page.getByRole('combobox').filter({ hasText: 'Select AWV Code' }).click();
        await page.getByText(/^CC/).first().click();
        await page.getByRole('combobox').filter({ hasText: 'Select Info When The Issue Happened' }).click();
        await page.getByText(/^After power system failure/).first().click();

        // 5. Upload & Final Submit
        await page.getByRole('button', { name: /Attachments/i }).click();
        await page.locator('input[type="file"]').setInputFiles(path.join(process.cwd(), 'test-screenshot.png'));
        await page.waitForTimeout(5000); 
        
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Submit Case' }).click();
    }
    else {
        // 2. Fill Case Title
        await page.getByRole('textbox', { name: /Title/i }).waitFor({ state: 'visible' });
        await page.getByRole('textbox', { name: /Title/i }).fill("Automated Case - for SomethingElse");

        // 3. Account Lookup
        const lookupTriggerXpath = 'xpath=/html/body/app-root/app-guarded/div/div/lib-layout/div/si-navbar-vertical/main/div/lib-cases-router/lib-creation-case-v2/div/div/div/div/div/div[2]/div/si-wizard/div[2]/si-wizard-step[4]/div/div/lib-case-details-form/div[2]/div/div/div/lib-form-case-create-ea/div/div[1]/form/div/div[2]/div/span';
        await page.locator(lookupTriggerXpath).click({ force: true });

        const accountSearch = page.getByRole('textbox', { name: 'Search by Accounts' });
        await accountSearch.fill('abc');
        await accountSearch.press('Enter');
        
        await page.waitForTimeout(5000); 
        await page.locator('datatable-row-wrapper:nth-child(8) input').check({ force: true });
        await page.getByRole('button', { name: 'Submit' }).click({ force: true });

        // 4. Description & Impact
        await page.locator('.ql-editor').fill("Automated case description.");
        await page.getByRole('combobox').filter({ hasText: 'Select Impact' }).click();
        await page.getByText(/^1/).first().click();
        await page.getByRole('combobox').filter({ hasText: 'Select AWV Code' }).click();
        await page.getByText(/^CC/).first().click();

        // 5. Upload & Final Submit
        await page.getByRole('button', { name: /Attachments/i }).click();
        await page.locator('input[type="file"]').setInputFiles(path.join(process.cwd(), 'test-screenshot.png'));
        await page.waitForTimeout(5000); 
        
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Submit Case' }).click();
    }
}
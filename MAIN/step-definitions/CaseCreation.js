import { expect } from '@playwright/test';
import path from 'path';

export async function runCaseWorkflow(page) {
    console.log("💣 Executing CREATE CASE Workflow...");
    
    const assetButtonXpath = 'xpath=//*[@id="siit-page-content"]/lib-layout/div/si-navbar-vertical/main/div/lib-cases-router/lib-creation-case-v2/div/div/div/div/div/div[2]/div/si-wizard/div[2]/si-wizard-step[2]/div/lib-informative-step/div/div/div[1]/lib-action-selection-button/button';
    await page.locator(assetButtonXpath).click();

    const assetTable = page.locator('lib-assets-preference-table ngx-datatable');
    await assetTable.waitFor({state: 'visible',timeout: 30000});
    console.log("✅ Asset selection table is visible");

    // ============================================
    // ASSET SELECTION
    // ============================================

    const serial123456Checkbox = page
        .getByRole('row', {
            name: /Select row SerialNumber123456/
        })
        .getByLabel('Select row');

    const tamilNaduCheckbox = page
        .getByRole('row', {
            name: /Select row AssetForTamilNadu/
        })
        .getByLabel('Select row');

    const maharashtraCheckbox = page
        .getByRole('row', {
            name: /Select row AssetForMaharashtra/
        })
        .getByLabel('Select row');


    let selectedAsset = null;


    // ============================================
    // CAPTURE USER SELECTION
    // ============================================

    await page.evaluate(() => {

        window.__selectedAsset = null;

        document.addEventListener('click', (event) => {

            const element = event.target;

            if (!element) {
                return;
            }

            const row = element.closest('datatable-row-wrapper');

            if (!row) {
                return;
            }

            const text = row.innerText || '';

            if (text.includes('SerialNumber123456')) {

                window.__selectedAsset = 'SerialNumber123456';

            }
            else if (text.includes('AssetForTamilNadu')) {

                window.__selectedAsset = 'AssetForTamilNadu';

            }
            else if (text.includes('AssetForMaharashtra')) {

                window.__selectedAsset = 'AssetForMaharashtra';

            }

        }, true);

    });


    console.log("⏳ Waiting for user to select an asset...");


    // ============================================
    // WAIT FOR USER SELECTION
    // ============================================

    await page.waitForFunction(() => {

        return window.__selectedAsset !== null;

    }, null, {
        timeout: 120000
    });


    selectedAsset = await page.evaluate(() => {

        return window.__selectedAsset;

    });


    console.log(`🎯 User selected: ${selectedAsset}`);

    console.log(
        `💣 Branching decision made! Selected Asset is: ${selectedAsset}`
    );


    // ============================================
    // BRANCHING
    // ============================================

    console.log(`💣 Branching decision made! Selected Asset is: ${selectedAsset}`);
    if (selectedAsset === 'AssetForTamilNadu') {
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

        const impactDropdown = page.getByRole('combobox').filter({ hasText: 'Select Impact' });
        if (await impactDropdown.isVisible()) {
            await impactDropdown.click();
            await page.getByText(/^1/).first().click();
        }

        const awvDropdown = page.getByRole('combobox').filter({ hasText: 'Select AWV Code' });
        if (await awvDropdown.isVisible()) {
            await awvDropdown.click();
            await page.getByText(/^CC/).first().click();
        }

        const caseReasonDropdown = page.getByRole('combobox').filter({ hasText: 'Select Case Reason' });
        if (await caseReasonDropdown.isVisible()) {
            await caseReasonDropdown.click();
            await page.getByText(/^Short/).first().click();
        }

        const orgidInput = page.getByRole('textbox', { name: 'Enter Org ID' });
        if (await orgidInput.isVisible()) {
            await orgidInput.fill('12345678');
        }   

        // 5. Upload & Final Submit
        await page.getByRole('button', { name: /Attachments/i }).click();
        await page.locator('input[type="file"]').setInputFiles(path.join(process.cwd(), 'test-screenshot.png'));
        await page.waitForTimeout(5000); 
        
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Submit Case' }).click();
    } 
    else if (selectedAsset === 'SerialNumber123456'){
                // 2. Fill Case Title
        await page.getByRole('textbox', { name: /Title/i }).waitFor({ state: 'visible' });
        await page.getByRole('textbox', { name: /Title/i }).fill("Automated Case - for SerialNumber123456");

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
    else if (selectedAsset === 'AssetForMaharashtra') {

        // 2. Fill Case Title
        const titleInput = page.getByRole('textbox', { name: /Title/i });
        await titleInput.waitFor({ state: 'visible' });
        await titleInput.fill("Automated Case - for AssetForMaharashtra");

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
        
        // --- Conditional Dropdowns ---

        // Impact
        const impactDropdown = page.getByRole('combobox').filter({ hasText: 'Select Impact' });
        if (await impactDropdown.isVisible()) {
            await impactDropdown.click();
            await page.getByText(/^1/).first().click();
        }

        // AWV Code
        const awvDropdown = page.getByRole('combobox').filter({ hasText: 'Select AWV Code' });
        if (await awvDropdown.isVisible()) {
            await awvDropdown.click();
            await page.getByText(/^CC/).first().click();
        }

        // Issue Info
        const infoDropdown = page.getByRole('combobox').filter({ hasText: 'Select Info When The Issue Happened' });
        if (await infoDropdown.isVisible()) {
            await infoDropdown.click();
            await page.getByText(/^After power system failure/).first().click();
        }

        // Org ID (Combined Logic)
                // --- Org ID Branching Logic ---
        const orgidInput = page.getByRole('textbox', { name: 'Enter Org ID' });

        if (await orgidInput.isVisible()) {
            await orgidInput.fill('12345678');
        }

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
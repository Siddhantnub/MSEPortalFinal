import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import path from 'path';

const { When, Then } = createBdd();

// --- Navigation & Category Selection ---

When('I click on the {string} link', async ({ page }, linkName) => {
    await page.getByRole('link', { name: linkName }).click();
});

When('I select the {string} category', async ({ page }, category) => {
    await page.getByRole('button', { name: new RegExp(category, 'i') }).click();
});

// --- Asset Selection (Step 2 of Wizard) ---

When('I select the asset with serial {string}', async ({ page }, serial) => {
    // 1. Click Asset button
    const assetButtonXpath = '//*[@id="siit-page-content"]/lib-layout/div/si-navbar-vertical/main/div/lib-cases-router/lib-creation-case-v2/div/div/div/div/div/div[2]/div/si-wizard/div[2]/si-wizard-step[2]/div/lib-informative-step/div/div/div[1]/lib-action-selection-button/button';
    await page.locator(assetButtonXpath).click();

    // 2. Search Serial
    const searchInput = page.locator('#serial-number input');
    await searchInput.waitFor({ state: 'visible', timeout: 10000 });
    await searchInput.fill(serial);
    await searchInput.press('Enter');

    // 3. Select Checkbox
    const targetRow = page.getByRole('row', { name: new RegExp(serial) });
    const checkbox = targetRow.locator('input[type="checkbox"][aria-label="Select row"]');
    await checkbox.waitFor({ state: 'visible', timeout: 10000 });
    
    // We use click() and then wait for the checkbox to actually be checked
    await checkbox.click();
    await expect(checkbox).toBeChecked();

    // 4. BOMBATIC STABILITY: Small pause to let the portal's state update
    // This mimics the delay you naturally introduce in debug mode
    await page.waitForTimeout(10000); 

    // 5. Click Next
    const nextButton = page.locator('button.btn-primary', { hasText: 'Next' });
    
    // Ensure it's ready for us
    await nextButton.waitFor({ state: 'visible' });
    await expect(nextButton).toBeEnabled();
    
    // Perform the click
    await nextButton.click();

    // 6. Confirm transition by waiting for the Title field
    await page.getByRole('textbox', { name: /Title/i }).waitFor({ state: 'visible', timeout: 200000 });
});


// --- Case Details (Step 3 of Wizard) ---

When('I enter case title {string}', async ({ page }, title) => {
    await page.getByRole('textbox', { name: /Title/i }).fill(title);
});

When('I search and select customer account {string}', async ({ page }, accountSearch) => {
    const accountLookupTriggerXpath = 'xpath=/html/body/app-root/app-guarded/div/div/lib-layout/div/si-navbar-vertical/main/div/lib-cases-router/lib-creation-case-v2/div/div/div/div/div/div[2]/div/si-wizard/div[2]/si-wizard-step[4]/div/div/lib-case-details-form/div[2]/div/div/div/lib-form-case-create-ea/div/div[1]/form/div/div[2]/div/span';
    
    const trigger = page.locator(accountLookupTriggerXpath);
    await trigger.waitFor({ state: 'visible', timeout: 15000 });
    await trigger.click({ force: true }); // Force click in case of overlays

    // 3. Click into the search box in the sidebar and fill it
    const searchInput = page.getByRole('textbox', { name: 'Search by Accounts' });
    await searchInput.waitFor({ state: 'visible', timeout: 50000 });
    await searchInput.click();
    await searchInput.fill(accountSearch);
    await searchInput.press('Enter');
    await page.waitForTimeout(5000); 

    // 4. Select the 8th row in the table (using your specific locator)
    // We add a small wait to ensure the results have loaded
    const checkbox = page.locator('datatable-row-wrapper:nth-child(8) input[type="checkbox"]');
    await checkbox.waitFor({ state: 'visible', timeout: 50000 });
    await checkbox.check();

    // 5. Click the Submit button
    await page.getByRole('button', { name: 'Submit' }).click();

    // 6. Bombastic Stability: Wait for the sidebar to close
    await searchInput.waitFor({ state: 'hidden', timeout: 10000 });
});

When('I enter description {string}', async ({ page }, description) => {
    // Quill JS editor handling
    await page.locator('.ql-editor').fill(description);
});

When('I select impact {string} and AWV code {string}', async ({ page }, impact, awv) => {
    // Impact Dropdown
    await page.getByRole('combobox').filter({ hasText: 'Select Impact' }).click();
    await page.getByText('1 - Informational/Cosmetic2').click();
    // AWV Code Dropdown
    await page.getByRole('combobox').filter({ hasText: 'Select AWV Code' }).click();
    await page.getByText(new RegExp('^' + awv, 'i')).click();
});

// --- Attachments & Submission ---

When('I upload the file {string}', async ({ page }, fileName) => {
    // 1. Click the Attachments button to ensure the section is active
    await page.getByRole('button', { name: /Attachments/i }).click();
    
    // 2. Define the path to your file (assumes it's in the project root)
    const filePath = path.join(process.cwd(), fileName);
    
    // 3. Perform the upload
    await page.locator('input[type="file"]').setInputFiles(filePath);
    
    // 4. BOMBATIC WAIT: Pause for 5 seconds to let the upload settle
    await page.waitForTimeout(5000); 
});

When('I proceed to the final step', async ({ page }) => {
    await page.getByRole('button', { name: 'Next' }).click();
});

When('I submit the case', async ({ page }) => {
    await page.getByRole('button', { name: 'Submit Case' }).click();
});

Then('I should see the {string} link', async ({ page }, linkName) => {
    // Generous timeout for the final submission process
    await expect(page.getByRole('link', { name: linkName })).toBeVisible({ timeout: 60000 });
});
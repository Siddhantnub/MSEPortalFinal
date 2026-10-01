import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { runCaseWorkflow } from './CaseCreation';
import { runAssetWorkflow } from './AssetCreation';

const { When, Then } = createBdd();

let detectedBranch = '';

When('I manually click a branch button on the dashboard', async ({ page }) => {
    console.log("💣 Mr. Bombastic is STANDING BY. Sid, make your move...");

    await page.waitForFunction(
        () => window.location.href.includes('/cases/new-case') || 
              window.location.href.includes('/assets-list/create'),
        { timeout: 120000 }
    );

    detectedBranch = page.url().includes('/cases/new-case') ? 'CASE' : 'ASSET';
    console.log(`💣 Branch Detected: ${detectedBranch}. Taking control!`);
});

When('the automation completes the selected workflow', async ({ page }) => {
    if (detectedBranch === 'CASE') {
        await runCaseWorkflow(page);
    } else if (detectedBranch === 'ASSET') {
        await runAssetWorkflow(page);
    }
});

Then('I should see the final success state', async ({ page }) => {

    const caseSuccessLink = page.getByRole('link', {
        name: 'Go to Service Cases'
    });

    try {
        await expect(caseSuccessLink).toBeVisible({timeout: 5000});
        console.log("💣 Mission Accomplished. Case created successfully!");
    } catch (error) {
        try {
            await page.waitForURL(
                /.*\/(service-cases|assets-list)/,
                { timeout: 30000 }
            );
            console.log("💣 Mission Accomplished. Asset created successfully!");
        } catch (error) {
            throw new Error(
                "❌ Final success state was not detected. " +
                "Neither Case nor Asset creation was successful."
            );
        }
    }
});
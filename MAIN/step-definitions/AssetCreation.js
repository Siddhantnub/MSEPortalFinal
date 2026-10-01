import { expect } from '@playwright/test';

export async function runAssetWorkflow(page) {

    console.log("💣 Executing CREATE ASSET Workflow...");

    const serialInput = page.getByRole('textbox', { name: 'Serial Number*' });
    await serialInput.waitFor({ state: 'visible' });
    await serialInput.fill('SerialNumber12345678999777');

    await page.getByRole('combobox').filter({ hasText: 'Select a Product' }).click();
    await page.getByText(/^3AA$/).click();

    await page.getByRole('combobox').filter({ hasText: 'Select a Factory' }).click();
    await page.getByText(/Berlin, Germany/i).first().click();

    await page.getByRole('combobox').filter({ hasText: 'Select a Country' }).click();
    await page.getByText(/^Afghanistan$/i).first().click();

    await page.getByRole('button', { name: 'Submit Asset' }).click();
}
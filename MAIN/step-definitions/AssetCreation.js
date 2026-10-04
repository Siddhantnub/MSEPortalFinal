import { expect } from '@playwright/test';
import testData from '../../AssetCreations/AssetData1.json';

export async function runAssetWorkflow(page) {

    console.log("💣 Executing CREATE ASSET Workflow...");

    const data = testData.assetData;

    const serialInput = page.getByRole('textbox', { name: 'Serial Number*' });
    await serialInput.waitFor({ state: 'visible' });
    await serialInput.fill(data.serialNumber);

    await page.getByRole('combobox').filter({ hasText: 'Select a Product' }).click();
    await page.getByText(new RegExp(`^${data.product}$`)).click();

    await page.getByRole('combobox').filter({ hasText: 'Select a Factory' }).click();
    await page.getByText(new RegExp(data.factory, 'i')).first().click();

    await page.getByRole('combobox').filter({ hasText: 'Select a Country' }).click();
    await page.getByText(new RegExp(`^${data.country}$`, 'i')).first().click();

    await page.getByRole('button', { name: 'Submit Asset' }).click();
}
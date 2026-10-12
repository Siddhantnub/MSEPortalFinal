import { createBdd, test } from 'playwright-bdd';
import { expect } from '@playwright/test';
export { test };

const { Given, When, Then } = createBdd(test);

Given('I navigate to {string}', async ({ page }, url) => {
    await page.goto(url);
});

Given('I accept the cookie policy', async ({ page }) => {
    const cookieButton = page.getByTestId('uc-accept-all-button');
    try {
        await cookieButton.waitFor({
            state: 'visible',
            timeout: 5000
        });
        await cookieButton.click();
    } catch {
        console.log('Cookie banner not displayed.');
    }
});


Given('I initiate login', async ({ page }) => {
    await page.getByRole('button', { name: /Log In/i }).click();
    await page.getByRole('button', { name: /Sign in with/i }).click();
});

Given('I enter my email {string}', async ({ page }, email) => {
    const emailInput = page.locator('input[type="email"]');
    await emailInput.fill(email);
    await page.getByRole('button', { name: 'Next' }).click();
});

When('I enter my password', async ({ page }) => {
    const usePasswordOption = page.getByRole('button',{ name: /Use my password/i });
    try {
        await usePasswordOption.waitFor({
            state: 'visible',
            timeout: 5000
        });
        await usePasswordOption.click();
    } catch {
        console.log('"Use my password" option was not displayed.');
    }

    const password = process.env.MSE_PASSWORD;
    if (!password) {
        throw new Error(
            "ERROR: 'MSE_PASSWORD' environment variable is not set."
        );
    }
});

Then('I should reach the {string}', async ({ page }, expectedPath) => {
    await page.waitForURL(new RegExp(expectedPath), {timeout: 180000});
    await expect(page).toHaveURL(new RegExp(expectedPath));

    console.log('Login successful: Dashboard reached.');
}); 
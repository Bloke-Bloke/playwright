import { expect } from '@playwright/test';


export async function handleFunction(page) {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
}
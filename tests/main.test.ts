import { test as setup } from '@playwright/test';
import { handleFunction } from './function.called';

setup('authenticate', async ({ page, browserName }) => {
    await handleFunction(page);
});

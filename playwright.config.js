// @ts-check

import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';

dotenv.config();

const testDir = defineBddConfig({
    paths: ['MAIN/features/*.feature'],
    steps: ['MAIN/step-definitions/*.js'],
});

export default defineConfig({

    testDir,

    timeout: 180000,

    fullyParallel: false,

    workers: 1,

    reporter: [['html'], ['list']],

    projects: [

        {
            name: 'chromium',

            use: {
                ...devices['Desktop Chrome'],
                headless: false,
            },
        },

    ],
});
import { test as base } from "@playwright/test";
import {type Page} from '@playwright/test';
import { TaskManager } from '../support/components/TaskManager';


type MyFixtures = {
  task: TaskManager;
};

const createFixture = <T>(Component: new (page: Page) => T) => {
return async ({ page }: { page: Page }, use: (fixture: T) => Promise<void>) => {
await use(new Component(page));
};
};

export const test = base.extend<MyFixtures>({
  task: [createFixture(TaskManager), { scope: 'test' }],
});

export { expect } from "@playwright/test";
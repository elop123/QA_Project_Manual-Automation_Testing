import { test as base } from "@playwright/test";
import {type Page} from '@playwright/test';
import { TaskManager } from '../support/components/TaskManager';
import { AppNavigation } from '../support/navigation/AppNavigation';


type MyFixtures = {
  task: TaskManager;
};

export const test = base.extend<MyFixtures>({
  task: async ({ page }, use) => {
    const nav = new AppNavigation(page);
    await nav.navigateToTaskManager(); 
    await use(new TaskManager(page));  
  },
});

export { expect } from "@playwright/test";
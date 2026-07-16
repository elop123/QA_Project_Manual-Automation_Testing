import { test } from '../fixtures/base_fixtures';
import {argosComponentScreenshot,argosFullScreenshot} from '../support/utils/argosSmartScreenshot';
   
test.describe('Complete/Uncomplete Task — Visual', () => {
  test('Task card — incomplete state', async ({ task, page }) => {
 
    await task.addTitle('Learn Playwright');
    await task.clickAddTask();
    await task.assertTaskVisible('Learn Playwright');
 
    await argosComponentScreenshot({
      page,
      snapshotName: 'task-manager/task-card-incomplete',
      selector: page.locator('.task-item'),
    });
  });

    test('Task card — complete state', async ({ task, page }) => {
    await task.addTitle('Learn Playwright');
    await task.clickAddTask();
    await task.assertTaskVisible('Learn Playwright');
 
    await task.clickCompleteTask();
    await task.assertUncompleteButtonVisible();
 
    await argosComponentScreenshot({
      page,
      snapshotName: 'task-manager/task-card-complete',
      selector: page.locator('.task-item'),
    });
 
  });
});


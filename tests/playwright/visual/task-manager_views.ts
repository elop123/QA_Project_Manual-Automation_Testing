import { test } from '../fixtures/base_fixtures';
import {argosComponentScreenshot,argosFullScreenshot,} from '../support/utils/argosSmartScreenshot';

test.describe('Task Manager — visual', () => {
  test('Full page', async ({ task, page }) => {
   await argosFullScreenshot({ 
      page, 
      snapshotName: 'task-manager/full-page' 
    });
  });

  test('Add task component', async ({ page, task }) => {
    await task.addTitle('First visual test');
    await task.clickAddTask();
    await task.assertTaskVisible('First Visual test');
    await argosComponentScreenshot({
      page,
      snapshotName: 'task-manager/task-card',
      selector: page.locator('.task-item'),
    });
  });


});
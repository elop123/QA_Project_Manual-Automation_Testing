import { test } from '../fixtures/base_fixtures';
import {argosComponentScreenshot,argosFullScreenshot} from '../support/utils/argosSmartScreenshot';

test.describe('Task Manager — visual', () => {
     const labels = ['Work', 'Hobby', 'Social', 'Home'] as const;

  labels.forEach((label) => {
    test(`Filter by ${label} — visual`, async ({ task, page }) => {

      await task.addTitle(`${label} Task`);
      await task.selectLabelOption(label);
      await task.clickAddTask();

      await task.filterBy(label);
      await task.assertTaskVisible(`${label} Task`);

      await argosComponentScreenshot({
        page,
        snapshotName: `task-manager/filter-task-by-${label}`,
        selector: page.locator('.task-item'),
      });

      await task.filterBy('All');
      await task.assertTaskVisible(`${label} Task`);
 
      await argosFullScreenshot({
        page,
        snapshotName: `task-manager/filter-all-after-${label}`
        
      });
    });
  });
});
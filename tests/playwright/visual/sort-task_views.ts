import { test } from '../fixtures/base_fixtures';
import { argosComponentScreenshot } from '../support/utils/argosSmartScreenshot';

test.describe('Sort Tasks — Visual', () => {
async function addThreeTasks(task: any) {
    await task.addTitle('Low Task');
    await task.selectImportanceOption('Low');
    await task.clickAddTask();

    await task.addTitle('Medium Task');
    await task.selectImportanceOption('Medium');
    await task.clickAddTask();

    await task.addTitle('High Task');
    await task.selectImportanceOption('High');
    await task.clickAddTask();
}

test.skip('Tasks — sort by Ascending', async ({ task, page }) => {
    await addThreeTasks(task);
    await task.sortBy('Ascending');

    await argosComponentScreenshot({
      page,
      snapshotName: 'task-manager/sort-ascending',
      selector: page.locator('.task-item'),
    });
});

test.skip('Tasks — sorted by Descending', async ({ task, page }) => {
    await addThreeTasks(task);
    await task.sortBy('Descending');

    await argosComponentScreenshot({
      page,
      snapshotName: 'task-manager/sort-descending',
      selector: page.locator('.task-item'),
    });
  });

});
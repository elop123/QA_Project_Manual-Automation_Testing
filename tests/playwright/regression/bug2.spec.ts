import { test, page, expect} from '../fixtures/base_fixtures';

test.describe('Sort Tasks by Importance', () => {

  test('BUG#02 -User should be able to sort tasks in Ascending order', 
    async ({ task, page}) => {
   
    await task.addTitle('Low Task');
    await task.selectImportanceOption('Low');
    await task.clickAddTask();

    await task.addTitle('Medium Task');
    await task.selectImportanceOption('Medium');
    await task.clickAddTask();

    await task.addTitle('High Task');
    await task.selectImportanceOption('High');
    await task.clickAddTask();

    await task.sortBy('Ascending');
    await task.assertAscendingSortOrder();

  });

  test('BUG#03 -User should be able to sort tasks in Descending order', 
    async ({ task, page }) => {
    await task.addTitle('Low Task');
    await task.selectImportanceOption('Low');
    await task.clickAddTask();

    await task.addTitle('Medium Task');
    await task.selectImportanceOption('Medium');
    await task.clickAddTask();

    await task.addTitle('High Task');
    await task.selectImportanceOption('High');
    await task.clickAddTask();

    await task.sortBy('Descending');
    await task.assertDescendingSortOrder();

  });
});
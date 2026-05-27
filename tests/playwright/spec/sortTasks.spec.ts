import { test} from '../fixtures/base_fixtures';

test.describe('Sort Tasks by Importance', () => {

  test('User should be able to sort tasks in Ascending order', 
    async ({ task }) => {
   
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

  });

  test('User should be able to sort tasks in Descending order', 
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

  });
});
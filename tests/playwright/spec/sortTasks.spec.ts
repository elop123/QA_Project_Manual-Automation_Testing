import { test, page, expect} from '../fixtures/base_fixtures';

test.describe('Sort Tasks by Importance', () => {

  test.skip('User should be able to sort tasks in Ascending order', 
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
    const taskItems = page.locator('.task-item');
    const texts = await taskItems.allTextContents();
    expect(texts[0]).toContain('Low Task');
    expect(texts[1]).toContain('Medium Task');
    expect(texts[2]).toContain('High Task');

  });

  test.skip('User should be able to sort tasks in Descending order', 
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
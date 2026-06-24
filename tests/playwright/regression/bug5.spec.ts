import { test, expect } from '../fixtures/base_fixtures';
  
test.describe('Task Description is dissapearing', () => {

test.skip('BUG#005 - Description should be when editing a task',
  async ({ task }) => {
    await task.addTitle('Description test');
    await task.addDescription('Check description');
    await task.clickAddTask();

    await task.editButton.click();
    await expect(task.descriptionInput).toHaveValue('Check description');
  });
});
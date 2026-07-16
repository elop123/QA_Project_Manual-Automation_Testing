import { test, expect } from '../fixtures/base_fixtures';

test.describe('Edit Task', () => {

 test('User should be able to edit a task', async ({ task }) => {
  await task.addTitle('Learn Playwright');
  await task.clickAddTask();

  await task.assertTaskVisible('Learn Playwright');

  await task.editTask();
  await task.editTitle('Learn Playwright - Updated');
  await task.editDescription('This is an updated description');
  await task.saveEditedTask();

  await task.assertTaskVisible('Learn Playwright - Updated');
});
});


   
import { test, expect } from '../fixtures/base_fixtures';

test.describe('Add Task', () => {

  test('User should be able to add a task with a Title /Medium Importance/Label Work', 
    async ({ task }) => {

    await task.addTitle('Learn Playwright');
    await task.selectImportanceOption('Medium');
    await task.selectLabelOption('Work');
    await task.clickAddTask();
    await task.assertTaskVisible('Learn Playwright');

  });

   test('User should be able to add a task with a Title /Medium Importance/Label Social', 
    async ({ task }) => {

    await task.addTitle('To have a meeting at 3 PM');
    await task.selectImportanceOption('Medium');
    await task.selectLabelOption('Social');
    await task.clickAddTask();
    await task.assertTaskVisible('To have a meeting at 3 PM');
  });

  test('User should be able to add a task with a Title /Medium Importance/Label Home', 
    async ({ task }) => {

    await task.addTitle('To buy groceries');
    await task.selectImportanceOption('Medium');
    await task.selectLabelOption('Home');
    await task.clickAddTask();
    await task.assertTaskVisible('To buy groceries');

  });

     test('User should be able to add a task with a Title /Medium Importance/Label Hobby', 
    async ({ task }) => {

    await task.addTitle('To run 5 kilometers');
    await task.selectImportanceOption('Medium');
    await task.selectLabelOption('Hobby');
    await task.clickAddTask();
    await task.assertTaskVisible('To run 5 kilometers');

  });

  test('User should be able to add a task with a Title /Low Importance/Label Hobby', 
    async ({ task }) => {

    await task.addTitle('water the plants');
    await task.selectImportanceOption('Low');
    await task.selectLabelOption('Hobby');
    await task.clickAddTask();
    await task.assertTaskVisible('water the plants');
    
  });
 test('Task should start with capital letter',
    async ({ task }) => {

    await task.addTitle('Water the plants');
    await expect(task.titleInput).toHaveValue(/^[A-Z].*/);
    await task.clickAddTask();
    await task.assertTaskVisible('Water the plants');

  });
 
});
import { test, expect } from '../fixtures/base_fixtures';

test.describe('Add Task', () => {

  test('User should be able to add a task with a Title /Medium Importance/Label Work', 
    async ({ task }) => {
    await task.page.goto('/');

    await task.addTitle('Learn Playwright');
    await expect(task.selectImportance).toHaveValue('Medium');
    await expect(task.selectLabel).toHaveValue('Work');
    await task.clickAddTask();

    await expect(task.page.locator('.task-item', { hasText: 'Learn Playwright' })).toBeVisible();
  });

   test('User should be able to add a task with a Title /Medium Importance/Label Social', 
    async ({ task }) => {
    await task.page.goto('/');

    await task.addTitle('To have a meeting at 3 PM');
    await task.selectImportanceOption('Medium');
    await task.selectLabelOption('Social');
    await task.clickAddTask();

    await expect(task.page.locator('.task-item', { hasText: 'To have a meeting at 3 PM' })).toBeVisible();
  });

     test('User should be able to add a task with a Title /Medium Importance/Label Home', 
    async ({ task }) => {
    await task.page.goto('/');

    await task.addTitle('To buy groceries');
    await task.selectImportanceOption('Medium');
    await task.selectLabelOption('Home');
    await task.clickAddTask();

    await expect(task.page.locator('.task-item', { hasText: 'To buy groceries' })).toBeVisible();
  });

     test('User should be able to add a task with a Title /Medium Importance/Label Hobby', 
    async ({ task }) => {
    await task.page.goto('/');

    await task.addTitle('To run 5 kilometers');
    await task.selectImportanceOption('Medium');
    await task.selectLabelOption('Hobby');
    await task.clickAddTask();

    await expect(task.page.locator('.task-item', { hasText: 'To run 5 kilometers' })).toBeVisible();
  });

  test('User should be able to add a task with a Title /Low Importance/Label Hobby', 
    async ({ task }) => {
    await task.page.goto('/');

    await task.addTitle('water the plants');
    await task.selectImportanceOption('Low');
    await task.selectLabelOption('Hobby');
    await task.clickAddTask();

    await expect(task.page.locator('.task-item', { hasText: 'water the plants' })).toBeVisible();
  });

    test('User should  NOT be able to add a task with NO title', 
    async ({ task }) => {
    await task.page.goto('/');

    await task.addTitle('');
    await task.clickAddTask();

    await expect(task.page.locator('.task-item')).toHaveCount(0);
  });

 
});
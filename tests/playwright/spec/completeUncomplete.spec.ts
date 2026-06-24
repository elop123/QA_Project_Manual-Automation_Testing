import { test, expect } from '../fixtures/base_fixtures';

test.describe('Complete Task', () => {

  test('User should be able to mark a task as complete',
    async ({ task }) => {

    await task.addTitle('Learn Playwright');
    await task.clickAddTask();
    await task.assertTaskVisible('Learn Playwright');

    await task.clickCompleteTask();
    await task.assertUncompleteButtonVisible();

  });

  test('User should be able to mark a completed task as incomplete',
    async ({ task }) => {

    await task.addTitle('Learn Playwright');
    await task.clickAddTask();
    await task.assertTaskVisible('Learn Playwright');

    await task.clickCompleteTask();
    await task.assertUncompleteButtonVisible();

    await task.clickUncompleteTask();
    await task.assertCompleteButtonVisible();

  });

});
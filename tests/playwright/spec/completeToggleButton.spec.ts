import { test, expect } from "../fixtures/base_fixtures";

test.describe('Complete/Incomplete a Task', () => {

  test.skip('User should be able to toggle complete/incomplete on a task', 
    async ({ task }) => {
    await task.page.goto('/');

    await task.addTitle('Learn Playwright');
    await task.clickAddTask();

    const taskCard = task.page.locator('.task-item', { hasText: 'Learn Playwright' });
    await expect(taskCard).toBeVisible();

    const uncompleteBtn = taskCard.getByRole('button', { name: 'Uncomplete' });
    const completeBtn = taskCard.getByRole('button', { name: 'Complete' });

    await expect(uncompleteBtn).toBeVisible();
    await expect(completeBtn).not.toBeVisible();

    await uncompleteBtn.click();
    await expect(completeBtn).not.toBeVisible();
    await expect(uncompleteBtn).toBeVisible();

    await completeBtn.click();
    await expect(uncompleteBtn).not.toBeVisible();
    await expect(completeBtn).toBeVisible();
  });

});
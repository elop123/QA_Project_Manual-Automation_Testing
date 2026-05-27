import { test, expect } from '../fixtures/base_fixtures';

test.describe('Delete Task', () => {

  test('User should be able to delete a task', 
    async ({task }) => {
    await task.page.goto('/');

    await task.addTitle('Learn Playwright');
    await task.clickAddTask();

    const taskCard = task.page.locator('.task-item', { hasText: 'Learn Playwright' });
    await expect(taskCard).toBeVisible();   

    await taskCard.getByRole('button', { name: 'Delete' }).click();
    await expect(taskCard).not.toBeVisible();
    });
    });


   
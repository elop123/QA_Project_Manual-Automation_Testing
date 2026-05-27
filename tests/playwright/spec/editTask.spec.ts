import { test, expect } from '../fixtures/base_fixtures';

test.describe('Edit Task', () => {

  test('User should be able to edit a task', 
    async ({task }) => {
    await task.page.goto('/');

    await task.addTitle('Learn Playwright');
    await task.clickAddTask();

    const taskCard = task.page.locator('.task-item', { hasText: 'Learn Playwright' });
    await expect(taskCard).toBeVisible();   

    await task.editButton.click();
    await task.addTitle('Learn Playwright - Updated');
    await task.addDescription('This is an updated description');
    await task.saveEditedTask()
    await expect(taskCard).toBeVisible();
    });
    });


   
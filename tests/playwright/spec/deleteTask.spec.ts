import { test, expect } from '../fixtures/base_fixtures';

test.describe('Delete Task', () => {

  test('User should be able to delete a task', 
    async ({task }) => {

    await task.addTitle('Learn Playwright');
    await task.clickAddTask();

    await task.assertTaskVisible('Learn Playwright');
    await task.deleteTask();
    await task.assertTaskCount(0);
  });
    });


   
  import { test, expect } from '../fixtures/base_fixtures';
  
  test.describe('Add Task', () => {
  
  test.skip('BUG#01-User should  NOT be able to add a task with NO title', 
    async ({ task }) => {

    await task.addTitle('');
    await task.clickAddTask();
    await task.assertTaskCount(0);
  });
});
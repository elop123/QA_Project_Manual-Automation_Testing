import { test, expect } from '../fixtures/base_fixtures';

test.describe('Edit button test', () => {
test.skip('BUG#4 Edit button has a loading spinner when user mouse over it',
  async ({ task }) => {
    await task.addTitle('Test edit button has a cursor');
    await task.clickAddTask();

   await task.assertEditButtonCursor();
  });
});
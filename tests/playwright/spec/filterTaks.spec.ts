import { test, expect } from '../fixtures/base_fixtures';

test.describe('Filter Tasks', () => {

  const labels = [ 'Work', 'Hobby', 'Social', 'Home'] as const;

  labels.forEach((label) => {
    test(`User should be able to filter tasks by ${label}`, 
    async ({ task, page }) => {
      await task.addTitle(`${label} Task`);
      await task.selectLabelOption(label);
      await task.clickAddTask();

      await task.filterBy(label);
      await task.assertTaskVisible(`${label} Task`);
      
      await task.filterBy('All');
      await task.assertTaskVisible(`${label} Task`);

    });

     
    });
  });

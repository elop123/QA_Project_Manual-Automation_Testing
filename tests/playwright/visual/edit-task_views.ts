import { test } from '../fixtures/base_fixtures';
import {argosComponentScreenshot,argosFullScreenshot} from '../support/utils/argosSmartScreenshot';

test.describe('Task Manager — visual', () => {
    test('Edit task', async ({task, page}) =>{
    await task.addTitle('Meeting at 3pm');
    await task.clickAddTask();
    await task.assertTaskVisible('Meeting at 3pm');
    await task.editTask();
    await argosComponentScreenshot({
    page,
    snapshotName: 'task-manage/edit-task-card',
    selector: page.locator('.task-item'),
    })
  })
});
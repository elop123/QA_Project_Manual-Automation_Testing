import { test } from '../fixtures/base_fixtures';
import {argosComponentScreenshot,argosFullScreenshot} from '../support/utils/argosSmartScreenshot';

test.describe('Task Manager — visual', () => {
  test('Full page', async ({ task, page }) => {
   await argosFullScreenshot({ 
      page, 
      snapshotName: 'task-manager/full-page' 
    });
  });
});


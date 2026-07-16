import { Page, expect } from '@playwright/test';
import { TaskManager } from '../components/TaskManager';

export class AppNavigation {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToTaskManager() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    const task = new TaskManager(this.page);
    await expect(task.addTaskButton).toBeVisible();
  }
}
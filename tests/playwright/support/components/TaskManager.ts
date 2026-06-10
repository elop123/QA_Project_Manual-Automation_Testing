import { Page, Locator, expect } from '@playwright/test';

export type ImportanceOptions = 'High' | 'Medium' | 'Low';
export type LabelOptions = 'Work' | 'Social' | 'Home' | 'Hobby';
export type AppLabel = 'All' | 'Hobby' | 'Home' | 'Work' | 'Social';
export type SortOrder = 'Ascending' | 'Descending';

export class TaskManager {
  readonly page: Page;
  readonly titleInput: Locator;
  readonly descriptionInput: Locator;
  readonly selectImportance: Locator;
  readonly selectLabel: Locator;
  readonly addTaskButton: Locator;

  readonly editButton: Locator;
  readonly deleteButton: Locator;
  readonly saveTaskButton: Locator;
  readonly cancelEditButton: Locator;

  readonly completeTaskButton: Locator;
  readonly uncompleteTaskButton: Locator;

  readonly filterByLabel: Locator;
  readonly sortByLevel :Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.titleInput = page.getByPlaceholder('Task Title');
    this.descriptionInput = page.getByPlaceholder('Task Description');
    this.selectImportance = page.locator('div.flex.gap-2 select').first();
    this.selectLabel = page.locator('div.flex.gap-2 select').nth(1);
    this.addTaskButton = page.getByRole('button', { name: 'Add Task' });
    this.editButton = page.getByRole('button', { name: 'Edit' });
    this.deleteButton = page.getByRole('button', { name: 'Delete' });
    this.saveTaskButton = page.getByRole('button', { name: 'Save' });
    this.cancelEditButton = page.getByRole('button', { name: 'Cancel' });
    this.completeTaskButton = page.getByRole('button', { name: 'Complete' });
    this.uncompleteTaskButton = page.getByRole('button', { name: 'Uncomplete' });
    this.filterByLabel = page.getByRole('combobox').nth(2);
    this.sortByLevel = page.getByRole('combobox').nth(3);
  }

  async addTitle(title: string) {
    await this.titleInput.fill(title);
  }

  async addDescription(description: string) {
    await this.descriptionInput.fill(description);
  }

  async selectImportanceOption(option: ImportanceOptions) {
    await this.selectImportance.selectOption(option); 
  }

  async selectLabelOption(option: LabelOptions) {
    await this.selectLabel.selectOption(option);
  }

  async clickAddTask() {
    await this.addTaskButton.click();
  }

  getTaskCard(title: string): Locator {
    return this.page.locator('.task-item', { hasText: title });
  }

  async assertTaskVisible(title: string) {
  await expect(this.page.locator('.task-item', { hasText: title })).toBeVisible();
}

async assertTaskCount(count: number) {
  await expect(this.page.locator('.task-item')).toHaveCount(count);
}

  async deleteTask() {
    await this.deleteButton.click();
  }

  async editTask() {
    await this.editButton.click();
  }

  async saveEditedTask() {
    await this.addTaskButton.click();
  }

  async cancelEdit() {
    await this.cancelEditButton.click();
  }

async filterBy(label: AppLabel) {
  await this.filterByLabel.selectOption(label);
}

async sortBy(order: SortOrder) {
  const option = order === 'Ascending' 
    ? 'Sort by Importance (Ascending)' 
    : 'Sort by Importance (Descending)';   
await this.sortByLevel.selectOption(option);
}

async assertAscendingSortOrder() {
  const taskItems = this.page.locator('.task-item');
  await expect(taskItems.nth(0)).toContainText('Low Task');
  await expect(taskItems.nth(1)).toContainText('Medium Task');
  await expect(taskItems.nth(2)).toContainText('High Task');
}

async assertDescendingSortOrder() {
  const taskItems = this.page.locator('.task-item');
  await expect(taskItems.nth(0)).toContainText('High Task');
  await expect(taskItems.nth(1)).toContainText('Medium Task');
  await expect(taskItems.nth(2)).toContainText('Low Task');
}

async clickCompleteTask()  {
  await this.completeTaskButton.click()
}

async clickUncompleteTask() {
  await this.uncompleteTaskButton.click();
}

async assertTaskCompleted(title: string) {
  await expect(this.page.getByText(title)).toHaveClass(/completed/);
  
}

async assertTaskUncomplete(title: string) {
  await expect(this.page.getByText(title)).not.toHaveClass(/uncompleted/);
}

async assertCompleteButtonVisible() {
  await expect(this.completeTaskButton).toBeVisible();
}

async assertUncompleteButtonVisible() {
  await expect(this.uncompleteTaskButton).toBeVisible();
}

}

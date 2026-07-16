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

  readonly editTitleInput: Locator;
  readonly editDescriptionInput: Locator;

  readonly completeTaskButton: Locator;
  readonly uncompleteTaskButton: Locator;

  readonly filterByLabel: Locator;
  readonly sortByLevel :Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.titleInput = page.getByTestId('task-title-input');
    this.descriptionInput = page.getByTestId('task-description-input');
    this.selectImportance = page.getByTestId('task-importance-select');;
    this.selectLabel = page.getByTestId('task-label-select');
    this.addTaskButton = page.getByTestId('add-task-btn');
    this.editButton = page.getByTestId('edit-task-btn');
    this.deleteButton = page.getByTestId('delete-task-btn');
    this.saveTaskButton = page.getByTestId('save-task-btn');
    this.cancelEditButton = page.getByTestId('cancel-edit-btn');
    this.editTitleInput = page.getByTestId('edit-title-input');
    this.editDescriptionInput = page.getByTestId('edit-description-input');
    this.completeTaskButton = page.getByTestId('complete-task-btn');
    this.uncompleteTaskButton = page.getByTestId('uncomplete-task-btn');
    this.filterByLabel = page.getByTestId('filter-label-select');
    this.sortByLevel = page.getByTestId('sort-importance-select');
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
    return this.page.getByTestId('task-item').filter({ hasText: title });
  }

  async assertTaskVisible(title: string) {
  await expect(this.page.getByTestId('task-item').filter({ hasText: title })).toBeVisible();
}

async assertTaskCount(count: number) {
  await expect(this.page.getByTestId('task-item')).toHaveCount(count);
}

  async deleteTask() {
    await this.deleteButton.click();
  }

  async editTask() {
    await this.editButton.click();
  }

  async editTitle(title: string) {
    await this.editTitleInput.fill(title);
  }

  async editDescription(description: string) {
    await this.editDescriptionInput.fill(description);
  }

  async saveEditedTask() {
    await this.saveTaskButton.click();
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
  const taskItems = this.page.getByTestId('task-item');
  await expect(taskItems.nth(0)).toContainText('Low Task');
  await expect(taskItems.nth(1)).toContainText('Medium Task');
  await expect(taskItems.nth(2)).toContainText('High Task');
}

async assertDescendingSortOrder() {
  const taskItems = this.page.getByTestId('task-item');
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
  await expect(this.page.getByTestId('task-item').filter({ hasText: title })
    ).toHaveClass(/completed/);
  
}

async assertTaskUncomplete(title: string) {
  await expect(this.page.getByTestId('task-item').filter({ hasText: title })
    ).not.toHaveClass(/uncompleted/);
}

async assertCompleteButtonVisible() {
  await expect(this.completeTaskButton).toBeVisible();
}

async assertUncompleteButtonVisible() {
  await expect(this.uncompleteTaskButton).toBeVisible();
}

}

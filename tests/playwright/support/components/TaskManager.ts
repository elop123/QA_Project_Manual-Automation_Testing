import { Page, Locator } from '@playwright/test';

export type ImportanceOptions = 'High' | 'Medium' | 'Low';
export type LabelOptions = 'Work' | 'Social' | 'Home' | 'Hobby';

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
  readonly incompleteTaskButton: Locator;

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
    this.incompleteTaskButton = page.getByRole('button', { name: 'Uncomplete' });

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

  async deleteTask() {
    await this.deleteButton.click();
  }

  async editTask() {
    await this.editButton.click();
  }

  async saveEditedTask() {
    await this.saveTaskButton.click();
  }

  async cancelEdit() {
    await this.cancelEditButton.click();
  }

  async completeTask() {
    await this.completeTaskButton.click();
  }

  async incompleteTask() {
    await this.incompleteTaskButton.click();
  }
}
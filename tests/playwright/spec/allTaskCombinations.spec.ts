import { test, expect } from '../fixtures/base_fixtures';

const importance = ['Low', 'Medium', 'High'] as const;
const labels = ['Work', 'Social', 'Home', 'Hobby'] as const;
const completeness = ['Complete', 'Uncomplete'] as const;

type Importance = typeof importance[number];
type Label = typeof labels[number];
type Completeness = typeof completeness[number];

const combinations: { importance: Importance; label: Label; completeness: Completeness }[] = [];

for (const imp of importance) {
  for (const lbl of labels) {
    for (const comp of completeness) {
      combinations.push({ importance: imp, label: lbl, completeness: comp });
    }
  }
}

test.describe('All Task Combinations', () => {
  for (const combo of combinations) {

    const title = `Task-${combo.importance}-${combo.label}-${combo.completeness}`;

    test(`[${combo.importance}] [${combo.label}] [${combo.completeness}] - ${title}`,
      async ({ task, page }) => {

      await task.addTitle(title);
      await task.selectImportanceOption(combo.importance);
      await task.selectLabelOption(combo.label);
      await task.clickAddTask();
      await task.assertTaskVisible(title);

      if (combo.completeness === 'Complete') {
        await task.clickCompleteTask();
        await task.assertUncompleteButtonVisible();
      }

    });

  }

});
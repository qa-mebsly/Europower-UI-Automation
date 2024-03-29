import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    test.setTimeout(120000);
  await page.goto('http://staging.mebsly.com.s3-website-eu-west-1.amazonaws.com/');
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Categories' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Fashion' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Categories' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Bikes' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Categories' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Health & Beauty' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Categories' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Baby Toys' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Home', { exact: true }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Market 1' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Pages').click();
  await page.waitForTimeout(2000);
  await page.getByText('User Account').click();
  await page.waitForTimeout(2000);
  await page.getByText('Vendor Account').click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Products' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Add New Product' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Track My Orders' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Back to Demos' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button').nth(2).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'View Cart' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('2. Details').click();
  await page.waitForTimeout(2000);
  await page.getByText('3. Payment').click();
  await page.waitForTimeout(2000);
  await page.getByText('4. Review').click();
  await page.waitForTimeout(3000);
});
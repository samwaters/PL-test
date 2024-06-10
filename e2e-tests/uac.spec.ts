import { test, expect } from '@playwright/test'

/*


WHEN I visit the product collection page
THEN I expect to see filters sidebar
WHEN I filter by "Price" "30" in the sidebar
THEN I expect to see 1 product in the resulting table

WHEN I visit the product collection page
THEN I expect to see filters sidebar
WHEN I filter by "Subscription" "Yes" in the sidebar
WHEN I search for "Cat" in filters sidebar
THEN I expect to see 5 products in the resulting table
 */

test("Loads with no filters", async ({ page }) => {
  await page.goto("/")
  await expect(page).toHaveTitle("PetLab FrontEnd Test")
  await expect(page.getByText("Product Filters")).toBeVisible()
  await expect(page.getByText("Subscription Only")).toBeVisible()
  await expect(page.getByText("Displaying results 1 to 10 of 12")).toBeVisible()
})

test("Filters by dog", async ({ page }) => {
  await page.goto("/")
  await expect(page).toHaveTitle("PetLab FrontEnd Test")
  await expect(page.getByText("Displaying results 1 to 10 of 12")).toBeVisible()
  await page.getByTestId("tag-filter-Dog").click()
  await expect(page.getByText("Displaying results 1 to 10 of 11")).toBeVisible()
})

test("Filter by price range", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByTestId("price-filter")).toBeVisible()
  const slider = page.getByTestId("price-filter")
  const thumb = slider.locator(".MuiSlider-thumb").last()
  // Drag the slider from max (150) to the target value of 30
  // To do this, work out the bounding boxes and how much to move by
  // 30 out of 150 = 20%
  const targetPercentage = 0.2
  const thumbBoundingBox = await thumb.boundingBox()
  const sliderBoundingBox = await slider.boundingBox()
  const startPoint = {
    x: thumbBoundingBox.x + thumbBoundingBox.width / 2,
    y: thumbBoundingBox.y + thumbBoundingBox.height / 2,
  }
  const endPoint = {
    x: sliderBoundingBox.x + sliderBoundingBox.width * targetPercentage,
    y: thumbBoundingBox.y + thumbBoundingBox.height / 2,
  }
  await page.mouse.move(startPoint.x, startPoint.y)
  await page.mouse.down()
  await page.mouse.move(endPoint.x, endPoint.y)
  await page.mouse.up()
  await expect(page.getByText("Displaying results 1 to 1 of 1")).toBeVisible()
})

test("Filters by cat and subscription", async ({ page }) => {
  await page.goto("/")
  await expect(page).toHaveTitle("PetLab FrontEnd Test")
  await expect(page.getByText("Displaying results 1 to 10 of 12")).toBeVisible()
  await page.getByTestId("tag-filter-Cat").click()
  await page.getByTestId("subscription-filter").click()
  await expect(page.getByText("Displaying results 1 to 5 of 5")).toBeVisible()
})
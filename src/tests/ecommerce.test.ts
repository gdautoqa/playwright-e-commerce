import { test } from '@playwright/test';
import { EcommercePage } from '../pages/ecommerce.page';

test('Shopping', async ({ page }) => {
  const ecommerce = new EcommercePage(page);

  // **Home Page**

  // Navigate to the eCommerce Playground homepage
  await ecommerce.gotoHomePage();

  // Navigate to Apple MacBook
  await ecommerce.hoverMegaMenu();
  await ecommerce.navigateToProductByManufacturerId('8');

  // Verify navigation to the Apple MacBook page
  await ecommerce.verifyPageURL('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8');

  // **Apple MacBook Product Page**

  // Click on MacBook
  await ecommerce.clickProductById('43');

  // Verify navigation to the MacBook product page
  await ecommerce.verifyPageURL('https://ecommerce-playground.lambdatest.io/index.php?route=product/product&manufacturer_id=8&product_id=43');

  // Set quantity to 2 by clicking the increase quantity button
  await ecommerce.increaseQuantity();

  // Add to Cart
  await ecommerce.addToCart();

  // Wait for the "Success: You have added" message to disappear
  await ecommerce.waitForSuccessMessageToDisappear();

  // Return to homepage
  await ecommerce.returnHome();

  // Verify navigation to the homepage
  await ecommerce.verifyPageURL('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');

  // **iPod Nano Product Page**

  // Navigate to Apple iPad
  await ecommerce.hoverMegaMenu();
  await ecommerce.navigateToProductByManufacturerId('8');

  // Verify navigation to the Apple iPad page
  await ecommerce.verifyPageURL('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8');

  // Filter for In Stock products
  await ecommerce.filterInStock();

  // Click on iPod nano
  await ecommerce.selectProductImage('36');

  // Add to Cart
  await ecommerce.addToCart();

  // Wait for the "Success: You have added" message to disappear
  await ecommerce.waitForSuccessMessageToDisappear();

  // Return to homepage
  await ecommerce.returnHome();

  // Verify navigation to the homepage
  await ecommerce.verifyPageURL('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');

  // **Canon EOS 5D Product Page**

  // Navigate to Mouse and Keyboard
  await ecommerce.hoverMegaMenu();
  await ecommerce.page.click('//a[contains(text(), "Mouse & Keyboard")]');

  // Verify navigation to the Mouse & Keyboard category page
  await ecommerce.verifyPageURL('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=29');

  // Select page 4
  await ecommerce.page.getByRole('link', { name: '4', exact: true }).click();

  // Select Canon EOS 5D
  await page.locator('#mz-product-grid-image-92-212408').click();

  // Verify navigation to the Canon EOS 5D product page
  await ecommerce.verifyPageURL('https://ecommerce-playground.lambdatest.io/index.php?route=product/product&path=25_29&product_id=92');

  // Choose 'Small' under Please Select
  await ecommerce.selectSize('103');

  // Add to Cart
  await ecommerce.addToCart();

  // Wait for the "Success: You have added" message to disappear
  await ecommerce.waitForSuccessMessageToDisappear();

  // **View Cart**

  // Click the view cart link
  await ecommerce.viewCart();

  // **Estimate Shipping & Taxes**

  // Expand the "Estimate Shipping & Taxes" section
  await ecommerce.expandEstimateShippingAndTaxes();

  // Choose United States for Country
  await ecommerce.selectCountry('223');

  // Choose Arizona from Region / State
  await ecommerce.selectRegion('3616');

  // Enter 85005 for Post Code
  await ecommerce.fillPostCode('85005');

  // Click Get Quotes
  await ecommerce.getQuotes();

  // Select Flat Shipping Rate - $5.00 radio button
  await ecommerce.selectFlatShippingRate();

  // Click Apply Shipping
  await ecommerce.applyShipping();

  // **Proceed to Checkout**

  // Click Checkout
  await ecommerce.proceedToCheckout();

  // Select the 'Guest Checkout' radio button
  await ecommerce.selectGuestCheckout();

  // **Billing Details**

  // Fill in the billing details
  await ecommerce.fillBillingDetails(
    'John',            // First Name
    'Doe',             // Last Name
    'johndoe@johndoe.com', // E-Mail
    '1234567890',      // Telephone
    '123 Anyplace Street', // Address 1
    'Phoenix',         // City
    '85005',           // Post Code
    '223',             // Country (United States)
    '3616'             // Region/State (Arizona)
  );

  // Agree to the Terms & Conditions
  await ecommerce.agreeToTermsAndConditions();

  // Click the 'Continue' button to proceed
  await ecommerce.continueToNextStep();

  // **Order Confirmation**

  // Confirm the order
  await ecommerce.confirmOrder();

  // **Verification**

  // Assert message "Your order has been placed!"
  await ecommerce.verifyOrderPlacement();
});
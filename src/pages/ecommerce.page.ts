import { Page, expect } from '@playwright/test';

export class EcommercePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigation Methods

  async gotoHomePage() {
    await this.page.goto('https://ecommerce-playground.lambdatest.io/');
  }

  async hoverMegaMenu() {
    await this.page.hover('.mega-menu');
  }

  async navigateToProductByManufacturerId(manufacturerId: string) {
    await this.page.click(`a[href*="manufacturer_id=${manufacturerId}"]`);
  }

  async verifyPageURL(expectedUrl: string) {
    await expect(this.page).toHaveURL(expectedUrl);
  }

  async clickProductById(productId: string) {
    await this.page.click(`a[href*="product_id=${productId}"]`);
  }

  // Cart Methods

  async increaseQuantity() {
    await this.page.getByRole('button', { name: 'Increase quantity' }).click();
  }

  async addToCart() {
    await this.page.getByRole('button', { name: 'Add to Cart' }).click();
  }

  async waitForSuccessMessageToDisappear() {
    await this.page.waitForSelector('.alert-success', { state: 'detached' });
  }

  async returnHome() {
    await this.page.locator('#widget-navbar-217834').getByRole('link', { name: 'Home' }).click();
  }

  // Product Selection Methods

  async filterInStock() {
    await this.page.locator('#mz-filter-panel-0-3').getByText('In stock').click();
  }

  async selectProductImage(productImageId: string) {
    await this.page.locator(`#mz-product-grid-image-${productImageId}-212439`).click();
  }

  async selectSize(sizeOption: string) {
    await this.page.locator('#input-option247-216836').selectOption(sizeOption);
  }

  // Cart and Checkout Methods

  async viewCart() {
    await this.page.getByRole('link', { name: 'View Cart ' }).click();
  }

  async expandEstimateShippingAndTaxes() {
    await this.page.getByRole('heading', { name: 'Estimate Shipping & Taxes ' }).locator('i').click();
  }

  async selectCountry(countryId: string) {
    await this.page.getByLabel('Country').selectOption(countryId);
  }

  async selectRegion(regionId: string) {
    await this.page.getByLabel('Region / State').selectOption(regionId);
  }

  async fillPostCode(postCode: string) {
    await this.page.getByPlaceholder('Post Code').click();
    await this.page.getByPlaceholder('Post Code').fill(postCode);
  }

  async getQuotes() {
    await this.page.getByRole('button', { name: 'Get Quotes' }).click();
  }

  async selectFlatShippingRate() {
    await this.page.getByLabel('Flat Shipping Rate - $').check();
  }

  async applyShipping() {
    await this.page.getByRole('button', { name: 'Apply Shipping' }).click();
  }

  async proceedToCheckout() {
    await this.page.getByRole('link', { name: 'Checkout' }).click();
  }

  // Checkout Methods

  async selectGuestCheckout() {
    await this.page.getByText('Guest Checkout').click();
  }

  async fillBillingDetails(firstName: string, lastName: string, email: string, telephone: string, address1: string, city: string, postCode: string, countryId: string, regionId: string) {
    await this.page.getByRole('textbox', { name: 'First Name*' }).fill(firstName);
    await this.page.getByRole('textbox', { name: 'Last Name*' }).fill(lastName);
    await this.page.getByRole('textbox', { name: 'E-Mail*' }).fill(email);
    await this.page.getByPlaceholder('Telephone').fill(telephone);
    await this.page.getByRole('textbox', { name: 'Address 1*' }).fill(address1);
    await this.page.getByRole('textbox', { name: 'City*' }).fill(city);
    await this.page.getByRole('textbox', { name: 'Post Code*' }).fill(postCode);
    await this.page.locator('#input-payment-country').selectOption(countryId);
    await this.page.locator('#input-payment-zone').selectOption(regionId);
  }

  async agreeToTermsAndConditions() {
    await this.page.getByText('I have read and agree to the Terms & Conditions').click();
  }

  async continueToNextStep() {
    await this.page.getByRole('button', { name: 'Continue ' }).click();
  }

  async confirmOrder() {
    await this.page.getByRole('button', { name: 'Confirm Order ' }).click();
  }

  async verifyOrderPlacement() {
    await expect(this.page.locator('.checkout-success')).toHaveText(/Your order has been placed!/);
  }
}
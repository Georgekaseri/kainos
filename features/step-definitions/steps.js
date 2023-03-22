const { Given, When, Then } = require("@wdio/cucumber-framework");
const HomePage = require("../pageobjects/home.page.js");
const data = require("../data/data.json");
const { assert } = require("chai");

Given("I am on the browser", async () => {
  console.log("I am on the browser");
});

Then("I should launch the workdays", async () => {
  await browser.url("https://www.workday.com/");
});

Then("I should verify the headers link", async () => {
  await HomePage.clickHeader(0);
});

Then("I should verify the workdays list", async () => {
  for (let i = 0; i < 2; i++) {
    let workdayLink = [
      data.WhyWorkday.lnk1,
      data.WhyWorkday.lnk2,
      data.WhyWorkday.lnk3,
    ];
    assert.equal(await HomePage.getWorkDaysList(i), workdayLink[i]);
  }
});

Then("I should verify the Products link", async () => {
  await HomePage.clickHeader(1);

  for (let i = 3; i < 7; i++) {}
  let productLink = [
    data.product.lnk1,
    data.product.lnk2,
    data.product.lnk3,
    data.product.lnk4,
    data.product.lnk5,
  ];

  let text = await HomePage.getWorkDaysList(3);

  let result = text.includes(productLink[0]);
  assert.equal(result, true);
});

Then("I should verify the industries Solutions Link", async () => {
  await HomePage.clickHeader(2);

  for (let i = 0; i < 24; i++) {}
  let industriesSolutionsLinks = [
    data.industriesSolutionsLinks.lnk1,
    data.industriesSolutionsLinks.lnk2,
    data.industriesSolutionsLinks.lnk3,
    data.industriesSolutionsLinks.lnk4,
    data.industriesSolutionsLinks.lnk5,
    data.industriesSolutionsLinks.lnk6,
    data.industriesSolutionsLinks.lnk7,
    data.industriesSolutionsLinks.lnk8,
    data.industriesSolutionsLinks.lnk9,
    data.industriesSolutionsLinks.lnk10,
    data.industriesSolutionsLinks.lnk11,
    data.industriesSolutionsLinks.lnk12,
    data.industriesSolutionsLinks.lnk13,
    data.industriesSolutionsLinks.lnk14,
    data.industriesSolutionsLinks.lnk15,
    data.industriesSolutionsLinks.lnk16,
    data.industriesSolutionsLinks.lnk17,
    data.industriesSolutionsLinks.lnk18,
    data.industriesSolutionsLinks.lnk19,
    data.industriesSolutionsLinks.lnk20,
    data.industriesSolutionsLinks.lnk21,
    data.industriesSolutionsLinks.lnk22,
    data.industriesSolutionsLinks.lnk23,
    data.industriesSolutionsLinks.lnk24,
  ];

  let text = await HomePage.getWorkDaysList(2);

  let result = text.includes(industriesSolutionsLinks[2]);
  assert.equal(result, false);
});

Then("I should verify the customer Experience Links", async () => {
  for (let i = 0; i < 7; i++) {
    let customerExperienceLinks = [
      data.customerExperienceLinks.lnk1,
      data.customerExperienceLinks.lnk2,
      data.customerExperienceLinks.lnk3,
      data.customerExperienceLinks.lnk4,
      data.customerExperienceLinks.lnk5,
      data.customerExperienceLinks.lnk6,
      data.customerExperienceLinks.lnk7,
    ];

    let text = await HomePage.getWorkDaysList(i);

    let result = text.includes(customerExperienceLinks[i]);
    assert.equal(result, false);
  }
});

Then("I should verify the resources links", async () => {
  // await HomePage.clickHeader(4);
  for (let i = 0; i < 10; i++) {
    let resourcesLinks = [
      data.resourcesLinks.lnk1,
      data.resourcesLinks.lnk2,
      data.resourcesLinks.lnk3,
      data.resourcesLinks.lnk4,
      data.resourcesLinks.lnk5,
      data.resourcesLinks.lnk6,
      data.resourcesLinks.lnk7,
      data.resourcesLinks.lnk8,
      data.resourcesLinks.lnk9,
      data.resourcesLinks.lnk10,
    ];

    let text = await HomePage.getWorkDaysList(i);

    let result = text.includes(resourcesLinks[i]);
    assert.equal(result, false);
  }
});

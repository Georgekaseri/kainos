/**
 * @function wait
 * @param {string} selector - The Selector element.
 * @param useBrowser - Optional browser instance to use
 */
export const wait = (selector: string, useBrowser: any = browser) => {
    const element = useBrowser.$(selector);
    element.waitForExist({});
    element.moveTo({});
  };
  /**
   * @function waitForTextToAppear
   * waits until the selector with text is visible
   * @param {string} selector - The Selector element.
   * @param {string} textToSearch - Text to search in the selectors.
   * @param useBrowser - Optional browser instance to use, otherwise defaults to global browser
   */
  export const waitForTextToAppear = (
    selector: string,
    textToSearch: string,
    useBrowser: any = browser
  ) => {
    wait(selector, useBrowser);
    const group = useBrowser.$$(selector);
    useBrowser.waitUntil(
      function () {
        for (let i = 0; i < group.length; i++) {
          const element = group[i];
          if (element.getText().includes(textToSearch)) {
            return true;
          }
        }
      },
      100000,
      `${selector} with ${textToSearch} is not visible`
    );
  };
  
  /**
   * @function waitForVisible
   * @desc Accepts selector to wait for the element to appear in the DOM and scroll the page to that element in the screen.
   * and waits until the selector is visible
   * @param {string} selector - The Selector element.
   * @param useBrowser - Optional browser instance to use, otherwise defaults to global browser
   */
  export const waitForVisible = (selector, useBrowser = browser) => {
    wait(selector);
    useBrowser.waitUntil(
      function () {
        return useBrowser.$(selector).isDisplayedInViewport();
      },
      100000,
      `Selector ${selector} is not visible`
    );
  };
  
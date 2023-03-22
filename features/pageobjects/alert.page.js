class AlertPage {
    get getAlertButton() {
      return $("//*[@class='call']");
    }
  
    async clickOnAlertButton() {
      await this.getAlertButton.waitForDisplayed();
      await this.getAlertButton.click();
    }

    async clickOnHeaderLink(index){
        let ele = $$(".nav-title")[index]
        return await ele.click();
    }
  }
  
  export default new AlertPage();
  
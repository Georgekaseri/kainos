class HomePage {
  async clickHeader(index) {
    return await $$(".nav-title")[index].click();
  }

  async getWorkDaysList(index) {
    return await $$(".cmp-navigation__item-link")[index].getText();
  }
}

module.exports = new HomePage();

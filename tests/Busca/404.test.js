module.exports = {
  '@tags': ['smoke', '404'],

  before: function (browser) {
    let login = browser.page.login();
    let sidebar = browser.page.sidebar();

    login.with('zumbi@dospalmares.com.br', 'pwd123');
    sidebar.expectLoggedUser('Quilombo');
  },

  'quando eu busco um titulo não cadastrado': function (browser) {
    let movie = browser.page.movie();

    movie
      .setValue('@searchInput', 'Não e mais um besteirol Americano')
      .click('@searchIcon');
  },

  'entao devo ver uma mensagem de alerta': function (browser) {
    let movie = browser.page.movie();

    movie
      .waitForElementVisible('@alertDanger', 15000)
      .assert.containsText(
        '@alertDanger',
        'Puxa! não encontramos nada aqui :('
      );
  },
};

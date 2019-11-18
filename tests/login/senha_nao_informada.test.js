

module.exports = {
    'senha não informado': (browser) => {
        let login = browser.page.login()
        login
            .with('zumbi@dospalmares.com.br', '')
            .expectAlertInfo('Opps. Cadê a senha?')
    }
}
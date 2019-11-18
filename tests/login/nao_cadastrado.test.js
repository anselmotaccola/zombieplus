

module.exports = {
    'não cadastrado': (browser) => {
        let login = browser.page.login()
        login
            .with('404@dospalmares.com.br', '123abc')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
}
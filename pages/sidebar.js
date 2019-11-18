var userActions = {
    expectLoggedUser: function(nome) {
        return this
            .waitForElementVisible('@userinfo', 3000)
            .assert.containsText('@userinfo', nome)
    }

}

module.exports = {
    commands: [userActions],
    elements: {
        
        userinfo: '.user .info span'

    }
}
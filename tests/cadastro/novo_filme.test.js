import pg from '../../lib/db'

let movieData = {}

module.exports = {
    before: function (browser) {

        movieData = {
            title: 'Residente Evial',
            status: 'Disponível',
            year: 2002,
            releaseDate: '01/05/2002',
            cast: ['Milla Jovovich', 'Ali larter', 'Ian Glen', , 'Shawn Roberts'],
            cover: 'resident-evil-2002.jpg',
            plot: 'A missão  do esquadrão e da Alice e desligar a Rainha vermelha e coletar ddos sobre o incidente'
        }

        pg.removeByTitle(movieData.title)

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.with('zumbi@dospalmares.com.br', 'pwd123')
        sidebar.expectLoggedUser('Quilombo')
    },

    'quando eu faço o cadastro do filme': function (browser) {
        let movie = browser.page.movie()

        movie
            .createForm()
            .setValue('@titleInput', movieData.title)
            .selectStatus(movieData.status)
            .setValue('@yearInput', movieData.year)
            .setValue('@dateInput', movieData.releaseDate)
            .insertCast(movieData.cast)
            .setValue('@plotInput', movieData.plot)
            .uploadCover(movieData.cover)
            .pause(5000)
            .click('@createButton')
    },

    'entao devo ver o filme na lista': function (browser) {
        let movie = browser.page.movie()

        //visible =  procura o elemento na pagina, mas tambem procura pelo atributo display
        // Present = verifica  se o elemente está na pagina
        movie
            .waitForElementPresent('@list', 10000)
            .assert.containsText('@list', movieData.title)
    }

}


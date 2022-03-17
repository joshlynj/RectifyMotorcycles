import '@testing-libary/cypress/add-commands'
import cypress from 'cypress'

describe ('App Component', () => {
    beforeEach(() => {
        cypress.visit('/')
    })

    it("should render a heading that says 'Beautiful finishes'", () => {
        cypress.findByRole('heading').should('contain', 'Beautiful Finishes'); 
    })
})
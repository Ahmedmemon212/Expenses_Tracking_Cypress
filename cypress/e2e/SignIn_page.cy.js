describe('Sign in page test cases', () => {
  
    beforeEach(() => 
    {
      // Visit the signup page before each test
      cy.visit('https://fluffy-kleicha-a5fd27.netlify.app/login.html')
      cy.viewport(1280, 720)  
                                                              
    });
    it('login with invalid email', () => {
        cy.get('#email').type('ahmedmemo878@gmail.com')
        cy.get('#password').type('12345678')
        cy.get('#login-form > .justify-center').click()
      })
    it('login with invalid Password', () => {
        cy.get('#email').type('ahmedmemon@gmail.com')
        cy.get('#password').type('ahmedmemon')
        cy.get('#login-form > .justify-center').click()
     })
     it('Left the Email field and click on login button', () => {
       // cy.get('#email').type('')
        cy.get('#password').type('12345678')
        cy.get('#login-form > .justify-center').click()
     })
     it('Left the Password field and click on login button', () => {
        cy.get('#email').type('ahmedmemon@gmail.com')
       // cy.get('#password').type('ahmedmemon')
        cy.get('#login-form > .justify-center').click()
     })
     it('Click on show password button', () => {
        cy.get('#email').type('ahmedmemon@gmail.com')
        cy.get('#password').type('12345678')
        cy.get('#show-hide-password').click()
        cy.get('#login-form > .justify-center').click()
      })
    it('login with valid email and Password', () => {
      cy.get('#email').type('ahmedmemon@gmail.com')
      cy.get('#password').type('12345678')
       cy.get('#login-form > .justify-center').click()
    })
    
  })
  
  
  
  
  
  
describe('Left the username field empty', () => {
  

  beforeEach(() => 
  {
    // Visit the signup page before each test
    cy.visit('https://fluffy-kleicha-a5fd27.netlify.app/')
    cy.viewport(1280, 720)
                                                            
  });
  it('Left the username', () => {
     cy.get('#uname').type('    ')
    cy.get('#email').type('abe@gmai.com')
    cy.get('#password').type('123456')
    cy.get('#signup-form > .flex').click()
  })
  it('Left the Email', () => {
  
    cy.get('#uname').type('Ahmed')
    cy.get('#email').type('          ')
    cy.get('#password').type('123456')
    cy.get('#signup-form > .flex').click()

  })
  it('Left the Password', () => {
    
    cy.get('#uname').type('Ahmed')
    cy.get('#email').type('ghs@gmail.com ')
    cy.get('#password').type('    ')
    cy.get('#signup-form > .flex').click()
  })

  it('Empty String in password', () => {
    
    cy.get('#uname').type('Ahmed')
    cy.get('#email').type('abc2@gmail.com        ')
    cy.get('#password').type('      ')
    cy.get('#signup-form > .flex').click()
  })
  it('Exit Email address', () => {
    cy.get('#uname').type('Ahmed')
    cy.get('#email').type('abc@gmail.com')
    cy.get('#password').type('123456')
    cy.get('#signup-form > .flex').click()
  })
  it('Enter 2 character password', () => {
    cy.get('#uname').type('Ahmed')
    cy.get('#email').type('abc@gmail.com')
    cy.get('#password').type('12')
    cy.get('#signup-form > .flex').click()
    cy.get('#password-length-error').should('be.visible')

  })
  it('Redirect to sign in page', () => {
    cy.get('#uname').type('Ahmed')
    cy.get('#email').type('abc21@gmail.com')
    cy.get('#password').type('121221')
    cy.get('#signup-form > .flex').click()
   // cy.get('#password-length-error').should('be.visible')

  })
  
  
})






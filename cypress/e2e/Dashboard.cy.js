describe('Using Cash account account Test_cases', () => {
  
    beforeEach(() => 
    {
      cy.visit('https://fluffy-kleicha-a5fd27.netlify.app/login.html')
              cy.viewport(1280, 720)
              cy.get('#email').type('ahmedmemon@gmail.com')
              cy.get('#password').type('12345678')
              cy.get('#login-form > .justify-center').click()
              cy.wait(10000)
                                                              
    });
    
    it('Enter the Amount Manually', () => {
         cy.wait(10000)
         cy.get('#amount').type('50000')

      })

      it('Click on the amount option', () => {
        
         cy.wait(10000)
         cy.get('#amount').type('50000')
         cy.get('#account-options').select('Cash');

      })
      it('Click on the category-options', () => {
        
         cy.wait(10000)
         cy.get('#amount').type('50000')
         cy.get('#account-options').select('Cash');
         cy.get('#category-options').select('Health');

      })

      it('Click on add income using cash account ', () => {
        
        cy.wait(10000)
        cy.get('#amount').type('50000')
        cy.get('#account-options').select('Cash');
        cy.get('#category-options').select('Health');
        cy.get('#add-income-button').click()
        cy.wait(20000)


     })

     it('Click on add Expense using Cash account', () => {
        
      cy.wait(10000)
      cy.get('#amount').type('5000')
      cy.get('#account-options').select('Cash');
      cy.get('#category-options').select('Other');
      cy.get('#add-expense-button').click()
      cy.wait(20000)
   })

   it('Logout', () => {

    cy.get('#user-profile').click();
    
    cy.get('#logout-button').click();
    
    });
    
      })

describe('Using Savings account Test_cases', () => {
  
        beforeEach(() => 
        {
          cy.visit('https://fluffy-kleicha-a5fd27.netlify.app/login.html')
              cy.viewport(1280, 720)
              cy.get('#email').type('ahmedmemon@gmail.com')
              cy.get('#password').type('12345678')
              cy.get('#login-form > .justify-center').click()
                                                                  
        });
        
        it('Enter the Amount Manually', () => {
            
             cy.wait(10000)
             cy.get('#amount').type('50000')
    
          })
    
          it('Click on the amount option', () => {
            
             cy.wait(10000)
             cy.get('#amount').type('50000')
             cy.get('#account-options').select('Savings');
    
          })
          it('Click on the category-options', () => {
             cy.wait(10000)
             cy.get('#amount').type('50000')
             cy.get('#account-options').select('Savings');
             cy.get('#category-options').select('Other');
    
          })
          it('Click on add income using Saving account', () => {
        
            cy.wait(10000)
            cy.get('#amount').type('50000')
            cy.get('#account-options').select('Savings');
            cy.get('#category-options').select('Health');
            cy.get('#add-income-button').click()
            cy.wait(20000)
    
    
         })
    
         it('Click on add Expense using Saving account', () => {
            
          cy.wait(10000)
          cy.get('#amount').type('5000')
          cy.get('#account-options').select('Savings');
          cy.get('#category-options').select('Other');
          cy.get('#add-expense-button').click()
          cy.wait(20000)
    
    
       })
       it('Logout', () => {
        cy.get('#user-profile').click();
        cy.get('#logout-button').click();
        });
    
          })

describe('Add new account ', () => {
         // Define the account name as a variable
         const accountName = 'CypressAccount3232';
     
         beforeEach(() => {
             // Visit the signup page before each test
             cy.visit('https://fluffy-kleicha-a5fd27.netlify.app/login.html');
             cy.viewport(1280, 720);
             cy.get('#email').type('ahmedmemon@gmail.com');
             cy.get('#password').type('12345678');
             cy.get('#login-form > .justify-center').click();
             cy.wait(10000);
         });
     
         it('first Create new account', () => {
             cy.wait(10000);
             cy.get('.inline-block').click();
             cy.get('#account-name').type(accountName);
             cy.get('#account-amount').type('10000');
             cy.get('#add-account-button').click();
             cy.wait(10000);
         });
     
         it('Enter the Amount Manually', () => {
             cy.get('#amount').type('50000');
         });
     
         it('Click on the amount option', () => {
             cy.get('#amount').type('50000');
             cy.get('#account-options').select(accountName);
         });
     
         it('Click on the category-options', () => {
             cy.get('#amount').type('50000');
             cy.get('#account-options').select(accountName);
             cy.get('#category-options').select('Other');
         });
     
         it('Click on add income using bank account', () => {
             cy.get('#amount').type('50000');
             cy.get('#account-options').select(accountName);
             cy.get('#category-options').select('Health');
             cy.get('#add-income-button').click();
             cy.wait(20000);
         });
     
         it('Click on add Expense using bank account', () => {
             cy.get('#amount').type('5000');
             cy.get('#account-options').select(accountName);
             cy.get('#category-options').select('Other');
             cy.get('#add-expense-button').click();
             cy.wait(20000);
         });
   
         it.only('Assert that an expense transaction is added at the end of the table', () => {
            // Get the last row of the table before adding the expense transaction
            let lastRowBefore;
        
            cy.get('.transaction-history.mt-10 tbody tr:last-child').then(($lastRow) => {
                lastRowBefore = $lastRow.text();
            });
        
            cy.wait(5000);
            cy.get('.transaction-history.mt-10 tbody tr:last-child').then(($newLastRow) => {
                const lastRowAfter = $newLastRow.text();
              expect(lastRowAfter).to.equal(lastRowBefore);
            });
        });

        it('Logout', () => {
         cy.get('#user-profile').click();
         cy.get('#logout-button').click();
         });
     });
     


          
    
    
              
      


    
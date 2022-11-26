describe('empty spec', () => {
  it('Should be able to reach the app\'s url', () => {
    cy.visit('/');
  });
  
  it('Should contain all three inputs', () => {
    cy.get('#address');
    cy.get('#email');
    cy.get('#username');
  });

  it('Should allow entering values in the address input', () => {
    cy.get('#address').type('123 Main St').then(($input) => {
      expect($input.val()).to.equal('123 Main St');
    });
  });

  it('Should allow entering values in the email input', () => {
    cy.get('#email').type('sab@gmail.com').then(($input) => {
      expect($input.val()).to.equal('sab@gmail.com');
    });
  });

  it('Should allow entering values in the username input', () => {
    cy.get('#username').type('johnDoe').then(($input) => {
      expect($input.val()).to.equal('johnDoe');
    });
  });

  
  it('Should allow deleting values from the address input', () => {
    // current value is as it was at end of previous test
   cy.get('#address').type('{backspace}', { delay: 2000 }).then(($input) => {
      expect($input.val()).to.equal('123 Main S');
   });
  });

  it('Should allow deleting values from the email input', () => {
    cy.get('#email').type('{backspace}', { delay: 2000 }).then(($input) => {
      expect($input.val()).to.equal('sab@gmail.co');
   });
  });

  it('Should allow deleting values from the username input', () => {
    cy.get('#username').type('{backspace}').then(($input) => {
      expect($input.val()).to.equal('johnDo');
    });
  });

  it('Should display newly created user', () => {
    cy.get('#addUser').click();
    cy.get('.user-info').should('have.length', 1);
  });  
});
/// <reference types='Cypress' />

describe('tasks management', () => {
	it('should open and close the new task modal', () => {
		cy.visit('http://localhost:5173');
		cy.contains('button', 'Add Task').click();
		cy.get('.backdrop').click({ force: true });
		cy.get('.backdrop').shodul('not.exist').click({ force: true });
		cy.get('modal').should('not.exist');
	});
});

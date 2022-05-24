import { faker } from '@faker-js/faker';
import { getGreeting } from '../support/app.po';

describe('foo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    console.log(faker.address.buildingNumber());
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome foo');
  });
});

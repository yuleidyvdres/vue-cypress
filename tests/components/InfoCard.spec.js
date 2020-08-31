/// <reference types="cypress" />
import { mount } from 'cypress-vue-unit-test';
import InfoCard from '../../src/components/InfoCard';
import vuetify from '../../src/plugins/vuetify';

const use = [vuetify]

const extensions = {
  use,
}

describe('InfoCard', () => {

  it('Render component' , () => {
    mount(InfoCard, {
      extensions,
      propsData: {
        title: 'Title example',
        text: 'Text example',
        buttonText: 'Button text example'
      }
    });
    //Check visible elements
    cy.get("[data-test='info-card']").should('be.visible');
    cy.get("[data-test='title-card']").should('be.visible');
    cy.get("[data-test='title-text']").should('be.visible');
    cy.get("[data-test='title-actions']").should('be.visible');
    cy.get("[data-test='btn-red']").should('have.class', 'red')

    //Check props
    cy.contains('Title example');
    cy.contains('Text example');
    cy.contains('Button text example');
  })
});
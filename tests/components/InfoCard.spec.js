/// <reference types="cypress" />
import { mount } from 'cypress-vue-unit-test';
import InfoCard from '../../src/components/InfoCard';
import vuetify from '../../src/plugins/vuetify';

const use = [vuetify];

const extensions = {
  use,
};

describe('InfoCard', () => {

  beforeEach(() => {
    mount(InfoCard, {
      extensions,
      propsData: {
        title: 'Title example',
        text: 'Text example',
        buttonText: 'Button text example'
      }
    });
  });

  it('Render component' , () => {
    cy.get("[data-test='info-card']").should('be.visible');
    cy.get("[data-test='title-card']").should('be.visible');
    cy.get("[data-test='title-text']").should('be.visible');
    cy.get("[data-test='title-actions']").should('be.visible');
    cy.get("[data-test='btn-red']").should('have.class', 'red')
  });

  it('Check props', () => {
    cy.contains('Title example');
    cy.contains('Text example');
    cy.contains('Button text example');
  });

  it('Click action button', () => {
    const spy = cy.spy();
    Cypress.vue.$on('action', spy);
    cy.get("[data-test='btn-red']").click().then(() => {
      expect(spy).to.be.calledOnce;
    })
  });
});
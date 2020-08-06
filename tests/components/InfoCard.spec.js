/// <reference types="cypress" />
import { mount } from 'cypress-vue-unit-test';
import InfoCard from '../../src/components/InfoCard';
import Vue from "vue";
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('InfoCard', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify()
  });

  it('Render component' , () => {
    mount(InfoCard, {
      vuetify,
      propsData: {
        title: 'Title example',
        text: 'Text example',
        buttonText: 'Button text example'
      }
    });
    //Check visible elements
    cy.get('#info-card').should('be.visible');
    cy.get('#title-card').should('be.visible');
    cy.get('#title-text').should('be.visible');
    cy.get('#title-actions').should('be.visible');

    //Check props
    cy.contains('Title example')
    cy.contains('Text example')
    cy.contains('Button text example')
  })
});
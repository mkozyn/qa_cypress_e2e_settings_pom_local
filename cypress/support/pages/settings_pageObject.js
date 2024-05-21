import PageObject from '../PageObject';

class SettingsPage extends PageObject{
  url = '/settings';

  get usernameField(){
    return cy.getByDataCy('username');
  }

  get bioField(){
    return cy.getByDataCy('bio');
  }

  get emailField(){
    return cy.getByDataCy('email');
  }
  
  get passwordField(){
    return cy.getByDataCy('password');
  }

  get updateButton(){
    return cy.getByDataCy('update-btn');
  }
  
  get logoutButton(){
    return cy.getByDataCy('logout-button');
  }

  fillUsernameField(name){
    this.usernameField.clear().type(name);
  }

  fillBioField(bio){
    this.bioField.type('{selectAll}' + bio);
  }

  fillEmailField(email){
    this.emailField.type('{selectAll}' + email + '{enter}');
  }

  fillPasswordField(password){
    this.passwordField.type('{selectAll}' + password + '{enter}');
  }

  clickUpdateButton(){
    this.updateButton.click();
  }

  clickLogoutButton(){
    this.logoutButton.click({});
  }

  assertTheEmailField(email){
    this.emailField.should('have.value', email);
  }
};

export const settingsPage = new SettingsPage();

export class LoginPageElements {

    // Visit URL:
    
    Visit_Url (URL){
        cy.visit(URL);
    }
    
    //Fields:
    Type_Input_Field (Locator,Data)  {
    cy.get(Locator).type(Data)
    }
    // Clear_Input_Field
    Clear_Input_Field(Locator){
        cy.get(Locator).clear()
    }
    //  Focus_Input_Field
    Focus_Input_Field(Locator){
        cy.get(Locator).should('have.focus')
    }

    //Click Button:
    Click_Button(Locator){
        cy.get(Locator).click()
    }

    //  Error_Message Check
    Error_Message(Locator,Message){
        cy.get(Locator).should('contain',Message)    
    }

    //  Button_Should_Exist
    Button_Should_Exist(Locator){
        cy.get(Locator).should('exist')
    }

    // No_Error_Message
    No_Error_Message(Locator){
    cy.get(Locator).should('not.exist')
    }

    // Error_Message_Exist
   Error_Message_Exist(Locator){
    cy.get(Locator).should('exist')
   }
   Enter_key_From_Keyboard(Locator,Key){
    cy.get(Locator).type(Key)
   }

   Check_Element_Exist(Locator){
    cy.get(Locator).should("exist")
   }
   
   Check_Element_Not_Exist(Locator){
    cy.get(Locator).should("not.exist")
   }

    }
    
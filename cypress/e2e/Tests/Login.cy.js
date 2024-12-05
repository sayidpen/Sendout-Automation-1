import {LoginPageElements} from '../../Pages/LoginPage'
const loginPageElements = new LoginPageElements()
let Current_Url ; 
let Url = 'https://app.sendout.ai/login';
describe('Login Page Tests', () => {
    it('Verify the Email fields functionality - TC004', () => {
        loginPageElements.Visit_Url(Url)
        //Test Data : abdullahsayid@gmail.com Expected : No Error Message

        loginPageElements.Type_Input_Field("input[id=':r0:']",'abdullahsayid@gmail.com')
        loginPageElements.Click_Button("button[id=':r1:']")
        loginPageElements.No_Error_Message(".css-m5bgtg > .MuiFormHelperText-root")
        loginPageElements.Clear_Input_Field("input[id=':r0:']")

     //Test Data : 3746237   Expected : Error Message  

        loginPageElements.Type_Input_Field("input[id=':r0:']",'3746237')
        loginPageElements.Click_Button("button[id=':r1:']")
        loginPageElements.Error_Message(".css-m5bgtg > .MuiFormHelperText-root","Email must be valid")
        loginPageElements.Clear_Input_Field("input[id=':r0:']")

    //Test Data : 3746237   Expected : Error Message  
        
    loginPageElements.Type_Input_Field("input[id=':r0:']",'14122@5454.9898')
    loginPageElements.Click_Button("button[id=':r1:']")
    loginPageElements.Error_Message(".MuiFormControl-root.MuiFormControl-fullWidth.css-m5bgtg", "Email must be valid")
    loginPageElements.Clear_Input_Field("input[id=':r0:']")

    })



it('Verify the Password fields functionality  - TC005', () => {

  // Visit Page:
    loginPageElements.Visit_Url(Url)
  // Test Data: 1333565656  
    loginPageElements.Clear_Input_Field("input[id=':r0:']")
    loginPageElements.Clear_Input_Field("#auth-login-v2-password")
    loginPageElements.Type_Input_Field("input[id=':r0:']",'abdullahsayid@gmail.com')
    loginPageElements.Type_Input_Field("#auth-login-v2-password",'1333565656')
    loginPageElements.Click_Button("button[id=':r1:']")
    loginPageElements.No_Error_Message(".MuiFormHelperText-root.MuiFormHelperText-sizeMedium.MuiFormHelperText-contained.MuiFormHelperText-filled.css-1nh4czg")
    loginPageElements.Clear_Input_Field("#auth-login-v2-password")

    // Test Data: blank 
    loginPageElements.Type_Input_Field("input[id=':r0:']",'abdullahsayid@gmail.com')
    loginPageElements.Type_Input_Field("#auth-login-v2-password",' ')
    loginPageElements.Click_Button("button[id=':r1:']")
    loginPageElements.Error_Message(".MuiFormControl-root.MuiFormControl-fullWidth.css-tzsjye","Password should Required")


   
})


it('Verify the email and password fields charater limit functionality   - TC006', () => {
    // Visit Page:
       loginPageElements.Visit_Url(Url)
    // Test data 
    // Email :qw678888888888888888888888888888888888888888888888888888888888888tret@sjj78787878787878787878787878787878787878787878ndj.comwkfwef23         
    // Password : 6565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565
       loginPageElements.Type_Input_Field("input[id=':r0:']",'qw678888888888888888888888888888888888888888888888888888888888888tret@sjj78787878787878787878787878787878787878787878ndj.comwkfwef23  ')
       loginPageElements.Type_Input_Field("#auth-login-v2-password",'6565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565')
       loginPageElements.Click_Button("button[id=':r1:']")
       loginPageElements.Error_Message(".MuiFormHelperText-root.MuiFormHelperText-sizeMedium.MuiFormHelperText-contained.MuiFormHelperText-filled.css-1nh4czg")
})


it('Verify the email and password fields charater limit functionality - TC007', () => {
    // Visit Page:
       loginPageElements.Visit_Url(Url)
    // Test data 
    // Email :qw678888888888888888888888888888888888888888888888888888888888888tret@sjj78787878787878787878787878787878787878787878ndj.comwkfwef23         
    // Password : 6565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565
       loginPageElements.Type_Input_Field("input[id=':r0:']",'qw678888888888888888888888888888888888888888888888888888888888888tret@sjj78787878787878787878787878787878787878787878ndj.comwkfwef23  ')
       loginPageElements.Type_Input_Field("#auth-login-v2-password",'6565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565')
       loginPageElements.Click_Button("button[id=':r1:']")
       loginPageElements.Error_Message_Exist(".MuiFormHelperText-root.MuiFormHelperText-sizeMedium.MuiFormHelperText-contained.css-1nh4czg")
})


it('Verify the Eye Button functionality in Password Field - TC009',()=>{
     // Visit Page:
     loginPageElements.Visit_Url(Url)

     // Test Data: 
     // Password : 5656565656565
     loginPageElements.Type_Input_Field("#auth-login-v2-password",'5656565656565')
     loginPageElements.Click_Button("svg[role='img']")
     loginPageElements.Click_Button("svg[role='img']")
})

it('Verify the functionality of Remember Me button - TC010',()=>{
    // Visit Page:
    loginPageElements.Visit_Url(Url)
    loginPageElements.Click_Button("input[type='checkbox']")
    loginPageElements.Click_Button("input[type='checkbox']")

})

it('Verify the submittion of form by enter button functionality - TC011',()=>{
    // Visit Page:
    loginPageElements.Visit_Url(Url)
    // Test Data 
    //Email : abdullahsayid1218 Password : 123456
    loginPageElements.Type_Input_Field("input[id=':r0:']",'abdullahsayid1218@gmail.com')
    loginPageElements.Type_Input_Field("#auth-login-v2-password",'123456')
    loginPageElements.Enter_key_From_Keyboard('.MuiBox-root.css-w8mt2b','{enter}')
    loginPageElements.Button_Should_Exist('.MuiCardContent-root.css-1qarv3b')
   
})

it('Verify the Forgot Password? buttons functionality - TC012',()=>{
    // Visit Page:
    loginPageElements.Visit_Url(Url)
    // Test Data: N/A
    loginPageElements.Button_Should_Exist("input[id=':r0:']")
    loginPageElements.Click_Button('.MuiTypography-root.MuiTypography-body2.css-re9l5r')
    loginPageElements.Button_Should_Exist("button[type='submit']")
})

it("Verify the Login button's functionality  - TC013",()=>{
    // Visit Page:
    loginPageElements.Visit_Url(Url)
    // Test Data: N/A
    loginPageElements.Type_Input_Field("input[id=':r0:']",'abdullahsayid1218@gmail.com')
    loginPageElements.Type_Input_Field("#auth-login-v2-password",'123456')
    loginPageElements.Button_Should_Exist("button[id=':r1:']")
    loginPageElements.Click_Button("button[id=':r1:']")

})

it("Verify the Create an account button's functionality   - TC014",()=>{
    // Visit Page:
    loginPageElements.Visit_Url(Url)
    // Test Data: N/A
    loginPageElements.Button_Should_Exist(".MuiTypography-root.MuiTypography-body1.css-1wli69h")
    loginPageElements.Click_Button(".MuiTypography-root.MuiTypography-body1.css-1wli69h")
    loginPageElements.Check_Element_Exist("button[id=':r4:']")
})

it("Verify the Create an account button's functionality   - TC015",()=>{
    // Visit Page:
    loginPageElements.Visit_Url(Url)
    // Test Data: abdullahsayid@gmail.com, 3746237, 14122@5454.9898
    loginPageElements.Click_Button('.MuiTypography-root.MuiTypography-body2.css-re9l5r')
    loginPageElements.Type_Input_Field("input[id=':r2:']","abdullahsayid@gmail.com")
    loginPageElements.Check_Element_Not_Exist('.MuiFormHelperText-root.MuiFormHelperText-sizeMedium.MuiFormHelperText-contained.css-1nh4czg')
    loginPageElements.Clear_Input_Field("input[id=':r2:']")
    loginPageElements.Type_Input_Field("input[id=':rc:']","3746237")
    loginPageElements.Error_Message(".MuiFormHelperText-root.MuiFormHelperText-sizeMedium.MuiFormHelperText-contained.css-1nh4czg","email must be a valid email")
    loginPageElements.Clear_Input_Field("input[id=':rc:']")
    loginPageElements.Type_Input_Field("input[id=':rc:']","14122@5454.9898")
    loginPageElements.Error_Message(".MuiFormHelperText-root.MuiFormHelperText-sizeMedium.MuiFormHelperText-contained.css-1nh4czg","email must be a valid email")
    Current_Url = cy.url();
})






// it('',()=>{
//        // Visit Page:
//        loginPageElements.Visit_Url(Url)
// })


    afterEach(function() {
        if (this.currentTest.state === 'failed') {
          cy.log('Test failed, running additional checks or actions');
          // You can trigger another test or custom behavior here
        }
      });

    

})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
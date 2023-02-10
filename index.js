// ^ Automatic Run 
var signInMandatoryCounter = 0;
var personalDetMandatoryCounter = 0;

var OKEMAIL=false;
 var OKUSERNAME=false;
var OKCREATEPASSWORD=false;
var OKVERIFYPASSWORD=false;

var OKSTATE = false;
var OKVILLAGE = false;
var OKPIN = false;



//& Sign in Details : 
const Email_ID = document.getElementById('email-id');
const UserName = document.getElementById('username');
const Password = document.getElementById('password');
const Verify_Password = document.getElementById('verify-password');

var HTML_Form = [[1,2,3],[4,5,6]];
var user = [];

var sign_in = { 
    "email" : 'C',
    "username" : 'A',
    "password" : 'B',
    "verify_password" : ''
 }
// & Personal Details : 
const FirstName = document.getElementById('firstname');
const MiddleName = document.getElementById('middlename');
const LastName = document.getElementById('lastname');
const Male = document.getElementById('male');
const Female = document.getElementById('female');
const DOB_Date = document.getElementById('birth-date');

// Address 
const HouseNo = document.getElementById('house-no');
const Road_Area = document.getElementById('road-area');
const State = document.getElementById('state'); //* Remaining
const Village_City = document.getElementById('village-city');
const Pin_Code = document.getElementById('pin-code');

const Mobile_No1 = document.getElementById('mobile-no1');
const Mobile_No2 = document.getElementById('mobile-no2');
const Telephone_No = document.getElementById('telephone-no');
const Fav_Colour = document.getElementById('fav-colour') 

//& Other Details : 
const Select_File = document.getElementById('select-file');
//const Select_Image = document.getElementById('select-image');
const Select_Month = document.getElementById('select-month');
const Select_Range = document.getElementById('select-range');
const Select_Time = document.getElementById('select-time');
const Select_Week = document.getElementById('select-week');



 var personal_details = {
     "first_Name" : '',
     "middle_Name" : '',
     "last_Name" : '',
     "gender" : false,
     "DOB" : '',
      "address" : {
        "house_No" : '',
        "road_area" : '',
         "state" : '',
         "village_city" : '',
         "pin_code" : ''
      },
      "mobile_No1" : '',
      "mobile_No2" : '',
      "telephone_No" : '',
      "fav_Colour" : ''
 }

 var other_details = {

   "select_file" : '',
  
   "select_month" : '',
   "select_range" : '',
   "select_time" : '',
   "select_week" : '',

 }

 function checkForSignIn()
 {
   if((Email_ID.value.length==0 || UserName.value.length==0 || Password.value.length==0 || Verify_Password.value.length==0))
   {
      window.alert(OKUSERNAME);
     document.getElementById('sign-in-remaining-fields').textContent = "Please, fill the required fields...";
     document.getElementById('sign-in-remaining-fields').style.color = "red";
   }

   else if((OKEMAIL===true && OKUSERNAME===true && OKCREATEPASSWORD===true && OKVERIFYPASSWORD===true))
   {
      window.alert(OKUSERNAME);
      createAccount();
      document.getElementById('sign-in-remaining-fields').innerHTML = "Congrats... Your Account has been Created Successfully...";
      document.getElementById('sign-in-remaining-fields').style.color = 'green';
   }
   else
   {
      document.getElementById('sign-in-remaining-fields').textContent = "Please, fill the required fields...";
      document.getElementById('sign-in-remaining-fields').style.color = "red";
   }
 }

 function createAccount()
 {
   
    sign_in.email = Email_ID.value;
    //^ For Checking OF proper E-Mail _ID 
     let emails = Email_ID.value;
     document.getElementById('incorrect-email').textContent = "";
     if((!emails.endsWith('@gmail.com')) )
     {
       document.getElementById('incorrect-email').textContent = "In-Correct Email Format";
       document.getElementById('incorrect-email').style.color = 'red';
     }
     else
     {
      signInMandatoryCounter++;
     }

     for(let i=0 ; i<emails.length ; i++)
     {
        if(emails[i]>='A' && emails[i]<='Z')
        {
         document.getElementById('incorrect-email').textContent = "In-Correct Email Format";
         document.getElementById('incorrect-email').style.color = 'red';
        }
     }

    sign_in.username = UserName.value;

    if(UserName.value.length!=0)
    signInMandatoryCounter++;

    sign_in.password = Password.value;
    document.getElementById('registered-email').innerHTML = Email_ID.value;
   
  //  ^For checking OK Create Password :
    let capital = 0;
    let small = 0;
    let numbers = 0;
    let symbols = 0;
    let okpassword = 0;
 
    let pass = Password.value; 
    let Error = [];
    document.getElementById('create-password-wrong').innerHTML = "";
    if(pass.length<8)
    {
      Error.push("Your password must be contain min 8 character's.");
    }
     
    for(let i=0 ; i<pass.length ; i++)
    {
       if(pass[i]>='A' && pass[i]<='Z')
       capital++;
 
       if(pass[i]>='a' && pass[i]<='z')
       small++;
 
       if(pass[i]>='0' && pass[i]<='9')
       numbers++;
 
       if((pass[i]>' ' && pass[i]<='/') || (pass[i]>=':' && pass[i]<='@'))
       symbols++;
    }
     if(capital==0)
     Error.push("Your Password must be contain min 1 Capital Letter.");
 
      if(small==0)
     Error.push("Your Password must be contain min 1 Small Letter.");
 
      if(numbers==0)
     Error.push("Your Password must be contain min 1 Number.");
 
     if(symbols==0)
     Error.push("Your Password must be contain min 1 Symbol.");

     if(capital!=0 && small!=0 && numbers!=0 && symbols!=0 && pass.length>=8)
     {
      Error.push("OK Password");
      okpassword++;
     }
     
   if(okpassword!=0)
   {
      for(let i=0 ; i<Error.length ; i++)
      {
       document.getElementById('create-password-wrong').innerHTML += " "+ Error[i]+"<br>"; 
       document.getElementById('create-password-wrong').style.color = 'green';
       signInMandatoryCounter++;

      }
   }
 else
 {
   for(let i=0 ; i<Error.length ; i++)
   {
    document.getElementById('create-password-wrong').innerHTML += i+1 +". "+ Error[i]+"<br>"; 
    document.getElementById('create-password-wrong').style.color = 'red';
   }
 }

 //^ For Verify Password Checking 
 if(Password.value!==Verify_Password.value)
 {
   document.getElementById('incorrect-password').innerText = "* incorrect password";
   document.getElementById('incorrect-password').style.color = "red";
 }

 if(Password.value===Verify_Password.value && Password.value.length==Verify_Password.value.length)
 {
document.getElementById('incorrect-password').innerText = "**** correct password";
document.getElementById('incorrect-password').style.color = "green";
OKVERIFYPASSWORD++;

 }

 if(signInMandatoryCounter==4)
 {
      
      document.getElementById('sign-in-remaining-fields').innerHTML = `
      
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Your Account Created Successfully...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK  </button>
      </div>
    </div>
  </div>
</div>
      
      `
 }
 else
 {
   document.getElementById('sign-in-remaining-fields').textContent = "Please, fill the required fields...";
   document.getElementById('sign-in-remaining-fields').style.color = "red";
 }
     
 }

 function submitAll()
 {
    personal_details.first_Name = FirstName.value;
    personal_details.middle_Name = MiddleName.value;
    personal_details.last_Name = LastName.value;
    personal_details.gender = Male.value;
    personal_details.gender = Female.value;
    personal_details.DOB = DOB_Date.value;
    personal_details.address.house_No = HouseNo.value;
    personal_details.address.road_area = Road_Area.value;
    personal_details.address.state = "Maharastra";
    personal_details.address.village_city = Village_City.value;
    personal_details.address.pin_code = Pin_Code.value;
    personal_details.mobile_No1 = Mobile_No1.value;
    personal_details.mobile_No2 = Mobile_No2.value;
    personal_details.telephone_No = Telephone_No.value;
    personal_details.fav_Colour = Fav_Colour.value;

    console.log(personal_details);

 }



function check()
{
   other_details.select_file = Select_File.value;
   other_details.select_month = Select_Month.value;
   other_details.select_range = Select_Range.value;
   other_details.select_time = Select_Time.value;
   other_details.select_week = Select_Week.value;

   console.log(other_details);
   window.alert(other_details);
}

//* For Showing Runtime Create Password : 

function runtimeCreatePassword()
{
    //  ^For checking OK Create Password :
    let capital = 0;
    let small = 0;
    let numbers = 0;
    let symbols = 0;
    let okpassword = 0;
 
    let pass = Password.value; 
    let Error = [];
    document.getElementById('create-password-wrong').innerHTML = "";
    if(pass.length<8)
    {
      Error.push("Your password must be contain min 8 character's.");
    }
     
    for(let i=0 ; i<pass.length ; i++)
    {
       if(pass[i]>='A' && pass[i]<='Z')
       capital++;
 
       if(pass[i]>='a' && pass[i]<='z')
       small++;
 
       if(pass[i]>='0' && pass[i]<='9')
       numbers++;
 
       if((pass[i]>' ' && pass[i]<='/') || (pass[i]>=':' && pass[i]<='@'))
       symbols++;
    }
     if(capital==0)
     Error.push("Your Password must be contain min 1 Capital Letter.");
 
      if(small==0)
     Error.push("Your Password must be contain min 1 Small Letter.");
 
      if(numbers==0)
     Error.push("Your Password must be contain min 1 Number.");
 
     if(symbols==0)
     Error.push("Your Password must be contain min 1 Symbol.");

     if(capital!=0 && small!=0 && numbers!=0 && symbols!=0 && pass.length>=8)
     {
      Error.push("OK Password");
      okpassword++;
     }
     
   if(okpassword!=0)
   {
      for(let i=0 ; i<Error.length ; i++)
      {
       document.getElementById('create-password-wrong').innerHTML += " "+ Error[i]+"<br>"; 
       document.getElementById('create-password-wrong').style.color = 'green';
       OKCREATEPASSWORD=true;
       console.log("Create Password : "+OKCREATEPASSWORD)
       runtimePasswordChecking();
      }
   }
 else
 {
   for(let i=0 ; i<Error.length ; i++)
   {
    document.getElementById('create-password-wrong').innerHTML += i+1 +". "+ Error[i]+"<br>"; 
    document.getElementById('create-password-wrong').style.color = 'red';
    OKCREATEPASSWORD = false;
   }
 }
  
}

function runtimePasswordChecking()
{
   
   if(Password.value!==Verify_Password.value)
   {
     document.getElementById('incorrect-password').innerText = "* incorrect password";
     document.getElementById('incorrect-password').style.color = "red";
     OKVERIFYPASSWORD=false;
   }

   if(Password.value===Verify_Password.value && Password.value.length==Verify_Password.value.length)
   {
 document.getElementById('incorrect-password').innerText = "**** correct password";
 document.getElementById('incorrect-password').style.color = "green";
 OKVERIFYPASSWORD = true;
 console.log("Verify Password : "+OKVERIFYPASSWORD);
   }
}

//! Showing Wrong Field 

function showWrongEmail()
{
   let emails = Email_ID.value;
   document.getElementById('incorrect-email').textContent = "";
   if((!emails.endsWith('@gmail.com')) )
   {
      document.getElementById('email-id').style.border = "2px solid red"
      document.getElementById('incorrect-email').textContent = "Wrong E-Mail Format";
      document.getElementById('incorrect-email').style.color = "red";
      OKEMAIL=false;
   }
   else
   {
      document.getElementById('incorrect-email').textContent = "OK Email Format";
      document.getElementById('incorrect-email').style.color = "green";
    document.getElementById('email-id').style.border = "2px solid green"
     OKEMAIL = true;
     console.log("Email : "+OKEMAIL);
   }
}
function userNameEntered()
{
   if(UserName.value.length>0)
   {
      OKUSERNAME=true;
      console.log("UserName :"+OKUSERNAME);
   }
   else
   {
      OKUSERNAME = false;
      console.log("UserName :"+OKUSERNAME);
   }
   
}


//* For Showing Input in Green Colour 

function showGender(value)
{
document.getElementById('show-gender').textContent = value;
// document.getElementById('show-gender').textContent = document.getElementById('female').value;
// document.getElementById('show-range').textContent = document.getElementById('select-range').value;
// document.getElementById('show-full-name').textContent = FirstName.value;

}

function showFullName()
{
   document.getElementById('show-full-name').textContent = FirstName.value;
}

function showDOB()
{
   document.getElementById('show-DOB').innerText = DOB_Date.value;
}

const PHouse_No = document.getElementById('p-house-no');
const PRoad_Area = document.getElementById('p-road-area');
const PState = document.getElementById('p-state');
function selectMyState()
{
   document.getElementById('show-state').textContent  = PState.options[PState.selectedIndex].text;
   OKSTATE = true;
   console.log("State : "+ OKSTATE);
}
const PVillage_City = document.getElementById('p-village-city');
const PPin_Code = document.getElementById('p-pin-code');

function sameAsCurrentAddress()
{
   PHouse_No.value = HouseNo.value;
   PRoad_Area.value = Road_Area.value;
   // PState.options[PState.selectedIndex].text = State.options[State.selectedIndex].text;
   PVillage_City.value = Village_City.value;
   PPin_Code.value = Pin_Code.value;
}

function showMobileNo()
{
   document.getElementById('show-mobile-no').textContent = Mobile_No1.value;
}

function showRangeMinMax(value)
{
    document.getElementById('show-range').textContent = value;
}

function ShowFavColour(value)
{
   document.getElementById('show-fav-colour').textContent = value;
}
function ShowMonth()
{
   document.getElementById('show-month').textContent = Select_Month.value;
}


//& Personal Details : 
const PERPin = document.getElementById('per-pin');
const PERVillage = document.getElementById('per-villege');

function submitAllValue()
{
   if(OKSTATE==true && (Village_City.value.length>0 && Pin_Code.value.length>0 && PERPin.value.length>0 && PERVillage.value.length>0))
   window.alert("Congratulations.... All Form Submitted.");

   else
    window.alert("Please, fill all required fields.");
}
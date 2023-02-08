
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



 var personal_details = {
     "first_Name" : '',
     "middle_Name" : '',
     "last_Name" : '',
     "gender" : true,
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

 }

 function createAccount()
 {
    sign_in.email = Email_ID.value;
    sign_in.username = UserName.value;
    sign_in.password = Password.value;
    document.getElementById('registered-email').innerHTML = Email_ID.value;
    user[0]=sign_in;
    console.log(user);
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
    personal_details.address.state = State.value;
    personal_details.address.village_city = Village_City.value;
    personal_details.address.pin_code = Pin_Code.value;
    personal_details.mobile_No1 = Mobile_No1.value;
    personal_details.mobile_No2 = Mobile_No2.value;
    personal_details.telephone_No = Telephone_No.value;
    personal_details.fav_Colour = Fav_Colour.value;

    console.log(personal_details);

 }




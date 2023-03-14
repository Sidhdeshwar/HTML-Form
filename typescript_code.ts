// & Personal Details :
const FirstName = <HTMLInputElement>document.getElementById("firstname");
const MiddleName = <HTMLInputElement>document.getElementById("middlename");
const LastName = <HTMLInputElement>document.getElementById("lastname");
const Male = <HTMLInputElement>document.getElementById("male");
const Female = <HTMLInputElement>document.getElementById("female");
const DOB_Date = <HTMLInputElement>document.getElementById("birth-date");

// Address
const HouseNo = <HTMLInputElement>document.getElementById("house-no");
const Road_Area = <HTMLInputElement>document.getElementById("road-area");
const State = <HTMLInputElement>document.getElementById("state"); //* Remaining
const Village_City1 = <HTMLInputElement>document.getElementById("village1");
const Pin_Code1 = <HTMLInputElement>document.getElementById("pin-code-11");

const Mobile_No1 = <HTMLInputElement>document.getElementById("mobile-no1");
const Telephone_No = <HTMLInputElement>document.getElementById("telephone-no");
const Fav_Colour = <HTMLInputElement>document.getElementById("fav-colour");

//& Other Details :
const Select_File = <HTMLInputElement>document.getElementById("select-file");
//const Select_Image = document.getElementById('select-image');
const Select_Month = <HTMLInputElement>document.getElementById("select-month");
const Select_Range = <HTMLInputElement>document.getElementById("select-range");
const Select_Time = <HTMLInputElement>document.getElementById("select-time");
const Select_Week = <HTMLInputElement>document.getElementById("select-week");

const PHouse_No = document.getElementById("p-house-no") as HTMLInputElement;
const PRoad_Area = document.getElementById("p-road-area") as HTMLInputElement;
const PState = document.getElementById("p-state") as HTMLSelectElement;
const Perment_State = document.getElementById(
  "perment-state"
) as HTMLSelectElement;
const PVillage_City = document.getElementById(
  "p-village-city"
) as HTMLInputElement;
const PPin_Code2 = document.getElementById("pin-code-22") as HTMLInputElement;
const PVillage_City2 = document.getElementById("village2") as HTMLInputElement;

// ~LocalStorage :
var Selected_Gender = "";
var Selected_Imagae_Address = "";

interface myform_interface {
  Email_ID: string;
  Create_Username: string;
  Create_Passward: string;
  Verify_Passward: string;
  Full_Name: string;
  Regiatered_Email: string;
  Gender: string;
  Birth_Date: string;
  Current_Address: {
    House_No: string;
    Road_Area: string;
    State: string;
    Village_City: string;
    Pin_Code: string;
  };
  Perment_Address: {
    House_No: string;
    Road_Area: string;
    State: string;
    Village_City: string;
    Pin_Code: string;
  };
  Mobile_No: string;
  Select_Color: string;
  Select_File: string;
  Select_Range: string;
  Select_Month: string;
  Select_Time: string;
  Select_Week: string;
}

function addToObject() {
  var myForm: myform_interface = {
    Email_ID: Email_ID.value,
    Create_Username: UserName.value,
    Create_Passward: Password.value,
    Verify_Passward: Verify_Password.value,
    Full_Name: FirstName.value,
    Regiatered_Email: Email_ID.value,
    Gender: Selected_Gender,
    Birth_Date: DOB_Date.value,
    Current_Address: {
      House_No: HouseNo.value,
      Road_Area: Road_Area.value,
      State: PState.value,
      Village_City: Village_City1.value,
      Pin_Code: Pin_Code1.value,
    },
    Perment_Address: {
      House_No: PHouse_No.value,
      Road_Area: PRoad_Area.value,
      State: PState.value,
      Village_City: PVillage_City2.value,
      Pin_Code: PPin_Code2.value,
    },
    Mobile_No: Mobile_No1.value,
    Select_Color: Fav_Colour.value,
    Select_File: Selected_Imagae_Address,
    Select_Range: Select_Range.value,
    Select_Month: Select_Month.value,
    Select_Time: Select_Time.value,
    Select_Week: Select_Week.value,
  };

  localStorage.setItem("obj1", JSON.stringify(myForm));

  fetch("https://winter-summer-sceptre.glitch.me/submit", {
    method: "POST",
    body: JSON.stringify(myForm),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// ^ Automatic Run
var signInMandatoryCounter = 0;
var personalDetMandatoryCounter = 0;

var OKEMAIL = false;
var OKUSERNAME = false;
var OKCREATEPASSWORD = false;
var OKVERIFYPASSWORD: any = false;

var OKSTATE = false;
var OKVILLAGE = false;
var OKPIN = false;

//& Sign in Details :
const Email_ID = <HTMLInputElement>document.getElementById("email-id");
const UserName = <HTMLInputElement>document.getElementById("username");
const Password = <HTMLInputElement>document.getElementById("password");
const Verify_Password = <HTMLInputElement>(
  document.getElementById("verify-password")
);

var HTML_Form = [
  [1, 2, 3],
  [4, 5, 6],
];
var user = [];

var sign_in = {
  email: "C",
  username: "A",
  password: "B",
  verify_password: "",
};

interface personal_details_obj {
  first_Name: string;
  middle_Name: string;
  last_Name: string;
  gender: string;
  DOB: string;
  address: {
    house_No: string;
    road_area: string;
    state: string;
    village_city: string;
    pin_code: string;
  };
  mobile_No1: string;
  mobile_No2: string;
  telephone_No: string;
  fav_Colour: string;
}

var personal_details: personal_details_obj = {
  first_Name: "",
  middle_Name: "",
  last_Name: "",
  gender: "",
  DOB: "",
  address: {
    house_No: "",
    road_area: "",
    state: "",
    village_city: "",
    pin_code: "",
  },
  mobile_No1: "",
  mobile_No2: "",
  telephone_No: "",
  fav_Colour: "",
};

interface other_details_obj {
  select_file: string;
  select_month: string;
  select_range: string;
  select_time: string;
  select_week: string;
}

var other_details = {
  select_file: "",
  select_month: "",
  select_range: "",
  select_time: "",
  select_week: "",
};

function checkForSignIn() {
  if (
    Email_ID.value.length == 0 ||
    UserName.value.length == 0 ||
    Password.value.length == 0 ||
    Verify_Password.value.length == 0
  ) {
    // window.alert("");
    (<HTMLInputElement>(
      document.getElementById("sign-in-remaining-fields")
    )).textContent = "Please, fill the required fields...";
    (<HTMLInputElement>(
      document.getElementById("sign-in-remaining-fields")
    )).style.color = "red";
  } else if (
    OKEMAIL === true &&
    OKUSERNAME === true &&
    OKCREATEPASSWORD === true &&
    OKVERIFYPASSWORD === true
  ) {
    (document.getElementById("it3") as HTMLDivElement).style.display = "block";
    (document.getElementById("it2") as HTMLDivElement).style.display = "none";

    window.alert("Congrats... Your Account has been Created Successfully... ");
    createAccount();

    (<HTMLInputElement>(
      document.getElementById("sign-in-remaining-fields")
    )).innerHTML = "Congrats... Your Account has been Created Successfully...";
    (<HTMLInputElement>(
      document.getElementById("sign-in-remaining-fields")
    )).style.color = "green";
  } else {
    (<HTMLInputElement>(
      document.getElementById("sign-in-remaining-fields")
    )).textContent = "Please, fill the required fields...";
    (<HTMLInputElement>(
      document.getElementById("sign-in-remaining-fields")
    )).style.color = "red";
  }
}

function createAccount() {
  sign_in.email = Email_ID.value;
  //^ For Checking OF proper E-Mail _ID
  let emails: string = Email_ID.value;
  (<HTMLInputElement>document.getElementById("incorrect-email")).textContent =
    "";
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emails)) {
    (<HTMLInputElement>document.getElementById("incorrect-email")).textContent =
      "In-Correct Email Format";
    (<HTMLInputElement>document.getElementById("incorrect-email")).style.color =
      "red";
  } else {
    signInMandatoryCounter++;
  }

  for (let i = 0; i < emails.length; i++) {
    if (emails[i] >= "A" && emails[i] <= "Z") {
      (<HTMLInputElement>(
        document.getElementById("incorrect-email")
      )).textContent = "In-Correct Email Format";
      (<HTMLInputElement>(
        document.getElementById("incorrect-email")
      )).style.color = "red";
    }
  }

  sign_in.username = UserName.value;

  if (UserName.value.length != 0) signInMandatoryCounter++;

  sign_in.password = Password.value;
  (<HTMLInputElement>document.getElementById("registered-email")).innerHTML =
    Email_ID.value;

  //  ^For checking OK Create Password :
  let capital = 0;
  let small = 0;
  let numbers = 0;
  let symbols = 0;
  let okpassword = 0;

  let pass = Password.value;
  let Error = [];
  (<HTMLInputElement>(
    document.getElementById("create-password-wrong")
  )).innerHTML = "";
  if (pass.length < 8) {
    Error.push("Your password must be contain min 8 character's.");
  }

  for (let i = 0; i < pass.length; i++) {
    if (pass[i] >= "A" && pass[i] <= "Z") capital++;

    if (pass[i] >= "a" && pass[i] <= "z") small++;

    if (pass[i] >= "0" && pass[i] <= "9") numbers++;

    if ((pass[i] > " " && pass[i] <= "/") || (pass[i] >= ":" && pass[i] <= "@"))
      symbols++;
  }
  if (capital == 0)
    Error.push("Your Password must be contain min 1 Capital Letter.");

  if (small == 0)
    Error.push("Your Password must be contain min 1 Small Letter.");

  if (numbers == 0) Error.push("Your Password must be contain min 1 Number.");

  if (symbols == 0) Error.push("Your Password must be contain min 1 Symbol.");

  if (
    capital != 0 &&
    small != 0 &&
    numbers != 0 &&
    symbols != 0 &&
    pass.length >= 8
  ) {
    Error.push("OK Password");
    okpassword++;
  }

  if (okpassword != 0) {
    for (let i = 0; i < Error.length; i++) {
      (<HTMLInputElement>(
        document.getElementById("create-password-wrong")
      )).innerHTML += " " + Error[i] + "<br>";
      (<HTMLInputElement>(
        document.getElementById("create-password-wrong")
      )).style.color = "green";
      signInMandatoryCounter++;
    }
  } else {
    for (let i = 0; i < Error.length; i++) {
      (<HTMLInputElement>(
        document.getElementById("create-password-wrong")
      )).innerHTML += i + 1 + ". " + Error[i] + "<br>";
      (<HTMLInputElement>(
        document.getElementById("create-password-wrong")
      )).style.color = "red";
    }
  }

  //^ For Verify Password Checking
  if (Password.value !== Verify_Password.value) {
    (<HTMLInputElement>(
      document.getElementById("incorrect-password")
    )).innerText = "* incorrect password";
    (<HTMLInputElement>(
      document.getElementById("incorrect-password")
    )).style.color = "red";
  }

  if (
    Password.value === Verify_Password.value &&
    Password.value.length == Verify_Password.value.length
  ) {
    (<HTMLInputElement>(
      document.getElementById("incorrect-password")
    )).innerText = "**** correct password";
    (<HTMLInputElement>(
      document.getElementById("incorrect-password")
    )).style.color = "green";
    OKVERIFYPASSWORD++;
  }

  if (signInMandatoryCounter == 4) {
    (<HTMLInputElement>(
      document.getElementById("sign-in-remaining-fields")
    )).innerHTML = `
      
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
      
      `;
  } else {
    (<HTMLInputElement>(
      document.getElementById("sign-in-remaining-fields")
    )).textContent = "Please, fill the required fields...";
    (<HTMLInputElement>(
      document.getElementById("sign-in-remaining-fields")
    )).style.color = "red";
  }
}

function submitAll() {
  personal_details.first_Name = FirstName.value;
  personal_details.middle_Name = MiddleName.value;
  personal_details.last_Name = LastName.value;
  personal_details.gender = Male.value;
  personal_details.gender = Female.value;
  personal_details.DOB = DOB_Date.value;
  personal_details.address.house_No = HouseNo.value;
  personal_details.address.road_area = Road_Area.value;
  personal_details.address.state = "Maharastra";
  personal_details.address.village_city = Village_City1.value;
  personal_details.address.pin_code = Pin_Code1.value;
  personal_details.mobile_No1 = Mobile_No1.value;
  // personal_details.mobile_No2 = Mobile_No2.value;
  personal_details.telephone_No = Telephone_No.value;
  personal_details.fav_Colour = Fav_Colour.value;

  console.log(personal_details);
}

function check() {
  other_details.select_file = Select_File.value;
  other_details.select_month = Select_Month.value;
  other_details.select_range = Select_Range.value;
  other_details.select_time = Select_Time.value;
  other_details.select_week = Select_Week.value;

  console.log(other_details);
  window.alert(other_details);
}

//* For Showing Runtime Create Password :

function runtimeCreatePassword() {
  //  ^For checking OK Create Password :
  let capital = 0;
  let small = 0;
  let numbers = 0;
  let symbols = 0;
  let okpassword = 0;

  let pass = Password.value;
  let Error = [];
  (<HTMLInputElement>(
    document.getElementById("create-password-wrong")
  )).innerHTML = "";
  if (pass.length < 8) {
    Error.push("Your password must be contain min 8 character's.");
  }

  for (let i = 0; i < pass.length; i++) {
    if (pass[i] >= "A" && pass[i] <= "Z") capital++;

    if (pass[i] >= "a" && pass[i] <= "z") small++;

    if (pass[i] >= "0" && pass[i] <= "9") numbers++;

    if ((pass[i] > " " && pass[i] <= "/") || (pass[i] >= ":" && pass[i] <= "@"))
      symbols++;
  }
  if (capital == 0)
    Error.push("Your Password must be contain min 1 Capital Letter.");

  if (small == 0)
    Error.push("Your Password must be contain min 1 Small Letter.");

  if (numbers == 0) Error.push("Your Password must be contain min 1 Number.");

  if (symbols == 0) Error.push("Your Password must be contain min 1 Symbol.");

  if (
    capital != 0 &&
    small != 0 &&
    numbers != 0 &&
    symbols != 0 &&
    pass.length >= 8
  ) {
    Error.push("OK Password");
    okpassword++;
  }

  if (okpassword != 0) {
    for (let i = 0; i < Error.length; i++) {
      (
        document.getElementById("create-password-wrong") as HTMLInputElement
      ).innerHTML += " " + Error[i] + "<br>";
      (<HTMLInputElement>(
        document.getElementById("create-password-wrong")
      )).style.color = "green";
      OKCREATEPASSWORD = true;
      console.log("Create Password : " + OKCREATEPASSWORD);
      runtimePasswordChecking();
    }
  } else {
    for (let i = 0; i < Error.length; i++) {
      (<HTMLInputElement>(
        document.getElementById("create-password-wrong")
      )).innerHTML += i + 1 + ". " + Error[i] + "<br>";
      (<HTMLInputElement>(
        document.getElementById("create-password-wrong")
      )).style.color = "red";
      OKCREATEPASSWORD = false;
    }
  }
}

function runtimePasswordChecking() {
  if (Password.value !== Verify_Password.value) {
    (<HTMLInputElement>(
      document.getElementById("incorrect-password")
    )).innerText = "* incorrect password";
    (<HTMLInputElement>(
      document.getElementById("incorrect-password")
    )).style.color = "red";
    OKVERIFYPASSWORD = false;
  }

  if (
    Password.value === Verify_Password.value &&
    Password.value.length == Verify_Password.value.length
  ) {
    (<HTMLInputElement>(
      document.getElementById("incorrect-password")
    )).innerText = "**** correct password";
    (<HTMLInputElement>(
      document.getElementById("incorrect-password")
    )).style.color = "green";
    OKVERIFYPASSWORD = true;
    console.log("Verify Password : " + OKVERIFYPASSWORD);
  }
}

//! Showing Wrong Field

function showWrongEmail() {
  let emails = Email_ID.value;
  (<HTMLInputElement>document.getElementById("incorrect-email")).textContent =
    "";
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emails)) {
    (<HTMLInputElement>document.getElementById("incorrect-email")).textContent =
      "OK Email Format";
    (<HTMLInputElement>document.getElementById("incorrect-email")).style.color =
      "green";
    (<HTMLInputElement>document.getElementById("email-id")).style.border =
      "2px solid green";
    OKEMAIL = true;
    console.log("Email : " + OKEMAIL);
  } else {
    (<HTMLInputElement>document.getElementById("email-id")).style.border =
      "2px solid red";
    (<HTMLInputElement>document.getElementById("incorrect-email")).textContent =
      "Wrong E-Mail Format";
    (<HTMLInputElement>document.getElementById("incorrect-email")).style.color =
      "red";
    OKEMAIL = false;
  }
}
function userNameEntered() {
  if (UserName.value.length > 0) {
    OKUSERNAME = true;
    console.log("UserName :" + OKUSERNAME);
  } else {
    OKUSERNAME = false;
    console.log("UserName :" + OKUSERNAME);
  }
}

//* For Showing Input in Green Colour

function showGender(value: any) {
  (<HTMLInputElement>document.getElementById("show-gender")).textContent =
    value;
  Selected_Gender = value;
  // document.getElementById('show-gender').textContent = document.getElementById('female').value;
  // document.getElementById('show-range').textContent = document.getElementById('select-range').value;
  // document.getElementById('show-full-name').textContent = FirstName.value;
}

function showFullName() {
  (<HTMLInputElement>document.getElementById("show-full-name")).textContent =
    FirstName.value;
}

function showDOB() {
  (<HTMLInputElement>document.getElementById("show-DOB")).innerText =
    DOB_Date.value;
  window.alert(DOB_Date.value);
}

function selectMyState() {
  (document.getElementById("show-state") as HTMLParagraphElement).textContent =
    PState.value;
  //   PState.options[PState.selectedIndex].text;
  OKSTATE = true;
  // console.log("State : " + OKSTATE);

  console.log(PState.value);
}

function sameAsCurrentAddress(value: any) {
  // document.getElementById("chBox").textContent = value;
  PHouse_No.value = HouseNo.value;
  PRoad_Area.value = Road_Area.value;
  PVillage_City2.value = Village_City1.value;
  Perment_State.value = PState.value;
  PPin_Code2.value = Pin_Code1.value;
}

function showMobileNo() {
  (<HTMLInputElement>document.getElementById("show-mobile-no")).textContent =
    Mobile_No1.value;
}

function showRangeMinMax(value: any) {
  (<HTMLInputElement>document.getElementById("show-range")).textContent = value;
}

function ShowFavColour(value: any) {
  (<HTMLInputElement>document.getElementById("show-fav-colour")).textContent =
    value;
}
function ShowMonth() {
  (<HTMLInputElement>document.getElementById("show-month")).textContent =
    Select_Month.value;
}

//& Personal Details :
const PERPin = document.getElementById("per-pin");
const PERVillage = document.getElementById("per-villege");

function submitAllValue() {
  if (
    OKSTATE == true &&
    Village_City1.value.length > 0 &&
    Pin_Code1.value.length > 0 &&
    PVillage_City2.value.length > 0 &&
    PPin_Code2.value.length > 0
  ) {
    (<HTMLInputElement>(
      document.getElementById("sign-in-remaining-fields-submitAll")
    )).textContent = "Congratulations.... All Form Submitted Successfully.";
    (<HTMLInputElement>(
      document.getElementById("sign-in-remaining-fields-submitAll")
    )).style.color = "green";
    addToObject();
    (document.getElementById("clapIMG") as HTMLDivElement).style.display =
      "block";
  } else {
    (<HTMLInputElement>(
      document.getElementById("sign-in-remaining-fields-submitAll")
    )).textContent = "Please Fill the required Fields.";
    (<HTMLInputElement>(
      document.getElementById("sign-in-remaining-fields-submitAll")
    )).style.color = "red";
  }
  //window.alert("Please, fill all required fields.");
}

function selectIMAGE() {
  // var preview = document.getElementById("showIMG") as HTMLImageElement;
  // var file = document.getElementById("selectIMG") as HTMLInputElement;
  // console.log(file.src);
  // let html = `
  // <img src="${file.value}">
  // `;
  // preview.innerHTML += html;
}

var src = document.getElementById("src");
var target = document.getElementById("target");
showImage(src, target);
function showImage(src: any, target: any) {
  var fr = new FileReader();
  // when image is loaded, set the src of the image where you want to display it
  fr.onload = function (e) {
    target.src = this.result;
    Selected_Imagae_Address = src.value;
  };
  src.addEventListener("change", function () {
    // fill fr with image data
    fr.readAsDataURL(src.files[0]);
  });
}

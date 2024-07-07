// Target css selectors 
const generateUserBtn = document.querySelector(".generate-user");
const userInfo = document.querySelector(".user-info");
const userName = document.querySelector(".user-name");
const userEmail = document.querySelector(".user-email");
const userPhone = document.querySelector(".user-phone");
const userLocation = document.querySelector(".user-location");
const userAge = document.querySelector(".user-age");
const errorMessage = document.querySelector(".error-message");
const randomImg = document.querySelector(".random-user-img")

// Fetch url
const url = "https://randomuser.me/api/";

generateUserBtn.addEventListener("click", function() {

   
    
    fetch(url)
    .then((response) => {
        if(!response.ok) throw new Error("Something went wrong");
        return response.json();
    })
    .then((dataObject) => {
        console.log(dataObject);
        const user = dataObject.results[0];
        userName.textContent = `${user.name.first} ${user.name.last}`;
        userEmail.textContent = `${user.email}`;
        userPhone.textContent = `${user.phone}`;
        userLocation.textContent = `${user.location.country}, ${user.location.city}`;
        userAge.textContent = `${user.dob.age}`;
        randomImg.src = `${user.picture.large}`; 
        userInfo.classList.remove("hidden");
        if(user.gender === "male") {
            document.body.style.backgroundColor = "#09569f";
            document.body.style.color = "white";
        } else if (user.gender === "female") {
            document.body.style.backgroundColor = "#6e0a85";
            document.body.style.color = "white";
        }
    })
    .catch((error) => {
        errorMessage.textContent = error;
    })
})
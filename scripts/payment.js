pay();

function pay() {
    if (localStorage.isLogin === "true") {
        document.querySelector("#bookButton").removeAttribute("disabled");
    }
    else {
        document.querySelector("#bookButton").setAttribute("disabled",0);
    }
}
const urlParams = new URLSearchParams(window.location.search);
const hotelId = urlParams.get("id");
const key = "AIzaSyCbLY8AOeUCCi9-71wyQYhfJY8aI8I7Eac";
const xhr = new XMLHttpRequest();
const apiURL = `https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${hotelId}&adults=1&lang=en_US&currency=USD&nights=2");`;
getHotelDetails = () => {
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var jsonData = JSON.parse(this.responseText);
          document.getElementById("loader").style.display = "none";
          document.getElementById("Main").style.display = "block";
          setHotelDetails(jsonData.data);
        }
     };
     xhr.open("GET",apiURL);
     xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
     xhr.setRequestHeader("x-rapidapi-key" , key);
     xhr.send();
}
getHotelDetails();

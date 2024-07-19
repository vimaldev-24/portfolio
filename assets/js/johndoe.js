/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


// google maps
function initMap() {
// Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.674, lng: -73.945},
        zoom: 12,
        scrollwheel:  false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
}


// document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById('form1234').addEventListener('submit', function(event) {
//       event.preventDefault();  // Prevent the form from submitting

//       // Get form field values
//       const name = document.querySelector('input[name="name"]').value.trim();
//       const email = document.querySelector('input[name="email"]').value.trim();
//       const subject = document.querySelector('input[name="subject"]').value.trim();
//       const message = document.querySelector('textarea[name="message"]').value.trim();

//       // Basic form validation
//       if (!name || !email || !subject || !message) {
//           customAlert("All fields are required.", "error");
//           return;
//       } else if (!validateEmail(email)) {
//           customAlert("Please enter a valid email address.", "error");
//           return;
//       }

//       // Data to be sent to the server (Google Apps Script in this case)
//       const formData = {
//           name: name,
//           email: email,
//           subject: subject,
//           message: message
//       };

//       // Submit the form data to the server using fetch API
//       submitFormData(formData);
//   });

//   function validateEmail(email) {
//       const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       return re.test(email);
//   }

//   function submitFormData(formData) {
//       // Replace 'YOUR_WEB_APP_URL' with your Google Apps Script web app URL
//       fetch('https://script.google.com/macros/s/AKfycbxlOGUTQ9JI-eY5JtxXdN3QFwJOGDI2eRZtZsExYJe5uv0mUP6KuNkHZ2WAuoiiiLOcNg/exec', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/x-www-form-urlencoded'
//           },
//           body: new URLSearchParams(formData)
//       })
//       .then(response => response.json())
//       .then(data => {
//           if (data.result === "success") {
//               alert("Form submitted successfully");
//               document.getElementById('form').reset(); // Reset the form after successful submission
//           } else {
//               throw new Error(`Error from server: ${data.message}`);
//           }
//       })
//       .catch(error => {
//           console.error("Error:", error);
//           alert("Failed to submit form. Please try again later.");
//       });
//   }

//   function customAlert(message, type = "info") {
//       // Customize how alerts are shown, e.g., using a modal or a different UI approach
//       alert(message);
//   }
// });

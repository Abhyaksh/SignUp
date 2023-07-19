document.addEventListener('DOMContentLoaded', function() {
    var signupForm = document.getElementById('signupForm');

    var registeredUsers = 0;

    function updateCounter() {
      registeredUsers++;
      userCounter.textContent = 'Registered Users: ' + registeredUsers;
    }
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      // Get form values
      var name = document.getElementById('Name').value;
      var email = document.getElementById('InputEmail1').value;
      var password = document.getElementById('exampleInputPassword1').value;
      var phone = document.getElementById('phone').value;
      var selectedOption = document.querySelector('input[name="inlineRadioOptions"]:checked');
      var selectedValue = selectedOption.nextElementSibling.textContent;
      var checkboxes = document.querySelectorAll('input[type="checkbox"]');
      var labels = document.querySelectorAll('.form-check-label');
      var selectedSports = [];
      for (var i = 0; i < checkboxes.length; i++) {
        // Check if the checkbox is checked
        if (checkboxes[i].checked) {
          // Add the value to the selectedSports array
          selectedSports.push(labels[i].textContent);
        }
      }

      // Log form data to console
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Phone Number:', phone);
      console.log('Gender:', selectedValue);
      console.log('Sports:', selectedSports);

      updateCounter();
  
      // Reset form
      signupForm.reset();
    });
  });
  
function validateForm() {
    let x = document.getElementById("first_name").value;
    let p = document.getElementById("user_password");
    let e = document.getElementById("email").value;
    var m=document.getElementById("mobile_no");
    var z=document.getElementById("Zip_code");

    var emailRegx = /\b(?:(?![.-])(?!.[.-]{2})[a-z0-9_.-]+(?<![_.-]))@(?:(?!-)(?!.--)[a-z0-9-]+(?<!-)\.)*vitstudent\.ac\.in\b/i;
     var paswd=  /^(?=.[A-Z])(?=.[a-z])(?=.\d)(?=.[@#$%?/^-_=+[{]};:,.])[A-Za-z\d@#$%?/^-_=+[{]};:,.]\{10,100}$/;
     var pattern=/^\d{10}$/;
     var zipc=/^\d{5}$/;
    
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
     
      if (e == "") {
        alert("Email must be filled out");
        return false;
      }
    
    //   if(!paswd.test(p.value)) 
    //   { 
    //   alert(' wrong password');
    //   p.focus();
    //   return false;
    //   }
      if(!pattern.test(m.value))
      {
      alert("Phone nubmer is in 0123456789 format ");
      m.focus();
      return false;
      }
      if(!zipc.test(z.value))
      {
      alert("Zip Should be 5digits ");
      z.focus();
      return false;
      }
    
  if (emailRegx.test(e)) {
        if (e.indexOf('@vitstudent.ac.in', e.length - '@vitstudent.ac.in'.length) !== -1) {
       
            return true
        } else {
            alert('Email must be a test e-mail address (your.name@vitstudent.ac.in).');
            return false;
        }
    } 
    else {
        alert('Not a valid e-mail address.');
        return false;
    }

  }
function validationsignup()
{
    var firstname=document.signup.fname;
    var lastname=document.signup.lname;
    var sex=document.signup.rd_gen;
    var email=document.signup.txtsin_email;
  
    var dept=document.signup.s_dept;
    var batch=document.signup.s_batch;
    var pass=document.signup.s_password;
    var rpass=document.signup.s_rpassword;
    var mobile=document.signup.s_mno;
    var dob=document.signup.s_dob;
    var textarea=document.signup.ta_add;
    if (firstname.value=="")
    {
        window.alert("please enter your first name.");
        firstname.focus();
        return false;

    }
    if (lastname.value=="")
    {
        window.alert("please enter your last name.");
        lastname.focus();
        return false;   
    }
    if(sex.value=="")
    {
        window.alert("please enter your gender.");
        sex.focus();
        return false;
    }
    if(email.value=="")
    {
        window.alert("please enter your email.");
        email.focus();
        return false;
    }
    
   
    if(dept.selectedIndex<1)
    {
        window.alert("please enter your department.");
        dept.focus();
        return false;
    }
    if(batch.selectedIndex<1)
    {
        window.alert("please enter your Batch period.");
        batch.focus();
        return false;
    }
    if(pass.value=="")
    {
        window.alert("please enter your password.");
        pass.focus();
        return false;
    }
    if(rpass.value=="")
    {
        window.alert("please re-enter your password.");
        rpass.focus();
        return false;
    }
    if(pass.value!=rpass.value)
    {
        window.alert("re-entered password is incorrect.");
        
        return false;
    }
    if(mobile.value=="")
    {
        window.alert("please enter your mobile number.");
        mobile.focus();
        return false;
    } 
    if(dob.value=="")
    {
        window.alert("please enter your DOB.");
        dob.focus();
        return false;
    } 
    if(textarea.value=="")
    {
        window.alert("please enter your first name.");
        textarea.focus();
        return false;
    }
    true;
         


}


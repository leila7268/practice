tlet password="YK04x123r07mh";
   if(password.match(/[A-Z]/g).length < 3){
    console.log("password is weak");
   }
   if(password.includes(123)){
    console.log("password is invalid");
   }
   if(!password.match(/[\W_]/)){
    console.log("password is not character special");
   }

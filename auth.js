
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const Person=require('./models/person');




passport.use(new LocalStrategy(async(USERNAME,password,done)=>{

    try{
         console.log("received credentials:",USERNAME,password);
         const user=  await Person.findOne({usename:USERNAME});
         if(!user) return done(null,false,{message:"incorrect username"});

          const ismatch=user.password==password? true:false;
          if(ismatch){
            return done(null,user);
          }
         else{
          return done(null,false,{message:"incorrect password"});
         }

    }catch(err){
         return done(err);
    }

}))
module.exports=passport;

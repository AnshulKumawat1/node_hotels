const mongoose=require("mongoose");
console.log("Loading mdenu model...");
const menuItemSchema=new mongoose.Schema({
name:{
    type:String ,required:true
},
price:{
    type :Number,required:true
},
taste:{
    type:String,
    enum:['sweet','spicy','sour'],
    required:true
},
its_drink:{
    type:Boolean,
    default:false
},
ingredients:{
    type:[String],
    default:[]
},
num_sales:{
    type:Number,
    default:0
}



})
const MenuItem=mongoose.model('MenuItem',menuItemSchema);
module.exports=MenuItem;
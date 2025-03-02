import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name:{required:true, type:String},
    nic:{required:true, type:String , unique:true},
    address:{required:true, type:String},
  
    // branch:{required:true, type:mongoose.Schema.Types.ObjectId, ref:'Branch'},
})


const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;
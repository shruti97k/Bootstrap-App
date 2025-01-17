import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formdesign',
  templateUrl: './formdesign.component.html',
  styleUrls: ['./formdesign.component.css']
})
export class FormdesignComponent implements OnInit {
  countrylist=['India','USA','Singapore','UK']
  termlist=['15days','30days','45days','60days']

  constructor(private builder:FormBuilder){

  }

  ngOnInit(): void {
     this.customerform.setValue({name:"shruti",email:"shruti@gmail.com",phone:"8783927598", 
        dob:new Date(2000,3,3),
       address:"add1",term:"45days",
       country:"UK",gender:"female",status:true});
       console.log("ngOninit:" , this.customerform.value);
   
  }
  customerform = this.builder.group({
    name:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.required),
    phone:this.builder.control('',Validators.required),
    address:this.builder.control('',Validators.required),
    country:this.builder.control('',Validators.required),
    term:this.builder.control('',Validators.required),
    dob:this.builder.control(new Date(2000,2,23)),
    gender:this.builder.control('male'),
    status:this.builder.control(true)

  });

  saveCustomer(){
    console.log(this.customerform.value);

  }
  clearForm(){
    this.customerform.reset();
  }

}

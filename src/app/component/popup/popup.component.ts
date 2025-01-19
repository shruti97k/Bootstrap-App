import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit{
  inputdata:any;
  editdata:any;
  closemessage='using directive';

  constructor(@Inject(MAT_DIALOG_DATA) public data:any , private ref:MatDialogRef<PopupComponent>,private builder:FormBuilder,private service: MasterService){

  }
  setpopupdata(code:any){
    this.service.GetCustomerByCode(code).subscribe(item=>{
      this.editdata=item;
      this.myForm.setValue({name:this.editdata.name,email:this.editdata.email,phone:this.editdata.phone,status:this.editdata.status,})

    })
  }
  ngOnInit(): void {
    this.inputdata=this.data;
    if(this.inputdata>0){
      this.setpopupdata(this.inputdata.code);
    }
  }
  closepopup(){
    this.ref.close('Close Using Function');
  }
  myForm=this.builder.group({
    name:this.builder.control(''),
    email:this.builder.control(''),
    phone:this.builder.control(''),
    status:this.builder.control(true),

  });
  saveuser(){
    this.service.SaveCustomer(this.myForm.value).subscribe(res => {
      this.closepopup();
    });
  }
}


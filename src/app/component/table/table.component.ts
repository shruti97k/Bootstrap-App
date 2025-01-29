import { Component, ViewChild } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';
import { Customer } from 'src/app/Model/Customer';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { UserdetailComponent } from '../userdetail/userdetail.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  customerlist!: Customer[];
  dataSource: any;
  displayedColumns: string[] = [
    'code',
    'name',
    'email',
    'phone',
    'status',
    'action',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: MasterService, private dialog: MatDialog) {
    this.loadcustomer();
  }
  loadcustomer() {
    this.service.GetCustomer().subscribe((res) => {
      // console.log("resp:",res);
      this.customerlist = res;
      this.dataSource = new MatTableDataSource<Customer>(this.customerlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
  Openpopup(code: any, title: any,component:any) {
    var _popup = this.dialog.open(component, {
      width: '40%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        // title:'User Edit'
        title: title,
        code: code,
      },
    });
    _popup.afterClosed().subscribe((item) => {
      //console.log(item);
      this.loadcustomer();
    });
  }
  editcustomer(code: any) {
    
    this.Openpopup(code, 'Edit Customer',PopupComponent);
  }
  addcustomer(){
    this.Openpopup(0,'Add Customer',PopupComponent);
  }
  detailcustomer(code:any){
    
    this.Openpopup(code,'Customer`s Details',UserdetailComponent);
  }
}

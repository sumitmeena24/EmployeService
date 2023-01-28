import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { EmployerService } from 'src/app/service/employer.service';
import { ButtonRendererComponent } from './button-renderer.component';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {
   rowData: any=[];
   colDefs: ColDef[] = [
    { field: 'firstName', width: 110, editable: true},
    { field: 'lastName', width: 110, editable: true},
    { field: 'cellNo', width: 90, editable: true},
    { field: 'emailId', width: 90, editable: true},
    { field: 'salary', width: 90, editable: true},
    { field: 'address', width: 110, editable: true},
    { headerName: 'Delete',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
      onClick: this.onDeleteButtonClick.bind(this),
      label: 'Delete'
      }}];

    frameworkComponents: any;
    api: any;
  
  constructor(private employerService: EmployerService) { this.frameworkComponents = {
    buttonRenderer: ButtonRendererComponent,
  }}

  ngOnInit(): void {
    this.employerService.getEmployer().subscribe((data :any)=> {
      console.log(data);
      this.rowData = data;
    })
  }

  defaultColDef:ColDef={
    sortable:true,filter:true
  }

  submitform(params:object) {
     this.employerService.saveEmployer(params).subscribe((data :any)=> {
      //this.rowData = data;
    });
  }

onDeleteButtonClick(params:any)
{
  console.log("params delet",params);
 this.employerService.deleteEmployer(params.data).subscribe((data :any)=> {
  //this.rowData = data;
});
}

onRowValueChanged(event: any) {
  var data = event.data;
  console.log("event",event);
  console.log(
    'onRowValueChanged: (' +
      data.firstName +
      ', ' +
      data.lastName +
      ', ' +
      data.salary +
      ', ' +
      data._id +
      ')'
  );
}

   
  

}

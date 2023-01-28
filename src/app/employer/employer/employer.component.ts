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
    this.employerList();
  }

  defaultColDef:ColDef={
    sortable:true,filter:true
  }

  employerList(){
    this.employerService.getEmployer().subscribe((data :any)=> {
      this.rowData = data;
    })
  }

  submitform(params:object) {
     this.employerService.saveEmployer(params).subscribe((data :any)=> {
     this.employerList();
    });
  }

onDeleteButtonClick(params:any)
{
 this.employerService.deleteEmployer(params.data).subscribe((data :any)=> {
  this.employerList();
});
}

onRowValueChanged(event: any) {
  var data = event.data;
  this.employerService.updateEmployer(data).subscribe((res :any)=> {
    this.employerList();
  });
}

   
  

}

import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsService } from '../employee-details.service';
import { empDetails } from 'src/apiReports';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  ELEMENT_DATA: empDetails[] = [];
  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name', 'avatar', 'star'];
  dataSource = new MatTableDataSource<empDetails>(this.ELEMENT_DATA);

  constructor(private service: EmployeeDetailsService) { }

  ngOnInit(): void {
    this.getAllDetails();
  }
  public getAllDetails() {
    let res = this.service.employeeDataDetails();
    res.subscribe(emp =>
      this.dataSource.data = emp.data as empDetails[]
    );
  }
}

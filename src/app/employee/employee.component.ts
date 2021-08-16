import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeService: EmployeeService,private changeDetectorRefs: ChangeDetectorRef) { }
  Employee!:Array<Employee>;
  ngOnInit(): void {
    this.refresh();
  }
  displayedColumns: string[] = ['id','name','age','action'];
  Emp : Employee={
    empname: '',
    eid:0,
    age:''
  };
  name!: String; age!:String;
  
  onSubmit(){
    this.Emp.empname=this.name;this.Emp.age=this.age;
    this.employeService.addDetails(this.Emp).subscribe(resEmpData=>{
      this.Employee.push(resEmpData);this.refresh();
      });
      
      this.name='';this.age='';
    }
  onUpdate(i:number)
  {  
    this.Employee[i].empname=this.name;
    this.Employee[i].age=this.age;
    this.employeService.updateDetails(this.Employee[i]).subscribe(()=>{
      this.refresh();
    });
    this.name='';this.age=''; 
  }
  onDelete(i:number)
  {
    
    this.employeService.deleteDetails(this.Employee[i]).subscribe(()=>{
      this.Employee.splice(i,1); 
      this.refresh();
    })
  }

  refresh() {
    this.employeService.getDetails().subscribe((res) => {
      this.Employee = res;
      this.changeDetectorRefs.detectChanges();
    });
  }

  
}

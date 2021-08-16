import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers: [DepartmentService]
})
export class DepartmentComponent implements OnInit {

  constructor(private departmentService:DepartmentService,private changeDetectorRefs: ChangeDetectorRef) { }
  Department!:Array<Department>;

  ngOnInit(): void {
    this.refresh();
  }
  displayedColumns: string[] = ['id','name','action'];
  dep : Department={
    depname:'',
    eid:0
  };
  name!: String;

  onSubmit(){
    this.dep.depname=this.name;
    this.departmentService.addDetails(this.dep).subscribe(resEmpData=>{
      this.Department.push(resEmpData);this.refresh();
      });
      
      this.name='';
    }
    onUpdate(i:number)
  {  
    this.Department[i].depname=this.name;
    this.departmentService.updateDetails(this.Department[i]).subscribe(()=>{
      this.refresh();
    });
    this.name='';
  }
  onDelete(i:number)
  {
    
    this.departmentService.deleteDetails(this.Department[i]).subscribe(()=>{
      this.Department.splice(i,1); 
      this.refresh();
    })
  }

  refresh() {
    this.departmentService.getDetails().subscribe((res) => {
      this.Department = res;
      this.changeDetectorRefs.detectChanges();
    });
  }
}

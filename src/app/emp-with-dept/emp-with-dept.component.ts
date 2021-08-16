import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Empdept } from '../empdept';
import { EmpDeptService } from '../empdept.service';

@Component({
  selector: 'app-emp-with-dept',
  templateUrl: './emp-with-dept.component.html',
  styleUrls: ['./emp-with-dept.component.css'],
  providers:[EmpDeptService]
})
export class EmpWithDeptComponent implements OnInit {

  constructor(private empdeptService: EmpDeptService,private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.refresh();
  }
  EmpDept!:Array<Empdept>;
  displayedColumns: string[] = ['id','ename','dname','action'];
  Ed : Empdept={
    empname: '',
    edid:0,
    depname:''
  };
  empname!: String; depname!:String;

  
  onSubmit(){
    this.Ed.empname=this.empname;this.Ed.depname=this.depname;
    this.empdeptService.addDetails(this.Ed).subscribe(resEmpData=>{
      this.EmpDept.push(resEmpData);this.refresh();
      });
      
      this.empname='';this.depname='';
    }
  onUpdate(i:number)
  {  
    this.EmpDept[i].empname=this.empname;
    this.EmpDept[i].depname=this.depname;
    this.empdeptService.updateDetails(this.EmpDept[i]).subscribe(()=>{
      this.refresh();
    });
    this.empname='';this.depname=''; 
  }
  onDelete(i:number)
  {
    
    this.empdeptService.deleteDetails(this.EmpDept[i]).subscribe(()=>{
      this.EmpDept.splice(i,1); 
      this.refresh();
    })
  }

  refresh() {
    this.empdeptService.getDetails().subscribe((res) => {
      this.EmpDept = res;
      this.changeDetectorRefs.detectChanges();
    });
  }
 



} 

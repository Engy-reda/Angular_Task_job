import { Component, OnInit, SkipSelf } from '@angular/core';
import { Router } from '@angular/router';
import {HomeService } from 'src/app/Services/homeService/home.service';
import { Home } from 'src/app/ViewModule/homeModel/home';
import { FormBuilder, FormGroup ,FormArray,Validators} from "@angular/forms";


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  NewUser:Home;
  nestedForm: FormGroup= new FormGroup({});
  arr: FormGroup= new FormGroup({});
  Designate =['Developer','Manager','System','Admin','Team Lead','PM']
  skillNameInfo=['Java', 'Angular', 'CSS', 'HTML', 'JavaScript', 'UI', 'SQL', 'React', 'PHP',
    'GIT', 'AWS', 'Python', 'Django', 'C', 'C++', 'C#', 'Unity', 'R', 'AI', 'NLP', 'Photoshop', 'Nodejs' 
    ]

  // emp:EmpName;

  constructor(private router: Router , private userRegisterserve:HomeService , private _fb:FormBuilder) { 
    this.NewUser=
    {
      companyName:"",
      address:"",
      email:"",
      phoneNumber:"",
      empInfo:[
        {
          empName:"",
          designation:"",
          joinDate:"",
          email1:"",
          phoneNumber1:"",
          skillInfo:[
              {
                  skillName:"",
                  skillRating:""
              }
          ],
          eductionInfo:[
              {
                  instituteName:"",
                  courseName:"",
                  completedYear:""
              }
          ]
        }
      ]
    }
  }
   

  ngOnInit(): void {
    this.nestedForm = this._fb.group({
      companyName:['', [Validators.required, Validators.pattern('^[a-z-A]{2,50}')]],
      address:['', [Validators.required]],
      email:['', [Validators.required, Validators.email, Validators.pattern('^[a-z-A]{2,25}')]],
      phoneNumber:['', [Validators.required, Validators.pattern('^[0-9]{15}$')]],
      empInfo:this._fb.group({
        empName:['', [Validators.required,  Validators.pattern('^[a-z-A]{2,25}')]],
          designation:['', [Validators.required]],
          joinDate:['', [Validators.required ]],
          email1:['', [Validators.required, Validators.email, Validators.pattern('^[a-z-A]{2,25}')]],
          phoneNumber1:[null, [Validators.required, Validators.pattern('^[0-9]{15}$')]],
          skillInfo: this._fb.group({
            skillName:['', [Validators.required, Validators.pattern('^[0-9]{15}$')]],
            skillRating:['', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]]
          }),
          eductionInfo: this._fb.group({
            instituteName:['', [Validators.required, Validators.pattern('^[a-z-A]{2,50}')]],
            courseName:['', [Validators.required, Validators.pattern('^[a-z-A]{2,25}$')]],
            completedYear:['', [Validators.required]]
          })

      })
    });
  }
  get companyName(){
    const temp =<FormGroup>this.nestedForm;
    return temp.controls.companyName;
  } 
  get address(){
    const temp =<FormGroup>this.nestedForm;
    return temp.controls.address;
  } 
  get email(){
    const temp =<FormGroup>this.nestedForm;
    return temp.controls.email;
  } 
  get phoneNumber(){
    const temp =<FormGroup>this.nestedForm;
    return temp.controls.phoneNumber;
  }
  get empName(){
    const temp =<FormGroup>this.nestedForm.controls.empInfo;
    return temp.controls.empName;
  }
  get joinDate(){
    const temp =<FormGroup>this.nestedForm.controls.empInfo;
    return temp.controls.joinDate;
  }
  get email1(){
    const temp =<FormGroup>this.nestedForm.controls.empInfo;
    return temp.controls.email1;
  }
  
  get phoneNumber1(){
    const temp =<FormGroup>this.nestedForm.controls.empInfo;
    return temp.controls.phoneNumber1;
  }
  get skillName(){
    const temp =(<FormGroup>(<FormGroup>this.nestedForm.controls.empInfo).controls.skillInfo);
    return temp.controls.skillName;
  }
  get skillRating(){
    const temp =(<FormGroup>(<FormGroup>this.nestedForm.controls.empInfo).controls.skillInfo);
    return temp.controls.skillRating;
  }
  get instituteName(){
    const temp =(<FormGroup>(<FormGroup>this.nestedForm.controls.empInfo).controls.eductionInfo);
    return temp.controls.instituteName;
  }
  get courseName(){
    const temp =(<FormGroup>(<FormGroup>this.nestedForm.controls.empInfo).controls.eductionInfo);
    return temp.controls.courseName;
  }
  get completedYear(){
    const temp =(<FormGroup>(<FormGroup>this.nestedForm.controls.empInfo).controls.eductionInfo);
    return temp.controls.completedYear;
  }
  AddData(){
    // const prd: IProduct = {ID: 0, Name: 'Assiut PD-40 Test', Quantity: 37, Price: 100};
    console.log(this.nestedForm);
    alert("company details saved successfully");
    let arr = String(this.nestedForm.value)
    this.userRegisterserve.addUserRegister(this.nestedForm.value).subscribe(
        res => {
          this.router.navigateByUrl('/home'); console.log(this.NewUser);
      },
        
        err => {console.log(err); }
      );
  }

}


import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { Home } from 'src/app/ViewModule/homeModel/home';
import { Subscription } from 'rxjs';
import { HomeService } from 'src/app/Services/homeService/home.service';
import { data } from 'jquery';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listCompanys: Home[]=[];
  listSelect: Home[]=[];

  subscribtion: Subscription| null =null;
  firstname:string|any;
  
  nestedForm: FormGroup= new FormGroup({});

  constructor(private companysService :HomeService ,private router:Router ) { }

  totalLength:any;
  page:number=1;

  ngOnInit(): void {
    $(document).ready(function(){
            $('#icon').click(function(){
              $('ul').toggleClass('show')
            })
          })
      
          this.subscribtion= this.companysService.getListCompanys().subscribe(
            (response)=>{
              console.log("in subscribe");
              console.log(response);
              this.listCompanys=response;
              this.totalLength= response.length;
            },
            (err)=>{console.log(err)}
          );
      
          console.log("After subscribe");

    
  }
  search(){
    console.log(this.listCompanys)
    if(this.firstname != ""){
      this.listCompanys= this.listCompanys.filter(res=>{
        return res.companyName.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase())
      })

    }else if(this.firstname == ""){
      this.ngOnInit();

    }
    

  }
  deletRow(val:any){
   if(confirm("Are you sure to delete? ")){
    this.companysService.deleteCompanys(val).subscribe(data => {
      this.companysService.getListCompanys().subscribe((res) =>{
        this.listCompanys= res;
      })
    });
   }
   
  }
  select(){

  }


}


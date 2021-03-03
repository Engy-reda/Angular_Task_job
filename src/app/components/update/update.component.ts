import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { HomeService } from "../../Services/homeService/home.service";
import { Home } from "../../ViewModule/homeModel/home";
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
 
  val:any;
  Companys: Home[] = [];
  // companyFetch = UserFetch;
  constructor(public route : ActivatedRoute  , public router : Router, public serve:HomeService) { }

  ngOnInit(): void {
    let sub = this.route.params.subscribe(params => {
      this.val = params['id']
    });
  //   console.log(this.val);
  //   this.serve.updataCompanys(this.val).subscribe( data => {
  //     // this.Companys = data;
  //   })
  }
}
   
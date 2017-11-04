import { Component, OnInit } from '@angular/core';
import {PlanService} from "../../services/plan.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  modalPlan;
  constructor(private planService:PlanService) { }

  ngOnInit() {
    this.getPlan();
  }
  getPlan(){
    this.planService.modalPlan.subscribe(data=>{
      this.modalPlan=data;
    })
  }
  modalChange(event){
    this.planService.changeModalPlan("default");
    var self=this;
    setTimeout(function(){
      self.planService.changeModalPlan(event.target.value);
    },1000)
    
  }
}

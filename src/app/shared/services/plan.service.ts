import { Injectable } from '@angular/core';
import{BehaviorSubject}from'rxjs';
@Injectable()
export class PlanService {
  selectedPlan='';
  modalPlan=new BehaviorSubject("default");
  constructor() { }
  changeModalPlan(data){
    this.modalPlan.next(data);
    console.log("modal pop up data ",this.modalPlan.value);
  }
}

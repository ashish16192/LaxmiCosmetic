import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms'
import { TryingService } from './trying.service';
@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent  implements OnInit {
  peopleForm: FormGroup;
  
  constructor(private fb: FormBuilder,private tryTrial:TryingService) {
  //  this.peopleForm=vendorId:Number ;
  
    this.peopleForm = this.fb.group({
      vendorId: [0],
      people: this.fb.array([])
    });
  }

  ngOnInit(): void {
  }

  get people() {
    return this.peopleForm.get('people') as FormArray;
  }

  addPerson() {
    debugger;

    this.people.push(this.fb.group({
      productId: [''],
      quantity: [''],
      price: ['']
    }));
  }

  removePerson(index: number) {
    this.people.removeAt(index);
  }
}
import { Component, OnInit } from '@angular/core';
import { } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate: String = "2010-01-31";
  minDate: String = "1960-01-01";
  constructor() {
    // this.date = this.datePipe.transform(new Date(), "yyyy-mm-dd");
    console.log(this.maxDate)
  }
  ngOnInit() {


  }
  checkDob(ss) {
    console.log(ss);
  }
  submitForm(formData) {
    console.log(`user Details ${JSON.stringify(formData.value)}`);
    alert(`user Details ${JSON.stringify(formData.value)}`);
  };
}

import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../../services/feedback/feedback.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  feedbackForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  });

  invalidFormMessage: string = '';

  constructor(private service: FeedbackService) { }

  ngOnInit(): void {
  }

  get form(){
    return this.feedbackForm.controls;
  }

  onSubmit(){
    if(this.feedbackForm.valid){
      this.service.post(this.feedbackForm.value).subscribe(data =>{
        this.invalidFormMessage = '';
        this.feedbackForm.reset();
      });
    } else{
        this.invalidFormMessage = "Please fill out the form before submitting"
    }
  }

}

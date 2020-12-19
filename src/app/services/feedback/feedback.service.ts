import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from '../../modele/feedback';
import {GenericService} from '../generic.service';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService extends GenericService<Feedback, number>{

  constructor(http: HttpClient) { 
    super(http, 'http://localhost:6060/feedbacks');
  }
}

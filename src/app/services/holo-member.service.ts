import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HoloMember } from '../modele/holoMember';
import { GenericService } from './generic.service';
/**
 * @Author Zi Yu Chen
 * matricule: 16822559
 * Github user: IglooSyrup
 */

@Injectable({
  providedIn: 'root'
})
export class HoloMemberService extends GenericService<HoloMember, number>{

  constructor(http: HttpClient) { 
    super(http, 'http://localhost:5050/holoMembers');
  }
}

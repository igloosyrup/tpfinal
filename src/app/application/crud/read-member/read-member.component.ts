import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HoloMember } from 'src/app/modele/holoMember';
import { HoloMemberService } from 'src/app/services/holo-member.service';

@Component({
  selector: 'app-read-member',
  templateUrl: './read-member.component.html',
  styleUrls: ['./read-member.component.css']
})
export class ReadMemberComponent implements OnInit {

  id: number;
  holoMember: HoloMember;
  readMemberForm: FormGroup;


  get form() {
    return this.readMemberForm.controls;
  }
  constructor(private service: HoloMemberService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.getById(this.id).subscribe(result => {
      this.holoMember = result;
    });
    this.readMemberForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      age: new FormControl(''),
      youtube: new FormControl(''),
      profile: new FormControl(''),
    });

  }


}

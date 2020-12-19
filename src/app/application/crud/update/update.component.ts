import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HoloMember } from 'src/app/modele/holoMember';
import { HoloMemberService } from 'src/app/services/holo-member.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  invalidFormMessage: string = "";
  id: number;
  holoMember: HoloMember;
  updateForm: FormGroup;


  get form() {
    return this.updateForm.controls;
  }

  constructor(private service: HoloMemberService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.getById(this.id).subscribe(result => {
      this.holoMember = result;
    });
    
    this.updateForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(999)]),
      youtube: new FormControl('', Validators.required),
      profile: new FormControl('', Validators.required),
    });
  }

  public updateMember() {
    this.service.put(this.id, this.updateForm.value).subscribe(result => {
      this.router.navigateByUrl('crud');
    }, (error) => {
      console.log(error);
    }
    )
  }
}

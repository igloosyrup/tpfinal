import { Component, OnInit } from '@angular/core';
import { HoloMember } from 'src/app/modele/holoMember';
import { HoloMemberService } from '../../../services/holo-member.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],

})

export class ReadComponent implements OnInit {
  tableName: string = 'List of Members';
  tableHeadElement = ['Last-Name', 'First-Name', 'Age'];
  listeHoloMembers: Array<HoloMember>;

  constructor(private service: HoloMemberService) { }

  ngOnInit(): void {
    this.getAllHoloMembers();
  }

  getAllHoloMembers(): void {
    this.service.getAll().subscribe(result => {
      this.listeHoloMembers = result;
    }, (error) => {
      console.log(error);
    });
  }

  public deleteMember(holoMemberId: number, i: any) {
    // if (window.confirm('Are you sure?')) {
    if (window.confirm('are you sure you want to delete?')) {
      this.service.deleteById(holoMemberId).subscribe(result => {
        this.listeHoloMembers.splice(i, 1);
      }, (error) => {
        console.log(error);
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { Horse } from './../../model/model';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from './../../shared/confirmation-modal/confirmation-modal.component';
import { HorseFormModalComponent } from './../../shared/horse-form-modal/horse-form-modal.component';

@Component({
  selector: 'app-horses',
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.less']
})
export class HorsesComponent implements OnInit {

  horses: Horse[] = [];
  closeResult: string;

  constructor(private dataService: DataService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.getHorseList();
  }

  getHorseList() {
    this.dataService.getHorseList().subscribe(
      res => {
        console.log(res);
        this.horses = res['data'];
        console.log(this.horses)
      },
      err => {
        console.log(err);
      }
    )
  }

  viewHorseDetail(id: number) {
    this.router.navigate(['/horse', id]);
  }

  deleteHorse(id: number) {
    let deleteHorseModalRef = this.modalService.open(ConfirmationModalComponent, { centered: true });
    deleteHorseModalRef.result.then((result) => {
      console.log(result);
      if (result == 'CONFIRMED') {
        this.dataService.deleteHorse(id).subscribe(
          res => {
            console.log(res);
            let foundIndex = this.horses.findIndex(horse => horse.id == id);
            this.horses.splice(foundIndex, 1);
          },
          err => {
            console.log(err);
          }
        )
      }
    }).catch((error) => {
      console.log(error);
    });
  }


  addHorse() {
    let addHorseModalRef = this.modalService.open(HorseFormModalComponent);
    addHorseModalRef.result.then((result) => {
      console.log(result);
      if (result != 'CROSS_CLICK') {
        this.horses.push(result);
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  editHorse(id:number){
    let editHorseModalRef = this.modalService.open(HorseFormModalComponent);
    editHorseModalRef.componentInstance.id = id;
    editHorseModalRef.result.then((result) => {
      console.clear();
      console.log(result);
      if (result != 'CROSS_CLICK') {
        let foundIndex = this.horses.findIndex(horse => horse.id == id);
        this.horses[foundIndex] = result;
      }
    }).catch((error) => {
      console.log(error);
    });
  }

}

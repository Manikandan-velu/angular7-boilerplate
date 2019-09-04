import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { DataService } from './../../services/data.service';
import { Horse } from './../../model/model';

@Component({
  selector: 'app-horse-form-modal',
  templateUrl: './horse-form-modal.component.html',
  styleUrls: ['./horse-form-modal.component.less']
})
export class HorseFormModalComponent implements OnInit {

  public horse: Object = {
    horse_number: '',
    horse_name: '',
    color: '',
    aqha_number: ''
  };
  @Input() id: any;
  public horseDetail: Horse;
  public horseForm: FormGroup;
  public isSubmitted: boolean = false;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.createHorseForm();
    if (this.id) {
      this.dataService.getHorse(this.id).subscribe(
        res => {
          console.log(res);
          this.horseDetail = res['data'];
          console.log(this.horseDetail);
          this.horseForm.patchValue({
            horse_name: this.horseDetail.horse_name,
            horse_number: this.horseDetail.horse_number,
            aqha_number: this.horseDetail.aqha_number,
            color: this.horseDetail.color
          });
        },
        err => {
          console.log(err)
        }
      )
    }
  }

  createHorseForm() {
    this.horseForm = this.formBuilder.group({
      horse_name: ['', Validators.required],
      horse_number: ['', Validators.required],
      aqha_number: ['', Validators.required],
      color: ['', Validators.required]
    });
  }

  get horseFormControls() {
    return this.horseForm.controls;
  }

  saveHorse() {
    console.log(this.horseForm.value);
    this.isSubmitted = true;
    if (this.horseForm.invalid) {
      return;
    }
    this.horse = this.horseForm.value;
    this.dataService.addHorse(this.horse).subscribe(
      res => {
        console.log(res);
        this.activeModal.close(res['data']);
      },
      err => {
        console.log(err);
      }
    )
  }

  updateHorse() {
    console.log(this.horseForm.value);
    this.isSubmitted = true;
    if (this.horseForm.invalid) {
      return;
    }
    this.horse = this.horseForm.value;
    this.dataService.updateHorse(this.horse, this.id).subscribe(
      res => {
        console.log(res);
        this.activeModal.close(res['data']);
      },
      err => {
        console.log(err);
      }
    )
  }


}

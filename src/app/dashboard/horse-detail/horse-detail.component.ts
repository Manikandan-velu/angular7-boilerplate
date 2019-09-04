import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Horse } from 'src/app/model/model';

@Component({
  selector: 'app-horse-detail',
  templateUrl: './horse-detail.component.html',
  styleUrls: ['./horse-detail.component.less']
})
export class HorseDetailComponent implements OnInit {

  public horse: Horse;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.dataService.getHorse(id).subscribe(
      res => {
        //console.log(res);
        this.horse = res['data'];
        console.log(this.horse);
      },
      err => {
        console.log(err)
      }
    )
  }

}

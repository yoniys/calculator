import { Component, OnInit } from '@angular/core';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-historylist',
  templateUrl: './historylist.component.html',
  styleUrls: ['./historylist.component.css']
})
export class HistorylistComponent implements OnInit {

  constructor(public inputer:ServService) { }

  ngOnInit(): void {
  }

}

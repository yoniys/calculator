import { Component, OnInit } from '@angular/core';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-inputnum',
  templateUrl: './inputnum.component.html',
  styleUrls: ['./inputnum.component.css']
})
export class InputnumComponent implements OnInit {

  constructor(public inputer:ServService) { }
  start=false
  
  num1=0
  num2=0
  num5=0

  
  

  num3=''
  num4=this.num3
  sting1=""

  ngOnInit(): void {
  }

  // @ViewChild("numinput") numinput: ElementRef

  minus(): void {
    this.sting1+=`${this.num3}-`
    this.num3=''
  }

  plus() { 
    this.sting1+=`${this.num3}+`
    this.num3=''
    }
  dubel() {
    this.sting1+=`${this.num3}*`
    this.num3=''
   }
  divide() {
    this.sting1+=`${this.num3}/`
    this.num3=''
   }

  scor() { 
    this.sting1+=`${this.num3}`
    this.num2=eval(this.sting1)
    this.sting1+=`=${String(this.num2)}`
    this.num3=''
    this.inputer.inputsArr.push(this.sting1)
    this.sting1=""
  }

}

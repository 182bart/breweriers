import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  listValue: string []=[];

   @Input()
  list: string[] = [];


  @Input()
  value!: string;

  @Output() send = new EventEmitter();

  ngOnInit(): void {
    this.value ='';
    this.exportdata();

  }

  // sned value of selet to app component
selectedValue(event:any){
  this.value = event.target.value;
  this.exportdata()
}

 exportdata(){
   this.send.emit(this.value)
 }


}

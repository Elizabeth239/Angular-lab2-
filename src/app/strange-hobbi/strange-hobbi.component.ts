import { Component, OnInit } from '@angular/core';
import {StrangeHobbi} from './StrangeHobbi';
@Component({
  selector: 'app-strange-hobbi',
  templateUrl: './strange-hobbi.component.html',
  styleUrls: ['./strange-hobbi.component.css']
})

export class StrangeHobbiComponent implements OnInit {

	 hobbi: StrangeHobbi = {
	name: "Появляться на заднем плане ТВ", 
	descr:"Это хобби довольно редкое, и самый известный его приверженец — Пол Ярроу, который успел «засветиться» уже более чем в сотне сюжетов. Как только Пол видит, что в общественном месте (public venue) устанавливают камеру, он тут же начинает слоняться (hang around ) на заднем плане.",
	path1:"/assets/images/img1.jpg",
	path2:"/assets/images/img2.jfif"
	};
	constructor() { }
	ngOnInit() {
	}


}
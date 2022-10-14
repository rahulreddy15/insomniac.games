import { Component, OnInit } from '@angular/core';
import { TitleModel } from './title.model';
import { TITLES } from './titles';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  support: TitleModel[] = []
  closeResult = '';

  constructor(private modalService: NgbModal) {
    for(var x of TITLES){
      console.log(x)
      this.support.push(x)
    }
   }

  ngOnInit(): void {
  }


  open(content: any) {
    this.modalService.open(content, {size: 'lg',ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

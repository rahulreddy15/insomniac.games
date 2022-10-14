import { Component, OnInit } from '@angular/core';
import  './../../assets/smtp'
declare let Email: any;
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.submit()
  }

  // submit(): any {
  //   // console.log(document.getElementById("email"))
  //   // alert('OK')

  //   Email.send({
  //     Host : 'smtp.elasticemail.com',
  //     Username : 'saisowmith.vajroju@omniwyse.com',
  //     Password : '099FA3E510AE0B236B819BCED6744B79D177',
  //     To : 'saisowmith.vajroju@omniwyse.com',
  //     From : `saisowmith.vajroju@omniwyse.com`,
  //     Subject : "Contact form",
  //     Body : 'Test' 
  //     }).then( (message: any) => {alert(message); } );
        
  //     }

  

}

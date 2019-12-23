import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  accounts: any;
  url: string;

  constructor( private httpService: HttpClient) { }

  ngOnInit() {
    this.url = '/api/get_account';

    this.httpService.get(this.url).subscribe( data => {
        this.accounts = data;

    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    );
  }

}

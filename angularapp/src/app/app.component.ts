import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapp';
  users = [];
  loading = false;
  constructor(private apollo: Apollo) {

  }

  ngOnInit() {
    // console.log(this.apollo);
    this.loading = true;
    this.apollo
      .query<any>({
        query: gql`
          {
            users {
              name
              email
              address
              contact
            }
          }
        `
      })
      .subscribe(
        ({ data }) => {
          this.users = data && data.users;
          this.loading = false;
        },
        error => {
          this.loading = false;
        }
      );
  }
}

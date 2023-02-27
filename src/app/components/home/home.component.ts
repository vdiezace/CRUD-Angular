import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayUser: User[] = [];


  arrayPages: Number[] = [];
  current_page: number = 0;
  total_pages: number = 0

  constructor(private usersService: UsersService) { }

  async ngOnInit() {
    this.changePage();

    let response = await this.usersService.getAllUser()
    for (let index = 0; index < response.total_pages; index++) {
      this.arrayPages.push(index + 1);
    }
  }

  async changePage(pPage: number = 1) {
    try {
      let response = await this.usersService.getAllUser(pPage)
      this.current_page = response.page;
      //console.log(response.results)
      this.arrayUser = response.results;
      this.total_pages = response.total_pages;
    } catch (err) {
      console.log(err)
    }
  }
}



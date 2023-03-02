import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading: boolean = false;

  arrayUsers: User[] = [];

  arrayPages: Number[] = [];
  current_page: number = 1;
  total_pages: number = 1;

  constructor(private usersService: UsersService) { }

  async ngOnInit(): Promise<void> {
    this.loading = true;
    this.changePage();
    let response = await this.usersService.getAllUser()
    for (let index = 0; index < response.total_pages; index++) {
      this.arrayPages.push(index + 1);
    }
  }

  async changePage(pPage: number = 1) {
    try {
      let response = await this.usersService.getAllUser(pPage);
      //console.log(response.results)
      this.arrayUsers = response.results;
      this.loading = false;
      this.current_page = response.page;
      this.total_pages = response.total_pages;
    } catch (error) {
      console.log(error)
    }
  }
}



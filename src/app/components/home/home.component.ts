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

  /* Setting the default value of the currentPage to 0. */
  current_page: number = 0;
  /* Setting the default value of the total_pages to 0. */
  total_pages: number = 0

  /**
   * The constructor function is a default function that runs whenever a new instance of a class is
   * created
   * @param {UsersService} usersService - UsersService
   */

  constructor(private usersService: UsersService) { }
  /**
   * The function is called when the component is initialized. It calls the gotoPage() function
   */
  async ngOnInit() {
    /* Calling the gotoPage() function. */
    this.changePage();

    let response = await this.usersService.getAllUser()
    /* Creating an array of numbers from 1 to the total number of pages. */
    for (let index = 0; index < response.total_pages; index++) {
      this.arrayPages.push(index + 1);
    }
  }

  /**
   * It calls the getAll() function in the usersService, which returns a promise. When the promise is
   * resolved, the function assigns the response to the currentPage, arrUsers, and total_pages
   * variables
   * @param {number} [pPage=1] - number = 1
   */
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

  /*
  ngOnInit(): void {

    this.usersService.getAllUser().subscribe(data => {
      //console.log(data.results);
      this.arrayUser = data.results;
    
     } */
}



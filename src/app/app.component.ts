import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreweriersService } from './breweriers.service';
import { Brewery } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'breweriers-STS';
  query: string = '';
  breweryList: Brewery[] = [];
  listState: string[] = [];
  listCity: string[] = [];
  selects = [this.listState, this.listCity];
  private sub: any;

  constructor(private breweriersService: BreweriersService) {}

  ngOnInit(): void {
    this.updateList();
  }
  ngOnDestroy(): void {
    this.breweriersService.Getdata().subscribe();
  }

  updateList() {
    this.breweriersService.Getdata().subscribe((brewery) => {
      this.breweryList = brewery;
      this.selecters();
    });
  }

  //creative new array for select wiht citis and states and inport value form select
  import(query: string) {
    return (this.query = query);
  }

  selecters() {
    let i = 0;
    let brewery;

    while (i < this.breweryList.length) {
      brewery = this.breweryList[i];
      if (
        brewery.state != null &&
        this.listState.indexOf(brewery.state) == -1
      ) {
        this.listState.push(brewery.state);
      }
      if (brewery.city != null && this.listCity.indexOf(brewery.city) == -1) {
        this.listCity.push(brewery.city);
      }

      i++;
    }
  }
}

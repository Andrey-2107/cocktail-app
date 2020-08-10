import { Component, OnInit } from '@angular/core';
import { CocktailService } from "./services/cocktail.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  filterList: any[] = [];
  cocktailList: any[] = [];

  constructor(
    private cocktailService: CocktailService,
  ) {
  }

  ngOnInit(): void {
    this.cocktailService.getCategory().subscribe(res => {
      this.filterList = res.drinks.map(({ strCategory }) => {
        return {
          uiName: strCategory,
          value: this.convertCheckboxValue(strCategory)
        }
      });
    });
  }

  private convertCheckboxValue(value: string): string {
    return value
      .split(' / ').join('_')
      .split('/').join('_')
      .split(' ').join('_');
  }

  private getFilterCocktail(values): void {
    this.cocktailList = [];

    for (let key in values) {
      values[key] && this.cocktailService.getCocktail(key)
        .subscribe((res) => {
            if (res && res.drinks && res.drinks.length) {
              this.cocktailList = [...this.cocktailList, ...res.drinks];
            }
          }
        )
    }
  }

}

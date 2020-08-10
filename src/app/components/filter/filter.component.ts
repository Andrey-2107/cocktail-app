import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() onFilterCocktails = new EventEmitter();
  @Input() filterList: any[] = [];
  form: FormGroup;


  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.generateForm();
    this.filterCocktails();
  }

  private generateForm(): void {
    const formData = {};
    this.filterList.forEach(element => {
      formData[element.value] = true;
    });

    this.form = this.fb.group(formData);
  }

  filterCocktails() {
    this.onFilterCocktails.emit(this.form.value);
  }
}

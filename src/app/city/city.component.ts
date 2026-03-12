import { Component, inject } from '@angular/core';
import { CityService } from '../shared/city.service';
import { CityfilterPipe } from '../shared/pipe/cityfilter-pipe';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-city',
  imports: [CityfilterPipe, ReactiveFormsModule],
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss',
})
export class CityComponent {
  cityService = inject(CityService)
  cityList: any
  actIdentifier = '';
  identifierFilter = new FormControl('');

  ngOnInit() {
    this.getCities()
  }
  getCities() {
    this.cityService.getCities().subscribe({
      next: (result) => {
        console.log(result)
        this.cityList = result
      },
      error: () => {}
    })
  }

}

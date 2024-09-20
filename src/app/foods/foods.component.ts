import { Component } from '@angular/core';
import { BaseService } from '../base.service';

import { SearchService } from '../search.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css'
})
export class FoodsComponent {

  foods:any=[]
  keresoSzo=""

  constructor(private base:BaseService, private search:SearchService){
    this.base.getFoods().subscribe(
      (res)=>this.foods=res
    )

    this.search.getSearchWord().subscribe(
      (res)=>this.keresoSzo=res
    )
  }


  setSearch(szo:string) {
    this.keresoSzo = szo
  }
}

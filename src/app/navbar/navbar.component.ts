import { Component } from '@angular/core';
import { FoodsComponent } from '../foods/foods.component';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  keresoSzo=""
  constructor(private  searchServ:SearchService){ 
    this.searchServ.getSearchWord().subscribe(
      (res)=>this.keresoSzo=res
    )
  }

  setKeresoSzo(){
    this.searchServ.setSearchWord(this.keresoSzo)
  }

  onKeyup(event:any){
    this.searchServ.setSearchWord(event.target.value)
  }
}

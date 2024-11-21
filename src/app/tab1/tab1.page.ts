import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';

import { ModalController } from '@ionic/angular';
import { PokemonDetailComponent } from '../components/pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  pokemonDataList: any[] = [];

  constructor(private pokeapiService: PokeapiService,
   private modalController: ModalController) {}

  ngOnInit() {
    for(let i=0; i<15; i++){
      const id = this.pokeapiService.getRandomId(1,1010);
      this.pokeapiService.getPokemon(id).subscribe((data) => {
        this.pokemonDataList.push(data)
      });
    }
  }

//-----------------modal---------------------------

  async openPokemonDetail(pokemon: any) {
    const modal = await this.modalController.create({
      component: PokemonDetailComponent,
      componentProps: { pokemon },
    });
    await modal.present();
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  @Input()
  pokemonModel;
  @Input()
  loadError: boolean = true;
  constructor() {
  }
  ngOnInit(): void {
  }
}

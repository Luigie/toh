import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  // DJK 1: heroes$
  //heroes$ = this.heroService.heroes$;

  // DJK 4: Add hero
  heroes$ = this.heroService.heroesWithCRUD$;

  ngOnInit() {
    // DJK 1: heroes$
    // this.getHeroes();
  }

  // DJK 1: heroes$
  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //   .subscribe(heroes => this.heroes = heroes);
  // }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero);
    // DJK 4: Add hero
    //   .subscribe(hero => {
    //     this.heroes.push(hero);
    //   });
  }

  delete(hero: Hero): void {
    //this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero);
    // DJK 4: Add hero
    // .subscribe();
  }

}

import {Component, effect, OnInit} from '@angular/core';
import { NutritionService } from '../../services/nutrition-service.service';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import {
  NzCarouselComponent,
  NzCarouselContentDirective,
} from 'ng-zorro-antd/carousel';
import { NgForOf } from '@angular/common';
import {CarouselComponent} from "../../components/carousel/carousel.component";

@Component({
  standalone: true,
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [
    NzRowDirective,
    NzColDirective,
    NzCarouselComponent,
    NgForOf,
    NzCarouselContentDirective,
    CarouselComponent,
  ],
})
export class HomePageComponent implements OnInit {
  recipes: any[] | undefined = []; //
  protected readonly effect = effect;

  constructor(private nutritionService: NutritionService) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.nutritionService.getRecipes().subscribe(
      (data: any[] | undefined) => {
        this.recipes = data; // Assign data to recipes
        console.log(this.recipes);
      },
      (error: any) => {
        console.error(error);
      },
    );
  }
}

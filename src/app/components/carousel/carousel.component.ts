import { Component, OnInit } from '@angular/core';
import { NutritionService } from '../../services/nutrition-service.service';
import { DietTypeEnum } from '../../enums/Diet-type.enum';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzOptionComponent, NzSelectComponent } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { log } from 'ng-zorro-antd/core/logger';
import { NgForOf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  imports: [
    NzRowDirective,
    NzColDirective,
    NzSelectComponent,
    FormsModule,
    NzOptionComponent,
    SlickCarouselModule,
    NgForOf,
  ],
})
export class CarouselComponent implements OnInit {
  slides: any[] = [];
  optionList: string[] = []; // Array to hold enum values
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoPlaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  selectedValue: DietTypeEnum = DietTypeEnum.KETO; // Set default value to KETO
  protected readonly log = log;

  constructor(private nutritionService: NutritionService) {}

  ngOnInit() {
    this.optionList = Object.values(DietTypeEnum); // Convert enum keys to array
    this.loadRecipes();
  }

  loadRecipes() {
    this.nutritionService.getRecipes().subscribe(
      (recipes: any[]) => {
        this.slides = recipes.map((recipe) => ({
          title: recipe.title,
          description: recipe.description,
          protein: recipe.protein,
          img: recipe.image,
          carbs: recipe.carbs,
          fat: recipe.fat,
          calories: recipe.calories,
        }));
      },
      (error) => {
        console.error('Error fetching recipes:', error);
      },
    );
  }
}

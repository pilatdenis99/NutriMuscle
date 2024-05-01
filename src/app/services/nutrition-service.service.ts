import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NutritionService {
  private apiUrl =
    'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients';
  private apiKey = '2e7a4e6ab6msh3c43336ad3f067bp1e58d6jsnb810f373991d';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '2e7a4e6ab6msh3c43336ad3f067bp1e58d6jsnb810f373991d',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    });

    const options = {
      headers: headers,
      params: {
        limitLicense: 'false',
        minProtein: '50',
        number: '50',
        minFat: '10',
        maxFat: '15',
        minCarb: '30',
        maxCarB: '50',
      },
    };

    return this.http.get<any>(this.apiUrl, options);
  }
}

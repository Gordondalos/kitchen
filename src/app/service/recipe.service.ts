import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Recipe } from '../models/recipe.models';


@Injectable()
export class RecipeService {

  recipe: any = [
    {
      id: '1',
      title: 'Борщь',
      imgUrl: 'https://www.gastronom.ru/binfiles/images/20161226/bb647ec7.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.',
      ingredients: [
        { title: 'Картошка', quantity: '1кг' },
        { title: 'Мясо', quantity: '1кг' },
        { title: 'Морковь', quantity: '300 гр' },
        { title: 'Лук', quantity: '100 гр' },
        { title: 'Капуста', quantity: '1000 гр' },
        { title: 'Свекла', quantity: '500 гр' },
        { title: 'Томат паста', quantity: '300 гр' },
        { title: 'Уксус', quantity: '3 ст ложки' },
      ]
    },
    {
      id: '2',
      title: 'Плов',
      imgUrl: 'https://s2.eda.ru/StaticContent/Photos/120214155832/120214160541/p_O.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.',
      ingredients: [
        { title: 'Рис', quantity: '1кг' },
        { title: 'Мясо', quantity: '1кг' },
        { title: 'Морковь', quantity: '300 гр' },
        { title: 'Лук', quantity: '100 гр' },
        { title: 'Изюм', quantity: '100 гр' },
        { title: 'Репчатый лук', quantity: '100 гр' },
      ]
    },

    {
      id: '3',
      title: 'Салат греческий',
      imgUrl: 'http://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/146/296da7de6432483782e7b684d3a34fb0.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.',
      ingredients: [
        { title: 'Помидоры', quantity: '1кг' },
        { title: 'Огурцы', quantity: '1кг' },
        { title: 'Оливки', quantity: '300 гр' },
        { title: 'Болгарский переу', quantity: '100 гр' },
        { title: 'Репчатый лук', quantity: '100 гр' },
        { title: 'Петрушка', quantity: '100 гр' },
        { title: 'Оливки', quantity: '100 гр' },
        { title: 'Курица', quantity: '100 гр' },
      ]
    },

    {
      id: '4',
      title: 'Компот',
      imgUrl: 'http://receptynazimu.com/wp-content/uploads/2016/07/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D1%82-%D0%B8%D0%B7-%D0%BF%D0%B5%D1%80%D1%81%D0%B8%D0%BA%D0%BE%D0%B2-1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.',
      ingredients: [
        { title: 'Абрикосы', quantity: '1кг' },
        { title: 'Клубника', quantity: '1кг' },
        { title: 'Сахар', quantity: '300 гр' },

      ]
    },

  ]

  constructor() {
  }

  getRecipe() {
    return this.recipe;
  }

  getRecipeById(id): Promise<Recipe> {
    return new Promise(resolve => {
      return _.find(this.recipe, item => {
        if (item.id === id) {
          resolve(item);
        }
      });
    })
  }

}
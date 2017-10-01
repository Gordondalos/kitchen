import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIngridientsComponent } from './recipe-ingridients.component';

describe('RecipeIngridientsComponent', () => {
  let component: RecipeIngridientsComponent;
  let fixture: ComponentFixture<RecipeIngridientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeIngridientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeIngridientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmSearchComponentComponent } from './film-search-component.component';

describe('FilmSearchComponentComponent', () => {
  let component: FilmSearchComponentComponent;
  let fixture: ComponentFixture<FilmSearchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmSearchComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmSearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

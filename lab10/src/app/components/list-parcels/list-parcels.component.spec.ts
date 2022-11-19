import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParcelsComponent } from './list-parcels.component';

describe('ListParcelsComponent', () => {
  let component: ListParcelsComponent;
  let fixture: ComponentFixture<ListParcelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListParcelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListParcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

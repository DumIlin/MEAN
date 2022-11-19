import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSendersComponent } from './list-senders.component';

describe('ListSendersComponent', () => {
  let component: ListSendersComponent;
  let fixture: ComponentFixture<ListSendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSendersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

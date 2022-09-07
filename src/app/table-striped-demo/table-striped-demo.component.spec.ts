import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStripedDemoComponent } from './table-striped-demo.component';

describe('TableStripedDemoComponent', () => {
  let component: TableStripedDemoComponent;
  let fixture: ComponentFixture<TableStripedDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableStripedDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableStripedDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

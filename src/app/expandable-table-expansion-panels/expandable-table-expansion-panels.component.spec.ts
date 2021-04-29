import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableTableExpansionPanelsComponent } from './expandable-table-expansion-panels.component';

describe('ExpandableTableExpansionPanelsComponent', () => {
  let component: ExpandableTableExpansionPanelsComponent;
  let fixture: ComponentFixture<ExpandableTableExpansionPanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandableTableExpansionPanelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableTableExpansionPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

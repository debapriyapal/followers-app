import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArchiveDetailsComponent } from './blog-archive-details.component';

describe('BlogArchiveDetailsComponent', () => {
  let component: BlogArchiveDetailsComponent;
  let fixture: ComponentFixture<BlogArchiveDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogArchiveDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArchiveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

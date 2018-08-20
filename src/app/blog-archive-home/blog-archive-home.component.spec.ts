import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArchiveHomeComponent } from './blog-archive-home.component';

describe('BlogArchiveHomeComponent', () => {
  let component: BlogArchiveHomeComponent;
  let fixture: ComponentFixture<BlogArchiveHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogArchiveHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArchiveHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddProjectPage } from './add-project.page';

describe('AddProjectPage', () => {
  let component: AddProjectPage;
  let fixture: ComponentFixture<AddProjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

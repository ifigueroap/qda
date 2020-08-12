import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodesPage } from './codes.page';

describe('CodesPage', () => {
  let component: CodesPage;
  let fixture: ComponentFixture<CodesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCodePage } from './add-code.page';

describe('AddCodePage', () => {
  let component: AddCodePage;
  let fixture: ComponentFixture<AddCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

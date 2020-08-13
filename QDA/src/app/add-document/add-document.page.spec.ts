import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddDocumentPage } from './add-document.page';

describe('AddDocumentPage', () => {
  let component: AddDocumentPage;
  let fixture: ComponentFixture<AddDocumentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDocumentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddDocumentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocumentPage } from './document.page';

describe('DocumentPage', () => {
  let component: DocumentPage;
  let fixture: ComponentFixture<DocumentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

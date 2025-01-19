import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuariosFormComponent } from './usuarios-form.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('UsuariosFormComponent', () => {
  let component: UsuariosFormComponent;
  let fixture: ComponentFixture<UsuariosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuariosFormComponent],
      imports: [ReactiveFormsModule],
      providers: [NgbActiveModal],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

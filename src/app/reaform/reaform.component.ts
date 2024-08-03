import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reaform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reaform.component.html',
  styleUrl: './reaform.component.css',
})
export class ReaformComponent {
  productForm!: FormGroup;
  emailControl!: FormControl;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    // this.productForm = new FormGroup({
    //   fname: new FormControl(),
    //   lname: new FormControl(),
    //   email: new FormControl(),
    // });

    this.productForm = this._fb.group({
      fname: [''],
      lname: [''],
      email: [''],
    });

    this.emailControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  }
  onSubmit() {
    console.log(this.productForm.value);
  }
}

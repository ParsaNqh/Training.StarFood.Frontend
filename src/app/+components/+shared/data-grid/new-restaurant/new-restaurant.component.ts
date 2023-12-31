import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendSecurityServicesService } from 'src/app/services/backend-security-services.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-new-restaurant',

  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css']
})
export class NewRestaurantComponent {
  constructor(private router: Router,
    private backend: BackendSecurityServicesService,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder) { };
  register = this.fb.group({
    title: ['', [Validators.required]],
    address: ['', [Validators.required]]
  })
}

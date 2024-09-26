import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dynamicroute',
  templateUrl: './dynamicroute.component.html',
  styleUrl: './dynamicroute.component.scss',
})
export class DynamicrouteComponent {
  Slug: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.Slug = this.activatedRoute.snapshot.params['slug'];
  }
}

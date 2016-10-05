import { Component, OnInit } from '@angular/core';

import { Crisis, CrisisService } from './crisis.service';

@Component({
  templateUrl: 'crisis-list.component.html'
})
export class CrisisListComponent implements OnInit {
  crisises: Promise<Crisis[]>;

  constructor(private crisisService: CrisisService) { }

  ngOnInit() {
    this.crisises = this.crisisService.getCrises();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
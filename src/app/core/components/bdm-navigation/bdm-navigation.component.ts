import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './bdm-navigation.component.html',
  styleUrls: ['./bdm-navigation.component.css']
})
export class BdmNavigationComponent implements OnInit {
  private navmenuitem= [{heading: 'Member Match / Eligibility', status: 'false', showicon: true, url: '#'},
                       {heading: 'Provider Network Override', status: 'false', showicon: false, url: '#'},
                       {heading: 'Pre-Authorization', status: 'false', showicon: true, url: '#'},
                       {heading: 'Service Category', status: 'false', showicon: false, url: '#'},
                       {heading: 'Plan Level Settings', status: 'false', showicon: true, url: '#'},
                       {heading: 'Cost Shares', status: 'false', showicon: true, url: '#'},
                       {heading: 'Special Processing', status: 'false', showicon: false, url: '#'},
                       {heading: 'Third Party Liability', status: 'false', showicon: false, url: '#'}];
  constructor() { }

  ngOnInit() {
  }
}

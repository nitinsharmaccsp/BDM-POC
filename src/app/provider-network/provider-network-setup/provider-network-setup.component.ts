import { Observable } from 'rxjs/Rx';
import { ProviderNetworkSetupService } from './provider-network-setup.service';
import {
  Component,
  OnInit
} from '@angular/core';
@Component({
  selector: 'app-provider-network-setup',
  templateUrl: './provider-network-setup.component.html',
  styleUrls: ['./provider-network-setup.component.css'],
  providers: [ProviderNetworkSetupService]
})
export class ProviderNetworkSetupComponent implements OnInit {
  public networkPackage : any = {};

  public Providerbreadcrumb = [
    { value: 'Provider Network Setup', active: 'true' },
    { value: 'Network Association', active: 'false' },
    { value: 'Network Settings', active: 'false' },
    { value: 'Network Exceptions', active: 'false' }
  ];
  constructor(public providerNetworkSetupService: ProviderNetworkSetupService) {
  }

  ngOnInit() {
    debugger;
    this.providerNetworkSetupService.getNetworkPackage().subscribe(
      data => this.successCallback(data)
    );
  }
  successCallback(data) {
    debugger;
    console.log(data);
    this.networkPackage = data;
    this.reshuffle();
  }
  reshuffle() {
    let temp = this.networkPackage.networks;
    let inNetwork = [];
    let outNetwork = [];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].networkStatus === 'In Network') {
        inNetwork.push(temp[i]);
      }
      else {
        outNetwork.push(temp[i]);
      }
    }
    this.networkPackage.networks = inNetwork.concat(outNetwork);
    for (let i = 0; i < this.networkPackage.networks.length; i++) {
      this.networkPackage.networks[i].networkLevel = i + 1;
    }
  }
  addNewRow() {
    let newRow = {
      "networkPlan": "Plan Specfic Network",
      "disable": false,
      "networkLevel": 1,
      "network_Name": "Plan Specfic Network",
      "networkStatus": "In Network",
      "providerNetworkSet": [],
      "facilityNetworkSet": []
    };
    this.networkPackage.networks.unshift(newRow);
    this.reshuffle();

  }
  moveLevelDown(LevelDetail, index) {
    if (this.networkPackage.networks[index + 1].disable === true) {
      for (let i = index + 1; i < this.networkPackage.networks.length; i++) {
        if (this.networkPackage.networks[i].disable !== true && i !== this.networkPackage.networks.length) {
          this.networkPackage.networks.splice(index, 1);
          this.networkPackage.networks.splice(i, 0, LevelDetail);
          if (this.networkPackage.networks[i - 1].networkStatus === "In Network") {
            this.networkPackage.networks[i].networkStatus = "In Network";
          }
          else {
            this.networkPackage.networks[i].networkStatus = "Out Network";
          }
          break;
        }
        else if (this.networkPackage.networks[i].disable === true && i === this.networkPackage.networks.length - 1) {
          this.networkPackage.networks.push(LevelDetail);
          this.networkPackage.networks.splice(index, 1);
          if (this.networkPackage.networks[this.networkPackage.networks.length - 2].networkStatus === "In Network") {
            this.networkPackage.networks[this.networkPackage.networks.length - 1].networkStatus = "In Network";
          }
          else {
            this.networkPackage.networks[this.networkPackage.networks.length - 1].networkStatus = "Out Network";
          }
          break;
        }
      }
    }
    else {
      if (LevelDetail.networkStatus === "In Network" && this.networkPackage.networks[index + 1].networkStatus === "In Network") {
        let tempData = this.networkPackage.networks[index + 1];
        this.networkPackage.networks[index + 1] = LevelDetail;
        this.networkPackage.networks[index] = tempData;
        console.log("moved" + index);
      }
      else {
        let tempData = this.networkPackage.networks[index + 1];
        this.networkPackage.networks[index + 1] = LevelDetail;
        this.networkPackage.networks[index] = tempData;
        this.networkPackage.networks[index + 1].networkStatus = "Out Network";
        console.log("moved" + index);
      }
    }
    this.reshuffle();
  }

  moveLevelUp(LevelDetail, index) {
    if (this.networkPackage.networks[index - 1].disable === true) {
      debugger;
      for (let i = index - 1; i >= 0; i--) {
        if (this.networkPackage.networks[i].disable !== true && i === 0) {
          debugger;
          this.networkPackage.networks.splice(index, 1);
          this.networkPackage.networks.splice(i + 1, 0, LevelDetail);
          if (this.networkPackage.networks[i].networkStatus === "In Network") {
            this.networkPackage.networks[i + 1].networkStatus = "In Network";
          }
          else {
            this.networkPackage.networks[i + 1].networkStatus = "Out Network";
          }
          break;
        }
        else if (this.networkPackage.networks[i].disable === true && i === 0) {
          debugger;
          this.networkPackage.networks.splice(index, 1);
          this.networkPackage.networks.unshift(LevelDetail);
          this.networkPackage.networks[0].networkStatus = "In Network";
          break;
        }
      }
    }
    else {
      if (this.networkPackage.networks[index - 1].networkStatus === "In Network") {
        let tempData = this.networkPackage.networks[index - 1];
        this.networkPackage.networks[index - 1] = LevelDetail;
        this.networkPackage.networks[index] = tempData;
        this.networkPackage.networks[index - 1].networkStatus = "In Network";
        console.log("moved" + index);
      }
      else {
        let tempData = this.networkPackage.networks[index - 1];
        this.networkPackage.networks[index - 1] = LevelDetail;
        this.networkPackage.networks[index] = tempData;
        this.networkPackage.networks[index - 1].networkStatus = "Out Network";
      }
    }
    this.reshuffle();
  }
  delete(LevelDetail, index) {
    this.networkPackage.networks.splice(index, 1);
    this.reshuffle();
  }
  restorePlans() {
    this.providerNetworkSetupService.getNetworkPackage().subscribe(
      data => this.successCallback(data)
    );
    this.reshuffle();
  }
  saveDetails() {
    this.providerNetworkSetupService.saveNetworkPackage(this.networkPackage);
  }
}

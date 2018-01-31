import { Injectable } from '@angular/core';

@Injectable()
export class CostShareService {

  public dataset = {
    'costShareTypeId': 1,
    'lobs': [],
    'occurences': []
  };

  public coinsurance = [];
  public scenariosdata;

  public dummyscenario(data) {
    // if(data.value == "COINS1000"){
      this.scenariosdata = {
        newOccurenceId: 'Occurence1000',
        scenarios: [
          { scenarioId: 'Scenario1100', networkLevelId: 1, networkLevel: 'PPO', placeOfServiceId: 3, claimTypeId: 10 },
          { scenarioId: 'Scenario1101', networkLevelId: 2, networkLevel: 'BCO', placeOfServiceId: 2, claimTypeId: 10 },
          { scenarioId: 'Scenario1102', networkLevelId: 3, networkLevel: 'PPO', placeOfServiceId: 1, claimTypeId: 10 }
        ]
      };

      return this.scenariosdata;
    }



  getServiceData() {
    return this.dataset;
  }
  constructor() { }
}

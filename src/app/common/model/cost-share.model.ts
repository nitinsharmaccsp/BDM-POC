export class Coinsurancestruct {
  constructor(public occurenceId: string, public qualifier1: string , public costShareValue1: number ) {
    this.occurenceId = occurenceId;
    this.qualifier1 = qualifier1;
    this.costShareValue1 = costShareValue1;
  }
 }

 export class Scenarios {
   constructor(public networkLevelId: number , public claimTypeId: number , public placeOfServiceId: number ) {
     this.networkLevelId = networkLevelId;
     this.claimTypeId = claimTypeId;
     this.placeOfServiceId = placeOfServiceId;
   }
 }

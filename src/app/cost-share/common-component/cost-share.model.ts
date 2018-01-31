export class Coinsurancestruct {
    constructor(public occurenceId: string, public costShareValue1: number , public qualifier1: string  ) {
      this.occurenceId = occurenceId;
      this.qualifier1 = qualifier1;
      this.costShareValue1 = costShareValue1;
    }
   }

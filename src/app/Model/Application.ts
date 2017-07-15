export class Application {
  fullName: string;
  cardType: string;
  liabilityType: string;
  approvalType: string;

  constructor(fName: string, cType: string, lType: string, aType: string) {
    this.fullName = fName;
    this.cardType = cType;
    this.liabilityType = lType;
    this.approvalType = aType;
  }
}

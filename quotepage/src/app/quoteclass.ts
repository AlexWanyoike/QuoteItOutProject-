
export class Quoteclass {
    showDescription: boolean;
    constructor(public name: string,public quoteit: string,public quoteauthor: string , public subdate: Date){
      this.showDescription=false;
    }
    
}

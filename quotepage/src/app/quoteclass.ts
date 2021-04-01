
export class Quoteclass {
    showDescription: boolean;
    constructor(public name: string,public quotename: string,public quoteauthor: string , public subdate: Date){
      this.showDescription=false;
    }
    
}

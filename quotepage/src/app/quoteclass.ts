
export class Quoteclass {
    showDescription: boolean;
    constructor(public name: string,public quotename: string,public quoteauthor: string , public SubmissionDate: Date){
      this.showDescription=false;
    }
    
}

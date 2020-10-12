
export class User{
    constructor(
        private username:string,private role:string,private _token:string ){}


        get Token(){
            return this._token;
        }


}
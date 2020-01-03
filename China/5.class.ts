class user{
    name:string;
    phone:number;
    email:string;
    address:string
    constructor(name:string,phone:number,email:string,address:string){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
    }
}

class customer extends user{
    customerID:number;
    secretkey:number;
    receiver:boolean
    sender:boolean
    parcel: letter;
    constructor(parcel: letter,customerID:number,name:string,phone:number,email:string,address:string,receiver:boolean,sender:boolean){
        super(name,phone,email,address);
        this.customerID = customerID;
        this.receiver = receiver;
        this.sender = sender;
        this.parcel = parcel;
    }
    openparcel(){
        if(this.secretkey === this.parcel.secretkey){
            console.log(this.parcel.message)
        }
        else{
            console.log("Invalid password");
        }
    }
    show(sender:user){
        console.log("This message sent by "+ sender.name);
    }
    send(){
        return this.parcel;
    }
}

class staff extends user{
    staffID:number;
    parcel: letter;
    constructor(staffID:number,name:string,phone:number,email:string,address:string,parcel:letter){
        super(name,phone,email,address);
        this.staffID = staffID;
        this.parcel=parcel;
    }
    send(){
        return this.parcel;
    }
}

class letter{
    message:string;
    date:string
    secretkey:number;
    constructor(me:string,date:string ,secretkey:number){
        this.message = me;
        this.date = date;
        this.secretkey=secretkey;
    }
    toString(): string{
        return "This message is "+this.message
    }
}
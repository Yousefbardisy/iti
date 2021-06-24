class Account{
    // acc_num:number;
    // blance:number;

     constructor(public acc_num:number,public blance:number) {
         this.blance = blance;
         this.acc_num = acc_num;

     }
     

     depitAcc():number{
        return this.blance;
     }

     cridetAcc():number{
        return this.blance;
     }

     
}

interface IAccount{
    Data_of_open:Date;

    addCustomer();
    removeCustomer();
}



class Current_Account extends Account implements IAccount{
    Data_of_open:Date;

    constructor(blance:number=2000, acc_num:number=21 ,public intest_rate:number=.05 ) {
        super(blance, acc_num);
        this.Data_of_open=new Date();
        this.intest_rate=intest_rate;
    }
    addCustomer(){

    }
    removeCustomer(){

    };

}
class Seving_Account extends Account implements IAccount{
    Data_of_open:Date;

    constructor(blance:number=2000, acc_num:number=21 ,public min:number=.05 ) {
        super(blance, acc_num);
        this.Data_of_open=new Date();
        this.min=min;
    }
    addCustomer(){

    }
    removeCustomer(){

    };

}



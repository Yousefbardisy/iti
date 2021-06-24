var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    // acc_num:number;
    // blance:number;
    function Account(acc_num, blance) {
        this.acc_num = acc_num;
        this.blance = blance;
        this.blance = blance;
        this.acc_num = acc_num;
    }
    Account.prototype.depitAcc = function () {
        return this.blance;
    };
    Account.prototype.cridetAcc = function () {
        return this.blance;
    };
    return Account;
}());
var Current_Account = /** @class */ (function (_super) {
    __extends(Current_Account, _super);
    function Current_Account(blance, acc_num, intest_rate) {
        if (blance === void 0) { blance = 2000; }
        if (acc_num === void 0) { acc_num = 21; }
        if (intest_rate === void 0) { intest_rate = .05; }
        var _this = _super.call(this, blance, acc_num) || this;
        _this.intest_rate = intest_rate;
        _this.Data_of_open = new Date();
        _this.intest_rate = intest_rate;
        return _this;
    }
    Current_Account.prototype.addCustomer = function () {
    };
    Current_Account.prototype.removeCustomer = function () {
    };
    ;
    return Current_Account;
}(Account));
var Seving_Account = /** @class */ (function (_super) {
    __extends(Seving_Account, _super);
    function Seving_Account(blance, acc_num, min) {
        if (blance === void 0) { blance = 2000; }
        if (acc_num === void 0) { acc_num = 21; }
        if (min === void 0) { min = .05; }
        var _this = _super.call(this, blance, acc_num) || this;
        _this.min = min;
        _this.Data_of_open = new Date();
        _this.min = min;
        return _this;
    }
    Seving_Account.prototype.addCustomer = function () {
    };
    Seving_Account.prototype.removeCustomer = function () {
    };
    ;
    return Seving_Account;
}(Account));

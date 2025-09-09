"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Method Decorator
function gst(gstPercentage) {
    return function (target, key, descriptor) {
        const originalFunc = descriptor.value;
        descriptor.value = function () {
            const gstAmount = arguments[2] * gstPercentage / 100;
            return originalFunc(arguments[0], arguments[1], arguments[2]) - gstAmount;
        };
        return descriptor;
    };
}
class IndianSalesCalculator {
    salesNetProfit(cogs, expense, actualSales) {
        return actualSales - (cogs + expense);
    }
}
__decorate([
    gst(18)
], IndianSalesCalculator.prototype, "salesNetProfit", null);
const sales = new IndianSalesCalculator();
console.log(sales.salesNetProfit(12000, 13000, 150000));
//# sourceMappingURL=factory-metadata.js.map
webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {

var payA = function () {};
payA.prototype.calculate = function (pay) {
    return pay * 4;
};

var payB = function () {};
payB.prototype.calculate = function (pay) {
    return pay * 3;
};

var payC = function () {};
payC.prototype.calculate = function (pay) {
    return pay * 2;
};

var Bouns = function () {
    this.pay = null;
    this.level = null;
};
Bouns.prototype.setPay = function (pay) {
    this.pay = pay;
};
Bouns.prototype.setLevel = function (level) {
    this.level = level;
};

Bouns.prototype.getPay = function () {
    return this.level.calculate(this.pay);
};

var bouns = new Bouns();

bouns.setPay(400);
bouns.setLevel(new payA());
console.log(bouns.getPay());

/***/ })
],[0]);
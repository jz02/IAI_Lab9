var Complex = /** @class */ (function () {
    function Complex(re, im) {
        this.re = re;
        this.im = im;
    }
    Complex.prototype.add = function (com) {
        var a = this.re + com.re;
        var b = this.im + com.im;
        return new Complex(a, b);
    };
    Complex.prototype.subtract = function (com) {
        var a = this.re - com.re;
        var b = this.im - com.im;
        return new Complex(a, b);
    };
    Complex.prototype.modul = function () {
        return Math.sqrt(Math.pow(this.re, 2) + Math.pow(this.im, 2));
    };
    Complex.prototype.toString = function () {
        console.log("re: ", this.re, ", ", "im: ", this.im);
    };
    return Complex;
}());
var a = new Complex(3, 4);
var b = new Complex(7, 4);
var c = a.add(b);
var d = new Complex(3, -2);
var e = c.subtract(d);
c.toString();
e.toString();
var f = e.modul();
console.log("modul: ", f);

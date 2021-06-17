!(function (e) {
var t = {};
function n(r) {
if (t[r]) return t[r].exports;
var o = (t[r] = { i: r, l: !1, exports: {} });
return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
}
(n.m = e),
(n.c = t),
(n.d = function (e, t, r) {
n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
}),
(n.r = function (e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
}),
(n.t = function (e, t) {
if ((1 & t && (e = n(e)), 8 & t)) return e;
if (4 & t && "object" == typeof e && e && e.__esModule) return e;
var r = Object.create(null);
if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
for (var o in e)
n.d(
r,
o,
function (t) {
return e[t];
}.bind(null, o)
);
return r;
}),
(n.n = function (e) {
var t =
e && e.__esModule
? function () {
return e.default;
}
: function () {
return e;
};
return n.d(t, "a", t), t;
}),
(n.o = function (e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}),
(n.p = ""),
n((n.s = 0));
})([
function (e, t) {
var n = function () {};
n.prototype = {
to_json: function (e) {
let t = "";
return (
(t = (function e(n) {
if (Array.isArray(n)) {
t += "[";
for (let r in n) n[r] instanceof Object ? e(n[r]) : (t += n[r] + ",");
t = t.substring(t, t.length - 1) + "],";
} else if (n instanceof Object) {
t += "{";
for (let r in n) (t += '"' + r + '":'), n[r] instanceof Object ? e(n[r]) : "number" == typeof n[r] ? (t += n[r] + ",") : (t += '"' + n[r] + '",');
t = t.substring(t, t.length - 1) + "},";
} else t += "number" == typeof n ? n + "," : '"' + n + '",';
return t;
})(e)),
(t = t.substring(t, t.length - 1)),
t
);
},
__get_data: function () {
return { ...r.getScreen(), ...r.getNavigatorParams(), ...r.getExtra(), ...r.getWebGL() };
},
__is_mobile: function () {
let e = navigator.userAgent.toLowerCase();
return !(e.indexOf("googlebot") >= 0) && (e.indexOf("android") >= 0 || e.indexOf("iphone") >= 0 || e.indexOf("samsung") >= 0 || e.indexOf("ios") >= 0);
},
check_device: function () {
return this.__is_mobile();
},
__get_dpi: function () {
try {
for (var i = 56; i < 2000; i++) {
if (matchMedia("(max-resolution: " + i + "dpi)").matches === !0) {
break;
}
}
} catch (e) {}
return i;
},
__ril_val: function () {
var ril_val = !1;
var err = "";
try {
null[0]();
} catch (e) {
err = e;
}
try {
var _0x43de = [
"\x70\x68\x61\x6E\x74\x6F\x6D\x6A\x73",
"\x69\x6E\x64\x65\x78\x4F\x66",
"\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65",
"\x73\x74\x61\x63\x6B",
"\x73\x65\x6C\x65\x6E\x69\x75\x6D",
"\x74\x72\x69\x66\x6C\x65\x6A\x73",
"\x73\x70\x65\x63\x74\x65\x72\x6A\x73",
"\x73\x6C\x69\x6D\x65\x72\x6A\x73",
"\x63\x61\x73\x70\x65\x72\x6A\x73",
"\x77\x65\x62\x64\x72\x69\x76\x65\x72",
];
if (
err[_0x43de[3]].toString()[_0x43de[2]]()[_0x43de[1]](_0x43de[0]) > -1 ||
err[_0x43de[3]].toString()[_0x43de[2]]()[_0x43de[1]](_0x43de[4]) > -1 ||
err[_0x43de[3]].toString()[_0x43de[2]]()[_0x43de[1]](_0x43de[5]) > -1 ||
err[_0x43de[3]].toString()[_0x43de[2]]()[_0x43de[1]](_0x43de[6]) > -1 ||
err[_0x43de[3]].toString()[_0x43de[2]]()[_0x43de[1]](_0x43de[7]) > -1 ||
err[_0x43de[3]].toString()[_0x43de[2]]()[_0x43de[1]](_0x43de[8]) > -1 ||
err[_0x43de[3]].toString()[_0x43de[2]]()[_0x43de[1]](_0x43de[9]) > -1
) {
ril_val = !0;
}
} catch (err) {}
try {
var _0x7ba6 = [
"\x63\x61\x6C\x6C\x50\x68\x61\x6E\x74\x6F\x6D",
"\x66\x75\x6E\x63\x74\x69\x6F\x6E",
"\x5F\x70\x68\x61\x6E\x74\x6F\x6D",
"\x5F\x5F\x70\x68\x61\x6E\x74\x6F\x6D\x61\x73",
"\x42\x75\x66\x66\x65\x72",
"\x65\x6D\x69\x74",
"\x73\x70\x61\x77\x6E",
"\x77\x65\x62\x64\x72\x69\x76\x65\x72",
"\x64\x6F\x6D\x41\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E",
"\x64\x6F\x6D\x41\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E\x43\x6F\x6E\x74\x72\x6F\x6C\x6C\x65\x72",
"\x6E\x61\x76\x69\x67\x61\x74\x6F\x72",
"\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65",
"\x64\x6F\x63\x75\x6D\x65\x6E\x74\x45\x6C\x65\x6D\x65\x6E\x74",
"\x64\x6F\x63\x75\x6D\x65\x6E\x74",
"\x5F\x53\x65\x6C\x65\x6E\x69\x75\x6D\x5F\x49\x44\x45\x5F\x52\x65\x63\x6F\x72\x64\x65\x72",
"\x5F\x5F\x77\x65\x62\x64\x72\x69\x76\x65\x72\x5F\x73\x63\x72\x69\x70\x74\x5F\x66\x6E",
"\x50\x68\x61\x6E\x74\x6F\x6D\x45\x6D\x69\x74\x74\x65\x72",
];
if (
typeof window[_0x7ba6[0]] === _0x7ba6[1] ||
window[_0x7ba6[0]] ||
window[_0x7ba6[2]] ||
window[_0x7ba6[3]] ||
window[_0x7ba6[4]] ||
window[_0x7ba6[5]] ||
window[_0x7ba6[6]] ||
window[_0x7ba6[7]] ||
window[_0x7ba6[8]] ||
window[_0x7ba6[9]] ||
window[_0x7ba6[10]][_0x7ba6[7]] ||
window[_0x7ba6[13]][_0x7ba6[12]][_0x7ba6[11]](_0x7ba6[7]) ||
_0x7ba6[14] in window ||
_0x7ba6[15] in document ||
_0x7ba6[15] in window ||
_0x7ba6[16] in window
) {
ril_val = !0;
}
} catch (err) {}
try {
var _0xc6bf = ["\x24\x63\x64\x63\x5F", "\x24\x77\x64\x63\x5F", "\x24\x63\x64\x63\x5F\x61\x73\x64\x6A\x66\x6C\x61\x73\x75\x74\x6F\x70\x66\x68\x76\x63\x5A\x4C\x6D\x63\x66\x6C\x5F"];
if (_0xc6bf[0] in document || _0xc6bf[1] in document || _0xc6bf[2] in document) {
ril_val = !0;
}
} catch (err) {}
try {
var _0xd977 = ["\x63\x61\x63\x68\x65\x5F", "\x24\x63\x64\x63\x5F\x61\x73\x64\x6A\x66\x6C\x61\x73\x75\x74\x6F\x70\x66\x68\x76\x63\x5A\x4C\x6D\x63\x66\x6C\x5F", "\x64\x6F\x63\x75\x6D\x65\x6E\x74"];
if (window[_0xd977[2]][_0xd977[1]][_0xd977[0]]) {
ril_val = !0;
}
} catch (err) {}
try {
var _0x8b9a = [
"\x63\x61\x6C\x6C\x53\x65\x6C\x65\x6E\x69\x75\x6D",
"\x5F\x73\x65\x6C\x65\x6E\x69\x75\x6D",
"\x5F\x5F\x6E\x69\x67\x68\x74\x6D\x61\x72\x65",
"\x61\x77\x65\x73\x6F\x6D\x69\x75\x6D",
"\x5F\x5F\x77\x65\x62\x64\x72\x69\x76\x65\x72\x5F\x73\x63\x72\x69\x70\x74\x5F\x66\x6E",
"\x5F\x5F\x77\x65\x62\x64\x72\x69\x76\x65\x72\x5F\x65\x76\x61\x6C\x75\x61\x74\x65",
"\x5F\x5F\x73\x65\x6C\x65\x6E\x69\x75\x6D\x5F\x65\x76\x61\x6C\x75\x61\x74\x65",
"\x5F\x5F\x77\x65\x62\x64\x72\x69\x76\x65\x72\x5F\x73\x63\x72\x69\x70\x74\x5F\x66\x75\x6E\x63\x74\x69\x6F\x6E",
"\x5F\x5F\x77\x65\x62\x64\x72\x69\x76\x65\x72\x5F\x73\x63\x72\x69\x70\x74\x5F\x66\x75\x6E\x63",
"\x5F\x5F\x66\x78\x64\x72\x69\x76\x65\x72\x5F\x65\x76\x61\x6C\x75\x61\x74\x65",
"\x5F\x5F\x64\x72\x69\x76\x65\x72\x5F\x75\x6E\x77\x72\x61\x70\x70\x65\x64",
"\x5F\x5F\x77\x65\x62\x64\x72\x69\x76\x65\x72\x5F\x75\x6E\x77\x72\x61\x70\x70\x65\x64",
"\x5F\x5F\x64\x72\x69\x76\x65\x72\x5F\x65\x76\x61\x6C\x75\x61\x74\x65",
"\x5F\x5F\x73\x65\x6C\x65\x6E\x69\x75\x6D\x5F\x75\x6E\x77\x72\x61\x70\x70\x65\x64",
"\x5F\x5F\x66\x78\x64\x72\x69\x76\x65\x72\x5F\x75\x6E\x77\x72\x61\x70\x70\x65\x64",
];
if (
window[_0x8b9a[0]] ||
window[_0x8b9a[1]] ||
window[_0x8b9a[2]] ||
window[_0x8b9a[3]] ||
document[_0x8b9a[4]] ||
document[_0x8b9a[5]] ||
document[_0x8b9a[6]] ||
document[_0x8b9a[7]] ||
document[_0x8b9a[8]] ||
document[_0x8b9a[4]] ||
document[_0x8b9a[9]] ||
document[_0x8b9a[10]] ||
document[_0x8b9a[11]] ||
document[_0x8b9a[12]] ||
document[_0x8b9a[13]] ||
document[_0x8b9a[14]]
) {
ril_val = !0;
}
} catch (err) {}
try {
var _0x2fb5 = [
"\x64\x72\x69\x76\x65\x72",
"\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65",
"\x64\x6F\x63\x75\x6D\x65\x6E\x74\x45\x6C\x65\x6D\x65\x6E\x74",
"\x64\x6F\x63\x75\x6D\x65\x6E\x74",
"\x73\x65\x6C\x65\x6E\x69\x75\x6D",
];
if (window[_0x2fb5[3]][_0x2fb5[2]][_0x2fb5[1]](_0x2fb5[0]) || window[_0x2fb5[3]][_0x2fb5[2]][_0x2fb5[1]](_0x2fb5[4])) {
ril_val = !0;
}
} catch (err) {}
try {
var _0x3c25 = [
"\x74\x72\x75\x65",
"\x77\x65\x62\x64\x72\x69\x76\x65\x72",
"\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65",
"\x68\x74\x6D\x6C",
"\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65",
"\x64\x6F\x6D\x41\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E",
"\x64\x6F\x6D\x41\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E\x43\x6F\x6E\x74\x72\x6F\x6C\x6C\x65\x72",
];
if (_0x3c25[0] == document[_0x3c25[4]](_0x3c25[3])[0][_0x3c25[2]](_0x3c25[1]) || _0x3c25[5] in window || _0x3c25[6] in window) {
ril_val = !0;
}
} catch (err) {}
try {
var _0xb32b = [
"\x43\x6C\x69\x65\x6E\x74\x55\x74\x69\x6C\x73",
"\x5F\x5F\x75\x74\x69\x6C\x73\x5F\x5F",
"\x5F\x5F\x6E\x77\x5F\x77\x69\x6E\x64\x6F\x77\x73",
"\x5F\x5F\x6E\x77\x5F\x72\x65\x6D\x6F\x76\x65\x5F\x61\x6C\x6C\x5F\x6C\x69\x73\x74\x65\x6E\x65\x72\x73",
"\x5F\x5F\x6E\x77\x5F\x6F\x6E\x64\x65\x73\x74\x72\x75\x63\x74",
"\x5F\x5F\x6E\x77\x5F\x72\x65\x6D\x6F\x76\x65\x4F\x75\x74\x65\x72\x45\x76\x65\x6E\x74\x43\x42",
"\x5F\x5F\x6E\x77\x5F\x6F\x6E\x64\x6F\x63\x75\x6D\x65\x6E\x74\x63\x72\x65\x61\x74\x65\x64",
"\x5F\x5F\x6E\x77\x5F\x69\x6E\x69\x74\x77\x69\x6E\x64\x6F\x77",
"\x42\x72\x6F\x77\x73\x65\x72\x41\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E\x53\x74\x75\x64\x69\x6F\x5F\x47\x65\x74\x46\x72\x61\x6D\x65\x49\x6E\x64\x65\x78",
"\x42\x72\x6F\x77\x73\x65\x72\x41\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E\x53\x74\x75\x64\x69\x6F\x5F\x4F\x70\x65\x6E",
"\x42\x72\x6F\x77\x73\x65\x72\x41\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E\x53\x74\x75\x64\x69\x6F\x5F\x47\x65\x74\x49\x6E\x74\x65\x72\x6E\x61\x6C\x42\x6F\x75\x6E\x64\x69\x6E\x67\x52\x65\x63\x74",
"\x42\x72\x6F\x77\x73\x65\x72\x41\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E\x53\x74\x75\x64\x69\x6F\x5F\x53\x63\x72\x6F\x6C\x6C\x54\x6F\x45\x6C\x65\x6D\x65\x6E\x74",
"\x42\x72\x6F\x77\x73\x65\x72\x41\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E\x53\x74\x75\x64\x69\x6F\x5F\x53\x63\x72\x6F\x6C\x6C\x54\x6F\x43\x6F\x6F\x72\x64\x69\x6E\x61\x74\x65\x73",
"\x42\x72\x6F\x77\x73\x65\x72\x41\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E\x53\x74\x75\x64\x69\x6F\x5F\x53\x63\x72\x6F\x6C\x6C\x55\x70",
"\x42\x72\x6F\x77\x73\x65\x72\x41\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E\x53\x74\x75\x64\x69\x6F\x5F\x53\x63\x72\x6F\x6C\x6C\x54\x6F\x43\x6F\x6F\x72\x64\x69\x6E\x61\x74\x65\x73\x4E\x6F\x52\x65\x73\x75\x6C\x74",
"\x42\x72\x6F\x77\x73\x65\x72\x41\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E\x53\x74\x75\x64\x69\x6F\x5F\x46\x69\x6E\x64\x45\x6C\x65\x6D\x65\x6E\x74",
"\x42\x72\x6F\x77\x73\x65\x72\x41\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E\x53\x74\x75\x64\x69\x6F\x5F\x53\x6C\x65\x65\x70",
"\x62\x72\x6F\x77\x73\x65\x72\x5F\x61\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E\x5F\x73\x74\x75\x64\x69\x6F\x5F\x66\x72\x61\x6D\x65\x5F\x66\x69\x6E\x64\x5F\x72\x65\x73\x75\x6C\x74",
"\x62\x72\x6F\x77\x73\x65\x72\x5F\x61\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E\x5F\x73\x74\x75\x64\x69\x6F\x5F\x65\x76\x61\x6C",
"\x62\x72\x6F\x77\x73\x65\x72\x5F\x61\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E\x5F\x73\x74\x75\x64\x69\x6F\x5F\x72\x65\x73\x75\x6C\x74",
"\x62\x72\x6F\x77\x73\x65\x72\x5F\x61\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E\x5F\x73\x74\x75\x64\x69\x6F\x5F\x69\x6E\x73\x70\x65\x63\x74\x5F\x72\x65\x73\x75\x6C\x74",
"\x42\x72\x6F\x77\x73\x65\x72\x41\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E\x53\x74\x75\x64\x69\x6F\x5F\x52\x65\x63\x61\x70\x74\x63\x68\x61\x53\x6F\x6C\x76\x65\x64",
"\x42\x72\x6F\x77\x73\x65\x72\x41\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E\x53\x74\x75\x64\x69\x6F\x5F\x4F\x72\x69\x67\x69\x6E\x61\x6C\x44\x61\x74\x65",
"\x42\x72\x6F\x77\x73\x65\x72\x41\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E\x53\x74\x75\x64\x69\x6F\x5F\x4D\x61\x74\x63\x68\x41\x6C\x6C\x49\x74\x65\x72\x61\x74\x69\x6F\x6E",
"\x42\x72\x6F\x77\x73\x65\x72\x41\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E\x53\x74\x75\x64\x69\x6F\x5F\x53\x65\x74\x47\x65\x6F\x6C\x6F\x63\x61\x74\x69\x6F\x6E",
"\x42\x72\x6F\x77\x73\x65\x72\x41\x75\x74\x6F\x6D\x61\x74\x69\x6F\x6E\x53\x74\x75\x64\x69\x6F\x5F\x47\x65\x6F\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x52\x65\x73\x74\x6F\x72\x65",
];
if (
window[_0xb32b[0]] ||
window[_0xb32b[1]] ||
window[_0xb32b[2]] ||
window[_0xb32b[3]] ||
window[_0xb32b[4]] ||
window[_0xb32b[5]] ||
window[_0xb32b[6]] ||
window[_0xb32b[7]] ||
window[_0xb32b[8]] ||
window[_0xb32b[9]] ||
window[_0xb32b[10]] ||
window[_0xb32b[11]] ||
window[_0xb32b[12]] ||
window[_0xb32b[13]] ||
window[_0xb32b[14]] ||
window[_0xb32b[15]] ||
window[_0xb32b[16]] ||
window[_0xb32b[17]] ||
window[_0xb32b[18]] ||
window[_0xb32b[19]] ||
window[_0xb32b[20]] ||
window[_0xb32b[21]] ||
window[_0xb32b[22]] ||
window[_0xb32b[23]] ||
window[_0xb32b[24]] ||
window[_0xb32b[25]]
) {
ril_val = !0;
}
} catch (err) {}
try {
var _0xf537 = [
"\x5F\x67\x6C\x6F\x62\x61\x6C\x50\x72\x6F\x78\x79",
"\x5F\x76\x69\x72\x74\x75\x61\x6C\x43\x6F\x6E\x73\x6F\x6C\x65",
"\x5F\x70\x72\x65\x74\x65\x6E\x64\x54\x6F\x42\x65\x56\x69\x73\x75\x61\x6C",
"\x5F\x63\x75\x72\x72\x65\x6E\x74\x53\x65\x73\x73\x69\x6F\x6E\x48\x69\x73\x74\x6F\x72\x79\x45\x6E\x74\x72\x79\x49\x6E\x64\x65\x78",
"\x5F\x5F\x73\x74\x6F\x70\x41\x6C\x6C\x54\x69\x6D\x65\x72\x73",
"\x6A\x73\x63\x57\x65\x62\x56\x69\x65\x77",
"\x67\x69",
"\x6D\x61\x74\x63\x68",
"\x6C\x65\x6E\x67\x74\x68",
];
if (window[_0xf537[0]] || window[_0xf537[1]] || window[_0xf537[2]] || window[_0xf537[3]] || window[_0xf537[4]]) {
ril_val = !0;
}
for (var prop in window) {
var yyy = _0xf537[5];
var rgxp = new RegExp(yyy, _0xf537[6]);
if (prop[_0xf537[7]](rgxp) != null && prop[_0xf537[7]](rgxp)[_0xf537[8]] > 0) {
ril_val = !0;
}
}
} catch (err) {}
return ril_val;
},
__wa: function () {
try {
var a = 1,
b = { "sele/nium": 8, "webd/rive/r": 9, "driv/er": 6 },
c;
for (c in b) {
var h = c.replace(/\//g, "");
if (h.length !== b[c]) return a;
if (window.document.documentElement.getAttribute(h)) return h;
a++;
}
return 0;
} catch (l) {
return "X";
}
},
__wd: function () {
return "boolean" === typeof window.navigator.webdriver ? (window.navigator.webdriver ? 1 : 0) : "X";
},
__wv: function () {
try {
var a = 1,
b = {
"call/Sele/nium": 12,
"call/edSe/leni/um": 14,
"Chro/meDr/iver/w": 13,
"domA/utom/atio/n": 13,
"domA/utom/atio/nCon/trol/ler": 23,
"driv/er-e/valu/ate": 15,
"sele/nium/-eva/luat/e": 17,
"webd/rive/r": 9,
"webd/rive/r-ev/alua/te": 18,
"webd/rive/r-ev/alua/te-r/espo/nse": 27,
"webd/rive/rCom/mand": 16,
"_sel/eniu/m": 9,
"_Sel/eniu/m_ID/E_Re/cord/er": 22,
"_WEB/DRIV/ER_E/LEM_/CACH/E": 21,
"__dr/iver/_eva/luat/e": 17,
"__dr/iver/_unw/rapp/ed": 18,
"__fx/driv/er_e/valu/ate": 19,
"__fx/driv/er_u/nwra/pped": 20,
"__la/stWa/tirA/lert": 16,
"__la/stWa/tirC/onfi/rm": 18,
"__la/stWa/tirP/romp/t": 17,
"__ni/ghtm/are": 11,
"__se/leni/um_e/valu/ate": 19,
"__se/leni/um_u/nwra/pped": 20,
"__we/bdri/verF/unc": 15,
"__we/bdri/ver_/eval/uate": 20,
"__we/bdri/ver_/unwr/appe/d": 21,
"__we/bdri/ver_/scri/pt_f/n": 21,
"__we/bdri/ver_/scri/pt_f/unc": 23,
"__we/bdri/ver_/scri/pt_f/unct/ion": 27,
"__$w/ebdr/iver/Asyn/cExe/cuto/r": 25,
"$chr/ome_/asyn/cScr/iptI/nfo": 23,
"$xwa/lk_a/sync/Scri/ptIn/fo": 22,
"$cdc/_asd/jfla/suto/pfhv/cZLm/cfl_": 28,
},
c;
for (c in b) {
var h = c.replace(/\//g, "");
if (h.length !== b[c]) return a;
if (h in window || h in document) return h;
a++;
}
var l = "cach/e_".replace(/\//g, "");
for (c in window.document)
if ("object" === typeof window.document[c])
try {
if (window.document[c][l]) return c ? c : "__";
} catch (r) {}
var n = "Sequ/entu/m".replace(/\//g, "");
return window.external && window.external.toString && -1 < window.external.toString().indexOf(n) ? n : 0;
} catch (r) {
return "X";
}
},
getScreen: function () {
return {
width: screen.width,
height: screen.height,
color_depth: screen.colorDepth,
avail_left: screen.availLeft,
avail_top: screen.availTop,
avail_width: screen.availWidth,
avail_height: screen.availHeight,
inner_width: window.innerWidth,
inner_height: window.innerHeight,
};
},
getExtra: function () {
return {
device_pixel_ratio: window.devicePixelRatio,
dpi: this.__get_dpi(),
ril_val: this.__ril_val(),
wa: this.__wa(),
wd: this.__wd(),
wv: this.__wv(),
network: {
effectiveType: navigator.connection ? navigator.connection.effectiveType : "",
rtt: navigator.connection ? navigator.connection.rtt : "",
downlink: navigator.connection ? navigator.connection.downlink : "",
saveData: navigator.connection ? navigator.connection.saveData : "false",
},
date_locale: new Intl.DateTimeFormat().resolvedOptions()["locale"],
};
},
getNavigatorParams: function () {
o = "wap";
this.__is_mobile() || (o = "web");
return {
vendor: navigator.vendor,
userAgent: navigator.userAgent,
platofrm: navigator.platform,
language: navigator.language,
hardwareConcurrency: navigator.hardwareConcurrency,
deviceMemory: window.navigator.deviceMemory,
plugins_count: navigator.plugins.length,
max_touch_points: navigator.maxTouchPoints,
traffic_type: o,
screen_left: window.screenLeft,
screen_top: window.screenTop,
outer_width: window.outerWidth,
outer_height: window.outerHeight,
mime_types_length: navigator.mimeTypes.length,
};
},
getWebGL: function () {
let e = document.createElement("canvas").getContext("webgl");
const t = e.getExtension("WEBGL_debug_renderer_info");
return { webgl: { vendor: e.getParameter(t.UNMASKED_VENDOR_WEBGL), renderer: e.getParameter(t.UNMASKED_RENDERER_WEBGL) } };
},
getJsonStr: function () {
return this.to_json(this.__get_data());
},
};
var i = (function () {
try {
var e = null;
if (window.XMLHttpRequest) e = new XMLHttpRequest();
else if ("undefined" == typeof XMLHttpRequest)
try {
e = new ActiveXObject("Msxml2.XMLHTTP.6.0");
} catch (t) {
try {
e = new ActiveXObject("Msxml2.XMLHTTP.3.0");
} catch (t) {
try {
e = new ActiveXObject("Microsoft.XMLHTTP");
} catch (e) {}
}
}
} catch (e) {}
return e;
})();
let r = new n(),
o = "wap";
r.check_device() || (o = "web");
let c = r.getJsonStr();
var params = [window.location.hostname, "https://sigma-tron.com/api/1.0/save/mask"];
var final = [];
final.push("domain=" + params[0]);
final.push("mask=" + c);
i.open("POST", params[1], !0), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), i.send(final.join("&"));
},
]);
/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!(function (a, b) {
"object" == typeof module && "object" == typeof module.exports
? (module.exports = a.document
? b(a, !0)
: function (a) {
if (!a.document) throw new Error("jQuery requires a window with a document");
return b(a);
})
: b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
var c = [],
d = a.document,
e = c.slice,
f = c.concat,
g = c.push,
h = c.indexOf,
i = {},
j = i.toString,
k = i.hasOwnProperty,
l = {},
m = "2.2.4",
n = function (a, b) {
return new n.fn.init(a, b);
},
o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
p = /^-ms-/,
q = /-([\da-z])/gi,
r = function (a, b) {
return b.toUpperCase();
};
(n.fn = n.prototype = {
jquery: m,
constructor: n,
selector: "",
length: 0,
toArray: function () {
return e.call(this);
},
get: function (a) {
return null != a ? (0 > a ? this[a + this.length] : this[a]) : e.call(this);
},
pushStack: function (a) {
var b = n.merge(this.constructor(), a);
return (b.prevObject = this), (b.context = this.context), b;
},
each: function (a) {
return n.each(this, a);
},
map: function (a) {
return this.pushStack(
n.map(this, function (b, c) {
return a.call(b, c, b);
})
);
},
slice: function () {
return this.pushStack(e.apply(this, arguments));
},
first: function () {
return this.eq(0);
},
last: function () {
return this.eq(-1);
},
eq: function (a) {
var b = this.length,
c = +a + (0 > a ? b : 0);
return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
},
end: function () {
return this.prevObject || this.constructor();
},
push: g,
sort: c.sort,
splice: c.splice,
}),
(n.extend = n.fn.extend = function () {
var a,
b,
c,
d,
e,
f,
g = arguments[0] || {},
h = 1,
i = arguments.length,
j = !1;
for ("boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && ((g = this), h--); i > h; h++)
if (null != (a = arguments[h]))
for (b in a)
(c = g[b]),
(d = a[b]),
g !== d &&
(j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? ((e = !1), (f = c && n.isArray(c) ? c : [])) : (f = c && n.isPlainObject(c) ? c : {}), (g[b] = n.extend(j, f, d))) : void 0 !== d && (g[b] = d));
return g;
}),
n.extend({
expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
isReady: !0,
error: function (a) {
throw new Error(a);
},
noop: function () {},
isFunction: function (a) {
return "function" === n.type(a);
},
isArray: Array.isArray,
isWindow: function (a) {
return null != a && a === a.window;
},
isNumeric: function (a) {
var b = a && a.toString();
return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
},
isPlainObject: function (a) {
var b;
if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
for (b in a);
return void 0 === b || k.call(a, b);
},
isEmptyObject: function (a) {
var b;
for (b in a) return !1;
return !0;
},
type: function (a) {
return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a;
},
globalEval: function (a) {
var b,
c = eval;
(a = n.trim(a)), a && (1 === a.indexOf("use strict") ? ((b = d.createElement("script")), (b.text = a), d.head.appendChild(b).parentNode.removeChild(b)) : c(a));
},
camelCase: function (a) {
return a.replace(p, "ms-").replace(q, r);
},
nodeName: function (a, b) {
return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
},
each: function (a, b) {
var c,
d = 0;
if (s(a)) {
for (c = a.length; c > d; d++) if (b.call(a[d], d, a[d]) === !1) break;
} else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
return a;
},
trim: function (a) {
return null == a ? "" : (a + "").replace(o, "");
},
makeArray: function (a, b) {
var c = b || [];
return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
},
inArray: function (a, b, c) {
return null == b ? -1 : h.call(b, a, c);
},
merge: function (a, b) {
for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
return (a.length = e), a;
},
grep: function (a, b, c) {
for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) (d = !b(a[f], f)), d !== h && e.push(a[f]);
return e;
},
map: function (a, b, c) {
var d,
e,
g = 0,
h = [];
if (s(a)) for (d = a.length; d > g; g++) (e = b(a[g], g, c)), null != e && h.push(e);
else for (g in a) (e = b(a[g], g, c)), null != e && h.push(e);
return f.apply([], h);
},
guid: 1,
proxy: function (a, b) {
var c, d, f;
return (
"string" == typeof b && ((c = a[b]), (b = a), (a = c)),
n.isFunction(a)
? ((d = e.call(arguments, 2)),
(f = function () {
return a.apply(b || this, d.concat(e.call(arguments)));
}),
(f.guid = a.guid = a.guid || n.guid++),
f)
: void 0
);
},
now: Date.now,
support: l,
}),
"function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
i["[object " + b + "]"] = b.toLowerCase();
});
function s(a) {
var b = !!a && "length" in a && a.length,
c = n.type(a);
return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || ("number" == typeof b && b > 0 && b - 1 in a);
}
var t = (function (a) {
var b,
c,
d,
e,
f,
g,
h,
i,
j,
k,
l,
m,
n,
o,
p,
q,
r,
s,
t,
u = "sizzle" + 1 * new Date(),
v = a.document,
w = 0,
x = 0,
y = ga(),
z = ga(),
A = ga(),
B = function (a, b) {
return a === b && (l = !0), 0;
},
C = 1 << 31,
D = {}.hasOwnProperty,
E = [],
F = E.pop,
G = E.push,
H = E.push,
I = E.slice,
J = function (a, b) {
for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
return -1;
},
K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
L = "[\\x20\\t\\r\\n\\f]",
M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
P = new RegExp(L + "+", "g"),
Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
R = new RegExp("^" + L + "*," + L + "*"),
S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
U = new RegExp(O),
V = new RegExp("^" + M + "$"),
W = {
ID: new RegExp("^#(" + M + ")"),
CLASS: new RegExp("^\\.(" + M + ")"),
TAG: new RegExp("^(" + M + "|[*])"),
ATTR: new RegExp("^" + N),
PSEUDO: new RegExp("^" + O),
CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
bool: new RegExp("^(?:" + K + ")$", "i"),
needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i"),
},
X = /^(?:input|select|textarea|button)$/i,
Y = /^h\d$/i,
Z = /^[^{]+\{\s*\[native \w/,
$ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
_ = /[+~]/,
aa = /'|\\/g,
ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
ca = function (a, b, c) {
var d = "0x" + b - 65536;
return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
},
da = function () {
m();
};
try {
H.apply((E = I.call(v.childNodes)), v.childNodes), E[v.childNodes.length].nodeType;
} catch (ea) {
H = {
apply: E.length
? function (a, b) {
G.apply(a, I.call(b));
}
: function (a, b) {
var c = a.length,
d = 0;
while ((a[c++] = b[d++]));
a.length = c - 1;
},
};
}
function fa(a, b, d, e) {
var f,
h,
j,
k,
l,
o,
r,
s,
w = b && b.ownerDocument,
x = b ? b.nodeType : 9;
if (((d = d || []), "string" != typeof a || !a || (1 !== x && 9 !== x && 11 !== x))) return d;
if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)) {
if (11 !== x && (o = $.exec(a)))
if ((f = o[1])) {
if (9 === x) {
if (!(j = b.getElementById(f))) return d;
if (j.id === f) return d.push(j), d;
} else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
} else {
if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
}
if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
if (1 !== x) (w = b), (s = a);
else if ("object" !== b.nodeName.toLowerCase()) {
(k = b.getAttribute("id")) ? (k = k.replace(aa, "\\$&")) : b.setAttribute("id", (k = u)), (r = g(a)), (h = r.length), (l = V.test(k) ? "#" + k : "[id='" + k + "']");
while (h--) r[h] = l + " " + qa(r[h]);
(s = r.join(",")), (w = (_.test(a) && oa(b.parentNode)) || b);
}
if (s)
try {
return H.apply(d, w.querySelectorAll(s)), d;
} catch (y) {
} finally {
k === u && b.removeAttribute("id");
}
}
}
return i(a.replace(Q, "$1"), b, d, e);
}
function ga() {
var a = [];
function b(c, e) {
return a.push(c + " ") > d.cacheLength && delete b[a.shift()], (b[c + " "] = e);
}
return b;
}
function ha(a) {
return (a[u] = !0), a;
}
function ia(a) {
var b = n.createElement("div");
try {
return !!a(b);
} catch (c) {
return !1;
} finally {
b.parentNode && b.parentNode.removeChild(b), (b = null);
}
}
function ja(a, b) {
var c = a.split("|"),
e = c.length;
while (e--) d.attrHandle[c[e]] = b;
}
function ka(a, b) {
var c = b && a,
d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
if (d) return d;
if (c) while ((c = c.nextSibling)) if (c === b) return -1;
return a ? 1 : -1;
}
function la(a) {
return function (b) {
var c = b.nodeName.toLowerCase();
return "input" === c && b.type === a;
};
}
function ma(a) {
return function (b) {
var c = b.nodeName.toLowerCase();
return ("input" === c || "button" === c) && b.type === a;
};
}
function na(a) {
return ha(function (b) {
return (
(b = +b),
ha(function (c, d) {
var e,
f = a([], c.length, b),
g = f.length;
while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
})
);
});
}
function oa(a) {
return a && "undefined" != typeof a.getElementsByTagName && a;
}
(c = fa.support = {}),
(f = fa.isXML = function (a) {
var b = a && (a.ownerDocument || a).documentElement;
return b ? "HTML" !== b.nodeName : !1;
}),
(m = fa.setDocument = function (a) {
var b,
e,
g = a ? a.ownerDocument || a : v;
return g !== n && 9 === g.nodeType && g.documentElement
? ((n = g),
(o = n.documentElement),
(p = !f(n)),
(e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)),
(c.attributes = ia(function (a) {
return (a.className = "i"), !a.getAttribute("className");
})),
(c.getElementsByTagName = ia(function (a) {
return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
})),
(c.getElementsByClassName = Z.test(n.getElementsByClassName)),
(c.getById = ia(function (a) {
return (o.appendChild(a).id = u), !n.getElementsByName || !n.getElementsByName(u).length;
})),
c.getById
? ((d.find.ID = function (a, b) {
if ("undefined" != typeof b.getElementById && p) {
var c = b.getElementById(a);
return c ? [c] : [];
}
}),
(d.filter.ID = function (a) {
var b = a.replace(ba, ca);
return function (a) {
return a.getAttribute("id") === b;
};
}))
: (delete d.find.ID,
(d.filter.ID = function (a) {
var b = a.replace(ba, ca);
return function (a) {
var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
return c && c.value === b;
};
})),
(d.find.TAG = c.getElementsByTagName
? function (a, b) {
return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
}
: function (a, b) {
var c,
d = [],
e = 0,
f = b.getElementsByTagName(a);
if ("*" === a) {
while ((c = f[e++])) 1 === c.nodeType && d.push(c);
return d;
}
return f;
}),
(d.find.CLASS =
c.getElementsByClassName &&
function (a, b) {
return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
}),
(r = []),
(q = []),
(c.qsa = Z.test(n.querySelectorAll)) &&
(ia(function (a) {
(o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
a.querySelectorAll(":checked").length || q.push(":checked"),
a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
}),
ia(function (a) {
var b = n.createElement("input");
b.setAttribute("type", "hidden"),
a.appendChild(b).setAttribute("name", "D"),
a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
a.querySelectorAll("*,:x"),
q.push(",.*:");
})),
(c.matchesSelector = Z.test((s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector))) &&
ia(function (a) {
(c.disconnectedMatch = s.call(a, "div")), s.call(a, "[s!='']:x"), r.push("!=", O);
}),
(q = q.length && new RegExp(q.join("|"))),
(r = r.length && new RegExp(r.join("|"))),
(b = Z.test(o.compareDocumentPosition)),
(t =
b || Z.test(o.contains)
? function (a, b) {
var c = 9 === a.nodeType ? a.documentElement : a,
d = b && b.parentNode;
return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
}
: function (a, b) {
if (b) while ((b = b.parentNode)) if (b === a) return !0;
return !1;
}),
(B = b
? function (a, b) {
if (a === b) return (l = !0), 0;
var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
return d
? d
: ((d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1),
1 & d || (!c.sortDetached && b.compareDocumentPosition(a) === d)
? a === n || (a.ownerDocument === v && t(v, a))
? -1
: b === n || (b.ownerDocument === v && t(v, b))
? 1
: k
? J(k, a) - J(k, b)
: 0
: 4 & d
? -1
: 1);
}
: function (a, b) {
if (a === b) return (l = !0), 0;
var c,
d = 0,
e = a.parentNode,
f = b.parentNode,
g = [a],
h = [b];
if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
if (e === f) return ka(a, b);
c = a;
while ((c = c.parentNode)) g.unshift(c);
c = b;
while ((c = c.parentNode)) h.unshift(c);
while (g[d] === h[d]) d++;
return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
}),
n)
: n;
}),
(fa.matches = function (a, b) {
return fa(a, null, null, b);
}),
(fa.matchesSelector = function (a, b) {
if (((a.ownerDocument || a) !== n && m(a), (b = b.replace(T, "='$1']")), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))))
try {
var d = s.call(a, b);
if (d || c.disconnectedMatch || (a.document && 11 !== a.document.nodeType)) return d;
} catch (e) {}
return fa(b, n, null, [a]).length > 0;
}),
(fa.contains = function (a, b) {
return (a.ownerDocument || a) !== n && m(a), t(a, b);
}),
(fa.attr = function (a, b) {
(a.ownerDocument || a) !== n && m(a);
var e = d.attrHandle[b.toLowerCase()],
f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
}),
(fa.error = function (a) {
throw new Error("Syntax error, unrecognized expression: " + a);
}),
(fa.uniqueSort = function (a) {
var b,
d = [],
e = 0,
f = 0;
if (((l = !c.detectDuplicates), (k = !c.sortStable && a.slice(0)), a.sort(B), l)) {
while ((b = a[f++])) b === a[f] && (e = d.push(f));
while (e--) a.splice(d[e], 1);
}
return (k = null), a;
}),
(e = fa.getText = function (a) {
var b,
c = "",
d = 0,
f = a.nodeType;
if (f) {
if (1 === f || 9 === f || 11 === f) {
if ("string" == typeof a.textContent) return a.textContent;
for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
} else if (3 === f || 4 === f) return a.nodeValue;
} else while ((b = a[d++])) c += e(b);
return c;
}),
(d = fa.selectors = {
cacheLength: 50,
createPseudo: ha,
match: W,
attrHandle: {},
find: {},
relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
preFilter: {
ATTR: function (a) {
return (a[1] = a[1].replace(ba, ca)), (a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca)), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
},
CHILD: function (a) {
return (
(a[1] = a[1].toLowerCase()),
"nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), (a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3]))), (a[5] = +(a[7] + a[8] || "odd" === a[3]))) : a[3] && fa.error(a[0]),
a
);
},
PSEUDO: function (a) {
var b,
c = !a[6] && a[2];
return W.CHILD.test(a[0])
? null
: (a[3] ? (a[2] = a[4] || a[5] || "") : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))), a.slice(0, 3));
},
},
filter: {
TAG: function (a) {
var b = a.replace(ba, ca).toLowerCase();
return "*" === a
? function () {
return !0;
}
: function (a) {
return a.nodeName && a.nodeName.toLowerCase() === b;
};
},
CLASS: function (a) {
var b = y[a + " "];
return (
b ||
((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
y(a, function (a) {
return b.test(("string" == typeof a.className && a.className) || ("undefined" != typeof a.getAttribute && a.getAttribute("class")) || "");
}))
);
},
ATTR: function (a, b, c) {
return function (d) {
var e = fa.attr(d, a);
return null == e
? "!=" === b
: b
? ((e += ""),
"=" === b
? e === c
: "!=" === b
? e !== c
: "^=" === b
? c && 0 === e.indexOf(c)
: "*=" === b
? c && e.indexOf(c) > -1
: "$=" === b
? c && e.slice(-c.length) === c
: "~=" === b
? (" " + e.replace(P, " ") + " ").indexOf(c) > -1
: "|=" === b
? e === c || e.slice(0, c.length + 1) === c + "-"
: !1)
: !0;
};
},
CHILD: function (a, b, c, d, e) {
var f = "nth" !== a.slice(0, 3),
g = "last" !== a.slice(-4),
h = "of-type" === b;
return 1 === d && 0 === e
? function (a) {
return !!a.parentNode;
}
: function (b, c, i) {
var j,
k,
l,
m,
n,
o,
p = f !== g ? "nextSibling" : "previousSibling",
q = b.parentNode,
r = h && b.nodeName.toLowerCase(),
s = !i && !h,
t = !1;
if (q) {
if (f) {
while (p) {
m = b;
while ((m = m[p])) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
o = p = "only" === a && !o && "nextSibling";
}
return !0;
}
if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
(m = q), (l = m[u] || (m[u] = {})), (k = l[m.uniqueID] || (l[m.uniqueID] = {})), (j = k[a] || []), (n = j[0] === w && j[1]), (t = n && j[2]), (m = n && q.childNodes[n]);
while ((m = (++n && m && m[p]) || (t = n = 0) || o.pop()))
if (1 === m.nodeType && ++t && m === b) {
k[a] = [w, n, t];
break;
}
} else if ((s && ((m = b), (l = m[u] || (m[u] = {})), (k = l[m.uniqueID] || (l[m.uniqueID] = {})), (j = k[a] || []), (n = j[0] === w && j[1]), (t = n)), t === !1))
while ((m = (++n && m && m[p]) || (t = n = 0) || o.pop()))
if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && ((l = m[u] || (m[u] = {})), (k = l[m.uniqueID] || (l[m.uniqueID] = {})), (k[a] = [w, t])), m === b)) break;
return (t -= e), t === d || (t % d === 0 && t / d >= 0);
}
};
},
PSEUDO: function (a, b) {
var c,
e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
return e[u]
? e(b)
: e.length > 1
? ((c = [a, a, "", b]),
d.setFilters.hasOwnProperty(a.toLowerCase())
? ha(function (a, c) {
var d,
f = e(a, b),
g = f.length;
while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
})
: function (a) {
return e(a, 0, c);
})
: e;
},
},
pseudos: {
not: ha(function (a) {
var b = [],
c = [],
d = h(a.replace(Q, "$1"));
return d[u]
? ha(function (a, b, c, e) {
var f,
g = d(a, null, e, []),
h = a.length;
while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
})
: function (a, e, f) {
return (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop();
};
}),
has: ha(function (a) {
return function (b) {
return fa(a, b).length > 0;
};
}),
contains: ha(function (a) {
return (
(a = a.replace(ba, ca)),
function (b) {
return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
}
);
}),
lang: ha(function (a) {
return (
V.test(a || "") || fa.error("unsupported lang: " + a),
(a = a.replace(ba, ca).toLowerCase()),
function (b) {
var c;
do if ((c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))) return (c = c.toLowerCase()), c === a || 0 === c.indexOf(a + "-");
while ((b = b.parentNode) && 1 === b.nodeType);
return !1;
}
);
}),
target: function (b) {
var c = a.location && a.location.hash;
return c && c.slice(1) === b.id;
},
root: function (a) {
return a === o;
},
focus: function (a) {
return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
},
enabled: function (a) {
return a.disabled === !1;
},
disabled: function (a) {
return a.disabled === !0;
},
checked: function (a) {
var b = a.nodeName.toLowerCase();
return ("input" === b && !!a.checked) || ("option" === b && !!a.selected);
},
selected: function (a) {
return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
},
empty: function (a) {
for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
return !0;
},
parent: function (a) {
return !d.pseudos.empty(a);
},
header: function (a) {
return Y.test(a.nodeName);
},
input: function (a) {
return X.test(a.nodeName);
},
button: function (a) {
var b = a.nodeName.toLowerCase();
return ("input" === b && "button" === a.type) || "button" === b;
},
text: function (a) {
var b;
return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
},
first: na(function () {
return [0];
}),
last: na(function (a, b) {
return [b - 1];
}),
eq: na(function (a, b, c) {
return [0 > c ? c + b : c];
}),
even: na(function (a, b) {
for (var c = 0; b > c; c += 2) a.push(c);
return a;
}),
odd: na(function (a, b) {
for (var c = 1; b > c; c += 2) a.push(c);
return a;
}),
lt: na(function (a, b, c) {
for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
return a;
}),
gt: na(function (a, b, c) {
for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
return a;
}),
},
}),
(d.pseudos.nth = d.pseudos.eq);
for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = la(b);
for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);
function pa() {}
(pa.prototype = d.filters = d.pseudos),
(d.setFilters = new pa()),
(g = fa.tokenize = function (a, b) {
var c,
e,
f,
g,
h,
i,
j,
k = z[a + " "];
if (k) return b ? 0 : k.slice(0);
(h = a), (i = []), (j = d.preFilter);
while (h) {
(c && !(e = R.exec(h))) || (e && (h = h.slice(e[0].length) || h), i.push((f = []))), (c = !1), (e = S.exec(h)) && ((c = e.shift()), f.push({ value: c, type: e[0].replace(Q, " ") }), (h = h.slice(c.length)));
for (g in d.filter) !(e = W[g].exec(h)) || (j[g] && !(e = j[g](e))) || ((c = e.shift()), f.push({ value: c, type: g, matches: e }), (h = h.slice(c.length)));
if (!c) break;
}
return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
});
function qa(a) {
for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
return d;
}
function ra(a, b, c) {
var d = b.dir,
e = c && "parentNode" === d,
f = x++;
return b.first
? function (b, c, f) {
while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
}
: function (b, c, g) {
var h,
i,
j,
k = [w, f];
if (g) {
while ((b = b[d])) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
} else
while ((b = b[d]))
if (1 === b.nodeType || e) {
if (((j = b[u] || (b[u] = {})), (i = j[b.uniqueID] || (j[b.uniqueID] = {})), (h = i[d]) && h[0] === w && h[1] === f)) return (k[2] = h[2]);
if (((i[d] = k), (k[2] = a(b, c, g)))) return !0;
}
};
}
function sa(a) {
return a.length > 1
? function (b, c, d) {
var e = a.length;
while (e--) if (!a[e](b, c, d)) return !1;
return !0;
}
: a[0];
}
function ta(a, b, c) {
for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
return c;
}
function ua(a, b, c, d, e) {
for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
return g;
}
function va(a, b, c, d, e, f) {
return (
d && !d[u] && (d = va(d)),
e && !e[u] && (e = va(e, f)),
ha(function (f, g, h, i) {
var j,
k,
l,
m = [],
n = [],
o = g.length,
p = f || ta(b || "*", h.nodeType ? [h] : h, []),
q = !a || (!f && b) ? p : ua(p, m, a, h, i),
r = c ? (e || (f ? a : o || d) ? [] : g) : q;
if ((c && c(q, r, h, i), d)) {
(j = ua(r, n)), d(j, [], h, i), (k = j.length);
while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
}
if (f) {
if (e || a) {
if (e) {
(j = []), (k = r.length);
while (k--) (l = r[k]) && j.push((q[k] = l));
e(null, (r = []), j, i);
}
k = r.length;
while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
}
} else (r = ua(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
})
);
}
function wa(a) {
for (
var b,
c,
e,
f = a.length,
g = d.relative[a[0].type],
h = g || d.relative[" "],
i = g ? 1 : 0,
k = ra(
function (a) {
return a === b;
},
h,
!0
),
l = ra(
function (a) {
return J(b, a) > -1;
},
h,
!0
),
m = [
function (a, c, d) {
var e = (!g && (d || c !== j)) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
return (b = null), e;
},
];
f > i;
i++
)
if ((c = d.relative[a[i].type])) m = [ra(sa(m), c)];
else {
if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa((a = a.slice(e))), f > e && qa(a));
}
m.push(c);
}
return sa(m);
}
function xa(a, b) {
var c = b.length > 0,
e = a.length > 0,
f = function (f, g, h, i, k) {
var l,
o,
q,
r = 0,
s = "0",
t = f && [],
u = [],
v = j,
x = f || (e && d.find.TAG("*", k)),
y = (w += null == v ? 1 : Math.random() || 0.1),
z = x.length;
for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
if (e && l) {
(o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
while ((q = a[o++]))
if (q(l, g || n, h)) {
i.push(l);
break;
}
k && (w = y);
}
c && ((l = !q && l) && r--, f && t.push(l));
}
if (((r += s), c && s !== r)) {
o = 0;
while ((q = b[o++])) q(t, u, g, h);
if (f) {
if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
u = ua(u);
}
H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
}
return k && ((w = y), (j = v)), t;
};
return c ? ha(f) : f;
}
return (
(h = fa.compile = function (a, b) {
var c,
d = [],
e = [],
f = A[a + " "];
if (!f) {
b || (b = g(a)), (c = b.length);
while (c--) (f = wa(b[c])), f[u] ? d.push(f) : e.push(f);
(f = A(a, xa(e, d))), (f.selector = a);
}
return f;
}),
(i = fa.select = function (a, b, e, f) {
var i,
j,
k,
l,
m,
n = "function" == typeof a && a,
o = !f && g((a = n.selector || a));
if (((e = e || []), 1 === o.length)) {
if (((j = o[0] = o[0].slice(0)), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type])) {
if (((b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0]), !b)) return e;
n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
}
i = W.needsContext.test(a) ? 0 : j.length;
while (i--) {
if (((k = j[i]), d.relative[(l = k.type)])) break;
if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), (_.test(j[0].type) && oa(b.parentNode)) || b))) {
if ((j.splice(i, 1), (a = f.length && qa(j)), !a)) return H.apply(e, f), e;
break;
}
}
}
return (n || h(a, o))(f, b, !p, e, !b || (_.test(a) && oa(b.parentNode)) || b), e;
}),
(c.sortStable = u.split("").sort(B).join("") === u),
(c.detectDuplicates = !!l),
m(),
(c.sortDetached = ia(function (a) {
return 1 & a.compareDocumentPosition(n.createElement("div"));
})),
ia(function (a) {
return (a.innerHTML = "<a href='#'></a>"), "#" === a.firstChild.getAttribute("href");
}) ||
ja("type|href|height|width", function (a, b, c) {
return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
}),
(c.attributes &&
ia(function (a) {
return (a.innerHTML = "<input/>"), a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
})) ||
ja("value", function (a, b, c) {
return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
}),
ia(function (a) {
return null == a.getAttribute("disabled");
}) ||
ja(K, function (a, b, c) {
var d;
return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
}),
fa
);
})(a);
(n.find = t), (n.expr = t.selectors), (n.expr[":"] = n.expr.pseudos), (n.uniqueSort = n.unique = t.uniqueSort), (n.text = t.getText), (n.isXMLDoc = t.isXML), (n.contains = t.contains);
var u = function (a, b, c) {
var d = [],
e = void 0 !== c;
while ((a = a[b]) && 9 !== a.nodeType)
if (1 === a.nodeType) {
if (e && n(a).is(c)) break;
d.push(a);
}
return d;
},
v = function (a, b) {
for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
return c;
},
w = n.expr.match.needsContext,
x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
y = /^.[^:#\[\.,]*$/;
function z(a, b, c) {
if (n.isFunction(b))
return n.grep(a, function (a, d) {
return !!b.call(a, d, a) !== c;
});
if (b.nodeType)
return n.grep(a, function (a) {
return (a === b) !== c;
});
if ("string" == typeof b) {
if (y.test(b)) return n.filter(b, a, c);
b = n.filter(b, a);
}
return n.grep(a, function (a) {
return h.call(b, a) > -1 !== c;
});
}
(n.filter = function (a, b, c) {
var d = b[0];
return (
c && (a = ":not(" + a + ")"),
1 === b.length && 1 === d.nodeType
? n.find.matchesSelector(d, a)
? [d]
: []
: n.find.matches(
a,
n.grep(b, function (a) {
return 1 === a.nodeType;
})
)
);
}),
n.fn.extend({
find: function (a) {
var b,
c = this.length,
d = [],
e = this;
if ("string" != typeof a)
return this.pushStack(
n(a).filter(function () {
for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
})
);
for (b = 0; c > b; b++) n.find(a, e[b], d);
return (d = this.pushStack(c > 1 ? n.unique(d) : d)), (d.selector = this.selector ? this.selector + " " + a : a), d;
},
filter: function (a) {
return this.pushStack(z(this, a || [], !1));
},
not: function (a) {
return this.pushStack(z(this, a || [], !0));
},
is: function (a) {
return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
},
});
var A,
B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
C = (n.fn.init = function (a, b, c) {
var e, f;
if (!a) return this;
if (((c = c || A), "string" == typeof a)) {
if (((e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a)), !e || (!e[1] && b))) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
if (e[1]) {
if (((b = b instanceof n ? b[0] : b), n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)))
for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
return this;
}
return (f = d.getElementById(e[2])), f && f.parentNode && ((this.length = 1), (this[0] = f)), (this.context = d), (this.selector = a), this;
}
return a.nodeType
? ((this.context = this[0] = a), (this.length = 1), this)
: n.isFunction(a)
? void 0 !== c.ready
? c.ready(a)
: a(n)
: (void 0 !== a.selector && ((this.selector = a.selector), (this.context = a.context)), n.makeArray(a, this));
});
(C.prototype = n.fn), (A = n(d));
var D = /^(?:parents|prev(?:Until|All))/,
E = { children: !0, contents: !0, next: !0, prev: !0 };
n.fn.extend({
has: function (a) {
var b = n(a, this),
c = b.length;
return this.filter(function () {
for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
});
},
closest: function (a, b) {
for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
for (c = this[d]; c && c !== b; c = c.parentNode)
if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
f.push(c);
break;
}
return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
},
index: function (a) {
return a ? ("string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
},
add: function (a, b) {
return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
},
addBack: function (a) {
return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
},
});
function F(a, b) {
while ((a = a[b]) && 1 !== a.nodeType);
return a;
}
n.each(
{
parent: function (a) {
var b = a.parentNode;
return b && 11 !== b.nodeType ? b : null;
},
parents: function (a) {
return u(a, "parentNode");
},
parentsUntil: function (a, b, c) {
return u(a, "parentNode", c);
},
next: function (a) {
return F(a, "nextSibling");
},
prev: function (a) {
return F(a, "previousSibling");
},
nextAll: function (a) {
return u(a, "nextSibling");
},
prevAll: function (a) {
return u(a, "previousSibling");
},
nextUntil: function (a, b, c) {
return u(a, "nextSibling", c);
},
prevUntil: function (a, b, c) {
return u(a, "previousSibling", c);
},
siblings: function (a) {
return v((a.parentNode || {}).firstChild, a);
},
children: function (a) {
return v(a.firstChild);
},
contents: function (a) {
return a.contentDocument || n.merge([], a.childNodes);
},
},
function (a, b) {
n.fn[a] = function (c, d) {
var e = n.map(this, b, c);
return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e);
};
}
);
var G = /\S+/g;
function H(a) {
var b = {};
return (
n.each(a.match(G) || [], function (a, c) {
b[c] = !0;
}),
b
);
}
(n.Callbacks = function (a) {
a = "string" == typeof a ? H(a) : n.extend({}, a);
var b,
c,
d,
e,
f = [],
g = [],
h = -1,
i = function () {
for (e = a.once, d = b = !0; g.length; h = -1) {
c = g.shift();
while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && ((h = f.length), (c = !1));
}
a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
},
j = {
add: function () {
return (
f &&
(c && !b && ((h = f.length - 1), g.push(c)),
(function d(b) {
n.each(b, function (b, c) {
n.isFunction(c) ? (a.unique && j.has(c)) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
});
})(arguments),
c && !b && i()),
this
);
},
remove: function () {
return (
n.each(arguments, function (a, b) {
var c;
while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--;
}),
this
);
},
has: function (a) {
return a ? n.inArray(a, f) > -1 : f.length > 0;
},
empty: function () {
return f && (f = []), this;
},
disable: function () {
return (e = g = []), (f = c = ""), this;
},
disabled: function () {
return !f;
},
lock: function () {
return (e = g = []), c || (f = c = ""), this;
},
locked: function () {
return !!e;
},
fireWith: function (a, c) {
return e || ((c = c || []), (c = [a, c.slice ? c.slice() : c]), g.push(c), b || i()), this;
},
fire: function () {
return j.fireWith(this, arguments), this;
},
fired: function () {
return !!d;
},
};
return j;
}),
n.extend({
Deferred: function (a) {
var b = [
["resolve", "done", n.Callbacks("once memory"), "resolved"],
["reject", "fail", n.Callbacks("once memory"), "rejected"],
["notify", "progress", n.Callbacks("memory")],
],
c = "pending",
d = {
state: function () {
return c;
},
always: function () {
return e.done(arguments).fail(arguments), this;
},
then: function () {
var a = arguments;
return n
.Deferred(function (c) {
n.each(b, function (b, f) {
var g = n.isFunction(a[b]) && a[b];
e[f[1]](function () {
var a = g && g.apply(this, arguments);
a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
});
}),
(a = null);
})
.promise();
},
promise: function (a) {
return null != a ? n.extend(a, d) : d;
},
},
e = {};
return (
(d.pipe = d.then),
n.each(b, function (a, f) {
var g = f[2],
h = f[3];
(d[f[1]] = g.add),
h &&
g.add(
function () {
c = h;
},
b[1 ^ a][2].disable,
b[2][2].lock
),
(e[f[0]] = function () {
return e[f[0] + "With"](this === e ? d : this, arguments), this;
}),
(e[f[0] + "With"] = g.fireWith);
}),
d.promise(e),
a && a.call(e, e),
e
);
},
when: function (a) {
var b = 0,
c = e.call(arguments),
d = c.length,
f = 1 !== d || (a && n.isFunction(a.promise)) ? d : 0,
g = 1 === f ? a : n.Deferred(),
h = function (a, b, c) {
return function (d) {
(b[a] = this), (c[a] = arguments.length > 1 ? e.call(arguments) : d), c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
};
},
i,
j,
k;
if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
return f || g.resolveWith(k, c), g.promise();
},
});
var I;
(n.fn.ready = function (a) {
return n.ready.promise().done(a), this;
}),
n.extend({
isReady: !1,
readyWait: 1,
holdReady: function (a) {
a ? n.readyWait++ : n.ready(!0);
},
ready: function (a) {
(a === !0 ? --n.readyWait : n.isReady) || ((n.isReady = !0), (a !== !0 && --n.readyWait > 0) || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
},
});
function J() {
d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready();
}
(n.ready.promise = function (b) {
return (
I || ((I = n.Deferred()), "complete" === d.readyState || ("loading" !== d.readyState && !d.documentElement.doScroll) ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))),
I.promise(b)
);
}),
n.ready.promise();
var K = function (a, b, c, d, e, f, g) {
var h = 0,
i = a.length,
j = null == c;
if ("object" === n.type(c)) {
e = !0;
for (h in c) K(a, b, h, c[h], !0, f, g);
} else if (
void 0 !== d &&
((e = !0),
n.isFunction(d) || (g = !0),
j &&
(g
? (b.call(a, d), (b = null))
: ((j = b),
(b = function (a, b, c) {
return j.call(n(a), c);
}))),
b)
)
for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
},
L = function (a) {
return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
};
function M() {
this.expando = n.expando + M.uid++;
}
(M.uid = 1),
(M.prototype = {
register: function (a, b) {
var c = b || {};
return a.nodeType ? (a[this.expando] = c) : Object.defineProperty(a, this.expando, { value: c, writable: !0, configurable: !0 }), a[this.expando];
},
cache: function (a) {
if (!L(a)) return {};
var b = a[this.expando];
return b || ((b = {}), L(a) && (a.nodeType ? (a[this.expando] = b) : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
},
set: function (a, b, c) {
var d,
e = this.cache(a);
if ("string" == typeof b) e[b] = c;
else for (d in b) e[d] = b[d];
return e;
},
get: function (a, b) {
return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
},
access: function (a, b, c) {
var d;
return void 0 === b || (b && "string" == typeof b && void 0 === c) ? ((d = this.get(a, b)), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
},
remove: function (a, b) {
var c,
d,
e,
f = a[this.expando];
if (void 0 !== f) {
if (void 0 === b) this.register(a);
else {
n.isArray(b) ? (d = b.concat(b.map(n.camelCase))) : ((e = n.camelCase(b)), b in f ? (d = [b, e]) : ((d = e), (d = d in f ? [d] : d.match(G) || []))), (c = d.length);
while (c--) delete f[d[c]];
}
(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
}
},
hasData: function (a) {
var b = a[this.expando];
return void 0 !== b && !n.isEmptyObject(b);
},
});
var N = new M(),
O = new M(),
P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
Q = /[A-Z]/g;
function R(a, b, c) {
var d;
if (void 0 === c && 1 === a.nodeType)
if (((d = "data-" + b.replace(Q, "-$&").toLowerCase()), (c = a.getAttribute(d)), "string" == typeof c)) {
try {
c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
} catch (e) {}
O.set(a, b, c);
} else c = void 0;
return c;
}
n.extend({
hasData: function (a) {
return O.hasData(a) || N.hasData(a);
},
data: function (a, b, c) {
return O.access(a, b, c);
},
removeData: function (a, b) {
O.remove(a, b);
},
_data: function (a, b, c) {
return N.access(a, b, c);
},
_removeData: function (a, b) {
N.remove(a, b);
},
}),
n.fn.extend({
data: function (a, b) {
var c,
d,
e,
f = this[0],
g = f && f.attributes;
if (void 0 === a) {
if (this.length && ((e = O.get(f)), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
c = g.length;
while (c--) g[c] && ((d = g[c].name), 0 === d.indexOf("data-") && ((d = n.camelCase(d.slice(5))), R(f, d, e[d])));
N.set(f, "hasDataAttrs", !0);
}
return e;
}
return "object" == typeof a
? this.each(function () {
O.set(this, a);
})
: K(
this,
function (b) {
var c, d;
if (f && void 0 === b) {
if (((c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase())), void 0 !== c)) return c;
if (((d = n.camelCase(a)), (c = O.get(f, d)), void 0 !== c)) return c;
if (((c = R(f, d, void 0)), void 0 !== c)) return c;
} else
(d = n.camelCase(a)),
this.each(function () {
var c = O.get(this, d);
O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b);
});
},
null,
b,
arguments.length > 1,
null,
!0
);
},
removeData: function (a) {
return this.each(function () {
O.remove(this, a);
});
},
}),
n.extend({
queue: function (a, b, c) {
var d;
return a ? ((b = (b || "fx") + "queue"), (d = N.get(a, b)), c && (!d || n.isArray(c) ? (d = N.access(a, b, n.makeArray(c))) : d.push(c)), d || []) : void 0;
},
dequeue: function (a, b) {
b = b || "fx";
var c = n.queue(a, b),
d = c.length,
e = c.shift(),
f = n._queueHooks(a, b),
g = function () {
n.dequeue(a, b);
};
"inprogress" === e && ((e = c.shift()), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
},
_queueHooks: function (a, b) {
var c = b + "queueHooks";
return (
N.get(a, c) ||
N.access(a, c, {
empty: n.Callbacks("once memory").add(function () {
N.remove(a, [b + "queue", c]);
}),
})
);
},
}),
n.fn.extend({
queue: function (a, b) {
var c = 2;
return (
"string" != typeof a && ((b = a), (a = "fx"), c--),
arguments.length < c
? n.queue(this[0], a)
: void 0 === b
? this
: this.each(function () {
var c = n.queue(this, a, b);
n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
})
);
},
dequeue: function (a) {
return this.each(function () {
n.dequeue(this, a);
});
},
clearQueue: function (a) {
return this.queue(a || "fx", []);
},
promise: function (a, b) {
var c,
d = 1,
e = n.Deferred(),
f = this,
g = this.length,
h = function () {
--d || e.resolveWith(f, [f]);
};
"string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
while (g--) (c = N.get(f[g], a + "queueHooks")), c && c.empty && (d++, c.empty.add(h));
return h(), e.promise(b);
},
});
var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
U = ["Top", "Right", "Bottom", "Left"],
V = function (a, b) {
return (a = b || a), "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
};
function W(a, b, c, d) {
var e,
f = 1,
g = 20,
h = d
? function () {
return d.cur();
}
: function () {
return n.css(a, b, "");
},
i = h(),
j = (c && c[3]) || (n.cssNumber[b] ? "" : "px"),
k = (n.cssNumber[b] || ("px" !== j && +i)) && T.exec(n.css(a, b));
if (k && k[3] !== j) {
(j = j || k[3]), (c = c || []), (k = +i || 1);
do (f = f || ".5"), (k /= f), n.style(a, b, k + j);
while (f !== (f = h() / i) && 1 !== f && --g);
}
return c && ((k = +k || +i || 0), (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]), d && ((d.unit = j), (d.start = k), (d.end = e))), e;
}
var X = /^(?:checkbox|radio)$/i,
Y = /<([\w:-]+)/,
Z = /^$|\/(?:java|ecma)script/i,
$ = {
option: [1, "<select multiple='multiple'>", "</select>"],
thead: [1, "<table>", "</table>"],
col: [2, "<table><colgroup>", "</colgroup></table>"],
tr: [2, "<table><tbody>", "</tbody></table>"],
td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
_default: [0, "", ""],
};
($.optgroup = $.option), ($.tbody = $.tfoot = $.colgroup = $.caption = $.thead), ($.th = $.td);
function _(a, b) {
var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], c) : c;
}
function aa(a, b) {
for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
}
var ba = /<|&#?\w+;/;
function ca(a, b, c, d, e) {
for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
if (((f = a[o]), f || 0 === f))
if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
else if (ba.test(f)) {
(g = g || l.appendChild(b.createElement("div"))), (h = (Y.exec(f) || ["", ""])[1].toLowerCase()), (i = $[h] || $._default), (g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2]), (k = i[0]);
while (k--) g = g.lastChild;
n.merge(m, g.childNodes), (g = l.firstChild), (g.textContent = "");
} else m.push(b.createTextNode(f));
(l.textContent = ""), (o = 0);
while ((f = m[o++]))
if (d && n.inArray(f, d) > -1) e && e.push(f);
else if (((j = n.contains(f.ownerDocument, f)), (g = _(l.appendChild(f), "script")), j && aa(g), c)) {
k = 0;
while ((f = g[k++])) Z.test(f.type || "") && c.push(f);
}
return l;
}
!(function () {
var a = d.createDocumentFragment(),
b = a.appendChild(d.createElement("div")),
c = d.createElement("input");
c.setAttribute("type", "radio"),
c.setAttribute("checked", "checked"),
c.setAttribute("name", "t"),
b.appendChild(c),
(l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
(b.innerHTML = "<textarea>x</textarea>"),
(l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
})();
var da = /^key/,
ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
fa = /^([^.]*)(?:\.(.+)|)/;
function ga() {
return !0;
}
function ha() {
return !1;
}
function ia() {
try {
return d.activeElement;
} catch (a) {}
}
function ja(a, b, c, d, e, f) {
var g, h;
if ("object" == typeof b) {
"string" != typeof c && ((d = d || c), (c = void 0));
for (h in b) ja(a, h, c, d, b[h], f);
return a;
}
if ((null == d && null == e ? ((e = c), (d = c = void 0)) : null == e && ("string" == typeof c ? ((e = d), (d = void 0)) : ((e = d), (d = c), (c = void 0))), e === !1)) e = ha;
else if (!e) return a;
return (
1 === f &&
((g = e),
(e = function (a) {
return n().off(a), g.apply(this, arguments);
}),
(e.guid = g.guid || (g.guid = n.guid++))),
a.each(function () {
n.event.add(this, b, e, d, c);
})
);
}
(n.event = {
global: {},
add: function (a, b, c, d, e) {
var f,
g,
h,
i,
j,
k,
l,
m,
o,
p,
q,
r = N.get(a);
if (r) {
c.handler && ((f = c), (c = f.handler), (e = f.selector)),
c.guid || (c.guid = n.guid++),
(i = r.events) || (i = r.events = {}),
(g = r.handle) ||
(g = r.handle = function (b) {
return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
}),
(b = (b || "").match(G) || [""]),
(j = b.length);
while (j--)
(h = fa.exec(b[j]) || []),
(o = q = h[1]),
(p = (h[2] || "").split(".").sort()),
o &&
((l = n.event.special[o] || {}),
(o = (e ? l.delegateType : l.bindType) || o),
(l = n.event.special[o] || {}),
(k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f)),
(m = i[o]) || ((m = i[o] = []), (m.delegateCount = 0), (l.setup && l.setup.call(a, d, p, g) !== !1) || (a.addEventListener && a.addEventListener(o, g))),
l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
(n.event.global[o] = !0));
}
},
remove: function (a, b, c, d, e) {
var f,
g,
h,
i,
j,
k,
l,
m,
o,
p,
q,
r = N.hasData(a) && N.get(a);
if (r && (i = r.events)) {
(b = (b || "").match(G) || [""]), (j = b.length);
while (j--)
if (((h = fa.exec(b[j]) || []), (o = q = h[1]), (p = (h[2] || "").split(".").sort()), o)) {
(l = n.event.special[o] || {}), (o = (d ? l.delegateType : l.bindType) || o), (m = i[o] || []), (h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")), (g = f = m.length);
while (f--)
(k = m[f]),
(!e && q !== k.origType) ||
(c && c.guid !== k.guid) ||
(h && !h.test(k.namespace)) ||
(d && d !== k.selector && ("**" !== d || !k.selector)) ||
(m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
g && !m.length && ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) || n.removeEvent(a, o, r.handle), delete i[o]);
} else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
n.isEmptyObject(i) && N.remove(a, "handle events");
}
},
dispatch: function (a) {
a = n.event.fix(a);
var b,
c,
d,
f,
g,
h = [],
i = e.call(arguments),
j = (N.get(this, "events") || {})[a.type] || [],
k = n.event.special[a.type] || {};
if (((i[0] = a), (a.delegateTarget = this), !k.preDispatch || k.preDispatch.call(this, a) !== !1)) {
(h = n.event.handlers.call(this, a, j)), (b = 0);
while ((f = h[b++]) && !a.isPropagationStopped()) {
(a.currentTarget = f.elem), (c = 0);
while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
(a.rnamespace && !a.rnamespace.test(g.namespace)) ||
((a.handleObj = g), (a.data = g.data), (d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i)), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
}
return k.postDispatch && k.postDispatch.call(this, a), a.result;
}
},
handlers: function (a, b) {
var c,
d,
e,
f,
g = [],
h = b.delegateCount,
i = a.target;
if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
for (; i !== this; i = i.parentNode || this)
if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
for (d = [], c = 0; h > c; c++) (f = b[c]), (e = f.selector + " "), void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
d.length && g.push({ elem: i, handlers: d });
}
return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
},
props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
fixHooks: {},
keyHooks: {
props: "char charCode key keyCode".split(" "),
filter: function (a, b) {
return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
},
},
mouseHooks: {
props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
filter: function (a, b) {
var c,
e,
f,
g = b.button;
return (
null == a.pageX &&
null != b.clientX &&
((c = a.target.ownerDocument || d),
(e = c.documentElement),
(f = c.body),
(a.pageX = b.clientX + ((e && e.scrollLeft) || (f && f.scrollLeft) || 0) - ((e && e.clientLeft) || (f && f.clientLeft) || 0)),
(a.pageY = b.clientY + ((e && e.scrollTop) || (f && f.scrollTop) || 0) - ((e && e.clientTop) || (f && f.clientTop) || 0))),
a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
a
);
},
},
fix: function (a) {
if (a[n.expando]) return a;
var b,
c,
e,
f = a.type,
g = a,
h = this.fixHooks[f];
h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), (e = h.props ? this.props.concat(h.props) : this.props), (a = new n.Event(g)), (b = e.length);
while (b--) (c = e[b]), (a[c] = g[c]);
return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a;
},
special: {
load: { noBubble: !0 },
focus: {
trigger: function () {
return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
},
delegateType: "focusin",
},
blur: {
trigger: function () {
return this === ia() && this.blur ? (this.blur(), !1) : void 0;
},
delegateType: "focusout",
},
click: {
trigger: function () {
return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
},
_default: function (a) {
return n.nodeName(a.target, "a");
},
},
beforeunload: {
postDispatch: function (a) {
void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
},
},
},
}),
(n.removeEvent = function (a, b, c) {
a.removeEventListener && a.removeEventListener(b, c);
}),
(n.Event = function (a, b) {
return this instanceof n.Event
? (a && a.type ? ((this.originalEvent = a), (this.type = a.type), (this.isDefaultPrevented = a.defaultPrevented || (void 0 === a.defaultPrevented && a.returnValue === !1) ? ga : ha)) : (this.type = a),
b && n.extend(this, b),
(this.timeStamp = (a && a.timeStamp) || n.now()),
void (this[n.expando] = !0))
: new n.Event(a, b);
}),
(n.Event.prototype = {
constructor: n.Event,
isDefaultPrevented: ha,
isPropagationStopped: ha,
isImmediatePropagationStopped: ha,
isSimulated: !1,
preventDefault: function () {
var a = this.originalEvent;
(this.isDefaultPrevented = ga), a && !this.isSimulated && a.preventDefault();
},
stopPropagation: function () {
var a = this.originalEvent;
(this.isPropagationStopped = ga), a && !this.isSimulated && a.stopPropagation();
},
stopImmediatePropagation: function () {
var a = this.originalEvent;
(this.isImmediatePropagationStopped = ga), a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
},
}),
n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
n.event.special[a] = {
delegateType: b,
bindType: b,
handle: function (a) {
var c,
d = this,
e = a.relatedTarget,
f = a.handleObj;
return (e && (e === d || n.contains(d, e))) || ((a.type = f.origType), (c = f.handler.apply(this, arguments)), (a.type = b)), c;
},
};
}),
n.fn.extend({
on: function (a, b, c, d) {
return ja(this, a, b, c, d);
},
one: function (a, b, c, d) {
return ja(this, a, b, c, d, 1);
},
off: function (a, b, c) {
var d, e;
if (a && a.preventDefault && a.handleObj) return (d = a.handleObj), n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
if ("object" == typeof a) {
for (e in a) this.off(e, b, a[e]);
return this;
}
return (
(b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
c === !1 && (c = ha),
this.each(function () {
n.event.remove(this, a, c, b);
})
);
},
});
var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
la = /<script|<style|<link/i,
ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
na = /^true\/(.*)/,
oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function pa(a, b) {
return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
}
function qa(a) {
return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
}
function ra(a) {
var b = na.exec(a.type);
return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
}
function sa(a, b) {
var c, d, e, f, g, h, i, j;
if (1 === b.nodeType) {
if (N.hasData(a) && ((f = N.access(a)), (g = N.set(b, f)), (j = f.events))) {
delete g.handle, (g.events = {});
for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
}
O.hasData(a) && ((h = O.access(a)), (i = n.extend({}, h)), O.set(b, i));
}
}
function ta(a, b) {
var c = b.nodeName.toLowerCase();
"input" === c && X.test(a.type) ? (b.checked = a.checked) : ("input" !== c && "textarea" !== c) || (b.defaultValue = a.defaultValue);
}
function ua(a, b, c, d) {
b = f.apply([], b);
var e,
g,
h,
i,
j,
k,
m = 0,
o = a.length,
p = o - 1,
q = b[0],
r = n.isFunction(q);
if (r || (o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)))
return a.each(function (e) {
var f = a.eq(e);
r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
});
if (o && ((e = ca(b, a[0].ownerDocument, !1, a, d)), (g = e.firstChild), 1 === e.childNodes.length && (e = g), g || d)) {
for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) (j = e), m !== p && ((j = n.clone(j, !0, !0)), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
if (i)
for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++)
(j = h[m]), Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")));
}
return a;
}
function va(a, b, c) {
for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
return a;
}
n.extend({
htmlPrefilter: function (a) {
return a.replace(ka, "<$1></$2>");
},
clone: function (a, b, c) {
var d,
e,
f,
g,
h = a.cloneNode(!0),
i = n.contains(a.ownerDocument, a);
if (!(l.noCloneChecked || (1 !== a.nodeType && 11 !== a.nodeType) || n.isXMLDoc(a))) for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);
if (b)
if (c) for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);
else sa(a, h);
return (g = _(h, "script")), g.length > 0 && aa(g, !i && _(a, "script")), h;
},
cleanData: function (a) {
for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
if (L(c)) {
if ((b = c[N.expando])) {
if (b.events) for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
c[N.expando] = void 0;
}
c[O.expando] && (c[O.expando] = void 0);
}
},
}),
n.fn.extend({
domManip: ua,
detach: function (a) {
return va(this, a, !0);
},
remove: function (a) {
return va(this, a);
},
text: function (a) {
return K(
this,
function (a) {
return void 0 === a
? n.text(this)
: this.empty().each(function () {
(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = a);
});
},
null,
a,
arguments.length
);
},
append: function () {
return ua(this, arguments, function (a) {
if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
var b = pa(this, a);
b.appendChild(a);
}
});
},
prepend: function () {
return ua(this, arguments, function (a) {
if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
var b = pa(this, a);
b.insertBefore(a, b.firstChild);
}
});
},
before: function () {
return ua(this, arguments, function (a) {
this.parentNode && this.parentNode.insertBefore(a, this);
});
},
after: function () {
return ua(this, arguments, function (a) {
this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
});
},
empty: function () {
for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), (a.textContent = ""));
return this;
},
clone: function (a, b) {
return (
(a = null == a ? !1 : a),
(b = null == b ? a : b),
this.map(function () {
return n.clone(this, a, b);
})
);
},
html: function (a) {
return K(
this,
function (a) {
var b = this[0] || {},
c = 0,
d = this.length;
if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
a = n.htmlPrefilter(a);
try {
for (; d > c; c++) (b = this[c] || {}), 1 === b.nodeType && (n.cleanData(_(b, !1)), (b.innerHTML = a));
b = 0;
} catch (e) {}
}
b && this.empty().append(a);
},
null,
a,
arguments.length
);
},
replaceWith: function () {
var a = [];
return ua(
this,
arguments,
function (b) {
var c = this.parentNode;
n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this));
},
a
);
},
}),
n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
n.fn[a] = function (a) {
for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) (c = h === f ? this : this.clone(!0)), n(e[h])[b](c), g.apply(d, c.get());
return this.pushStack(d);
};
});
var wa,
xa = { HTML: "block", BODY: "block" };
function ya(a, b) {
var c = n(b.createElement(a)).appendTo(b.body),
d = n.css(c[0], "display");
return c.detach(), d;
}
function za(a) {
var b = d,
c = xa[a];
return (
c ||
((c = ya(a, b)),
("none" !== c && c) || ((wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement)), (b = wa[0].contentDocument), b.write(), b.close(), (c = ya(a, b)), wa.detach()),
(xa[a] = c)),
c
);
}
var Aa = /^margin/,
Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
Ca = function (b) {
var c = b.ownerDocument.defaultView;
return (c && c.opener) || (c = a), c.getComputedStyle(b);
},
Da = function (a, b, c, d) {
var e,
f,
g = {};
for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
e = c.apply(a, d || []);
for (f in b) a.style[f] = g[f];
return e;
},
Ea = d.documentElement;
!(function () {
var b,
c,
e,
f,
g = d.createElement("div"),
h = d.createElement("div");
if (h.style) {
(h.style.backgroundClip = "content-box"),
(h.cloneNode(!0).style.backgroundClip = ""),
(l.clearCloneStyle = "content-box" === h.style.backgroundClip),
(g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
g.appendChild(h);
function i() {
(h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"), (h.innerHTML = ""), Ea.appendChild(g);
var d = a.getComputedStyle(h);
(b = "1%" !== d.top), (f = "2px" === d.marginLeft), (c = "4px" === d.width), (h.style.marginRight = "50%"), (e = "4px" === d.marginRight), Ea.removeChild(g);
}
n.extend(l, {
pixelPosition: function () {
return i(), b;
},
boxSizingReliable: function () {
return null == c && i(), c;
},
pixelMarginRight: function () {
return null == c && i(), e;
},
reliableMarginLeft: function () {
return null == c && i(), f;
},
reliableMarginRight: function () {
var b,
c = h.appendChild(d.createElement("div"));
return (
(c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
(c.style.marginRight = c.style.width = "0"),
(h.style.width = "1px"),
Ea.appendChild(g),
(b = !parseFloat(a.getComputedStyle(c).marginRight)),
Ea.removeChild(g),
h.removeChild(c),
b
);
},
});
}
})();
function Fa(a, b, c) {
var d,
e,
f,
g,
h = a.style;
return (
(c = c || Ca(a)),
(g = c ? c.getPropertyValue(b) || c[b] : void 0),
("" !== g && void 0 !== g) || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && ((d = h.width), (e = h.minWidth), (f = h.maxWidth), (h.minWidth = h.maxWidth = h.width = g), (g = c.width), (h.width = d), (h.minWidth = e), (h.maxWidth = f)),
void 0 !== g ? g + "" : g
);
}
function Ga(a, b) {
return {
get: function () {
return a() ? void delete this.get : (this.get = b).apply(this, arguments);
},
};
}
var Ha = /^(none|table(?!-c[ea]).+)/,
Ia = { position: "absolute", visibility: "hidden", display: "block" },
Ja = { letterSpacing: "0", fontWeight: "400" },
Ka = ["Webkit", "O", "Moz", "ms"],
La = d.createElement("div").style;
function Ma(a) {
if (a in La) return a;
var b = a[0].toUpperCase() + a.slice(1),
c = Ka.length;
while (c--) if (((a = Ka[c] + b), a in La)) return a;
}
function Na(a, b, c) {
var d = T.exec(b);
return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
}
function Oa(a, b, c, d, e) {
for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
"margin" === c && (g += n.css(a, c + U[f], !0, e)),
d
? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e)))
: ((g += n.css(a, "padding" + U[f], !0, e)), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
return g;
}
function Pa(a, b, c) {
var d = !0,
e = "width" === b ? a.offsetWidth : a.offsetHeight,
f = Ca(a),
g = "border-box" === n.css(a, "boxSizing", !1, f);
if (0 >= e || null == e) {
if (((e = Fa(a, b, f)), (0 > e || null == e) && (e = a.style[b]), Ba.test(e))) return e;
(d = g && (l.boxSizingReliable() || e === a.style[b])), (e = parseFloat(e) || 0);
}
return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px";
}
function Qa(a, b) {
for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
(d = a[g]),
d.style &&
((f[g] = N.get(d, "olddisplay")),
(c = d.style.display),
b
? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName))))
: ((e = V(d)), ("none" === c && e) || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
for (g = 0; h > g; g++) (d = a[g]), d.style && ((b && "none" !== d.style.display && "" !== d.style.display) || (d.style.display = b ? f[g] || "" : "none"));
return a;
}
n.extend({
cssHooks: {
opacity: {
get: function (a, b) {
if (b) {
var c = Fa(a, "opacity");
return "" === c ? "1" : c;
}
},
},
},
cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
cssProps: { float: "cssFloat" },
style: function (a, b, c, d) {
if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
var e,
f,
g,
h = n.camelCase(b),
i = a.style;
return (
(b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h)),
(g = n.cssHooks[b] || n.cssHooks[h]),
void 0 === c
? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
? e
: i[b]
: ((f = typeof c),
"string" === f && (e = T.exec(c)) && e[1] && ((c = W(a, b, e)), (f = "number")),
null != c &&
c === c &&
("number" === f && (c += (e && e[3]) || (n.cssNumber[h] ? "" : "px")),
l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
(g && "set" in g && void 0 === (c = g.set(a, c, d))) || (i[b] = c)),
void 0)
);
}
},
css: function (a, b, c, d) {
var e,
f,
g,
h = n.camelCase(b);
return (
(b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h)),
(g = n.cssHooks[b] || n.cssHooks[h]),
g && "get" in g && (e = g.get(a, !0, c)),
void 0 === e && (e = Fa(a, b, d)),
"normal" === e && b in Ja && (e = Ja[b]),
"" === c || c ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e) : e
);
},
}),
n.each(["height", "width"], function (a, b) {
n.cssHooks[b] = {
get: function (a, c, d) {
return c
? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth
? Da(a, Ia, function () {
return Pa(a, b, d);
})
: Pa(a, b, d)
: void 0;
},
set: function (a, c, d) {
var e,
f = d && Ca(a),
g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && ((a.style[b] = c), (c = n.css(a, b))), Na(a, c, g);
},
};
}),
(n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
return b
? (parseFloat(Fa(a, "marginLeft")) ||
a.getBoundingClientRect().left -
Da(a, { marginLeft: 0 }, function () {
return a.getBoundingClientRect().left;
})) + "px"
: void 0;
})),
(n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
return b ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"]) : void 0;
})),
n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
(n.cssHooks[a + b] = {
expand: function (c) {
for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
return e;
},
}),
Aa.test(a) || (n.cssHooks[a + b].set = Na);
}),
n.fn.extend({
css: function (a, b) {
return K(
this,
function (a, b, c) {
var d,
e,
f = {},
g = 0;
if (n.isArray(b)) {
for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
return f;
}
return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
},
a,
b,
arguments.length > 1
);
},
show: function () {
return Qa(this, !0);
},
hide: function () {
return Qa(this);
},
toggle: function (a) {
return "boolean" == typeof a
? a
? this.show()
: this.hide()
: this.each(function () {
V(this) ? n(this).show() : n(this).hide();
});
},
});
function Ra(a, b, c, d, e) {
return new Ra.prototype.init(a, b, c, d, e);
}
(n.Tween = Ra),
(Ra.prototype = {
constructor: Ra,
init: function (a, b, c, d, e, f) {
(this.elem = a), (this.prop = c), (this.easing = e || n.easing._default), (this.options = b), (this.start = this.now = this.cur()), (this.end = d), (this.unit = f || (n.cssNumber[c] ? "" : "px"));
},
cur: function () {
var a = Ra.propHooks[this.prop];
return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
},
run: function (a) {
var b,
c = Ra.propHooks[this.prop];
return (
this.options.duration ? (this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration)) : (this.pos = b = a),
(this.now = (this.end - this.start) * b + this.start),
this.options.step && this.options.step.call(this.elem, this.now, this),
c && c.set ? c.set(this) : Ra.propHooks._default.set(this),
this
);
},
}),
(Ra.prototype.init.prototype = Ra.prototype),
(Ra.propHooks = {
_default: {
get: function (a) {
var b;
return 1 !== a.elem.nodeType || (null != a.elem[a.prop] && null == a.elem.style[a.prop]) ? a.elem[a.prop] : ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
},
set: function (a) {
n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || (null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop]) ? (a.elem[a.prop] = a.now) : n.style(a.elem, a.prop, a.now + a.unit);
},
},
}),
(Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
set: function (a) {
a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
},
}),
(n.easing = {
linear: function (a) {
return a;
},
swing: function (a) {
return 0.5 - Math.cos(a * Math.PI) / 2;
},
_default: "swing",
}),
(n.fx = Ra.prototype.init),
(n.fx.step = {});
var Sa,
Ta,
Ua = /^(?:toggle|show|hide)$/,
Va = /queueHooks$/;
function Wa() {
return (
a.setTimeout(function () {
Sa = void 0;
}),
(Sa = n.now())
);
}
function Xa(a, b) {
var c,
d = 0,
e = { height: a };
for (b = b ? 1 : 0; 4 > d; d += 2 - b) (c = U[d]), (e["margin" + c] = e["padding" + c] = a);
return b && (e.opacity = e.width = a), e;
}
function Ya(a, b, c) {
for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++) if ((d = e[f].call(c, b, a))) return d;
}
function Za(a, b, c) {
var d,
e,
f,
g,
h,
i,
j,
k,
l = this,
m = {},
o = a.style,
p = a.nodeType && V(a),
q = N.get(a, "fxshow");
c.queue ||
((h = n._queueHooks(a, "fx")),
null == h.unqueued &&
((h.unqueued = 0),
(i = h.empty.fire),
(h.empty.fire = function () {
h.unqueued || i();
})),
h.unqueued++,
l.always(function () {
l.always(function () {
h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
});
})),
1 === a.nodeType &&
("height" in b || "width" in b) &&
((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
(j = n.css(a, "display")),
(k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j),
"inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")),
c.overflow &&
((o.overflow = "hidden"),
l.always(function () {
(o.overflow = c.overflow[0]), (o.overflowX = c.overflow[1]), (o.overflowY = c.overflow[2]);
}));
for (d in b)
if (((e = b[d]), Ua.exec(e))) {
if ((delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))) {
if ("show" !== e || !q || void 0 === q[d]) continue;
p = !0;
}
m[d] = (q && q[d]) || n.style(a, d);
} else j = void 0;
if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
else {
q ? "hidden" in q && (p = q.hidden) : (q = N.access(a, "fxshow", {})),
f && (q.hidden = !p),
p
? n(a).show()
: l.done(function () {
n(a).hide();
}),
l.done(function () {
var b;
N.remove(a, "fxshow");
for (b in m) n.style(a, b, m[b]);
});
for (d in m) (g = Ya(p ? q[d] : 0, d, l)), d in q || ((q[d] = g.start), p && ((g.end = g.start), (g.start = "width" === d || "height" === d ? 1 : 0)));
}
}
function $a(a, b) {
var c, d, e, f, g;
for (c in a)
if (((d = n.camelCase(c)), (e = b[d]), (f = a[c]), n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])), c !== d && ((a[d] = f), delete a[c]), (g = n.cssHooks[d]), g && "expand" in g)) {
(f = g.expand(f)), delete a[d];
for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
} else b[d] = e;
}
function _a(a, b, c) {
var d,
e,
f = 0,
g = _a.prefilters.length,
h = n.Deferred().always(function () {
delete i.elem;
}),
i = function () {
if (e) return !1;
for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
},
j = h.promise({
elem: a,
props: n.extend({}, b),
opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c),
originalProperties: b,
originalOptions: c,
startTime: Sa || Wa(),
duration: c.duration,
tweens: [],
createTween: function (b, c) {
var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
return j.tweens.push(d), d;
},
stop: function (b) {
var c = 0,
d = b ? j.tweens.length : 0;
if (e) return this;
for (e = !0; d > c; c++) j.tweens[c].run(1);
return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
},
}),
k = j.props;
for ($a(k, j.opts.specialEasing); g > f; f++) if ((d = _a.prefilters[f].call(j, a, k, j.opts))) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
return (
n.map(k, Ya, j),
n.isFunction(j.opts.start) && j.opts.start.call(a, j),
n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
);
}
(n.Animation = n.extend(_a, {
tweeners: {
"*": [
function (a, b) {
var c = this.createTween(a, b);
return W(c.elem, a, T.exec(b), c), c;
},
],
},
tweener: function (a, b) {
n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(G));
for (var c, d = 0, e = a.length; e > d; d++) (c = a[d]), (_a.tweeners[c] = _a.tweeners[c] || []), _a.tweeners[c].unshift(b);
},
prefilters: [Za],
prefilter: function (a, b) {
b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
},
})),
(n.speed = function (a, b, c) {
var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || (!c && b) || (n.isFunction(a) && a), duration: a, easing: (c && b) || (b && !n.isFunction(b) && b) };
return (
(d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default),
(null != d.queue && d.queue !== !0) || (d.queue = "fx"),
(d.old = d.complete),
(d.complete = function () {
n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
}),
d
);
}),
n.fn.extend({
fadeTo: function (a, b, c, d) {
return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
},
animate: function (a, b, c, d) {
var e = n.isEmptyObject(a),
f = n.speed(b, c, d),
g = function () {
var b = _a(this, n.extend({}, a), f);
(e || N.get(this, "finish")) && b.stop(!0);
};
return (g.finish = g), e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
},
stop: function (a, b, c) {
var d = function (a) {
var b = a.stop;
delete a.stop, b(c);
};
return (
"string" != typeof a && ((c = b), (b = a), (a = void 0)),
b && a !== !1 && this.queue(a || "fx", []),
this.each(function () {
var b = !0,
e = null != a && a + "queueHooks",
f = n.timers,
g = N.get(this);
if (e) g[e] && g[e].stop && d(g[e]);
else for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
for (e = f.length; e--; ) f[e].elem !== this || (null != a && f[e].queue !== a) || (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
(!b && c) || n.dequeue(this, a);
})
);
},
finish: function (a) {
return (
a !== !1 && (a = a || "fx"),
this.each(function () {
var b,
c = N.get(this),
d = c[a + "queue"],
e = c[a + "queueHooks"],
f = n.timers,
g = d ? d.length : 0;
for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
delete c.finish;
})
);
},
}),
n.each(["toggle", "show", "hide"], function (a, b) {
var c = n.fn[b];
n.fn[b] = function (a, d, e) {
return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e);
};
}),
n.each({ slideDown: Xa("show"), slideUp: Xa("hide"), slideToggle: Xa("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
n.fn[a] = function (a, c, d) {
return this.animate(b, a, c, d);
};
}),
(n.timers = []),
(n.fx.tick = function () {
var a,
b = 0,
c = n.timers;
for (Sa = n.now(); b < c.length; b++) (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
c.length || n.fx.stop(), (Sa = void 0);
}),
(n.fx.timer = function (a) {
n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
}),
(n.fx.interval = 13),
(n.fx.start = function () {
Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
}),
(n.fx.stop = function () {
a.clearInterval(Ta), (Ta = null);
}),
(n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
(n.fn.delay = function (b, c) {
return (
(b = n.fx ? n.fx.speeds[b] || b : b),
(c = c || "fx"),
this.queue(c, function (c, d) {
var e = a.setTimeout(c, b);
d.stop = function () {
a.clearTimeout(e);
};
})
);
}),
(function () {
var a = d.createElement("input"),
b = d.createElement("select"),
c = b.appendChild(d.createElement("option"));
(a.type = "checkbox"),
(l.checkOn = "" !== a.value),
(l.optSelected = c.selected),
(b.disabled = !0),
(l.optDisabled = !c.disabled),
(a = d.createElement("input")),
(a.value = "t"),
(a.type = "radio"),
(l.radioValue = "t" === a.value);
})();
var ab,
bb = n.expr.attrHandle;
n.fn.extend({
attr: function (a, b) {
return K(this, n.attr, a, b, arguments.length > 1);
},
removeAttr: function (a) {
return this.each(function () {
n.removeAttr(this, a);
});
},
}),
n.extend({
attr: function (a, b, c) {
var d,
e,
f = a.nodeType;
if (3 !== f && 8 !== f && 2 !== f)
return "undefined" == typeof a.getAttribute
? n.prop(a, b, c)
: ((1 === f && n.isXMLDoc(a)) || ((b = b.toLowerCase()), (e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0))),
void 0 !== c
? null === c
? void n.removeAttr(a, b)
: e && "set" in e && void 0 !== (d = e.set(a, c, b))
? d
: (a.setAttribute(b, c + ""), c)
: e && "get" in e && null !== (d = e.get(a, b))
? d
: ((d = n.find.attr(a, b)), null == d ? void 0 : d));
},
attrHooks: {
type: {
set: function (a, b) {
if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
var c = a.value;
return a.setAttribute("type", b), c && (a.value = c), b;
}
},
},
},
removeAttr: function (a, b) {
var c,
d,
e = 0,
f = b && b.match(G);
if (f && 1 === a.nodeType) while ((c = f[e++])) (d = n.propFix[c] || c), n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
},
}),
(ab = {
set: function (a, b, c) {
return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
},
}),
n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
var c = bb[b] || n.find.attr;
bb[b] = function (a, b, d) {
var e, f;
return d || ((f = bb[b]), (bb[b] = e), (e = null != c(a, b, d) ? b.toLowerCase() : null), (bb[b] = f)), e;
};
});
var cb = /^(?:input|select|textarea|button)$/i,
db = /^(?:a|area)$/i;
n.fn.extend({
prop: function (a, b) {
return K(this, n.prop, a, b, arguments.length > 1);
},
removeProp: function (a) {
return this.each(function () {
delete this[n.propFix[a] || a];
});
},
}),
n.extend({
prop: function (a, b, c) {
var d,
e,
f = a.nodeType;
if (3 !== f && 8 !== f && 2 !== f)
return (
(1 === f && n.isXMLDoc(a)) || ((b = n.propFix[b] || b), (e = n.propHooks[b])),
void 0 !== c ? (e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a[b] = c)) : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
);
},
propHooks: {
tabIndex: {
get: function (a) {
var b = n.find.attr(a, "tabindex");
return b ? parseInt(b, 10) : cb.test(a.nodeName) || (db.test(a.nodeName) && a.href) ? 0 : -1;
},
},
},
propFix: { for: "htmlFor", class: "className" },
}),
l.optSelected ||
(n.propHooks.selected = {
get: function (a) {
var b = a.parentNode;
return b && b.parentNode && b.parentNode.selectedIndex, null;
},
set: function (a) {
var b = a.parentNode;
b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
},
}),
n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
n.propFix[this.toLowerCase()] = this;
});
var eb = /[\t\r\n\f]/g;
function fb(a) {
return (a.getAttribute && a.getAttribute("class")) || "";
}
n.fn.extend({
addClass: function (a) {
var b,
c,
d,
e,
f,
g,
h,
i = 0;
if (n.isFunction(a))
return this.each(function (b) {
n(this).addClass(a.call(this, b, fb(this)));
});
if ("string" == typeof a && a) {
b = a.match(G) || [];
while ((c = this[i++]))
if (((e = fb(c)), (d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")))) {
g = 0;
while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
(h = n.trim(d)), e !== h && c.setAttribute("class", h);
}
}
return this;
},
removeClass: function (a) {
var b,
c,
d,
e,
f,
g,
h,
i = 0;
if (n.isFunction(a))
return this.each(function (b) {
n(this).removeClass(a.call(this, b, fb(this)));
});
if (!arguments.length) return this.attr("class", "");
if ("string" == typeof a && a) {
b = a.match(G) || [];
while ((c = this[i++]))
if (((e = fb(c)), (d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")))) {
g = 0;
while ((f = b[g++])) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
(h = n.trim(d)), e !== h && c.setAttribute("class", h);
}
}
return this;
},
toggleClass: function (a, b) {
var c = typeof a;
return "boolean" == typeof b && "string" === c
? b
? this.addClass(a)
: this.removeClass(a)
: n.isFunction(a)
? this.each(function (c) {
n(this).toggleClass(a.call(this, c, fb(this), b), b);
})
: this.each(function () {
var b, d, e, f;
if ("string" === c) {
(d = 0), (e = n(this)), (f = a.match(G) || []);
while ((b = f[d++])) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
} else (void 0 !== a && "boolean" !== c) || ((b = fb(this)), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
});
},
hasClass: function (a) {
var b,
c,
d = 0;
b = " " + a + " ";
while ((c = this[d++])) if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
return !1;
},
});
var gb = /\r/g,
hb = /[\x20\t\r\n\f]+/g;
n.fn.extend({
val: function (a) {
var b,
c,
d,
e = this[0];
{
if (arguments.length)
return (
(d = n.isFunction(a)),
this.each(function (c) {
var e;
1 === this.nodeType &&
((e = d ? a.call(this, c, n(this).val()) : a),
null == e
? (e = "")
: "number" == typeof e
? (e += "")
: n.isArray(e) &&
(e = n.map(e, function (a) {
return null == a ? "" : a + "";
})),
(b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()]),
(b && "set" in b && void 0 !== b.set(this, e, "value")) || (this.value = e));
})
);
if (e) return (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]), b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : ((c = e.value), "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c);
}
},
}),
n.extend({
valHooks: {
option: {
get: function (a) {
var b = n.find.attr(a, "value");
return null != b ? b : n.trim(n.text(a)).replace(hb, " ");
},
},
select: {
get: function (a) {
for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
if (((c = d[i]), (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup")))) {
if (((b = n(c).val()), f)) return b;
g.push(b);
}
return g;
},
set: function (a, b) {
var c,
d,
e = a.options,
f = n.makeArray(b),
g = e.length;
while (g--) (d = e[g]), (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
return c || (a.selectedIndex = -1), f;
},
},
},
}),
n.each(["radio", "checkbox"], function () {
(n.valHooks[this] = {
set: function (a, b) {
return n.isArray(b) ? (a.checked = n.inArray(n(a).val(), b) > -1) : void 0;
},
}),
l.checkOn ||
(n.valHooks[this].get = function (a) {
return null === a.getAttribute("value") ? "on" : a.value;
});
});
var ib = /^(?:focusinfocus|focusoutblur)$/;
n.extend(n.event, {
trigger: function (b, c, e, f) {
var g,
h,
i,
j,
l,
m,
o,
p = [e || d],
q = k.call(b, "type") ? b.type : b,
r = k.call(b, "namespace") ? b.namespace.split(".") : [];
if (
((h = i = e = e || d),
3 !== e.nodeType &&
8 !== e.nodeType &&
!ib.test(q + n.event.triggered) &&
(q.indexOf(".") > -1 && ((r = q.split(".")), (q = r.shift()), r.sort()),
(l = q.indexOf(":") < 0 && "on" + q),
(b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
(b.isTrigger = f ? 2 : 3),
(b.namespace = r.join(".")),
(b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
(b.result = void 0),
b.target || (b.target = e),
(c = null == c ? [b] : n.makeArray(c, [b])),
(o = n.event.special[q] || {}),
f || !o.trigger || o.trigger.apply(e, c) !== !1))
) {
if (!f && !o.noBubble && !n.isWindow(e)) {
for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), (i = h);
i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a);
}
g = 0;
while ((h = p[g++]) && !b.isPropagationStopped())
(b.type = g > 1 ? j : o.bindType || q),
(m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle")),
m && m.apply(h, c),
(m = l && h[l]),
m && m.apply && L(h) && ((b.result = m.apply(h, c)), b.result === !1 && b.preventDefault());
return (
(b.type = q),
f ||
b.isDefaultPrevented() ||
(o._default && o._default.apply(p.pop(), c) !== !1) ||
!L(e) ||
(l && n.isFunction(e[q]) && !n.isWindow(e) && ((i = e[l]), i && (e[l] = null), (n.event.triggered = q), e[q](), (n.event.triggered = void 0), i && (e[l] = i))),
b.result
);
}
},
simulate: function (a, b, c) {
var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });
n.event.trigger(d, null, b);
},
}),
n.fn.extend({
trigger: function (a, b) {
return this.each(function () {
n.event.trigger(a, b, this);
});
},
triggerHandler: function (a, b) {
var c = this[0];
return c ? n.event.trigger(a, b, c, !0) : void 0;
},
}),
n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (
a,
b
) {
n.fn[b] = function (a, c) {
return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
};
}),
n.fn.extend({
hover: function (a, b) {
return this.mouseenter(a).mouseleave(b || a);
},
}),
(l.focusin = "onfocusin" in a),
l.focusin ||
n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
var c = function (a) {
n.event.simulate(b, a.target, n.event.fix(a));
};
n.event.special[b] = {
setup: function () {
var d = this.ownerDocument || this,
e = N.access(d, b);
e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
},
teardown: function () {
var d = this.ownerDocument || this,
e = N.access(d, b) - 1;
e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b));
},
};
});
var jb = a.location,
kb = n.now(),
lb = /\?/;
(n.parseJSON = function (a) {
return JSON.parse(a + "");
}),
(n.parseXML = function (b) {
var c;
if (!b || "string" != typeof b) return null;
try {
c = new a.DOMParser().parseFromString(b, "text/xml");
} catch (d) {
c = void 0;
}
return (c && !c.getElementsByTagName("parsererror").length) || n.error("Invalid XML: " + b), c;
});
var mb = /#.*$/,
nb = /([?&])_=[^&]*/,
ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
qb = /^(?:GET|HEAD)$/,
rb = /^\/\//,
sb = {},
tb = {},
ub = "*/".concat("*"),
vb = d.createElement("a");
vb.href = jb.href;
function wb(a) {
return function (b, c) {
"string" != typeof b && ((c = b), (b = "*"));
var d,
e = 0,
f = b.toLowerCase().match(G) || [];
if (n.isFunction(c)) while ((d = f[e++])) "+" === d[0] ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
};
}
function xb(a, b, c, d) {
var e = {},
f = a === tb;
function g(h) {
var i;
return (
(e[h] = !0),
n.each(a[h] || [], function (a, h) {
var j = h(b, c, d);
return "string" != typeof j || f || e[j] ? (f ? !(i = j) : void 0) : (b.dataTypes.unshift(j), g(j), !1);
}),
i
);
}
return g(b.dataTypes[0]) || (!e["*"] && g("*"));
}
function yb(a, b) {
var c,
d,
e = n.ajaxSettings.flatOptions || {};
for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
return d && n.extend(!0, a, d), a;
}
function zb(a, b, c) {
var d,
e,
f,
g,
h = a.contents,
i = a.dataTypes;
while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
if (d)
for (e in h)
if (h[e] && h[e].test(d)) {
i.unshift(e);
break;
}
if (i[0] in c) f = i[0];
else {
for (e in c) {
if (!i[0] || a.converters[e + " " + i[0]]) {
f = e;
break;
}
g || (g = e);
}
f = f || g;
}
return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
}
function Ab(a, b, c, d) {
var e,
f,
g,
h,
i,
j = {},
k = a.dataTypes.slice();
if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
f = k.shift();
while (f)
if ((a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), (i = f), (f = k.shift())))
if ("*" === f) f = i;
else if ("*" !== i && i !== f) {
if (((g = j[i + " " + f] || j["* " + f]), !g))
for (e in j)
if (((h = e.split(" ")), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))) {
g === !0 ? (g = j[e]) : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
break;
}
if (g !== !0)
if (g && a["throws"]) b = g(b);
else
try {
b = g(b);
} catch (l) {
return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
}
}
return { state: "success", data: b };
}
n.extend({
active: 0,
lastModified: {},
etag: {},
ajaxSettings: {
url: jb.href,
type: "GET",
isLocal: pb.test(jb.protocol),
global: !0,
processData: !0,
async: !0,
contentType: "application/x-www-form-urlencoded; charset=UTF-8",
accepts: { "*": ub, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML },
flatOptions: { url: !0, context: !0 },
},
ajaxSetup: function (a, b) {
return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a);
},
ajaxPrefilter: wb(sb),
ajaxTransport: wb(tb),
ajax: function (b, c) {
"object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
var e,
f,
g,
h,
i,
j,
k,
l,
m = n.ajaxSetup({}, c),
o = m.context || m,
p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
q = n.Deferred(),
r = n.Callbacks("once memory"),
s = m.statusCode || {},
t = {},
u = {},
v = 0,
w = "canceled",
x = {
readyState: 0,
getResponseHeader: function (a) {
var b;
if (2 === v) {
if (!h) {
h = {};
while ((b = ob.exec(g))) h[b[1].toLowerCase()] = b[2];
}
b = h[a.toLowerCase()];
}
return null == b ? null : b;
},
getAllResponseHeaders: function () {
return 2 === v ? g : null;
},
setRequestHeader: function (a, b) {
var c = a.toLowerCase();
return v || ((a = u[c] = u[c] || a), (t[a] = b)), this;
},
overrideMimeType: function (a) {
return v || (m.mimeType = a), this;
},
statusCode: function (a) {
var b;
if (a)
if (2 > v) for (b in a) s[b] = [s[b], a[b]];
else x.always(a[x.status]);
return this;
},
abort: function (a) {
var b = a || w;
return e && e.abort(b), z(0, b), this;
},
};
if (
((q.promise(x).complete = r.add),
(x.success = x.done),
(x.error = x.fail),
(m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//")),
(m.type = c.method || c.type || m.method || m.type),
(m.dataTypes = n
.trim(m.dataType || "*")
.toLowerCase()
.match(G) || [""]),
null == m.crossDomain)
) {
j = d.createElement("a");
try {
(j.href = m.url), (j.href = j.href), (m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host);
} catch (y) {
m.crossDomain = !0;
}
}
if ((m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v)) return x;
(k = n.event && m.global),
k && 0 === n.active++ && n.event.trigger("ajaxStart"),
(m.type = m.type.toUpperCase()),
(m.hasContent = !qb.test(m.type)),
(f = m.url),
m.hasContent || (m.data && ((f = m.url += (lb.test(f) ? "&" : "?") + m.data), delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)),
m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])),
((m.data && m.hasContent && m.contentType !== !1) || c.contentType) && x.setRequestHeader("Content-Type", m.contentType),
x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
w = "abort";
for (l in { success: 1, error: 1, complete: 1 }) x[l](m[l]);
if ((e = xb(tb, m, c, x))) {
if (((x.readyState = 1), k && p.trigger("ajaxSend", [x, m]), 2 === v)) return x;
m.async &&
m.timeout > 0 &&
(i = a.setTimeout(function () {
x.abort("timeout");
}, m.timeout));
try {
(v = 1), e.send(t, z);
} catch (y) {
if (!(2 > v)) throw y;
z(-1, y);
}
} else z(-1, "No Transport");
function z(b, c, d, h) {
var j,
l,
t,
u,
w,
y = c;
2 !== v &&
((v = 2),
i && a.clearTimeout(i),
(e = void 0),
(g = h || ""),
(x.readyState = b > 0 ? 4 : 0),
(j = (b >= 200 && 300 > b) || 304 === b),
d && (u = zb(m, x, d)),
(u = Ab(m, u, x, j)),
j
? (m.ifModified && ((w = x.getResponseHeader("Last-Modified")), w && (n.lastModified[f] = w), (w = x.getResponseHeader("etag")), w && (n.etag[f] = w)),
204 === b || "HEAD" === m.type ? (y = "nocontent") : 304 === b ? (y = "notmodified") : ((y = u.state), (l = u.data), (t = u.error), (j = !t)))
: ((t = y), (!b && y) || ((y = "error"), 0 > b && (b = 0))),
(x.status = b),
(x.statusText = (c || y) + ""),
j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]),
x.statusCode(s),
(s = void 0),
k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]),
r.fireWith(o, [x, y]),
k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")));
}
return x;
},
getJSON: function (a, b, c) {
return n.get(a, b, c, "json");
},
getScript: function (a, b) {
return n.get(a, void 0, b, "script");
},
}),
n.each(["get", "post"], function (a, b) {
n[b] = function (a, c, d, e) {
return n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a));
};
}),
(n._evalUrl = function (a) {
return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
}),
n.fn.extend({
wrapAll: function (a) {
var b;
return n.isFunction(a)
? this.each(function (b) {
n(this).wrapAll(a.call(this, b));
})
: (this[0] &&
((b = n(a, this[0].ownerDocument).eq(0).clone(!0)),
this[0].parentNode && b.insertBefore(this[0]),
b
.map(function () {
var a = this;
while (a.firstElementChild) a = a.firstElementChild;
return a;
})
.append(this)),
this);
},
wrapInner: function (a) {
return n.isFunction(a)
? this.each(function (b) {
n(this).wrapInner(a.call(this, b));
})
: this.each(function () {
var b = n(this),
c = b.contents();
c.length ? c.wrapAll(a) : b.append(a);
});
},
wrap: function (a) {
var b = n.isFunction(a);
return this.each(function (c) {
n(this).wrapAll(b ? a.call(this, c) : a);
});
},
unwrap: function () {
return this.parent()
.each(function () {
n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
})
.end();
},
}),
(n.expr.filters.hidden = function (a) {
return !n.expr.filters.visible(a);
}),
(n.expr.filters.visible = function (a) {
return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
});
var Bb = /%20/g,
Cb = /\[\]$/,
Db = /\r?\n/g,
Eb = /^(?:submit|button|image|reset|file)$/i,
Fb = /^(?:input|select|textarea|keygen)/i;
function Gb(a, b, c, d) {
var e;
if (n.isArray(b))
n.each(b, function (b, e) {
c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
});
else if (c || "object" !== n.type(b)) d(a, b);
else for (e in b) Gb(a + "[" + e + "]", b[e], c, d);
}
(n.param = function (a, b) {
var c,
d = [],
e = function (a, b) {
(b = n.isFunction(b) ? b() : null == b ? "" : b), (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
};
if ((void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || (a.jquery && !n.isPlainObject(a))))
n.each(a, function () {
e(this.name, this.value);
});
else for (c in a) Gb(c, a[c], b, e);
return d.join("&").replace(Bb, "+");
}),
n.fn.extend({
serialize: function () {
return n.param(this.serializeArray());
},
serializeArray: function () {
return this.map(function () {
var a = n.prop(this, "elements");
return a ? n.makeArray(a) : this;
})
.filter(function () {
var a = this.type;
return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a));
})
.map(function (a, b) {
var c = n(this).val();
return null == c
? null
: n.isArray(c)
? n.map(c, function (a) {
return { name: b.name, value: a.replace(Db, "\r\n") };
})
: { name: b.name, value: c.replace(Db, "\r\n") };
})
.get();
},
}),
(n.ajaxSettings.xhr = function () {
try {
return new a.XMLHttpRequest();
} catch (b) {}
});
var Hb = { 0: 200, 1223: 204 },
Ib = n.ajaxSettings.xhr();
(l.cors = !!Ib && "withCredentials" in Ib),
(l.ajax = Ib = !!Ib),
n.ajaxTransport(function (b) {
var c, d;
return l.cors || (Ib && !b.crossDomain)
? {
send: function (e, f) {
var g,
h = b.xhr();
if ((h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)) for (g in b.xhrFields) h[g] = b.xhrFields[g];
b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
for (g in e) h.setRequestHeader(g, e[g]);
(c = function (a) {
return function () {
c &&
((c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null),
"abort" === a
? h.abort()
: "error" === a
? "number" != typeof h.status
? f(0, "error")
: f(h.status, h.statusText)
: f(
Hb[h.status] || h.status,
h.statusText,
"text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText },
h.getAllResponseHeaders()
));
};
}),
(h.onload = c()),
(d = h.onerror = c("error")),
void 0 !== h.onabort
? (h.onabort = d)
: (h.onreadystatechange = function () {
4 === h.readyState &&
a.setTimeout(function () {
c && d();
});
}),
(c = c("abort"));
try {
h.send((b.hasContent && b.data) || null);
} catch (i) {
if (c) throw i;
}
},
abort: function () {
c && c();
},
}
: void 0;
}),
n.ajaxSetup({
accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
contents: { script: /\b(?:java|ecma)script\b/ },
converters: {
"text script": function (a) {
return n.globalEval(a), a;
},
},
}),
n.ajaxPrefilter("script", function (a) {
void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
}),
n.ajaxTransport("script", function (a) {
if (a.crossDomain) {
var b, c;
return {
send: function (e, f) {
(b = n("<script>")
.prop({ charset: a.scriptCharset, src: a.url })
.on(
"load error",
(c = function (a) {
b.remove(), (c = null), a && f("error" === a.type ? 404 : 200, a.type);
})
)),
d.head.appendChild(b[0]);
},
abort: function () {
c && c();
},
};
}
});
var Jb = [],
Kb = /(=)\?(?=&|$)|\?\?/;
n.ajaxSetup({
jsonp: "callback",
jsonpCallback: function () {
var a = Jb.pop() || n.expando + "_" + kb++;
return (this[a] = !0), a;
},
}),
n.ajaxPrefilter("json jsonp", function (b, c, d) {
var e,
f,
g,
h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
return h || "jsonp" === b.dataTypes[0]
? ((e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback),
h ? (b[h] = b[h].replace(Kb, "$1" + e)) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
(b.converters["script json"] = function () {
return g || n.error(e + " was not called"), g[0];
}),
(b.dataTypes[0] = "json"),
(f = a[e]),
(a[e] = function () {
g = arguments;
}),
d.always(function () {
void 0 === f ? n(a).removeProp(e) : (a[e] = f), b[e] && ((b.jsonpCallback = c.jsonpCallback), Jb.push(e)), g && n.isFunction(f) && f(g[0]), (g = f = void 0);
}),
"script")
: void 0;
}),
(n.parseHTML = function (a, b, c) {
if (!a || "string" != typeof a) return null;
"boolean" == typeof b && ((c = b), (b = !1)), (b = b || d);
var e = x.exec(a),
f = !c && [];
return e ? [b.createElement(e[1])] : ((e = ca([a], b, f)), f && f.length && n(f).remove(), n.merge([], e.childNodes));
});
var Lb = n.fn.load;
(n.fn.load = function (a, b, c) {
if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
var d,
e,
f,
g = this,
h = a.indexOf(" ");
return (
h > -1 && ((d = n.trim(a.slice(h))), (a = a.slice(0, h))),
n.isFunction(b) ? ((c = b), (b = void 0)) : b && "object" == typeof b && (e = "POST"),
g.length > 0 &&
n
.ajax({ url: a, type: e || "GET", dataType: "html", data: b })
.done(function (a) {
(f = arguments), g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
})
.always(
c &&
function (a, b) {
g.each(function () {
c.apply(this, f || [a.responseText, b, a]);
});
}
),
this
);
}),
n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
n.fn[b] = function (a) {
return this.on(b, a);
};
}),
(n.expr.filters.animated = function (a) {
return n.grep(n.timers, function (b) {
return a === b.elem;
}).length;
});
function Mb(a) {
return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
}
(n.offset = {
setOffset: function (a, b, c) {
var d,
e,
f,
g,
h,
i,
j,
k = n.css(a, "position"),
l = n(a),
m = {};
"static" === k && (a.style.position = "relative"),
(h = l.offset()),
(f = n.css(a, "top")),
(i = n.css(a, "left")),
(j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1),
j ? ((d = l.position()), (g = d.top), (e = d.left)) : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
null != b.top && (m.top = b.top - h.top + g),
null != b.left && (m.left = b.left - h.left + e),
"using" in b ? b.using.call(a, m) : l.css(m);
},
}),
n.fn.extend({
offset: function (a) {
if (arguments.length)
return void 0 === a
? this
: this.each(function (b) {
n.offset.setOffset(this, a, b);
});
var b,
c,
d = this[0],
e = { top: 0, left: 0 },
f = d && d.ownerDocument;
if (f) return (b = f.documentElement), n.contains(b, d) ? ((e = d.getBoundingClientRect()), (c = Mb(f)), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
},
position: function () {
if (this[0]) {
var a,
b,
c = this[0],
d = { top: 0, left: 0 };
return (
"fixed" === n.css(c, "position")
? (b = c.getBoundingClientRect())
: ((a = this.offsetParent()), (b = this.offset()), n.nodeName(a[0], "html") || (d = a.offset()), (d.top += n.css(a[0], "borderTopWidth", !0)), (d.left += n.css(a[0], "borderLeftWidth", !0))),
{ top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) }
);
}
},
offsetParent: function () {
return this.map(function () {
var a = this.offsetParent;
while (a && "static" === n.css(a, "position")) a = a.offsetParent;
return a || Ea;
});
},
}),
n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
var c = "pageYOffset" === b;
n.fn[a] = function (d) {
return K(
this,
function (a, d, e) {
var f = Mb(a);
return void 0 === e ? (f ? f[b] : a[d]) : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : (a[d] = e));
},
a,
d,
arguments.length
);
};
}),
n.each(["top", "left"], function (a, b) {
n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
return c ? ((c = Fa(a, b)), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0;
});
}),
n.each({ Height: "height", Width: "width" }, function (a, b) {
n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
n.fn[d] = function (d, e) {
var f = arguments.length && (c || "boolean" != typeof d),
g = c || (d === !0 || e === !0 ? "margin" : "border");
return K(
this,
function (b, c, d) {
var e;
return n.isWindow(b)
? b.document.documentElement["client" + a]
: 9 === b.nodeType
? ((e = b.documentElement), Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a]))
: void 0 === d
? n.css(b, c, g)
: n.style(b, c, d, g);
},
b,
f ? d : void 0,
f,
null
);
};
});
}),
n.fn.extend({
bind: function (a, b, c) {
return this.on(a, null, b, c);
},
unbind: function (a, b) {
return this.off(a, null, b);
},
delegate: function (a, b, c, d) {
return this.on(b, a, c, d);
},
undelegate: function (a, b, c) {
return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
},
size: function () {
return this.length;
},
}),
(n.fn.andSelf = n.fn.addBack),
"function" == typeof define &&
define.amd &&
define("jquery", [], function () {
return n;
});
var Nb = a.jQuery,
Ob = a.$;
return (
(n.noConflict = function (b) {
return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n;
}),
b || (a.jQuery = a.$ = n),
n
);
});
window.yii = (function ($) {
var pub = {
reloadableScripts: [],
clickableSelector: 'a, button, input[type="submit"], input[type="button"], input[type="reset"], ' + 'input[type="image"]',
changeableSelector: "select, input, textarea",
getCsrfParam: function () {
return $("meta[name=csrf-param]").attr("content");
},
getCsrfToken: function () {
return $("meta[name=csrf-token]").attr("content");
},
setCsrfToken: function (name, value) {
$("meta[name=csrf-param]").attr("content", name);
$("meta[name=csrf-token]").attr("content", value);
},
refreshCsrfToken: function () {
var token = pub.getCsrfToken();
if (token) {
$('form input[name="' + pub.getCsrfParam() + '"]').val(token);
}
},
confirm: function (message, ok, cancel) {
if (window.confirm(message)) {
!ok || ok();
} else {
!cancel || cancel();
}
},
handleAction: function ($e, event) {
var $form = $e.attr("data-form") ? $("#" + $e.attr("data-form")) : $e.closest("form"),
method = !$e.data("method") && $form ? $form.attr("method") : $e.data("method"),
action = $e.attr("href"),
isValidAction = action && action !== "#",
params = $e.data("params"),
areValidParams = params && $.isPlainObject(params),
pjax = $e.data("pjax"),
usePjax = pjax !== undefined && pjax !== 0 && $.support.pjax,
pjaxContainer,
pjaxOptions = {};
if (usePjax) {
pjaxContainer = $e.data("pjax-container") || $e.closest("[data-pjax-container]");
if (!pjaxContainer.length) {
pjaxContainer = $("body");
}
pjaxOptions = {
container: pjaxContainer,
push: !!$e.data("pjax-push-state"),
replace: !!$e.data("pjax-replace-state"),
scrollTo: $e.data("pjax-scrollto"),
pushRedirect: $e.data("pjax-push-redirect"),
replaceRedirect: $e.data("pjax-replace-redirect"),
skipOuterContainers: $e.data("pjax-skip-outer-containers"),
timeout: $e.data("pjax-timeout"),
originalEvent: event,
originalTarget: $e,
};
}
if (method === undefined) {
if (isValidAction) {
usePjax ? $.pjax.click(event, pjaxOptions) : window.location.assign(action);
} else if ($e.is(":submit") && $form.length) {
if (usePjax) {
$form.on("submit", function (e) {
$.pjax.submit(e, pjaxOptions);
});
}
$form.trigger("submit");
}
return;
}
var oldMethod,
oldAction,
newForm = !$form.length;
if (!newForm) {
oldMethod = $form.attr("method");
$form.attr("method", method);
if (isValidAction) {
oldAction = $form.attr("action");
$form.attr("action", action);
}
} else {
if (!isValidAction) {
action = pub.getCurrentUrl();
}
$form = $("<form/>", { method: method, action: action });
var target = $e.attr("target");
if (target) {
$form.attr("target", target);
}
if (!/(get|post)/i.test(method)) {
$form.append($("<input/>", { name: "_method", value: method, type: "hidden" }));
method = "post";
$form.attr("method", method);
}
if (/post/i.test(method)) {
var csrfParam = pub.getCsrfParam();
if (csrfParam) {
$form.append($("<input/>", { name: csrfParam, value: pub.getCsrfToken(), type: "hidden" }));
}
}
$form.hide().appendTo("body");
}
var activeFormData = $form.data("yiiActiveForm");
if (activeFormData) {
activeFormData.submitObject = $e;
}
if (areValidParams) {
$.each(params, function (name, value) {
$form.append($("<input/>").attr({ name: name, value: value, type: "hidden" }));
});
}
if (usePjax) {
$form.on("submit", function (e) {
$.pjax.submit(e, pjaxOptions);
});
}
$form.trigger("submit");
$.when($form.data("yiiSubmitFinalizePromise")).then(function () {
if (newForm) {
$form.remove();
return;
}
if (oldAction !== undefined) {
$form.attr("action", oldAction);
}
$form.attr("method", oldMethod);
if (areValidParams) {
$.each(params, function (name) {
$('input[name="' + name + '"]', $form).remove();
});
}
});
},
getQueryParams: function (url) {
var pos = url.indexOf("?");
if (pos < 0) {
return {};
}
var pairs = url
.substring(pos + 1)
.split("#")[0]
.split("&"),
params = {};
for (var i = 0, len = pairs.length; i < len; i++) {
var pair = pairs[i].split("=");
var name = decodeURIComponent(pair[0].replace(/\+/g, "%20"));
var value = decodeURIComponent(pair[1].replace(/\+/g, "%20"));
if (!name.length) {
continue;
}
if (params[name] === undefined) {
params[name] = value || "";
} else {
if (!$.isArray(params[name])) {
params[name] = [params[name]];
}
params[name].push(value || "");
}
}
return params;
},
initModule: function (module) {
if (module.isActive !== undefined && !module.isActive) {
return;
}
if ($.isFunction(module.init)) {
module.init();
}
$.each(module, function () {
if ($.isPlainObject(this)) {
pub.initModule(this);
}
});
},
init: function () {
initCsrfHandler();
initRedirectHandler();
initAssetFilters();
initDataMethods();
},
getBaseCurrentUrl: function () {
return window.location.protocol + "//" + window.location.host;
},
getCurrentUrl: function () {
return window.location.href;
},
};
function initCsrfHandler() {
$.ajaxPrefilter(function (options, originalOptions, xhr) {
if (!options.crossDomain && pub.getCsrfParam()) {
xhr.setRequestHeader("X-CSRF-Token", pub.getCsrfToken());
}
});
pub.refreshCsrfToken();
}
function initRedirectHandler() {
$(document).ajaxComplete(function (event, xhr) {
var url = xhr && xhr.getResponseHeader("X-Redirect");
if (url) {
window.location.assign(url);
}
});
}
function initAssetFilters() {
var loadedScripts = {};
$("script[src]").each(function () {
var url = getAbsoluteUrl(this.src);
loadedScripts[url] = true;
});
$.ajaxPrefilter("script", function (options, originalOptions, xhr) {
if (options.dataType == "jsonp") {
return;
}
var url = getAbsoluteUrl(options.url),
forbiddenRepeatedLoad = loadedScripts[url] === true && !isReloadableAsset(url),
cleanupRunning = loadedScripts[url] !== undefined && loadedScripts[url]["xhrDone"] === true;
if (forbiddenRepeatedLoad || cleanupRunning) {
xhr.abort();
return;
}
if (loadedScripts[url] === undefined || loadedScripts[url] === true) {
loadedScripts[url] = { xhrList: [], xhrDone: false };
}
xhr.done(function (data, textStatus, jqXHR) {
if (loadedScripts[jqXHR.yiiUrl]["xhrDone"] === true) {
return;
}
loadedScripts[jqXHR.yiiUrl]["xhrDone"] = true;
for (var i = 0, len = loadedScripts[jqXHR.yiiUrl]["xhrList"].length; i < len; i++) {
var singleXhr = loadedScripts[jqXHR.yiiUrl]["xhrList"][i];
if (singleXhr && singleXhr.readyState !== XMLHttpRequest.DONE) {
singleXhr.abort();
}
}
loadedScripts[jqXHR.yiiUrl] = true;
}).fail(function (jqXHR, textStatus) {
if (textStatus === "abort") {
return;
}
delete loadedScripts[jqXHR.yiiUrl]["xhrList"][jqXHR.yiiIndex];
var allFailed = true;
for (var i = 0, len = loadedScripts[jqXHR.yiiUrl]["xhrList"].length; i < len; i++) {
if (loadedScripts[jqXHR.yiiUrl]["xhrList"][i]) {
allFailed = false;
}
}
if (allFailed) {
delete loadedScripts[jqXHR.yiiUrl];
}
});
xhr.yiiIndex = loadedScripts[url]["xhrList"].length;
xhr.yiiUrl = url;
loadedScripts[url]["xhrList"][xhr.yiiIndex] = xhr;
});
$(document).ajaxComplete(function () {
var styleSheets = [];
$("link[rel=stylesheet]").each(function () {
var url = getAbsoluteUrl(this.href);
if (isReloadableAsset(url)) {
return;
}
$.inArray(url, styleSheets) === -1 ? styleSheets.push(url) : $(this).remove();
});
});
}
function initDataMethods() {
var handler = function (event) {
var $this = $(this),
method = $this.data("method"),
message = $this.data("confirm"),
form = $this.data("form");
if (method === undefined && message === undefined && form === undefined) {
return true;
}
if (message !== undefined) {
$.proxy(pub.confirm, this)(message, function () {
pub.handleAction($this, event);
});
} else {
pub.handleAction($this, event);
}
event.stopImmediatePropagation();
return false;
};
$(document).on("click.yii", pub.clickableSelector, handler).on("change.yii", pub.changeableSelector, handler);
}
function isReloadableAsset(url) {
for (var i = 0; i < pub.reloadableScripts.length; i++) {
var rule = getAbsoluteUrl(pub.reloadableScripts[i]);
var match = new RegExp("^" + escapeRegExp(rule).split("\\*").join(".*") + "$").test(url);
if (match === true) {
return true;
}
}
return false;
}
function escapeRegExp(str) {
return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
function getAbsoluteUrl(url) {
return url.charAt(0) === "/" ? pub.getBaseCurrentUrl() + url : url;
}
return pub;
})(window.jQuery);
window.jQuery(function () {
window.yii.initModule(window.yii);
});
/*!
* Bootstrap v3.3.7 (http://getbootstrap.com)
* Copyright 2011-2016 Twitter, Inc.
* Licensed under the MIT license
*/
if (typeof jQuery === "undefined") {
throw new Error("Bootstrap's JavaScript requires jQuery");
}
+(function ($) {
"use strict";
var version = $.fn.jquery.split(" ")[0].split(".");
if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || version[0] > 3) {
throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}
})(jQuery);
+(function ($) {
"use strict";
function transitionEnd() {
var el = document.createElement("bootstrap");
var transEndEventNames = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
for (var name in transEndEventNames) {
if (el.style[name] !== undefined) {
return { end: transEndEventNames[name] };
}
}
return false;
}
$.fn.emulateTransitionEnd = function (duration) {
var called = false;
var $el = this;
$(this).one("bsTransitionEnd", function () {
called = true;
});
var callback = function () {
if (!called) $($el).trigger($.support.transition.end);
};
setTimeout(callback, duration);
return this;
};
$(function () {
$.support.transition = transitionEnd();
if (!$.support.transition) return;
$.event.special.bsTransitionEnd = {
bindType: $.support.transition.end,
delegateType: $.support.transition.end,
handle: function (e) {
if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
},
};
});
})(jQuery);
+(function ($) {
"use strict";
var dismiss = '[data-dismiss="alert"]';
var Alert = function (el) {
$(el).on("click", dismiss, this.close);
};
Alert.VERSION = "3.3.7";
Alert.TRANSITION_DURATION = 150;
Alert.prototype.close = function (e) {
var $this = $(this);
var selector = $this.attr("data-target");
if (!selector) {
selector = $this.attr("href");
selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "");
}
var $parent = $(selector === "#" ? [] : selector);
if (e) e.preventDefault();
if (!$parent.length) {
$parent = $this.closest(".alert");
}
$parent.trigger((e = $.Event("close.bs.alert")));
if (e.isDefaultPrevented()) return;
$parent.removeClass("in");
function removeElement() {
$parent.detach().trigger("closed.bs.alert").remove();
}
$.support.transition && $parent.hasClass("fade") ? $parent.one("bsTransitionEnd", removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
};
function Plugin(option) {
return this.each(function () {
var $this = $(this);
var data = $this.data("bs.alert");
if (!data) $this.data("bs.alert", (data = new Alert(this)));
if (typeof option == "string") data[option].call($this);
});
}
var old = $.fn.alert;
$.fn.alert = Plugin;
$.fn.alert.Constructor = Alert;
$.fn.alert.noConflict = function () {
$.fn.alert = old;
return this;
};
$(document).on("click.bs.alert.data-api", dismiss, Alert.prototype.close);
})(jQuery);
+(function ($) {
"use strict";
var Button = function (element, options) {
this.$element = $(element);
this.options = $.extend({}, Button.DEFAULTS, options);
this.isLoading = false;
};
Button.VERSION = "3.3.7";
Button.DEFAULTS = { loadingText: "loading..." };
Button.prototype.setState = function (state) {
var d = "disabled";
var $el = this.$element;
var val = $el.is("input") ? "val" : "html";
var data = $el.data();
state += "Text";
if (data.resetText == null) $el.data("resetText", $el[val]());
setTimeout(
$.proxy(function () {
$el[val](data[state] == null ? this.options[state] : data[state]);
if (state == "loadingText") {
this.isLoading = true;
$el.addClass(d).attr(d, d).prop(d, true);
} else if (this.isLoading) {
this.isLoading = false;
$el.removeClass(d).removeAttr(d).prop(d, false);
}
}, this),
0
);
};
Button.prototype.toggle = function () {
var changed = true;
var $parent = this.$element.closest('[data-toggle="buttons"]');
if ($parent.length) {
var $input = this.$element.find("input");
if ($input.prop("type") == "radio") {
if ($input.prop("checked")) changed = false;
$parent.find(".active").removeClass("active");
this.$element.addClass("active");
} else if ($input.prop("type") == "checkbox") {
if ($input.prop("checked") !== this.$element.hasClass("active")) changed = false;
this.$element.toggleClass("active");
}
$input.prop("checked", this.$element.hasClass("active"));
if (changed) $input.trigger("change");
} else {
this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
this.$element.toggleClass("active");
}
};
function Plugin(option) {
return this.each(function () {
var $this = $(this);
var data = $this.data("bs.button");
var options = typeof option == "object" && option;
if (!data) $this.data("bs.button", (data = new Button(this, options)));
if (option == "toggle") data.toggle();
else if (option) data.setState(option);
});
}
var old = $.fn.button;
$.fn.button = Plugin;
$.fn.button.Constructor = Button;
$.fn.button.noConflict = function () {
$.fn.button = old;
return this;
};
$(document)
.on("click.bs.button.data-api", '[data-toggle^="button"]', function (e) {
var $btn = $(e.target).closest(".btn");
Plugin.call($btn, "toggle");
if (!$(e.target).is('input[type="radio"], input[type="checkbox"]')) {
e.preventDefault();
if ($btn.is("input,button")) $btn.trigger("focus");
else $btn.find("input:visible,button:visible").first().trigger("focus");
}
})
.on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
$(e.target)
.closest(".btn")
.toggleClass("focus", /^focus(in)?$/.test(e.type));
});
})(jQuery);
+(function ($) {
"use strict";
var Carousel = function (element, options) {
this.$element = $(element);
this.$indicators = this.$element.find(".carousel-indicators");
this.options = options;
this.paused = null;
this.sliding = null;
this.interval = null;
this.$active = null;
this.$items = null;
this.options.keyboard && this.$element.on("keydown.bs.carousel", $.proxy(this.keydown, this));
this.options.pause == "hover" && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", $.proxy(this.pause, this)).on("mouseleave.bs.carousel", $.proxy(this.cycle, this));
};
Carousel.VERSION = "3.3.7";
Carousel.TRANSITION_DURATION = 600;
Carousel.DEFAULTS = { interval: 5000, pause: "hover", wrap: true, keyboard: true };
Carousel.prototype.keydown = function (e) {
if (/input|textarea/i.test(e.target.tagName)) return;
switch (e.which) {
case 37:
this.prev();
break;
case 39:
this.next();
break;
default:
return;
}
e.preventDefault();
};
Carousel.prototype.cycle = function (e) {
e || (this.paused = false);
this.interval && clearInterval(this.interval);
this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));
return this;
};
Carousel.prototype.getItemIndex = function (item) {
this.$items = item.parent().children(".item");
return this.$items.index(item || this.$active);
};
Carousel.prototype.getItemForDirection = function (direction, active) {
var activeIndex = this.getItemIndex(active);
var willWrap = (direction == "prev" && activeIndex === 0) || (direction == "next" && activeIndex == this.$items.length - 1);
if (willWrap && !this.options.wrap) return active;
var delta = direction == "prev" ? -1 : 1;
var itemIndex = (activeIndex + delta) % this.$items.length;
return this.$items.eq(itemIndex);
};
Carousel.prototype.to = function (pos) {
var that = this;
var activeIndex = this.getItemIndex((this.$active = this.$element.find(".item.active")));
if (pos > this.$items.length - 1 || pos < 0) return;
if (this.sliding)
return this.$element.one("slid.bs.carousel", function () {
that.to(pos);
});
if (activeIndex == pos) return this.pause().cycle();
return this.slide(pos > activeIndex ? "next" : "prev", this.$items.eq(pos));
};
Carousel.prototype.pause = function (e) {
e || (this.paused = true);
if (this.$element.find(".next, .prev").length && $.support.transition) {
this.$element.trigger($.support.transition.end);
this.cycle(true);
}
this.interval = clearInterval(this.interval);
return this;
};
Carousel.prototype.next = function () {
if (this.sliding) return;
return this.slide("next");
};
Carousel.prototype.prev = function () {
if (this.sliding) return;
return this.slide("prev");
};
Carousel.prototype.slide = function (type, next) {
var $active = this.$element.find(".item.active");
var $next = next || this.getItemForDirection(type, $active);
var isCycling = this.interval;
var direction = type == "next" ? "left" : "right";
var that = this;
if ($next.hasClass("active")) return (this.sliding = false);
var relatedTarget = $next[0];
var slideEvent = $.Event("slide.bs.carousel", { relatedTarget: relatedTarget, direction: direction });
this.$element.trigger(slideEvent);
if (slideEvent.isDefaultPrevented()) return;
this.sliding = true;
isCycling && this.pause();
if (this.$indicators.length) {
this.$indicators.find(".active").removeClass("active");
var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
$nextIndicator && $nextIndicator.addClass("active");
}
var slidEvent = $.Event("slid.bs.carousel", { relatedTarget: relatedTarget, direction: direction });
if ($.support.transition && this.$element.hasClass("slide")) {
$next.addClass(type);
$next[0].offsetWidth;
$active.addClass(direction);
$next.addClass(direction);
$active
.one("bsTransitionEnd", function () {
$next.removeClass([type, direction].join(" ")).addClass("active");
$active.removeClass(["active", direction].join(" "));
that.sliding = false;
setTimeout(function () {
that.$element.trigger(slidEvent);
}, 0);
})
.emulateTransitionEnd(Carousel.TRANSITION_DURATION);
} else {
$active.removeClass("active");
$next.addClass("active");
this.sliding = false;
this.$element.trigger(slidEvent);
}
isCycling && this.cycle();
return this;
};
function Plugin(option) {
return this.each(function () {
var $this = $(this);
var data = $this.data("bs.carousel");
var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == "object" && option);
var action = typeof option == "string" ? option : options.slide;
if (!data) $this.data("bs.carousel", (data = new Carousel(this, options)));
if (typeof option == "number") data.to(option);
else if (action) data[action]();
else if (options.interval) data.pause().cycle();
});
}
var old = $.fn.carousel;
$.fn.carousel = Plugin;
$.fn.carousel.Constructor = Carousel;
$.fn.carousel.noConflict = function () {
$.fn.carousel = old;
return this;
};
var clickHandler = function (e) {
var href;
var $this = $(this);
var $target = $($this.attr("data-target") || ((href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "")));
if (!$target.hasClass("carousel")) return;
var options = $.extend({}, $target.data(), $this.data());
var slideIndex = $this.attr("data-slide-to");
if (slideIndex) options.interval = false;
Plugin.call($target, options);
if (slideIndex) {
$target.data("bs.carousel").to(slideIndex);
}
e.preventDefault();
};
$(document).on("click.bs.carousel.data-api", "[data-slide]", clickHandler).on("click.bs.carousel.data-api", "[data-slide-to]", clickHandler);
$(window).on("load", function () {
$('[data-ride="carousel"]').each(function () {
var $carousel = $(this);
Plugin.call($carousel, $carousel.data());
});
});
})(jQuery);
+(function ($) {
"use strict";
var Collapse = function (element, options) {
this.$element = $(element);
this.options = $.extend({}, Collapse.DEFAULTS, options);
this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
this.transitioning = null;
if (this.options.parent) {
this.$parent = this.getParent();
} else {
this.addAriaAndCollapsedClass(this.$element, this.$trigger);
}
if (this.options.toggle) this.toggle();
};
Collapse.VERSION = "3.3.7";
Collapse.TRANSITION_DURATION = 350;
Collapse.DEFAULTS = { toggle: true };
Collapse.prototype.dimension = function () {
var hasWidth = this.$element.hasClass("width");
return hasWidth ? "width" : "height";
};
Collapse.prototype.show = function () {
if (this.transitioning || this.$element.hasClass("in")) return;
var activesData;
var actives = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
if (actives && actives.length) {
activesData = actives.data("bs.collapse");
if (activesData && activesData.transitioning) return;
}
var startEvent = $.Event("show.bs.collapse");
this.$element.trigger(startEvent);
if (startEvent.isDefaultPrevented()) return;
if (actives && actives.length) {
Plugin.call(actives, "hide");
activesData || actives.data("bs.collapse", null);
}
var dimension = this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[dimension](0).attr("aria-expanded", true);
this.$trigger.removeClass("collapsed").attr("aria-expanded", true);
this.transitioning = 1;
var complete = function () {
this.$element.removeClass("collapsing").addClass("collapse in")[dimension]("");
this.transitioning = 0;
this.$element.trigger("shown.bs.collapse");
};
if (!$.support.transition) return complete.call(this);
var scrollSize = $.camelCase(["scroll", dimension].join("-"));
this.$element.one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
};
Collapse.prototype.hide = function () {
if (this.transitioning || !this.$element.hasClass("in")) return;
var startEvent = $.Event("hide.bs.collapse");
this.$element.trigger(startEvent);
if (startEvent.isDefaultPrevented()) return;
var dimension = this.dimension();
this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", false);
this.$trigger.addClass("collapsed").attr("aria-expanded", false);
this.transitioning = 1;
var complete = function () {
this.transitioning = 0;
this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
};
if (!$.support.transition) return complete.call(this);
this.$element[dimension](0).one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
};
Collapse.prototype.toggle = function () {
this[this.$element.hasClass("in") ? "hide" : "show"]();
};
Collapse.prototype.getParent = function () {
return $(this.options.parent)
.find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
.each(
$.proxy(function (i, element) {
var $element = $(element);
this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
}, this)
)
.end();
};
Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
var isOpen = $element.hasClass("in");
$element.attr("aria-expanded", isOpen);
$trigger.toggleClass("collapsed", !isOpen).attr("aria-expanded", isOpen);
};
function getTargetFromTrigger($trigger) {
var href;
var target = $trigger.attr("data-target") || ((href = $trigger.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""));
return $(target);
}
function Plugin(option) {
return this.each(function () {
var $this = $(this);
var data = $this.data("bs.collapse");
var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == "object" && option);
if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
if (!data) $this.data("bs.collapse", (data = new Collapse(this, options)));
if (typeof option == "string") data[option]();
});
}
var old = $.fn.collapse;
$.fn.collapse = Plugin;
$.fn.collapse.Constructor = Collapse;
$.fn.collapse.noConflict = function () {
$.fn.collapse = old;
return this;
};
$(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (e) {
var $this = $(this);
if (!$this.attr("data-target")) e.preventDefault();
var $target = getTargetFromTrigger($this);
var data = $target.data("bs.collapse");
var option = data ? "toggle" : $this.data();
Plugin.call($target, option);
});
})(jQuery);
+(function ($) {
"use strict";
var backdrop = ".dropdown-backdrop";
var toggle = '[data-toggle="dropdown"]';
var Dropdown = function (element) {
$(element).on("click.bs.dropdown", this.toggle);
};
Dropdown.VERSION = "3.3.7";
function getParent($this) {
var selector = $this.attr("data-target");
if (!selector) {
selector = $this.attr("href");
selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, "");
}
var $parent = selector && $(selector);
return $parent && $parent.length ? $parent : $this.parent();
}
function clearMenus(e) {
if (e && e.which === 3) return;
$(backdrop).remove();
$(toggle).each(function () {
var $this = $(this);
var $parent = getParent($this);
var relatedTarget = { relatedTarget: this };
if (!$parent.hasClass("open")) return;
if (e && e.type == "click" && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return;
$parent.trigger((e = $.Event("hide.bs.dropdown", relatedTarget)));
if (e.isDefaultPrevented()) return;
$this.attr("aria-expanded", "false");
$parent.removeClass("open").trigger($.Event("hidden.bs.dropdown", relatedTarget));
});
}
Dropdown.prototype.toggle = function (e) {
var $this = $(this);
if ($this.is(".disabled, :disabled")) return;
var $parent = getParent($this);
var isActive = $parent.hasClass("open");
clearMenus();
if (!isActive) {
if ("ontouchstart" in document.documentElement && !$parent.closest(".navbar-nav").length) {
$(document.createElement("div")).addClass("dropdown-backdrop").insertAfter($(this)).on("click", clearMenus);
}
var relatedTarget = { relatedTarget: this };
$parent.trigger((e = $.Event("show.bs.dropdown", relatedTarget)));
if (e.isDefaultPrevented()) return;
$this.trigger("focus").attr("aria-expanded", "true");
$parent.toggleClass("open").trigger($.Event("shown.bs.dropdown", relatedTarget));
}
return false;
};
Dropdown.prototype.keydown = function (e) {
if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;
var $this = $(this);
e.preventDefault();
e.stopPropagation();
if ($this.is(".disabled, :disabled")) return;
var $parent = getParent($this);
var isActive = $parent.hasClass("open");
if ((!isActive && e.which != 27) || (isActive && e.which == 27)) {
if (e.which == 27) $parent.find(toggle).trigger("focus");
return $this.trigger("click");
}
var desc = " li:not(.disabled):visible a";
var $items = $parent.find(".dropdown-menu" + desc);
if (!$items.length) return;
var index = $items.index(e.target);
if (e.which == 38 && index > 0) index--;
if (e.which == 40 && index < $items.length - 1) index++;
if (!~index) index = 0;
$items.eq(index).trigger("focus");
};
function Plugin(option) {
return this.each(function () {
var $this = $(this);
var data = $this.data("bs.dropdown");
if (!data) $this.data("bs.dropdown", (data = new Dropdown(this)));
if (typeof option == "string") data[option].call($this);
});
}
var old = $.fn.dropdown;
$.fn.dropdown = Plugin;
$.fn.dropdown.Constructor = Dropdown;
$.fn.dropdown.noConflict = function () {
$.fn.dropdown = old;
return this;
};
$(document)
.on("click.bs.dropdown.data-api", clearMenus)
.on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
e.stopPropagation();
})
.on("click.bs.dropdown.data-api", toggle, Dropdown.prototype.toggle)
.on("keydown.bs.dropdown.data-api", toggle, Dropdown.prototype.keydown)
.on("keydown.bs.dropdown.data-api", ".dropdown-menu", Dropdown.prototype.keydown);
})(jQuery);
+(function ($) {
"use strict";
var Modal = function (element, options) {
this.options = options;
this.$body = $(document.body);
this.$element = $(element);
this.$dialog = this.$element.find(".modal-dialog");
this.$backdrop = null;
this.isShown = null;
this.originalBodyPad = null;
this.scrollbarWidth = 0;
this.ignoreBackdropClick = false;
if (this.options.remote) {
this.$element.find(".modal-content").load(
this.options.remote,
$.proxy(function () {
this.$element.trigger("loaded.bs.modal");
}, this)
);
}
};
Modal.VERSION = "3.3.7";
Modal.TRANSITION_DURATION = 300;
Modal.BACKDROP_TRANSITION_DURATION = 150;
Modal.DEFAULTS = { backdrop: true, keyboard: true, show: true };
Modal.prototype.toggle = function (_relatedTarget) {
return this.isShown ? this.hide() : this.show(_relatedTarget);
};
Modal.prototype.show = function (_relatedTarget) {
var that = this;
var e = $.Event("show.bs.modal", { relatedTarget: _relatedTarget });
this.$element.trigger(e);
if (this.isShown || e.isDefaultPrevented()) return;
this.isShown = true;
this.checkScrollbar();
this.setScrollbar();
this.$body.addClass("modal-open");
this.escape();
this.resize();
this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this));
this.$dialog.on("mousedown.dismiss.bs.modal", function () {
that.$element.one("mouseup.dismiss.bs.modal", function (e) {
if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
});
});
this.backdrop(function () {
var transition = $.support.transition && that.$element.hasClass("fade");
if (!that.$element.parent().length) {
that.$element.appendTo(that.$body);
}
that.$element.show().scrollTop(0);
that.adjustDialog();
if (transition) {
that.$element[0].offsetWidth;
}
that.$element.addClass("in");
that.enforceFocus();
var e = $.Event("shown.bs.modal", { relatedTarget: _relatedTarget });
transition
? that.$dialog
.one("bsTransitionEnd", function () {
that.$element.trigger("focus").trigger(e);
})
.emulateTransitionEnd(Modal.TRANSITION_DURATION)
: that.$element.trigger("focus").trigger(e);
});
};
Modal.prototype.hide = function (e) {
if (e) e.preventDefault();
e = $.Event("hide.bs.modal");
this.$element.trigger(e);
if (!this.isShown || e.isDefaultPrevented()) return;
this.isShown = false;
this.escape();
this.resize();
$(document).off("focusin.bs.modal");
this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");
this.$dialog.off("mousedown.dismiss.bs.modal");
$.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
};
Modal.prototype.enforceFocus = function () {
$(document)
.off("focusin.bs.modal")
.on(
"focusin.bs.modal",
$.proxy(function (e) {
if (document !== e.target && this.$element[0] !== e.target && !this.$element.has(e.target).length) {
this.$element.trigger("focus");
}
}, this)
);
};
Modal.prototype.escape = function () {
if (this.isShown && this.options.keyboard) {
this.$element.on(
"keydown.dismiss.bs.modal",
$.proxy(function (e) {
e.which == 27 && this.hide();
}, this)
);
} else if (!this.isShown) {
this.$element.off("keydown.dismiss.bs.modal");
}
};
Modal.prototype.resize = function () {
if (this.isShown) {
$(window).on("resize.bs.modal", $.proxy(this.handleUpdate, this));
} else {
$(window).off("resize.bs.modal");
}
};
Modal.prototype.hideModal = function () {
var that = this;
this.$element.hide();
this.backdrop(function () {
that.$body.removeClass("modal-open");
that.resetAdjustments();
that.resetScrollbar();
that.$element.trigger("hidden.bs.modal");
});
};
Modal.prototype.removeBackdrop = function () {
this.$backdrop && this.$backdrop.remove();
this.$backdrop = null;
};
Modal.prototype.backdrop = function (callback) {
var that = this;
var animate = this.$element.hasClass("fade") ? "fade" : "";
if (this.isShown && this.options.backdrop) {
var doAnimate = $.support.transition && animate;
this.$backdrop = $(document.createElement("div"))
.addClass("modal-backdrop " + animate)
.appendTo(this.$body);
this.$element.on(
"click.dismiss.bs.modal",
$.proxy(function (e) {
if (this.ignoreBackdropClick) {
this.ignoreBackdropClick = false;
return;
}
if (e.target !== e.currentTarget) return;
this.options.backdrop == "static" ? this.$element[0].focus() : this.hide();
}, this)
);
if (doAnimate) this.$backdrop[0].offsetWidth;
this.$backdrop.addClass("in");
if (!callback) return;
doAnimate ? this.$backdrop.one("bsTransitionEnd", callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
} else if (!this.isShown && this.$backdrop) {
this.$backdrop.removeClass("in");
var callbackRemove = function () {
that.removeBackdrop();
callback && callback();
};
$.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
} else if (callback) {
callback();
}
};
Modal.prototype.handleUpdate = function () {
this.adjustDialog();
};
Modal.prototype.adjustDialog = function () {
var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;
this.$element.css({ paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : "" });
};
Modal.prototype.resetAdjustments = function () {
this.$element.css({ paddingLeft: "", paddingRight: "" });
};
Modal.prototype.checkScrollbar = function () {
var fullWindowWidth = window.innerWidth;
if (!fullWindowWidth) {
var documentElementRect = document.documentElement.getBoundingClientRect();
fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
}
this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
this.scrollbarWidth = this.measureScrollbar();
};
Modal.prototype.setScrollbar = function () {
var bodyPad = parseInt(this.$body.css("padding-right") || 0, 10);
this.originalBodyPad = document.body.style.paddingRight || "";
if (this.bodyIsOverflowing) this.$body.css("padding-right", bodyPad + this.scrollbarWidth);
};
Modal.prototype.resetScrollbar = function () {
this.$body.css("padding-right", this.originalBodyPad);
};
Modal.prototype.measureScrollbar = function () {
var scrollDiv = document.createElement("div");
scrollDiv.className = "modal-scrollbar-measure";
this.$body.append(scrollDiv);
var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
this.$body[0].removeChild(scrollDiv);
return scrollbarWidth;
};
function Plugin(option, _relatedTarget) {
return this.each(function () {
var $this = $(this);
var data = $this.data("bs.modal");
var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == "object" && option);
if (!data) $this.data("bs.modal", (data = new Modal(this, options)));
if (typeof option == "string") data[option](_relatedTarget);
else if (options.show) data.show(_relatedTarget);
});
}
var old = $.fn.modal;
$.fn.modal = Plugin;
$.fn.modal.Constructor = Modal;
$.fn.modal.noConflict = function () {
$.fn.modal = old;
return this;
};
$(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
var $this = $(this);
var href = $this.attr("href");
var $target = $($this.attr("data-target") || (href && href.replace(/.*(?=#[^\s]+$)/, "")));
var option = $target.data("bs.modal") ? "toggle" : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());
if ($this.is("a")) e.preventDefault();
$target.one("show.bs.modal", function (showEvent) {
if (showEvent.isDefaultPrevented()) return;
$target.one("hidden.bs.modal", function () {
$this.is(":visible") && $this.trigger("focus");
});
});
Plugin.call($target, option, this);
});
})(jQuery);
+(function ($) {
"use strict";
var Tooltip = function (element, options) {
this.type = null;
this.options = null;
this.enabled = null;
this.timeout = null;
this.hoverState = null;
this.$element = null;
this.inState = null;
this.init("tooltip", element, options);
};
Tooltip.VERSION = "3.3.7";
Tooltip.TRANSITION_DURATION = 150;
Tooltip.DEFAULTS = {
animation: true,
placement: "top",
selector: false,
template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
trigger: "hover focus",
title: "",
delay: 0,
html: false,
container: false,
viewport: { selector: "body", padding: 0 },
};
Tooltip.prototype.init = function (type, element, options) {
this.enabled = true;
this.type = type;
this.$element = $(element);
this.options = this.getOptions(options);
this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
this.inState = { click: false, hover: false, focus: false };
if (this.$element[0] instanceof document.constructor && !this.options.selector) {
throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
}
var triggers = this.options.trigger.split(" ");
for (var i = triggers.length; i--; ) {
var trigger = triggers[i];
if (trigger == "click") {
this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this));
} else if (trigger != "manual") {
var eventIn = trigger == "hover" ? "mouseenter" : "focusin";
var eventOut = trigger == "hover" ? "mouseleave" : "focusout";
this.$element.on(eventIn + "." + this.type, this.options.selector, $.proxy(this.enter, this));
this.$element.on(eventOut + "." + this.type, this.options.selector, $.proxy(this.leave, this));
}
}
this.options.selector ? (this._options = $.extend({}, this.options, { trigger: "manual", selector: "" })) : this.fixTitle();
};
Tooltip.prototype.getDefaults = function () {
return Tooltip.DEFAULTS;
};
Tooltip.prototype.getOptions = function (options) {
options = $.extend({}, this.getDefaults(), this.$element.data(), options);
if (options.delay && typeof options.delay == "number") {
options.delay = { show: options.delay, hide: options.delay };
}
return options;
};
Tooltip.prototype.getDelegateOptions = function () {
var options = {};
var defaults = this.getDefaults();
this._options &&
$.each(this._options, function (key, value) {
if (defaults[key] != value) options[key] = value;
});
return options;
};
Tooltip.prototype.enter = function (obj) {
var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
if (!self) {
self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
$(obj.currentTarget).data("bs." + this.type, self);
}
if (obj instanceof $.Event) {
self.inState[obj.type == "focusin" ? "focus" : "hover"] = true;
}
if (self.tip().hasClass("in") || self.hoverState == "in") {
self.hoverState = "in";
return;
}
clearTimeout(self.timeout);
self.hoverState = "in";
if (!self.options.delay || !self.options.delay.show) return self.show();
self.timeout = setTimeout(function () {
if (self.hoverState == "in") self.show();
}, self.options.delay.show);
};
Tooltip.prototype.isInStateTrue = function () {
for (var key in this.inState) {
if (this.inState[key]) return true;
}
return false;
};
Tooltip.prototype.leave = function (obj) {
var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
if (!self) {
self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
$(obj.currentTarget).data("bs." + this.type, self);
}
if (obj instanceof $.Event) {
self.inState[obj.type == "focusout" ? "focus" : "hover"] = false;
}
if (self.isInStateTrue()) return;
clearTimeout(self.timeout);
self.hoverState = "out";
if (!self.options.delay || !self.options.delay.hide) return self.hide();
self.timeout = setTimeout(function () {
if (self.hoverState == "out") self.hide();
}, self.options.delay.hide);
};
Tooltip.prototype.show = function () {
var e = $.Event("show.bs." + this.type);
if (this.hasContent() && this.enabled) {
this.$element.trigger(e);
var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
if (e.isDefaultPrevented() || !inDom) return;
var that = this;
var $tip = this.tip();
var tipId = this.getUID(this.type);
this.setContent();
$tip.attr("id", tipId);
this.$element.attr("aria-describedby", tipId);
if (this.options.animation) $tip.addClass("fade");
var placement = typeof this.options.placement == "function" ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
var autoToken = /\s?auto?\s?/i;
var autoPlace = autoToken.test(placement);
if (autoPlace) placement = placement.replace(autoToken, "") || "top";
$tip.detach()
.css({ top: 0, left: 0, display: "block" })
.addClass(placement)
.data("bs." + this.type, this);
this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
this.$element.trigger("inserted.bs." + this.type);
var pos = this.getPosition();
var actualWidth = $tip[0].offsetWidth;
var actualHeight = $tip[0].offsetHeight;
if (autoPlace) {
var orgPlacement = placement;
var viewportDim = this.getPosition(this.$viewport);
placement =
placement == "bottom" && pos.bottom + actualHeight > viewportDim.bottom
? "top"
: placement == "top" && pos.top - actualHeight < viewportDim.top
? "bottom"
: placement == "right" && pos.right + actualWidth > viewportDim.width
? "left"
: placement == "left" && pos.left - actualWidth < viewportDim.left
? "right"
: placement;
$tip.removeClass(orgPlacement).addClass(placement);
}
var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
this.applyPlacement(calculatedOffset, placement);
var complete = function () {
var prevHoverState = that.hoverState;
that.$element.trigger("shown.bs." + that.type);
that.hoverState = null;
if (prevHoverState == "out") that.leave(that);
};
$.support.transition && this.$tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
}
};
Tooltip.prototype.applyPlacement = function (offset, placement) {
var $tip = this.tip();
var width = $tip[0].offsetWidth;
var height = $tip[0].offsetHeight;
var marginTop = parseInt($tip.css("margin-top"), 10);
var marginLeft = parseInt($tip.css("margin-left"), 10);
if (isNaN(marginTop)) marginTop = 0;
if (isNaN(marginLeft)) marginLeft = 0;
offset.top += marginTop;
offset.left += marginLeft;
$.offset.setOffset(
$tip[0],
$.extend(
{
using: function (props) {
$tip.css({ top: Math.round(props.top), left: Math.round(props.left) });
},
},
offset
),
0
);
$tip.addClass("in");
var actualWidth = $tip[0].offsetWidth;
var actualHeight = $tip[0].offsetHeight;
if (placement == "top" && actualHeight != height) {
offset.top = offset.top + height - actualHeight;
}
var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);
if (delta.left) offset.left += delta.left;
else offset.top += delta.top;
var isVertical = /top|bottom/.test(placement);
var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
var arrowOffsetPosition = isVertical ? "offsetWidth" : "offsetHeight";
$tip.offset(offset);
this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
};
Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
this.arrow()
.css(isVertical ? "left" : "top", 50 * (1 - delta / dimension) + "%")
.css(isVertical ? "top" : "left", "");
};
Tooltip.prototype.setContent = function () {
var $tip = this.tip();
var title = this.getTitle();
$tip.find(".tooltip-inner")[this.options.html ? "html" : "text"](title);
$tip.removeClass("fade in top bottom left right");
};
Tooltip.prototype.hide = function (callback) {
var that = this;
var $tip = $(this.$tip);
var e = $.Event("hide.bs." + this.type);
function complete() {
if (that.hoverState != "in") $tip.detach();
if (that.$element) {
that.$element.removeAttr("aria-describedby").trigger("hidden.bs." + that.type);
}
callback && callback();
}
this.$element.trigger(e);
if (e.isDefaultPrevented()) return;
$tip.removeClass("in");
$.support.transition && $tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
this.hoverState = null;
return this;
};
Tooltip.prototype.fixTitle = function () {
var $e = this.$element;
if ($e.attr("title") || typeof $e.attr("data-original-title") != "string") {
$e.attr("data-original-title", $e.attr("title") || "").attr("title", "");
}
};
Tooltip.prototype.hasContent = function () {
return this.getTitle();
};
Tooltip.prototype.getPosition = function ($element) {
$element = $element || this.$element;
var el = $element[0];
var isBody = el.tagName == "BODY";
var elRect = el.getBoundingClientRect();
if (elRect.width == null) {
elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top });
}
var isSvg = window.SVGElement && el instanceof window.SVGElement;
var elOffset = isBody ? { top: 0, left: 0 } : isSvg ? null : $element.offset();
var scroll = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() };
var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;
return $.extend({}, elRect, scroll, outerDims, elOffset);
};
Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
return placement == "bottom"
? { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 }
: placement == "top"
? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 }
: placement == "left"
? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth }
: { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width };
};
Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
var delta = { top: 0, left: 0 };
if (!this.$viewport) return delta;
var viewportPadding = (this.options.viewport && this.options.viewport.padding) || 0;
var viewportDimensions = this.getPosition(this.$viewport);
if (/right|left/.test(placement)) {
var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
if (topEdgeOffset < viewportDimensions.top) {
delta.top = viewportDimensions.top - topEdgeOffset;
} else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
}
} else {
var leftEdgeOffset = pos.left - viewportPadding;
var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
if (leftEdgeOffset < viewportDimensions.left) {
delta.left = viewportDimensions.left - leftEdgeOffset;
} else if (rightEdgeOffset > viewportDimensions.right) {
delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
}
}
return delta;
};
Tooltip.prototype.getTitle = function () {
var title;
var $e = this.$element;
var o = this.options;
title = $e.attr("data-original-title") || (typeof o.title == "function" ? o.title.call($e[0]) : o.title);
return title;
};
Tooltip.prototype.getUID = function (prefix) {
do prefix += ~~(Math.random() * 1000000);
while (document.getElementById(prefix));
return prefix;
};
Tooltip.prototype.tip = function () {
if (!this.$tip) {
this.$tip = $(this.options.template);
if (this.$tip.length != 1) {
throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
}
}
return this.$tip;
};
Tooltip.prototype.arrow = function () {
return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
};
Tooltip.prototype.enable = function () {
this.enabled = true;
};
Tooltip.prototype.disable = function () {
this.enabled = false;
};
Tooltip.prototype.toggleEnabled = function () {
this.enabled = !this.enabled;
};
Tooltip.prototype.toggle = function (e) {
var self = this;
if (e) {
self = $(e.currentTarget).data("bs." + this.type);
if (!self) {
self = new this.constructor(e.currentTarget, this.getDelegateOptions());
$(e.currentTarget).data("bs." + this.type, self);
}
}
if (e) {
self.inState.click = !self.inState.click;
if (self.isInStateTrue()) self.enter(self);
else self.leave(self);
} else {
self.tip().hasClass("in") ? self.leave(self) : self.enter(self);
}
};
Tooltip.prototype.destroy = function () {
var that = this;
clearTimeout(this.timeout);
this.hide(function () {
that.$element.off("." + that.type).removeData("bs." + that.type);
if (that.$tip) {
that.$tip.detach();
}
that.$tip = null;
that.$arrow = null;
that.$viewport = null;
that.$element = null;
});
};
function Plugin(option) {
return this.each(function () {
var $this = $(this);
var data = $this.data("bs.tooltip");
var options = typeof option == "object" && option;
if (!data && /destroy|hide/.test(option)) return;
if (!data) $this.data("bs.tooltip", (data = new Tooltip(this, options)));
if (typeof option == "string") data[option]();
});
}
var old = $.fn.tooltip;
$.fn.tooltip = Plugin;
$.fn.tooltip.Constructor = Tooltip;
$.fn.tooltip.noConflict = function () {
$.fn.tooltip = old;
return this;
};
})(jQuery);
+(function ($) {
"use strict";
var Popover = function (element, options) {
this.init("popover", element, options);
};
if (!$.fn.tooltip) throw new Error("Popover requires tooltip.js");
Popover.VERSION = "3.3.7";
Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
placement: "right",
trigger: "click",
content: "",
template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
});
Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);
Popover.prototype.constructor = Popover;
Popover.prototype.getDefaults = function () {
return Popover.DEFAULTS;
};
Popover.prototype.setContent = function () {
var $tip = this.tip();
var title = this.getTitle();
var content = this.getContent();
$tip.find(".popover-title")[this.options.html ? "html" : "text"](title);
$tip.find(".popover-content").children().detach().end()[this.options.html ? (typeof content == "string" ? "html" : "append") : "text"](content);
$tip.removeClass("fade top bottom left right in");
if (!$tip.find(".popover-title").html()) $tip.find(".popover-title").hide();
};
Popover.prototype.hasContent = function () {
return this.getTitle() || this.getContent();
};
Popover.prototype.getContent = function () {
var $e = this.$element;
var o = this.options;
return $e.attr("data-content") || (typeof o.content == "function" ? o.content.call($e[0]) : o.content);
};
Popover.prototype.arrow = function () {
return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
};
function Plugin(option) {
return this.each(function () {
var $this = $(this);
var data = $this.data("bs.popover");
var options = typeof option == "object" && option;
if (!data && /destroy|hide/.test(option)) return;
if (!data) $this.data("bs.popover", (data = new Popover(this, options)));
if (typeof option == "string") data[option]();
});
}
var old = $.fn.popover;
$.fn.popover = Plugin;
$.fn.popover.Constructor = Popover;
$.fn.popover.noConflict = function () {
$.fn.popover = old;
return this;
};
})(jQuery);
+(function ($) {
"use strict";
function ScrollSpy(element, options) {
this.$body = $(document.body);
this.$scrollElement = $(element).is(document.body) ? $(window) : $(element);
this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
this.selector = (this.options.target || "") + " .nav li > a";
this.offsets = [];
this.targets = [];
this.activeTarget = null;
this.scrollHeight = 0;
this.$scrollElement.on("scroll.bs.scrollspy", $.proxy(this.process, this));
this.refresh();
this.process();
}
ScrollSpy.VERSION = "3.3.7";
ScrollSpy.DEFAULTS = { offset: 10 };
ScrollSpy.prototype.getScrollHeight = function () {
return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
};
ScrollSpy.prototype.refresh = function () {
var that = this;
var offsetMethod = "offset";
var offsetBase = 0;
this.offsets = [];
this.targets = [];
this.scrollHeight = this.getScrollHeight();
if (!$.isWindow(this.$scrollElement[0])) {
offsetMethod = "position";
offsetBase = this.$scrollElement.scrollTop();
}
this.$body
.find(this.selector)
.map(function () {
var $el = $(this);
var href = $el.data("target") || $el.attr("href");
var $href = /^#./.test(href) && $(href);
return ($href && $href.length && $href.is(":visible") && [[$href[offsetMethod]().top + offsetBase, href]]) || null;
})
.sort(function (a, b) {
return a[0] - b[0];
})
.each(function () {
that.offsets.push(this[0]);
that.targets.push(this[1]);
});
};
ScrollSpy.prototype.process = function () {
var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
var scrollHeight = this.getScrollHeight();
var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
var offsets = this.offsets;
var targets = this.targets;
var activeTarget = this.activeTarget;
var i;
if (this.scrollHeight != scrollHeight) {
this.refresh();
}
if (scrollTop >= maxScroll) {
return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
}
if (activeTarget && scrollTop < offsets[0]) {
this.activeTarget = null;
return this.clear();
}
for (i = offsets.length; i--; ) {
activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i]);
}
};
ScrollSpy.prototype.activate = function (target) {
this.activeTarget = target;
this.clear();
var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
var active = $(selector).parents("li").addClass("active");
if (active.parent(".dropdown-menu").length) {
active = active.closest("li.dropdown").addClass("active");
}
active.trigger("activate.bs.scrollspy");
};
ScrollSpy.prototype.clear = function () {
$(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
};
function Plugin(option) {
return this.each(function () {
var $this = $(this);
var data = $this.data("bs.scrollspy");
var options = typeof option == "object" && option;
if (!data) $this.data("bs.scrollspy", (data = new ScrollSpy(this, options)));
if (typeof option == "string") data[option]();
});
}
var old = $.fn.scrollspy;
$.fn.scrollspy = Plugin;
$.fn.scrollspy.Constructor = ScrollSpy;
$.fn.scrollspy.noConflict = function () {
$.fn.scrollspy = old;
return this;
};
$(window).on("load.bs.scrollspy.data-api", function () {
$('[data-spy="scroll"]').each(function () {
var $spy = $(this);
Plugin.call($spy, $spy.data());
});
});
})(jQuery);
+(function ($) {
"use strict";
var Tab = function (element) {
this.element = $(element);
};
Tab.VERSION = "3.3.7";
Tab.TRANSITION_DURATION = 150;
Tab.prototype.show = function () {
var $this = this.element;
var $ul = $this.closest("ul:not(.dropdown-menu)");
var selector = $this.data("target");
if (!selector) {
selector = $this.attr("href");
selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "");
}
if ($this.parent("li").hasClass("active")) return;
var $previous = $ul.find(".active:last a");
var hideEvent = $.Event("hide.bs.tab", { relatedTarget: $this[0] });
var showEvent = $.Event("show.bs.tab", { relatedTarget: $previous[0] });
$previous.trigger(hideEvent);
$this.trigger(showEvent);
if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;
var $target = $(selector);
this.activate($this.closest("li"), $ul);
this.activate($target, $target.parent(), function () {
$previous.trigger({ type: "hidden.bs.tab", relatedTarget: $this[0] });
$this.trigger({ type: "shown.bs.tab", relatedTarget: $previous[0] });
});
};
Tab.prototype.activate = function (element, container, callback) {
var $active = container.find("> .active");
var transition = callback && $.support.transition && (($active.length && $active.hasClass("fade")) || !!container.find("> .fade").length);
function next() {
$active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", false);
element.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", true);
if (transition) {
element[0].offsetWidth;
element.addClass("in");
} else {
element.removeClass("fade");
}
if (element.parent(".dropdown-menu").length) {
element.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", true);
}
callback && callback();
}
$active.length && transition ? $active.one("bsTransitionEnd", next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();
$active.removeClass("in");
};
function Plugin(option) {
return this.each(function () {
var $this = $(this);
var data = $this.data("bs.tab");
if (!data) $this.data("bs.tab", (data = new Tab(this)));
if (typeof option == "string") data[option]();
});
}
var old = $.fn.tab;
$.fn.tab = Plugin;
$.fn.tab.Constructor = Tab;
$.fn.tab.noConflict = function () {
$.fn.tab = old;
return this;
};
var clickHandler = function (e) {
e.preventDefault();
Plugin.call($(this), "show");
};
$(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', clickHandler).on("click.bs.tab.data-api", '[data-toggle="pill"]', clickHandler);
})(jQuery);
+(function ($) {
"use strict";
var Affix = function (element, options) {
this.options = $.extend({}, Affix.DEFAULTS, options);
this.$target = $(this.options.target).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this));
this.$element = $(element);
this.affixed = null;
this.unpin = null;
this.pinnedOffset = null;
this.checkPosition();
};
Affix.VERSION = "3.3.7";
Affix.RESET = "affix affix-top affix-bottom";
Affix.DEFAULTS = { offset: 0, target: window };
Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
var scrollTop = this.$target.scrollTop();
var position = this.$element.offset();
var targetHeight = this.$target.height();
if (offsetTop != null && this.affixed == "top") return scrollTop < offsetTop ? "top" : false;
if (this.affixed == "bottom") {
if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : "bottom";
return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : "bottom";
}
var initializing = this.affixed == null;
var colliderTop = initializing ? scrollTop : position.top;
var colliderHeight = initializing ? targetHeight : height;
if (offsetTop != null && scrollTop <= offsetTop) return "top";
if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return "bottom";
return false;
};
Affix.prototype.getPinnedOffset = function () {
if (this.pinnedOffset) return this.pinnedOffset;
this.$element.removeClass(Affix.RESET).addClass("affix");
var scrollTop = this.$target.scrollTop();
var position = this.$element.offset();
return (this.pinnedOffset = position.top - scrollTop);
};
Affix.prototype.checkPositionWithEventLoop = function () {
setTimeout($.proxy(this.checkPosition, this), 1);
};
Affix.prototype.checkPosition = function () {
if (!this.$element.is(":visible")) return;
var height = this.$element.height();
var offset = this.options.offset;
var offsetTop = offset.top;
var offsetBottom = offset.bottom;
var scrollHeight = Math.max($(document).height(), $(document.body).height());
if (typeof offset != "object") offsetBottom = offsetTop = offset;
if (typeof offsetTop == "function") offsetTop = offset.top(this.$element);
if (typeof offsetBottom == "function") offsetBottom = offset.bottom(this.$element);
var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);
if (this.affixed != affix) {
if (this.unpin != null) this.$element.css("top", "");
var affixType = "affix" + (affix ? "-" + affix : "");
var e = $.Event(affixType + ".bs.affix");
this.$element.trigger(e);
if (e.isDefaultPrevented()) return;
this.affixed = affix;
this.unpin = affix == "bottom" ? this.getPinnedOffset() : null;
this.$element
.removeClass(Affix.RESET)
.addClass(affixType)
.trigger(affixType.replace("affix", "affixed") + ".bs.affix");
}
if (affix == "bottom") {
this.$element.offset({ top: scrollHeight - height - offsetBottom });
}
};
function Plugin(option) {
return this.each(function () {
var $this = $(this);
var data = $this.data("bs.affix");
var options = typeof option == "object" && option;
if (!data) $this.data("bs.affix", (data = new Affix(this, options)));
if (typeof option == "string") data[option]();
});
}
var old = $.fn.affix;
$.fn.affix = Plugin;
$.fn.affix.Constructor = Affix;
$.fn.affix.noConflict = function () {
$.fn.affix = old;
return this;
};
$(window).on("load", function () {
$('[data-spy="affix"]').each(function () {
var $spy = $(this);
var data = $spy.data();
data.offset = data.offset || {};
if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
if (data.offsetTop != null) data.offset.top = data.offsetTop;
Plugin.call($spy, data);
});
});
})(jQuery);
(function ($) {
$.fn.yiiActiveForm = function (method) {
if (methods[method]) {
return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
} else if (typeof method === "object" || !method) {
return methods.init.apply(this, arguments);
} else {
$.error("Method " + method + " does not exist on jQuery.yiiActiveForm");
return false;
}
};
var events = {
beforeValidate: "beforeValidate",
afterValidate: "afterValidate",
beforeValidateAttribute: "beforeValidateAttribute",
afterValidateAttribute: "afterValidateAttribute",
beforeSubmit: "beforeSubmit",
ajaxBeforeSend: "ajaxBeforeSend",
ajaxComplete: "ajaxComplete",
afterInit: "afterInit",
};
var defaults = {
encodeErrorSummary: true,
errorSummary: ".error-summary",
validateOnSubmit: true,
errorCssClass: "has-error",
successCssClass: "has-success",
validatingCssClass: "validating",
ajaxParam: "ajax",
ajaxDataType: "json",
validationUrl: undefined,
scrollToError: true,
scrollToErrorOffset: 0,
};
var attributeDefaults = {
id: undefined,
name: undefined,
container: undefined,
input: undefined,
error: ".help-block",
encodeError: true,
validateOnChange: true,
validateOnBlur: true,
validateOnType: false,
validationDelay: 500,
enableAjaxValidation: false,
validate: undefined,
status: 0,
cancelled: false,
value: undefined,
updateAriaInvalid: true,
};
var submitDefer;
var setSubmitFinalizeDefer = function ($form) {
submitDefer = $.Deferred();
$form.data("yiiSubmitFinalizePromise", submitDefer.promise());
};
var submitFinalize = function ($form) {
if (submitDefer) {
submitDefer.resolve();
submitDefer = undefined;
$form.removeData("yiiSubmitFinalizePromise");
}
};
var methods = {
init: function (attributes, options) {
return this.each(function () {
var $form = $(this);
if ($form.data("yiiActiveForm")) {
return;
}
var settings = $.extend({}, defaults, options || {});
if (settings.validationUrl === undefined) {
settings.validationUrl = $form.attr("action");
}
$.each(attributes, function (i) {
attributes[i] = $.extend({ value: getValue($form, this) }, attributeDefaults, this);
watchAttribute($form, attributes[i]);
});
$form.data("yiiActiveForm", { settings: settings, attributes: attributes, submitting: false, validated: false, options: getFormOptions($form) });
$form.bind("reset.yiiActiveForm", methods.resetForm);
if (settings.validateOnSubmit) {
$form.on("mouseup.yiiActiveForm keyup.yiiActiveForm", ":submit", function () {
$form.data("yiiActiveForm").submitObject = $(this);
});
$form.on("submit.yiiActiveForm", methods.submitForm);
}
var event = $.Event(events.afterInit);
$form.trigger(event);
});
},
add: function (attribute) {
var $form = $(this);
attribute = $.extend({ value: getValue($form, attribute) }, attributeDefaults, attribute);
$form.data("yiiActiveForm").attributes.push(attribute);
watchAttribute($form, attribute);
},
remove: function (id) {
var $form = $(this),
attributes = $form.data("yiiActiveForm").attributes,
index = -1,
attribute = undefined;
$.each(attributes, function (i) {
if (attributes[i]["id"] == id) {
index = i;
attribute = attributes[i];
return false;
}
});
if (index >= 0) {
attributes.splice(index, 1);
unwatchAttribute($form, attribute);
}
return attribute;
},
validateAttribute: function (id) {
var attribute = methods.find.call(this, id);
if (attribute != undefined) {
validateAttribute($(this), attribute, true);
}
},
find: function (id) {
var attributes = $(this).data("yiiActiveForm").attributes,
result = undefined;
$.each(attributes, function (i) {
if (attributes[i]["id"] == id) {
result = attributes[i];
return false;
}
});
return result;
},
destroy: function () {
return this.each(function () {
$(this).unbind(".yiiActiveForm");
$(this).removeData("yiiActiveForm");
});
},
data: function () {
return this.data("yiiActiveForm");
},
validate: function (forceValidate) {
if (forceValidate) {
$(this).data("yiiActiveForm").submitting = true;
}
var $form = $(this),
data = $form.data("yiiActiveForm"),
needAjaxValidation = false,
messages = {},
deferreds = deferredArray(),
submitting = data.submitting && !forceValidate;
if (data.submitting) {
var event = $.Event(events.beforeValidate);
$form.trigger(event, [messages, deferreds]);
if (event.result === false) {
data.submitting = false;
submitFinalize($form);
return;
}
}
$.each(data.attributes, function () {
this.$form = $form;
if (!$(this.input).is(":disabled")) {
this.cancelled = false;
if (data.submitting || this.status === 2 || this.status === 3) {
var msg = messages[this.id];
if (msg === undefined) {
msg = [];
messages[this.id] = msg;
}
var event = $.Event(events.beforeValidateAttribute);
$form.trigger(event, [this, msg, deferreds]);
if (event.result !== false) {
if (this.validate) {
this.validate(this, getValue($form, this), msg, deferreds, $form);
}
if (this.enableAjaxValidation) {
needAjaxValidation = true;
}
} else {
this.cancelled = true;
}
}
}
});
$.when.apply(this, deferreds).always(function () {
for (var i in messages) {
if (0 === messages[i].length) {
delete messages[i];
}
}
if (needAjaxValidation && ($.isEmptyObject(messages) || data.submitting)) {
var $button = data.submitObject,
extData = "&" + data.settings.ajaxParam + "=" + $form.attr("id");
if ($button && $button.length && $button.attr("name")) {
extData += "&" + $button.attr("name") + "=" + $button.attr("value");
}
$.ajax({
url: data.settings.validationUrl,
type: $form.attr("method"),
data: $form.serialize() + extData,
dataType: data.settings.ajaxDataType,
complete: function (jqXHR, textStatus) {
$form.trigger(events.ajaxComplete, [jqXHR, textStatus]);
},
beforeSend: function (jqXHR, settings) {
$form.trigger(events.ajaxBeforeSend, [jqXHR, settings]);
},
success: function (msgs) {
if (msgs !== null && typeof msgs === "object") {
$.each(data.attributes, function () {
if (!this.enableAjaxValidation || this.cancelled) {
delete msgs[this.id];
}
});
updateInputs($form, $.extend(messages, msgs), submitting);
} else {
updateInputs($form, messages, submitting);
}
},
error: function () {
data.submitting = false;
submitFinalize($form);
},
});
} else if (data.submitting) {
setTimeout(function () {
updateInputs($form, messages, submitting);
}, 200);
} else {
updateInputs($form, messages, submitting);
}
});
},
submitForm: function () {
var $form = $(this),
data = $form.data("yiiActiveForm");
if (data.validated) {
data.submitting = false;
var event = $.Event(events.beforeSubmit);
$form.trigger(event);
if (event.result === false) {
data.validated = false;
submitFinalize($form);
return false;
}
updateHiddenButton($form);
return true;
} else {
setSubmitFinalizeDefer($form);
if (data.settings.timer !== undefined) {
clearTimeout(data.settings.timer);
}
data.submitting = true;
methods.validate.call($form);
return false;
}
},
resetForm: function () {
var $form = $(this);
var data = $form.data("yiiActiveForm");
setTimeout(function () {
$.each(data.attributes, function () {
this.value = getValue($form, this);
this.status = 0;
var $container = $form.find(this.container);
$container.removeClass(data.settings.validatingCssClass + " " + data.settings.errorCssClass + " " + data.settings.successCssClass);
$container.find(this.error).html("");
});
$form.find(data.settings.errorSummary).hide().find("ul").html("");
}, 1);
},
updateMessages: function (messages, summary) {
var $form = $(this);
var data = $form.data("yiiActiveForm");
$.each(data.attributes, function () {
updateInput($form, this, messages);
});
if (summary) {
updateSummary($form, messages);
}
},
updateAttribute: function (id, messages) {
var attribute = methods.find.call(this, id);
if (attribute != undefined) {
var msg = {};
msg[id] = messages;
updateInput($(this), attribute, msg);
}
},
};
var watchAttribute = function ($form, attribute) {
var $input = findInput($form, attribute);
if (attribute.validateOnChange) {
$input.on("change.yiiActiveForm", function () {
validateAttribute($form, attribute, false);
});
}
if (attribute.validateOnBlur) {
$input.on("blur.yiiActiveForm", function () {
if (attribute.status == 0 || attribute.status == 1) {
validateAttribute($form, attribute, true);
}
});
}
if (attribute.validateOnType) {
$input.on("keyup.yiiActiveForm", function (e) {
if ($.inArray(e.which, [16, 17, 18, 37, 38, 39, 40]) !== -1) {
return;
}
if (attribute.value !== getValue($form, attribute)) {
validateAttribute($form, attribute, false, attribute.validationDelay);
}
});
}
};
var unwatchAttribute = function ($form, attribute) {
findInput($form, attribute).off(".yiiActiveForm");
};
var validateAttribute = function ($form, attribute, forceValidate, validationDelay) {
var data = $form.data("yiiActiveForm");
if (forceValidate) {
attribute.status = 2;
}
$.each(data.attributes, function () {
if (this.value !== getValue($form, this)) {
this.status = 2;
forceValidate = true;
}
});
if (!forceValidate) {
return;
}
if (data.settings.timer !== undefined) {
clearTimeout(data.settings.timer);
}
data.settings.timer = setTimeout(
function () {
if (data.submitting || $form.is(":hidden")) {
return;
}
$.each(data.attributes, function () {
if (this.status === 2) {
this.status = 3;
$form.find(this.container).addClass(data.settings.validatingCssClass);
}
});
methods.validate.call($form);
},
validationDelay ? validationDelay : 200
);
};
var deferredArray = function () {
var array = [];
array.add = function (callback) {
this.push(new $.Deferred(callback));
};
return array;
};
var buttonOptions = ["action", "target", "method", "enctype"];
var getFormOptions = function ($form) {
var attributes = {};
for (var i = 0; i < buttonOptions.length; i++) {
attributes[buttonOptions[i]] = $form.attr(buttonOptions[i]);
}
return attributes;
};
var applyButtonOptions = function ($form, $button) {
for (var i = 0; i < buttonOptions.length; i++) {
var value = $button.attr("form" + buttonOptions[i]);
if (value) {
$form.attr(buttonOptions[i], value);
}
}
};
var restoreButtonOptions = function ($form) {
var data = $form.data("yiiActiveForm");
for (var i = 0; i < buttonOptions.length; i++) {
$form.attr(buttonOptions[i], data.options[buttonOptions[i]] || null);
}
};
var updateInputs = function ($form, messages, submitting) {
var data = $form.data("yiiActiveForm");
if (data === undefined) {
return false;
}
if (submitting) {
var errorAttributes = [];
$.each(data.attributes, function () {
if (!$(this.input).is(":disabled") && !this.cancelled && updateInput($form, this, messages)) {
errorAttributes.push(this);
}
});
$form.trigger(events.afterValidate, [messages, errorAttributes]);
updateSummary($form, messages);
if (errorAttributes.length) {
if (data.settings.scrollToError) {
var top =
$form
.find(
$.map(errorAttributes, function (attribute) {
return attribute.input;
}).join(",")
)
.first()
.closest(":visible")
.offset().top - data.settings.scrollToErrorOffset;
if (top < 0) {
top = 0;
} else if (top > $(document).height()) {
top = $(document).height();
}
var wtop = $(window).scrollTop();
if (top < wtop || top > wtop + $(window).height()) {
$(window).scrollTop(top);
}
}
data.submitting = false;
} else {
data.validated = true;
if (data.submitObject) {
applyButtonOptions($form, data.submitObject);
}
$form.submit();
if (data.submitObject) {
restoreButtonOptions($form);
}
}
} else {
$.each(data.attributes, function () {
if (!this.cancelled && (this.status === 2 || this.status === 3)) {
updateInput($form, this, messages);
}
});
}
submitFinalize($form);
};
var updateHiddenButton = function ($form) {
var data = $form.data("yiiActiveForm");
var $button = data.submitObject || $form.find(":submit:first");
if ($button.length && $button.attr("type") == "submit" && $button.attr("name")) {
var $hiddenButton = $('input[type="hidden"][name="' + $button.attr("name") + '"]', $form);
if (!$hiddenButton.length) {
$("<input>")
.attr({ type: "hidden", name: $button.attr("name"), value: $button.attr("value") })
.appendTo($form);
} else {
$hiddenButton.attr("value", $button.attr("value"));
}
}
};
var updateInput = function ($form, attribute, messages) {
var data = $form.data("yiiActiveForm"),
$input = findInput($form, attribute),
hasError = false;
if (!$.isArray(messages[attribute.id])) {
messages[attribute.id] = [];
}
$form.trigger(events.afterValidateAttribute, [attribute, messages[attribute.id]]);
attribute.status = 1;
if ($input.length) {
hasError = messages[attribute.id].length > 0;
var $container = $form.find(attribute.container);
var $error = $container.find(attribute.error);
updateAriaInvalid($form, attribute, hasError);
if (hasError) {
if (attribute.encodeError) {
$error.text(messages[attribute.id][0]);
} else {
$error.html(messages[attribute.id][0]);
}
$container.removeClass(data.settings.validatingCssClass + " " + data.settings.successCssClass).addClass(data.settings.errorCssClass);
} else {
$error.empty();
$container.removeClass(data.settings.validatingCssClass + " " + data.settings.errorCssClass + " ").addClass(data.settings.successCssClass);
}
attribute.value = getValue($form, attribute);
}
return hasError;
};
var updateSummary = function ($form, messages) {
var data = $form.data("yiiActiveForm"),
$summary = $form.find(data.settings.errorSummary),
$ul = $summary.find("ul").empty();
if ($summary.length && messages) {
$.each(data.attributes, function () {
if ($.isArray(messages[this.id]) && messages[this.id].length) {
var error = $("<li/>");
if (data.settings.encodeErrorSummary) {
error.text(messages[this.id][0]);
} else {
error.html(messages[this.id][0]);
}
$ul.append(error);
}
});
$summary.toggle($ul.find("li").length > 0);
}
};
var getValue = function ($form, attribute) {
var $input = findInput($form, attribute);
var type = $input.attr("type");
if (type === "checkbox" || type === "radio") {
var $realInput = $input.filter(":checked");
if (!$realInput.length) {
$realInput = $form.find('input[type=hidden][name="' + $input.attr("name") + '"]');
}
return $realInput.val();
} else {
return $input.val();
}
};
var findInput = function ($form, attribute) {
var $input = $form.find(attribute.input);
if ($input.length && $input[0].tagName.toLowerCase() === "div") {
return $input.find("input");
} else {
return $input;
}
};
var updateAriaInvalid = function ($form, attribute, hasError) {
if (attribute.updateAriaInvalid) {
$form.find(attribute.input).attr("aria-invalid", hasError ? "true" : "false");
}
};
})(window.jQuery);
!(function (e) {
"function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
})(function (e) {
(e.ui = e.ui || {}), (e.ui.version = "1.12.1");
var t = 0,
s = Array.prototype.slice;
(e.cleanData = (function (t) {
return function (i) {
var s, n, a;
for (a = 0; null != (n = i[a]); a++)
try {
(s = e._data(n, "events")) && s.remove && e(n).triggerHandler("remove");
} catch (e) {}
t(i);
};
})(e.cleanData)),
(e.widget = function (i, s, a) {
var o,
h,
r,
u = {},
l = i.split(".")[0],
d = l + "-" + (i = i.split(".")[1]);
return (
a || ((a = s), (s = e.Widget)),
e.isArray(a) && (a = e.extend.apply(null, [{}].concat(a))),
(e.expr[":"][d.toLowerCase()] = function (t) {
return !!e.data(t, d);
}),
(e[l] = e[l] || {}),
(o = e[l][i]),
(h = e[l][i] = function (e, t) {
return this._createWidget ? void (arguments.length && this._createWidget(e, t)) : new h(e, t);
}),
e.extend(h, o, { version: a.version, _proto: e.extend({}, a), _childConstructors: [] }),
(r = new s()),
(r.options = e.widget.extend({}, r.options)),
e.each(a, function (i, a) {
return e.isFunction(a)
? void (u[i] = (function () {
function t() {
return s.prototype[i].apply(this, arguments);
}
function n(e) {
return s.prototype[i].apply(this, e);
}
return function () {
var e,
i = this._super,
s = this._superApply;
return (this._super = t), (this._superApply = n), (e = a.apply(this, arguments)), (this._super = i), (this._superApply = s), e;
};
})())
: void (u[i] = a);
}),
(h.prototype = e.widget.extend(r, { widgetEventPrefix: o ? r.widgetEventPrefix || i : i }, u, { constructor: h, namespace: l, widgetName: i, widgetFullName: d })),
o
? (e.each(o._childConstructors, function (t, i) {
var s = i.prototype;
e.widget(s.namespace + "." + s.widgetName, h, i._proto);
}),
delete o._childConstructors)
: s._childConstructors.push(h),
e.widget.bridge(i, h),
h
);
}),
(e.widget.extend = function (t) {
for (var i, n, a = s.call(arguments, 1), o = 0, h = a.length; h > o; o++)
for (i in a[o]) (n = a[o][i]), a[o].hasOwnProperty(i) && void 0 !== n && (t[i] = e.isPlainObject(n) ? (e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], n) : e.widget.extend({}, n)) : n);
return t;
}),
(e.widget.bridge = function (t, i) {
var n = i.prototype.widgetFullName || t;
e.fn[t] = function (a) {
var o = "string" == typeof a,
h = s.call(arguments, 1),
r = this;
return (
o
? this.length || "instance" !== a
? this.each(function () {
var i,
s = e.data(this, n);
return "instance" === a
? ((r = s), !1)
: s
? e.isFunction(s[a]) && "_" !== a.charAt(0)
? (i = s[a].apply(s, h)) !== s && void 0 !== i
? ((r = i && i.jquery ? r.pushStack(i.get()) : i), !1)
: void 0
: e.error("no such method '" + a + "' for " + t + " widget instance")
: e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + a + "'");
})
: (r = void 0)
: (h.length && (a = e.widget.extend.apply(null, [a].concat(h))),
this.each(function () {
var t = e.data(this, n);
t ? (t.option(a || {}), t._init && t._init()) : e.data(this, n, new i(a, this));
})),
r
);
};
}),
(e.Widget = function () {}),
(e.Widget._childConstructors = []),
(e.Widget.prototype = {
widgetName: "widget",
widgetEventPrefix: "",
defaultElement: "<div>",
options: { classes: {}, disabled: !1, create: null },
_createWidget: function (i, s) {
(s = e(s || this.defaultElement || this)[0]),
(this.element = e(s)),
(this.uuid = t++),
(this.eventNamespace = "." + this.widgetName + this.uuid),
(this.bindings = e()),
(this.hoverable = e()),
(this.focusable = e()),
(this.classesElementLookup = {}),
s !== this &&
(e.data(s, this.widgetFullName, this),
this._on(!0, this.element, {
remove: function (e) {
e.target === s && this.destroy();
},
}),
(this.document = e(s.style ? s.ownerDocument : s.document || s)),
(this.window = e(this.document[0].defaultView || this.document[0].parentWindow))),
(this.options = e.widget.extend({}, this.options, this._getCreateOptions(), i)),
this._create(),
this.options.disabled && this._setOptionDisabled(this.options.disabled),
this._trigger("create", null, this._getCreateEventData()),
this._init();
},
_getCreateOptions: function () {
return {};
},
_getCreateEventData: e.noop,
_create: e.noop,
_init: e.noop,
destroy: function () {
var t = this;
this._destroy(),
e.each(this.classesElementLookup, function (e, i) {
t._removeClass(i, e);
}),
this.element.off(this.eventNamespace).removeData(this.widgetFullName),
this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
this.bindings.off(this.eventNamespace);
},
_destroy: e.noop,
widget: function () {
return this.element;
},
option: function (t, i) {
var s,
n,
a,
o = t;
if (0 === arguments.length) return e.widget.extend({}, this.options);
if ("string" == typeof t)
if (((o = {}), (s = t.split(".")), (t = s.shift()), s.length)) {
for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) (n[s[a]] = n[s[a]] || {}), (n = n[s[a]]);
if (((t = s.pop()), 1 === arguments.length)) return void 0 === n[t] ? null : n[t];
n[t] = i;
} else {
if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
o[t] = i;
}
return this._setOptions(o), this;
},
_setOptions: function (e) {
var t;
for (t in e) this._setOption(t, e[t]);
return this;
},
_setOption: function (e, t) {
return "classes" === e && this._setOptionClasses(t), (this.options[e] = t), "disabled" === e && this._setOptionDisabled(t), this;
},
_setOptionClasses: function (t) {
var i, s, n;
for (i in t) (n = this.classesElementLookup[i]), t[i] !== this.options.classes[i] && n && n.length && ((s = e(n.get())), this._removeClass(n, i), s.addClass(this._classes({ element: s, keys: i, classes: t, add: !0 })));
},
_setOptionDisabled: function (e) {
this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
},
enable: function () {
return this._setOptions({ disabled: !1 });
},
disable: function () {
return this._setOptions({ disabled: !0 });
},
_classes: function (t) {
function i(i, a) {
var o, h;
for (h = 0; i.length > h; h++)
(o = n.classesElementLookup[i[h]] || e()),
(o = e(t.add ? e.unique(o.get().concat(t.element.get())) : o.not(t.element).get())),
(n.classesElementLookup[i[h]] = o),
s.push(i[h]),
a && t.classes[i[h]] && s.push(t.classes[i[h]]);
}
var s = [],
n = this;
return (
(t = e.extend({ element: this.element, classes: this.options.classes || {} }, t)),
this._on(t.element, { remove: "_untrackClassesElement" }),
t.keys && i(t.keys.match(/\S+/g) || [], !0),
t.extra && i(t.extra.match(/\S+/g) || []),
s.join(" ")
);
},
_untrackClassesElement: function (t) {
var i = this;
e.each(i.classesElementLookup, function (s, n) {
-1 !== e.inArray(t.target, n) && (i.classesElementLookup[s] = e(n.not(t.target).get()));
});
},
_removeClass: function (e, t, i) {
return this._toggleClass(e, t, i, !1);
},
_addClass: function (e, t, i) {
return this._toggleClass(e, t, i, !0);
},
_toggleClass: function (e, t, i, s) {
s = "boolean" == typeof s ? s : i;
var n = "string" == typeof e || null === e,
a = { extra: n ? t : i, keys: n ? e : t, element: n ? this.element : e, add: s };
return a.element.toggleClass(this._classes(a), s), this;
},
_on: function (t, i, s) {
var n,
a = this;
"boolean" != typeof t && ((s = i), (i = t), (t = !1)),
s ? ((i = n = e(i)), (this.bindings = this.bindings.add(i))) : ((s = i), (i = this.element), (n = this.widget())),
e.each(s, function (s, o) {
function r() {
return t || (!0 !== a.options.disabled && !e(this).hasClass("ui-state-disabled")) ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0;
}
"string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
var h = s.match(/^([\w:-]*)\s*(.*)$/),
u = h[1] + a.eventNamespace,
l = h[2];
l ? n.on(u, l, r) : i.on(u, r);
});
},
_off: function (t, i) {
(i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace),
t.off(i).off(i),
(this.bindings = e(this.bindings.not(t).get())),
(this.focusable = e(this.focusable.not(t).get())),
(this.hoverable = e(this.hoverable.not(t).get()));
},
_delay: function (e, t) {
var s = this;
return setTimeout(function i() {
return ("string" == typeof e ? s[e] : e).apply(s, arguments);
}, t || 0);
},
_hoverable: function (t) {
(this.hoverable = this.hoverable.add(t)),
this._on(t, {
mouseenter: function (t) {
this._addClass(e(t.currentTarget), null, "ui-state-hover");
},
mouseleave: function (t) {
this._removeClass(e(t.currentTarget), null, "ui-state-hover");
},
});
},
_focusable: function (t) {
(this.focusable = this.focusable.add(t)),
this._on(t, {
focusin: function (t) {
this._addClass(e(t.currentTarget), null, "ui-state-focus");
},
focusout: function (t) {
this._removeClass(e(t.currentTarget), null, "ui-state-focus");
},
});
},
_trigger: function (t, i, s) {
var n,
a,
o = this.options[t];
if (((s = s || {}), (i = e.Event(i)), (i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase()), (i.target = this.element[0]), (a = i.originalEvent))) for (n in a) n in i || (i[n] = a[n]);
return this.element.trigger(i, s), !((e.isFunction(o) && !1 === o.apply(this.element[0], [i].concat(s))) || i.isDefaultPrevented());
},
}),
e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, i) {
e.Widget.prototype["_" + t] = function (s, n, a) {
"string" == typeof n && (n = { effect: n });
var o,
h = n ? (!0 === n || "number" == typeof n ? i : n.effect || i) : t;
"number" == typeof (n = n || {}) && (n = { duration: n }),
(o = !e.isEmptyObject(n)),
(n.complete = a),
n.delay && s.delay(n.delay),
o && e.effects && e.effects.effect[h]
? s[t](n)
: h !== t && s[h]
? s[h](n.duration, n.easing, a)
: s.queue(function (i) {
e(this)[t](), a && a.call(s[0]), i();
});
};
}),
e.widget,
(e.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }),
(e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
var n = !1;
e(document).on("mouseup", function () {
n = !1;
}),
e.widget("ui.mouse", {
version: "1.12.1",
options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 },
_mouseInit: function () {
var t = this;
this.element
.on("mousedown." + this.widgetName, function (e) {
return t._mouseDown(e);
})
.on("click." + this.widgetName, function (i) {
return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0;
}),
(this.started = !1);
},
_mouseDestroy: function () {
this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
},
_mouseDown: function (t) {
if (!n) {
(this._mouseMoved = !1), this._mouseStarted && this._mouseUp(t), (this._mouseDownEvent = t);
var i = this,
s = 1 === t.which,
a = !("string" != typeof this.options.cancel || !t.target.nodeName) && e(t.target).closest(this.options.cancel).length;
return (
!(s && !a && this._mouseCapture(t)) ||
((this.mouseDelayMet = !this.options.delay),
this.mouseDelayMet ||
(this._mouseDelayTimer = setTimeout(function () {
i.mouseDelayMet = !0;
}, this.options.delay)),
this._mouseDistanceMet(t) && this._mouseDelayMet(t) && ((this._mouseStarted = !1 !== this._mouseStart(t)), !this._mouseStarted)
? (t.preventDefault(), !0)
: (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"),
(this._mouseMoveDelegate = function (e) {
return i._mouseMove(e);
}),
(this._mouseUpDelegate = function (e) {
return i._mouseUp(e);
}),
this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate),
t.preventDefault(),
(n = !0),
!0))
);
}
},
_mouseMove: function (t) {
if (this._mouseMoved) {
if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
if (!t.which)
if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
else if (!this.ignoreMissingWhich) return this._mouseUp(t);
}
return (
(t.which || t.button) && (this._mouseMoved = !0),
this._mouseStarted
? (this._mouseDrag(t), t.preventDefault())
: (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && ((this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t)), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
);
},
_mouseUp: function (t) {
this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate),
this._mouseStarted && ((this._mouseStarted = !1), t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)),
this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
(this.ignoreMissingWhich = !1),
(n = !1),
t.preventDefault();
},
_mouseDistanceMet: function (e) {
return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
},
_mouseDelayMet: function () {
return this.mouseDelayMet;
},
_mouseStart: function () {},
_mouseDrag: function () {},
_mouseStop: function () {},
_mouseCapture: function () {
return !0;
},
}),
e.widget("ui.slider", e.ui.mouse, {
version: "1.12.1",
widgetEventPrefix: "slide",
options: {
animate: !1,
classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" },
distance: 0,
max: 100,
min: 0,
orientation: "horizontal",
range: !1,
step: 1,
value: 0,
values: null,
change: null,
slide: null,
start: null,
stop: null,
},
numPages: 5,
_create: function () {
(this._keySliding = !1),
(this._mouseSliding = !1),
(this._animateOff = !0),
(this._handleIndex = null),
this._detectOrientation(),
this._mouseInit(),
this._calculateNewMax(),
this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"),
this._refresh(),
(this._animateOff = !1);
},
_refresh: function () {
this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
},
_createHandles: function () {
var t,
i,
s = this.options,
n = this.element.find(".ui-slider-handle"),
a = [];
for (i = (s.values && s.values.length) || 1, n.length > i && (n.slice(i).remove(), (n = n.slice(0, i))), t = n.length; i > t; t++) a.push("<span tabindex='0'></span>");
(this.handles = n.add(e(a.join("")).appendTo(this.element))),
this._addClass(this.handles, "ui-slider-handle", "ui-state-default"),
(this.handle = this.handles.eq(0)),
this.handles.each(function (t) {
e(this).data("ui-slider-handle-index", t).attr("tabIndex", 0);
});
},
_createRange: function () {
var t = this.options;
t.range
? (!0 === t.range &&
(t.values ? (t.values.length && 2 !== t.values.length ? (t.values = [t.values[0], t.values[0]]) : e.isArray(t.values) && (t.values = t.values.slice(0))) : (t.values = [this._valueMin(), this._valueMin()])),
this.range && this.range.length
? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({ left: "", bottom: "" }))
: ((this.range = e("<div>").appendTo(this.element)), this._addClass(this.range, "ui-slider-range")),
("min" === t.range || "max" === t.range) && this._addClass(this.range, "ui-slider-range-" + t.range))
: (this.range && this.range.remove(), (this.range = null));
},
_setupEvents: function () {
this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
},
_destroy: function () {
this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
},
_mouseCapture: function (t) {
var i,
s,
n,
a,
o,
h,
r,
u = this,
l = this.options;
return (
!l.disabled &&
((this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }),
(this.elementOffset = this.element.offset()),
(i = { x: t.pageX, y: t.pageY }),
(s = this._normValueFromMouse(i)),
(n = this._valueMax() - this._valueMin() + 1),
this.handles.each(function (t) {
var i = Math.abs(s - u.values(t));
(n > i || (n === i && (t === u._lastChangedValue || u.values(t) === l.min))) && ((n = i), (a = e(this)), (o = t));
}),
!1 !== this._start(t, o) &&
((this._mouseSliding = !0),
(this._handleIndex = o),
this._addClass(a, null, "ui-state-active"),
a.trigger("focus"),
(h = a.offset()),
(r = !e(t.target).parents().addBack().is(".ui-slider-handle")),
(this._clickOffset = r
? { left: 0, top: 0 }
: {
left: t.pageX - h.left - a.width() / 2,
top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0),
}),
this.handles.hasClass("ui-state-hover") || this._slide(t, o, s),
(this._animateOff = !0),
!0))
);
},
_mouseStart: function () {
return !0;
},
_mouseDrag: function (e) {
var t = { x: e.pageX, y: e.pageY },
i = this._normValueFromMouse(t);
return this._slide(e, this._handleIndex, i), !1;
},
_mouseStop: function (e) {
return (
this._removeClass(this.handles, null, "ui-state-active"),
(this._mouseSliding = !1),
this._stop(e, this._handleIndex),
this._change(e, this._handleIndex),
(this._handleIndex = null),
(this._clickOffset = null),
(this._animateOff = !1),
!1
);
},
_detectOrientation: function () {
this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
},
_normValueFromMouse: function (e) {
var t, i, s, n, a;
return (
"horizontal" === this.orientation
? ((t = this.elementSize.width), (i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)))
: ((t = this.elementSize.height), (i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0))),
(s = i / t) > 1 && (s = 1),
0 > s && (s = 0),
"vertical" === this.orientation && (s = 1 - s),
(n = this._valueMax() - this._valueMin()),
(a = this._valueMin() + s * n),
this._trimAlignValue(a)
);
},
_uiHash: function (e, t, i) {
var s = { handle: this.handles[e], handleIndex: e, value: void 0 !== t ? t : this.value() };
return this._hasMultipleValues() && ((s.value = void 0 !== t ? t : this.values(e)), (s.values = i || this.values())), s;
},
_hasMultipleValues: function () {
return this.options.values && this.options.values.length;
},
_start: function (e, t) {
return this._trigger("start", e, this._uiHash(t));
},
_slide: function (e, t, i) {
var s,
n = this.value(),
a = this.values();
this._hasMultipleValues() && ((s = this.values(t ? 0 : 1)), (n = this.values(t)), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === t ? Math.min(s, i) : Math.max(s, i)), (a[t] = i)),
i !== n && !1 !== this._trigger("slide", e, this._uiHash(t, i, a)) && (this._hasMultipleValues() ? this.values(t, i) : this.value(i));
},
_stop: function (e, t) {
this._trigger("stop", e, this._uiHash(t));
},
_change: function (e, t) {
this._keySliding || this._mouseSliding || ((this._lastChangedValue = t), this._trigger("change", e, this._uiHash(t)));
},
value: function (e) {
return arguments.length ? ((this.options.value = this._trimAlignValue(e)), this._refreshValue(), void this._change(null, 0)) : this._value();
},
values: function (t, i) {
var s, n, a;
if (arguments.length > 1) return (this.options.values[t] = this._trimAlignValue(i)), this._refreshValue(), void this._change(null, t);
if (!arguments.length) return this._values();
if (!e.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(t) : this.value();
for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) (s[a] = this._trimAlignValue(n[a])), this._change(null, a);
this._refreshValue();
},
_setOption: function (t, i) {
var s,
n = 0;
switch (
("range" === t &&
!0 === this.options.range &&
("min" === i ? ((this.options.value = this._values(0)), (this.options.values = null)) : "max" === i && ((this.options.value = this._values(this.options.values.length - 1)), (this.options.values = null))),
e.isArray(this.options.values) && (n = this.options.values.length),
this._super(t, i),
t)
) {
case "orientation":
this._detectOrientation(),
this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation),
this._refreshValue(),
this.options.range && this._refreshRange(i),
this.handles.css("horizontal" === i ? "bottom" : "left", "");
break;
case "value":
(this._animateOff = !0), this._refreshValue(), this._change(null, 0), (this._animateOff = !1);
break;
case "values":
for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
this._animateOff = !1;
break;
case "step":
case "min":
case "max":
(this._animateOff = !0), this._calculateNewMax(), this._refreshValue(), (this._animateOff = !1);
break;
case "range":
(this._animateOff = !0), this._refresh(), (this._animateOff = !1);
}
},
_setOptionDisabled: function (e) {
this._super(e), this._toggleClass(null, "ui-state-disabled", !!e);
},
_value: function () {
var e = this.options.value;
return (e = this._trimAlignValue(e));
},
_values: function (e) {
var t, i, s;
if (arguments.length) return (t = this.options.values[e]), (t = this._trimAlignValue(t));
if (this._hasMultipleValues()) {
for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
return i;
}
return [];
},
_trimAlignValue: function (e) {
if (this._valueMin() >= e) return this._valueMin();
if (e >= this._valueMax()) return this._valueMax();
var t = this.options.step > 0 ? this.options.step : 1,
i = (e - this._valueMin()) % t,
s = e - i;
return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5));
},
_calculateNewMax: function () {
var e = this.options.max,
t = this._valueMin(),
i = this.options.step;
(e = Math.round((e - t) / i) * i + t) > this.options.max && (e -= i), (this.max = parseFloat(e.toFixed(this._precision())));
},
_precision: function () {
var e = this._precisionOf(this.options.step);
return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e;
},
_precisionOf: function (e) {
var t = "" + e,
i = t.indexOf(".");
return -1 === i ? 0 : t.length - i - 1;
},
_valueMin: function () {
return this.options.min;
},
_valueMax: function () {
return this.max;
},
_refreshRange: function (e) {
"vertical" === e && this.range.css({ width: "", left: "" }), "horizontal" === e && this.range.css({ height: "", bottom: "" });
},
_refreshValue: function () {
var t,
i,
s,
n,
a,
o = this.options.range,
h = this.options,
r = this,
u = !this._animateOff && h.animate,
l = {};
this._hasMultipleValues()
? this.handles.each(function (s) {
(i = ((r.values(s) - r._valueMin()) / (r._valueMax() - r._valueMin())) * 100),
(l["horizontal" === r.orientation ? "left" : "bottom"] = i + "%"),
e(this).stop(1, 1)[u ? "animate" : "css"](l, h.animate),
!0 === r.options.range &&
("horizontal" === r.orientation
? (0 === s && r.range.stop(1, 1)[u ? "animate" : "css"]({ left: i + "%" }, h.animate), 1 === s && r.range[u ? "animate" : "css"]({ width: i - t + "%" }, { queue: !1, duration: h.animate }))
: (0 === s && r.range.stop(1, 1)[u ? "animate" : "css"]({ bottom: i + "%" }, h.animate), 1 === s && r.range[u ? "animate" : "css"]({ height: i - t + "%" }, { queue: !1, duration: h.animate }))),
(t = i);
})
: ((s = this.value()),
(n = this._valueMin()),
(a = this._valueMax()),
(i = a !== n ? ((s - n) / (a - n)) * 100 : 0),
(l["horizontal" === this.orientation ? "left" : "bottom"] = i + "%"),
this.handle.stop(1, 1)[u ? "animate" : "css"](l, h.animate),
"min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({ width: i + "%" }, h.animate),
"max" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({ width: 100 - i + "%" }, h.animate),
"min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({ height: i + "%" }, h.animate),
"max" === o && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({ height: 100 - i + "%" }, h.animate));
},
_handleEvents: {
keydown: function (t) {
var i,
s,
n,
a = e(t.target).data("ui-slider-handle-index");
switch (t.keyCode) {
case e.ui.keyCode.HOME:
case e.ui.keyCode.END:
case e.ui.keyCode.PAGE_UP:
case e.ui.keyCode.PAGE_DOWN:
case e.ui.keyCode.UP:
case e.ui.keyCode.RIGHT:
case e.ui.keyCode.DOWN:
case e.ui.keyCode.LEFT:
if ((t.preventDefault(), !this._keySliding && ((this._keySliding = !0), this._addClass(e(t.target), null, "ui-state-active"), !1 === this._start(t, a)))) return;
}
switch (((n = this.options.step), (i = s = this._hasMultipleValues() ? this.values(a) : this.value()), t.keyCode)) {
case e.ui.keyCode.HOME:
s = this._valueMin();
break;
case e.ui.keyCode.END:
s = this._valueMax();
break;
case e.ui.keyCode.PAGE_UP:
s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
break;
case e.ui.keyCode.PAGE_DOWN:
s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
break;
case e.ui.keyCode.UP:
case e.ui.keyCode.RIGHT:
if (i === this._valueMax()) return;
s = this._trimAlignValue(i + n);
break;
case e.ui.keyCode.DOWN:
case e.ui.keyCode.LEFT:
if (i === this._valueMin()) return;
s = this._trimAlignValue(i - n);
}
this._slide(t, a, s);
},
keyup: function (t) {
var i = e(t.target).data("ui-slider-handle-index");
this._keySliding && ((this._keySliding = !1), this._stop(t, i), this._change(t, i), this._removeClass(e(t.target), null, "ui-state-active"));
},
},
});
});
!(function (e, i, t, s) {
(t.swipebox = function (s, o) {
var n,
a,
r = {
useCSS: !0,
useSVG: !1,
initialIndexOnArray: 0,
removeBarsOnMobile: !0,
hideCloseButtonOnMobile: !1,
hideBars: !1,
hideBarsDelay: 0,
videoMaxWidth: 1140,
vimeoColor: "cccccc",
beforeOpen: null,
afterOpen: null,
afterClose: null,
nextSlide: null,
prevSlide: null,
loopAtEnd: !1,
autoplayVideos: !1,
queryStringData: {},
toggleClassOnLoad: "",
},
l = this,
d = [],
p = s.selector,
c = t(p),
b = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),
u = null !== b || void 0 !== i.createTouch || "ontouchstart" in e || "onmsgesturechange" in e || navigator.msMaxTouchPoints,
h = !!i.createElementNS && !!i.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
w = e.innerWidth ? e.innerWidth : t(e).width(),
g = e.innerHeight ? e.innerHeight : t(e).height(),
f = 0;
(l.settings = {}),
(t.swipebox.close = function () {
n.closeSlide();
}),
(t.swipebox.extend = function () {
return n;
}),
(l.init = function () {
(l.settings = t.extend({}, r, o)),
t.isArray(s)
? ((d = s), (n.target = t(e)), n.init(l.settings.initialIndexOnArray))
: t(i).on("click", p, function (e) {
if ("slide current" === e.target.parentNode.className) return !1;
t.isArray(s) || (n.destroy(), (a = t(p)), n.actions()), (d = []);
var i, o, r;
r || ((o = "data-rel"), (r = t(this).attr(o))),
r || ((o = "rel"), (r = t(this).attr(o))),
(a = r && "" !== r && "nofollow" !== r ? c.filter("[" + o + '="' + r + '"]') : t(p)).each(function () {
var e = null,
i = null;
t(this).attr("title") && (e = t(this).attr("title")), t(this).attr("href") && (i = t(this).attr("href")), d.push({ href: i, title: e });
}),
(i = a.index(t(this))),
e.preventDefault(),
e.stopPropagation(),
(n.target = t(e.target)),
n.init(i);
});
}),
(n = {
init: function (e) {
l.settings.beforeOpen && l.settings.beforeOpen(),
this.target.trigger("swipebox-start"),
(t.swipebox.isOpen = !0),
this.build(),
this.openSlide(e),
this.openMedia(e),
this.preloadMedia(e + 1),
this.preloadMedia(e - 1),
l.settings.afterOpen && l.settings.afterOpen();
},
build: function () {
var e,
i = this;
t("body").append(
'<div id="swipebox-overlay">                    <div id="swipebox-container">                        <div id="swipebox-slider"></div>                        <div id="swipebox-top-bar">                            <div id="swipebox-title"></div>                        </div>                        <div id="swipebox-bottom-bar">                            <div id="swipebox-arrows">                                <a id="swipebox-prev"></a>                                <a id="swipebox-next"></a>                            </div>                        </div>                        <a id="swipebox-close"></a>                    </div>            </div>'
),
h && !0 === l.settings.useSVG && ((e = (e = t("#swipebox-close").css("background-image")).replace("png", "svg")), t("#swipebox-prev, #swipebox-next, #swipebox-close").css({ "background-image": e })),
b && l.settings.removeBarsOnMobile && t("#swipebox-bottom-bar, #swipebox-top-bar").remove(),
t.each(d, function () {
t("#swipebox-slider").append('<div class="slide"></div>');
}),
i.setDim(),
i.actions(),
u && i.gesture(),
i.keyboard(),
i.wheel(),
i.animBars(),
i.resize();
},
setDim: function () {
var i,
s,
o = {};
"onorientationchange" in e
? e.addEventListener(
"orientationchange",
function () {
0 === e.orientation ? ((i = w), (s = g)) : (90 !== e.orientation && -90 !== e.orientation) || ((i = g), (s = w));
},
!1
)
: ((i = e.innerWidth ? e.innerWidth : t(e).width()), (s = e.innerHeight ? e.innerHeight : t(e).height())),
(o = { width: i, height: s }),
t("#swipebox-overlay").css(o);
},
resize: function () {
var i = this;
t(e)
.resize(function () {
i.setDim();
})
.resize();
},
supportTransition: function () {
var e,
t = "transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" ");
for (e = 0; e < t.length; e++) if (void 0 !== i.createElement("div").style[t[e]]) return t[e];
return !1;
},
doCssTrans: function () {
if (l.settings.useCSS && this.supportTransition()) return !0;
},
gesture: function () {
var e,
i,
s,
o,
n,
a,
r = this,
l = !1,
p = !1,
c = {},
b = {},
u = t("#swipebox-top-bar, #swipebox-bottom-bar"),
h = t("#swipebox-slider");
u.addClass("visible-bars"),
r.setTimeout(),
t("body")
.bind("touchstart", function (r) {
return (
t(this).addClass("touching"),
(e = t("#swipebox-slider .slide").index(t("#swipebox-slider .slide.current"))),
(b = r.originalEvent.targetTouches[0]),
(c.pageX = r.originalEvent.targetTouches[0].pageX),
(c.pageY = r.originalEvent.targetTouches[0].pageY),
t("#swipebox-slider").css({ "-webkit-transform": "translate3d(" + f + "%, 0, 0)", transform: "translate3d(" + f + "%, 0, 0)" }),
t(".touching").bind("touchmove", function (r) {
if ((r.preventDefault(), r.stopPropagation(), (b = r.originalEvent.targetTouches[0]), !p && ((n = s), (s = b.pageY - c.pageY), Math.abs(s) >= 50 || l))) {
var u = 0.75 - Math.abs(s) / h.height();
h.css({ top: s + "px" }), h.css({ opacity: u }), (l = !0);
}
(o = i),
(i = b.pageX - c.pageX),
(a = (100 * i) / w),
!p && !l && Math.abs(i) >= 10 && (t("#swipebox-slider").css({ "-webkit-transition": "", transition: "" }), (p = !0)),
p &&
(0 < i
? 0 === e
? t("#swipebox-overlay").addClass("leftSpringTouch")
: (t("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),
t("#swipebox-slider").css({ "-webkit-transform": "translate3d(" + (f + a) + "%, 0, 0)", transform: "translate3d(" + (f + a) + "%, 0, 0)" }))
: 0 > i &&
(d.length === e + 1
? t("#swipebox-overlay").addClass("rightSpringTouch")
: (t("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),
t("#swipebox-slider").css({ "-webkit-transform": "translate3d(" + (f + a) + "%, 0, 0)", transform: "translate3d(" + (f + a) + "%, 0, 0)" }))));
}),
!1
);
})
.bind("touchend", function (e) {
if (
(e.preventDefault(),
e.stopPropagation(),
t("#swipebox-slider").css({ "-webkit-transition": "-webkit-transform 0.4s ease", transition: "transform 0.4s ease" }),
(s = b.pageY - c.pageY),
(i = b.pageX - c.pageX),
(a = (100 * i) / w),
l)
)
if (((l = !1), Math.abs(s) >= 100 && Math.abs(s) > Math.abs(n))) {
var d = s > 0 ? h.height() : -h.height();
h.animate({ top: d + "px", opacity: 0 }, 300, function () {
r.closeSlide();
});
} else h.animate({ top: 0, opacity: 1 }, 300);
else p ? ((p = !1), i >= 10 && i >= o ? r.getPrev() : i <= -10 && i <= o && r.getNext()) : u.hasClass("visible-bars") ? (r.clearTimeout(), r.hideBars()) : (r.showBars(), r.setTimeout());
t("#swipebox-slider").css({ "-webkit-transform": "translate3d(" + f + "%, 0, 0)", transform: "translate3d(" + f + "%, 0, 0)" }),
t("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),
t(".touching").off("touchmove").removeClass("touching");
});
},
setTimeout: function () {
if (l.settings.hideBarsDelay > 0) {
var i = this;
i.clearTimeout(),
(i.timeout = e.setTimeout(function () {
!0 === l.settings.hideBars && i.hideBars();
}, l.settings.hideBarsDelay));
}
},
clearTimeout: function () {
e.clearTimeout(this.timeout), (this.timeout = null);
},
showBars: function () {
var e = t("#swipebox-top-bar, #swipebox-bottom-bar");
this.doCssTrans()
? e.addClass("visible-bars")
: (t("#swipebox-top-bar").animate({ top: 0 }, 500),
setTimeout(function () {
e.addClass("visible-bars");
}, 1e3));
},
hideBars: function () {
var e = t("#swipebox-top-bar, #swipebox-bottom-bar");
this.doCssTrans()
? e.removeClass("visible-bars")
: (t("#swipebox-top-bar").animate({ top: "-50px" }, 500),
t("#swipebox-bottom-bar").animate({ bottom: "-50px" }, 500),
setTimeout(function () {
e.removeClass("visible-bars");
}, 1e3));
},
animBars: function () {
var e = this,
i = t("#swipebox-top-bar, #swipebox-bottom-bar");
i.addClass("visible-bars"),
e.setTimeout(),
t("#swipebox-slider").click(function () {
i.hasClass("visible-bars") || (e.showBars(), e.setTimeout());
}),
t("#swipebox-bottom-bar").hover(
function () {
e.showBars(), i.addClass("visible-bars"), e.clearTimeout();
},
function () {
l.settings.hideBarsDelay > 0 && (i.removeClass("visible-bars"), e.setTimeout());
}
);
},
keyboard: function () {
var i = this;
t(e).bind("keyup", function (e) {
e.preventDefault(), e.stopPropagation(), 37 === e.keyCode ? i.getPrev() : 39 === e.keyCode ? i.getNext() : 27 === e.keyCode && i.closeSlide();
});
},
wheel: function () {
var e = this;
t("#swipebox-overlay").on("wheel", function (i) {
i.preventDefault();
var t = i.originalEvent;
(t.deltaY || t.wheelDelta) > 0 ? e.getPrev() : e.getNext();
});
},
actions: function () {
var e = this,
i = "touchend click";
d.length < 2
? (t("#swipebox-bottom-bar").hide(), void 0 === d[1] && t("#swipebox-top-bar").hide())
: (t("#swipebox-prev").bind(i, function (i) {
i.preventDefault(), i.stopPropagation(), e.getPrev(), e.setTimeout();
}),
t("#swipebox-next").bind(i, function (i) {
i.preventDefault(), i.stopPropagation(), e.getNext(), e.setTimeout();
})),
t("#swipebox-close, #swipebox-slider").bind(i, function () {
e.closeSlide();
});
},
setSlide: function (e, i) {
i = i || !1;
var s = t("#swipebox-slider");
(f = 100 * -e),
this.doCssTrans() ? s.css({ "-webkit-transform": "translate3d(" + 100 * -e + "%, 0, 0)", transform: "translate3d(" + 100 * -e + "%, 0, 0)" }) : s.animate({ left: 100 * -e + "%" }),
t("#swipebox-slider .slide").removeClass("current"),
t("#swipebox-slider .slide").eq(e).addClass("current"),
this.setTitle(e),
i && s.fadeIn(),
t("#swipebox-prev, #swipebox-next").removeClass("disabled"),
0 === e ? t("#swipebox-prev").addClass("disabled") : e === d.length - 1 && !0 !== l.settings.loopAtEnd && t("#swipebox-next").addClass("disabled");
},
openSlide: function (i) {
t("html").addClass("swipebox-html"),
u ? (t("html").addClass("swipebox-touch"), l.settings.hideCloseButtonOnMobile && t("html").addClass("swipebox-no-close-button")) : t("html").addClass("swipebox-no-touch"),
t(e).trigger("resize"),
this.setSlide(i, !0);
},
preloadMedia: function (e) {
var i = this,
t = null;
void 0 !== d[e] && (t = d[e].href),
i.isVideo(t)
? i.openMedia(e)
: setTimeout(function () {
i.openMedia(e);
}, 1e3);
},
openMedia: function (e) {
var i,
s,
o = this;
if ((void 0 !== d[e] && (i = d[e].href), e < 0 || e >= d.length)) return !1;
(s = t("#swipebox-slider .slide").eq(e)),
o.isVideo(i)
? s.html(o.getVideo(i))
: (s.addClass("slide-loading"),
o.loadMedia(i, function () {
s.removeClass("slide-loading"), s.html(this);
}));
},
setTitle: function (e) {
var i = null;
t("#swipebox-title").empty(), void 0 !== d[e] && (i = d[e].title), i ? (t("#swipebox-top-bar").show(), t("#swipebox-title").append(i)) : t("#swipebox-top-bar").hide();
},
isVideo: function (e) {
if (e) {
if (e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/vimeo\.com\/([0-9]*)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)) return !0;
if (e.toLowerCase().indexOf("swipeboxvideo=1") >= 0) return !0;
}
},
parseUri: function (e, s) {
var o = i.createElement("a"),
n = {};
return (
(o.href = decodeURIComponent(e)),
o.search && (n = JSON.parse('{"' + o.search.toLowerCase().replace("?", "").replace(/&/g, '","').replace(/=/g, '":"') + '"}')),
t.isPlainObject(s) && (n = t.extend(n, s, l.settings.queryStringData)),
t
.map(n, function (e, i) {
if (e && e > "") return encodeURIComponent(i) + "=" + encodeURIComponent(e);
})
.join("&")
);
},
getVideo: function (e) {
var i = "",
t = e.match(/((?:www\.)?youtube\.com|(?:www\.)?youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/),
s = e.match(/(?:www\.)?youtu\.be\/([a-zA-Z0-9\-_]+)/),
o = e.match(/(?:www\.)?vimeo\.com\/([0-9]*)/),
a = "";
return (
t || s
? (s && (t = s),
(a = n.parseUri(e, { autoplay: l.settings.autoplayVideos ? "1" : "0", v: "" })),
(i = '<iframe width="560" height="315" src="//' + t[1] + "/embed/" + t[2] + "?" + a + '" frameborder="0" allowfullscreen></iframe>'))
: o
? ((a = n.parseUri(e, { autoplay: l.settings.autoplayVideos ? "1" : "0", byline: "0", portrait: "0", color: l.settings.vimeoColor })),
(i = '<iframe width="560" height="315"  src="//player.vimeo.com/video/' + o[1] + "?" + a + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'))
: (i = '<iframe width="560" height="315" src="' + e + '" frameborder="0" allowfullscreen></iframe>'),
'<div class="swipebox-video-container" style="max-width:' + l.settings.videoMaxWidth + 'px"><div class="swipebox-video">' + i + "</div></div>"
);
},
loadMedia: function (e, i) {
if (0 === e.trim().indexOf("#")) i.call(t("<div>", { class: "swipebox-inline-container" }).append(t(e).clone().toggleClass(l.settings.toggleClassOnLoad)));
else if (!this.isVideo(e)) {
var s = t("<img>").on("load", function () {
i.call(s);
});
s.attr("src", e);
}
},
getNext: function () {
var e,
i = this,
s = t("#swipebox-slider .slide").index(t("#swipebox-slider .slide.current"));
s + 1 < d.length
? ((e = t("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src")),
t("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src", e),
s++,
i.setSlide(s),
i.preloadMedia(s + 1),
l.settings.nextSlide && l.settings.nextSlide())
: !0 === l.settings.loopAtEnd
? ((e = t("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src")),
t("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src", e),
(s = 0),
i.preloadMedia(s),
i.setSlide(s),
i.preloadMedia(s + 1),
l.settings.nextSlide && l.settings.nextSlide())
: (t("#swipebox-overlay").addClass("rightSpring"),
setTimeout(function () {
t("#swipebox-overlay").removeClass("rightSpring");
}, 500));
},
getPrev: function () {
var e,
i = t("#swipebox-slider .slide").index(t("#swipebox-slider .slide.current"));
i > 0
? ((e = t("#swipebox-slider .slide").eq(i).contents().find("iframe").attr("src")),
t("#swipebox-slider .slide").eq(i).contents().find("iframe").attr("src", e),
i--,
this.setSlide(i),
this.preloadMedia(i - 1),
l.settings.prevSlide && l.settings.prevSlide())
: (t("#swipebox-overlay").addClass("leftSpring"),
setTimeout(function () {
t("#swipebox-overlay").removeClass("leftSpring");
}, 500));
},
nextSlide: function () {},
prevSlide: function () {},
closeSlide: function () {
t("html").removeClass("swipebox-html"), t("html").removeClass("swipebox-touch"), t(e).trigger("resize"), this.destroy();
},
destroy: function () {
t(e).unbind("keyup"),
t("body").unbind("touchstart"),
t("body").unbind("touchmove"),
t("body").unbind("touchend"),
t("#swipebox-slider").unbind(),
t("#swipebox-overlay").remove(),
t.isArray(s) || s.removeData("_swipebox"),
this.target && this.target.trigger("swipebox-destroy"),
(t.swipebox.isOpen = !1),
l.settings.afterClose && l.settings.afterClose();
},
}),
l.init();
}),
(t.fn.swipebox = function (e) {
if (!t.data(this, "_swipebox")) {
var i = new t.swipebox(this, e);
this.data("_swipebox", i);
}
return this.data("_swipebox");
});
})(window, document, jQuery);
!(function (e) {
"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? (module.exports = e(require("jquery"))) : e(jQuery);
})(function (t) {
function z(e, s) {
(this.element = e), (this.options = t.extend({}, i, s)), this.init();
}
function H(e) {
if (!t(e.target).parents().hasClass("jq-selectbox") && "OPTION" != e.target.nodeName && t("div.jq-selectbox.opened").length) {
e = t("div.jq-selectbox.opened");
var i = t("div.jq-selectbox__search input", e),
l = t("div.jq-selectbox__dropdown", e);
e
.find("select")
.data("_" + s)
.options.onSelectClosed.call(e),
i.length && i.val("").keyup(),
l.hide().find("li.sel").addClass("selected"),
e.removeClass("focused opened dropup dropdown");
}
}
var s = "styler",
i = {
wrapper: "form",
idSuffix: "-styler",
filePlaceholder: " ¤ °   »    µ   N‹ ±N€ °  ",
fileBrowse: " z ± ·  N€...",
selectPlaceholder: " ’N‹ ± µN€  N‚ µ...",
selectSearch: !1,
selectSearchLimit: 10,
selectSearchNotFound: "         °   µ          µ    °     µ    ",
selectSearchPlaceholder: " Y    N   ...",
selectVisibleOptions: 0,
singleSelectzIndex: "100",
selectSmartPositioning: !0,
onSelectOpened: function () {},
onSelectClosed: function () {},
onFormStyled: function () {},
};
(z.prototype = {
init: function () {
function c() {
var e = "",
t = "",
l = "",
o = "";
void 0 !== s.attr("id") && "" !== s.attr("id") && (e = ' id="' + s.attr("id") + i.idSuffix + '"'),
void 0 !== s.attr("title") && "" !== s.attr("title") && (t = ' title="' + s.attr("title") + '"'),
void 0 !== s.attr("class") && "" !== s.attr("class") && (l = " " + s.attr("class"));
var a,
d = s.data();
for (a in d) "" !== d[a] && "_styler" !== a && (o += " data-" + a + '="' + d[a] + '"');
(this.id = e + o), (this.title = t), (this.classes = l);
}
var s = t(this.element),
i = this.options,
l = !(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i) || navigator.userAgent.match(/(Windows\sPhone)/i)),
o = !(!navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/(Windows\sPhone)/i));
if (s.is(":checkbox")) {
var a = function () {
var e = new c(),
i = t("<div" + e.id + ' class="jq-checkbox' + e.classes + '"' + e.title + '><div class="jq-checkbox__div"></div></div>');
s.css({ position: "absolute", zIndex: "-1", opacity: 0, margin: 0, padding: 0 }).after(i).prependTo(i),
i
.attr("unselectable", "on")
.css({ "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "-o-user-select": "none", "user-select": "none", display: "inline-block", position: "relative", overflow: "hidden" }),
s.is(":checked") && i.addClass("checked"),
s.is(":disabled") && i.addClass("disabled"),
i.on("click.styler", function () {
return i.is(".disabled") || (s.is(":checked") ? (s.prop("checked", !1), i.removeClass("checked")) : (s.prop("checked", !0), i.addClass("checked")), s.change()), !1;
}),
s
.closest("label")
.add('label[for="' + s.attr("id") + '"]')
.on("click.styler", function (e) {
t(e.target).is("a") || (i.click(), e.preventDefault());
}),
s
.on("change.styler", function () {
s.is(":checked") ? i.addClass("checked") : i.removeClass("checked");
})
.on("keydown.styler", function (e) {
32 == e.which && i.click();
})
.on("focus.styler", function () {
i.is(".disabled") || i.addClass("focused");
})
.on("blur.styler", function () {
i.removeClass("focused");
});
};
a(),
s.on("refresh", function () {
s.off(".styler").parent().before(s).remove(), a();
});
} else if (s.is(":radio")) {
var n = function () {
var e = new c(),
l = t("<div" + e.id + ' class="jq-radio' + e.classes + '"' + e.title + '><div class="jq-radio__div"></div></div>');
s.css({ position: "absolute", zIndex: "-1", opacity: 0, margin: 0, padding: 0 }).after(l).prependTo(l),
l
.attr("unselectable", "on")
.css({ "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "-o-user-select": "none", "user-select": "none", display: "inline-block", position: "relative" }),
s.is(":checked") && l.addClass("checked"),
s.is(":disabled") && l.addClass("disabled"),
l.on("click.styler", function () {
return (
l.is(".disabled") ||
(l
.closest(i.wrapper)
.find('input[name="' + s.attr("name") + '"]')
.prop("checked", !1)
.parent()
.removeClass("checked"),
s.prop("checked", !0).parent().addClass("checked"),
s.change()),
!1
);
}),
s
.closest("label")
.add('label[for="' + s.attr("id") + '"]')
.on("click.styler", function (e) {
t(e.target).is("a") || (l.click(), e.preventDefault());
}),
s
.on("change.styler", function () {
s.parent().addClass("checked");
})
.on("focus.styler", function () {
l.is(".disabled") || l.addClass("focused");
})
.on("blur.styler", function () {
l.removeClass("focused");
});
};
n(),
s.on("refresh", function () {
s.off(".styler").parent().before(s).remove(), n();
});
} else if (s.is(":file")) {
s.css({ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", opacity: 0, margin: 0, padding: 0 });
var r = function () {
var e = new c(),
l = s.data("placeholder");
void 0 === l && (l = i.filePlaceholder);
var o = s.data("browse");
(void 0 !== o && "" !== o) || (o = i.fileBrowse);
var a = t("<div" + e.id + ' class="jq-file' + e.classes + '"' + e.title + ' style="display: inline-block; position: relative; overflow: hidden"></div>'),
d = t('<div class="jq-file__name">' + l + "</div>").appendTo(a);
t('<div class="jq-file__browse">' + o + "</div>").appendTo(a),
s.after(a).appendTo(a),
s.is(":disabled") && a.addClass("disabled"),
s
.on("change.styler", function () {
e = s.val();
if (s.is("[multiple]")) for (var e = "", t = s[0].files, i = 0; i < t.length; i++) e += (0 < i ? ", " : "") + t[i].name;
d.text(e.replace(/.+[\\\/]/, "")), "" === e ? (d.text(l), a.removeClass("changed")) : a.addClass("changed");
})
.on("focus.styler", function () {
a.addClass("focused");
})
.on("blur.styler", function () {
a.removeClass("focused");
})
.on("click.styler", function () {
a.removeClass("focused");
});
};
r(),
s.on("refresh", function () {
s.off(".styler").parent().before(s).remove(), r();
});
} else if (s.is('input[type="number"]')) {
var h = function () {
var e = t('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>');
s.after(e).prependTo(e).wrap('<div class="jq-number__field"></div>'), s.is(":disabled") && e.addClass("disabled");
var i,
l,
o,
a = null,
d = null;
void 0 !== s.attr("min") && (i = s.attr("min")), void 0 !== s.attr("max") && (l = s.attr("max")), (o = void 0 !== s.attr("step") && t.isNumeric(s.attr("step")) ? Number(s.attr("step")) : Number(1));
var n = function (e) {
var a,
d = s.val();
t.isNumeric(d) || ((d = 0), s.val("0")),
e.is(".minus") ? ((a = parseInt(d, 10) - o), 0 < o && (a = Math.ceil(a / o) * o)) : e.is(".plus") && ((a = parseInt(d, 10) + o), 0 < o && (a = Math.floor(a / o) * o)),
t.isNumeric(i) && t.isNumeric(l) ? a >= i && a <= l && s.val(a) : t.isNumeric(i) && !t.isNumeric(l) ? a >= i && s.val(a) : !t.isNumeric(i) && t.isNumeric(l) ? a <= l && s.val(a) : s.val(a);
};
e.is(".disabled") ||
(e
.on("mousedown.styler", "div.jq-number__spin", function () {
var e = t(this);
n(e),
(a = setTimeout(function () {
d = setInterval(function () {
n(e);
}, 40);
}, 350));
})
.on("mouseup.styler mouseout.styler", "div.jq-number__spin", function () {
clearTimeout(a), clearInterval(d);
}),
s
.on("focus.styler", function () {
e.addClass("focused");
})
.on("blur.styler", function () {
e.removeClass("focused");
}));
};
h(),
s.on("refresh", function () {
s.off(".styler").closest(".jq-number").before(s).remove(), h();
});
} else if (s.is("select")) {
var f = function () {
function u(e) {
e.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function (e) {
var s = null;
"mousewheel" == e.type ? (s = -1 * e.originalEvent.wheelDelta) : "DOMMouseScroll" == e.type && (s = 40 * e.originalEvent.detail),
s && (e.stopPropagation(), e.preventDefault(), t(this).scrollTop(s + t(this).scrollTop()));
});
}
function d() {
for (var e = 0; e < a.length; e++) {
var t = a.eq(e),
s = "",
l = "",
o = (s = ""),
d = "",
r = "",
c = "",
h = "",
f = "";
t.prop("selected") && (l = "selected sel"),
t.is(":disabled") && (l = "disabled"),
t.is(":selected:disabled") && (l = "selected sel disabled"),
void 0 !== t.attr("id") && "" !== t.attr("id") && (o = ' id="' + t.attr("id") + i.idSuffix + '"'),
void 0 !== t.attr("title") && "" !== a.attr("title") && (d = ' title="' + t.attr("title") + '"'),
void 0 !== t.attr("class") && ((c = " " + t.attr("class")), (f = ' data-jqfs-class="' + t.attr("class") + '"'));
var p,
u = t.data();
for (p in u) "" !== u[p] && (r += " data-" + p + '="' + u[p] + '"');
"" !== l + c && (s = ' class="' + l + c + '"'),
(s = "<li" + f + r + s + d + o + ">" + t.html() + "</li>"),
t.parent().is("optgroup") &&
(void 0 !== t.parent().attr("class") && (h = " " + t.parent().attr("class")),
(s = "<li" + f + r + ' class="' + l + c + " option" + h + '"' + d + o + ">" + t.html() + "</li>"),
t.is(":first-child") && (s = '<li class="optgroup' + h + '">' + t.parent().attr("label") + "</li>" + s)),
(n += s);
}
}
var a = t("option", s),
n = "";
s.is("[multiple]")
? o ||
l ||
(function e() {
var e = new c(),
i = t("<div" + e.id + ' class="jq-select-multiple jqselect' + e.classes + '"' + e.title + ' style="display: inline-block; position: relative"></div>');
s.css({ margin: 0, padding: 0 }).after(i), d(), i.append("<ul>" + n + "</ul>");
var l = t("ul", i).css({ position: "relative", "overflow-x": "hidden", "-webkit-overflow-scrolling": "touch" }),
o = t("li", i).attr("unselectable", "on"),
e = s.attr("size"),
r = l.outerHeight(),
h = o.outerHeight();
void 0 !== e && 0 < e ? l.css({ height: h * e }) : l.css({ height: 4 * h }),
r > i.height() && (l.css("overflowY", "scroll"), u(l), o.filter(".selected").length && l.scrollTop(l.scrollTop() + o.filter(".selected").position().top)),
s.prependTo(i).css({ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", opacity: 0 }),
s.is(":disabled")
? (i.addClass("disabled"),
a.each(function () {
t(this).is(":selected") && o.eq(t(this).index()).addClass("selected");
}))
: (o.filter(":not(.disabled):not(.optgroup)").click(function (e) {
s.focus();
var i = t(this);
if (
(e.ctrlKey || e.metaKey || i.addClass("selected"),
e.shiftKey || i.addClass("first"),
e.ctrlKey || e.metaKey || e.shiftKey || i.siblings().removeClass("selected first"),
(e.ctrlKey || e.metaKey) && (i.is(".selected") ? i.removeClass("selected first") : i.addClass("selected first"), i.siblings().removeClass("first")),
e.shiftKey)
) {
var l = !1,
d = !1;
i.siblings().removeClass("selected").siblings(".first").addClass("selected"),
i.prevAll().each(function () {
t(this).is(".first") && (l = !0);
}),
i.nextAll().each(function () {
t(this).is(".first") && (d = !0);
}),
l &&
i.prevAll().each(function () {
if (t(this).is(".selected")) return !1;
t(this).not(".disabled, .optgroup").addClass("selected");
}),
d &&
i.nextAll().each(function () {
if (t(this).is(".selected")) return !1;
t(this).not(".disabled, .optgroup").addClass("selected");
}),
1 == o.filter(".selected").length && i.addClass("first");
}
a.prop("selected", !1),
o.filter(".selected").each(function () {
var e = t(this),
s = e.index();
e.is(".option") && (s -= e.prevAll(".optgroup").length), a.eq(s).prop("selected", !0);
}),
s.change();
}),
a.each(function (e) {
t(this).data("optionIndex", e);
}),
s
.on("change.styler", function () {
o.removeClass("selected");
var e = [];
a.filter(":selected").each(function () {
e.push(t(this).data("optionIndex"));
}),
o
.not(".optgroup")
.filter(function (s) {
return -1 < t.inArray(s, e);
})
.addClass("selected");
})
.on("focus.styler", function () {
i.addClass("focused");
})
.on("blur.styler", function () {
i.removeClass("focused");
}),
r > i.height() &&
s.on("keydown.styler", function (e) {
(38 != e.which && 37 != e.which && 33 != e.which) || l.scrollTop(l.scrollTop() + o.filter(".selected").position().top - h),
(40 != e.which && 39 != e.which && 34 != e.which) || l.scrollTop(l.scrollTop() + o.filter(".selected:last").position().top - l.innerHeight() + 2 * h);
}));
})()
: (function z() {
var e = new c(),
o = "",
r = s.data("placeholder"),
h = s.data("search"),
f = s.data("search-limit"),
p = s.data("search-not-found"),
v = s.data("search-placeholder"),
m = s.data("z-index"),
g = s.data("smart-positioning");
void 0 === r && (r = i.selectPlaceholder),
(void 0 !== h && "" !== h) || (h = i.selectSearch),
(void 0 !== f && "" !== f) || (f = i.selectSearchLimit),
(void 0 !== p && "" !== p) || (p = i.selectSearchNotFound),
void 0 === v && (v = i.selectSearchPlaceholder),
(void 0 !== m && "" !== m) || (m = i.singleSelectzIndex),
(void 0 !== g && "" !== g) || (g = i.selectSmartPositioning);
var b = t(
"<div" +
e.id +
' class="jq-selectbox jqselect' +
e.classes +
'" style="display: inline-block; position: relative; z-index:' +
m +
'"><div class="jq-selectbox__select"' +
e.title +
' style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>'
);
s.css({ margin: 0, padding: 0 }).after(b).prependTo(b);
var y = t("div.jq-selectbox__select", b),
C = t("div.jq-selectbox__select-text", b),
e = a.filter(":selected");
d(), h && (o = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + v + '"></div><div class="jq-selectbox__not-found">' + p + "</div>");
var w = t('<div class="jq-selectbox__dropdown" style="position: absolute">' + o + '<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">' + n + "</ul></div>");
b.append(w);
var x = t("ul", w),
q = t("li", w),
j = t("input", w),
_ = t("div.jq-selectbox__not-found", w).hide();
q.length < f && j.parent().hide(), "" === s.val() ? C.text(r).addClass("placeholder") : C.text(e.text());
var k = 0,
T = 0;
q.each(function () {
var e = t(this);
e.css({ display: "inline-block" }), e.innerWidth() > k && ((k = e.innerWidth()), (T = e.width())), e.css({ display: "" });
}),
C.is(".placeholder") && C.width() > k ? C.width(C.width()) : ((o = b.clone().appendTo("body").width("auto")), (h = o.outerWidth()), o.remove(), h == b.outerWidth() && C.width(T)),
k > b.width() && w.width(k),
"" === a.first().text() && "" !== s.data("placeholder") && q.first().hide(),
s.css({ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", opacity: 0 });
var S = b.outerHeight(),
z = j.outerHeight(),
A = x.css("max-height");
1 > (o = q.filter(".selected")).length && q.first().addClass("selected sel"), void 0 === q.data("li-height") && q.data("li-height", q.outerHeight());
var I = w.css("top");
if (
("auto" == w.css("left") && w.css({ left: 0 }),
"auto" == w.css("top") && w.css({ top: S }),
w.hide(),
o.length && (a.first().text() != e.text() && b.addClass("changed"), b.data("jqfs-class", o.data("jqfs-class")), b.addClass(o.data("jqfs-class"))),
s.is(":disabled"))
)
return b.addClass("disabled"), !1;
y.click(function () {
if ((t("div.jq-selectbox").filter(".opened").length && i.onSelectClosed.call(t("div.jq-selectbox").filter(".opened")), s.focus(), !l)) {
var e = t(window),
o = q.data("li-height"),
d = b.offset().top,
n = e.height() - S - (d - e.scrollTop());
(void 0 !== (h = s.data("visible-options")) && "" !== h) || (h = i.selectVisibleOptions);
var r = 5 * o,
c = o * h;
0 < h && 6 > h && (r = c), 0 === h && (c = "auto");
var h = function () {
w.height("auto").css({ bottom: "auto", top: I });
var e = function () {
x.css("max-height", Math.floor((n - 20 - z) / o) * o);
};
e(), x.css("max-height", c), "none" != A && x.css("max-height", A), n < w.outerHeight() + 20 && e();
};
return (
!0 === g || 1 === g
? n > r + z + 20
? (h(), b.removeClass("dropup").addClass("dropdown"))
: ((function () {
w.height("auto").css({ top: "auto", bottom: I });
var t = function () {
x.css("max-height", Math.floor((d - e.scrollTop() - 20 - z) / o) * o);
};
t(), x.css("max-height", c), "none" != A && x.css("max-height", A), d - e.scrollTop() - 20 < w.outerHeight() + 20 && t();
})(),
b.removeClass("dropdown").addClass("dropup"))
: (!1 === g || 0 === g) && n > r + z + 20 && (h(), b.removeClass("dropup").addClass("dropdown")),
b.offset().left + w.outerWidth() > e.width() && w.css({ left: "auto", right: 0 }),
t("div.jqselect")
.css({ zIndex: m - 1 })
.removeClass("opened"),
b.css({ zIndex: m }),
w.is(":hidden")
? (t("div.jq-selectbox__dropdown:visible").hide(), w.show(), b.addClass("opened focused"), i.onSelectOpened.call(b))
: (w.hide(), b.removeClass("opened dropup dropdown"), t("div.jq-selectbox").filter(".opened").length && i.onSelectClosed.call(b)),
j.length &&
(j.val("").keyup(),
_.hide(),
j.keyup(function () {
var e = t(this).val();
q.each(function () {
t(this)
.html()
.match(RegExp(".*?" + e + ".*?", "i"))
? t(this).show()
: t(this).hide();
}),
"" === a.first().text() && "" !== s.data("placeholder") && q.first().hide(),
1 > q.filter(":visible").length ? _.show() : _.hide();
})),
q.filter(".selected").length &&
("" === s.val() ? x.scrollTop(0) : (0 != (x.innerHeight() / o) % 2 && (o /= 2), x.scrollTop(x.scrollTop() + q.filter(".selected").position().top - x.innerHeight() / 2 + o))),
u(x),
!1
);
}
}),
q.hover(function () {
t(this).siblings().removeClass("selected");
}),
q.filter(".selected").text(),
q.filter(":not(.disabled):not(.optgroup)").click(function () {
s.focus();
var e = t(this),
l = e.text();
if (!e.is(".selected")) {
var o = (o = e.index()) - e.prevAll(".optgroup").length;
e.addClass("selected sel").siblings().removeClass("selected sel"),
a.prop("selected", !1).eq(o).prop("selected", !0),
C.text(l),
b.data("jqfs-class") && b.removeClass(b.data("jqfs-class")),
b.data("jqfs-class", e.data("jqfs-class")),
b.addClass(e.data("jqfs-class")),
s.change();
}
w.hide(), b.removeClass("opened dropup dropdown"), i.onSelectClosed.call(b);
}),
w.mouseout(function () {
t("li.sel", w).addClass("selected");
}),
s
.on("change.styler", function () {
C.text(a.filter(":selected").text()).removeClass("placeholder"),
q.removeClass("selected sel").not(".optgroup").eq(s[0].selectedIndex).addClass("selected sel"),
a.first().text() != q.filter(".selected").text() ? b.addClass("changed") : b.removeClass("changed");
})
.on("focus.styler", function () {
b.addClass("focused"), t("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide();
})
.on("blur.styler", function () {
b.removeClass("focused");
})
.on("keydown.styler keyup.styler", function (e) {
var t = q.data("li-height");
"" === s.val() ? C.text(r).addClass("placeholder") : C.text(a.filter(":selected").text()),
q.removeClass("selected sel").not(".optgroup").eq(s[0].selectedIndex).addClass("selected sel"),
(38 != e.which && 37 != e.which && 33 != e.which && 36 != e.which) || ("" === s.val() ? x.scrollTop(0) : x.scrollTop(x.scrollTop() + q.filter(".selected").position().top)),
(40 != e.which && 39 != e.which && 34 != e.which && 35 != e.which) || x.scrollTop(x.scrollTop() + q.filter(".selected").position().top - x.innerHeight() + t),
13 == e.which && (e.preventDefault(), w.hide(), b.removeClass("opened dropup dropdown"), i.onSelectClosed.call(b));
})
.on("keydown.styler", function (e) {
32 == e.which && (e.preventDefault(), y.click());
}),
H.registered || (t(document).on("click", H), (H.registered = !0));
})();
};
f(),
s.on("refresh", function () {
s.off(".styler").parent().before(s).remove(), f();
});
} else
s.is(":reset") &&
s.on("click", function () {
setTimeout(function () {
s.closest(i.wrapper).find("input, select").trigger("refresh");
}, 1);
});
},
destroy: function () {
var e = t(this.element);
e.is(":checkbox") || e.is(":radio")
? (e.removeData().off(".styler").removeAttr("style").parent().before(e).remove(),
e
.closest("label")
.add('label[for="' + e.attr("id") + '"]')
.off(".styler"))
: e.is('input[type="number"]')
? e.removeData().off(".styler").closest(".jq-number").before(e).remove()
: (e.is(":file") || e.is("select")) && e.removeData().off(".styler").removeAttr("style").parent().before(e).remove();
},
}),
(t.fn[s] = function (e) {
var i = arguments;
if (void 0 === e || "object" == typeof e)
return this.each(function () {
t.data(this, "_" + s) || t.data(this, "_" + s, new z(this, e));
})
.promise()
.done(function () {
var e = t(this[0]).data("_" + s);
e && e.options.onFormStyled.call();
});
if ("string" == typeof e && "_" !== e[0] && "init" !== e) {
var l;
return (
this.each(function () {
var o = t.data(this, "_" + s);
o instanceof z && "function" == typeof o[e] && (l = o[e].apply(o, Array.prototype.slice.call(i, 1)));
}),
void 0 !== l ? l : this
);
}
}),
(H.registered = !1);
});
/*!
* jQuery counter Plugin
* http://kcounter.kudoslabs.co.uk
* Copyright (c) 2012 Kudos
* Version: 0.1
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
* Requires: jQuery v1.7 or later
*/
(function ($) {
var methods = {
init: function (options) {
settings = $.extend({ height: 31, width: 36, initial: false, easing: "easeInOutBack", duration: 1500 }, options);
$(this).data("settings", settings);
return this.each(function () {
var $this = $(this),
initialContent = settings.initial ? settings.initial : $this.html(),
chars = initialContent.toString().split(" "),
html = "";
$.each(chars, function (index, value) {
if ($.isNumeric(value)) {
html += '<ul><li style="top:-' + value * settings.height + 'px">';
for (var i = 0; i < 100; i++) {
html += "<span>" + i + "</span>";
}
html += "</li></ul>";
} else {
html += "<ul><li><span>" + value + "</span></li></ul>";
}
});
$this.html(html);
methods.updateCss.call($this, settings);
});
},
updateCss: function (settings) {
return this.each(function () {
var $this = $(this);
$this.css({ overflow: "hidden" });
$("ul", $this).css({ position: "relative", float: "left", overflow: "hidden", height: settings.height + "px", width: settings.width + "px", "line-height": settings.height + "px" });
$("li", $this).css({ position: "absolute", width: settings.width + "px" });
$("span", $this).css({ display: "block", "text-align": "center", height: settings.height + "px", width: settings.width + "px" });
});
},
update: function (content) {
return this.each(function () {
var $this = $(this),
chars = content.toString().split(" "),
numberCounters = $("ul", $this).length,
settings = $(this).data("settings"),
diff,
html;
if (numberCounters !== chars.length) {
diff = chars.length - numberCounters;
numberCounters = chars.length;
if (diff < 0) {
$("ul", $this).slice(diff).remove();
} else {
html = "";
while (diff--) {
html += "<ul><li>";
for (var i = 0; i < 100; i++) {
html += "<span>" + i + "</span>";
}
html += "</li></ul>";
}
$this.prepend(html);
}
}
$.each(chars, function (index, value) {
var html = "";
if (settings.duration === 0) {
$("ul:nth-child(" + (index + 1) + ") li", $this)
.html("<span>" + value + "</span>")
.css({ top: 0 });
return;
}
if ($.isNumeric(value)) {
if ($("ul:nth-child(" + (index + 1) + ") li span", $this).length == 1) {
for (var i = 0; i < 10; i++) {
html += "<span>" + i + "</span>";
}
$("ul:nth-child(" + (index + 1) + ") li", $this).html(html);
}
$("ul:nth-child(" + (index + 1) + ") li", $this).animate({ top: -value * settings.height }, settings.duration, settings.easing);
} else {
$("ul:nth-child(" + (index + 1) + ") li", $this)
.html("<span>" + value + "</span>")
.animate({ top: 0 }, settings.duration, settings.easing);
}
});
methods.updateCss.call($this, settings);
});
},
};
$.fn.kCounter = function (method) {
if (methods[method]) {
return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
} else if (typeof method === "object" || !method) {
return methods.init.apply(this, arguments);
} else {
$.error("Method " + method + " does not exist on jQuery.kCounter");
}
};
})(jQuery);
function ActiveCollapse(e) {
var t = $.extend({ container: null }, e);
$(t.container).each(function () {
var e = $(this),
t = function (e) {
e.find(".collapse").each(function () {
"true" == $(this).attr("aria-expanded") ? $(this).parent().addClass("active") : $(this).parent().removeClass("active");
});
};
e.on("shown.bs.collapse", function () {
t($(this));
}),
e.on("hidden.bs.collapse", function () {
t($(this));
});
});
}
function animation(e, t, a) {
function n(o, i) {
"" != o && "" != i
? (e.addClass("b-anim-" + o[0]),
(s[e.attr("class")] = setTimeout(function () {
e.removeClass("b-anim-" + o[0]), "" != o.slice(1) && "" != i.slice(1) ? n(o.slice(1), i.slice(1)) : animation(e, t, a);
}, i[0])))
: animation(e, t, a);
}
var s = [];
e.length > 0 && "" != t && "" != a && (clearTimeout(s[e.attr("id")]), n(t, a));
}
function scrollAnchor(e) {
var t = $.extend({ speed: null, btnAnchor: ".js-btn-anchor", elFix: ".js-fix-el" }, e);
$(t.btnAnchor).on("click", function (e) {
e.preventDefault();
var a = $(t.elFix + ":visible"),
n = 0;
$(a).each(function () {
n += $(this).height();
});
var s = $(this).attr("data-anchor"),
o = $('[data-anchor-box = "' + s + '"]'),
i = o.offset();
if (void 0 !== i) {
var r = i.top - (o.height() / 2 + 20) - n;
$("html, body").animate({ scrollTop: r }, t.speed);
}
});
}
function countJP(e) {
var t = $.extend(
{
container: null,
classItem: "__item",
classItemMod: "__item--",
timeCount: 0.2,
sumCount: 10.75,
point: "point",
},
e
);
$(t.container).each(function () {
var e = $(this),
a = e.attr("class"),
n = Number(e.attr("data-val")),
s = function () {
var s = (n += t.sumCount).toFixed(2);
if ("true" == e.attr("data-style"))
for (e.text(""), arr = s.split(""), i = 0; i < arr.length; i++) {
"." == arr[i] && (arr[i] = "coma"), e.append('<span class="' + a + t.classItem + " " + a + t.classItemMod + arr[i] + '_n">' + arr[i] + "</span>");
var o = e.children();
o.each(function () {
$(this);
7 == arr.length ? o.eq(0).addClass(t.point) : 8 == arr.length ? o.eq(1).addClass(t.point) : 9 == arr.length && o.eq(2).addClass(t.point),
10 == arr.length
? (o.eq(0).addClass(t.point), o.eq(3).addClass(t.point))
: 11 == arr.length
? (o.eq(1).addClass(t.point), e.children().eq(4).addClass(t.point))
: 12 == arr.length && (o.eq(2).addClass(t.point), o.eq(5).addClass(t.point));
});
}
else e.text(s);
};
s(),
setInterval(function () {
s();
}, 1e3 * t.timeCount);
});
}
function activeLabel(e) {
e.is(":checked") ? e.parents("label").addClass("checked") : e.parents("label").removeClass("checked");
}
function inputCart(e) {
var t = $.extend({ container: null, item: ".js-input-cart__item" }, e);
$(t.container).each(function () {
var e = $(this);
$(t.item).keypress(function (e) {
var t = /[0-9\x25\x27\x24\x23]/,
a = e.which,
n = String.fromCharCode(a);
return !(0 != a && 8 != a && 9 != a && 13 != a && !n.match(t));
}),
$(t.item, e).keyup(function (e) {
e.keyCode || e.which;
var t = Number($(this).attr("data-index"));
4 == $(this).val().length && $('[data-index="' + Number(t + 1) + '"]').focus(), 0 == $(this).val().length && $('[data-index="' + Number(t - 1) + '"]').focus();
});
});
}
function togAttrCheck(e) {
var t = $.extend(
{
container: null,
mainCheck: "main_checkbox",
mainCheckClass: ".main_checkbox",
checks: "input",
allChecks: ".b-checkbox-group__sub input",
allChecksCh: ".b-checkbox-group__sub input:checked",
box_check: ".b-label-check",
},
e
);
$(t.container).each(function () {
var e = $(this);
$(t.checks, e).change(function () {
$(this).hasClass(t.mainCheck) && ($(this).is(":checked") ? $(t.allChecks, e).prop("checked", !0).trigger("refresh") : $(t.allChecks, e).prop("checked", !1).trigger("refresh")),
$(t.allChecks, e).each(function () {
var a = $(t.allChecksCh, e).length;
$(t.allChecks, e).length;
a >= 1 ? $(t.mainCheckClass, e).prop("checked", !0).trigger("refresh") : $(t.mainCheckClass, e).prop("checked", !1).trigger("refresh");
});
});
});
}
function headHidSow(e) {
var t = $.extend({ elHidden: ".js-head-hid", elShow: ".js-head-show" }, e),
a = $(t.elHidden).height();
$(window).scrollTop() >= a ? $(t.elShow).addClass("show") : $(t.elShow).removeClass("show");
}
function tizerLazyLoad(e) {
var t = $.extend({ container: null, item: "li" }, e);
$(t.container).each(function () {
var e = $(this);
$(t.item, e).each(function () {
if ($(this).hasClass("active")) {
var e = $(this).attr("data-style-background");
$(this).attr("style", e);
}
});
});
}
function CarouselLazyLoad(e) {
var t = $.extend({ container: null, item: "li" }, e);
$(t.container).each(function () {
var e = $(this);
$(t.item, e).each(function () {
if ($(this).hasClass("active")) {
var e = $(this).find("img"),
t = e.attr("data-img-src");
e.attr("src", t);
}
});
});
}
function InitBrowserType() {
var e,
t = navigator.userAgent,
a =
void 0 !== a
? a
: {
ff: "https://addons.mozilla.org/ru/firefox/addon/playanyway/",
chrome: "https://chrome.google.com/webstore/detail/playanyway/goappnmfglcljmidmnchoiljempejdji",
ie: "http://play-any-way.net/download/ie/SetupPlayAnyWay.msi",
opera: "https://addons.opera.com/ru/extensions/details/playanyway/",
safari: "http://play-any-way.net/download/safari/playanyway.safariextz",
ya: "https://chrome.google.com/webstore/detail/playanyway/goappnmfglcljmidmnchoiljempejdji",
};
t.search(/Safari/) > 0 && ((e = "safari"), (browserName = "Safari")),
t.search(/Chrome/) > 0 && ((e = "chrome"), (browserName = "Chrome")),
t.search(/YaBrowser/) > 0 && ((e = "ya"), (browserName = "Yandex")),
t.search(/Firefox/) > 0 && ((e = "ff"), (browserName = "Firefox")),
(t.search(/OPR/) > 0 || t.search(/Opera/) > 0) && ((e = "opera"), (browserName = "Opera")),
(t.search(/MSIE/) > 0 || t.search(/rv:11.0/) > 0 || t.search(/Edge/) > 0) && ((e = "ie"), (browserName = "Internet Explorer"));
var n = "[data-browser=" + e + "]",
s = $(".b-btn").children("a"),
o = $(".plugin-install"),
i = $(".browsers-container").find(n);
i.addClass("active").find(".b-btn--blue").removeClass("b-btn--inactive").removeClass("b-btn--blue").addClass("b-btn--red"),
i.find(s).attr("href", a[e]),
o
.attr("href", a[e])
.find(".browser-icons")
.addClass("browser-icons--" + e),
$(".for")
.find("span")
.text("   »N  " + browserName),
$('[data-target="#b-' + e + '"]').click(),
$("." + e).show(),
$(".link-" + e).show(),
$(".step--" + e).show(),
$(".plugin_page_content").addClass("ppc-" + e);
}
function showAlert() {
if (arguments.length) return $(".js-alert .b-alert__content").html(arguments[0]), void alerts({ container: ".js-alert" });
$.ajax({
dataType: "json",
url: alertMessageUrl,
success: function (e) {
e && ($(".js-alert .b-alert__content").html(e.message), alerts({ container: ".js-alert" }));
},
});
}
function goToMessage(e) {
if (window.location.pathname == e.url) {
var t = Math.floor(100 * Math.random());
window.location.href = e.url + "?rand=" + t + "#message";
} else window.location.href = e.url + "#message";
}
function setJsStyleInput() {
$(".js-select").length && $(".js-select").styler(),
$(".js-input").length &&
($(".js-input").styler(),
$("input:radio, input:checkbox").each(function () {
var e = $(this);
activeLabel($(this)),
$("input:radio, input:checkbox").change(function () {
activeLabel(e);
});
}));
}
function getScrollBarWidth() {
var e = document.createElement("p");
(e.style.width = "100%"), (e.style.height = "200px");
var t = document.createElement("div");
(t.style.position = "absolute"),
(t.style.top = "0px"),
(t.style.left = "0px"),
(t.style.visibility = "hidden"),
(t.style.width = "200px"),
(t.style.height = "150px"),
(t.style.overflow = "hidden"),
t.appendChild(e),
document.body.appendChild(t);
var a = e.offsetWidth;
t.style.overflow = "scroll";
var n = e.offsetWidth;
return a == n && (n = t.clientWidth), document.body.removeChild(t), a - n;
}
function sendMailConfirmAgain() {
$.ajax({
dataType: "json",
url: mailConfirmAgainUrl,
success: function (e) {
e && ($(".js-alert .b-alert__content").html(e.message), alerts({ container: ".js-alert" }));
},
});
}
function profileDeleteMessage(e) {
$.ajax({
dataType: "json",
method: "POST",
url: profileDeleteMessageUrl,
data: { id: e },
success: function (t) {
t.result && ($("#profileMessage-" + e).remove(), $(".js-alert .b-alert__content").html(t.message), alerts({ container: ".js-alert" }));
},
});
}
function setWelcomeBonus() {
var e = 0,
t = $("#bonuses-container");
t.is(":visible") && (e = t.find("label.checked").find("input[name=bonus-radio]").val()),
$.cookie("welcome_bonus_id", e, {
expires: 1,
path: "/",
});
}
function addGameToFavourites(e, t) {
if (!$(t).data("processing")) {
$(t).data("processing", !0);
var a = addGameToFavouritesUrl;
$(t).hasClass("active") && (a = delGameFromFavouritesUrl),
$.ajax({
dataType: "json",
method: "POST",
url: a,
data: { id: e },
success: function (e) {
1 == e.result && ($(t).toggleClass("active"), $(t).data("processing", !1));
},
});
}
}
function notify(e, t) {
if (($(t).toggleClass("n-shown"), !e)) {
var a = $(".notify")[0];
(a.currentTime = 0), (a.volume = 0.2), a.play();
}
}
function playSound(e) {
$(".sound").each(function () {
$(this)[0].pause();
});
var t = $("." + e)[0];
(t.currentTime = 0), (t.volume = 0.2), t.play();
}
function mute() {
"undefined" != typeof muted &&
(muted
? ($(".wf-sound").removeClass("wf-sound-muted"), $.removeCookie("winWheelMuted", { path: "/" }), (muted = !1))
: ($(".sound").each(function () {
$(this)[0].pause();
}),
$(".wf-sound").addClass("wf-sound-muted"),
$.cookie("winWheelMuted", "1", { path: "/" }),
(muted = !0)));
}
function format(e) {
return parseFloat(e)
.toFixed(2)
.replace(".", ",")
.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$& ")
.replace(/\,?0+$/, "");
}
function counterEvent(e) {
var t = $(".mail--inbox_counter"),
a = $(".mail--inbox"),
n = parseInt(t.text());
e || (n > 1 ? t.text(n - 1) : (t.hide(), a.removeClass("anim-inbox")));
}
function winnersCarousel(e, t, a, n, s) {
var o = $(".nowWinners-inner"),
i = $(".b-list-win"),
r = o.parent().height();
if (arguments.length) {
var l = "";
(l += '<div class="b-list-win">'),
(l += '<a href="' + e + '" class="b-list-win__item g-clearfix">'),
(l += '<span class="b-list-win__box-img"><img class="b-list-win__img" src="' + t + '"></span>'),
(l += '<span class="b-list-win__name">' + a + "</span>"),
(l += '<span class="b-list-win__sum">' + format(n) + " N€N  ±.</span>"),
(l += '<span class="b-list-win__game">   <u>' + s + "</u></span>"),
(l += "</a>"),
(l += "</div>"),
o.prepend(l);
var c = o.children().length,
d = 3;
switch (r) {
case 205:
case 254:
d = 3;
break;
case 269:
d = 4;
break;
case 334:
d = 5;
}
c > d &&
(o.addClass("nw-animate"),
setTimeout(function () {
o.removeClass("nw-animate"), i.last().remove();
}, 1500));
} else {
var h = 0;
switch (r) {
case 155:
case 254:
h = -2;
break;
case 248:
h = -1;
}
h && i.slice(h).remove(),
setTimeout(function () {
o.fadeIn();
}, 500);
}
}
function signUpTransform() {
var e = $("#signup-form"),
t = $(".b-modal-registration .g-fl-l"),
a = $(".b-modal-registration .g-fl-r"),
n = $(".registration-social"),
s = $(".registration-agreement"),
o = $(".bonuses-container-wrapper"),
i = $(".field-signupform-email, .field-signupform-password");
window.innerHeight <= 890 ? (t.prepend(n).append(s), a.append(o), i.addClass("min-form")) : (a.prepend(n).append(s), e.append(o), i.removeClass("min-form"));
}
function updateFreeRolls(e) {
$(".free-spins-count").text(e),
$(".free-spins-title").text(declOfNum(e, [" ± µN    » °N‚  N‹     N‹N N‚N€ µ »", " ± µN    » °N‚  N‹N…   N‹N N‚N€ µ » °", " ± µN    » °N‚  N‹N…   N‹N N‚N€ µ »    "])),
0 == e ? ($(".free-spins").addClass("free-spins-zero"), $(".costinfo, .ui-arrow").hasClass("respin") || $(".costinfo, .ui-arrow").addClass("mustpay")) : $(".free-spins").removeClass("free-spins-zero");
}
function checkLocationHash() {}
$(document).ready(function () {
animation($(".b-jp__img"), [0, 1, 2, 2, 1, 1, 2, 3, 3, 2, 1, 0], [3e3, 50, 50, 50, 15, 10, 10, 10, 50, 50]),
setJsStyleInput(),
$('[data-toggle="tooltip"]').tooltip(),
inputCart({ container: ".js-input-cart" }),
togAttrCheck({ container: ".b-checkbox-group" }),
ActiveCollapse({ container: "#group-question" }),
$("img.svg").each(function () {
var e = $(this),
t = e.attr("id"),
a = e.attr("class"),
n = e.attr("src");
$.get(n, function (n) {
var s = $(n).find("svg");
void 0 !== t && (s = s.attr("id", t)), void 0 !== a && (s = s.attr("class", a + " replaced-svg")), (s = s.removeAttr("xmlns:a")), e.replaceWith(s);
});
}),
InitBrowserType(),
"#message" == document.location.hash && window.history.pushState("", document.title, window.location.pathname + window.location.search),
"string" == typeof alertMessage && alertMessage.length && showAlert(alertMessage),
checkLocationHash(),
$("body").hasClass("modal-open") && !$("body").hasClass("modal-open-noscroll") && $("body").addClass("modal-open-noscroll"),
$(".b-modal").on("show.bs.modal", function () {
$("body").addClass("modal-open-noscroll"), $(document).height() > $(window).height() && ($("body").css("padding-right", getScrollBarWidth()), $(".js-static-panel").css("margin-left", (-1 * getScrollBarWidth()) / 2 - 520));
}),
$(".b-modal").on("hide.bs.modal", function () {
$("body").removeClass("modal-open-noscroll"), $(".js-static-panel").css("margin-left", ""), window.location.href.indexOf("#") > 0 && history.pushState("", document.title, window.location.pathname);
}),
$(".js-close-fix").on("click", function (e) {
e.preventDefault(), $(".js-static-panel").hide();
var t = new Date();
t.setTime(t.getTime() + 36e5), $.cookie("banner_istallPlugin", "0", { expires: t, path: "/" });
}),
$.cookie("banner_istallPlugin") || $(".js-static-panel").show();
var e,
t = !1;
if (
($(function () {
$(".b-iframe").on({
mouseenter: function () {
$(".b-fading-overlay").addClass("display-overlay"),
(e = setTimeout(function () {
t = !0;
}, 7e3));
},
mouseleave: function () {
$(".b-fading-overlay").removeClass("display-overlay"), clearTimeout(e), (t = !1);
},
});
}),
"undefined" != typeof sec && (startTimer(sec, $(".autoreturn span"), "autoreturn", ["N  µ  N     N ", "N  µ  N     N‹", "N  µ  N     "]), window.paymentInNewWindow))
) {
$("#back_to_game, #autoreturn").click(function (e) {
e.preventDefault(), window.close();
});
var a = setInterval(function () {
--sec < 0 && (clearInterval(a), window.close());
}, 1e3);
}
$(".help-widget").on("click", function () {
return $("#sh_button").click(), !1;
}),
$(".lbox").swipebox(),
$(".js-gamesort").on("click", function () {
$(".js-gamesort").removeClass("active"),
$(this).addClass("active"),
void 0 != $(this).attr("data-page") &&
$.ajax({
dataType: "html",
method: "POST",
url: gameSortUrl,
data: {
sort: $(this).attr("data-orderby"),
page: $(this).attr("data-page"),
developer: $(this).attr("data-developer"),
},
success: function (e) {
e && $("#gamelist").html(e);
},
});
}),
$(".js-gamesort").hover(
function () {
var e = $(this).text();
$(this).html('<span class="js-tooltip">' + e + "</span>");
},
function () {
var e = $(this).text();
$(this).text(e);
}
),
$(".n-icon--close").on("click", function (e) {
e.stopPropagation();
var t = $(this).parent();
t.addClass("n-closed"),
setTimeout(function () {
t.remove();
}, 300);
}),
$(".b-sb-tabs__nav-item").on("click", function () {
var e = $(this).index();
return $(this).addClass("active").siblings().removeClass("active"), $(this).parents(".b-sb-tabs").find(".b-sb-tabs__content-item").eq(e).addClass("active").siblings().removeClass("active"), !1;
}),
$(".jackpot-holder-value") && ($(".jackpot-holder-value").text($(".b-jp__count").text()), $(".jackpot-holder-value").removeClass("hidden"));
var n = $(".wf-glow");
n.length &&
setInterval(function () {
n.fadeOut(500, function () {
n.fadeIn(500);
});
}, 1e3),
$(".nowWinners-inner").length && winnersCarousel(),
signUpTransform(),
$(".loyalty-item").on("click", function () {
$(this).hasClass("toggled") ? $(this).removeClass("toggled") : ($(".loyalty-item").removeClass("toggled"), $(this).addClass("toggled"));
}),
$(".loyalty-rules").on("click", function (e) {
e.stopPropagation();
}),
$(".js-fame-video").on("click", function () {
var e = $(this).attr("data-videourl");
$("#modalVideo").on("show.bs.modal", function () {
$("#modalVideo iframe").attr("src", e);
});
}),
$(document).on("change", "#lt-show-more-ticks-p", function () {
$(".lt-show-more-ticks-p").text(" Y     ° · °N‚N   ±   »N N  µ  ±   » µN‚    " == $(".lt-show-more-ticks-p").text() ? "    N€N‹N‚N    N N‚ ° »N   N‹ µ  ±   » µN‚N‹" : " Y     ° · °N‚N   ±   »N N  µ  ±   » µN‚    ");
});
}),
$(document).on("click", ".js-showdesc", function (e) {
$(this).parents(".bonus-item").next().toggleClass("isshown");
var t = $(this).text();
$(this).text(" YN€ °     » °    N N  »      N " == t ? "     µN€  N N‚N " : " YN€ °     » °    N N  »      N ");
}),
$(".alert").on("click", function () {
alerts({ container: ".js-alert" });
}),
scrollAnchor({ speed: 400 }),
countJP({ container: ".jp-count-img, .jp-count", timeCount: 3, sumCount: 17.42 });
$(document).on("beforeSubmit", "#confirm-email-form", function (a) {
a.preventDefault();
var e = $(this);
return (
$.ajax(e.attr("action"), {
method: e.attr("method"),
data: e.serialize(),
async: !1,
success: function (a) {
void 0 === a.result
? e.yiiActiveForm("updateMessages", a, !1)
: (showAlertPopup(a.message), $(".confirm-email-input input").prop("readonly", !0), $(".email-info").text(a.message), $(".confirm-email-button, .confirm-email-second-input").hide());
},
}),
!1
);
}),
$(document).ready(function () {
$(".js-carousel")
.jcarousel({
wrap: "circular",
animation: { duration: 400, easing: "swing" },
})
.jcarouselAutoscroll({
interval: 4e3,
autostart: !0,
}),
$(".js-carousel-pagination")
.on("jcarouselpagination:active", "a", function () {
$(this).addClass("active");
})
.on("jcarouselpagination:inactive", "a", function () {
$(this).removeClass("active");
})
.on("click", function (a) {
a.preventDefault();
})
.jcarouselPagination({
item: function (a) {
return '<a href="#' + a + '"></a>';
},
}),
$(".js-carousel li:first-child").addClass("active"),
$(".js-carousel").on("jcarousel:fullyvisiblein", "li", function (a, e) {
$(this).parent().find("li").removeClass("active"), $(this).addClass("active");
}),
$(".js-carousel__prev").jcarouselControl({ target: "-=1" }),
$(".js-carousel__next").jcarouselControl({ target: "+=1" });
});
/*! jCarousel - v0.3.3 - 2015-04-07
* http://sorgalla.com/jcarousel/
* Copyright (c) 2006-2015 Jan Sorgalla; Licensed MIT */
!(function (a) {
"use strict";
var b = (a.jCarousel = {});
b.version = "0.3.3";
var c = /^([+\-]=)?(.+)$/;
(b.parseTarget = function (a) {
var b = !1,
d = "object" != typeof a ? c.exec(a) : null;
return d ? ((a = parseInt(d[2], 10) || 0), d[1] && ((b = !0), "-=" === d[1] && (a *= -1))) : "object" != typeof a && (a = parseInt(a, 10) || 0), { target: a, relative: b };
}),
(b.detectCarousel = function (a) {
for (var b; a.length > 0; ) {
if (((b = a.filter("[data-jcarousel]")), b.length > 0)) return b;
if (((b = a.find("[data-jcarousel]")), b.length > 0)) return b;
a = a.parent();
}
return null;
}),
(b.base = function (c) {
return {
version: b.version,
_options: {},
_element: null,
_carousel: null,
_init: a.noop,
_create: a.noop,
_destroy: a.noop,
_reload: a.noop,
create: function () {
return this._element.attr("data-" + c.toLowerCase(), !0).data(c, this), !1 === this._trigger("create") ? this : (this._create(), this._trigger("createend"), this);
},
destroy: function () {
return !1 === this._trigger("destroy") ? this : (this._destroy(), this._trigger("destroyend"), this._element.removeData(c).removeAttr("data-" + c.toLowerCase()), this);
},
reload: function (a) {
return !1 === this._trigger("reload") ? this : (a && this.options(a), this._reload(), this._trigger("reloadend"), this);
},
element: function () {
return this._element;
},
options: function (b, c) {
if (0 === arguments.length) return a.extend({}, this._options);
if ("string" == typeof b) {
if ("undefined" == typeof c) return "undefined" == typeof this._options[b] ? null : this._options[b];
this._options[b] = c;
} else this._options = a.extend({}, this._options, b);
return this;
},
carousel: function () {
return this._carousel || ((this._carousel = b.detectCarousel(this.options("carousel") || this._element)), this._carousel || a.error('Could not detect carousel for plugin "' + c + '"')), this._carousel;
},
_trigger: function (b, d, e) {
var f,
g = !1;
return (
(e = [this].concat(e || [])),
(d || this._element).each(function () {
(f = a.Event((c + ":" + b).toLowerCase())), a(this).trigger(f, e), f.isDefaultPrevented() && (g = !0);
}),
!g
);
},
};
}),
(b.plugin = function (c, d) {
var e = (a[c] = function (b, c) {
(this._element = a(b)), this.options(c), this._init(), this.create();
});
return (
(e.fn = e.prototype = a.extend({}, b.base(c), d)),
(a.fn[c] = function (b) {
var d = Array.prototype.slice.call(arguments, 1),
f = this;
return (
this.each(
"string" == typeof b
? function () {
var e = a(this).data(c);
if (!e) return a.error("Cannot call methods on " + c + ' prior to initialization; attempted to call method "' + b + '"');
if (!a.isFunction(e[b]) || "_" === b.charAt(0)) return a.error('No such method "' + b + '" for ' + c + " instance");
var g = e[b].apply(e, d);
return g !== e && "undefined" != typeof g ? ((f = g), !1) : void 0;
}
: function () {
var d = a(this).data(c);
d instanceof e ? d.reload(b) : new e(this, b);
}
),
f
);
}),
e
);
});
})(jQuery),
(function (a, b) {
"use strict";
var c = function (a) {
return parseFloat(a) || 0;
};
a.jCarousel.plugin("jcarousel", {
animating: !1,
tail: 0,
inTail: !1,
resizeTimer: null,
lt: null,
vertical: !1,
rtl: !1,
circular: !1,
underflow: !1,
relative: !1,
_options: {
list: function () {
return this.element().children().eq(0);
},
items: function () {
return this.list().children();
},
animation: 400,
transitions: !1,
wrap: null,
vertical: null,
rtl: null,
center: !1,
},
_list: null,
_items: null,
_target: a(),
_first: a(),
_last: a(),
_visible: a(),
_fullyvisible: a(),
_init: function () {
var a = this;
return (
(this.onWindowResize = function () {
a.resizeTimer && clearTimeout(a.resizeTimer),
(a.resizeTimer = setTimeout(function () {
a.reload();
}, 100));
}),
this
);
},
_create: function () {
this._reload(), a(b).on("resize.jcarousel", this.onWindowResize);
},
_destroy: function () {
a(b).off("resize.jcarousel", this.onWindowResize);
},
_reload: function () {
(this.vertical = this.options("vertical")),
null == this.vertical && (this.vertical = this.list().height() > this.list().width()),
(this.rtl = this.options("rtl")),
null == this.rtl &&
(this.rtl = (function (b) {
if ("rtl" === ("" + b.attr("dir")).toLowerCase()) return !0;
var c = !1;
return (
b.parents("[dir]").each(function () {
return /rtl/i.test(a(this).attr("dir")) ? ((c = !0), !1) : void 0;
}),
c
);
})(this._element)),
(this.lt = this.vertical ? "top" : "left"),
(this.relative = "relative" === this.list().css("position")),
(this._list = null),
(this._items = null);
var b = this.index(this._target) >= 0 ? this._target : this.closest();
(this.circular = "circular" === this.options("wrap")), (this.underflow = !1);
var c = { left: 0, top: 0 };
return (
b.length > 0 &&
(this._prepare(b),
this.list().find("[data-jcarousel-clone]").remove(),
(this._items = null),
(this.underflow = this._fullyvisible.length >= this.items().length),
(this.circular = this.circular && !this.underflow),
(c[this.lt] = this._position(b) + "px")),
this.move(c),
this
);
},
list: function () {
if (null === this._list) {
var b = this.options("list");
this._list = a.isFunction(b) ? b.call(this) : this._element.find(b);
}
return this._list;
},
items: function () {
if (null === this._items) {
var b = this.options("items");
this._items = (a.isFunction(b) ? b.call(this) : this.list().find(b)).not("[data-jcarousel-clone]");
}
return this._items;
},
index: function (a) {
return this.items().index(a);
},
closest: function () {
var b,
d = this,
e = this.list().position()[this.lt],
f = a(),
g = !1,
h = this.vertical ? "bottom" : this.rtl && !this.relative ? "left" : "right";
return (
this.rtl && this.relative && !this.vertical && (e += this.list().width() - this.clipping()),
this.items().each(function () {
if (((f = a(this)), g)) return !1;
var i = d.dimension(f);
if (((e += i), e >= 0)) {
if (((b = i - c(f.css("margin-" + h))), !(Math.abs(e) - i + b / 2 <= 0))) return !1;
g = !0;
}
}),
f
);
},
target: function () {
return this._target;
},
first: function () {
return this._first;
},
last: function () {
return this._last;
},
visible: function () {
return this._visible;
},
fullyvisible: function () {
return this._fullyvisible;
},
hasNext: function () {
if (!1 === this._trigger("hasnext")) return !0;
var a = this.options("wrap"),
b = this.items().length - 1,
c = this.options("center") ? this._target : this._last;
return b >= 0 && !this.underflow && ((a && "first" !== a) || this.index(c) < b || (this.tail && !this.inTail)) ? !0 : !1;
},
hasPrev: function () {
if (!1 === this._trigger("hasprev")) return !0;
var a = this.options("wrap");
return this.items().length > 0 && !this.underflow && ((a && "last" !== a) || this.index(this._first) > 0 || (this.tail && this.inTail)) ? !0 : !1;
},
clipping: function () {
return this._element["inner" + (this.vertical ? "Height" : "Width")]();
},
dimension: function (a) {
return a["outer" + (this.vertical ? "Height" : "Width")](!0);
},
scroll: function (b, c, d) {
if (this.animating) return this;
if (!1 === this._trigger("scroll", null, [b, c])) return this;
a.isFunction(c) && ((d = c), (c = !0));
var e = a.jCarousel.parseTarget(b);
if (e.relative) {
var f,
g,
h,
i,
j,
k,
l,
m,
n = this.items().length - 1,
o = Math.abs(e.target),
p = this.options("wrap");
if (e.target > 0) {
var q = this.index(this._last);
if (q >= n && this.tail) this.inTail ? ("both" === p || "last" === p ? this._scroll(0, c, d) : a.isFunction(d) && d.call(this, !1)) : this._scrollTail(c, d);
else if (((f = this.index(this._target)), (this.underflow && f === n && ("circular" === p || "both" === p || "last" === p)) || (!this.underflow && q === n && ("both" === p || "last" === p)))) this._scroll(0, c, d);
else if (((h = f + o), this.circular && h > n)) {
for (m = n, j = this.items().get(-1); m++ < h; )
(j = this.items().eq(0)),
(k = this._visible.index(j) >= 0),
k && j.after(j.clone(!0).attr("data-jcarousel-clone", !0)),
this.list().append(j),
k || ((l = {}), (l[this.lt] = this.dimension(j)), this.moveBy(l)),
(this._items = null);
this._scroll(j, c, d);
} else this._scroll(Math.min(h, n), c, d);
} else if (this.inTail) this._scroll(Math.max(this.index(this._first) - o + 1, 0), c, d);
else if (((g = this.index(this._first)), (f = this.index(this._target)), (i = this.underflow ? f : g), (h = i - o), 0 >= i && ((this.underflow && "circular" === p) || "both" === p || "first" === p)))
this._scroll(n, c, d);
else if (this.circular && 0 > h) {
for (m = h, j = this.items().get(0); m++ < 0; ) {
(j = this.items().eq(-1)), (k = this._visible.index(j) >= 0), k && j.after(j.clone(!0).attr("data-jcarousel-clone", !0)), this.list().prepend(j), (this._items = null);
var r = this.dimension(j);
(l = {}), (l[this.lt] = -r), this.moveBy(l);
}
this._scroll(j, c, d);
} else this._scroll(Math.max(h, 0), c, d);
} else this._scroll(e.target, c, d);
return this._trigger("scrollend"), this;
},
moveBy: function (a, b) {
var d = this.list().position(),
e = 1,
f = 0;
return (
this.rtl && !this.vertical && ((e = -1), this.relative && (f = this.list().width() - this.clipping())),
a.left && (a.left = d.left + f + c(a.left) * e + "px"),
a.top && (a.top = d.top + f + c(a.top) * e + "px"),
this.move(a, b)
);
},
move: function (b, c) {
c = c || {};
var d = this.options("transitions"),
e = !!d,
f = !!d.transforms,
g = !!d.transforms3d,
h = c.duration || 0,
i = this.list();
if (!e && h > 0) return void i.animate(b, c);
var j = c.complete || a.noop,
k = {};
if (e) {
var l = { transitionDuration: i.css("transitionDuration"), transitionTimingFunction: i.css("transitionTimingFunction"), transitionProperty: i.css("transitionProperty") },
m = j;
(j = function () {
a(this).css(l), m.call(this);
}),
(k = {
transitionDuration: (h > 0 ? h / 1e3 : 0) + "s",
transitionTimingFunction: d.easing || c.easing,
transitionProperty:
h > 0
? (function () {
return f || g ? "all" : b.left ? "left" : "top";
})()
: "none",
transform: "none",
});
}
g ? (k.transform = "translate3d(" + (b.left || 0) + "," + (b.top || 0) + ",0)") : f ? (k.transform = "translate(" + (b.left || 0) + "," + (b.top || 0) + ")") : a.extend(k, b),
e && h > 0 && i.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", j),
i.css(k),
0 >= h &&
i.each(function () {
j.call(this);
});
},
_scroll: function (b, c, d) {
if (this.animating) return a.isFunction(d) && d.call(this, !1), this;
if (("object" != typeof b ? (b = this.items().eq(b)) : "undefined" == typeof b.jquery && (b = a(b)), 0 === b.length)) return a.isFunction(d) && d.call(this, !1), this;
(this.inTail = !1), this._prepare(b);
var e = this._position(b),
f = this.list().position()[this.lt];
if (e === f) return a.isFunction(d) && d.call(this, !1), this;
var g = {};
return (g[this.lt] = e + "px"), this._animate(g, c, d), this;
},
_scrollTail: function (b, c) {
if (this.animating || !this.tail) return a.isFunction(c) && c.call(this, !1), this;
var d = this.list().position()[this.lt];
this.rtl && this.relative && !this.vertical && (d += this.list().width() - this.clipping()), this.rtl && !this.vertical ? (d += this.tail) : (d -= this.tail), (this.inTail = !0);
var e = {};
return (e[this.lt] = d + "px"), this._update({ target: this._target.next(), fullyvisible: this._fullyvisible.slice(1).add(this._visible.last()) }), this._animate(e, b, c), this;
},
_animate: function (b, c, d) {
if (((d = d || a.noop), !1 === this._trigger("animate"))) return d.call(this, !1), this;
this.animating = !0;
var e = this.options("animation"),
f = a.proxy(function () {
this.animating = !1;
var a = this.list().find("[data-jcarousel-clone]");
a.length > 0 && (a.remove(), this._reload()), this._trigger("animateend"), d.call(this, !0);
}, this),
g = "object" == typeof e ? a.extend({}, e) : { duration: e },
h = g.complete || a.noop;
return (
c === !1 ? (g.duration = 0) : "undefined" != typeof a.fx.speeds[g.duration] && (g.duration = a.fx.speeds[g.duration]),
(g.complete = function () {
f(), h.call(this);
}),
this.move(b, g),
this
);
},
_prepare: function (b) {
var d,
e,
f,
g,
h = this.index(b),
i = h,
j = this.dimension(b),
k = this.clipping(),
l = this.vertical ? "bottom" : this.rtl ? "left" : "right",
m = this.options("center"),
n = { target: b, first: b, last: b, visible: b, fullyvisible: k >= j ? b : a() };
if ((m && ((j /= 2), (k /= 2)), k > j))
for (;;) {
if (((d = this.items().eq(++i)), 0 === d.length)) {
if (!this.circular) break;
if (((d = this.items().eq(0)), b.get(0) === d.get(0))) break;
if (((e = this._visible.index(d) >= 0), e && d.after(d.clone(!0).attr("data-jcarousel-clone", !0)), this.list().append(d), !e)) {
var o = {};
(o[this.lt] = this.dimension(d)), this.moveBy(o);
}
this._items = null;
}
if (((g = this.dimension(d)), 0 === g)) break;
if (((j += g), (n.last = d), (n.visible = n.visible.add(d)), (f = c(d.css("margin-" + l))), k >= j - f && (n.fullyvisible = n.fullyvisible.add(d)), j >= k)) break;
}
if (!this.circular && !m && k > j)
for (i = h; ; ) {
if (--i < 0) break;
if (((d = this.items().eq(i)), 0 === d.length)) break;
if (((g = this.dimension(d)), 0 === g)) break;
if (((j += g), (n.first = d), (n.visible = n.visible.add(d)), (f = c(d.css("margin-" + l))), k >= j - f && (n.fullyvisible = n.fullyvisible.add(d)), j >= k)) break;
}
return (
this._update(n),
(this.tail = 0),
m || "circular" === this.options("wrap") || "custom" === this.options("wrap") || this.index(n.last) !== this.items().length - 1 || ((j -= c(n.last.css("margin-" + l))), j > k && (this.tail = j - k)),
this
);
},
_position: function (a) {
var b = this._first,
c = b.position()[this.lt],
d = this.options("center"),
e = d ? this.clipping() / 2 - this.dimension(b) / 2 : 0;
return (
this.rtl && !this.vertical ? ((c -= this.relative ? this.list().width() - this.dimension(b) : this.clipping() - this.dimension(b)), (c += e)) : (c -= e),
!d && (this.index(a) > this.index(b) || this.inTail) && this.tail ? ((c = this.rtl && !this.vertical ? c - this.tail : c + this.tail), (this.inTail = !0)) : (this.inTail = !1),
-c
);
},
_update: function (b) {
var c,
d = this,
e = { target: this._target, first: this._first, last: this._last, visible: this._visible, fullyvisible: this._fullyvisible },
f = this.index(b.first || e.first) < this.index(e.first),
g = function (c) {
var g = [],
h = [];
b[c].each(function () {
e[c].index(this) < 0 && g.push(this);
}),
e[c].each(function () {
b[c].index(this) < 0 && h.push(this);
}),
f ? (g = g.reverse()) : (h = h.reverse()),
d._trigger(c + "in", a(g)),
d._trigger(c + "out", a(h)),
(d["_" + c] = b[c]);
};
for (c in b) g(c);
return this;
},
});
})(jQuery, window),
(function (a) {
"use strict";
a.jcarousel.fn.scrollIntoView = function (b, c, d) {
var e,
f = a.jCarousel.parseTarget(b),
g = this.index(this._fullyvisible.first()),
h = this.index(this._fullyvisible.last());
if (((e = f.relative ? (f.target < 0 ? Math.max(0, g + f.target) : h + f.target) : "object" != typeof f.target ? f.target : this.index(f.target)), g > e)) return this.scroll(e, c, d);
if (e >= g && h >= e) return a.isFunction(d) && d.call(this, !1), this;
for (var i, j = this.items(), k = this.clipping(), l = this.vertical ? "bottom" : this.rtl ? "left" : "right", m = 0; ; ) {
if (((i = j.eq(e)), 0 === i.length)) break;
if (((m += this.dimension(i)), m >= k)) {
var n = parseFloat(i.css("margin-" + l)) || 0;
m - n !== k && e++;
break;
}
if (0 >= e) break;
e--;
}
return this.scroll(e, c, d);
};
})(jQuery),
(function (a) {
"use strict";
a.jCarousel.plugin("jcarouselControl", {
_options: { target: "+=1", event: "click", method: "scroll" },
_active: null,
_init: function () {
(this.onDestroy = a.proxy(function () {
this._destroy(), this.carousel().one("jcarousel:createend", a.proxy(this._create, this));
}, this)),
(this.onReload = a.proxy(this._reload, this)),
(this.onEvent = a.proxy(function (b) {
b.preventDefault();
var c = this.options("method");
a.isFunction(c) ? c.call(this) : this.carousel().jcarousel(this.options("method"), this.options("target"));
}, this));
},
_create: function () {
this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend jcarousel:scrollend", this.onReload), this._element.on(this.options("event") + ".jcarouselcontrol", this.onEvent), this._reload();
},
_destroy: function () {
this._element.off(".jcarouselcontrol", this.onEvent), this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend jcarousel:scrollend", this.onReload);
},
_reload: function () {
var b,
c = a.jCarousel.parseTarget(this.options("target")),
d = this.carousel();
if (c.relative) b = d.jcarousel(c.target > 0 ? "hasNext" : "hasPrev");
else {
var e = "object" != typeof c.target ? d.jcarousel("items").eq(c.target) : c.target;
b = d.jcarousel("target").index(e) >= 0;
}
return this._active !== b && (this._trigger(b ? "active" : "inactive"), (this._active = b)), this;
},
});
})(jQuery),
(function (a) {
"use strict";
a.jCarousel.plugin("jcarouselPagination", {
_options: {
perPage: null,
item: function (a) {
return '<a href="#' + a + '">' + a + "</a>";
},
event: "click",
method: "scroll",
},
_carouselItems: null,
_pages: {},
_items: {},
_currentPage: null,
_init: function () {
(this.onDestroy = a.proxy(function () {
this._destroy(), this.carousel().one("jcarousel:createend", a.proxy(this._create, this));
}, this)),
(this.onReload = a.proxy(this._reload, this)),
(this.onScroll = a.proxy(this._update, this));
},
_create: function () {
this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend", this.onReload).on("jcarousel:scrollend", this.onScroll), this._reload();
},
_destroy: function () {
this._clear(), this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend", this.onReload).off("jcarousel:scrollend", this.onScroll), (this._carouselItems = null);
},
_reload: function () {
var b = this.options("perPage");
if (((this._pages = {}), (this._items = {}), a.isFunction(b) && (b = b.call(this)), null == b)) this._pages = this._calculatePages();
else
for (var c, d = parseInt(b, 10) || 0, e = this._getCarouselItems(), f = 1, g = 0; ; ) {
if (((c = e.eq(g++)), 0 === c.length)) break;
(this._pages[f] = this._pages[f] ? this._pages[f].add(c) : c), g % d === 0 && f++;
}
this._clear();
var h = this,
i = this.carousel().data("jcarousel"),
j = this._element,
k = this.options("item"),
l = this._getCarouselItems().length;
a.each(this._pages, function (b, c) {
var d = (h._items[b] = a(k.call(h, b, c)));
d.on(
h.options("event") + ".jcarouselpagination",
a.proxy(function () {
var a = c.eq(0);
if (i.circular) {
var d = i.index(i.target()),
e = i.index(a);
parseFloat(b) > parseFloat(h._currentPage) ? d > e && (a = "+=" + (l - d + e)) : e > d && (a = "-=" + (d + (l - e)));
}
i[this.options("method")](a);
}, h)
),
j.append(d);
}),
this._update();
},
_update: function () {
var b,
c = this.carousel().jcarousel("target");
a.each(this._pages, function (a, d) {
return (
d.each(function () {
return c.is(this) ? ((b = a), !1) : void 0;
}),
b ? !1 : void 0
);
}),
this._currentPage !== b && (this._trigger("inactive", this._items[this._currentPage]), this._trigger("active", this._items[b])),
(this._currentPage = b);
},
items: function () {
return this._items;
},
reloadCarouselItems: function () {
return (this._carouselItems = null), this;
},
_clear: function () {
this._element.empty(), (this._currentPage = null);
},
_calculatePages: function () {
for (var a, b, c = this.carousel().data("jcarousel"), d = this._getCarouselItems(), e = c.clipping(), f = 0, g = 0, h = 1, i = {}; ; ) {
if (((a = d.eq(g++)), 0 === a.length)) break;
(b = c.dimension(a)), f + b > e && (h++, (f = 0)), (f += b), (i[h] = i[h] ? i[h].add(a) : a);
}
return i;
},
_getCarouselItems: function () {
return this._carouselItems || (this._carouselItems = this.carousel().jcarousel("items")), this._carouselItems;
},
});
})(jQuery),
(function (a, b) {
"use strict";
var c,
d,
e = { hidden: "visibilitychange", mozHidden: "mozvisibilitychange", msHidden: "msvisibilitychange", webkitHidden: "webkitvisibilitychange" };
a.each(e, function (a, e) {
return "undefined" != typeof b[a] ? ((c = a), (d = e), !1) : void 0;
}),
a.jCarousel.plugin("jcarouselAutoscroll", {
_options: { target: "+=1", interval: 3e3, autostart: !0 },
_timer: null,
_started: !1,
_init: function () {
(this.onDestroy = a.proxy(function () {
this._destroy(), this.carousel().one("jcarousel:createend", a.proxy(this._create, this));
}, this)),
(this.onAnimateEnd = a.proxy(this._start, this)),
(this.onVisibilityChange = a.proxy(function () {
b[c] ? this._stop() : this._start();
}, this));
},
_create: function () {
this.carousel().one("jcarousel:destroy", this.onDestroy), a(b).on(d, this.onVisibilityChange), this.options("autostart") && this.start();
},
_destroy: function () {
this._stop(), this.carousel().off("jcarousel:destroy", this.onDestroy), a(b).off(d, this.onVisibilityChange);
},
_start: function () {
return (
this._stop(),
this._started
? (this.carousel().one("jcarousel:animateend", this.onAnimateEnd),
(this._timer = setTimeout(
a.proxy(function () {
this.carousel().jcarousel("scroll", this.options("target"));
}, this),
this.options("interval")
)),
this)
: void 0
);
},
_stop: function () {
return this._timer && (this._timer = clearTimeout(this._timer)), this.carousel().off("jcarousel:animateend", this.onAnimateEnd), this;
},
start: function () {
return (this._started = !0), this._start(), this;
},
stop: function () {
return (this._started = !1), this._stop(), this;
},
});
})(jQuery, document);
function showAlertPopup(e) {
$(".js-alert .b-alert__content").html(e), alerts();
}
function alerts(e) {
var t = $.extend({ container: ".js-alert", close: ".js-alert-close", show: "b-alert--show alert-show", fail: "is-fail", timeHide: 3 }, e);
$(t.container).each(function () {
var e = $(this),
n = function () {
e.removeClass(t.show),
e.hasClass(t.fail) &&
setTimeout(function () {
e.removeClass(t.fail);
}, 300);
};
if (!e.hasClass(t.show)) {
e.addClass(t.show);
var o = setTimeout(function () {
n();
}, 1e3 * t.timeHide);
$(t.close, e).on("click", function () {
clearTimeout(o), n();
});
}
});
}
function declOfNum(e, t) {
switch (((e = parseInt(e)), t.length)) {
case 2:
return t[1 === e ? 0 : 1];
case 3:
return t[e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2];
}
}
function startTimer(e, t, n, o) {
var a = setInterval(function () {
t.text(e + " " + declOfNum(e, o)), --e < 0 && (clearInterval(a), document.getElementById(n).click());
}, 1e3);
}
function getDaysInMonth(e, t) {
return (t = parseInt(t)), (e = parseInt(e)), new Date(t, e, 0).getDate();
}
function updateDateSelect(e, t, n, o) {
var a,
s = $(document).find(t),
i = $(document).find(n),
r = $(document).find(o),
c = s.val(),
l = i.val(),
u = r.val();
switch (e.attr("id")) {
case t:
c = e.val();
break;
case n:
l = e.val();
break;
case o:
u = e.val();
}
c > (a = getDaysInMonth(l, u)) && (c = a), s.find("option:not([value=0])").remove();
for (var m = 1; m <= a; m++) s.append('<option value="' + m + '"' + (m === parseInt(c) ? "selected" : "") + ">" + m + "</option>");
}
function isFullyVisible(e) {
var t = $(window).scrollTop(),
n = t + $(window).height(),
o = $(e).offset().top;
return o + $(e).height() <= n && o >= t;
}
function isIphone6() {
var e = window.screen.height,
t = window.screen.width,
n = window.innerHeight;
return !!(navigator.userAgent.match(/iPhone/i) && navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) && 414 === t && 736 === e && t - n > 45);
}
function modifyModals() {
isIphone6() &&
90 === Math.abs(window.orientation) &&
setTimeout(function () {
$("body").addClass("modal-ios");
}, 500);
}
function addCommission(e, t) {
var n = ((e = +e) * (t = +t)) / 100;
return { commissionSum: n, totalSum: e + n };
}
function fitMaxSum(e, t) {
var n = ((e = +e) / (100 + (t = +t))) * 100;
return parseInt(n);
}
function processCommissionInfo(e, t) {
var n = $(".js-commission-calculation, .js-commission-message"),
o = addCommission(e, t);
return parseInt(t) ? (n.addClass("is-visible"), $(".js-commission-value").text(t), $(".js-commission-amount").text(format(o.commissionSum)), $(".js-total-amount").text(format(o.totalSum))) : n.removeClass("is-visible"), o.totalSum;
}
function allowOnlyDigit(e) {
var t = e.keyCode ? e.keyCode : e.which;
if (
!(
-1 !== $.inArray(t, [46, 8, 9, 27, 13, 110, 190]) ||
(65 == t && (!0 === e.ctrlKey || !0 === e.metaKey)) ||
(67 == t && (!0 === e.ctrlKey || !0 === e.metaKey)) ||
(88 == t && (!0 === e.ctrlKey || !0 === e.metaKey)) ||
(t >= 35 && t <= 39)
)
)
return (e.shiftKey || t < 48 || t > 57) && (t < 96 || t > 105) ? (e.preventDefault(), !1) : void 0;
}
function updateUserBalance(e) {
var t = e.formatBalance;
$(document)
.find(".js-user-balance")
.each(function () {
$(this).html(t);
});
}
$.fn.shortenByHr = function (e, t) {
var n = this;
$(document).off("click touched", ".seo-read-more"), n.attr("style", "").removeClass("restored").find(".seo-read-more").remove();
var o = n.find("hr");
if (o.length) {
var a = '<span class="seo-read-more">' + e + "</span>",
s = '<span class="seo-read-more read-less">' + t + "</span>";
o.prev().append(a), n.find(":last").append(s);
var i = o.position().top,
r = n.height();
n.height(i),
$(document).on("click touched", ".seo-read-more", function () {
n.hasClass("restored") ? n.height(i) : n.height(r), n.toggleClass("restored");
});
}
};
var bonusDescriptionToggler = ".js-bonus-description-toggler",
bonusSwitcher = ".js-bonus-state-switcher",
switchOffClass = "switched-off";
$(document).on("click", bonusDescriptionToggler, function () {
var s = $(this).parent(),
a = s.find(".js-bonus-description");
s.addClass("disabled"),
s.toggleClass("active"),
a.slideToggle(500, function () {
s.removeClass("disabled");
});
}),
$(document).on("click", bonusSwitcher, function () {
var s = $(this),
a = s.data("id"),
i = $(".bid-" + a);
i.hasClass(switchOffClass)
? $.ajax(s.data("href"), { method: "DELETE" }).success(function () {
i.removeClass(switchOffClass), s.removeClass("is-disabled");
})
: $.ajax(s.data("href"), { method: "POST" }).success(function () {
i.addClass(switchOffClass), s.addClass("is-disabled");
});
});
function setTimer(t) {
var e = new Date();
return e.setTime(e.getTime() + 1e3 * t);
}
function CountDown(t) {
var e = $.extend({ container: null, endDate: null }, t);
$(e.container).each(function () {
var t = $(this),
n = t.attr("id"),
s = function (t) {
return t <= 0 ? "00" : t < 10 ? "0" + t : t;
},
a = {};
(a.today = new Date().getTime()),
(a.date_t = e.endDate),
(a.end = new Date(a.date_t).getTime()),
(a.dateX = new Date(a.end - a.today)),
(a.perDays = 864e5),
(a.days = s(
Math.floor((a.end - a.today) / a.perDays)
.toString()
.slice(-2)
)),
(a.hours = s(a.dateX.getUTCHours().toString().slice(-2))),
(a.mins = s(a.dateX.getMinutes().toString().slice(-2))),
(a.secs = s(a.dateX.getSeconds().toString().slice(-2)));
var o =
'<span class="countdown__item countdown__item--d days-' +
a.days +
'"><span>' +
a.days +
'</span></span><span class="countdown__item countdown__item--h days-' +
a.days +
" hours-" +
a.hours +
'"><span>' +
a.hours +
'</span></span><span class="countdown__item countdown__item--m days-' +
a.days +
" hours-" +
a.hours +
'"><span>' +
a.mins +
'</span></span><span class="countdown__item countdown__item--s days-' +
a.days +
" hours-" +
a.hours +
'"><span>' +
a.secs +
"</span></span>";
t.find(".js-countdown__numb").html(o);
var i = $("#" + n + " .countdown__item--d span"),
d = $("#" + n + " .countdown__item--h span"),
r = $("#" + n + " .countdown__item--m span"),
c = $("#" + n + " .countdown__item--s span"),
u = function () {
var t = $("#" + n),
e = new Date().getTime(),
a = new Date(COUNTDOWN_TIMERS[n].end - e);
if (COUNTDOWN_TIMERS[n].end - e <= 0)
i.text("00"),
d.text("00"),
r.text("00"),
c.text("00"),
t.is(".js-need-hide") && t.addClass("hidden_container"),
t.trigger("countFinished"),
t.hasClass("bonus-counter") && t.parents(".bonus-item").fadeOut(),
m && clearInterval(m);
else {
var o = s(
Math.floor((COUNTDOWN_TIMERS[n].end - e) / 864e5)
.toString()
.slice(-2)
),
u = s(a.getUTCHours().toString().slice(-2)),
_ = s(a.getMinutes().toString().slice(-2)),
l = s(a.getSeconds().toString().slice(-2));
i.text() !== o && i.text(o), d.text() !== u && d.text(u), r.text() !== _ && r.text(_), c.text(l);
}
},
_ = new Date().getTime();
if (a.end - _ > 0) {
var m = setInterval(u, 1e3);
(COUNTDOWN_TIMERS[n] = { end: a.end, int: m }), u();
}
});
}
var COUNTDOWN_TIMERS = [];
!(function (e) {
"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? (module.exports = e(require("jquery"))) : e(jQuery);
})(function (e) {
function n(e) {
return u.raw ? e : encodeURIComponent(e);
}
function o(e) {
return u.raw ? e : decodeURIComponent(e);
}
function i(e) {
return n(u.json ? JSON.stringify(e) : String(e));
}
function t(e) {
0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
try {
return (e = decodeURIComponent(e.replace(c, " "))), u.json ? JSON.parse(e) : e;
} catch (e) {}
}
function r(n, o) {
var i = u.raw ? n : t(n);
return e.isFunction(o) ? o(i) : i;
}
var c = /\+/g,
u = (e.cookie = function (t, c, s) {
if (arguments.length > 1 && !e.isFunction(c)) {
if ("number" == typeof (s = e.extend({}, u.defaults, s)).expires) {
var d = s.expires,
f = (s.expires = new Date());
f.setMilliseconds(f.getMilliseconds() + 864e5 * d);
}
return (document.cookie = [n(t), "=", i(c), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join(""));
}
for (var a = t ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], l = 0, m = p.length; m > l; l++) {
var x = p[l].split("="),
g = o(x.shift()),
j = x.join("=");
if (t === g) {
a = r(j, c);
break;
}
t || void 0 === (j = r(j)) || (a[g] = j);
}
return a;
});
(u.defaults = {}),
(e.removeCookie = function (n, o) {
return e.cookie(n, "", e.extend({}, o, { expires: -1 })), !e.cookie(n);
});
});
function setSaleParams(e, a) {
for (var t in e) SALE_PARAMS[t] = e[t];
a && renderModel();
}
function renderModel() {
if (SALE_PARAMS.bonusPercents) {
var e = SALE_PARAMS.bonusPercents
.toString()
.split("")
.reduce(function (e, a) {
return e + '<span class="stb-numder-' + a + '"></span>';
}, "");
$(SALE_DOM.saleCustomPercent).html(e);
}
$(SALE_DOM.saleDeposit).text(SALE_PARAMS.depositFormatted), $(SALE_DOM.salePercent).text(SALE_PARAMS.bonusPercents);
}
function webSocketSaleUpdate(e) {
var a = !e.prizeReceived || !!e.sale.isShortActiveSale;
setSaleParams(e.sale, a),
e.prizeReceived && e.sale.isShortActiveSale
? ($(SALE_DOM.shortActiveSale).removeClass("activated"), updateActiveSale(), $(SALE_DOM.ingameSale).show())
: e.prizeReceived &&
($(SALE_DOM.saleConditions).hide(), $(SALE_DOM.saleCountdown).addClass("hidden_container"), $(SALE_DOM.saleDone).show(), $(SALE_DOM.saleButtonHolder).hide(), $(SALE_DOM.shortActiveSale).removeClass("activated")),
e.sale.amountLeft && e.sale.isActivated && $(document).trigger("changeSaleDeposit");
}
function webSocketActivateShortActiveSale(e) {
$(SALE_DOM.ingameSale).hide(),
setSaleParams(e.sale, !0),
$(SALE_DOM.shortActiveSale).removeClass("fadeOut").addClass("explode"),
setTimeout(function () {
$(SALE_DOM.shortActiveSale).removeClass("explode").addClass("activated");
}, 1e3),
$(".b-fading-overlay").removeClass("display-overlay"),
$(document).trigger("changeSaleParams"),
$(document).trigger("changeSaleDeposit");
}
function activateSaleAction() {
var e = { saleId: SALE_PARAMS.saleId };
$.post("/sale/activate", e, function (e) {
e && setSaleParams(e, !0), $(document).trigger("changeSaleDeposit"), $(document).trigger("changeSaleParams");
});
}
function activateSale() {
$(SALE_DOM.saleNotActivatedBlock).hide(),
$(SALE_DOM.saleActivatedBlock).show(),
$(SALE_DOM.saleActiveCondition).addClass("item-active"),
$(SALE_DOM.saleDone).hide(),
$(SALE_DOM.saleCountdown).removeClass("hidden_container"),
CountDown({ container: SALE_DOM.saleCountdown, endDate: setTimer(SALE_PARAMS.timeLeft) }),
$(SALE_DOM.saleItem).addClass("activated-bonus"),
$(SALE_DOM.saleItem).find(".b-link").addClass("registered");
}
function activateIngameSale() {
$(".rebill-widget").addClass("minified"), CountDown({ container: SALE_DOM.saleIngameCountdown, endDate: setTimer(SALE_PARAMS.timeLeft) }), $(SALE_DOM.saleIngameCountdown).removeClass("hidden_container");
}
function setActiveSaleData(e) {
setSaleParams(e, !0),
$(SALE_DOM.saleCountdown).addClass("hidden_container"),
window.COUNTDOWN_TIMERS &&
$(SALE_DOM.saleCountdown).each(function () {
var e = $(this).attr("id");
window.COUNTDOWN_TIMERS[e] && clearInterval(window.COUNTDOWN_TIMERS[e].int);
}),
$(SALE_DOM.saleNotActivatedBlock).show(),
$(SALE_DOM.saleActiveCondition).removeClass("item-active"),
$(SALE_DOM.saleItem).removeClass("activated-bonus");
}
function updateActiveSale(e) {
e
? setActiveSaleData(e)
: $.get("/sale/get-current-sale-data", function (e) {
return e ? setActiveSaleData(e) : $(SALE_DOM.saleWrapper).fadeOut(), !1;
});
}
var SALE_DOM = {
ingameSale: ".js-ingame-sale",
saleWrapper: ".b-active-sale-promo",
shortActiveSale: ".js-stb",
saleItem: ".bonus-item-activesale",
saleConditions: ".js-sale-conditions",
saleIngameCountdown: "#activesaleCounterInGame",
saleStaticCountdown: "#activesaleCounterStatic",
saleCountdown: ".js-sale-countdown",
saleDone: ".js-sale-done",
saleButtonHolder: ".js-sale-button-holder",
salePercent: ".js-sale-percent",
saleCustomPercent: ".js-sale-custom-percent",
saleDeposit: ".js-sale-deposit",
saleActivateButton: ".js-sale-activate",
saleNotActivatedBlock: ".saleNotActivated",
saleActivatedBlock: ".saleActivated",
saleActiveCondition: ".js-sale-active-point",
saleEmail: ".js-sale-email",
saleEmailShowButton: ".js-sale-email-show",
saleEmailField: ".js-sale-email-field",
saleEmailSaveButton: ".js-sale-email-save",
saleEmailError: ".js-sale-email-error",
};
$(document).on("click", SALE_DOM.saleActivateButton, function (e) {
e.preventDefault(), activateSaleAction();
}),
$(document).on("countFinished", SALE_DOM.saleCountdown, function () {
window.SALE_PARAMS && window.SALE_PARAMS.isShortActiveSale
? ((SALE_PARAMS.isShortActiveSale = !1),
$(SALE_DOM.shortActiveSale).length &&
$(SALE_DOM.shortActiveSale).hasClass("activated") &&
($(SALE_DOM.shortActiveSale).addClass("fadeOut"),
setTimeout(function () {
$(SALE_DOM.shortActiveSale).removeClass("activated"), updateActiveSale(), $(SALE_DOM.ingameSale).fadeIn();
}, 300)))
: updateActiveSale();
}),
$(document).on("countFinished", SALE_DOM.saleStaticCountdown, function () {
$(SALE_DOM.saleNotActivatedBlock).show(), $(SALE_DOM.saleActivatedBlock).hide(), $(SALE_DOM.saleItem).removeClass("activated-bonus"), $(SALE_DOM.saleItem).find(".b-link").removeClass("registered");
}),
$(document).on("changeSaleParams", function () {
window.SALE_PARAMS && window.SALE_PARAMS.isActivated && (activateSale(), activateIngameSale());
}),
$(document).on("click", SALE_DOM.saleEmailShowButton, function (e) {
e.stopPropagation(), $(SALE_DOM.saleEmail).addClass("is-active");
}),
$(document).on("click", SALE_DOM.saleEmailSaveButton, function (e) {
e.stopPropagation();
var a = $(SALE_DOM.saleEmailField).val(),
t = $(this);
t.addClass("processed"),
$.ajax({
method: "POST",
data: { email: a },
url: "/sale/confirm-email",
success: function (e) {
t.removeClass("processed"),
e.error
? $(SALE_DOM.saleEmailError).text(e.message)
: ($(document).trigger("userEmailSaved", a),
activateSaleAction(),
setTimeout(function () {
$(SALE_DOM.saleWrapper).removeClass("need-email-activation");
}, 200),
$(SALE_DOM.saleEmail).remove());
},
});
}),
$(document).on("userEmailSaved", function (e, a) {
$(SALE_DOM.saleEmailField).val(a);
});
function createScale(e, t) {
var a = t;
999999 === t && (t += 1);
var n;
switch (parseInt(t / e).toString().length) {
case 3:
n = [e, 4 * e, 10 * e, t / 10, t / 3, a];
break;
case 4:
n = [e, 4 * e, 10 * e, 30 * e, 100 * e, 300 * e, t / 5, a];
break;
case 5:
n = [e, 4 * e, 10 * e, 30 * e, t / 20, t / 4, a];
break;
default:
n = [e, 2 * e, 3 * e, 4 * e, t / 4, t / 2, a];
}
return n.filter(removeDuplicates);
}
function formatNumber(e) {
999999 === e && (e += 1);
for (
var t = [
{ divider: 1e6, suffix: "M" },
{ divider: 1e3, suffix: "K" },
],
a = 0;
a < t.length;
a++
)
if (e >= t[a].divider) return (e / t[a].divider).toString() + t[a].suffix;
return e.toString();
}
function buildSet(e) {
for (var t = [], a = 0; a < e.length; a++) t[a] = { sum: e[a], label: formatNumber(e[a]) };
return t;
}
function sumsliderinit(e) {
if (((currentTab = e), (mainContainer = $("." + currentTab)), "addFundsTab" === currentTab)) {
var t = $(document).find(".paysystem").find(".js-payMethod-input:checked");
(defaultSum = defaultInSum),
window.SALE_PARAMS && 1 == window.SALE_PARAMS.activated && window.SALE_PARAMS.needToPay > defaultSum && (defaultSum = 1 * window.SALE_PARAMS.needToPay),
(min = parseInt(t.data("min"))),
(max = parseInt(t.data("max")));
} else (defaultSum = defaultOutSum), (min = minDefaultWithdraw), (max = maxDefaultWithdraw);
(set = buildSet(createScale(min, max))),
sumInput.init(mainContainer),
sumSlider.dom.init(mainContainer),
sumSlider.init(set),
eventBus.triggerHandler("form:sum:onchange", { newSum: defaultSum }),
mainContainer.find(".amount-result").val(defaultSum),
paySystem.init(mainContainer),
errors.hide();
}
function onSumInput() {
var e = payoutSum.val(),
t = maxWithdraw,
a = minDefaultWithdraw;
if ((payoutSystemChk && ((t = selectedMax < t ? selectedMax : t), (a = selectedMin)), void 0 !== maxWithdraw && void 0 !== payOutMethods)) {
if ((payoutSystemChk || sysMin.text(""), e <= maxWithdraw)) {
var n = e;
0 !== maxWithdraw && maxWithdraw >= minDefaultWithdraw
? e > maxWithdraw
? (payoutSum.addClass("has-error"), minSummError.add(lastStep).hide(), summError.show(), (payouterror = !0))
: e < sumSlider.points[0].sum
? (payoutSum.addClass("has-error"), summError.add(lastStep).hide(), minSummError.show(), minPayOut.text(sumSlider.points[0].sum), (payouterror = !0))
: (payoutSum.removeClass("has-error"), summError.add(minSummError).hide(), (payouterror = !1), payoutSystemChk && lastStep.show())
: ((payouterror = !0), payoutSum.removeClass("has-error"), lastStep.hide()),
sumSlider.points[0].sum > minDefaultWithdraw && eventBus.triggerHandler("paymentsystem:onstopchange", { setSumm: n });
} else payoutSum.val(t), (e = t), minSummError.hide(), payoutSum.removeClass("has-error"), (payouterror = !1);
0 !== maxWithdraw && maxWithdraw >= minDefaultWithdraw && ((payoutSystemChk && a <= e) || a === minDefaultWithdraw) && t >= e && redrawPaysystems(payOutMethods, e),
currentTab == payOutTab && redrawPaysystems(payOutMethods, e),
mainContainer.find(".ps-radio").on("change", function () {
updatePaysystem($(this)), (payoutSystemChk = !0), payouterror ? lastStep.hide() : lastStep.show();
});
}
}
function redrawPaysystems(e, t) {
payoutSystemChk && (sumSlider.init(buildSet(createScale(selectedMin, selectedMax))), eventBus.triggerHandler("form:sum:onchange", { newSum: t }));
var a = $(".payment-systems-withdraw").find(".paysystem"),
n = e;
a.removeClass("is-disabled"), a.find("input").prop("disabled", !1);
for (var r in e) {
var i = n[r],
s = $(".payment-systems-withdraw").find('.js-payMethod-input[value="' + i.name + '"]');
(minOut = void 0 === i.limits.min ? 0 : i.limits.min), (maxOut = void 0 === i.limits.max ? maxDefaultWithdraw : i.limits.max), (t < minOut || t > maxOut) && (s.prop("disabled", !0), s.parent().addClass("is-disabled"));
}
(minSelectedOut = $(".payment-systems-withdraw").find(".js-payMethod-input:checked").data("min")), (maxSelectedOut = $(".payment-systems-withdraw").find(".js-payMethod-input:checked").data("max"));
}
function updatePaysystem(e) {
var t = e.val();
eventBus.triggerHandler("paymentsystem:onchange", { selectedSys: t }), (payouterror = !1), minSummError.hide(), lastStep.show();
}
function addFundsHandler(e) {
e.preventDefault();
var t = $("#addfundsSum"),
a = formatSum(t.val()),
n = formatSum(sumSlider.points[0].sum),
r = formatSum(sumSlider.points[sumSlider.points.length - 1].sum),
i = $("#addfundsSumCommission");
totalSumWithCommission ? (t.attr("name", ""), i.val(totalSumWithCommission).attr("name", "sum")) : (t.attr("name", "sum"), i.val("").attr("name", "")),
errorsHandler.paySystemError && errors.text(" ’N‹ ± µN€  N‚ µ    » °N‚ µ ¶  N‹      µN‚    .").slideDown(),
errorsHandler.sumInputError &&
((errorsHandler.errorText =
a < n
? "           ° »N    °N  N N      °    »N     µ     ·  N‚ ° " + sumSlider.points[0].sum + " N€N  ±."
: a > r
? "   °  N      ° »N    °N  N N      °    »N     µ     ·  N‚ ° " + sumSlider.points[sumSlider.points.length - 1].sum + " N€N  ±."
: a
? "  N      °          »   µ    N       µ   µ   °    µ    N€N€ µ  N‚    ."
: " ’   µ    N‚ µ N N     N           »   µ    N ."),
errors.text(errorsHandler.errorText).slideDown()),
errorsHandler.sumInputError || errorsHandler.paySystemError || ($('[name="source"]').val(getPaymentSourceValue()), $("#addfunds-payment-form").submit());
}
function formatSum(e) {
return parseInt(Math.floor(e));
}
function requestWithdraw() {
var e = $(document).find("#payout-form"),
t = $(document).find("#withdraw-email"),
a = t.val(),
n = $(document).find(".js-email-error-holder"),
r = $("#payoutSum"),
i = e.serialize();
$.ajax({
type: "POST",
data: i,
async: !1,
url: validatePayoutUrl,
success: function (i) {
return i.emailError
? (t.addClass("has-error"), n.text(i.emailError).show(), !1)
: ((maxWithdraw = i.availableSum),
$(document).trigger("userEmailSaved", a),
i.availableSum < minDefaultWithdraw
? (redrawPaysystems(payOutMethods, i.availableSum),
$(".user-payout-message").removeClass("is-shown"),
lastStep.hide(),
$(".js-payout-main").hide(),
e.find(".js-payMethod-input:checked").removeAttr("checked"),
sysMin.text(""),
$(".js-payout-fail").show(),
!1)
: i.isAvailable
? (t.length && e.removeClass("js-withdraw-email show-email-form"), void e.submit())
: (redrawPaysystems(payOutMethods, i.availableSum), i.commissionMessage && $(".commission-message").html(i.commissionMessage), r.val(i.availableSum), onSumInput(), !1));
},
});
}
function changePayInSum() {
if (currentTab == addFundsTab && $("#addfundsSum").length) {
var e = defaultInSum;
window.SALE_PARAMS && 1 == window.SALE_PARAMS.isActivated && window.SALE_PARAMS.amountLeft > defaultInSum && window.SALE_PARAMS.amountLeft <= depositMax && (e = 1 * window.SALE_PARAMS.amountLeft),
$("#addfundsSum").val(e),
setTimeout(function () {
eventBus.triggerHandler("form:sum:onchange", { newSum: e.toString() }), sumInput.init(mainContainer);
});
}
}
function updateCancelDecision(e, t, a) {
var n = t.find(".comment-cell");
n.fadeOut(500, function () {
a.attr("data-status", e.status.index).html("<span>" + e.status.name + "</span>"),
e.comment.length ? n.html('<div class="ph-comment-holder"><div class="ph-comment">' + e.comment + "</div></div>") : n.html('<div class="ph-comment-holder ph-nocomment"></div>');
}).fadeIn(500);
}
function animateCancelationPopup(e, t, a) {
e.hasClass("show-popup") ? e.removeClass("show-popup") : e.addClass("show-popup"),
a &&
setTimeout(function () {
a();
}, t);
}
function removeDuplicates(e, t, a) {
return a.indexOf(e) === t;
}
var eventBus = $({}),
addFundsTab = "addFundsTab",
payOutTab = "payOutTab",
payHistoryTab = "payHistoryTab",
currentTab = addFundsTab,
mainContainer = $("." + currentTab),
errors = $(".error-holder"),
sumSlider = null,
sumInput = null,
paySystem = null,
payProvider = null,
paySystemCode = null,
payoutSystemChk = null,
payoutSum = null,
minSummError = null,
summError = null,
lastStep = null,
minPayOut = null,
sysMin = null,
payouterror = !1,
sliderState = "notsliding",
defaultSum,
defaultInSum = defaultInSum,
defaultOutSum = 100,
paymentRequiredData = ["sum", "payProvider", "payMethod"];
if (void 0 === depositMin) var depositMin = 0;
if (void 0 === depositMax) var depositMax = 0;
if (void 0 === maxWithdraw) var maxWithdraw = 0;
if (void 0 === minDefaultWithdraw) var minDefaultWithdraw = 0;
if (void 0 === maxDefaultWithdraw) var maxDefaultWithdraw = 0;
if (void 0 === payOutMethods) var payOutMethods = {};
var min = depositMin,
max = depositMax,
payMax = null,
payCommission = null,
totalSumWithCommission = null,
selectedMin = 0,
selectedMax = 0,
errorsHandler = [],
cashModal = $("#modalCash");
cashModal.on("loaded.bs.modal", function () {
(payoutSum = $("#payoutSum")),
(minSummError = $(".minsumm-error-holder")),
(summError = $(".summ-error-holder")),
(lastStep = $(".step-3")),
(minPayOut = $(".min-payout-error")),
(sysMin = $(".sys-minsum")),
sumsliderinit(addFundsTab),
payoutSum.typeWatch({
callback: function () {
onSumInput();
},
wait: 100,
captureLength: 0,
}),
changePayInSum(),
$(document)
.find('[data-toggle="tab"]')
.click(function () {
(paySystemCode = null),
(payoutSystemChk = !1),
$(this).data("tab") != payHistoryTab && sumsliderinit($(this).data("tab")),
$(this).data("tab") === payOutTab && (maxWithdraw < 100 && (summError.hide(), payoutSum.val(maxWithdraw), eventBus.triggerHandler("form:sum:onchange", { newSum: maxWithdraw })), onSumInput());
});
});
var defscale = createScale(min, max),
set = buildSet(defscale);
!(function () {
var e = mainContainer.find(".amount-result");
(sumInput = {
init: function (t) {
var a = t.find(".amount-result"),
n = /^\d+$/;
(e = a.val()), a.removeClass("has-error"), (errorsHandler.sumInputError = !1);
var r = {
callback: function (t) {
(t = formatSum(t)),
isNaN(t) && (t = 0),
eventBus.triggerHandler("form:sum:onchange", { oldSum: e, newSum: t }),
(e = t),
"" === t || t < sumSlider.points[0].sum || !n.test(t)
? (a.addClass("has-error"), (errorsHandler.sumInputError = !0))
: ((errorsHandler.sumInputError = !1), currentTab !== payOutTab && (a.removeClass("has-error"), errors.hide()));
var r = formatSum(a.val());
isNaN(r) && (r = 0), r > sumSlider.points[sumSlider.points.length - 1].sum && (r = sumSlider.points[sumSlider.points.length - 1].sum), a.val(r);
},
wait: 500,
highlight: !0,
captureLength: 0,
};
a.typeWatch(r),
a.keypress(function (e) {
var t = /[\d]/,
a = String.fromCharCode(e.which);
if (!t.test(a) && 0 !== e.which && 8 !== e.which) return e.preventDefault(), !1;
});
},
}).init(mainContainer),
eventBus.bind("sum:slider:onchange", function (e, t) {
mainContainer.find(".amount-result").val(t.sum);
}),
eventBus.bind("sum:slider:onstopchange", function (t, a) {
mainContainer.find(".amount-result").removeClass("has-error"), errors.hide();
var n = a.sum;
currentTab === payOutTab && n > maxWithdraw && (n = maxWithdraw), mainContainer.find(".amount-result").val(n);
var r = mainContainer.find(".amount-result").val();
r !== e && (eventBus.triggerHandler("form:sum:onchange", { oldSum: e, newSum: r.toString() }), (e = r)), mainContainer.find("#payoutSum").trigger("input"), sumInput.init(mainContainer);
});
})(),
(function () {
function e(e, t) {
sliderState = "sliding";
var r = t.value,
i = sumSlider.points;
if (currentTab === payOutTab) {
var s = maxSelectedOut && maxSelectedOut < maxWithdraw ? maxSelectedOut : maxWithdraw;
if (r > n(s)) {
e.preventDefault(), eventBus.triggerHandler("form:sum:onchange", { newSum: s });
var o = formatSum(s);
return i[i.length - 1].sum < s && (o = formatSum(i[i.length - 1].sum)), mainContainer.find(".amount-result").val(o), !1;
}
}
return eventBus.triggerHandler("sum:slider:onchange", { sum: a(r), val: r }), !0;
}
function t(e, t) {
(sliderState = "notsliding"), eventBus.triggerHandler("sum:slider:onstopchange", { sum: mainContainer.find(".amount-result").val() });
}
function a(e) {
var t = sumSlider.points,
a = Math.floor(e),
n = e % 1,
r = t[a + 1 <= t.length - 1 ? a + 1 : t.length - 1].sum - t[a].sum;
return Math.round(t[a].sum + n * r);
}
function n(e) {
for (var t, a, n = sumSlider.points.length, i = r(e), s = 0; s < n; s++) {
var o = s + 1 <= n - 1 ? s + 1 : n - 1;
if (((t = sumSlider.points[s].sum), (a = sumSlider.points[o].sum), i >= t && i <= a)) return s + r(((i - t) / (a - t)).toFixed(1));
}
return 0;
}
function r(e) {
return 1 * e;
}
(sumSlider = {
points: [],
dom: {
init: function (e) {
return (this.container = e.find(".js-slider-container")), (this.slider = this.container.find(".js-slider")), (this.sums = this.container.find(".js-slider-legend")), (this.ul = this.sums.find("ul")), this;
},
}.init(mainContainer),
init: function (a) {
var r = this;
this.setPoints(this.getDefaultPointsConfig(a)),
this.dom.slider.slider({ range: "min", value: 0, min: 0, max: a.length - 1, step: 0.1, change: null, slide: e, stop: t }),
currentTab === payOutTab && (this.dom.slider.find(".slider-max-value").remove(), this.dom.slider.prepend('<div class="slider-max-value" style="width: ' + (100 / (a.length - 1)) * n(maxWithdraw) + '%">')),
setTimeout(function () {
r.dom.sums.width(r.dom.slider.width() + r.dom.slider.width() / (a.length - 1));
}, 200);
},
reset: function () {},
getDefaultPointsConfig: function (e) {
return e;
},
setPoints: function (e) {
var t = this,
a = "";
$.each(e, function (n, r) {
(a += '<li class="slider-legend__item" style="width:' + 100 / e.length + '%"><span class="point" data-sum="' + r.sum + '">' + r.label + "</span></li>"), t.dom.ul.html(a);
}),
(this.points = e),
this.reset();
},
}).init(set),
$(document).on("click", ".point", function () {
var e = $(this).data("sum");
eventBus.triggerHandler("sum:slider:onchange", { sum: e, val: n(e) }), eventBus.triggerHandler("sum:slider:onstopchange", { sum: e, val: n(e) });
}),
eventBus.bind("form:sum:onchange", function (e, t) {
errorsHandler.sumInputError = !1;
var a = n(t.newSum);
if (((totalSumWithCommission = processCommissionInfo(t.newSum, payCommission)), payCommission && "payOutTab" !== currentTab && totalSumWithCommission > payMax)) {
var r = fitMaxSum(payMax, payCommission);
(totalSumWithCommission = processCommissionInfo(r, payCommission)), mainContainer.find(".amount-result").val(r);
}
setTimeout(function () {
sumSlider.dom.slider.slider("value", a);
});
}),
eventBus.triggerHandler("form:sum:onchange", { newSum: mainContainer.find(".amount-result").val() });
})(),
(paySystem = {
init: function (e) {
var t = e.find(".paysystem").find("input"),
a = $(".js-payMethod-input:checked").length ? $(".js-payMethod-input:checked") : $(".js-payMethod-input").eq(0);
(errorsHandler.paySystemError = !0),
currentTab != payOutTab && eventBus.triggerHandler("paymentsystem:onchange", { selectedSys: a.val() }),
t.change(function () {
if (t.parent().hasClass("is-disabled")) return !1;
var e = $(this).val();
currentTab == payOutTab && ((minSelectedOut = $(this).data("min")), (maxSelectedOut = $(this).data("max"))), eventBus.triggerHandler("paymentsystem:onchange", { selectedSys: e });
});
},
}).init(mainContainer),
eventBus.bind("paymentsystem:onchange", function (e, t) {
if (t.selectedSys) {
$(".ps-radio").prop("checked", !1);
var a = mainContainer.find(".paysystem").find('[value="' + t.selectedSys + '"]');
a.prop("checked", !0), (payProvider = a.data("payprovider")), $("input[type=hidden][name=payProvider]").val(payProvider);
var n = a.data("min");
(payMax = a.data("max")),
"payOutTab" !== currentTab && ((payCommission = a.data("commission")), $(".js-commission-message").text(a.data("commission_message"))),
("" === n || void 0 === n || n < min) && (n = min),
("" !== payMax && void 0 !== payMax) || (payMax = max),
errors.hide();
var r = buildSet(createScale(n, payMax));
sumSlider.init(r);
var i = defaultSum,
s = mainContainer.find(".amount-result").val();
s !== i && (i = s),
i <= r[0].sum && (i = r[0].sum),
i > r[r.length - 1].sum && (i = r[r.length - 1].sum),
eventBus.triggerHandler("form:sum:onchange", { newSum: i }),
mainContainer.find(".amount-result").removeClass("has-error").val(i),
sumInput.init(mainContainer),
(errorsHandler.paySystemError = !1),
minPayOut.text(n),
sysMin.text("   »N    N‹ ±N€ °              » °N‚ µ ¶            µN‚     °"),
(paySystemCode = t.selectedSys),
(selectedMin = n),
(selectedMax = payMax);
}
}),
$(document).on("keydown paste cut input", function () {
$(this).removeClass("has-error"), errors.hide();
}),
$(document).on("click", "#btnPay", addFundsHandler),
$(document).on("cut copy paste", ".amount-result", function (e) {
e.preventDefault();
}),
cashModal.on("hidden.bs.modal", function () {
cashModal.removeData("bs.modal"), cashModal.find(".modal-content").html('<div class="uil-ripple-css"></div>');
}),
$(document).on("click", ".js-btn-pay", function () {
return $('[data-tab="' + addFundsTab + '"]').click(), !1;
}),
$(document).on("userEmailSaved", function (e, t) {
if ($(document).find("#payout-form").hasClass("js-withdraw-email") && t) return $("#withdraw-email").val(t).trigger("input"), !1;
}),
$(document).on("click", "#btnPrePayout", function (e) {
e.preventDefault();
var t = $(document).find("#payout-form");
if (t.hasClass("js-withdraw-email")) return t.addClass("show-email-form"), !1;
requestWithdraw();
}),
$(document).on("click", "#btnPrevalidateEmail", function (e) {
e.preventDefault(), requestWithdraw();
}),
$(document).on("click", ".js-email-withdraw-validation-back", function (e) {
e.preventDefault(), $(document).find("#payout-form").removeClass("show-email-form");
}),
$(document).on("input", "#withdraw-email", function (e) {
var t = $(this),
a = t.val().length,
n = $(document).find("#btnPrevalidateEmail");
a > 0 && n.hasClass("b-btn--disabled") && n.removeClass("b-btn--disabled").addClass("b-btn--red"), 0 == a && n.removeClass("b-btn--red").addClass("b-btn--disabled"), t.hasClass("has-error") && t.removeClass("has-error");
}),
$(document).on("changeSaleDeposit", function () {
changePayInSum();
}),
$(document).on("submit", "#payout-form, #addfunds-payment-form", function () {
var e = [],
t = !1;
if (
($(this)
.serializeArray()
.forEach(function (t) {
e[t.name] = t.value;
}),
paymentRequiredData.forEach(function (a) {
e[a] || (t = !0);
}),
t)
)
return !1;
}),
$(document).on("click", ".js-undo-withdraw, .js-cancel-undo", function (e) {
e.preventDefault(), animateCancelationPopup($(this).closest(".undo-withdraw"));
}),
$(document).on("click", ".js-confirm-undo", function (e) {
e.preventDefault();
var t = $(this),
a = t.data("payment-id"),
n = t.attr("href"),
r = t.closest(".payment-history-item"),
i = r.find(".operation-status");
$.ajax({
method: "POST",
url: n,
data: { id: a },
success: function (e) {
if (!e) return animateCancelationPopup(r), $(".js-alert .b-alert__content").html(WITHDRAW_CANCEL.errorText), alerts({ container: ".js-alert", show: "alert-show" }), !1;
animateCancelationPopup(r, 1e3, function () {
updateCancelDecision(e, r, i), 2 == e.status.index && $(".js-alert").addClass("is-fail"), $(".js-alert .b-alert__content").html(e.message), alerts({ container: ".js-alert", show: "alert-show" });
});
},
});
});
!(function (a, b) {
"use strict";
function c() {
if (!e) {
e = !0;
var a,
c,
d,
f,
g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
h = !!navigator.userAgent.match(/Trident.*rv:11\./),
i = b.querySelectorAll("iframe.wp-embedded-content");
for (c = 0; c < i.length; c++) {
if (((d = i[c]), !d.getAttribute("data-secret"))) (f = Math.random().toString(36).substr(2, 10)), (d.src += "#?secret=" + f), d.setAttribute("data-secret", f);
if (g || h) (a = d.cloneNode(!0)), a.removeAttribute("security"), d.parentNode.replaceChild(a, d);
}
}
}
var d = !1,
e = !1;
if (b.querySelector) if (a.addEventListener) d = !0;
if (((a.wp = a.wp || {}), !a.wp.receiveEmbedMessage))
if (
((a.wp.receiveEmbedMessage = function (c) {
var d = c.data;
if (d)
if (d.secret || d.message || d.value)
if (!/[^a-zA-Z0-9]/.test(d.secret)) {
var e,
f,
g,
h,
i,
j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
for (e = 0; e < k.length; e++) k[e].style.display = "none";
for (e = 0; e < j.length; e++)
if (((f = j[e]), c.source === f.contentWindow)) {
if ((f.removeAttribute("style"), "height" === d.message)) {
if (((g = parseInt(d.value, 10)), g > 1e3)) g = 1e3;
else if (~~g < 200) g = 200;
f.height = g;
}
if ("link" === d.message)
if (((h = b.createElement("a")), (i = b.createElement("a")), (h.href = f.getAttribute("src")), (i.href = d.value), i.host === h.host)) if (b.activeElement === f) a.top.location.href = d.value;
} else;
}
}),
d)
)
a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1);
})(window, document);

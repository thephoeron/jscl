// This file is prepended to the result of compile jscl.lisp, and
// contain runtime code that jscl assumes to exist.

var window = this;
var nil;

globalEval = eval;  // Just an indirect eval

function pv (x) { return x==undefined? nil: x; }

function mv(){
    var r = [].slice.call(arguments);
    r['multiple-value'] = true;
    return r;
}

function forcemv (x) {
    return typeof x == 'object' && 'multiple-value' in x? x: mv(x);
}

// NOTE: Define VALUES to be MV for toplevel forms. It is because
// `eval' compiles the forms and execute the Javascript code at
// toplevel with `js-eval', so it is necessary to return multiple
// values from the eval function.
var values = mv;

function checkArgsAtLeast(args, n){
    if (args < n) throw 'too few arguments';
}

function checkArgsAtMost(args, n){
    if (args > n) throw 'too many arguments';
}

function checkArgs(args, n){
    checkArgsAtLeast(args, n);
    checkArgsAtMost(args, n);
}

// Improper list constructor (like LIST*)
function QIList(){
    if (arguments.length == 1)
        return arguments[0];
    else {
        var i = arguments.length-1;
        var r = arguments[i--];
        for (; i>=0; i--){
            r = {car: arguments[i], cdr: r};
        }
        return r;
    }
}


// Create and return a lisp string for the Javascript string STRING.
function make_lisp_string (string){
    var array = string.split("");
    array.type = 'character'
    return array;
}

function xstring(x){ return x.join(''); }


function Symbol(name, package_name){
    this.name = name;
    if (package_name)
        this['package'] = package_name;
}

function lisp_to_js (x) {
    if (typeof x == 'object' && 'length' in x && x.type == 'character')
        return xstring(x);
    else if (typeof x == 'function'){
        // Trampoline calling the Lisp function
        return (function(){
            var args = Array.prototype.slice.call(arguments);
            for (var i in args)
                args[i] = js_to_lisp(args[i]);
            return lisp_to_js(x.apply(this, [pv, arguments.length].concat(args)));
        });
    }
    else return x;
}

function js_to_lisp (x) {
    if (typeof x == 'string')
        return make_lisp_string(x);
    else if (typeof x == 'function'){
        // Trampoline calling the JS function
        return (function(values, nargs){
            var args = Array.prototype.slice.call(arguments, 2);
            for (var i in args)
                args[i] = lisp_to_js(args[i]);
            return values(js_to_lisp(x.apply(this, args)));
        });
    } else return x;
}
var l1 = (new Symbol(make_lisp_string("DEFMACRO")));
l1;
var l2 = (new Symbol(make_lisp_string("DECLAIM")));
l2;
var l3 = (new Symbol(make_lisp_string("DEFCONSTANT")));
l3;
var l4 = (new Symbol(make_lisp_string("T")));
(function(){
    ((l4).value = l4);
    return l4;
})();
var l5 = (new Symbol(make_lisp_string("NIL")));
(function(){
    ((l5).value = l5);
    return l5;
})();
(nil = lisp_to_js(l5.value));
var l6 = (new Symbol(make_lisp_string("LAMBDA")));
l6;
var l7 = (new Symbol(make_lisp_string("WHEN")));
l7;
var l8 = (new Symbol(make_lisp_string("UNLESS")));
l8;
var l9 = (new Symbol(make_lisp_string("DEFVAR")));
l9;
var l10 = (new Symbol(make_lisp_string("DEFPARAMETER")));
l10;
var l11 = (new Symbol(make_lisp_string("DEFUN")));
l11;
var l12 = (new Symbol(make_lisp_string("RETURN")));
l12;
var l13 = (new Symbol(make_lisp_string("WHILE")));
l13;
var l14 = (new Symbol(make_lisp_string("*GENSYM-COUNTER*")));
(function(){
    (((l14.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l14).value = 0));
    return l14;
})();
var l15 = (new Symbol(make_lisp_string("GENSYM")));
var l16 = make_lisp_string("G");
var l17 = (new Symbol(make_lisp_string("INTEGER-TO-STRING")));
(function(){
    (l15).fvalue = (function(){
        var func = (function (values,nargs,v1){
            checkArgsAtMost(nargs, 1);
            switch(nargs){
            case 0:
                v1=l16;
            default: break;
            }
            return (function(){
                ((l14).value = (function(){
                    var x1 = (function(){
                        var symbol = l14;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    return x1+1;
                })());
                return (new Symbol((function(){
                    var r = v1.concat(l17.fvalue(pv, 1, (function(){
                        var symbol = l14;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })()));
                    r.type = 'character';return r;
                })()));
            })();
        });
        func.fname = 'GENSYM';
        return func;
    })();
    return l15;
})();
var l18 = (new Symbol(make_lisp_string("BOUNDP")));
(function(){
    (l18).fvalue = (function(){
        var func = (function (values,nargs,v3){
            checkArgs(nargs, 1);
            return (function(){
                return ((v3.value !== undefined)?l4.value: l5.value);
            })();
        });
        func.fname = 'BOUNDP';
        return func;
    })();
    return l18;
})();
var l19 = (new Symbol(make_lisp_string("=")));
(function(){
    (l19).fvalue = (function(){
        var func = (function (values,nargs,v5,v6){
            checkArgs(nargs, 2);
            return (function(){
                return (function(){
                    var x1 = v5;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v6;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return (x1==x2?l4.value: l5.value);
                })();
            })();
        });
        func.fname = '=';
        return func;
    })();
    return l19;
})();
var l20 = (new Symbol(make_lisp_string("*")));
(function(){
    (l20).fvalue = (function(){
        var func = (function (values,nargs,v8,v9){
            checkArgs(nargs, 2);
            return (function(){
                return (function(){
                    var x1 = v8;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v9;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1*x2;
                })();
            })();
        });
        func.fname = '*';
        return func;
    })();
    return l20;
})();
var l21 = (new Symbol(make_lisp_string("/")));
(function(){
    (l21).fvalue = (function(){
        var func = (function (values,nargs,v11,v12){
            checkArgs(nargs, 2);
            return (function(){
                return (function(){
                    var x1 = v11;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v12;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1/x2;
                })();
            })();
        });
        func.fname = '/';
        return func;
    })();
    return l21;
})();
var l22 = (new Symbol(make_lisp_string("1+")));
(function(){
    (l22).fvalue = (function(){
        var func = (function (values,nargs,v14){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var x1 = v14;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    return x1+1;
                })();
            })();
        });
        func.fname = '1+';
        return func;
    })();
    return l22;
})();
var l23 = (new Symbol(make_lisp_string("1-")));
(function(){
    (l23).fvalue = (function(){
        var func = (function (values,nargs,v16){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var x1 = v16;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    return x1-1;
                })();
            })();
        });
        func.fname = '1-';
        return func;
    })();
    return l23;
})();
var l24 = (new Symbol(make_lisp_string("ZEROP")));
(function(){
    (l24).fvalue = (function(){
        var func = (function (values,nargs,v18){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var x1 = v18;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    return (x1==0?l4.value: l5.value);
                })();
            })();
        });
        func.fname = 'ZEROP';
        return func;
    })();
    return l24;
})();
var l25 = (new Symbol(make_lisp_string("TRUNCATE")));
(function(){
    (l25).fvalue = (function(){
        var func = (function (values,nargs,v20,v21){
            checkArgsAtLeast(nargs, 1);
            checkArgsAtMost(nargs, 2);
            switch(nargs){
            case 1:
                v21=1;
            default: break;
            }
            return (function(){
                return (function(){
                    var x = (function(){
                        var x1 = v20;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v21;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1/x2;
                    })();
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    return Math.floor(x);
                })();
            })();
        });
        func.fname = 'TRUNCATE';
        return func;
    })();
    return l25;
})();
var l26 = (new Symbol(make_lisp_string("EQL")));
(function(){
    (l26).fvalue = (function(){
        var func = (function (values,nargs,v23,v24){
            checkArgs(nargs, 2);
            return (function(){
                return ((v23 === v24)?l4.value: l5.value);
            })();
        });
        func.fname = 'EQL';
        return func;
    })();
    return l26;
})();
var l27 = (new Symbol(make_lisp_string("NOT")));
(function(){
    (l27).fvalue = (function(){
        var func = (function (values,nargs,v26){
            checkArgs(nargs, 1);
            return (function(){
                return (v26 !== l5.value ? l5.value : l4.value);
            })();
        });
        func.fname = 'NOT';
        return func;
    })();
    return l27;
})();
var l28 = (new Symbol(make_lisp_string("INCF")));
l28;
var l29 = (new Symbol(make_lisp_string("DECF")));
l29;
var l30 = (new Symbol(make_lisp_string("PUSH")));
l30;
var l31 = (new Symbol(make_lisp_string("DOLIST")));
l31;
var l32 = (new Symbol(make_lisp_string("DOTIMES")));
l32;
var l33 = (new Symbol(make_lisp_string("COND")));
l33;
var l34 = (new Symbol(make_lisp_string("CASE")));
l34;
var l35 = (new Symbol(make_lisp_string("ECASE")));
l35;
var l36 = (new Symbol(make_lisp_string("AND")));
l36;
var l37 = (new Symbol(make_lisp_string("OR")));
l37;
var l38 = (new Symbol(make_lisp_string("PROG1")));
l38;
var l39 = (new Symbol(make_lisp_string("PROG2")));
l39;
var l40 = (new Symbol(make_lisp_string("+")));
(function(){
    (l40).fvalue = (function(){
        var func = (function (values,nargs){
            var v28= l5.value;
            for (var i = nargs-1; i>=0; i--)
                v28 = {car: arguments[i+2], cdr: v28};
            return (function(){
                return (function(v30){
                    return (function(){
                        return (function(v32,v33){
                            (function(){
                                while(v32 !== l5.value){
                                    (v33 = (function(){
                                        var tmp = v32;
                                        return tmp === l5.value? l5.value: tmp.car;
                                    })());
                                    (function(){
                                        (function(){
                                            var v34 = v33;
                                            var v35 = (function(){
                                                var x1 = v30;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v34;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })();
                                            return (v30 = v35);
                                        })();
                                        return l5.value;
                                    })();
                                    (v32 = (function(){
                                        var tmp = v32;
                                        return tmp === l5.value? l5.value: tmp.cdr;
                                    })());
                                }return l5.value;
                            })();
                            return v30;
                        })(v28,l5.value);
                    })();
                })(0);
            })();
        });
        func.fname = '+';
        return func;
    })();
    return l40;
})();
var l41 = (new Symbol(make_lisp_string("-")));
var l42 = (new Symbol(make_lisp_string("NULL")));
(function(){
    (l41).fvalue = (function(){
        var func = (function (values,nargs,v37){
            checkArgsAtLeast(nargs, 1);
            var v36= l5.value;
            for (var i = nargs-1; i>=1; i--)
                v36 = {car: arguments[i+2], cdr: v36};
            return (function(){
                return (l42.fvalue(pv, 1, v36) !== l5.value ? (function(){
                    var x1 = v37;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    return -x1;
                })() : (function(v39){
                    return (function(){
                        return (function(v41,v42){
                            (function(){
                                while(v41 !== l5.value){
                                    (v42 = (function(){
                                        var tmp = v41;
                                        return tmp === l5.value? l5.value: tmp.car;
                                    })());
                                    (function(){
                                        (function(){
                                            var v43 = v42;
                                            var v44 = (function(){
                                                var x1 = v39;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v43;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1-x2;
                                            })();
                                            return (v39 = v44);
                                        })();
                                        return l5.value;
                                    })();
                                    (v41 = (function(){
                                        var tmp = v41;
                                        return tmp === l5.value? l5.value: tmp.cdr;
                                    })());
                                }return l5.value;
                            })();
                            return v39;
                        })(v36,l5.value);
                    })();
                })(v37));
            })();
        });
        func.fname = '-';
        return func;
    })();
    return l41;
})();
var l43 = (new Symbol(make_lisp_string("APPEND-TWO")));
var l44 = (new Symbol(make_lisp_string("APPEND")));
(function(){
    (l43).fvalue = (function(){
        var func = (function (values,nargs,v45,v46){
            checkArgs(nargs, 2);
            return (function(){
                return (l42.fvalue(pv, 1, v45) !== l5.value ? v46 : ({car: (function(){
                    var tmp = v45;
                    return tmp === l5.value? l5.value: tmp.car;
                })(), cdr: l44.fvalue(pv, 2, (function(){
                    var tmp = v45;
                    return tmp === l5.value? l5.value: tmp.cdr;
                })(), v46)}));
            })();
        });
        func.fname = 'APPEND-TWO';
        return func;
    })();
    return l43;
})();
var l45 = (new Symbol(make_lisp_string("!REDUCE")));
(function(){
    (l44).fvalue = (function(){
        var func = (function (values,nargs){
            var v48= l5.value;
            for (var i = nargs-1; i>=0; i--)
                v48 = {car: arguments[i+2], cdr: v48};
            return (function(){
                return l45.fvalue(values, 3, (function(){
                    var symbol = l43;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })(), v48, l5.value);
            })();
        });
        func.fname = 'APPEND';
        return func;
    })();
    return l44;
})();
var l46 = (new Symbol(make_lisp_string("REVAPPEND")));
(function(){
    (l46).fvalue = (function(){
        var func = (function (values,nargs,v50,v51){
            checkArgs(nargs, 2);
            return (function(){
                (function(){
                    return (function(){
                        while(v50 !== l5.value){
                            (function(){
                                var v54 = (function(){
                                    var tmp = v50;
                                    return tmp === l5.value? l5.value: tmp.car;
                                })();
                                var v55 = ({car: v54, cdr: v51});
                                return (v51 = v55);
                            })();
                            (v50 = (function(){
                                var tmp = v50;
                                return tmp === l5.value? l5.value: tmp.cdr;
                            })());
                        }return l5.value;
                    })();
                })();
                return v51;
            })();
        });
        func.fname = 'REVAPPEND';
        return func;
    })();
    return l46;
})();
var l47 = (new Symbol(make_lisp_string("REVERSE")));
(function(){
    (l47).fvalue = (function(){
        var func = (function (values,nargs,v56){
            checkArgs(nargs, 1);
            return (function(){
                return l46.fvalue(values, 2, v56, l5);
            })();
        });
        func.fname = 'REVERSE';
        return func;
    })();
    return l47;
})();
var l48 = (new Symbol(make_lisp_string("PSETQ")));
l48;
var l49 = (new Symbol(make_lisp_string("DO")));
l49;
var l50 = (new Symbol(make_lisp_string("DO*")));
l50;
var l51 = (new Symbol(make_lisp_string("LIST-LENGTH")));
(function(){
    (l51).fvalue = (function(){
        var func = (function (values,nargs,v58){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v60){
                    (function(){
                        return (function(){
                            while(l27.fvalue(pv, 1, l42.fvalue(pv, 1, v58)) !== l5.value){
                                (function(){
                                    var v62 = 1;
                                    var v63 = (function(){
                                        var x1 = v60;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = v62;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1+x2;
                                    })();
                                    return (v60 = v63);
                                })();
                                (v58 = (function(){
                                    var tmp = v58;
                                    return tmp === l5.value? l5.value: tmp.cdr;
                                })());
                            }return l5.value;
                        })();
                    })();
                    return v60;
                })(0);
            })();
        });
        func.fname = 'LIST-LENGTH';
        return func;
    })();
    return l51;
})();
var l52 = (new Symbol(make_lisp_string("LENGTH")));
var l53 = make_lisp_string("length");
var l54 = (new Symbol(make_lisp_string("LISTP")));
(function(){
    (l52).fvalue = (function(){
        var func = (function (values,nargs,v64){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v66){
                    return (v66 !== l5.value ? v64.length : (function(v67){
                        return (v67 !== l5.value ? (function(){
                            var tmp = (v64)[xstring(l53)];
                            return tmp == undefined? l5.value: tmp ;
                        })() : (function(v68){
                            return (v68 !== l5.value ? l51.fvalue(values, 1, v64) : l5.value);
                        })(l54.fvalue(pv, 1, v64)));
                    })(((function(){
                        var x = v64;
                        return typeof x === 'object' && 'length' in x;
                    })()?l4.value: l5.value)));
                })(((function(){
                    var x = v64;
                    return typeof(x) == 'object' && 'length' in x && x.type == 'character';
                })()?l4.value: l5.value));
            })();
        });
        func.fname = 'LENGTH';
        return func;
    })();
    return l52;
})();
var l55 = (new Symbol(make_lisp_string("CONCAT-TWO")));
(function(){
    (l55).fvalue = (function(){
        var func = (function (values,nargs,v69,v70){
            checkArgs(nargs, 2);
            return (function(){
                return (function(){
                    var r = v69.concat(v70);
                    r.type = 'character';return r;
                })();
            })();
        });
        func.fname = 'CONCAT-TWO';
        return func;
    })();
    return l55;
})();
var l56 = (new Symbol(make_lisp_string("WITH-COLLECT")));
l56;
var l57 = (new Symbol(make_lisp_string("LOOP")));
l57;
var l58 = (new Symbol(make_lisp_string("IDENTITY")));
(function(){
    (l58).fvalue = (function(){
        var func = (function (values,nargs,v72){
            checkArgs(nargs, 1);
            return (function(){
                return v72;
            })();
        });
        func.fname = 'IDENTITY';
        return func;
    })();
    return l58;
})();
var l59 = (new Symbol(make_lisp_string("CONSTANTLY")));
(function(){
    (l59).fvalue = (function(){
        var func = (function (values,nargs,v74){
            checkArgs(nargs, 1);
            return (function(){
                return (function (values,nargs){
                    var v76= l5.value;
                    for (var i = nargs-1; i>=0; i--)
                        v76 = {car: arguments[i+2], cdr: v76};
                    return v74;
                });
            })();
        });
        func.fname = 'CONSTANTLY';
        return func;
    })();
    return l59;
})();
var l60 = (new Symbol(make_lisp_string("CODE-CHAR")));
(function(){
    (l60).fvalue = (function(){
        var func = (function (values,nargs,v77){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var x = v77;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    return String.fromCharCode(x);
                })();
            })();
        });
        func.fname = 'CODE-CHAR';
        return func;
    })();
    return l60;
})();
var l61 = (new Symbol(make_lisp_string("CHAR-CODE")));
(function(){
    (l61).fvalue = (function(){
        var func = (function (values,nargs,v79){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var x = v79;
                    if (typeof x != 'string')
                        throw 'The value ' + x + ' is not a type string.';
                    return x.charCodeAt(0);
                })();
            })();
        });
        func.fname = 'CHAR-CODE';
        return func;
    })();
    return l61;
})();
var l62 = (new Symbol(make_lisp_string("CHAR=")));
(function(){
    (l62).fvalue = (function(){
        var func = (function (values,nargs,v81,v82){
            checkArgs(nargs, 2);
            return (function(){
                return l26.fvalue(values, 2, v81, v82);
            })();
        });
        func.fname = 'CHAR=';
        return func;
    })();
    return l62;
})();
var l63 = (new Symbol(make_lisp_string("INTEGERP")));
(function(){
    (l63).fvalue = (function(){
        var func = (function (values,nargs,v84){
            checkArgs(nargs, 1);
            return (function(){
                return (((typeof (v84) == "number")?l4.value: l5.value) !== l5.value ? (function(){
                    var x1 = (function(){
                        var x = v84;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        return Math.floor(x);
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v84;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return (x1==x2?l4.value: l5.value);
                })() : l5.value);
            })();
        });
        func.fname = 'INTEGERP';
        return func;
    })();
    return l63;
})();
var l64 = (new Symbol(make_lisp_string("FLOATP")));
(function(){
    (l64).fvalue = (function(){
        var func = (function (values,nargs,v86){
            checkArgs(nargs, 1);
            return (function(){
                return (((typeof (v86) == "number")?l4.value: l5.value) !== l5.value ? l27.fvalue(values, 1, l63.fvalue(pv, 1, v86)) : l5.value);
            })();
        });
        func.fname = 'FLOATP';
        return func;
    })();
    return l64;
})();
var l65 = (new Symbol(make_lisp_string("PLUSP")));
(function(){
    (l65).fvalue = (function(){
        var func = (function (values,nargs,v88){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var x1 = v88;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    return (0<x1?l4.value: l5.value);
                })();
            })();
        });
        func.fname = 'PLUSP';
        return func;
    })();
    return l65;
})();
var l66 = (new Symbol(make_lisp_string("MINUSP")));
(function(){
    (l66).fvalue = (function(){
        var func = (function (values,nargs,v90){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var x1 = v90;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    return (x1<0?l4.value: l5.value);
                })();
            })();
        });
        func.fname = 'MINUSP';
        return func;
    })();
    return l66;
})();
var l67 = (new Symbol(make_lisp_string("ATOM")));
(function(){
    (l67).fvalue = (function(){
        var func = (function (values,nargs,v92){
            checkArgs(nargs, 1);
            return (function(){
                return l27.fvalue(values, 1, ((function(){
                    var tmp = v92;
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?l4.value: l5.value));
            })();
        });
        func.fname = 'ATOM';
        return func;
    })();
    return l67;
})();
var l68 = (new Symbol(make_lisp_string("REMOVE")));
(function(){
    (l68).fvalue = (function(){
        var func = (function (values,nargs,v94,v95){
            checkArgs(nargs, 2);
            return (function(){
                return (function(v97){
                    return (v97 !== l5.value ? l5.value : (function(v98){
                        return (v98 !== l5.value ? l68.fvalue(values, 2, v94, (function(){
                            var tmp = v95;
                            return tmp === l5.value? l5.value: tmp.cdr;
                        })()) : ({car: (function(){
                            var tmp = v95;
                            return tmp === l5.value? l5.value: tmp.car;
                        })(), cdr: l68.fvalue(pv, 2, v94, (function(){
                            var tmp = v95;
                            return tmp === l5.value? l5.value: tmp.cdr;
                        })())}));
                    })(l26.fvalue(pv, 2, v94, (function(){
                        var tmp = v95;
                        return tmp === l5.value? l5.value: tmp.car;
                    })())));
                })(l42.fvalue(pv, 1, v95));
            })();
        });
        func.fname = 'REMOVE';
        return func;
    })();
    return l68;
})();
var l69 = (new Symbol(make_lisp_string("REMOVE-IF")));
(function(){
    (l69).fvalue = (function(){
        var func = (function (values,nargs,v99,v100){
            checkArgs(nargs, 2);
            return (function(){
                return (function(v102){
                    return (v102 !== l5.value ? l5.value : (function(v103){
                        return (v103 !== l5.value ? l69.fvalue(values, 2, v99, (function(){
                            var tmp = v100;
                            return tmp === l5.value? l5.value: tmp.cdr;
                        })()) : ({car: (function(){
                            var tmp = v100;
                            return tmp === l5.value? l5.value: tmp.car;
                        })(), cdr: l69.fvalue(pv, 2, v99, (function(){
                            var tmp = v100;
                            return tmp === l5.value? l5.value: tmp.cdr;
                        })())}));
                    })((function(){
                        var f = v99;
                        return (typeof f === 'function'? f: f.fvalue)(pv, 1, (function(){
                            var tmp = v100;
                            return tmp === l5.value? l5.value: tmp.car;
                        })())
                    })()));
                })(l42.fvalue(pv, 1, v100));
            })();
        });
        func.fname = 'REMOVE-IF';
        return func;
    })();
    return l69;
})();
var l70 = (new Symbol(make_lisp_string("REMOVE-IF-NOT")));
(function(){
    (l70).fvalue = (function(){
        var func = (function (values,nargs,v104,v105){
            checkArgs(nargs, 2);
            return (function(){
                return (function(v107){
                    return (v107 !== l5.value ? l5.value : (function(v108){
                        return (v108 !== l5.value ? ({car: (function(){
                            var tmp = v105;
                            return tmp === l5.value? l5.value: tmp.car;
                        })(), cdr: l70.fvalue(pv, 2, v104, (function(){
                            var tmp = v105;
                            return tmp === l5.value? l5.value: tmp.cdr;
                        })())}) : l70.fvalue(values, 2, v104, (function(){
                            var tmp = v105;
                            return tmp === l5.value? l5.value: tmp.cdr;
                        })()));
                    })((function(){
                        var f = v104;
                        return (typeof f === 'function'? f: f.fvalue)(pv, 1, (function(){
                            var tmp = v105;
                            return tmp === l5.value? l5.value: tmp.car;
                        })())
                    })()));
                })(l42.fvalue(pv, 1, v105));
            })();
        });
        func.fname = 'REMOVE-IF-NOT';
        return func;
    })();
    return l70;
})();
var l71 = (new Symbol(make_lisp_string("ALPHA-CHAR-P")));
(function(){
    (l71).fvalue = (function(){
        var func = (function (values,nargs,v109){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v111){
                    return (v111 !== l5.value ? v111 : (function(){
                        var x1 = (function(){
                            var x = "Z";
                            if (typeof x != 'string')
                                throw 'The value ' + x + ' is not a type string.';
                            return x.charCodeAt(0);
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = (function(){
                            var x = v109;
                            if (typeof x != 'string')
                                throw 'The value ' + x + ' is not a type string.';
                            return x.charCodeAt(0);
                        })();
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        var x3 = (function(){
                            var x = "Z";
                            if (typeof x != 'string')
                                throw 'The value ' + x + ' is not a type string.';
                            return x.charCodeAt(0);
                        })();
                        if (typeof x3 !== 'number') throw 'Not a number!';
                        return (x1<=x2 && x2<=x3?l4.value: l5.value);
                    })());
                })((function(){
                    var x1 = (function(){
                        var x = "a";
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return x.charCodeAt(0);
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = (function(){
                        var x = v109;
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return x.charCodeAt(0);
                    })();
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    var x3 = (function(){
                        var x = "z";
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return x.charCodeAt(0);
                    })();
                    if (typeof x3 !== 'number') throw 'Not a number!';
                    return (x1<=x2 && x2<=x3?l4.value: l5.value);
                })());
            })();
        });
        func.fname = 'ALPHA-CHAR-P';
        return func;
    })();
    return l71;
})();
var l72 = (new Symbol(make_lisp_string("DIGIT-CHAR-P")));
(function(){
    (l72).fvalue = (function(){
        var func = (function (values,nargs,v112){
            checkArgs(nargs, 1);
            return (function(){
                return ((function(){
                    var x1 = (function(){
                        var x = "0";
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return x.charCodeAt(0);
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = (function(){
                        var x = v112;
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return x.charCodeAt(0);
                    })();
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    var x3 = (function(){
                        var x = "9";
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return x.charCodeAt(0);
                    })();
                    if (typeof x3 !== 'number') throw 'Not a number!';
                    return (x1<=x2 && x2<=x3?l4.value: l5.value);
                })() !== l5.value ? (function(){
                    var x1 = (function(){
                        var x = v112;
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return x.charCodeAt(0);
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = (function(){
                        var x = "0";
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return x.charCodeAt(0);
                    })();
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1-x2;
                })() : l5.value);
            })();
        });
        func.fname = 'DIGIT-CHAR-P';
        return func;
    })();
    return l72;
})();
var l73 = (new Symbol(make_lisp_string("DIGIT-CHAR")));
var l74 = make_lisp_string("0123456789");
(function(){
    (l73).fvalue = (function(){
        var func = (function (values,nargs,v114){
            checkArgs(nargs, 1);
            return (function(){
                return ((function(){
                    var x1 = v114;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    return (0<=x1 && x1<=9?l4.value: l5.value);
                })() !== l5.value ? l74[v114] : l5.value);
            })();
        });
        func.fname = 'DIGIT-CHAR';
        return func;
    })();
    return l73;
})();
var l75 = (new Symbol(make_lisp_string("SUBSEQ")));
(function(){
    (l75).fvalue = (function(){
        var func = (function (values,nargs,v116,v117,v118){
            checkArgsAtLeast(nargs, 2);
            checkArgsAtMost(nargs, 3);
            switch(nargs){
            case 2:
                v118=l5.value;
            default: break;
            }
            return (function(){
                return (v118 !== l5.value ? (function(){
                    var vector = v116;
                    var a = v117;
                    var b;
                    b = v118;
                    return vector.slice(a,b);
                })() : (function(){
                    var vector = v116;
                    var a = v117;
                    var b;
                    return vector.slice(a,b);
                })());
            })();
        });
        func.fname = 'SUBSEQ';
        return func;
    })();
    return l75;
})();
var l76 = (new Symbol(make_lisp_string("DO-SEQUENCE")));
l76;
var l77 = (new Symbol(make_lisp_string("FIND")));
var l78 = (new Symbol(make_lisp_string("KEY"), make_lisp_string("KEYWORD")));
var l79 = (new Symbol(make_lisp_string("TEST"), make_lisp_string("KEYWORD")));
var l80 = make_lisp_string("type-error!");
var l81 = (new Symbol(make_lisp_string("ERROR")));
(function(){
    (l77).fvalue = (function(){
        var func = (function (values,nargs,v120,v121){
            checkArgsAtLeast(nargs, 2);
            var v122; 
            var v123; 
            var i;
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] === l78.value){
                    v122 = arguments[i+3];
                    break;
                }
            }
            if (i == nargs){
                v122 = (function(){
                    var symbol = l58;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })();
            }
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] === l79.value){
                    v123 = arguments[i+3];
                    break;
                }
            }
            if (i == nargs){
                v123 = (function(){
                    var symbol = l26;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })();
            }
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] !== l78.value && arguments[i+2] !== l79.value)
                    throw 'Unknown keyword argument ' + xstring(arguments[i].name);
            }
            return (function(){
                return (function(v125){
                    return (function(v126){
                        return (v126 !== l5.value ? (function(v127){
                            return (function(){
                                try {
                                var v128 = [];
                                    return (function(v129,v130){
                                        (function(){
                                            while((function(){
                                                var x1 = v129;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v130;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return (x1<x2?l4.value: l5.value);
                                            })() !== l5.value){
                                                (function(){
                                                    (function(v131){
                                                        return ((function(){
                                                            var f = v123;
                                                            return (typeof f === 'function'? f: f.fvalue)(pv, 2, (function(){
                                                                var f = v122;
                                                                return (typeof f === 'function'? f: f.fvalue)(pv, 1, v131)
                                                            })(), v120)
                                                        })() !== l5.value ? (function(){
                                                            var values = mv;
                                                            throw ({type: 'block', id: v128, values: v131, message: 'Return from unknown block NIL.'})
                                                        })() : l5.value);
                                                    })(v125[v129]);
                                                    return l5.value;
                                                })();
                                                (function(){
                                                    var v132 = 1;
                                                    var v133 = (function(){
                                                        var x1 = v129;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = v132;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })();
                                                    return (v129 = v133);
                                                })();
                                            }return l5.value;
                                        })();
                                        return l5.value;
                                    })(0,l52.fvalue(pv, 1, v125));
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == v128)
                                        return values.apply(this, forcemv(cf.values));
                                    else
                                        throw cf;
                                }
                            })();
                        })(0) : (function(v134){
                            return (v134 !== l5.value ? (function(){
                                try {
                                var v135 = [];
                                    return (function(v136,v137){
                                        (function(){
                                            while(v136 !== l5.value){
                                                (v137 = (function(){
                                                    var tmp = v136;
                                                    return tmp === l5.value? l5.value: tmp.car;
                                                })());
                                                (function(){
                                                    ((function(){
                                                        var f = v123;
                                                        return (typeof f === 'function'? f: f.fvalue)(pv, 2, (function(){
                                                            var f = v122;
                                                            return (typeof f === 'function'? f: f.fvalue)(pv, 1, v137)
                                                        })(), v120)
                                                    })() !== l5.value ? (function(){
                                                        var values = mv;
                                                        throw ({type: 'block', id: v135, values: v137, message: 'Return from unknown block NIL.'})
                                                    })() : l5.value);
                                                    return l5.value;
                                                })();
                                                (v136 = (function(){
                                                    var tmp = v136;
                                                    return tmp === l5.value? l5.value: tmp.cdr;
                                                })());
                                            }return l5.value;
                                        })();
                                        return l5.value;
                                    })(v125,l5.value);
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == v135)
                                        return values.apply(this, forcemv(cf.values));
                                    else
                                        throw cf;
                                }
                            })() : l81.fvalue(values, 1, l80));
                        })(l54.fvalue(pv, 1, v125)));
                    })(((function(){
                        var x = v125;
                        return typeof(x) == 'object' && 'length' in x && x.type == 'character';
                    })()?l4.value: l5.value));
                })(v121);
            })();
        });
        func.fname = 'FIND';
        return func;
    })();
    return l77;
})();
var l82 = (new Symbol(make_lisp_string("FIND-IF")));
(function(){
    (l82).fvalue = (function(){
        var func = (function (values,nargs,v138,v139){
            checkArgsAtLeast(nargs, 2);
            var v140; 
            var i;
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] === l78.value){
                    v140 = arguments[i+3];
                    break;
                }
            }
            if (i == nargs){
                v140 = (function(){
                    var symbol = l58;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })();
            }
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] !== l78.value)
                    throw 'Unknown keyword argument ' + xstring(arguments[i].name);
            }
            return (function(){
                return (function(v142){
                    return (function(v143){
                        return (v143 !== l5.value ? (function(v144){
                            return (function(){
                                try {
                                var v145 = [];
                                    return (function(v146,v147){
                                        (function(){
                                            while((function(){
                                                var x1 = v146;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v147;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return (x1<x2?l4.value: l5.value);
                                            })() !== l5.value){
                                                (function(){
                                                    (function(v148){
                                                        return ((function(){
                                                            var f = v138;
                                                            return (typeof f === 'function'? f: f.fvalue)(pv, 1, (function(){
                                                                var f = v140;
                                                                return (typeof f === 'function'? f: f.fvalue)(pv, 1, v148)
                                                            })())
                                                        })() !== l5.value ? (function(){
                                                            var values = mv;
                                                            throw ({type: 'block', id: v145, values: v148, message: 'Return from unknown block NIL.'})
                                                        })() : l5.value);
                                                    })(v142[v146]);
                                                    return l5.value;
                                                })();
                                                (function(){
                                                    var v149 = 1;
                                                    var v150 = (function(){
                                                        var x1 = v146;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = v149;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })();
                                                    return (v146 = v150);
                                                })();
                                            }return l5.value;
                                        })();
                                        return l5.value;
                                    })(0,l52.fvalue(pv, 1, v142));
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == v145)
                                        return values.apply(this, forcemv(cf.values));
                                    else
                                        throw cf;
                                }
                            })();
                        })(0) : (function(v151){
                            return (v151 !== l5.value ? (function(){
                                try {
                                var v152 = [];
                                    return (function(v153,v154){
                                        (function(){
                                            while(v153 !== l5.value){
                                                (v154 = (function(){
                                                    var tmp = v153;
                                                    return tmp === l5.value? l5.value: tmp.car;
                                                })());
                                                (function(){
                                                    ((function(){
                                                        var f = v138;
                                                        return (typeof f === 'function'? f: f.fvalue)(pv, 1, (function(){
                                                            var f = v140;
                                                            return (typeof f === 'function'? f: f.fvalue)(pv, 1, v154)
                                                        })())
                                                    })() !== l5.value ? (function(){
                                                        var values = mv;
                                                        throw ({type: 'block', id: v152, values: v154, message: 'Return from unknown block NIL.'})
                                                    })() : l5.value);
                                                    return l5.value;
                                                })();
                                                (v153 = (function(){
                                                    var tmp = v153;
                                                    return tmp === l5.value? l5.value: tmp.cdr;
                                                })());
                                            }return l5.value;
                                        })();
                                        return l5.value;
                                    })(v142,l5.value);
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == v152)
                                        return values.apply(this, forcemv(cf.values));
                                    else
                                        throw cf;
                                }
                            })() : l81.fvalue(values, 1, l80));
                        })(l54.fvalue(pv, 1, v142)));
                    })(((function(){
                        var x = v142;
                        return typeof(x) == 'object' && 'length' in x && x.type == 'character';
                    })()?l4.value: l5.value));
                })(v139);
            })();
        });
        func.fname = 'FIND-IF';
        return func;
    })();
    return l82;
})();
var l83 = (new Symbol(make_lisp_string("SOME")));
(function(){
    (l83).fvalue = (function(){
        var func = (function (values,nargs,v155,v156){
            checkArgs(nargs, 2);
            return (function(){
                try {
                var v157 = [];
                    return (function(v158){
                        return (function(v159){
                            return (v159 !== l5.value ? (function(v160){
                                return (function(){
                                    return (function(v162,v163){
                                        (function(){
                                            while((function(){
                                                var x1 = v162;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v163;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return (x1<x2?l4.value: l5.value);
                                            })() !== l5.value){
                                                (function(){
                                                    (function(v164){
                                                        return ((function(){
                                                            var f = v155;
                                                            return (typeof f === 'function'? f: f.fvalue)(pv, 1, v164)
                                                        })() !== l5.value ? (function(){
                                                            var values = mv;
                                                            throw ({type: 'block', id: v157, values: l4.value, message: 'Return from unknown block SOME.'})
                                                        })() : l5.value);
                                                    })(v158[v162]);
                                                    return l5.value;
                                                })();
                                                (function(){
                                                    var v165 = 1;
                                                    var v166 = (function(){
                                                        var x1 = v162;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = v165;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })();
                                                    return (v162 = v166);
                                                })();
                                            }return l5.value;
                                        })();
                                        return l5.value;
                                    })(0,l52.fvalue(pv, 1, v158));
                                })();
                            })(0) : (function(v167){
                                return (v167 !== l5.value ? (function(){
                                    return (function(v169,v170){
                                        (function(){
                                            while(v169 !== l5.value){
                                                (v170 = (function(){
                                                    var tmp = v169;
                                                    return tmp === l5.value? l5.value: tmp.car;
                                                })());
                                                (function(){
                                                    ((function(){
                                                        var f = v155;
                                                        return (typeof f === 'function'? f: f.fvalue)(pv, 1, v170)
                                                    })() !== l5.value ? (function(){
                                                        var values = mv;
                                                        throw ({type: 'block', id: v157, values: l4.value, message: 'Return from unknown block SOME.'})
                                                    })() : l5.value);
                                                    return l5.value;
                                                })();
                                                (v169 = (function(){
                                                    var tmp = v169;
                                                    return tmp === l5.value? l5.value: tmp.cdr;
                                                })());
                                            }return l5.value;
                                        })();
                                        return l5.value;
                                    })(v158,l5.value);
                                })() : l81.fvalue(values, 1, l80));
                            })(l54.fvalue(pv, 1, v158)));
                        })(((function(){
                            var x = v158;
                            return typeof(x) == 'object' && 'length' in x && x.type == 'character';
                        })()?l4.value: l5.value));
                    })(v156);
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == v157)
                        return values.apply(this, forcemv(cf.values));
                    else
                        throw cf;
                }
            })();
        });
        func.fname = 'SOME';
        return func;
    })();
    return l83;
})();
var l84 = (new Symbol(make_lisp_string("EVERY")));
(function(){
    (l84).fvalue = (function(){
        var func = (function (values,nargs,v171,v172){
            checkArgs(nargs, 2);
            return (function(){
                try {
                var v173 = [];
                    (function(v174){
                        return (function(v175){
                            return (v175 !== l5.value ? (function(v176){
                                return (function(){
                                    return (function(v178,v179){
                                        (function(){
                                            while((function(){
                                                var x1 = v178;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v179;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return (x1<x2?l4.value: l5.value);
                                            })() !== l5.value){
                                                (function(){
                                                    (function(v180){
                                                        return ((function(){
                                                            var f = v171;
                                                            return (typeof f === 'function'? f: f.fvalue)(pv, 1, v180)
                                                        })() !== l5.value ? l5.value : (function(){
                                                            var values = mv;
                                                            throw ({type: 'block', id: v173, values: l5.value, message: 'Return from unknown block EVERY.'})
                                                        })());
                                                    })(v174[v178]);
                                                    return l5.value;
                                                })();
                                                (function(){
                                                    var v181 = 1;
                                                    var v182 = (function(){
                                                        var x1 = v178;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = v181;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })();
                                                    return (v178 = v182);
                                                })();
                                            }return l5.value;
                                        })();
                                        return l5.value;
                                    })(0,l52.fvalue(pv, 1, v174));
                                })();
                            })(0) : (function(v183){
                                return (v183 !== l5.value ? (function(){
                                    return (function(v185,v186){
                                        (function(){
                                            while(v185 !== l5.value){
                                                (v186 = (function(){
                                                    var tmp = v185;
                                                    return tmp === l5.value? l5.value: tmp.car;
                                                })());
                                                (function(){
                                                    ((function(){
                                                        var f = v171;
                                                        return (typeof f === 'function'? f: f.fvalue)(pv, 1, v186)
                                                    })() !== l5.value ? l5.value : (function(){
                                                        var values = mv;
                                                        throw ({type: 'block', id: v173, values: l5.value, message: 'Return from unknown block EVERY.'})
                                                    })());
                                                    return l5.value;
                                                })();
                                                (v185 = (function(){
                                                    var tmp = v185;
                                                    return tmp === l5.value? l5.value: tmp.cdr;
                                                })());
                                            }return l5.value;
                                        })();
                                        return l5.value;
                                    })(v174,l5.value);
                                })() : l81.fvalue(pv, 1, l80));
                            })(l54.fvalue(pv, 1, v174)));
                        })(((function(){
                            var x = v174;
                            return typeof(x) == 'object' && 'length' in x && x.type == 'character';
                        })()?l4.value: l5.value));
                    })(v172);
                    return l4.value;
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == v173)
                        return values.apply(this, forcemv(cf.values));
                    else
                        throw cf;
                }
            })();
        });
        func.fname = 'EVERY';
        return func;
    })();
    return l84;
})();
var l85 = (new Symbol(make_lisp_string("POSITION")));
var l86 = (new Symbol(make_lisp_string("SEQ")));
(function(){
    (l85).fvalue = (function(){
        var func = (function (values,nargs,v187,v188){
            checkArgs(nargs, 2);
            return (function(){
                return (function(v190){
                    (function(v191){
                        return (function(v192){
                            return (v192 !== l5.value ? (function(v193){
                                return (function(){
                                    try {
                                    var v194 = [];
                                        return (function(v195,v196){
                                            (function(){
                                                while((function(){
                                                    var x1 = v195;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = v196;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return (x1<x2?l4.value: l5.value);
                                                })() !== l5.value){
                                                    (function(){
                                                        (function(v197){
                                                            (((v187 === v197)?l4.value: l5.value) !== l5.value ? (function(){
                                                                throw ({type: 'block', id: v194, values: l5.value, message: 'Return from unknown block NIL.'})
                                                            })() : l5.value);
                                                            return (function(){
                                                                var v198 = 1;
                                                                var v199 = (function(){
                                                                    var x1 = v190;
                                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                                    var x2 = v198;
                                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                                    return x1+x2;
                                                                })();
                                                                return (v190 = v199);
                                                            })();
                                                        })(v191[v195]);
                                                        return l5.value;
                                                    })();
                                                    (function(){
                                                        var v200 = 1;
                                                        var v201 = (function(){
                                                            var x1 = v195;
                                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                                            var x2 = v200;
                                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                                            return x1+x2;
                                                        })();
                                                        return (v195 = v201);
                                                    })();
                                                }return l5.value;
                                            })();
                                            return l5.value;
                                        })(0,l52.fvalue(pv, 1, v191));
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == v194)
                                            return cf.values;
                                        else
                                            throw cf;
                                    }
                                })();
                            })(0) : (function(v202){
                                return (v202 !== l5.value ? (function(){
                                    try {
                                    var v203 = [];
                                        return (function(v204,v205){
                                            (function(){
                                                while(v204 !== l5.value){
                                                    (v205 = (function(){
                                                        var tmp = v204;
                                                        return tmp === l5.value? l5.value: tmp.car;
                                                    })());
                                                    (function(){
                                                        (((v187 === v205)?l4.value: l5.value) !== l5.value ? (function(){
                                                            throw ({type: 'block', id: v203, values: l5.value, message: 'Return from unknown block NIL.'})
                                                        })() : l5.value);
                                                        (function(){
                                                            var v206 = 1;
                                                            var v207 = (function(){
                                                                var x1 = v190;
                                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                                var x2 = v206;
                                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                                return x1+x2;
                                                            })();
                                                            return (v190 = v207);
                                                        })();
                                                        return l5.value;
                                                    })();
                                                    (v204 = (function(){
                                                        var tmp = v204;
                                                        return tmp === l5.value? l5.value: tmp.cdr;
                                                    })());
                                                }return l5.value;
                                            })();
                                            return l5.value;
                                        })(v191,l5.value);
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == v203)
                                            return cf.values;
                                        else
                                            throw cf;
                                    }
                                })() : l81.fvalue(pv, 1, l80));
                            })(l54.fvalue(pv, 1, v191)));
                        })(((function(){
                            var x = v191;
                            return typeof(x) == 'object' && 'length' in x && x.type == 'character';
                        })()?l4.value: l5.value));
                    })((function(){
                        var symbol = l86;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })());
                    return v190;
                })(0);
            })();
        });
        func.fname = 'POSITION';
        return func;
    })();
    return l85;
})();
var l87 = (new Symbol(make_lisp_string("EQUAL")));
var l88 = (new Symbol(make_lisp_string("STRING=")));
(function(){
    (l87).fvalue = (function(){
        var func = (function (values,nargs,v208,v209){
            checkArgs(nargs, 2);
            return (function(){
                return (function(v211){
                    return (v211 !== l5.value ? l4.value : (function(v212){
                        return (v212 !== l5.value ? (((function(){
                            var tmp = v209;
                            return (typeof tmp == 'object' && 'car' in tmp);
                        })()?l4.value: l5.value) !== l5.value ? (l87.fvalue(pv, 2, (function(){
                            var tmp = v208;
                            return tmp === l5.value? l5.value: tmp.car;
                        })(), (function(){
                            var tmp = v209;
                            return tmp === l5.value? l5.value: tmp.car;
                        })()) !== l5.value ? l87.fvalue(values, 2, (function(){
                            var tmp = v208;
                            return tmp === l5.value? l5.value: tmp.cdr;
                        })(), (function(){
                            var tmp = v209;
                            return tmp === l5.value? l5.value: tmp.cdr;
                        })()) : l5.value) : l5.value) : (function(v213){
                            return (v213 !== l5.value ? (((function(){
                                var x = v209;
                                return typeof(x) == 'object' && 'length' in x && x.type == 'character';
                            })()?l4.value: l5.value) !== l5.value ? l88.fvalue(values, 2, v208, v209) : l5.value) : l5.value);
                        })(((function(){
                            var x = v208;
                            return typeof(x) == 'object' && 'length' in x && x.type == 'character';
                        })()?l4.value: l5.value)));
                    })(((function(){
                        var tmp = v208;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l5.value)));
                })(l26.fvalue(pv, 2, v208, v209));
            })();
        });
        func.fname = 'EQUAL';
        return func;
    })();
    return l87;
})();
var l89 = (new Symbol(make_lisp_string("FDEFINITION")));
var l90 = make_lisp_string("Invalid function `~S'.");
(function(){
    (l89).fvalue = (function(){
        var func = (function (values,nargs,v214){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v216){
                    return (v216 !== l5.value ? v214 : (function(v217){
                        return (v217 !== l5.value ? (function(){
                            var symbol = v214;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                            return func;
                        })() : l81.fvalue(values, 2, l90, v214));
                    })(((v214 instanceof Symbol)?l4.value: l5.value)));
                })(((typeof v214 == 'function')?l4.value: l5.value));
            })();
        });
        func.fname = 'FDEFINITION';
        return func;
    })();
    return l89;
})();
var l91 = (new Symbol(make_lisp_string("DISASSEMBLE")));
var l92 = (new Symbol(make_lisp_string("WRITE-LINE")));
(function(){
    (l91).fvalue = (function(){
        var func = (function (values,nargs,v218){
            checkArgs(nargs, 1);
            return (function(){
                l92.fvalue(pv, 1, make_lisp_string((l89.fvalue(pv, 1, v218)).toString()));
                return l5.value;
            })();
        });
        func.fname = 'DISASSEMBLE';
        return func;
    })();
    return l91;
})();
var l93 = (new Symbol(make_lisp_string("DOCUMENTATION")));
var l94 = (new Symbol(make_lisp_string("FUNCTION")));
var l95 = make_lisp_string("docstring");
var l96 = (new Symbol(make_lisp_string("VARIABLE")));
var l97 = make_lisp_string("The type of documentation `~S' is not a symbol.");
var l98 = make_lisp_string("vardoc");
var l99 = make_lisp_string("ECASE expression failed for the object `~S'.");
(function(){
    (l93).fvalue = (function(){
        var func = (function (values,nargs,v220,v221){
            checkArgs(nargs, 2);
            return (function(){
                return (function(v223){
                    return (function(v224){
                        return (function(v225){
                            return (v225 !== l5.value ? (function(v226){
                                return (function(){
                                    var tmp = (v226)[xstring(l95)];
                                    return tmp == undefined? l5.value: tmp ;
                                })();
                            })(l89.fvalue(pv, 1, v220)) : (function(v227){
                                return (v227 !== l5.value ? (function(){
                                    (((v220 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l5.value : l81.fvalue(pv, 2, l97, v221));
                                    return (function(){
                                        var tmp = (v220)[xstring(l98)];
                                        return tmp == undefined? l5.value: tmp ;
                                    })();
                                })() : l81.fvalue(values, 2, l99, v223));
                            })(l26.fvalue(pv, 2, v224, l96)));
                        })(l26.fvalue(pv, 2, v224, l94));
                    })(v223);
                })(v221);
            })();
        });
        func.fname = 'DOCUMENTATION';
        func.docstring = 'Return the documentation of X. TYPE must be the symbol VARIABLE or FUNCTION.';
        return func;
    })();
    return l93;
})();
var l100 = (new Symbol(make_lisp_string("MULTIPLE-VALUE-BIND")));
l100;
var l101 = (new Symbol(make_lisp_string("MULTIPLE-VALUE-LIST")));
l101;
var l102 = (new Symbol(make_lisp_string("*SETF-EXPANDERS*")));
(function(){
    (((l102.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l102).value = l5.value));
    return l102;
})();
var l103 = (new Symbol(make_lisp_string("GET-SETF-EXPANSION")));
var l104 = (new Symbol(make_lisp_string("LIST")));
var l105 = (new Symbol(make_lisp_string("SETQ")));
var l106 = (new Symbol(make_lisp_string("!MACROEXPAND-1")));
var l107 = (new Symbol(make_lisp_string("ASSOC")));
var l108 = make_lisp_string("Unknown generalized reference.");
(function(){
    (l103).fvalue = (function(){
        var func = (function (values,nargs,v228){
            checkArgs(nargs, 1);
            return (function(){
                return (((v228 instanceof Symbol)?l4.value: l5.value) !== l5.value ? (function(v230){
                    return values(l5.value, l5.value, l104.fvalue(pv, 1, v230), l104.fvalue(pv, 3, l105, v228, v230), v228);
                })(l15.fvalue(pv, 0)) : (function(v231){
                    return (function(){
                        var v232 = (function(){
                            var tmp = v231;
                            return tmp === l5.value? l5.value: tmp.car;
                        })();
                        var v233 = (function(){
                            var tmp = l107.fvalue(pv, 2, v232, (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })());
                            return tmp === l5.value? l5.value: tmp.cdr;
                        })();
                        (l42.fvalue(pv, 1, v233) !== l5.value ? l81.fvalue(pv, 1, l108) : l5.value);
                        return (function(){
                            var f = v233;
                            var args = [values, 0];
                            var tail = ((function(){
                                var tmp = v231;
                                return tmp === l5.value? l5.value: tmp.cdr;
                            })());
                            while (tail != l5.value){
                                args.push(tail.car);
                                args[1] += 1;
                                tail = tail.cdr;
                            }
                            return (typeof f === 'function'? f : f.fvalue).apply(this, args);
                        })();
                    })();
                })(l106.fvalue(pv, 1, v228)));
            })();
        });
        func.fname = 'GET-SETF-EXPANSION';
        return func;
    })();
    return l103;
})();
var l109 = (new Symbol(make_lisp_string("DEFINE-SETF-EXPANDER")));
l109;
var l110 = (new Symbol(make_lisp_string("SETF")));
l110;
var l111 = (new Symbol(make_lisp_string("TYPECASE")));
l111;
var l112 = (new Symbol(make_lisp_string("NOTANY")));
(function(){
    (l112).fvalue = (function(){
        var func = (function (values,nargs,v234,v235){
            checkArgs(nargs, 2);
            return (function(){
                return l27.fvalue(values, 1, l83.fvalue(pv, 2, v234, v235));
            })();
        });
        func.fname = 'NOTANY';
        return func;
    })();
    return l112;
})();
var l113 = (new Symbol(make_lisp_string("INTERNAL-TIME-UNITS-PER-SECOND")));
(function(){
    ((l113).value = 1000);
    return l113;
})();
var l114 = (new Symbol(make_lisp_string("GET-INTERNAL-REAL-TIME")));
(function(){
    (l114).fvalue = (function(){
        var func = (function (values,nargs){
            checkArgsAtMost(nargs, 0);
            return (function(){
                return (new Date()).getTime();
            })();
        });
        func.fname = 'GET-INTERNAL-REAL-TIME';
        return func;
    })();
    return l114;
})();
var l115 = (new Symbol(make_lisp_string("GET-UNIX-TIME")));
(function(){
    (l115).fvalue = (function(){
        var func = (function (values,nargs){
            checkArgsAtMost(nargs, 0);
            return (function(){
                return l25.fvalue(values, 1, (function(){
                    var x1 = (new Date()).getTime();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    return x1/1000;
                })());
            })();
        });
        func.fname = 'GET-UNIX-TIME';
        return func;
    })();
    return l115;
})();
var l116 = (new Symbol(make_lisp_string("GET-UNIVERSAL-TIME")));
(function(){
    (l116).fvalue = (function(){
        var func = (function (values,nargs){
            checkArgsAtMost(nargs, 0);
            return (function(){
                return (function(){
                    var x1 = l115.fvalue(pv, 0);
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    return x1+2208988800;
                })();
            })();
        });
        func.fname = 'GET-UNIVERSAL-TIME';
        return func;
    })();
    return l116;
})();
var l117 = (new Symbol(make_lisp_string("CONCAT")));
var l118 = make_lisp_string("");
(function(){
    (l117).fvalue = (function(){
        var func = (function (values,nargs){
            var v240= l5.value;
            for (var i = nargs-1; i>=0; i--)
                v240 = {car: arguments[i+2], cdr: v240};
            return (function(){
                return l45.fvalue(values, 3, (function(){
                    var symbol = l55;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })(), v240, l118);
            })();
        });
        func.fname = 'CONCAT';
        return func;
    })();
    return l117;
})();
var l119 = (new Symbol(make_lisp_string("VALUES-LIST")));
var l120 = (new Symbol(make_lisp_string("LIST-TO-VECTOR")));
(function(){
    (l119).fvalue = (function(){
        var func = (function (values,nargs,v242){
            checkArgs(nargs, 1);
            return (function(){
                return values.apply(this, l120.fvalue(pv, 1, v242));
            })();
        });
        func.fname = 'VALUES-LIST';
        return func;
    })();
    return l119;
})();
var l121 = (new Symbol(make_lisp_string("VALUES")));
(function(){
    (l121).fvalue = (function(){
        var func = (function (values,nargs){
            var v244= l5.value;
            for (var i = nargs-1; i>=0; i--)
                v244 = {car: arguments[i+2], cdr: v244};
            return (function(){
                return l119.fvalue(values, 1, v244);
            })();
        });
        func.fname = 'VALUES';
        return func;
    })();
    return l121;
})();
var l122 = (new Symbol(make_lisp_string("FORMAT")));
(function(){
    (l81).fvalue = (function(){
        var func = (function (values,nargs,v247){
            checkArgsAtLeast(nargs, 1);
            var v246= l5.value;
            for (var i = nargs-1; i>=1; i--)
                v246 = {car: arguments[i+2], cdr: v246};
            return (function(){
                return (function(){
                    throw (function(){
                        var f = (function(){
                            var symbol = l122;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                            return func;
                        })();
                        var args = [pv, 2, l5.value, v247];
                        var tail = (v246);
                        while (tail != l5.value){
                            args.push(tail.car);
                            args[1] += 1;
                            tail = tail.cdr;
                        }
                        return (typeof f === 'function'? f : f.fvalue).apply(this, args);
                    })();
                })();
            })();
        });
        func.fname = 'ERROR';
        return func;
    })();
    return l81;
})();
var l123 = (new Symbol(make_lisp_string("*NEWLINE*")));
var l124 = make_lisp_string("\n");
(function(){
    (((l123.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l123).value = l124));
    return l123;
})();
var l125 = (new Symbol(make_lisp_string("CONCATF")));
l125;
var l126 = (new Symbol(make_lisp_string("ENSURE-LIST")));
(function(){
    (l126).fvalue = (function(){
        var func = (function (values,nargs,v249){
            checkArgs(nargs, 1);
            return (function(){
                return (l54.fvalue(pv, 1, v249) !== l5.value ? v249 : l104.fvalue(values, 1, v249));
            })();
        });
        func.fname = 'ENSURE-LIST';
        return func;
    })();
    return l126;
})();
(function(){
    (l45).fvalue = (function(){
        var func = (function (values,nargs,v251,v252,v253){
            checkArgs(nargs, 3);
            return (function(){
                return (function(v255){
                    return (function(){
                        return (function(v257,v258){
                            (function(){
                                while(v257 !== l5.value){
                                    (v258 = (function(){
                                        var tmp = v257;
                                        return tmp === l5.value? l5.value: tmp.car;
                                    })());
                                    (function(){
                                        (v255 = (function(){
                                            var f = v251;
                                            return (typeof f === 'function'? f: f.fvalue)(pv, 2, v255, v258)
                                        })());
                                        return l5.value;
                                    })();
                                    (v257 = (function(){
                                        var tmp = v257;
                                        return tmp === l5.value? l5.value: tmp.cdr;
                                    })());
                                }return l5.value;
                            })();
                            return v255;
                        })(v252,l5.value);
                    })();
                })(v253);
            })();
        });
        func.fname = '!REDUCE';
        return func;
    })();
    return l45;
})();
var l127 = (new Symbol(make_lisp_string("JOIN")));
(function(){
    (l127).fvalue = (function(){
        var func = (function (values,nargs,v259,v260){
            checkArgsAtLeast(nargs, 1);
            checkArgsAtMost(nargs, 2);
            switch(nargs){
            case 1:
                v260=l118;
            default: break;
            }
            return (function(){
                return (l42.fvalue(pv, 1, v259) !== l5.value ? l118 : l45.fvalue(values, 3, (function (values,nargs,v262,v263){
                    checkArgs(nargs, 2);
                    return l117.fvalue(values, 3, v262, v260, v263);
                }), (function(){
                    var tmp = v259;
                    return tmp === l5.value? l5.value: tmp.cdr;
                })(), (function(){
                    var tmp = v259;
                    return tmp === l5.value? l5.value: tmp.car;
                })()));
            })();
        });
        func.fname = 'JOIN';
        return func;
    })();
    return l127;
})();
var l128 = (new Symbol(make_lisp_string("JOIN-TRAILING")));
(function(){
    (l128).fvalue = (function(){
        var func = (function (values,nargs,v264,v265){
            checkArgsAtLeast(nargs, 1);
            checkArgsAtMost(nargs, 2);
            switch(nargs){
            case 1:
                v265=l118;
            default: break;
            }
            return (function(){
                return (l42.fvalue(pv, 1, v264) !== l5.value ? l118 : l117.fvalue(values, 3, (function(){
                    var tmp = v264;
                    return tmp === l5.value? l5.value: tmp.car;
                })(), v265, l128.fvalue(pv, 2, (function(){
                    var tmp = v264;
                    return tmp === l5.value? l5.value: tmp.cdr;
                })(), v265)));
            })();
        });
        func.fname = 'JOIN-TRAILING';
        return func;
    })();
    return l128;
})();
var l129 = (new Symbol(make_lisp_string("MAPCONCAT")));
var l130 = (new Symbol(make_lisp_string("MAPCAR")));
(function(){
    (l129).fvalue = (function(){
        var func = (function (values,nargs,v267,v268){
            checkArgs(nargs, 2);
            return (function(){
                return l127.fvalue(values, 1, l130.fvalue(pv, 2, v267, v268));
            })();
        });
        func.fname = 'MAPCONCAT';
        return func;
    })();
    return l129;
})();
var l131 = (new Symbol(make_lisp_string("VECTOR-TO-LIST")));
(function(){
    (l131).fvalue = (function(){
        var func = (function (values,nargs,v270){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v272,v273){
                    return (function(){
                        return (function(v275,v276){
                            (function(){
                                while((function(){
                                    var x1 = v275;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v276;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return (x1<x2?l4.value: l5.value);
                                })() !== l5.value){
                                    (function(){
                                        (function(){
                                            var v277 = (function(){
                                                var x = (v270)[v275];
                                                if (x === undefined) throw 'Out of range';
                                                return x;
                                            })();
                                            var v278 = ({car: v277, cdr: v272});
                                            return (v272 = v278);
                                        })();
                                        return l5.value;
                                    })();
                                    (function(){
                                        var v279 = 1;
                                        var v280 = (function(){
                                            var x1 = v275;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v279;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return x1+x2;
                                        })();
                                        return (v275 = v280);
                                    })();
                                }return l5.value;
                            })();
                            return l47.fvalue(values, 1, v272);
                        })(0,v273);
                    })();
                })(l5.value,l52.fvalue(pv, 1, v270));
            })();
        });
        func.fname = 'VECTOR-TO-LIST';
        return func;
    })();
    return l131;
})();
(function(){
    (l120).fvalue = (function(){
        var func = (function (values,nargs,v281){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v283,v284){
                    return (function(){
                        return (function(v286,v287){
                            (function(){
                                while(v286 !== l5.value){
                                    (v287 = (function(){
                                        var tmp = v286;
                                        return tmp === l5.value? l5.value: tmp.car;
                                    })());
                                    (function(){
                                        (function(){
                                            var x = v283;
                                            var i = v284;
                                            if (i < 0 || i >= x.length) throw 'Out of range';
                                            return x[i] = v287;
                                        })();
                                        (function(){
                                            var v288 = 1;
                                            var v289 = (function(){
                                                var x1 = v284;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v288;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })();
                                            return (v284 = v289);
                                        })();
                                        return l5.value;
                                    })();
                                    (v286 = (function(){
                                        var tmp = v286;
                                        return tmp === l5.value? l5.value: tmp.cdr;
                                    })());
                                }return l5.value;
                            })();
                            return v283;
                        })(v281,l5.value);
                    })();
                })((function(){
                    var r = [];
                    for (var i = 0; i < l52.fvalue(pv, 1, v281); i++)
                        r.push(l5.value);
                    return r;
                })(),0);
            })();
        });
        func.fname = 'LIST-TO-VECTOR';
        return func;
    })();
    return l120;
})();
var l132 = (new Symbol(make_lisp_string("AWHEN")));
l132;
var l133 = make_lisp_string("0");
var l134 = make_lisp_string("-");
var l135 = (new Symbol(make_lisp_string("STRING")));
(function(){
    (l17).fvalue = (function(){
        var func = (function (values,nargs,v290){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v292){
                    return (v292 !== l5.value ? l133 : (function(v293){
                        return (v293 !== l5.value ? l117.fvalue(values, 2, l134, l17.fvalue(pv, 1, (function(){
                            var x1 = v290;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            return 0-x1;
                        })())) : (function(v294){
                            (function(){
                                return (function(){
                                    while(l27.fvalue(pv, 1, l24.fvalue(pv, 1, v290)) !== l5.value){
                                        (function(){
                                            var v296 = (function(){
                                                var x = v290;
                                                var y = 10;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x%y;
                                            })();
                                            var v297 = ({car: v296, cdr: v294});
                                            return (v294 = v297);
                                        })();
                                        (v290 = l25.fvalue(pv, 2, v290, 10));
                                    }return l5.value;
                                })();
                            })();
                            return l129.fvalue(values, 2, (function (values,nargs,v298){
                                checkArgs(nargs, 1);
                                return l135.fvalue(values, 1, l73.fvalue(pv, 1, v298));
                            }), v294);
                        })(l5.value));
                    })(l66.fvalue(pv, 1, v290)));
                })(l24.fvalue(pv, 1, v290));
            })();
        });
        func.fname = 'INTEGER-TO-STRING';
        return func;
    })();
    return l17;
})();
var l136 = (new Symbol(make_lisp_string("FLOAT-TO-STRING")));
(function(){
    (l136).fvalue = (function(){
        var func = (function (values,nargs,v299){
            checkArgs(nargs, 1);
            return (function(){
                (function(){
                    var x = v299;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    return make_lisp_string(x.toString());
                })();
                return l5.value;
            })();
        });
        func.fname = 'FLOAT-TO-STRING';
        return func;
    })();
    return l136;
})();
var l137 = (new Symbol(make_lisp_string("CONS")));
(function(){
    (l137).fvalue = (function(){
        var func = (function (values,nargs,v301,v302){
            checkArgs(nargs, 2);
            return (function(){
                return ({car: v301, cdr: v302});
            })();
        });
        func.fname = 'CONS';
        return func;
    })();
    return l137;
})();
var l138 = (new Symbol(make_lisp_string("CONSP")));
(function(){
    (l138).fvalue = (function(){
        var func = (function (values,nargs,v304){
            checkArgs(nargs, 1);
            return (function(){
                return ((function(){
                    var tmp = v304;
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?l4.value: l5.value);
            })();
        });
        func.fname = 'CONSP';
        return func;
    })();
    return l138;
})();
(function(){
    (l54).fvalue = (function(){
        var func = (function (values,nargs,v306){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v308){
                    return (v308 !== l5.value ? v308 : l42.fvalue(values, 1, v306));
                })(((function(){
                    var tmp = v306;
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?l4.value: l5.value));
            })();
        });
        func.fname = 'LISTP';
        return func;
    })();
    return l54;
})();
(function(){
    (l42).fvalue = (function(){
        var func = (function (values,nargs,v309){
            checkArgs(nargs, 1);
            return (function(){
                return ((v309 === l5.value)?l4.value: l5.value);
            })();
        });
        func.fname = 'NULL';
        return func;
    })();
    return l42;
})();
var l139 = (new Symbol(make_lisp_string("ENDP")));
var l140 = make_lisp_string("The value `~S' is not a type list.");
(function(){
    (l139).fvalue = (function(){
        var func = (function (values,nargs,v311){
            checkArgs(nargs, 1);
            return (function(){
                return (l42.fvalue(pv, 1, v311) !== l5.value ? l4.value : (((function(){
                    var tmp = v311;
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?l4.value: l5.value) !== l5.value ? l5.value : l81.fvalue(values, 2, l140, v311)));
            })();
        });
        func.fname = 'ENDP';
        return func;
    })();
    return l139;
})();
var l141 = (new Symbol(make_lisp_string("CAR")));
(function(){
    (l141).fvalue = (function(){
        var func = (function (values,nargs,v313){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = v313;
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'CAR';
        func.docstring = 'Return the CAR part of a cons, or NIL if X is null.';
        return func;
    })();
    return l141;
})();
var l142 = (new Symbol(make_lisp_string("CDR")));
(function(){
    (l142).fvalue = (function(){
        var func = (function (values,nargs,v315){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = v315;
                    return tmp === l5.value? l5.value: tmp.cdr;
                })();
            })();
        });
        func.fname = 'CDR';
        return func;
    })();
    return l142;
})();
var l143 = (new Symbol(make_lisp_string("FIRST")));
(function(){
    (l143).fvalue = (function(){
        var func = (function (values,nargs,v317){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = v317;
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'FIRST';
        return func;
    })();
    return l143;
})();
var l144 = (new Symbol(make_lisp_string("SECOND")));
var l145 = (new Symbol(make_lisp_string("CADR")));
(function(){
    (l144).fvalue = (function(){
        var func = (function (values,nargs,v319){
            checkArgs(nargs, 1);
            return (function(){
                return l145.fvalue(values, 1, v319);
            })();
        });
        func.fname = 'SECOND';
        return func;
    })();
    return l144;
})();
var l146 = (new Symbol(make_lisp_string("THIRD")));
var l147 = (new Symbol(make_lisp_string("CADDR")));
(function(){
    (l146).fvalue = (function(){
        var func = (function (values,nargs,v321){
            checkArgs(nargs, 1);
            return (function(){
                return l147.fvalue(values, 1, v321);
            })();
        });
        func.fname = 'THIRD';
        return func;
    })();
    return l146;
})();
var l148 = (new Symbol(make_lisp_string("FOURTH")));
var l149 = (new Symbol(make_lisp_string("CADDDR")));
(function(){
    (l148).fvalue = (function(){
        var func = (function (values,nargs,v323){
            checkArgs(nargs, 1);
            return (function(){
                return l149.fvalue(values, 1, v323);
            })();
        });
        func.fname = 'FOURTH';
        return func;
    })();
    return l148;
})();
var l150 = (new Symbol(make_lisp_string("FIFTH")));
var l151 = (new Symbol(make_lisp_string("CDDDDR")));
(function(){
    (l150).fvalue = (function(){
        var func = (function (values,nargs,v325){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l151.fvalue(pv, 1, v325);
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'FIFTH';
        return func;
    })();
    return l150;
})();
var l152 = (new Symbol(make_lisp_string("SIXTH")));
(function(){
    (l152).fvalue = (function(){
        var func = (function (values,nargs,v327){
            checkArgs(nargs, 1);
            return (function(){
                return l145.fvalue(values, 1, l151.fvalue(pv, 1, v327));
            })();
        });
        func.fname = 'SIXTH';
        return func;
    })();
    return l152;
})();
var l153 = (new Symbol(make_lisp_string("SEVENTH")));
(function(){
    (l153).fvalue = (function(){
        var func = (function (values,nargs,v329){
            checkArgs(nargs, 1);
            return (function(){
                return l147.fvalue(values, 1, l151.fvalue(pv, 1, v329));
            })();
        });
        func.fname = 'SEVENTH';
        return func;
    })();
    return l153;
})();
var l154 = (new Symbol(make_lisp_string("EIGHTH")));
(function(){
    (l154).fvalue = (function(){
        var func = (function (values,nargs,v331){
            checkArgs(nargs, 1);
            return (function(){
                return l149.fvalue(values, 1, l151.fvalue(pv, 1, v331));
            })();
        });
        func.fname = 'EIGHTH';
        return func;
    })();
    return l154;
})();
var l155 = (new Symbol(make_lisp_string("NINTH")));
(function(){
    (l155).fvalue = (function(){
        var func = (function (values,nargs,v333){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l151.fvalue(pv, 1, l151.fvalue(pv, 1, v333));
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'NINTH';
        return func;
    })();
    return l155;
})();
var l156 = (new Symbol(make_lisp_string("TENTH")));
(function(){
    (l156).fvalue = (function(){
        var func = (function (values,nargs,v335){
            checkArgs(nargs, 1);
            return (function(){
                return l145.fvalue(values, 1, l151.fvalue(pv, 1, l151.fvalue(pv, 1, v335)));
            })();
        });
        func.fname = 'TENTH';
        return func;
    })();
    return l156;
})();
var l157 = (new Symbol(make_lisp_string("REST")));
(function(){
    (l157).fvalue = (function(){
        var func = (function (values,nargs,v337){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = v337;
                    return tmp === l5.value? l5.value: tmp.cdr;
                })();
            })();
        });
        func.fname = 'REST';
        return func;
    })();
    return l157;
})();
(function(){
    (l104).fvalue = (function(){
        var func = (function (values,nargs){
            var v339= l5.value;
            for (var i = nargs-1; i>=0; i--)
                v339 = {car: arguments[i+2], cdr: v339};
            return (function(){
                return v339;
            })();
        });
        func.fname = 'LIST';
        return func;
    })();
    return l104;
})();
var l158 = (new Symbol(make_lisp_string("LIST*")));
var l159 = (new Symbol(make_lisp_string("CDDR")));
(function(){
    (l158).fvalue = (function(){
        var func = (function (values,nargs,v342){
            checkArgsAtLeast(nargs, 1);
            var v341= l5.value;
            for (var i = nargs-1; i>=1; i--)
                v341 = {car: arguments[i+2], cdr: v341};
            return (function(){
                return (function(v344){
                    return (v344 !== l5.value ? v342 : (function(v345){
                        return (v345 !== l5.value ? ({car: v342, cdr: (function(){
                            var tmp = v341;
                            return tmp === l5.value? l5.value: tmp.car;
                        })()}) : (function(){
                            (function(){
                                return (function(v347){
                                    return (function(){
                                        try {
                                        var v348 = [];
                                            return (function(){
                                                while(l4.value !== l5.value){
                                                    (l42.fvalue(pv, 1, l159.fvalue(pv, 1, v347)) !== l5.value ? (function(){
                                                        throw ({type: 'block', id: v348, values: (function(){
                                                            var x = v347;
                                                            if (typeof x != 'object')
                                                                throw 'The value ' + x + ' is not a type object.';
                                                            return (x.cdr = l145.fvalue(pv, 1, v347), x);
                                                        })(), message: 'Return from unknown block NIL.'})
                                                    })() : l5.value);
                                                    l5.value;
                                                    (function(v349){
                                                        return (v347 = v349);
                                                    })((function(){
                                                        var tmp = v347;
                                                        return tmp === l5.value? l5.value: tmp.cdr;
                                                    })());
                                                }return l5.value;
                                            })();
                                        }
                                        catch (cf){
                                            if (cf.type == 'block' && cf.id == v348)
                                                return cf.values;
                                            else
                                                throw cf;
                                        }
                                    })();
                                })(v341);
                            })();
                            return ({car: v342, cdr: v341});
                        })());
                    })(l42.fvalue(pv, 1, (function(){
                        var tmp = v341;
                        return tmp === l5.value? l5.value: tmp.cdr;
                    })())));
                })(l42.fvalue(pv, 1, v341));
            })();
        });
        func.fname = 'LIST*';
        return func;
    })();
    return l158;
})();
var l160 = (new Symbol(make_lisp_string("NTHCDR")));
(function(){
    (l160).fvalue = (function(){
        var func = (function (values,nargs,v350,v351){
            checkArgs(nargs, 2);
            return (function(){
                (function(){
                    return (function(){
                        while((l65.fvalue(pv, 1, v350) !== l5.value ? v351 : l5.value) !== l5.value){
                            (v350 = l23.fvalue(pv, 1, v350));
                            (v351 = (function(){
                                var tmp = v351;
                                return tmp === l5.value? l5.value: tmp.cdr;
                            })());
                        }return l5.value;
                    })();
                })();
                return v351;
            })();
        });
        func.fname = 'NTHCDR';
        return func;
    })();
    return l160;
})();
var l161 = (new Symbol(make_lisp_string("NTH")));
(function(){
    (l161).fvalue = (function(){
        var func = (function (values,nargs,v354,v355){
            checkArgs(nargs, 2);
            return (function(){
                return (function(){
                    var tmp = l160.fvalue(pv, 2, v354, v355);
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'NTH';
        return func;
    })();
    return l161;
})();
var l162 = (new Symbol(make_lisp_string("CAAR")));
(function(){
    (l162).fvalue = (function(){
        var func = (function (values,nargs,v357){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = (function(){
                        var tmp = v357;
                        return tmp === l5.value? l5.value: tmp.car;
                    })();
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'CAAR';
        return func;
    })();
    return l162;
})();
(function(){
    (l145).fvalue = (function(){
        var func = (function (values,nargs,v359){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = (function(){
                        var tmp = v359;
                        return tmp === l5.value? l5.value: tmp.cdr;
                    })();
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'CADR';
        return func;
    })();
    return l145;
})();
var l163 = (new Symbol(make_lisp_string("CDAR")));
(function(){
    (l163).fvalue = (function(){
        var func = (function (values,nargs,v361){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = (function(){
                        var tmp = v361;
                        return tmp === l5.value? l5.value: tmp.car;
                    })();
                    return tmp === l5.value? l5.value: tmp.cdr;
                })();
            })();
        });
        func.fname = 'CDAR';
        return func;
    })();
    return l163;
})();
(function(){
    (l159).fvalue = (function(){
        var func = (function (values,nargs,v363){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = (function(){
                        var tmp = v363;
                        return tmp === l5.value? l5.value: tmp.cdr;
                    })();
                    return tmp === l5.value? l5.value: tmp.cdr;
                })();
            })();
        });
        func.fname = 'CDDR';
        return func;
    })();
    return l159;
})();
var l164 = (new Symbol(make_lisp_string("CADAR")));
(function(){
    (l164).fvalue = (function(){
        var func = (function (values,nargs,v365){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = (function(){
                        var tmp = (function(){
                            var tmp = v365;
                            return tmp === l5.value? l5.value: tmp.car;
                        })();
                        return tmp === l5.value? l5.value: tmp.cdr;
                    })();
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'CADAR';
        return func;
    })();
    return l164;
})();
(function(){
    (l147).fvalue = (function(){
        var func = (function (values,nargs,v367){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = (function(){
                        var tmp = (function(){
                            var tmp = v367;
                            return tmp === l5.value? l5.value: tmp.cdr;
                        })();
                        return tmp === l5.value? l5.value: tmp.cdr;
                    })();
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'CADDR';
        return func;
    })();
    return l147;
})();
var l165 = (new Symbol(make_lisp_string("CDDDR")));
(function(){
    (l165).fvalue = (function(){
        var func = (function (values,nargs,v369){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = (function(){
                        var tmp = (function(){
                            var tmp = v369;
                            return tmp === l5.value? l5.value: tmp.cdr;
                        })();
                        return tmp === l5.value? l5.value: tmp.cdr;
                    })();
                    return tmp === l5.value? l5.value: tmp.cdr;
                })();
            })();
        });
        func.fname = 'CDDDR';
        return func;
    })();
    return l165;
})();
(function(){
    (l149).fvalue = (function(){
        var func = (function (values,nargs,v371){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = (function(){
                        var tmp = (function(){
                            var tmp = (function(){
                                var tmp = v371;
                                return tmp === l5.value? l5.value: tmp.cdr;
                            })();
                            return tmp === l5.value? l5.value: tmp.cdr;
                        })();
                        return tmp === l5.value? l5.value: tmp.cdr;
                    })();
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'CADDDR';
        return func;
    })();
    return l149;
})();
(function(){
    (l164).fvalue = (function(){
        var func = (function (values,nargs,v373){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l163.fvalue(pv, 1, v373);
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'CADAR';
        return func;
    })();
    return l164;
})();
var l166 = (new Symbol(make_lisp_string("CAAAR")));
(function(){
    (l166).fvalue = (function(){
        var func = (function (values,nargs,v375){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l162.fvalue(pv, 1, v375);
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'CAAAR';
        return func;
    })();
    return l166;
})();
var l167 = (new Symbol(make_lisp_string("CAADR")));
(function(){
    (l167).fvalue = (function(){
        var func = (function (values,nargs,v377){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l145.fvalue(pv, 1, v377);
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'CAADR';
        return func;
    })();
    return l167;
})();
var l168 = (new Symbol(make_lisp_string("CDAAR")));
(function(){
    (l168).fvalue = (function(){
        var func = (function (values,nargs,v379){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l162.fvalue(pv, 1, v379);
                    return tmp === l5.value? l5.value: tmp.cdr;
                })();
            })();
        });
        func.fname = 'CDAAR';
        return func;
    })();
    return l168;
})();
var l169 = (new Symbol(make_lisp_string("CDADR")));
(function(){
    (l169).fvalue = (function(){
        var func = (function (values,nargs,v381){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l145.fvalue(pv, 1, v381);
                    return tmp === l5.value? l5.value: tmp.cdr;
                })();
            })();
        });
        func.fname = 'CDADR';
        return func;
    })();
    return l169;
})();
var l170 = (new Symbol(make_lisp_string("CDDAR")));
(function(){
    (l170).fvalue = (function(){
        var func = (function (values,nargs,v383){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l163.fvalue(pv, 1, v383);
                    return tmp === l5.value? l5.value: tmp.cdr;
                })();
            })();
        });
        func.fname = 'CDDAR';
        return func;
    })();
    return l170;
})();
var l171 = (new Symbol(make_lisp_string("CAAAAR")));
(function(){
    (l171).fvalue = (function(){
        var func = (function (values,nargs,v385){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l166.fvalue(pv, 1, v385);
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'CAAAAR';
        return func;
    })();
    return l171;
})();
var l172 = (new Symbol(make_lisp_string("CAAADR")));
(function(){
    (l172).fvalue = (function(){
        var func = (function (values,nargs,v387){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l167.fvalue(pv, 1, v387);
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'CAAADR';
        return func;
    })();
    return l172;
})();
var l173 = (new Symbol(make_lisp_string("CAADAR")));
(function(){
    (l173).fvalue = (function(){
        var func = (function (values,nargs,v389){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l164.fvalue(pv, 1, v389);
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'CAADAR';
        return func;
    })();
    return l173;
})();
var l174 = (new Symbol(make_lisp_string("CAADDR")));
(function(){
    (l174).fvalue = (function(){
        var func = (function (values,nargs,v391){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l147.fvalue(pv, 1, v391);
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'CAADDR';
        return func;
    })();
    return l174;
})();
var l175 = (new Symbol(make_lisp_string("CADAAR")));
(function(){
    (l175).fvalue = (function(){
        var func = (function (values,nargs,v393){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l168.fvalue(pv, 1, v393);
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'CADAAR';
        return func;
    })();
    return l175;
})();
var l176 = (new Symbol(make_lisp_string("CADADR")));
(function(){
    (l176).fvalue = (function(){
        var func = (function (values,nargs,v395){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l169.fvalue(pv, 1, v395);
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'CADADR';
        return func;
    })();
    return l176;
})();
var l177 = (new Symbol(make_lisp_string("CADDAR")));
(function(){
    (l177).fvalue = (function(){
        var func = (function (values,nargs,v397){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l170.fvalue(pv, 1, v397);
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'CADDAR';
        return func;
    })();
    return l177;
})();
var l178 = (new Symbol(make_lisp_string("CDAAAR")));
(function(){
    (l178).fvalue = (function(){
        var func = (function (values,nargs,v399){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l166.fvalue(pv, 1, v399);
                    return tmp === l5.value? l5.value: tmp.cdr;
                })();
            })();
        });
        func.fname = 'CDAAAR';
        return func;
    })();
    return l178;
})();
var l179 = (new Symbol(make_lisp_string("CDAADR")));
(function(){
    (l179).fvalue = (function(){
        var func = (function (values,nargs,v401){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l167.fvalue(pv, 1, v401);
                    return tmp === l5.value? l5.value: tmp.cdr;
                })();
            })();
        });
        func.fname = 'CDAADR';
        return func;
    })();
    return l179;
})();
var l180 = (new Symbol(make_lisp_string("CDADAR")));
(function(){
    (l180).fvalue = (function(){
        var func = (function (values,nargs,v403){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l164.fvalue(pv, 1, v403);
                    return tmp === l5.value? l5.value: tmp.cdr;
                })();
            })();
        });
        func.fname = 'CDADAR';
        return func;
    })();
    return l180;
})();
var l181 = (new Symbol(make_lisp_string("CDADDR")));
(function(){
    (l181).fvalue = (function(){
        var func = (function (values,nargs,v405){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l147.fvalue(pv, 1, v405);
                    return tmp === l5.value? l5.value: tmp.cdr;
                })();
            })();
        });
        func.fname = 'CDADDR';
        return func;
    })();
    return l181;
})();
var l182 = (new Symbol(make_lisp_string("CDDAAR")));
(function(){
    (l182).fvalue = (function(){
        var func = (function (values,nargs,v407){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l168.fvalue(pv, 1, v407);
                    return tmp === l5.value? l5.value: tmp.cdr;
                })();
            })();
        });
        func.fname = 'CDDAAR';
        return func;
    })();
    return l182;
})();
var l183 = (new Symbol(make_lisp_string("CDDADR")));
(function(){
    (l183).fvalue = (function(){
        var func = (function (values,nargs,v409){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l169.fvalue(pv, 1, v409);
                    return tmp === l5.value? l5.value: tmp.cdr;
                })();
            })();
        });
        func.fname = 'CDDADR';
        return func;
    })();
    return l183;
})();
var l184 = (new Symbol(make_lisp_string("CDDDAR")));
(function(){
    (l184).fvalue = (function(){
        var func = (function (values,nargs,v411){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l170.fvalue(pv, 1, v411);
                    return tmp === l5.value? l5.value: tmp.cdr;
                })();
            })();
        });
        func.fname = 'CDDDAR';
        return func;
    })();
    return l184;
})();
(function(){
    (l151).fvalue = (function(){
        var func = (function (values,nargs,v413){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var tmp = l165.fvalue(pv, 1, v413);
                    return tmp === l5.value? l5.value: tmp.cdr;
                })();
            })();
        });
        func.fname = 'CDDDDR';
        return func;
    })();
    return l151;
})();
var l185 = (new Symbol(make_lisp_string("COPY-LIST")));
(function(){
    (l185).fvalue = (function(){
        var func = (function (values,nargs,v415){
            checkArgs(nargs, 1);
            return (function(){
                return l130.fvalue(values, 2, (function(){
                    var symbol = l58;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })(), v415);
            })();
        });
        func.fname = 'COPY-LIST';
        return func;
    })();
    return l185;
})();
var l186 = (new Symbol(make_lisp_string("COPY-TREE")));
(function(){
    (l186).fvalue = (function(){
        var func = (function (values,nargs,v417){
            checkArgs(nargs, 1);
            return (function(){
                return (((function(){
                    var tmp = v417;
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?l4.value: l5.value) !== l5.value ? ({car: l186.fvalue(pv, 1, (function(){
                    var tmp = v417;
                    return tmp === l5.value? l5.value: tmp.car;
                })()), cdr: l186.fvalue(pv, 1, (function(){
                    var tmp = v417;
                    return tmp === l5.value? l5.value: tmp.cdr;
                })())}) : v417);
            })();
        });
        func.fname = 'COPY-TREE';
        return func;
    })();
    return l186;
})();
var l187 = (new Symbol(make_lisp_string("TREE-EQUAL")));
(function(){
    (l187).fvalue = (function(){
        var func = (function (values,nargs,v419,v420){
            checkArgsAtLeast(nargs, 2);
            var v421; 
            var i;
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] === l79.value){
                    v421 = arguments[i+3];
                    break;
                }
            }
            if (i == nargs){
                v421 = (function(){
                    var symbol = l26;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })();
            }
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] !== l79.value)
                    throw 'Unknown keyword argument ' + xstring(arguments[i].name);
            }
            return (function(){
                return (l67.fvalue(pv, 1, v419) !== l5.value ? (l67.fvalue(pv, 1, v420) !== l5.value ? (function(){
                    var f = v421;
                    return (typeof f === 'function'? f: f.fvalue)(values, 2, v419, v420)
                })() : l5.value) : (((function(){
                    var tmp = v420;
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?l4.value: l5.value) !== l5.value ? (l187.fvalue(pv, 4, (function(){
                    var tmp = v419;
                    return tmp === l5.value? l5.value: tmp.car;
                })(), (function(){
                    var tmp = v420;
                    return tmp === l5.value? l5.value: tmp.car;
                })(), l79.value, v421) !== l5.value ? l187.fvalue(values, 4, (function(){
                    var tmp = v419;
                    return tmp === l5.value? l5.value: tmp.cdr;
                })(), (function(){
                    var tmp = v420;
                    return tmp === l5.value? l5.value: tmp.cdr;
                })(), l79.value, v421) : l5.value) : l5.value));
            })();
        });
        func.fname = 'TREE-EQUAL';
        return func;
    })();
    return l187;
})();
var l188 = (new Symbol(make_lisp_string("TAILP")));
(function(){
    (l188).fvalue = (function(){
        var func = (function (values,nargs,v423,v424){
            checkArgs(nargs, 2);
            return (function(){
                try {
                var v425 = [];
                    return (function(){
                        return (function(v427){
                            return (function(){
                                try {
                                var v428 = [];
                                    return (function(){
                                        while(l4.value !== l5.value){
                                            (l67.fvalue(pv, 1, v427) !== l5.value ? (function(){
                                                var values = mv;
                                                throw ({type: 'block', id: v428, values: ((v423 === v427)?l4.value: l5.value), message: 'Return from unknown block NIL.'})
                                            })() : l5.value);
                                            (function(){
                                                (l26.fvalue(pv, 2, v427, v423) !== l5.value ? (function(){
                                                    var values = mv;
                                                    throw ({type: 'block', id: v425, values: l4.value, message: 'Return from unknown block TAILP.'})
                                                })() : l5.value);
                                                return l5.value;
                                            })();
                                            (function(v429){
                                                return (v427 = v429);
                                            })((function(){
                                                var tmp = v427;
                                                return tmp === l5.value? l5.value: tmp.cdr;
                                            })());
                                        }return l5.value;
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == v428)
                                        return values.apply(this, forcemv(cf.values));
                                    else
                                        throw cf;
                                }
                            })();
                        })(v424);
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == v425)
                        return values.apply(this, forcemv(cf.values));
                    else
                        throw cf;
                }
            })();
        });
        func.fname = 'TAILP';
        return func;
    })();
    return l188;
})();
var l189 = (new Symbol(make_lisp_string("SUBST")));
(function(){
    (l189).fvalue = (function(){
        var func = (function (values,nargs,v430,v431,v432){
            checkArgsAtLeast(nargs, 3);
            var v433; 
            var v434; 
            var i;
            for (i=3; i<nargs; i+=2){
                if (arguments[i+2] === l78.value){
                    v433 = arguments[i+3];
                    break;
                }
            }
            if (i == nargs){
                v433 = (function(){
                    var symbol = l58;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })();
            }
            for (i=3; i<nargs; i+=2){
                if (arguments[i+2] === l79.value){
                    v434 = arguments[i+3];
                    break;
                }
            }
            if (i == nargs){
                v434 = (function(){
                    var symbol = l26;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })();
            }
            for (i=3; i<nargs; i+=2){
                if (arguments[i+2] !== l78.value && arguments[i+2] !== l79.value)
                    throw 'Unknown keyword argument ' + xstring(arguments[i].name);
            }
            return (function(){
                return (function(v436){
                    return (v436 !== l5.value ? v430 : (function(v437){
                        return (v437 !== l5.value ? ({car: l189.fvalue(pv, 7, v430, v431, (function(){
                            var tmp = v432;
                            return tmp === l5.value? l5.value: tmp.car;
                        })(), l78.value, v433, l79.value, v434), cdr: l189.fvalue(pv, 7, v430, v431, (function(){
                            var tmp = v432;
                            return tmp === l5.value? l5.value: tmp.cdr;
                        })(), l78.value, v433, l79.value, v434)}) : v432);
                    })(((function(){
                        var tmp = v432;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l5.value)));
                })((function(){
                    var f = v434;
                    return (typeof f === 'function'? f: f.fvalue)(pv, 2, (function(){
                        var f = v433;
                        return (typeof f === 'function'? f: f.fvalue)(pv, 1, v432)
                    })(), (function(){
                        var f = v433;
                        return (typeof f === 'function'? f: f.fvalue)(pv, 1, v431)
                    })())
                })());
            })();
        });
        func.fname = 'SUBST';
        return func;
    })();
    return l189;
})();
var l190 = (new Symbol(make_lisp_string("POP")));
l190;
var l191 = (new Symbol(make_lisp_string("MAP1")));
var l192 = (new Symbol(make_lisp_string("SENTINEL")));
(function(){
    (l191).fvalue = (function(){
        var func = (function (values,nargs,v438,v439){
            checkArgs(nargs, 2);
            return (function(){
                return (function(){
                    var v441 = ({car: l192, cdr: l5.value});
                    var v442 = v441;
                    (function(v445){
                        return (function(){
                            return (function(){
                                while(v439 !== l5.value){
                                    v445(pv, 1, (function(){
                                        var f = v438;
                                        return (typeof f === 'function'? f: f.fvalue)(pv, 1, (function(){
                                            var tmp = v439;
                                            return tmp === l5.value? l5.value: tmp.car;
                                        })())
                                    })());
                                    (v439 = (function(){
                                        var tmp = v439;
                                        return tmp === l5.value? l5.value: tmp.cdr;
                                    })());
                                }return l5.value;
                            })();
                        })();
                    })((function (values,nargs,v443){
                        checkArgs(nargs, 1);
                        return (function(){
                            (function(){
                                var x = v442;
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.cdr = ({car: v443, cdr: l5.value}), x);
                            })();
                            (v442 = (function(){
                                var tmp = v442;
                                return tmp === l5.value? l5.value: tmp.cdr;
                            })());
                            return v443;
                        })();
                    }));
                    return (function(){
                        var tmp = v441;
                        return tmp === l5.value? l5.value: tmp.cdr;
                    })();
                })();
            })();
        });
        func.fname = 'MAP1';
        return func;
    })();
    return l191;
})();
(function(){
    (l130).fvalue = (function(){
        var func = (function (values,nargs,v448,v449){
            checkArgsAtLeast(nargs, 2);
            var v447= l5.value;
            for (var i = nargs-1; i>=2; i--)
                v447 = {car: arguments[i+2], cdr: v447};
            return (function(){
                return (function(v451){
                    return (function(){
                        var v452 = ({car: l192, cdr: l5.value});
                        var v453 = v452;
                        (function(v456){
                            return (function(){
                                try {
                                var v457 = [];
                                    return (function(){
                                        return (function(){
                                            while(l4.value !== l5.value){
                                                (function(v459){
                                                    (function(){
                                                        return (function(v461){
                                                            return (function(){
                                                                try {
                                                                var v462 = [];
                                                                    return (function(){
                                                                        while(l4.value !== l5.value){
                                                                            (l42.fvalue(pv, 1, v461) !== l5.value ? (function(){
                                                                                throw ({type: 'block', id: v462, values: l5.value, message: 'Return from unknown block NIL.'})
                                                                            })() : l5.value);
                                                                            (function(){
                                                                                (l42.fvalue(pv, 1, (function(){
                                                                                    var tmp = v461;
                                                                                    return tmp === l5.value? l5.value: tmp.car;
                                                                                })()) !== l5.value ? (function(){
                                                                                    throw ({type: 'block', id: v457, values: l5.value, message: 'Return from unknown block LOOP.'})
                                                                                })() : l5.value);
                                                                                (function(){
                                                                                    var x = v461;
                                                                                    if (typeof x != 'object')
                                                                                        throw 'The value ' + x + ' is not a type object.';
                                                                                    return (x.car = l163.fvalue(pv, 1, v461), x);
                                                                                })();
                                                                                return l5.value;
                                                                            })();
                                                                            (function(v463){
                                                                                return (v461 = v463);
                                                                            })((function(){
                                                                                var tmp = v461;
                                                                                return tmp === l5.value? l5.value: tmp.cdr;
                                                                            })());
                                                                        }return l5.value;
                                                                    })();
                                                                }
                                                                catch (cf){
                                                                    if (cf.type == 'block' && cf.id == v462)
                                                                        return cf.values;
                                                                    else
                                                                        throw cf;
                                                                }
                                                            })();
                                                        })(v451);
                                                    })();
                                                    return v456(pv, 1, (function(){
                                                        var f = v448;
                                                        var args = [pv, 0];
                                                        var tail = (v459);
                                                        while (tail != l5.value){
                                                            args.push(tail.car);
                                                            args[1] += 1;
                                                            tail = tail.cdr;
                                                        }
                                                        return (typeof f === 'function'? f : f.fvalue).apply(this, args);
                                                    })());
                                                })(l191.fvalue(pv, 2, (function(){
                                                    var symbol = l141;
                                                    var func = symbol.fvalue;
                                                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                                                    return func;
                                                })(), v451));
                                            }return l5.value;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == v457)
                                        return cf.values;
                                    else
                                        throw cf;
                                }
                            })();
                        })((function (values,nargs,v454){
                            checkArgs(nargs, 1);
                            return (function(){
                                (function(){
                                    var x = v453;
                                    if (typeof x != 'object')
                                        throw 'The value ' + x + ' is not a type object.';
                                    return (x.cdr = ({car: v454, cdr: l5.value}), x);
                                })();
                                (v453 = (function(){
                                    var tmp = v453;
                                    return tmp === l5.value? l5.value: tmp.cdr;
                                })());
                                return v454;
                            })();
                        }));
                        return (function(){
                            var tmp = v452;
                            return tmp === l5.value? l5.value: tmp.cdr;
                        })();
                    })();
                })(({car: v449, cdr: v447}));
            })();
        });
        func.fname = 'MAPCAR';
        return func;
    })();
    return l130;
})();
var l193 = (new Symbol(make_lisp_string("LAST")));
(function(){
    (l193).fvalue = (function(){
        var func = (function (values,nargs,v464){
            checkArgs(nargs, 1);
            return (function(){
                (function(){
                    return (function(){
                        while(((function(){
                            var tmp = (function(){
                                var tmp = v464;
                                return tmp === l5.value? l5.value: tmp.cdr;
                            })();
                            return (typeof tmp == 'object' && 'car' in tmp);
                        })()?l4.value: l5.value) !== l5.value){
                            (v464 = (function(){
                                var tmp = v464;
                                return tmp === l5.value? l5.value: tmp.cdr;
                            })());
                        }return l5.value;
                    })();
                })();
                return v464;
            })();
        });
        func.fname = 'LAST';
        return func;
    })();
    return l193;
})();
var l194 = (new Symbol(make_lisp_string("BUTLAST")));
(function(){
    (l194).fvalue = (function(){
        var func = (function (values,nargs,v467){
            checkArgs(nargs, 1);
            return (function(){
                return (((function(){
                    var tmp = (function(){
                        var tmp = v467;
                        return tmp === l5.value? l5.value: tmp.cdr;
                    })();
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?l4.value: l5.value) !== l5.value ? ({car: (function(){
                    var tmp = v467;
                    return tmp === l5.value? l5.value: tmp.car;
                })(), cdr: l194.fvalue(pv, 1, (function(){
                    var tmp = v467;
                    return tmp === l5.value? l5.value: tmp.cdr;
                })())}) : l5.value);
            })();
        });
        func.fname = 'BUTLAST';
        return func;
    })();
    return l194;
})();
var l195 = (new Symbol(make_lisp_string("MEMBER")));
(function(){
    (l195).fvalue = (function(){
        var func = (function (values,nargs,v469,v470){
            checkArgsAtLeast(nargs, 2);
            var v471; 
            var v472; 
            var i;
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] === l78.value){
                    v471 = arguments[i+3];
                    break;
                }
            }
            if (i == nargs){
                v471 = (function(){
                    var symbol = l58;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })();
            }
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] === l79.value){
                    v472 = arguments[i+3];
                    break;
                }
            }
            if (i == nargs){
                v472 = (function(){
                    var symbol = l26;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })();
            }
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] !== l78.value && arguments[i+2] !== l79.value)
                    throw 'Unknown keyword argument ' + xstring(arguments[i].name);
            }
            return (function(){
                return (function(){
                    try {
                    var v474 = [];
                        return (function(){
                            while(v470 !== l5.value){
                                ((function(){
                                    var f = v472;
                                    return (typeof f === 'function'? f: f.fvalue)(pv, 2, v469, (function(){
                                        var f = v471;
                                        return (typeof f === 'function'? f: f.fvalue)(pv, 1, (function(){
                                            var tmp = v470;
                                            return tmp === l5.value? l5.value: tmp.car;
                                        })())
                                    })())
                                })() !== l5.value ? (function(){
                                    var values = mv;
                                    throw ({type: 'block', id: v474, values: v470, message: 'Return from unknown block NIL.'})
                                })() : l5.value);
                                (v470 = (function(){
                                    var tmp = v470;
                                    return tmp === l5.value? l5.value: tmp.cdr;
                                })());
                            }return l5.value;
                        })();
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == v474)
                            return values.apply(this, forcemv(cf.values));
                        else
                            throw cf;
                    }
                })();
            })();
        });
        func.fname = 'MEMBER';
        return func;
    })();
    return l195;
})();
(function(){
    (l107).fvalue = (function(){
        var func = (function (values,nargs,v475,v476){
            checkArgsAtLeast(nargs, 2);
            var v477; 
            var i;
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] === l79.value){
                    v477 = arguments[i+3];
                    break;
                }
            }
            if (i == nargs){
                v477 = (function(){
                    var symbol = l26;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })();
            }
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] !== l79.value)
                    throw 'Unknown keyword argument ' + xstring(arguments[i].name);
            }
            return (function(){
                (function(){
                    try {
                    var v479 = [];
                        return (function(){
                            while(v476 !== l5.value){
                                ((function(){
                                    var f = v477;
                                    return (typeof f === 'function'? f: f.fvalue)(pv, 2, v475, l162.fvalue(pv, 1, v476))
                                })() !== l5.value ? (function(){
                                    throw ({type: 'block', id: v479, values: l5.value, message: 'Return from unknown block NIL.'})
                                })() : (v476 = (function(){
                                    var tmp = v476;
                                    return tmp === l5.value? l5.value: tmp.cdr;
                                })()));
                            }return l5.value;
                        })();
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == v479)
                            return cf.values;
                        else
                            throw cf;
                    }
                })();
                return (function(){
                    var tmp = v476;
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'ASSOC';
        return func;
    })();
    return l107;
})();
var l196 = (new Symbol(make_lisp_string("RASSOC")));
(function(){
    (l196).fvalue = (function(){
        var func = (function (values,nargs,v480,v481){
            checkArgsAtLeast(nargs, 2);
            var v482; 
            var i;
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] === l79.value){
                    v482 = arguments[i+3];
                    break;
                }
            }
            if (i == nargs){
                v482 = (function(){
                    var symbol = l26;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })();
            }
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] !== l79.value)
                    throw 'Unknown keyword argument ' + xstring(arguments[i].name);
            }
            return (function(){
                (function(){
                    try {
                    var v484 = [];
                        return (function(){
                            while(v481 !== l5.value){
                                ((function(){
                                    var f = v482;
                                    return (typeof f === 'function'? f: f.fvalue)(pv, 2, v480, l163.fvalue(pv, 1, v481))
                                })() !== l5.value ? (function(){
                                    throw ({type: 'block', id: v484, values: l5.value, message: 'Return from unknown block NIL.'})
                                })() : (v481 = (function(){
                                    var tmp = v481;
                                    return tmp === l5.value? l5.value: tmp.cdr;
                                })()));
                            }return l5.value;
                        })();
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == v484)
                            return cf.values;
                        else
                            throw cf;
                    }
                })();
                return (function(){
                    var tmp = v481;
                    return tmp === l5.value? l5.value: tmp.car;
                })();
            })();
        });
        func.fname = 'RASSOC';
        return func;
    })();
    return l196;
})();
var l197 = (new Symbol(make_lisp_string("ACONS")));
(function(){
    (l197).fvalue = (function(){
        var func = (function (values,nargs,v485,v486,v487){
            checkArgs(nargs, 3);
            return (function(){
                return ({car: ({car: v485, cdr: v486}), cdr: v487});
            })();
        });
        func.fname = 'ACONS';
        return func;
    })();
    return l197;
})();
var l198 = (new Symbol(make_lisp_string("PAIRLIS")));
(function(){
    (l198).fvalue = (function(){
        var func = (function (values,nargs,v489,v490,v491){
            checkArgsAtLeast(nargs, 2);
            checkArgsAtMost(nargs, 3);
            switch(nargs){
            case 2:
                v491=l5.value;
            default: break;
            }
            return (function(){
                (function(){
                    return (function(){
                        while(v489 !== l5.value){
                            (v491 = l197.fvalue(pv, 3, (function(){
                                var tmp = v489;
                                return tmp === l5.value? l5.value: tmp.car;
                            })(), (function(){
                                var tmp = v490;
                                return tmp === l5.value? l5.value: tmp.car;
                            })(), v491));
                            (v489 = (function(){
                                var tmp = v489;
                                return tmp === l5.value? l5.value: tmp.cdr;
                            })());
                            (v490 = (function(){
                                var tmp = v490;
                                return tmp === l5.value? l5.value: tmp.cdr;
                            })());
                        }return l5.value;
                    })();
                })();
                return v491;
            })();
        });
        func.fname = 'PAIRLIS';
        return func;
    })();
    return l198;
})();
var l199 = (new Symbol(make_lisp_string("COPY-ALIST")));
(function(){
    (l199).fvalue = (function(){
        var func = (function (values,nargs,v494){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v496){
                    (function(){
                        return (function(){
                            while(v494 !== l5.value){
                                (function(){
                                    var v498 = ({car: l162.fvalue(pv, 1, v494), cdr: l163.fvalue(pv, 1, v494)});
                                    var v499 = ({car: v498, cdr: v496});
                                    return (v496 = v499);
                                })();
                                (v494 = (function(){
                                    var tmp = v494;
                                    return tmp === l5.value? l5.value: tmp.cdr;
                                })());
                            }return l5.value;
                        })();
                    })();
                    return l47.fvalue(values, 1, v496);
                })(l5.value);
            })();
        });
        func.fname = 'COPY-ALIST';
        return func;
    })();
    return l199;
})();
var l200 = (new Symbol(make_lisp_string("PROGN")));
var l201 = (new Symbol(make_lisp_string("RPLACA")));
(function(){
    (function(){
        var v500 = ({car: l141, cdr: (function (values,nargs,v501){
            checkArgs(nargs, 1);
            return (function(v502,v503){
                return values(l104.fvalue(pv, 1, v502), l104.fvalue(pv, 1, v501), l104.fvalue(pv, 1, v503), l104.fvalue(pv, 3, l200, l104.fvalue(pv, 3, l201, v502, v503), v503), l104.fvalue(pv, 2, l141, v502));
            })(l15.fvalue(pv, 0),l15.fvalue(pv, 0));
        })});
        var v504 = ({car: v500, cdr: (function(){
            var symbol = l102;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })()});
        return ((l102).value = v504);
    })();
    return l141;
})();
var l202 = (new Symbol(make_lisp_string("RPLACD")));
(function(){
    (function(){
        var v505 = ({car: l142, cdr: (function (values,nargs,v506){
            checkArgs(nargs, 1);
            return (function(v507,v508){
                return values(l104.fvalue(pv, 1, v507), l104.fvalue(pv, 1, v506), l104.fvalue(pv, 1, v508), l104.fvalue(pv, 3, l200, l104.fvalue(pv, 3, l202, v507, v508), v508), l104.fvalue(pv, 2, l141, v507));
            })(l15.fvalue(pv, 0),l15.fvalue(pv, 0));
        })});
        var v509 = ({car: v505, cdr: (function(){
            var symbol = l102;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })()});
        return ((l102).value = v509);
    })();
    return l142;
})();
var l203 = (new Symbol(make_lisp_string("NCONC")));
var l204 = make_lisp_string("type-error in nconc");
(function(){
    (l203).fvalue = (function(){
        var func = (function (values,nargs){
            var v510= l5.value;
            for (var i = nargs-1; i>=0; i--)
                v510 = {car: arguments[i+2], cdr: v510};
            return (function(){
                return (function(v514){
                    return (function(){
                        return (function(v516){
                            return (function(){
                                try {
                                var v517 = [];
                                    return (function(){
                                        while(l4.value !== l5.value){
                                            (l42.fvalue(pv, 1, v516) !== l5.value ? (function(){
                                                var values = mv;
                                                throw ({type: 'block', id: v517, values: l5.value, message: 'Return from unknown block NIL.'})
                                            })() : l5.value);
                                            (function(){
                                                (function(v518){
                                                    return (function(v519){
                                                        return (function(v520){
                                                            return (v520 !== l5.value ? (function(){
                                                                var v521 = v518;
                                                                var v522 = v521;
                                                                (function(){
                                                                    return (function(v524){
                                                                        return (function(){
                                                                            try {
                                                                            var v525 = [];
                                                                                return (function(){
                                                                                    while(l4.value !== l5.value){
                                                                                        (l139.fvalue(pv, 1, v524) !== l5.value ? (function(){
                                                                                            throw ({type: 'block', id: v525, values: l5.value, message: 'Return from unknown block NIL.'})
                                                                                        })() : l5.value);
                                                                                        (function(){
                                                                                            (function(v526){
                                                                                                return (function(v527){
                                                                                                    return (function(v528){
                                                                                                        return (v528 !== l5.value ? (function(){
                                                                                                            (function(){
                                                                                                                var x = l193.fvalue(pv, 1, v522);
                                                                                                                if (typeof x != 'object')
                                                                                                                    throw 'The value ' + x + ' is not a type object.';
                                                                                                                return (x.cdr = v526, x);
                                                                                                            })();
                                                                                                            return (function(){
                                                                                                                return (function(){
                                                                                                                    var func = (function (values,nargs,v530){
                                                                                                                        switch(nargs){
                                                                                                                        case 0:
                                                                                                                            v530=l5.value;
                                                                                                                        default: break;
                                                                                                                        }
                                                                                                                        var v529= l5.value;
                                                                                                                        for (var i = nargs-1; i>=1; i--)
                                                                                                                            v529 = {car: arguments[i+2], cdr: v529};
                                                                                                                        return (v522 = v530);
                                                                                                                    });
                                                                                                                    var args = [pv, 0];
                                                                                                                    return (function(){
                                                                                                                        var values = mv;
                                                                                                                        var vs;
                                                                                                                        vs = v526;
                                                                                                                        if (typeof vs === 'object' && 'multiple-value' in vs)
                                                                                                                            args = args.concat(vs);
                                                                                                                        else
                                                                                                                            args.push(vs);
                                                                                                                        args[1] = args.length-2;
                                                                                                                        return func.apply(window, args);
                                                                                                                    })();
                                                                                                                })();
                                                                                                            })();
                                                                                                        })() : (function(v531){
                                                                                                            return (v531 !== l5.value ? (function(){
                                                                                                                var x = l193.fvalue(pv, 1, v522);
                                                                                                                if (typeof x != 'object')
                                                                                                                    throw 'The value ' + x + ' is not a type object.';
                                                                                                                return (x.cdr = l5.value, x);
                                                                                                            })() : (function(v532){
                                                                                                                return (v532 !== l5.value ? ((function(){
                                                                                                                    var tmp = v524;
                                                                                                                    return tmp === l5.value? l5.value: tmp.cdr;
                                                                                                                })() !== l5.value ? v514(pv, 1, v526) : (function(){
                                                                                                                    var x = l193.fvalue(pv, 1, v522);
                                                                                                                    if (typeof x != 'object')
                                                                                                                        throw 'The value ' + x + ' is not a type object.';
                                                                                                                    return (x.cdr = v526, x);
                                                                                                                })()) : l5.value);
                                                                                                            })(l67.fvalue(pv, 1, v527)));
                                                                                                        })(l42.fvalue(pv, 1, v527)));
                                                                                                    })(((function(){
                                                                                                        var tmp = v527;
                                                                                                        return (typeof tmp == 'object' && 'car' in tmp);
                                                                                                    })()?l4.value: l5.value));
                                                                                                })(v526);
                                                                                            })((function(){
                                                                                                var tmp = v524;
                                                                                                return tmp === l5.value? l5.value: tmp.car;
                                                                                            })());
                                                                                            return l5.value;
                                                                                        })();
                                                                                        (function(v533){
                                                                                            return (v524 = v533);
                                                                                        })((function(){
                                                                                            var tmp = v524;
                                                                                            return tmp === l5.value? l5.value: tmp.cdr;
                                                                                        })());
                                                                                    }return l5.value;
                                                                                })();
                                                                            }
                                                                            catch (cf){
                                                                                if (cf.type == 'block' && cf.id == v525)
                                                                                    return cf.values;
                                                                                else
                                                                                    throw cf;
                                                                            }
                                                                        })();
                                                                    })((function(){
                                                                        var tmp = v516;
                                                                        return tmp === l5.value? l5.value: tmp.cdr;
                                                                    })());
                                                                })();
                                                                return (function(){
                                                                    var values = mv;
                                                                    throw ({type: 'block', id: v517, values: v521, message: 'Return from unknown block NIL.'})
                                                                })();
                                                            })() : (function(v534){
                                                                return (v534 !== l5.value ? l5.value : (function(v535){
                                                                    return (v535 !== l5.value ? ((function(){
                                                                        var tmp = v516;
                                                                        return tmp === l5.value? l5.value: tmp.cdr;
                                                                    })() !== l5.value ? v514(pv, 1, v518) : (function(){
                                                                        var values = mv;
                                                                        throw ({type: 'block', id: v517, values: v518, message: 'Return from unknown block NIL.'})
                                                                    })()) : l5.value);
                                                                })(l67.fvalue(pv, 1, v519)));
                                                            })(l42.fvalue(pv, 1, v519)));
                                                        })(((function(){
                                                            var tmp = v519;
                                                            return (typeof tmp == 'object' && 'car' in tmp);
                                                        })()?l4.value: l5.value));
                                                    })(v518);
                                                })((function(){
                                                    var tmp = v516;
                                                    return tmp === l5.value? l5.value: tmp.car;
                                                })());
                                                return l5.value;
                                            })();
                                            (function(v536){
                                                return (v516 = v536);
                                            })((function(){
                                                var tmp = v516;
                                                return tmp === l5.value? l5.value: tmp.cdr;
                                            })());
                                        }return l5.value;
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == v517)
                                        return values.apply(this, forcemv(cf.values));
                                    else
                                        throw cf;
                                }
                            })();
                        })(v510);
                    })();
                })((function (values,nargs,v512){
                    checkArgs(nargs, 1);
                    return (function(){
                        return l81.fvalue(values, 1, l204);
                    })();
                }));
            })();
        });
        func.fname = 'NCONC';
        return func;
    })();
    return l203;
})();
var l205 = (new Symbol(make_lisp_string("NRECONC")));
(function(){
    (l205).fvalue = (function(){
        var func = (function (values,nargs,v537,v538){
            checkArgs(nargs, 2);
            return (function(){
                return (function(){
                    return (function(v541,v542,v543){
                        return (function(){
                            try {
                            var v544 = [];
                                return (function(){
                                    while(l4.value !== l5.value){
                                        (l67.fvalue(pv, 1, v542) !== l5.value ? (function(){
                                            var values = mv;
                                            throw ({type: 'block', id: v544, values: v543, message: 'Return from unknown block NIL.'})
                                        })() : l5.value);
                                        (function(){
                                            (function(){
                                                var x = v542;
                                                if (typeof x != 'object')
                                                    throw 'The value ' + x + ' is not a type object.';
                                                return (x.cdr = v543, x);
                                            })();
                                            return l5.value;
                                        })();
                                        (function(v545,v546,v547){
                                            return (v541 = v545, v542 = v546, v543 = v547);
                                        })((l139.fvalue(pv, 1, v541) !== l5.value ? v541 : (function(){
                                            var tmp = v541;
                                            return tmp === l5.value? l5.value: tmp.cdr;
                                        })()),v541,v542);
                                    }return l5.value;
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == v544)
                                    return values.apply(this, forcemv(cf.values));
                                else
                                    throw cf;
                            }
                        })();
                    })((function(){
                        var tmp = v537;
                        return tmp === l5.value? l5.value: tmp.cdr;
                    })(),v537,v538);
                })();
            })();
        });
        func.fname = 'NRECONC';
        return func;
    })();
    return l205;
})();
var l206 = (new Symbol(make_lisp_string("ADJOIN")));
(function(){
    (l206).fvalue = (function(){
        var func = (function (values,nargs,v548,v549){
            checkArgsAtLeast(nargs, 2);
            var v550; 
            var v551; 
            var i;
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] === l79.value){
                    v550 = arguments[i+3];
                    break;
                }
            }
            if (i == nargs){
                v550 = (function(){
                    var symbol = l26;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })();
            }
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] === l78.value){
                    v551 = arguments[i+3];
                    break;
                }
            }
            if (i == nargs){
                v551 = (function(){
                    var symbol = l58;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })();
            }
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] !== l79.value && arguments[i+2] !== l78.value)
                    throw 'Unknown keyword argument ' + xstring(arguments[i].name);
            }
            return (function(){
                return (l195.fvalue(pv, 6, v548, v549, l78.value, v551, l79.value, v550) !== l5.value ? v549 : ({car: v548, cdr: v549}));
            })();
        });
        func.fname = 'ADJOIN';
        return func;
    })();
    return l206;
})();
var l207 = (new Symbol(make_lisp_string("INTERSECTION")));
(function(){
    (l207).fvalue = (function(){
        var func = (function (values,nargs,v553,v554){
            checkArgsAtLeast(nargs, 2);
            var v555; 
            var v556; 
            var i;
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] === l79.value){
                    v555 = arguments[i+3];
                    break;
                }
            }
            if (i == nargs){
                v555 = (function(){
                    var symbol = l26;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })();
            }
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] === l78.value){
                    v556 = arguments[i+3];
                    break;
                }
            }
            if (i == nargs){
                v556 = (function(){
                    var symbol = l58;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })();
            }
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] !== l79.value && arguments[i+2] !== l78.value)
                    throw 'Unknown keyword argument ' + xstring(arguments[i].name);
            }
            return (function(){
                return (function(v558){
                    (function(){
                        return (function(v560,v561){
                            (function(){
                                while(v560 !== l5.value){
                                    (v561 = (function(){
                                        var tmp = v560;
                                        return tmp === l5.value? l5.value: tmp.car;
                                    })());
                                    (function(){
                                        (l195.fvalue(pv, 6, v561, v554, l79.value, v555, l78.value, v556) !== l5.value ? (function(){
                                            var v562 = v561;
                                            var v563 = ({car: v562, cdr: v558});
                                            return (v558 = v563);
                                        })() : l5.value);
                                        return l5.value;
                                    })();
                                    (v560 = (function(){
                                        var tmp = v560;
                                        return tmp === l5.value? l5.value: tmp.cdr;
                                    })());
                                }return l5.value;
                            })();
                            return l5.value;
                        })(v553,l5.value);
                    })();
                    return v558;
                })(l5.value);
            })();
        });
        func.fname = 'INTERSECTION';
        return func;
    })();
    return l207;
})();
(function(){
    (l135).fvalue = (function(){
        var func = (function (values,nargs,v564){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v566){
                    return (v566 !== l5.value ? v564 : (function(v567){
                        return (v567 !== l5.value ? (v564).name : (function(){
                            var r = [v564];
                            r.type = 'character';return r
                        })());
                    })(((v564 instanceof Symbol)?l4.value: l5.value)));
                })(((function(){
                    var x = v564;
                    return typeof(x) == 'object' && 'length' in x && x.type == 'character';
                })()?l4.value: l5.value));
            })();
        });
        func.fname = 'STRING';
        return func;
    })();
    return l135;
})();
(function(){
    (l88).fvalue = (function(){
        var func = (function (values,nargs,v568,v569){
            checkArgs(nargs, 2);
            return (function(){
                try {
                var v570 = [];
                    return (function(v571){
                        return ((function(){
                            var x1 = l52.fvalue(pv, 1, v569);
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v571;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return (x1==x2?l4.value: l5.value);
                        })() !== l5.value ? (function(){
                            return (function(v573,v574){
                                (function(){
                                    while((function(){
                                        var x1 = v573;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = v574;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return (x1<x2?l4.value: l5.value);
                                    })() !== l5.value){
                                        (function(){
                                            (l62.fvalue(pv, 2, v568[v573], v569[v573]) !== l5.value ? l5.value : (function(){
                                                var values = mv;
                                                throw ({type: 'block', id: v570, values: l5.value, message: 'Return from unknown block STRING=.'})
                                            })());
                                            return l5.value;
                                        })();
                                        (function(){
                                            var v575 = 1;
                                            var v576 = (function(){
                                                var x1 = v573;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v575;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })();
                                            return (v573 = v576);
                                        })();
                                    }return l5.value;
                                })();
                                return l4.value;
                            })(0,v571);
                        })() : l5.value);
                    })(l52.fvalue(pv, 1, v568));
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == v570)
                        return values.apply(this, forcemv(cf.values));
                    else
                        throw cf;
                }
            })();
        });
        func.fname = 'STRING=';
        return func;
    })();
    return l88;
})();
var l208 = (new Symbol(make_lisp_string("CHAR")));
var l209 = (new Symbol(make_lisp_string("ASET")));
(function(){
    (function(){
        var v577 = ({car: l208, cdr: (function (values,nargs,v578,v579){
            checkArgs(nargs, 2);
            return (function(v580,v581,v582){
                return values(l104.fvalue(pv, 2, v580, v581), l104.fvalue(pv, 2, v578, v579), l104.fvalue(pv, 1, v582), l104.fvalue(pv, 4, l209, v580, v581, v582), l104.fvalue(pv, 3, l208, v580, v581));
            })(l15.fvalue(pv, 0),l15.fvalue(pv, 0),l15.fvalue(pv, 0));
        })});
        var v583 = ({car: v577, cdr: (function(){
            var symbol = l102;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })()});
        return ((l102).value = v583);
    })();
    return l208;
})();
var l210 = (new Symbol(make_lisp_string("ESCAPE-SYMBOL-NAME-P")));
var l211 = (new Symbol(make_lisp_string("TERMINALP")));
(function(){
    (l210).fvalue = (function(){
        var func = (function (values,nargs,v584,v585){
            checkArgsAtLeast(nargs, 1);
            checkArgsAtMost(nargs, 2);
            switch(nargs){
            case 1:
                v585=l5.value;
            default: break;
            }
            return (function(){
                try {
                var v586 = [];
                    return (function(v587){
                        (function(){
                            return (function(v589,v590){
                                (function(){
                                    while((function(){
                                        var x1 = v589;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = v590;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return (x1<x2?l4.value: l5.value);
                                    })() !== l5.value){
                                        (function(){
                                            (function(v591){
                                                (function(){
                                                    return (function(){
                                                        var func = (function (values,nargs,v593){
                                                            switch(nargs){
                                                            case 0:
                                                                v593=l5.value;
                                                            default: break;
                                                            }
                                                            var v592= l5.value;
                                                            for (var i = nargs-1; i>=1; i--)
                                                                v592 = {car: arguments[i+2], cdr: v592};
                                                            return (v587 = v593);
                                                        });
                                                        var args = [pv, 0];
                                                        return (function(){
                                                            var values = mv;
                                                            var vs;
                                                            vs = (v587 !== l5.value ? l62.fvalue(values, 2, v591, ".") : l5.value);
                                                            if (typeof vs === 'object' && 'multiple-value' in vs)
                                                                args = args.concat(vs);
                                                            else
                                                                args.push(vs);
                                                            args[1] = args.length-2;
                                                            return func.apply(window, args);
                                                        })();
                                                    })();
                                                })();
                                                return ((function(v594){
                                                    return (v594 !== l5.value ? v594 : (function(v595){
                                                        return (v595 !== l5.value ? v595 : (function(v596){
                                                            return (v596 !== l5.value ? v596 : (function(v597){
                                                                return (v597 !== l5.value ? v597 : l62.fvalue(pv, 2, v591, "|"));
                                                            })(l62.fvalue(pv, 2, v591, "\\")));
                                                        })((v585 !== l5.value ? l27.fvalue(pv, 1, l62.fvalue(pv, 2, v591, make_lisp_string(xstring(l135.fvalue(pv, 1, v591)).toUpperCase())[0])) : l5.value)));
                                                    })(l62.fvalue(pv, 2, v591, ":")));
                                                })(l211.fvalue(pv, 1, v591)) !== l5.value ? (function(){
                                                    var values = mv;
                                                    throw ({type: 'block', id: v586, values: l4.value, message: 'Return from unknown block ESCAPE-SYMBOL-NAME-P.'})
                                                })() : l5.value);
                                            })(v584[v589]);
                                            return l5.value;
                                        })();
                                        (function(){
                                            var v598 = 1;
                                            var v599 = (function(){
                                                var x1 = v589;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v598;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })();
                                            return (v589 = v599);
                                        })();
                                    }return l5.value;
                                })();
                                return l5.value;
                            })(0,l52.fvalue(pv, 1, v584));
                        })();
                        return v587;
                    })(l4.value);
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == v586)
                        return values.apply(this, forcemv(cf.values));
                    else
                        throw cf;
                }
            })();
        });
        func.fname = 'ESCAPE-SYMBOL-NAME-P';
        return func;
    })();
    return l210;
})();
var l212 = (new Symbol(make_lisp_string("POTENTIAL-NUMBER-P")));
var l213 = make_lisp_string("+-/._^");
var l214 = make_lisp_string("+-._^");
var l215 = make_lisp_string("+-)");
(function(){
    (l212).fvalue = (function(){
        var func = (function (values,nargs,v600){
            checkArgs(nargs, 1);
            return (function(){
                try {
                var v601 = [];
                    (function(){
                        return (function(v603,v604){
                            (function(){
                                while((function(){
                                    var x1 = v603;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v604;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return (x1<x2?l4.value: l5.value);
                                })() !== l5.value){
                                    (function(){
                                        (function(v605){
                                            return (function(v606){
                                                return (v606 !== l5.value ? v606 : (function(v607){
                                                    return (v607 !== l5.value ? v607 : (function(v608){
                                                        return (v608 !== l5.value ? (((function(){
                                                            var x1 = v603;
                                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                                            var x2 = l23.fvalue(pv, 1, l52.fvalue(pv, 1, v600));
                                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                                            return (x1<x2?l4.value: l5.value);
                                                        })() !== l5.value ? l71.fvalue(pv, 1, v600[l22.fvalue(pv, 1, v603)]) : l5.value) !== l5.value ? (function(){
                                                            var values = mv;
                                                            throw ({type: 'block', id: v601, values: l5.value, message: 'Return from unknown block POTENTIAL-NUMBER-P.'})
                                                        })() : l5.value) : (function(){
                                                            var values = mv;
                                                            throw ({type: 'block', id: v601, values: l5.value, message: 'Return from unknown block POTENTIAL-NUMBER-P.'})
                                                        })());
                                                    })(l71.fvalue(pv, 1, v605)));
                                                })(l77.fvalue(pv, 2, v605, l213)));
                                            })(l72.fvalue(pv, 1, v605));
                                        })(v600[v603]);
                                        return l5.value;
                                    })();
                                    (function(){
                                        var v609 = 1;
                                        var v610 = (function(){
                                            var x1 = v603;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v609;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return x1+x2;
                                        })();
                                        return (v603 = v610);
                                    })();
                                }return l5.value;
                            })();
                            return l5.value;
                        })(0,l52.fvalue(pv, 1, v600));
                    })();
                    return (l82.fvalue(pv, 2, (function(){
                        var symbol = l72;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })(), v600) !== l5.value ? ((function(v611){
                        return (l27.fvalue(pv, 1, l62.fvalue(pv, 2, v611, ":")) !== l5.value ? (function(v612){
                            return (v612 !== l5.value ? v612 : l77.fvalue(pv, 2, v611, l214));
                        })(l72.fvalue(pv, 1, v611)) : l5.value);
                    })(v600[0]) !== l5.value ? l27.fvalue(values, 1, l77.fvalue(pv, 2, v600[l23.fvalue(pv, 1, l52.fvalue(pv, 1, v600))], l215)) : l5.value) : l5.value);
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == v601)
                        return values.apply(this, forcemv(cf.values));
                    else
                        throw cf;
                }
            })();
        });
        func.fname = 'POTENTIAL-NUMBER-P';
        return func;
    })();
    return l212;
})();
var l216 = (new Symbol(make_lisp_string("ESCAPE-TOKEN-P")));
(function(){
    (l216).fvalue = (function(){
        var func = (function (values,nargs,v613,v614){
            checkArgsAtLeast(nargs, 1);
            checkArgsAtMost(nargs, 2);
            switch(nargs){
            case 1:
                v614=l5.value;
            default: break;
            }
            return (function(){
                return (function(v616){
                    return (v616 !== l5.value ? v616 : l210.fvalue(values, 2, v613, v614));
                })(l212.fvalue(pv, 1, v613));
            })();
        });
        func.fname = 'ESCAPE-TOKEN-P';
        return func;
    })();
    return l216;
})();
var l217 = (new Symbol(make_lisp_string("ESCAPE-TOKEN")));
var l218 = make_lisp_string("|");
var l219 = make_lisp_string("\\");
(function(){
    (l217).fvalue = (function(){
        var func = (function (values,nargs,v617,v618){
            checkArgsAtLeast(nargs, 1);
            checkArgsAtMost(nargs, 2);
            switch(nargs){
            case 1:
                v618=l5.value;
            default: break;
            }
            return (function(){
                return (l216.fvalue(pv, 2, v617, v618) !== l5.value ? (function(v620){
                    (function(){
                        return (function(v622,v623){
                            (function(){
                                while((function(){
                                    var x1 = v622;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v623;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return (x1<x2?l4.value: l5.value);
                                })() !== l5.value){
                                    (function(){
                                        (function(v624){
                                            ((function(v625){
                                                return (v625 !== l5.value ? v625 : l62.fvalue(pv, 2, v624, "\\"));
                                            })(l62.fvalue(pv, 2, v624, "|")) !== l5.value ? (function(){
                                                return (function(){
                                                    var func = (function (values,nargs,v627){
                                                        switch(nargs){
                                                        case 0:
                                                            v627=l5.value;
                                                        default: break;
                                                        }
                                                        var v626= l5.value;
                                                        for (var i = nargs-1; i>=1; i--)
                                                            v626 = {car: arguments[i+2], cdr: v626};
                                                        return (v620 = v627);
                                                    });
                                                    var args = [pv, 0];
                                                    return (function(){
                                                        var values = mv;
                                                        var vs;
                                                        vs = l117.fvalue(values, 2, v620, l219);
                                                        if (typeof vs === 'object' && 'multiple-value' in vs)
                                                            args = args.concat(vs);
                                                        else
                                                            args.push(vs);
                                                        args[1] = args.length-2;
                                                        return func.apply(window, args);
                                                    })();
                                                })();
                                            })() : l5.value);
                                            return (function(){
                                                return (function(){
                                                    var func = (function (values,nargs,v629){
                                                        switch(nargs){
                                                        case 0:
                                                            v629=l5.value;
                                                        default: break;
                                                        }
                                                        var v628= l5.value;
                                                        for (var i = nargs-1; i>=1; i--)
                                                            v628 = {car: arguments[i+2], cdr: v628};
                                                        return (v620 = v629);
                                                    });
                                                    var args = [pv, 0];
                                                    return (function(){
                                                        var values = mv;
                                                        var vs;
                                                        vs = l117.fvalue(values, 2, v620, l135.fvalue(pv, 1, v624));
                                                        if (typeof vs === 'object' && 'multiple-value' in vs)
                                                            args = args.concat(vs);
                                                        else
                                                            args.push(vs);
                                                        args[1] = args.length-2;
                                                        return func.apply(window, args);
                                                    })();
                                                })();
                                            })();
                                        })(v617[v622]);
                                        return l5.value;
                                    })();
                                    (function(){
                                        var v630 = 1;
                                        var v631 = (function(){
                                            var x1 = v622;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v630;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return x1+x2;
                                        })();
                                        return (v622 = v631);
                                    })();
                                }return l5.value;
                            })();
                            return l5.value;
                        })(0,l52.fvalue(pv, 1, v617));
                    })();
                    return l117.fvalue(values, 2, v620, l218);
                })(l218) : v617);
            })();
        });
        func.fname = 'ESCAPE-TOKEN';
        return func;
    })();
    return l217;
})();
var l220 = (new Symbol(make_lisp_string("*PRINT-ESCAPE*")));
(function(){
    (((l220.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l220).value = l4.value));
    return l220;
})();
var l221 = (new Symbol(make_lisp_string("WRITE-TO-STRING")));
var l222 = make_lisp_string("NIL");
var l223 = (new Symbol(make_lisp_string("SYMBOL-PACKAGE")));
var l224 = (new Symbol(make_lisp_string("FIND-SYMBOL")));
var l225 = (new Symbol(make_lisp_string("*JS-PACKAGE*")));
var l226 = make_lisp_string("#");
var l227 = make_lisp_string("KEYWORD");
var l228 = (new Symbol(make_lisp_string("FIND-PACKAGE")));
var l229 = (new Symbol(make_lisp_string("PACKAGE-NAME")));
var l230 = make_lisp_string(":");
var l231 = (new Symbol(make_lisp_string("INTERNAL"), make_lisp_string("KEYWORD")));
var l232 = make_lisp_string("#\\");
var l233 = make_lisp_string("newline");
var l234 = make_lisp_string("space");
var l235 = make_lisp_string("\"");
var l236 = (new Symbol(make_lisp_string("ESCAPE-STRING")));
var l237 = make_lisp_string("fname");
var l238 = make_lisp_string("#<FUNCTION ");
var l239 = make_lisp_string(">");
var l240 = make_lisp_string("#<FUNCTION>");
var l241 = make_lisp_string("(");
var l242 = make_lisp_string(" ");
var l243 = make_lisp_string(" . ");
var l244 = make_lisp_string(")");
var l245 = make_lisp_string("()");
var l246 = (new Symbol(make_lisp_string("PACKAGEP")));
var l247 = make_lisp_string("#<PACKAGE ");
var l248 = make_lisp_string("#<javascript object>");
(function(){
    (l221).fvalue = (function(){
        var func = (function (values,nargs,v632){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v634){
                    return (v634 !== l5.value ? l222 : (function(v635){
                        return (v635 !== l5.value ? (function(v636,v637){
                            return (((v632 === l224.fvalue(pv, 1, (v632).name))?l4.value: l5.value) !== l5.value ? l217.fvalue(values, 2, (v632).name, l27.fvalue(pv, 1, ((v637 === (function(){
                                var symbol = l225;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })())?l4.value: l5.value))) : l117.fvalue(values, 4, (function(v638){
                                return (v638 !== l5.value ? l226 : (function(v639){
                                    return (v639 !== l5.value ? l118 : l217.fvalue(pv, 2, l229.fvalue(pv, 1, v637), l4.value));
                                })(((v637 === l228.fvalue(pv, 1, l227))?l4.value: l5.value)));
                            })(l42.fvalue(pv, 1, v637)), l230, ((v637 !== l5.value ? ((l144.fvalue(pv, 1, (function(){
                                var func = (function(){
                                    var symbol = l104;
                                    var func = symbol.fvalue;
                                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                                    return func;
                                })();
                                var args = [pv, 0];
                                return (function(){
                                    var values = mv;
                                    var vs;
                                    vs = l224.fvalue(values, 2, v636, v637);
                                    if (typeof vs === 'object' && 'multiple-value' in vs)
                                        args = args.concat(vs);
                                    else
                                        args.push(vs);
                                    args[1] = args.length-2;
                                    return func.apply(window, args);
                                })();
                            })()) === l231.value)?l4.value: l5.value) : l5.value) !== l5.value ? l230 : l118), l217.fvalue(pv, 2, v636, l27.fvalue(pv, 1, ((v637 === (function(){
                                var symbol = l225;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })())?l4.value: l5.value)))));
                        })((v632).name,l223.fvalue(pv, 1, v632)) : (function(v640){
                            return (v640 !== l5.value ? l17.fvalue(values, 1, v632) : (function(v641){
                                return (v641 !== l5.value ? (function(){
                                    var x = v632;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    return make_lisp_string(x.toString());
                                })() : (function(v642){
                                    return (v642 !== l5.value ? l117.fvalue(values, 2, l232, (function(v643){
                                        return (function(v644){
                                            return (v644 !== l5.value ? l233 : (function(v645){
                                                return (v645 !== l5.value ? l234 : l135.fvalue(pv, 1, v632));
                                            })(l26.fvalue(pv, 2, v643, " ")));
                                        })(l26.fvalue(pv, 2, v643, "\n"));
                                    })(v632)) : (function(v646){
                                        return (v646 !== l5.value ? ((function(){
                                            var symbol = l220;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                            return value;
                                        })() !== l5.value ? l117.fvalue(values, 3, l235, l236.fvalue(pv, 1, v632), l235) : v632) : (function(v647){
                                            return (v647 !== l5.value ? (function(v648){
                                                return (v648 !== l5.value ? l117.fvalue(values, 3, l238, v648, l239) : l117.fvalue(values, 1, l240));
                                            })((function(){
                                                var tmp = (v632)[xstring(l237)];
                                                return tmp == undefined? l5.value: tmp ;
                                            })()) : (function(v649){
                                                return (v649 !== l5.value ? l117.fvalue(values, 4, l241, l128.fvalue(pv, 2, l130.fvalue(pv, 2, (function(){
                                                    var symbol = l221;
                                                    var func = symbol.fvalue;
                                                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                                                    return func;
                                                })(), l194.fvalue(pv, 1, v632)), l242), (function(v650){
                                                    return (l42.fvalue(pv, 1, (function(){
                                                        var tmp = v650;
                                                        return tmp === l5.value? l5.value: tmp.cdr;
                                                    })()) !== l5.value ? l221.fvalue(pv, 1, (function(){
                                                        var tmp = v650;
                                                        return tmp === l5.value? l5.value: tmp.car;
                                                    })()) : l117.fvalue(pv, 3, l221.fvalue(pv, 1, (function(){
                                                        var tmp = v650;
                                                        return tmp === l5.value? l5.value: tmp.car;
                                                    })()), l243, l221.fvalue(pv, 1, (function(){
                                                        var tmp = v650;
                                                        return tmp === l5.value? l5.value: tmp.cdr;
                                                    })())));
                                                })(l193.fvalue(pv, 1, v632)), l244) : (function(v651){
                                                    return (v651 !== l5.value ? l117.fvalue(values, 2, l226, (l24.fvalue(pv, 1, l52.fvalue(pv, 1, v632)) !== l5.value ? l245 : l221.fvalue(pv, 1, l131.fvalue(pv, 1, v632)))) : (function(v652){
                                                        return (v652 !== l5.value ? l117.fvalue(values, 3, l247, l229.fvalue(pv, 1, v632), l239) : l117.fvalue(values, 1, l248));
                                                    })(l246.fvalue(pv, 1, v632)));
                                                })(((function(){
                                                    var x = v632;
                                                    return typeof x === 'object' && 'length' in x;
                                                })()?l4.value: l5.value)));
                                            })(l54.fvalue(pv, 1, v632)));
                                        })(((typeof v632 == 'function')?l4.value: l5.value)));
                                    })(((function(){
                                        var x = v632;
                                        return typeof(x) == 'object' && 'length' in x && x.type == 'character';
                                    })()?l4.value: l5.value)));
                                })(((function(){
                                    var x = v632;
                                    return (typeof(v632) == "string") && x.length == 1;
                                })()?l4.value: l5.value)));
                            })(l64.fvalue(pv, 1, v632)));
                        })(l63.fvalue(pv, 1, v632)));
                    })(((v632 instanceof Symbol)?l4.value: l5.value)));
                })(l42.fvalue(pv, 1, v632));
            })();
        });
        func.fname = 'WRITE-TO-STRING';
        return func;
    })();
    return l221;
})();
var l249 = (new Symbol(make_lisp_string("PRIN1-TO-STRING")));
(function(){
    (l249).fvalue = (function(){
        var func = (function (values,nargs,v653){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v655){
                    try {
                        var tmp;
                        tmp = l220.value;
                        l220.value = v655;
                        v655 = tmp;
                        return l221.fvalue(values, 1, v653);
                    }
                    finally {
                        l220.value = v655;
                    }
                })(l4.value);
            })();
        });
        func.fname = 'PRIN1-TO-STRING';
        return func;
    })();
    return l249;
})();
var l250 = (new Symbol(make_lisp_string("PRINC-TO-STRING")));
(function(){
    (l250).fvalue = (function(){
        var func = (function (values,nargs,v656){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v658){
                    try {
                        var tmp;
                        tmp = l220.value;
                        l220.value = v658;
                        v658 = tmp;
                        return l221.fvalue(values, 1, v656);
                    }
                    finally {
                        l220.value = v658;
                    }
                })(l5.value);
            })();
        });
        func.fname = 'PRINC-TO-STRING';
        return func;
    })();
    return l250;
})();
(function(){
    (l92).fvalue = (function(){
        var func = (function (values,nargs,v659){
            checkArgs(nargs, 1);
            return (function(){
                lisp.write(v659);
                lisp.write((function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })());
                return v659;
            })();
        });
        func.fname = 'WRITE-LINE';
        return func;
    })();
    return l92;
})();
var l251 = (new Symbol(make_lisp_string("WARN")));
var l252 = make_lisp_string("WARNING: ");
(function(){
    (l251).fvalue = (function(){
        var func = (function (values,nargs,v661){
            checkArgs(nargs, 1);
            return (function(){
                lisp.write(l252);
                return l92.fvalue(values, 1, v661);
            })();
        });
        func.fname = 'WARN';
        return func;
    })();
    return l251;
})();
var l253 = (new Symbol(make_lisp_string("PRINT")));
(function(){
    (l253).fvalue = (function(){
        var func = (function (values,nargs,v663){
            checkArgs(nargs, 1);
            return (function(){
                l92.fvalue(pv, 1, l249.fvalue(pv, 1, v663));
                return v663;
            })();
        });
        func.fname = 'PRINT';
        return func;
    })();
    return l253;
})();
var l254 = make_lisp_string("~");
var l255 = (new Symbol(make_lisp_string("FORMAT-SPECIAL")));
(function(){
    (l122).fvalue = (function(){
        var func = (function (values,nargs,v666,v667){
            checkArgsAtLeast(nargs, 2);
            var v665= l5.value;
            for (var i = nargs-1; i>=2; i--)
                v665 = {car: arguments[i+2], cdr: v665};
            return (function(){
                return (function(v669,v670,v671,v672){
                    (function(){
                        return (function(){
                            while((function(){
                                var x1 = v670;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v669;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1<x2?l4.value: l5.value);
                            })() !== l5.value){
                                (function(v674){
                                    (l62.fvalue(pv, 2, v674, "~") !== l5.value ? (function(v677){
                                        return (function(v678){
                                            return (v678 !== l5.value ? (v671 = l117.fvalue(pv, 2, v671, l254)) : (function(v679){
                                                return (v679 !== l5.value ? (v671 = l117.fvalue(pv, 2, v671, (function(){
                                                    var symbol = l123;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                    return value;
                                                })())) : (function(){
                                                    (v671 = l117.fvalue(pv, 2, v671, l255.fvalue(pv, 2, v677, (function(){
                                                        var tmp = v672;
                                                        return tmp === l5.value? l5.value: tmp.car;
                                                    })())));
                                                    return (function(){
                                                        var v680 = v672;
                                                        var v681 = (function(){
                                                            var tmp = v680;
                                                            return tmp === l5.value? l5.value: tmp.cdr;
                                                        })();
                                                        (v672 = v681);
                                                        return (function(){
                                                            var tmp = v680;
                                                            return tmp === l5.value? l5.value: tmp.car;
                                                        })();
                                                    })();
                                                })());
                                            })(l62.fvalue(pv, 2, v677, "%")));
                                        })(l62.fvalue(pv, 2, v677, "~"));
                                    })(v667[(function(){
                                        var v675 = 1;
                                        var v676 = (function(){
                                            var x1 = v670;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v675;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return x1+x2;
                                        })();
                                        return (v670 = v676);
                                    })()]) : (v671 = l117.fvalue(pv, 2, v671, (function(){
                                        var r = [v674];
                                        r.type = 'character';return r
                                    })())));
                                    return (function(){
                                        var v682 = 1;
                                        var v683 = (function(){
                                            var x1 = v670;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v682;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return x1+x2;
                                        })();
                                        return (v670 = v683);
                                    })();
                                })(v667[v670]);
                            }return l5.value;
                        })();
                    })();
                    return (v666 !== l5.value ? (function(){
                        lisp.write(v671);
                        return l5.value;
                    })() : v671);
                })(l52.fvalue(pv, 1, v667),0,l118,v665);
            })();
        });
        func.fname = 'FORMAT';
        return func;
    })();
    return l122;
})();
(function(){
    (l255).fvalue = (function(){
        var func = (function (values,nargs,v684,v685){
            checkArgs(nargs, 2);
            return (function(){
                return (function(v687){
                    return (function(v688){
                        return (v688 !== l5.value ? l249.fvalue(values, 1, v685) : (function(v689){
                            return (v689 !== l5.value ? l250.fvalue(values, 1, v685) : l5.value);
                        })(l26.fvalue(pv, 2, v687, "a")));
                    })(l26.fvalue(pv, 2, v687, "S"));
                })(v684);
            })();
        });
        func.fname = 'FORMAT-SPECIAL';
        return func;
    })();
    return l255;
})();
var l256 = (new Symbol(make_lisp_string("*PACKAGE-LIST*")));
(function(){
    (((l256.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l256).value = l5.value));
    return l256;
})();
var l257 = (new Symbol(make_lisp_string("LIST-ALL-PACKAGES")));
(function(){
    (l257).fvalue = (function(){
        var func = (function (values,nargs){
            checkArgsAtMost(nargs, 0);
            return (function(){
                return (function(){
                    var symbol = l256;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
            })();
        });
        func.fname = 'LIST-ALL-PACKAGES';
        return func;
    })();
    return l257;
})();
var l258 = (new Symbol(make_lisp_string("MAKE-PACKAGE")));
var l259 = (new Symbol(make_lisp_string("USE"), make_lisp_string("KEYWORD")));
var l260 = (new Symbol(make_lisp_string("FIND-PACKAGE-OR-FAIL")));
var l261 = make_lisp_string("packageName");
var l262 = make_lisp_string("symbols");
var l263 = make_lisp_string("exports");
var l264 = make_lisp_string("use");
(function(){
    (l258).fvalue = (function(){
        var func = (function (values,nargs,v691){
            checkArgsAtLeast(nargs, 1);
            var v692; 
            var i;
            for (i=1; i<nargs; i+=2){
                if (arguments[i+2] === l259.value){
                    v692 = arguments[i+3];
                    break;
                }
            }
            if (i == nargs){
                v692 = l5.value;
            }
            for (i=1; i<nargs; i+=2){
                if (arguments[i+2] !== l259.value)
                    throw 'Unknown keyword argument ' + xstring(arguments[i].name);
            }
            return (function(){
                return (function(v694,v695){
                    ((v694)[xstring(l261)] = v691);
                    ((v694)[xstring(l262)] = {});
                    ((v694)[xstring(l263)] = {});
                    ((v694)[xstring(l264)] = v695);
                    (function(){
                        var v696 = v694;
                        var v697 = ({car: v696, cdr: (function(){
                            var symbol = l256;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })()});
                        return ((l256).value = v697);
                    })();
                    return v694;
                })({},l130.fvalue(pv, 2, (function(){
                    var symbol = l260;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })(), v692));
            })();
        });
        func.fname = 'MAKE-PACKAGE';
        return func;
    })();
    return l258;
})();
(function(){
    (l246).fvalue = (function(){
        var func = (function (values,nargs,v698){
            checkArgs(nargs, 1);
            return (function(){
                return (((typeof (v698) === 'object')?l4.value: l5.value) !== l5.value ? ((xstring(l262) in (v698))?l4.value: l5.value) : l5.value);
            })();
        });
        func.fname = 'PACKAGEP';
        return func;
    })();
    return l246;
})();
(function(){
    (l228).fvalue = (function(){
        var func = (function (values,nargs,v700){
            checkArgs(nargs, 1);
            return (function(){
                try {
                var v701 = [];
                    (l246.fvalue(pv, 1, v700) !== l5.value ? (function(){
                        var values = mv;
                        throw ({type: 'block', id: v701, values: v700, message: 'Return from unknown block FIND-PACKAGE.'})
                    })() : l5.value);
                    return (function(v702){
                        return (function(){
                            try {
                            var v703 = [];
                                return (function(v704,v705){
                                    (function(){
                                        while(v704 !== l5.value){
                                            (v705 = (function(){
                                                var tmp = v704;
                                                return tmp === l5.value? l5.value: tmp.car;
                                            })());
                                            (function(){
                                                (l88.fvalue(pv, 2, l229.fvalue(pv, 1, v705), v702) !== l5.value ? (function(){
                                                    var values = mv;
                                                    throw ({type: 'block', id: v703, values: v705, message: 'Return from unknown block NIL.'})
                                                })() : l5.value);
                                                return l5.value;
                                            })();
                                            (v704 = (function(){
                                                var tmp = v704;
                                                return tmp === l5.value? l5.value: tmp.cdr;
                                            })());
                                        }return l5.value;
                                    })();
                                    return l5.value;
                                })((function(){
                                    var symbol = l256;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                    return value;
                                })(),l5.value);
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == v703)
                                    return values.apply(this, forcemv(cf.values));
                                else
                                    throw cf;
                            }
                        })();
                    })(l135.fvalue(pv, 1, v700));
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == v701)
                        return values.apply(this, forcemv(cf.values));
                    else
                        throw cf;
                }
            })();
        });
        func.fname = 'FIND-PACKAGE';
        return func;
    })();
    return l228;
})();
var l265 = make_lisp_string("The name `~S' does not designate any package.");
(function(){
    (l260).fvalue = (function(){
        var func = (function (values,nargs,v706){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v708){
                    return (v708 !== l5.value ? v708 : l81.fvalue(values, 2, l265, v706));
                })(l228.fvalue(pv, 1, v706));
            })();
        });
        func.fname = 'FIND-PACKAGE-OR-FAIL';
        return func;
    })();
    return l260;
})();
(function(){
    (l229).fvalue = (function(){
        var func = (function (values,nargs,v709){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v711){
                    return (function(){
                        var tmp = (v711)[xstring(l261)];
                        return tmp == undefined? l5.value: tmp ;
                    })();
                })(l260.fvalue(pv, 1, v709));
            })();
        });
        func.fname = 'PACKAGE-NAME';
        return func;
    })();
    return l229;
})();
var l266 = (new Symbol(make_lisp_string("%PACKAGE-SYMBOLS")));
(function(){
    (l266).fvalue = (function(){
        var func = (function (values,nargs,v712){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v714){
                    return (function(){
                        var tmp = (v714)[xstring(l262)];
                        return tmp == undefined? l5.value: tmp ;
                    })();
                })(l260.fvalue(pv, 1, v712));
            })();
        });
        func.fname = '%PACKAGE-SYMBOLS';
        return func;
    })();
    return l266;
})();
var l267 = (new Symbol(make_lisp_string("PACKAGE-USE-LIST")));
(function(){
    (l267).fvalue = (function(){
        var func = (function (values,nargs,v715){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v717){
                    return (function(){
                        var tmp = (v717)[xstring(l264)];
                        return tmp == undefined? l5.value: tmp ;
                    })();
                })(l260.fvalue(pv, 1, v715));
            })();
        });
        func.fname = 'PACKAGE-USE-LIST';
        return func;
    })();
    return l267;
})();
var l268 = (new Symbol(make_lisp_string("%PACKAGE-EXTERNAL-SYMBOLS")));
(function(){
    (l268).fvalue = (function(){
        var func = (function (values,nargs,v718){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v720){
                    return (function(){
                        var tmp = (v720)[xstring(l263)];
                        return tmp == undefined? l5.value: tmp ;
                    })();
                })(l260.fvalue(pv, 1, v718));
            })();
        });
        func.fname = '%PACKAGE-EXTERNAL-SYMBOLS';
        return func;
    })();
    return l268;
})();
var l269 = (new Symbol(make_lisp_string("*COMMON-LISP-PACKAGE*")));
var l270 = make_lisp_string("CL");
(function(){
    (((l269.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l269).value = l258.fvalue(pv, 1, l270)));
    return l269;
})();
var l271 = (new Symbol(make_lisp_string("*USER-PACKAGE*")));
var l272 = make_lisp_string("CL-USER");
(function(){
    (((l271.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l271).value = l258.fvalue(pv, 3, l272, l259.value, l104.fvalue(pv, 1, (function(){
        var symbol = l269;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()))));
    return l271;
})();
var l273 = (new Symbol(make_lisp_string("*KEYWORD-PACKAGE*")));
(function(){
    (((l273.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l273).value = l258.fvalue(pv, 1, l227)));
    return l273;
})();
var l274 = (new Symbol(make_lisp_string("KEYWORDP")));
(function(){
    (l274).fvalue = (function(){
        var func = (function (values,nargs,v721){
            checkArgs(nargs, 1);
            return (function(){
                return (((v721 instanceof Symbol)?l4.value: l5.value) !== l5.value ? ((l223.fvalue(pv, 1, v721) === (function(){
                    var symbol = l273;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())?l4.value: l5.value) : l5.value);
            })();
        });
        func.fname = 'KEYWORDP';
        return func;
    })();
    return l274;
})();
var l275 = (new Symbol(make_lisp_string("*PACKAGE*")));
(function(){
    (((l275.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l275).value = (function(){
        var symbol = l269;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()));
    return l275;
})();
var l276 = (new Symbol(make_lisp_string("IN-PACKAGE")));
l276;
var l277 = (new Symbol(make_lisp_string("%INTERN-SYMBOL")));
var l278 = make_lisp_string("package");
var l279 = make_lisp_string("value");
(function(){
    (l277).fvalue = (function(){
        var func = (function (values,nargs,v723){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var v725 = (((xstring(l278) in (v723))?l4.value: l5.value) !== l5.value ? l260.fvalue(pv, 1, (function(){
                        var tmp = (v723)[xstring(l278)];
                        return tmp == undefined? l5.value: tmp ;
                    })()) : (function(){
                        var symbol = l269;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })());
                    var v726 = l266.fvalue(pv, 1, v725);
                    ((v723)[xstring(l278)] = v725);
                    (((v725 === (function(){
                        var symbol = l273;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })())?l4.value: l5.value) !== l5.value ? ((v723)[xstring(l279)] = v723) : l5.value);
                    return ((v726)[xstring((v723).name)] = v723);
                })();
            })();
        });
        func.fname = '%INTERN-SYMBOL';
        return func;
    })();
    return l277;
})();
var l280 = (new Symbol(make_lisp_string("EXTERNAL"), make_lisp_string("KEYWORD")));
var l281 = (new Symbol(make_lisp_string("INHERIT"), make_lisp_string("KEYWORD")));
(function(){
    (l224).fvalue = (function(){
        var func = (function (values,nargs,v727,v728){
            checkArgsAtLeast(nargs, 1);
            checkArgsAtMost(nargs, 2);
            switch(nargs){
            case 1:
                v728=(function(){
                    var symbol = l275;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
            default: break;
            }
            return (function(){
                return (function(){
                    var v730 = l260.fvalue(pv, 1, v728);
                    var v731 = l268.fvalue(pv, 1, v730);
                    var v732 = l266.fvalue(pv, 1, v730);
                    return (function(v733){
                        return (v733 !== l5.value ? values((function(){
                            var tmp = (v731)[xstring(v727)];
                            return tmp == undefined? l5.value: tmp ;
                        })(), l280.value) : (function(v734){
                            return (v734 !== l5.value ? values((function(){
                                var tmp = (v732)[xstring(v727)];
                                return tmp == undefined? l5.value: tmp ;
                            })(), l231.value) : (function(){
                                try {
                                var v735 = [];
                                    return (function(v736,v737){
                                        (function(){
                                            while(v736 !== l5.value){
                                                (v737 = (function(){
                                                    var tmp = v736;
                                                    return tmp === l5.value? l5.value: tmp.car;
                                                })());
                                                (function(){
                                                    (function(v738){
                                                        return (((xstring(v727) in (v738))?l4.value: l5.value) !== l5.value ? (function(){
                                                            var values = mv;
                                                            throw ({type: 'block', id: v735, values: values((function(){
                                                                var tmp = (v738)[xstring(v727)];
                                                                return tmp == undefined? l5.value: tmp ;
                                                            })(), l281.value), message: 'Return from unknown block NIL.'})
                                                        })() : l5.value);
                                                    })(l268.fvalue(pv, 1, v737));
                                                    return l5.value;
                                                })();
                                                (v736 = (function(){
                                                    var tmp = v736;
                                                    return tmp === l5.value? l5.value: tmp.cdr;
                                                })());
                                            }return l5.value;
                                        })();
                                        return values(l5.value, l5.value);
                                    })(l267.fvalue(pv, 1, v730),l5.value);
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == v735)
                                        return values.apply(this, forcemv(cf.values));
                                    else
                                        throw cf;
                                }
                            })());
                        })(((xstring(v727) in (v732))?l4.value: l5.value)));
                    })(((xstring(v727) in (v731))?l4.value: l5.value));
                })();
            })();
        });
        func.fname = 'FIND-SYMBOL';
        return func;
    })();
    return l224;
})();
var l282 = (new Symbol(make_lisp_string("*INTERN-HOOK*")));
(function(){
    (((l282.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l282).value = l5.value));
    return l282;
})();
var l283 = (new Symbol(make_lisp_string("INTERN")));
var l284 = (new Symbol(make_lisp_string("EXPORT")));
(function(){
    (l283).fvalue = (function(){
        var func = (function (values,nargs,v739,v740){
            checkArgsAtLeast(nargs, 1);
            checkArgsAtMost(nargs, 2);
            switch(nargs){
            case 1:
                v740=(function(){
                    var symbol = l275;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
            default: break;
            }
            return (function(){
                return (function(v742){
                    return (function(){
                        var func = (function (values,nargs,v744,v745){
                            switch(nargs){
                            case 0:
                                v744=l5.value;
                            case 1:
                                v745=l5.value;
                            default: break;
                            }
                            var v743= l5.value;
                            for (var i = nargs-1; i>=2; i--)
                                v743 = {car: arguments[i+2], cdr: v743};
                            return (v745 !== l5.value ? values(v744, v745) : (function(v746){
                                (function(){
                                    var tmp = (v746)[xstring(v739)];
                                    return tmp == undefined? l5.value: tmp ;
                                })();
                                return (function(v747){
                                    ((v747)[xstring(l278)] = v742);
                                    (((v742 === (function(){
                                        var symbol = l273;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                        return value;
                                    })())?l4.value: l5.value) !== l5.value ? (function(){
                                        ((v747)[xstring(l279)] = v747);
                                        return l284.fvalue(pv, 2, l104.fvalue(pv, 1, v747), v742);
                                    })() : l5.value);
                                    ((function(){
                                        var symbol = l282;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                        return value;
                                    })() !== l5.value ? (function(){
                                        var f = (function(){
                                            var symbol = l282;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                            return value;
                                        })();
                                        return (typeof f === 'function'? f: f.fvalue)(pv, 1, v747)
                                    })() : l5.value);
                                    ((v746)[xstring(v739)] = v747);
                                    return values(v747, l5.value);
                                })((new Symbol(v739)));
                            })(l266.fvalue(pv, 1, v742)));
                        });
                        var args = [values, 0];
                        return (function(){
                            var values = mv;
                            var vs;
                            vs = l224.fvalue(values, 2, v739, v742);
                            if (typeof vs === 'object' && 'multiple-value' in vs)
                                args = args.concat(vs);
                            else
                                args.push(vs);
                            args[1] = args.length-2;
                            return func.apply(window, args);
                        })();
                    })();
                })(l260.fvalue(pv, 1, v740));
            })();
        });
        func.fname = 'INTERN';
        return func;
    })();
    return l283;
})();
var l285 = make_lisp_string("`~S' is not a symbol.");
(function(){
    (l223).fvalue = (function(){
        var func = (function (values,nargs,v748){
            checkArgs(nargs, 1);
            return (function(){
                (((v748 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l5.value : l81.fvalue(pv, 2, l285, v748));
                return (function(){
                    var tmp = (v748)[xstring(l278)];
                    return tmp == undefined? l5.value: tmp ;
                })();
            })();
        });
        func.fname = 'SYMBOL-PACKAGE';
        return func;
    })();
    return l223;
})();
(function(){
    (l284).fvalue = (function(){
        var func = (function (values,nargs,v750,v751){
            checkArgsAtLeast(nargs, 1);
            checkArgsAtMost(nargs, 2);
            switch(nargs){
            case 1:
                v751=(function(){
                    var symbol = l275;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
            default: break;
            }
            return (function(){
                return (function(v753){
                    return (function(){
                        return (function(v755,v756){
                            (function(){
                                while(v755 !== l5.value){
                                    (v756 = (function(){
                                        var tmp = v755;
                                        return tmp === l5.value? l5.value: tmp.car;
                                    })());
                                    (function(){
                                        ((v753)[xstring((v756).name)] = v756);
                                        return l5.value;
                                    })();
                                    (v755 = (function(){
                                        var tmp = v755;
                                        return tmp === l5.value? l5.value: tmp.cdr;
                                    })());
                                }return l5.value;
                            })();
                            return l4.value;
                        })(v750,l5.value);
                    })();
                })(l268.fvalue(pv, 1, v751));
            })();
        });
        func.fname = 'EXPORT';
        return func;
    })();
    return l284;
})();
var l286 = make_lisp_string("JS");
(function(){
    (((l225.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l225).value = l258.fvalue(pv, 1, l286)));
    return l225;
})();
var l287 = (new Symbol(make_lisp_string("FFI-INTERN-HOOK")));
var l288 = (new Symbol(make_lisp_string("%JS-VREF")));
var l289 = (new Symbol(make_lisp_string("EVAL")));
var l290 = (new Symbol(make_lisp_string("%DEFINE-SYMBOL-MACRO")));
(function(){
    (l287).fvalue = (function(){
        var func = (function (values,nargs,v757){
            checkArgs(nargs, 1);
            return (function(){
                return (((l223.fvalue(pv, 1, v757) === (function(){
                    var symbol = l225;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())?l4.value: l5.value) !== l5.value ? (function(v759,v760){
                    (v757).fvalue = l289.fvalue(pv, 1, l104.fvalue(pv, 2, l288, v759));
                    return l290.fvalue(values, 2, v757, l104.fvalue(pv, 2, l288, l135.fvalue(pv, 1, v757)));
                })((v757).name,l15.fvalue(pv, 0)) : l5.value);
            })();
        });
        func.fname = 'FFI-INTERN-HOOK';
        return func;
    })();
    return l287;
})();
((l282).value = (function(){
    var symbol = l287;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
    return func;
})());
var l291 = (new Symbol(make_lisp_string("MAKE-STRING-STREAM")));
(function(){
    (l291).fvalue = (function(){
        var func = (function (values,nargs,v761){
            checkArgs(nargs, 1);
            return (function(){
                return ({car: v761, cdr: 0});
            })();
        });
        func.fname = 'MAKE-STRING-STREAM';
        return func;
    })();
    return l291;
})();
var l292 = (new Symbol(make_lisp_string("%PEEK-CHAR")));
(function(){
    (l292).fvalue = (function(){
        var func = (function (values,nargs,v763){
            checkArgs(nargs, 1);
            return (function(){
                return ((function(){
                    var x1 = (function(){
                        var tmp = v763;
                        return tmp === l5.value? l5.value: tmp.cdr;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = l52.fvalue(pv, 1, (function(){
                        var tmp = v763;
                        return tmp === l5.value? l5.value: tmp.car;
                    })());
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return (x1<x2?l4.value: l5.value);
                })() !== l5.value ? (function(){
                    var tmp = v763;
                    return tmp === l5.value? l5.value: tmp.car;
                })()[(function(){
                    var tmp = v763;
                    return tmp === l5.value? l5.value: tmp.cdr;
                })()] : l5.value);
            })();
        });
        func.fname = '%PEEK-CHAR';
        return func;
    })();
    return l292;
})();
var l293 = (new Symbol(make_lisp_string("%READ-CHAR")));
(function(){
    (l293).fvalue = (function(){
        var func = (function (values,nargs,v765){
            checkArgs(nargs, 1);
            return (function(){
                return ((function(){
                    var x1 = (function(){
                        var tmp = v765;
                        return tmp === l5.value? l5.value: tmp.cdr;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = l52.fvalue(pv, 1, (function(){
                        var tmp = v765;
                        return tmp === l5.value? l5.value: tmp.car;
                    })());
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return (x1<x2?l4.value: l5.value);
                })() !== l5.value ? (function(v767){
                    (function(){
                        var x = v765;
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.cdr = l22.fvalue(pv, 1, (function(){
                            var tmp = v765;
                            return tmp === l5.value? l5.value: tmp.cdr;
                        })()), x);
                    })();
                    return v767;
                })((function(){
                    var tmp = v765;
                    return tmp === l5.value? l5.value: tmp.car;
                })()[(function(){
                    var tmp = v765;
                    return tmp === l5.value? l5.value: tmp.cdr;
                })()]) : l5.value);
            })();
        });
        func.fname = '%READ-CHAR';
        return func;
    })();
    return l293;
})();
var l294 = (new Symbol(make_lisp_string("WHITESPACEP")));
(function(){
    (l294).fvalue = (function(){
        var func = (function (values,nargs,v768){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v770){
                    return (v770 !== l5.value ? v770 : (function(v771){
                        return (v771 !== l5.value ? v771 : l62.fvalue(values, 2, v768, "	"));
                    })(l62.fvalue(pv, 2, v768, "\n")));
                })(l62.fvalue(pv, 2, v768, " "));
            })();
        });
        func.fname = 'WHITESPACEP';
        return func;
    })();
    return l294;
})();
var l295 = (new Symbol(make_lisp_string("SKIP-WHITESPACES")));
(function(){
    (l295).fvalue = (function(){
        var func = (function (values,nargs,v772){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v774){
                    (v774 = l292.fvalue(pv, 1, v772));
                    return (function(){
                        return (function(){
                            while((v774 !== l5.value ? l294.fvalue(pv, 1, v774) : l5.value) !== l5.value){
                                l293.fvalue(pv, 1, v772);
                                (v774 = l292.fvalue(pv, 1, v772));
                            }return l5.value;
                        })();
                    })();
                })(l5.value);
            })();
        });
        func.fname = 'SKIP-WHITESPACES';
        return func;
    })();
    return l295;
})();
(function(){
    (l211).fvalue = (function(){
        var func = (function (values,nargs,v776){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v778){
                    return (v778 !== l5.value ? v778 : (function(v779){
                        return (v779 !== l5.value ? v779 : (function(v780){
                            return (v780 !== l5.value ? v780 : (function(v781){
                                return (v781 !== l5.value ? v781 : l62.fvalue(values, 2, "(", v776));
                            })(l62.fvalue(pv, 2, ")", v776)));
                        })(l62.fvalue(pv, 2, "\"", v776)));
                    })(l294.fvalue(pv, 1, v776)));
                })(l42.fvalue(pv, 1, v776));
            })();
        });
        func.fname = 'TERMINALP';
        return func;
    })();
    return l211;
})();
var l296 = (new Symbol(make_lisp_string("READ-UNTIL")));
(function(){
    (l296).fvalue = (function(){
        var func = (function (values,nargs,v782,v783){
            checkArgs(nargs, 2);
            return (function(){
                return (function(v785,v786){
                    (v786 = l292.fvalue(pv, 1, v782));
                    (function(){
                        return (function(){
                            while((v786 !== l5.value ? l27.fvalue(pv, 1, (function(){
                                var f = v783;
                                return (typeof f === 'function'? f: f.fvalue)(pv, 1, v786)
                            })()) : l5.value) !== l5.value){
                                (v785 = l117.fvalue(pv, 2, v785, l135.fvalue(pv, 1, v786)));
                                l293.fvalue(pv, 1, v782);
                                (v786 = l292.fvalue(pv, 1, v782));
                            }return l5.value;
                        })();
                    })();
                    return v785;
                })(l118,l5.value);
            })();
        });
        func.fname = 'READ-UNTIL';
        return func;
    })();
    return l296;
})();
var l297 = (new Symbol(make_lisp_string("READ-ESCAPED-UNTIL")));
(function(){
    (l297).fvalue = (function(){
        var func = (function (values,nargs,v788,v789){
            checkArgs(nargs, 2);
            return (function(){
                return (function(v791,v792,v793){
                    (function(){
                        return (function(){
                            while((v792 !== l5.value ? (function(v795){
                                return (v795 !== l5.value ? v795 : l27.fvalue(pv, 1, (function(){
                                    var f = v789;
                                    return (typeof f === 'function'? f: f.fvalue)(pv, 1, v792)
                                })()));
                            })(v793) : l5.value) !== l5.value){
                                (function(v796){
                                    return (v796 !== l5.value ? (v793 !== l5.value ? (function(){
                                        return (function(){
                                            var func = (function (values,nargs,v798){
                                                switch(nargs){
                                                case 0:
                                                    v798=l5.value;
                                                default: break;
                                                }
                                                var v797= l5.value;
                                                for (var i = nargs-1; i>=1; i--)
                                                    v797 = {car: arguments[i+2], cdr: v797};
                                                return (v793 = v798);
                                            });
                                            var args = [pv, 0];
                                            return (function(){
                                                var values = mv;
                                                var vs;
                                                vs = l5.value;
                                                if (typeof vs === 'object' && 'multiple-value' in vs)
                                                    args = args.concat(vs);
                                                else
                                                    args.push(vs);
                                                args[1] = args.length-2;
                                                return func.apply(window, args);
                                            })();
                                        })();
                                    })() : (function(){
                                        return (function(){
                                            var func = (function (values,nargs,v800){
                                                switch(nargs){
                                                case 0:
                                                    v800=l5.value;
                                                default: break;
                                                }
                                                var v799= l5.value;
                                                for (var i = nargs-1; i>=1; i--)
                                                    v799 = {car: arguments[i+2], cdr: v799};
                                                return (v793 = v800);
                                            });
                                            var args = [pv, 0];
                                            return (function(){
                                                var values = mv;
                                                var vs;
                                                vs = l4.value;
                                                if (typeof vs === 'object' && 'multiple-value' in vs)
                                                    args = args.concat(vs);
                                                else
                                                    args.push(vs);
                                                args[1] = args.length-2;
                                                return func.apply(window, args);
                                            })();
                                        })();
                                    })()) : (function(v801){
                                        return (v801 !== l5.value ? (function(){
                                            l293.fvalue(pv, 1, v788);
                                            (function(){
                                                return (function(){
                                                    var func = (function (values,nargs,v803){
                                                        switch(nargs){
                                                        case 0:
                                                            v803=l5.value;
                                                        default: break;
                                                        }
                                                        var v802= l5.value;
                                                        for (var i = nargs-1; i>=1; i--)
                                                            v802 = {car: arguments[i+2], cdr: v802};
                                                        return (v792 = v803);
                                                    });
                                                    var args = [pv, 0];
                                                    return (function(){
                                                        var values = mv;
                                                        var vs;
                                                        vs = l292.fvalue(values, 1, v788);
                                                        if (typeof vs === 'object' && 'multiple-value' in vs)
                                                            args = args.concat(vs);
                                                        else
                                                            args.push(vs);
                                                        args[1] = args.length-2;
                                                        return func.apply(window, args);
                                                    })();
                                                })();
                                            })();
                                            return (function(){
                                                return (function(){
                                                    var func = (function (values,nargs,v805){
                                                        switch(nargs){
                                                        case 0:
                                                            v805=l5.value;
                                                        default: break;
                                                        }
                                                        var v804= l5.value;
                                                        for (var i = nargs-1; i>=1; i--)
                                                            v804 = {car: arguments[i+2], cdr: v804};
                                                        return (v791 = v805);
                                                    });
                                                    var args = [pv, 0];
                                                    return (function(){
                                                        var values = mv;
                                                        var vs;
                                                        vs = l117.fvalue(values, 3, v791, l219, l135.fvalue(pv, 1, v792));
                                                        if (typeof vs === 'object' && 'multiple-value' in vs)
                                                            args = args.concat(vs);
                                                        else
                                                            args.push(vs);
                                                        args[1] = args.length-2;
                                                        return func.apply(window, args);
                                                    })();
                                                })();
                                            })();
                                        })() : (v793 !== l5.value ? (function(){
                                            return (function(){
                                                var func = (function (values,nargs,v807){
                                                    switch(nargs){
                                                    case 0:
                                                        v807=l5.value;
                                                    default: break;
                                                    }
                                                    var v806= l5.value;
                                                    for (var i = nargs-1; i>=1; i--)
                                                        v806 = {car: arguments[i+2], cdr: v806};
                                                    return (v791 = v807);
                                                });
                                                var args = [pv, 0];
                                                return (function(){
                                                    var values = mv;
                                                    var vs;
                                                    vs = l117.fvalue(values, 3, v791, l219, l135.fvalue(pv, 1, v792));
                                                    if (typeof vs === 'object' && 'multiple-value' in vs)
                                                        args = args.concat(vs);
                                                    else
                                                        args.push(vs);
                                                    args[1] = args.length-2;
                                                    return func.apply(window, args);
                                                })();
                                            })();
                                        })() : (function(){
                                            return (function(){
                                                var func = (function (values,nargs,v809){
                                                    switch(nargs){
                                                    case 0:
                                                        v809=l5.value;
                                                    default: break;
                                                    }
                                                    var v808= l5.value;
                                                    for (var i = nargs-1; i>=1; i--)
                                                        v808 = {car: arguments[i+2], cdr: v808};
                                                    return (v791 = v809);
                                                });
                                                var args = [pv, 0];
                                                return (function(){
                                                    var values = mv;
                                                    var vs;
                                                    vs = l117.fvalue(values, 2, v791, l135.fvalue(pv, 1, v792));
                                                    if (typeof vs === 'object' && 'multiple-value' in vs)
                                                        args = args.concat(vs);
                                                    else
                                                        args.push(vs);
                                                    args[1] = args.length-2;
                                                    return func.apply(window, args);
                                                })();
                                            })();
                                        })()));
                                    })(l62.fvalue(pv, 2, v792, "\\")));
                                })(l62.fvalue(pv, 2, v792, "|"));
                                l293.fvalue(pv, 1, v788);
                                (function(){
                                    return (function(){
                                        var func = (function (values,nargs,v811){
                                            switch(nargs){
                                            case 0:
                                                v811=l5.value;
                                            default: break;
                                            }
                                            var v810= l5.value;
                                            for (var i = nargs-1; i>=1; i--)
                                                v810 = {car: arguments[i+2], cdr: v810};
                                            return (v792 = v811);
                                        });
                                        var args = [pv, 0];
                                        return (function(){
                                            var values = mv;
                                            var vs;
                                            vs = l292.fvalue(values, 1, v788);
                                            if (typeof vs === 'object' && 'multiple-value' in vs)
                                                args = args.concat(vs);
                                            else
                                                args.push(vs);
                                            args[1] = args.length-2;
                                            return func.apply(window, args);
                                        })();
                                    })();
                                })();
                            }return l5.value;
                        })();
                    })();
                    return v791;
                })(l118,l292.fvalue(pv, 1, v788),l5.value);
            })();
        });
        func.fname = 'READ-ESCAPED-UNTIL';
        return func;
    })();
    return l297;
})();
var l298 = (new Symbol(make_lisp_string("SKIP-WHITESPACES-AND-COMMENTS")));
(function(){
    (l298).fvalue = (function(){
        var func = (function (values,nargs,v812){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v814){
                    l295.fvalue(pv, 1, v812);
                    (v814 = l292.fvalue(pv, 1, v812));
                    return (function(){
                        return (function(){
                            while((v814 !== l5.value ? l62.fvalue(pv, 2, v814, ";") : l5.value) !== l5.value){
                                l296.fvalue(pv, 2, v812, (function (values,nargs,v816){
                                    checkArgs(nargs, 1);
                                    return l62.fvalue(values, 2, v816, "\n");
                                }));
                                l295.fvalue(pv, 1, v812);
                                (v814 = l292.fvalue(pv, 1, v812));
                            }return l5.value;
                        })();
                    })();
                })(l5.value);
            })();
        });
        func.fname = 'SKIP-WHITESPACES-AND-COMMENTS';
        return func;
    })();
    return l298;
})();
var l299 = (new Symbol(make_lisp_string("DISCARD-CHAR")));
var l300 = make_lisp_string("End of file when character ~S was expected.");
var l301 = make_lisp_string("Character ~S was found but ~S was expected.");
(function(){
    (l299).fvalue = (function(){
        var func = (function (values,nargs,v817,v818){
            checkArgs(nargs, 2);
            return (function(){
                return (function(v820){
                    (l42.fvalue(pv, 1, v820) !== l5.value ? l81.fvalue(pv, 2, l300, v818) : l5.value);
                    return (l62.fvalue(pv, 2, v820, v818) !== l5.value ? l5.value : l81.fvalue(values, 3, l301, v820, v818));
                })(l293.fvalue(pv, 1, v817));
            })();
        });
        func.fname = 'DISCARD-CHAR';
        return func;
    })();
    return l299;
})();
var l302 = (new Symbol(make_lisp_string("%READ-LIST")));
var l303 = make_lisp_string("Unspected EOF");
var l304 = (new Symbol(make_lisp_string("LS-READ")));
var l305 = make_lisp_string("Multiple objects following . in a list");
var l306 = make_lisp_string(".");
var l307 = (new Symbol(make_lisp_string("INTERPRET-TOKEN")));
(function(){
    (l302).fvalue = (function(){
        var func = (function (values,nargs,v821){
            checkArgs(nargs, 1);
            return (function(){
                l298.fvalue(pv, 1, v821);
                return (function(v823){
                    return (function(v824){
                        return (v824 !== l5.value ? l81.fvalue(values, 1, l303) : (function(v825){
                            return (v825 !== l5.value ? (function(){
                                l299.fvalue(pv, 2, v821, ")");
                                return l5.value;
                            })() : (function(){
                                var v826 = l15.fvalue(pv, 0);
                                var v827 = l304.fvalue(pv, 3, v821, l5.value, v826);
                                l298.fvalue(pv, 1, v821);
                                return (function(v828){
                                    return (v828 !== l5.value ? l299.fvalue(values, 2, v821, ")") : ({car: v827, cdr: (l62.fvalue(pv, 2, l292.fvalue(pv, 1, v821), ".") !== l5.value ? (function(){
                                        l299.fvalue(pv, 2, v821, ".");
                                        return (l211.fvalue(pv, 1, l292.fvalue(pv, 1, v821)) !== l5.value ? (function(v829){
                                            l298.fvalue(pv, 1, v821);
                                            (function(v830){
                                                return ((function(v831){
                                                    return (v831 !== l5.value ? v831 : l62.fvalue(pv, 2, ")", v830));
                                                })(l42.fvalue(pv, 1, v830)) !== l5.value ? l299.fvalue(pv, 2, v821, ")") : l81.fvalue(pv, 1, l305));
                                            })(l292.fvalue(pv, 1, v821));
                                            return v829;
                                        })(l304.fvalue(pv, 1, v821)) : (function(v832){
                                            return ({car: l307.fvalue(pv, 1, v832), cdr: l302.fvalue(pv, 1, v821)});
                                        })(l117.fvalue(pv, 2, l306, l297.fvalue(pv, 2, v821, (function(){
                                            var symbol = l211;
                                            var func = symbol.fvalue;
                                            if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                                            return func;
                                        })()))));
                                    })() : l302.fvalue(pv, 1, v821))}));
                                })(((v827 === v826)?l4.value: l5.value));
                            })());
                        })(l62.fvalue(pv, 2, v823, ")")));
                    })(l42.fvalue(pv, 1, v823));
                })(l292.fvalue(pv, 1, v821));
            })();
        });
        func.fname = '%READ-LIST';
        return func;
    })();
    return l302;
})();
var l308 = (new Symbol(make_lisp_string("READ-STRING")));
var l309 = make_lisp_string("Unexpected EOF");
(function(){
    (l308).fvalue = (function(){
        var func = (function (values,nargs,v833){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v835,v836){
                    (v836 = l293.fvalue(pv, 1, v833));
                    (function(){
                        return (function(){
                            while(l27.fvalue(pv, 1, l26.fvalue(pv, 2, v836, "\"")) !== l5.value){
                                (l42.fvalue(pv, 1, v836) !== l5.value ? l81.fvalue(pv, 1, l309) : l5.value);
                                (l26.fvalue(pv, 2, v836, "\\") !== l5.value ? (v836 = l293.fvalue(pv, 1, v833)) : l5.value);
                                (v835 = l117.fvalue(pv, 2, v835, l135.fvalue(pv, 1, v836)));
                                (v836 = l293.fvalue(pv, 1, v833));
                            }return l5.value;
                        })();
                    })();
                    return v835;
                })(l118,l5.value);
            })();
        });
        func.fname = 'READ-STRING';
        return func;
    })();
    return l308;
})();
var l310 = (new Symbol(make_lisp_string("READ-SHARP")));
var l311 = (new Symbol(make_lisp_string("STRING-UPCASE-NOESCAPED")));
var l312 = (new Symbol(make_lisp_string("UNESCAPE-TOKEN")));
var l313 = make_lisp_string("tab");
var l314 = make_lisp_string("Invalid feature ~S");
var l315 = (new Symbol(make_lisp_string("COMMON-LISP"), make_lisp_string("KEYWORD")));
var l316 = (new Symbol(make_lisp_string("JSCL"), make_lisp_string("KEYWORD")));
var l317 = (new Symbol(make_lisp_string("NIL"), make_lisp_string("KEYWORD")));
(function(){
    (l310).fvalue = (function(){
        var func = (function (values,nargs,v838,v839,v840){
            checkArgsAtLeast(nargs, 1);
            checkArgsAtMost(nargs, 3);
            switch(nargs){
            case 1:
                v839=l5.value;
            case 2:
                v840=l5.value;
            default: break;
            }
            return (function(){
                l293.fvalue(pv, 1, v838);
                return (function(v842){
                    return (function(v843){
                        return (function(v844){
                            return (v844 !== l5.value ? l104.fvalue(values, 2, l94, l304.fvalue(pv, 1, v838)) : (function(v845){
                                return (v845 !== l5.value ? l120.fvalue(values, 1, l302.fvalue(pv, 1, v838)) : (function(v846){
                                    return (v846 !== l5.value ? (new Symbol(l312.fvalue(pv, 1, l311.fvalue(pv, 1, l297.fvalue(pv, 2, v838, (function(){
                                        var symbol = l211;
                                        var func = symbol.fvalue;
                                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                                        return func;
                                    })()))))) : (function(v847){
                                        return (v847 !== l5.value ? (function(v848){
                                            return (function(v849){
                                                return (v849 !== l5.value ? " " : (function(v850){
                                                    return (v850 !== l5.value ? "	" : (function(v851){
                                                        return (v851 !== l5.value ? "\n" : v848[0]);
                                                    })(l88.fvalue(pv, 2, v848, l233)));
                                                })(l88.fvalue(pv, 2, v848, l313)));
                                            })(l88.fvalue(pv, 2, v848, l234));
                                        })(l117.fvalue(pv, 2, l135.fvalue(pv, 1, l293.fvalue(pv, 1, v838)), l296.fvalue(pv, 2, v838, (function(){
                                            var symbol = l211;
                                            var func = symbol.fvalue;
                                            if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                                            return func;
                                        })()))) : (function(v852){
                                            return (v852 !== l5.value ? (function(v854){
                                                return (function(v855){
                                                    return (function(v856){
                                                        return (function(v857){
                                                            return (v857 !== l5.value ? (function(){
                                                                l304.fvalue(pv, 1, v838);
                                                                return l304.fvalue(values, 3, v838, v839, v840);
                                                            })() : (function(v858){
                                                                return (v858 !== l5.value ? l304.fvalue(values, 3, v838, v839, v840) : (function(v859){
                                                                    return (v859 !== l5.value ? (function(){
                                                                        l304.fvalue(pv, 1, v838);
                                                                        return l304.fvalue(values, 3, v838, v839, v840);
                                                                    })() : l81.fvalue(values, 2, l99, v855));
                                                                })(l26.fvalue(pv, 2, v856, l317)));
                                                            })(l26.fvalue(pv, 2, v856, l316)));
                                                        })(l26.fvalue(pv, 2, v856, l315));
                                                    })(v855);
                                                })(v854);
                                            })((function(v853){
                                                (((v853 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l5.value : l81.fvalue(pv, 2, l314, v853));
                                                return l283.fvalue(pv, 2, l135.fvalue(pv, 1, v853), l227);
                                            })(l304.fvalue(pv, 1, v838))) : l81.fvalue(values, 2, l99, v842));
                                        })(l26.fvalue(pv, 2, v843, "+")));
                                    })(l26.fvalue(pv, 2, v843, "\\")));
                                })(l26.fvalue(pv, 2, v843, ":")));
                            })(l26.fvalue(pv, 2, v843, "(")));
                        })(l26.fvalue(pv, 2, v843, "'"));
                    })(v842);
                })(l293.fvalue(pv, 1, v838));
            })();
        });
        func.fname = 'READ-SHARP';
        return func;
    })();
    return l310;
})();
(function(){
    (l312).fvalue = (function(){
        var func = (function (values,nargs,v860){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v862){
                    (function(){
                        return (function(v864,v865){
                            (function(){
                                while((function(){
                                    var x1 = v864;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v865;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return (x1<x2?l4.value: l5.value);
                                })() !== l5.value){
                                    (function(){
                                        (l62.fvalue(pv, 2, v860[v864], "\\") !== l5.value ? l5.value : (v862 = l117.fvalue(pv, 2, v862, l135.fvalue(pv, 1, v860[v864]))));
                                        return l5.value;
                                    })();
                                    (function(){
                                        var v866 = 1;
                                        var v867 = (function(){
                                            var x1 = v864;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v866;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return x1+x2;
                                        })();
                                        return (v864 = v867);
                                    })();
                                }return l5.value;
                            })();
                            return l5.value;
                        })(0,l52.fvalue(pv, 1, v860));
                    })();
                    return v862;
                })(l118);
            })();
        });
        func.fname = 'UNESCAPE-TOKEN';
        return func;
    })();
    return l312;
})();
(function(){
    (l311).fvalue = (function(){
        var func = (function (values,nargs,v868){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v870,v871){
                    (function(){
                        return (function(v873,v874){
                            (function(){
                                while((function(){
                                    var x1 = v873;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v874;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return (x1<x2?l4.value: l5.value);
                                })() !== l5.value){
                                    (function(){
                                        (function(v875){
                                            return (v871 !== l5.value ? (function(){
                                                (function(){
                                                    return (function(){
                                                        var func = (function (values,nargs,v877){
                                                            switch(nargs){
                                                            case 0:
                                                                v877=l5.value;
                                                            default: break;
                                                            }
                                                            var v876= l5.value;
                                                            for (var i = nargs-1; i>=1; i--)
                                                                v876 = {car: arguments[i+2], cdr: v876};
                                                            return (v871 = v877);
                                                        });
                                                        var args = [pv, 0];
                                                        return (function(){
                                                            var values = mv;
                                                            var vs;
                                                            vs = l5.value;
                                                            if (typeof vs === 'object' && 'multiple-value' in vs)
                                                                args = args.concat(vs);
                                                            else
                                                                args.push(vs);
                                                            args[1] = args.length-2;
                                                            return func.apply(window, args);
                                                        })();
                                                    })();
                                                })();
                                                return (function(){
                                                    return (function(){
                                                        var func = (function (values,nargs,v879){
                                                            switch(nargs){
                                                            case 0:
                                                                v879=l5.value;
                                                            default: break;
                                                            }
                                                            var v878= l5.value;
                                                            for (var i = nargs-1; i>=1; i--)
                                                                v878 = {car: arguments[i+2], cdr: v878};
                                                            return (v870 = v879);
                                                        });
                                                        var args = [pv, 0];
                                                        return (function(){
                                                            var values = mv;
                                                            var vs;
                                                            vs = l117.fvalue(values, 2, v870, l135.fvalue(pv, 1, v875));
                                                            if (typeof vs === 'object' && 'multiple-value' in vs)
                                                                args = args.concat(vs);
                                                            else
                                                                args.push(vs);
                                                            args[1] = args.length-2;
                                                            return func.apply(window, args);
                                                        })();
                                                    })();
                                                })();
                                            })() : (l62.fvalue(pv, 2, v875, "\\") !== l5.value ? (function(){
                                                return (function(){
                                                    var func = (function (values,nargs,v881){
                                                        switch(nargs){
                                                        case 0:
                                                            v881=l5.value;
                                                        default: break;
                                                        }
                                                        var v880= l5.value;
                                                        for (var i = nargs-1; i>=1; i--)
                                                            v880 = {car: arguments[i+2], cdr: v880};
                                                        return (v871 = v881);
                                                    });
                                                    var args = [pv, 0];
                                                    return (function(){
                                                        var values = mv;
                                                        var vs;
                                                        vs = l4.value;
                                                        if (typeof vs === 'object' && 'multiple-value' in vs)
                                                            args = args.concat(vs);
                                                        else
                                                            args.push(vs);
                                                        args[1] = args.length-2;
                                                        return func.apply(window, args);
                                                    })();
                                                })();
                                            })() : (function(){
                                                return (function(){
                                                    var func = (function (values,nargs,v883){
                                                        switch(nargs){
                                                        case 0:
                                                            v883=l5.value;
                                                        default: break;
                                                        }
                                                        var v882= l5.value;
                                                        for (var i = nargs-1; i>=1; i--)
                                                            v882 = {car: arguments[i+2], cdr: v882};
                                                        return (v870 = v883);
                                                    });
                                                    var args = [pv, 0];
                                                    return (function(){
                                                        var values = mv;
                                                        var vs;
                                                        vs = l117.fvalue(values, 2, v870, make_lisp_string(xstring(l135.fvalue(pv, 1, v875)).toUpperCase()));
                                                        if (typeof vs === 'object' && 'multiple-value' in vs)
                                                            args = args.concat(vs);
                                                        else
                                                            args.push(vs);
                                                        args[1] = args.length-2;
                                                        return func.apply(window, args);
                                                    })();
                                                })();
                                            })()));
                                        })(v868[v873]);
                                        return l5.value;
                                    })();
                                    (function(){
                                        var v884 = 1;
                                        var v885 = (function(){
                                            var x1 = v873;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v884;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return x1+x2;
                                        })();
                                        return (v873 = v885);
                                    })();
                                }return l5.value;
                            })();
                            return l5.value;
                        })(0,l52.fvalue(pv, 1, v868));
                    })();
                    return v870;
                })(l118,l5.value);
            })();
        });
        func.fname = 'STRING-UPCASE-NOESCAPED';
        return func;
    })();
    return l311;
})();
var l318 = (new Symbol(make_lisp_string("READ-SYMBOL")));
var l319 = make_lisp_string("The symbol `~S' is not external in the package ~S.");
(function(){
    (l318).fvalue = (function(){
        var func = (function (values,nargs,v886){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v888,v889,v890,v891,v892){
                    (v892 = 0);
                    (function(){
                        return (function(){
                            while(((function(){
                                var x1 = v892;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v888;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1<x2?l4.value: l5.value);
                            })() !== l5.value ? l27.fvalue(pv, 1, l62.fvalue(pv, 2, v886[v892], ":")) : l5.value) !== l5.value){
                                (l62.fvalue(pv, 2, v886[v892], "\\") !== l5.value ? (function(){
                                    var v894 = 1;
                                    var v895 = (function(){
                                        var x1 = v892;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = v894;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1+x2;
                                    })();
                                    return (v892 = v895);
                                })() : l5.value);
                                (function(){
                                    var v896 = 1;
                                    var v897 = (function(){
                                        var x1 = v892;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = v896;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1+x2;
                                    })();
                                    return (v892 = v897);
                                })();
                            }return l5.value;
                        })();
                    })();
                    (function(v898){
                        return (v898 !== l5.value ? (function(){
                            (v890 = v886);
                            (v889 = (function(){
                                var symbol = l275;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })());
                            return (v891 = l4.value);
                        })() : (function(){
                            (l24.fvalue(pv, 1, v892) !== l5.value ? (v889 = l227) : (v889 = l311.fvalue(pv, 1, l75.fvalue(pv, 3, v886, 0, v892))));
                            (function(){
                                var v899 = 1;
                                var v900 = (function(){
                                    var x1 = v892;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v899;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })();
                                return (v892 = v900);
                            })();
                            (l62.fvalue(pv, 2, v886[v892], ":") !== l5.value ? (function(){
                                (v891 = l4.value);
                                return (function(){
                                    var v901 = 1;
                                    var v902 = (function(){
                                        var x1 = v892;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = v901;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1+x2;
                                    })();
                                    return (v892 = v902);
                                })();
                            })() : l5.value);
                            return (v890 = l75.fvalue(pv, 2, v886, v892));
                        })());
                    })((function(){
                        var x1 = v892;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v888;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1==x2?l4.value: l5.value);
                    })());
                    (v890 = (l87.fvalue(pv, 2, v889, l286) !== l5.value ? (v890 = l312.fvalue(pv, 1, v890)) : (v890 = l311.fvalue(pv, 1, v890))));
                    (v889 = l228.fvalue(pv, 1, v889));
                    return ((function(v903){
                        return (v903 !== l5.value ? v903 : (function(v904){
                            return (v904 !== l5.value ? v904 : ((v889 === l228.fvalue(pv, 1, l286))?l4.value: l5.value));
                        })(((v889 === l228.fvalue(pv, 1, l227))?l4.value: l5.value)));
                    })(v891) !== l5.value ? l283.fvalue(values, 2, v890, v889) : (function(){
                        var func = (function (values,nargs,v906,v907){
                            switch(nargs){
                            case 0:
                                v906=l5.value;
                            case 1:
                                v907=l5.value;
                            default: break;
                            }
                            var v905= l5.value;
                            for (var i = nargs-1; i>=2; i--)
                                v905 = {car: arguments[i+2], cdr: v905};
                            return (((v907 === l280.value)?l4.value: l5.value) !== l5.value ? v906 : l81.fvalue(values, 3, l319, v890, v889));
                        });
                        var args = [values, 0];
                        return (function(){
                            var values = mv;
                            var vs;
                            vs = l224.fvalue(values, 2, v890, v889);
                            if (typeof vs === 'object' && 'multiple-value' in vs)
                                args = args.concat(vs);
                            else
                                args.push(vs);
                            args[1] = args.length-2;
                            return func.apply(window, args);
                        })();
                    })());
                })(l52.fvalue(pv, 1, v886),l5.value,l5.value,l5.value,l5.value);
            })();
        });
        func.fname = 'READ-SYMBOL';
        return func;
    })();
    return l318;
})();
var l320 = (new Symbol(make_lisp_string("READ-INTEGER")));
(function(){
    (l320).fvalue = (function(){
        var func = (function (values,nargs,v908){
            checkArgs(nargs, 1);
            return (function(){
                try {
                var v909 = [];
                    return (function(v910,v911,v912){
                        (function(){
                            return (function(v914,v915){
                                (function(){
                                    while((function(){
                                        var x1 = v914;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = v915;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return (x1<x2?l4.value: l5.value);
                                    })() !== l5.value){
                                        (function(){
                                            (function(v916){
                                                return (function(v917){
                                                    return (v917 !== l5.value ? (v911 = (function(){
                                                        var x1 = (function(){
                                                            var x1 = (function(v918){
                                                                return (v918 !== l5.value ? v918 : 0);
                                                            })(v911);
                                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                                            return x1*10;
                                                        })();
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = l72.fvalue(pv, 1, v916);
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })()) : (function(v919){
                                                        return (v919 !== l5.value ? (function(v920){
                                                            return (function(v921){
                                                                return (v921 !== l5.value ? l5.value : (function(v922){
                                                                    return (v922 !== l5.value ? (v910 = -1) : (function(){
                                                                        var values = mv;
                                                                        throw ({type: 'block', id: v909, values: l5.value, message: 'Return from unknown block READ-INTEGER.'})
                                                                    })());
                                                                })(l26.fvalue(pv, 2, v920, "-")));
                                                            })(l26.fvalue(pv, 2, v920, "+"));
                                                        })(v916) : (function(v923){
                                                            return (v923 !== l5.value ? l5.value : (function(){
                                                                var values = mv;
                                                                throw ({type: 'block', id: v909, values: l5.value, message: 'Return from unknown block READ-INTEGER.'})
                                                            })());
                                                        })(((function(){
                                                            var x1 = v914;
                                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                                            var x2 = l23.fvalue(pv, 1, v912);
                                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                                            return (x1==x2?l4.value: l5.value);
                                                        })() !== l5.value ? l62.fvalue(pv, 2, v916, ".") : l5.value)));
                                                    })(l24.fvalue(pv, 1, v914)));
                                                })(l72.fvalue(pv, 1, v916));
                                            })(v908[v914]);
                                            return l5.value;
                                        })();
                                        (function(){
                                            var v924 = 1;
                                            var v925 = (function(){
                                                var x1 = v914;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v924;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })();
                                            return (v914 = v925);
                                        })();
                                    }return l5.value;
                                })();
                                return l5.value;
                            })(0,v912);
                        })();
                        return (v911 !== l5.value ? (function(){
                            var x1 = v910;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v911;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return x1*x2;
                        })() : l5.value);
                    })(1,l5.value,l52.fvalue(pv, 1, v908));
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == v909)
                        return values.apply(this, forcemv(cf.values));
                    else
                        throw cf;
                }
            })();
        });
        func.fname = 'READ-INTEGER';
        return func;
    })();
    return l320;
})();
var l321 = (new Symbol(make_lisp_string("READ-FLOAT")));
var l322 = make_lisp_string("ESFDL");
(function(){
    (l321).fvalue = (function(){
        var func = (function (values,nargs,v926){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    try {
                    var v928 = [];
                        return (function(v929,v930,v931,v932,v933,v934,v935,v936,v937){
                            (l24.fvalue(pv, 1, v936) !== l5.value ? (function(){
                                var values = mv;
                                throw ({type: 'block', id: v928, values: l5.value, message: 'Return from unknown block NIL.'})
                            })() : l5.value);
                            (function(v938){
                                return (function(v939){
                                    return (v939 !== l5.value ? (function(){
                                        var v940 = 1;
                                        var v941 = (function(){
                                            var x1 = v937;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v940;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return x1+x2;
                                        })();
                                        return (v937 = v941);
                                    })() : (function(v942){
                                        return (v942 !== l5.value ? (function(){
                                            (v929 = -1);
                                            return (function(){
                                                var v943 = 1;
                                                var v944 = (function(){
                                                    var x1 = v937;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = v943;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })();
                                                return (v937 = v944);
                                            })();
                                        })() : l5.value);
                                    })(l26.fvalue(pv, 2, v938, "-")));
                                })(l26.fvalue(pv, 2, v938, "+"));
                            })(v926[v937]);
                            ((function(){
                                var x1 = v937;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v936;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1<x2?l4.value: l5.value);
                            })() !== l5.value ? l5.value : (function(){
                                var values = mv;
                                throw ({type: 'block', id: v928, values: l5.value, message: 'Return from unknown block NIL.'})
                            })());
                            (function(v945){
                                return (v945 !== l5.value ? (function(){
                                    (v930 = l4.value);
                                    return (function(){
                                        return (function(){
                                            while(((function(){
                                                var x1 = v937;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v936;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return (x1<x2?l4.value: l5.value);
                                            })() !== l5.value ? (v945 = l72.fvalue(pv, 1, v926[v937])) : l5.value) !== l5.value){
                                                (v932 = (function(){
                                                    var x1 = (function(){
                                                        var x1 = v932;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        return x1*10;
                                                    })();
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = v945;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })());
                                                (function(){
                                                    var v947 = 1;
                                                    var v948 = (function(){
                                                        var x1 = v937;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = v947;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })();
                                                    return (v937 = v948);
                                                })();
                                            }return l5.value;
                                        })();
                                    })();
                                })() : l5.value);
                            })(l72.fvalue(pv, 1, v926[v937]));
                            ((function(){
                                var x1 = v937;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v936;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1<x2?l4.value: l5.value);
                            })() !== l5.value ? l5.value : (function(){
                                var values = mv;
                                throw ({type: 'block', id: v928, values: l5.value, message: 'Return from unknown block NIL.'})
                            })());
                            ((function(v949){
                                return (v949 !== l5.value ? v949 : l62.fvalue(pv, 2, ".", v926[v937]));
                            })(v930) !== l5.value ? l5.value : (function(){
                                var values = mv;
                                throw ({type: 'block', id: v928, values: l5.value, message: 'Return from unknown block NIL.'})
                            })());
                            (l62.fvalue(pv, 2, ".", v926[v937]) !== l5.value ? (function(){
                                (function(){
                                    var v950 = 1;
                                    var v951 = (function(){
                                        var x1 = v937;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = v950;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1+x2;
                                    })();
                                    return (v937 = v951);
                                })();
                                ((function(){
                                    var x1 = v937;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v936;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return (x1<x2?l4.value: l5.value);
                                })() !== l5.value ? l5.value : (function(){
                                    var values = mv;
                                    throw ({type: 'block', id: v928, values: l5.value, message: 'Return from unknown block NIL.'})
                                })());
                                return (function(v952){
                                    return (v952 !== l5.value ? (function(){
                                        (v931 = l4.value);
                                        return (function(){
                                            return (function(){
                                                while(((function(){
                                                    var x1 = v937;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = v936;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return (x1<x2?l4.value: l5.value);
                                                })() !== l5.value ? (v952 = l72.fvalue(pv, 1, v926[v937])) : l5.value) !== l5.value){
                                                    (v932 = (function(){
                                                        var x1 = (function(){
                                                            var x1 = v932;
                                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                                            return x1*10;
                                                        })();
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = v952;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })());
                                                    (v933 = (function(){
                                                        var x1 = v933;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        return x1*10;
                                                    })());
                                                    (function(){
                                                        var v954 = 1;
                                                        var v955 = (function(){
                                                            var x1 = v937;
                                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                                            var x2 = v954;
                                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                                            return x1+x2;
                                                        })();
                                                        return (v937 = v955);
                                                    })();
                                                }return l5.value;
                                            })();
                                        })();
                                    })() : l5.value);
                                })(l72.fvalue(pv, 1, v926[v937]));
                            })() : l5.value);
                            ((function(v956){
                                return (v956 !== l5.value ? v956 : v931);
                            })(v930) !== l5.value ? l5.value : (function(){
                                var values = mv;
                                throw ({type: 'block', id: v928, values: l5.value, message: 'Return from unknown block NIL.'})
                            })());
                            (((function(){
                                var x1 = v937;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v936;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1==x2?l4.value: l5.value);
                            })() !== l5.value ? l27.fvalue(pv, 1, v931) : l5.value) !== l5.value ? (function(){
                                var values = mv;
                                throw ({type: 'block', id: v928, values: l5.value, message: 'Return from unknown block NIL.'})
                            })() : l5.value);
                            ((function(){
                                var x1 = v937;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v936;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1<x2?l4.value: l5.value);
                            })() !== l5.value ? (function(){
                                (l77.fvalue(pv, 2, v926[v937].toUpperCase(), l322) !== l5.value ? l5.value : (function(){
                                    var values = mv;
                                    throw ({type: 'block', id: v928, values: l5.value, message: 'Return from unknown block NIL.'})
                                })());
                                (function(){
                                    var v957 = 1;
                                    var v958 = (function(){
                                        var x1 = v937;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = v957;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1+x2;
                                    })();
                                    return (v937 = v958);
                                })();
                                ((function(){
                                    var x1 = v937;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v936;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return (x1<x2?l4.value: l5.value);
                                })() !== l5.value ? l5.value : (function(){
                                    var values = mv;
                                    throw ({type: 'block', id: v928, values: l5.value, message: 'Return from unknown block NIL.'})
                                })());
                                (function(v959){
                                    return (function(v960){
                                        return (v960 !== l5.value ? (function(){
                                            var v961 = 1;
                                            var v962 = (function(){
                                                var x1 = v937;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v961;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })();
                                            return (v937 = v962);
                                        })() : (function(v963){
                                            return (v963 !== l5.value ? (function(){
                                                (v934 = -1);
                                                return (function(){
                                                    var v964 = 1;
                                                    var v965 = (function(){
                                                        var x1 = v937;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = v964;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })();
                                                    return (v937 = v965);
                                                })();
                                            })() : l5.value);
                                        })(l26.fvalue(pv, 2, v959, "-")));
                                    })(l26.fvalue(pv, 2, v959, "+"));
                                })(v926[v937]);
                                ((function(){
                                    var x1 = v937;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v936;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return (x1<x2?l4.value: l5.value);
                                })() !== l5.value ? l5.value : (function(){
                                    var values = mv;
                                    throw ({type: 'block', id: v928, values: l5.value, message: 'Return from unknown block NIL.'})
                                })());
                                return (function(v966){
                                    (v966 !== l5.value ? l5.value : (function(){
                                        var values = mv;
                                        throw ({type: 'block', id: v928, values: l5.value, message: 'Return from unknown block NIL.'})
                                    })());
                                    return (function(){
                                        return (function(){
                                            while(((function(){
                                                var x1 = v937;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v936;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return (x1<x2?l4.value: l5.value);
                                            })() !== l5.value ? (v966 = l72.fvalue(pv, 1, v926[v937])) : l5.value) !== l5.value){
                                                (v935 = (function(){
                                                    var x1 = (function(){
                                                        var x1 = v935;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        return x1*10;
                                                    })();
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = v966;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })());
                                                (function(){
                                                    var v968 = 1;
                                                    var v969 = (function(){
                                                        var x1 = v937;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = v968;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })();
                                                    return (v937 = v969);
                                                })();
                                            }return l5.value;
                                        })();
                                    })();
                                })(l72.fvalue(pv, 1, v926[v937]));
                            })() : l5.value);
                            ((function(){
                                var x1 = v937;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v936;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1==x2?l4.value: l5.value);
                            })() !== l5.value ? l5.value : (function(){
                                var values = mv;
                                throw ({type: 'block', id: v928, values: l5.value, message: 'Return from unknown block NIL.'})
                            })());
                            return (function(){
                                var x1 = (function(){
                                    var x1 = v929;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = (function(){
                                        var x = 10.0;
                                        var y = (function(){
                                            var x1 = v934;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v935;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return x1*x2;
                                        })();
                                        if (typeof x != 'number')
                                            throw 'The value ' + x + ' is not a type number.';
                                        if (typeof y != 'number')
                                            throw 'The value ' + y + ' is not a type number.';
                                        return Math.pow(x, y);
                                    })();
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    var x3 = v932;
                                    if (typeof x3 !== 'number') throw 'Not a number!';
                                    return x1*x2*x3;
                                })();
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v933;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1/x2;
                            })();
                        })(1,l5.value,l5.value,0,1,1,0,l52.fvalue(pv, 1, v926),0);
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == v928)
                            return values.apply(this, forcemv(cf.values));
                        else
                            throw cf;
                    }
                })();
            })();
        });
        func.fname = 'READ-FLOAT';
        return func;
    })();
    return l321;
})();
var l323 = (new Symbol(make_lisp_string("!PARSE-INTEGER")));
(function(){
    (l323).fvalue = (function(){
        var func = (function (values,nargs,v970,v971){
            checkArgs(nargs, 2);
            return (function(){
                return (function(){
                    try {
                    var v973 = [];
                        return (function(v974,v975,v976,v977){
                            (function(){
                                return (function(){
                                    while(((function(){
                                        var x1 = v975;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = v976;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return (x1<x2?l4.value: l5.value);
                                    })() !== l5.value ? l294.fvalue(pv, 1, v970[v975]) : l5.value) !== l5.value){
                                        (function(){
                                            var v979 = 1;
                                            var v980 = (function(){
                                                var x1 = v975;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v979;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })();
                                            return (v975 = v980);
                                        })();
                                    }return l5.value;
                                })();
                            })();
                            ((function(){
                                var x1 = v975;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v976;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1<x2?l4.value: l5.value);
                            })() !== l5.value ? l5.value : (function(){
                                var values = mv;
                                throw ({type: 'block', id: v973, values: values(l5.value, 0), message: 'Return from unknown block NIL.'})
                            })());
                            (function(v981){
                                return (function(v982){
                                    return (v982 !== l5.value ? (function(){
                                        var v983 = 1;
                                        var v984 = (function(){
                                            var x1 = v975;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v983;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return x1+x2;
                                        })();
                                        return (v975 = v984);
                                    })() : (function(v985){
                                        return (v985 !== l5.value ? (function(){
                                            (v977 = -1);
                                            return (function(){
                                                var v986 = 1;
                                                var v987 = (function(){
                                                    var x1 = v975;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = v986;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })();
                                                return (v975 = v987);
                                            })();
                                        })() : l5.value);
                                    })(l26.fvalue(pv, 2, v981, "-")));
                                })(l26.fvalue(pv, 2, v981, "+"));
                            })(v970[0]);
                            (((function(){
                                var x1 = v975;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v976;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1<x2?l4.value: l5.value);
                            })() !== l5.value ? (v974 = l72.fvalue(pv, 1, v970[v975])) : l5.value) !== l5.value ? l5.value : (function(){
                                var values = mv;
                                throw ({type: 'block', id: v973, values: values(l5.value, v975), message: 'Return from unknown block NIL.'})
                            })());
                            (function(){
                                var v988 = 1;
                                var v989 = (function(){
                                    var x1 = v975;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v988;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })();
                                return (v975 = v989);
                            })();
                            (function(){
                                try {
                                var v990 = [];
                                    return (function(){
                                        while((function(){
                                            var x1 = v975;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v976;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return (x1<x2?l4.value: l5.value);
                                        })() !== l5.value){
                                            (function(v991){
                                                (v991 !== l5.value ? l5.value : (function(){
                                                    throw ({type: 'block', id: v990, values: l5.value, message: 'Return from unknown block NIL.'})
                                                })());
                                                (v974 = (function(){
                                                    var x1 = (function(){
                                                        var x1 = v974;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        return x1*10;
                                                    })();
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = v991;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })());
                                                return (function(){
                                                    var v992 = 1;
                                                    var v993 = (function(){
                                                        var x1 = v975;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = v992;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })();
                                                    return (v975 = v993);
                                                })();
                                            })(l72.fvalue(pv, 1, v970[v975]));
                                        }return l5.value;
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == v990)
                                        return cf.values;
                                    else
                                        throw cf;
                                }
                            })();
                            (function(){
                                return (function(v995){
                                    return (function(){
                                        try {
                                        var v996 = [];
                                            return (function(){
                                                while(l4.value !== l5.value){
                                                    ((function(v997){
                                                        return (v997 !== l5.value ? v997 : l27.fvalue(pv, 1, l294.fvalue(pv, 1, v970[v995])));
                                                    })((function(){
                                                        var x1 = v995;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = v976;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return (x1==x2?l4.value: l5.value);
                                                    })()) !== l5.value ? (function(){
                                                        throw ({type: 'block', id: v996, values: ((function(){
                                                            var x1 = v995;
                                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                                            var x2 = v976;
                                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                                            return (x1==x2?l4.value: l5.value);
                                                        })() !== l5.value ? (v975 = v995) : l5.value), message: 'Return from unknown block NIL.'})
                                                    })() : l5.value);
                                                    l5.value;
                                                    (function(v998){
                                                        return (v995 = v998);
                                                    })(l22.fvalue(pv, 1, v995));
                                                }return l5.value;
                                            })();
                                        }
                                        catch (cf){
                                            if (cf.type == 'block' && cf.id == v996)
                                                return cf.values;
                                            else
                                                throw cf;
                                        }
                                    })();
                                })(v975);
                            })();
                            return ((function(v999){
                                return (v999 !== l5.value ? v999 : (function(){
                                    var x1 = v975;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v976;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return (x1==x2?l4.value: l5.value);
                                })());
                            })(v971) !== l5.value ? values((function(){
                                var x1 = v977;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v974;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1*x2;
                            })(), v975) : values(l5.value, v975));
                        })(0,0,l52.fvalue(pv, 1, v970),1);
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == v973)
                            return values.apply(this, forcemv(cf.values));
                        else
                            throw cf;
                    }
                })();
            })();
        });
        func.fname = '!PARSE-INTEGER';
        return func;
    })();
    return l323;
})();
var l324 = (new Symbol(make_lisp_string("PARSE-INTEGER")));
var l325 = (new Symbol(make_lisp_string("JUNK-ALLOWED"), make_lisp_string("KEYWORD")));
var l326 = make_lisp_string("Junk detected.");
(function(){
    (l324).fvalue = (function(){
        var func = (function (values,nargs,v1000){
            checkArgsAtLeast(nargs, 1);
            var v1001; 
            var i;
            for (i=1; i<nargs; i+=2){
                if (arguments[i+2] === l325.value){
                    v1001 = arguments[i+3];
                    break;
                }
            }
            if (i == nargs){
                v1001 = l5.value;
            }
            for (i=1; i<nargs; i+=2){
                if (arguments[i+2] !== l325.value)
                    throw 'Unknown keyword argument ' + xstring(arguments[i].name);
            }
            return (function(){
                return (function(){
                    var func = (function (values,nargs,v1004,v1005){
                        switch(nargs){
                        case 0:
                            v1004=l5.value;
                        case 1:
                            v1005=l5.value;
                        default: break;
                        }
                        var v1003= l5.value;
                        for (var i = nargs-1; i>=2; i--)
                            v1003 = {car: arguments[i+2], cdr: v1003};
                        return (v1004 !== l5.value ? values(v1004, v1005) : l81.fvalue(values, 1, l326));
                    });
                    var args = [values, 0];
                    return (function(){
                        var values = mv;
                        var vs;
                        vs = l323.fvalue(values, 2, v1000, v1001);
                        if (typeof vs === 'object' && 'multiple-value' in vs)
                            args = args.concat(vs);
                        else
                            args.push(vs);
                        args[1] = args.length-2;
                        return func.apply(window, args);
                    })();
                })();
            })();
        });
        func.fname = 'PARSE-INTEGER';
        return func;
    })();
    return l324;
})();
(function(){
    (l307).fvalue = (function(){
        var func = (function (values,nargs,v1006){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1008){
                    return (v1008 !== l5.value ? v1008 : (function(v1009){
                        return (v1009 !== l5.value ? v1009 : l318.fvalue(values, 1, v1006));
                    })(l321.fvalue(pv, 1, v1006)));
                })(l320.fvalue(pv, 1, v1006));
            })();
        });
        func.fname = 'INTERPRET-TOKEN';
        return func;
    })();
    return l307;
})();
var l327 = make_lisp_string("End of file");
var l328 = (new Symbol(make_lisp_string("QUOTE")));
var l329 = (new Symbol(make_lisp_string("BACKQUOTE")));
var l330 = (new Symbol(make_lisp_string("UNQUOTE-SPLICING")));
var l331 = (new Symbol(make_lisp_string("UNQUOTE")));
(function(){
    (l304).fvalue = (function(){
        var func = (function (values,nargs,v1010,v1011,v1012){
            checkArgsAtLeast(nargs, 1);
            checkArgsAtMost(nargs, 3);
            switch(nargs){
            case 1:
                v1011=l4.value;
            case 2:
                v1012=l5.value;
            default: break;
            }
            return (function(){
                l298.fvalue(pv, 1, v1010);
                return (function(v1014){
                    return (function(v1016){
                        return (v1016 !== l5.value ? (v1011 !== l5.value ? l81.fvalue(values, 1, l327) : v1012) : (function(v1017){
                            return (v1017 !== l5.value ? (function(){
                                l293.fvalue(pv, 1, v1010);
                                return l302.fvalue(values, 1, v1010);
                            })() : (function(v1018){
                                return (v1018 !== l5.value ? (function(){
                                    l293.fvalue(pv, 1, v1010);
                                    return l104.fvalue(values, 2, l328, l304.fvalue(pv, 1, v1010));
                                })() : (function(v1019){
                                    return (v1019 !== l5.value ? (function(){
                                        l293.fvalue(pv, 1, v1010);
                                        return l104.fvalue(values, 2, l329, l304.fvalue(pv, 1, v1010));
                                    })() : (function(v1020){
                                        return (v1020 !== l5.value ? (function(){
                                            l293.fvalue(pv, 1, v1010);
                                            return l308.fvalue(values, 1, v1010);
                                        })() : (function(v1021){
                                            return (v1021 !== l5.value ? (function(){
                                                l293.fvalue(pv, 1, v1010);
                                                return (l26.fvalue(pv, 2, l292.fvalue(pv, 1, v1010), "@") !== l5.value ? (function(){
                                                    l293.fvalue(pv, 1, v1010);
                                                    return l104.fvalue(values, 2, l330, l304.fvalue(pv, 1, v1010));
                                                })() : l104.fvalue(values, 2, l331, l304.fvalue(pv, 1, v1010)));
                                            })() : (function(v1022){
                                                return (v1022 !== l5.value ? l310.fvalue(values, 1, v1010) : (function(v1023){
                                                    return l307.fvalue(values, 1, v1023);
                                                })(l297.fvalue(pv, 2, v1010, (function(){
                                                    var symbol = l211;
                                                    var func = symbol.fvalue;
                                                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                                                    return func;
                                                })())));
                                            })(l62.fvalue(pv, 2, v1014, "#")));
                                        })(l62.fvalue(pv, 2, v1014, ",")));
                                    })(l62.fvalue(pv, 2, v1014, "\"")));
                                })(l62.fvalue(pv, 2, v1014, "`")));
                            })(l62.fvalue(pv, 2, v1014, "'")));
                        })(l62.fvalue(pv, 2, v1014, "(")));
                    })((function(v1015){
                        return (v1015 !== l5.value ? v1015 : l62.fvalue(pv, 2, v1014, ")"));
                    })(l42.fvalue(pv, 1, v1014)));
                })(l292.fvalue(pv, 1, v1010));
            })();
        });
        func.fname = 'LS-READ';
        return func;
    })();
    return l304;
})();
var l332 = (new Symbol(make_lisp_string("LS-READ-FROM-STRING")));
(function(){
    (l332).fvalue = (function(){
        var func = (function (values,nargs,v1024,v1025,v1026){
            checkArgsAtLeast(nargs, 1);
            checkArgsAtMost(nargs, 3);
            switch(nargs){
            case 1:
                v1025=l4.value;
            case 2:
                v1026=l5.value;
            default: break;
            }
            return (function(){
                return l304.fvalue(values, 3, l291.fvalue(pv, 1, v1024), v1025, v1026);
            })();
        });
        func.fname = 'LS-READ-FROM-STRING';
        return func;
    })();
    return l332;
})();
var l333 = (new Symbol(make_lisp_string("READ-FROM-STRING")));
(function(){
    (l333).fvalue = (function(){
        var func = (function (values,nargs,v1028,v1029,v1030){
            checkArgsAtLeast(nargs, 1);
            checkArgsAtMost(nargs, 3);
            switch(nargs){
            case 1:
                v1029=l4.value;
            case 2:
                v1030=l5.value;
            default: break;
            }
            return (function(){
                return l332.fvalue(values, 3, v1028, v1029, v1030);
            })();
        });
        func.fname = 'READ-FROM-STRING';
        return func;
    })();
    return l333;
})();
var l334 = (new Symbol(make_lisp_string("CODE")));
var l335 = make_lisp_string("Unknown argument `~S'.");
(function(){
    (l334).fvalue = (function(){
        var func = (function (values,nargs){
            var v1032= l5.value;
            for (var i = nargs-1; i>=0; i--)
                v1032 = {car: arguments[i+2], cdr: v1032};
            return (function(){
                return l129.fvalue(values, 2, (function (values,nargs,v1034){
                    checkArgs(nargs, 1);
                    return (function(v1035){
                        return (v1035 !== l5.value ? l118 : (function(v1036){
                            return (v1036 !== l5.value ? l17.fvalue(values, 1, v1034) : (function(v1037){
                                return (v1037 !== l5.value ? (function(){
                                    var x = v1034;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    return make_lisp_string(x.toString());
                                })() : (function(v1038){
                                    return (v1038 !== l5.value ? v1034 : l81.fvalue(values, 2, l335, v1034));
                                })(((function(){
                                    var x = v1034;
                                    return typeof(x) == 'object' && 'length' in x && x.type == 'character';
                                })()?l4.value: l5.value)));
                            })(l64.fvalue(pv, 1, v1034)));
                        })(l63.fvalue(pv, 1, v1034)));
                    })(l42.fvalue(pv, 1, v1034));
                }), v1032);
            })();
        });
        func.fname = 'CODE';
        return func;
    })();
    return l334;
})();
var l336 = (new Symbol(make_lisp_string("JS!BOOL")));
var l337 = make_lisp_string("?");
var l338 = (new Symbol(make_lisp_string("LS-COMPILE")));
var l339 = make_lisp_string(": ");
(function(){
    (l336).fvalue = (function(){
        var func = (function (values,nargs,v1039){
            checkArgs(nargs, 1);
            return (function(){
                return l334.fvalue(values, 7, l241, v1039, l337, l338.fvalue(pv, 1, l4.value), l339, l338.fvalue(pv, 1, l5.value), l244);
            })();
        });
        func.fname = 'JS!BOOL';
        return func;
    })();
    return l336;
})();
var l340 = (new Symbol(make_lisp_string("JS!SELFCALL")));
l340;
var l341 = (new Symbol(make_lisp_string("INDENT")));
var l342 = make_lisp_string("    ");
(function(){
    (l341).fvalue = (function(){
        var func = (function (values,nargs){
            var v1041= l5.value;
            for (var i = nargs-1; i>=0; i--)
                v1041 = {car: arguments[i+2], cdr: v1041};
            return (function(){
                return (function(v1043){
                    return (function(v1044,v1045,v1046){
                        (l65.fvalue(pv, 1, l52.fvalue(pv, 1, v1043)) !== l5.value ? (v1044 = l117.fvalue(pv, 2, v1044, l342)) : l5.value);
                        (function(){
                            return (function(){
                                while((function(){
                                    var x1 = v1045;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v1046;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return (x1<x2?l4.value: l5.value);
                                })() !== l5.value){
                                    (function(v1048){
                                        return (v1044 = l117.fvalue(pv, 2, v1044, v1048));
                                    })(((l62.fvalue(pv, 2, v1043[v1045], "\n") !== l5.value ? ((function(){
                                        var x1 = v1045;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = l23.fvalue(pv, 1, v1046);
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return (x1<x2?l4.value: l5.value);
                                    })() !== l5.value ? l27.fvalue(pv, 1, l62.fvalue(pv, 2, v1043[l22.fvalue(pv, 1, v1045)], "\n")) : l5.value) : l5.value) !== l5.value ? l117.fvalue(pv, 2, l135.fvalue(pv, 1, "\n"), l342) : l135.fvalue(pv, 1, v1043[v1045])));
                                    (function(){
                                        var v1049 = 1;
                                        var v1050 = (function(){
                                            var x1 = v1045;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v1049;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return x1+x2;
                                        })();
                                        return (v1045 = v1050);
                                    })();
                                }return l5.value;
                            })();
                        })();
                        return v1044;
                    })(l118,0,l52.fvalue(pv, 1, v1043));
                })((function(){
                    var f = (function(){
                        var symbol = l334;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })();
                    var args = [pv, 0];
                    var tail = (v1041);
                    while (tail != l5.value){
                        args.push(tail.car);
                        args[1] += 1;
                        tail = tail.cdr;
                    }
                    return (typeof f === 'function'? f : f.fvalue).apply(this, args);
                })());
            })();
        });
        func.fname = 'INDENT';
        return func;
    })();
    return l341;
})();
var l343 = (new Symbol(make_lisp_string("*MULTIPLE-VALUE-P*")));
(function(){
    (((l343.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l343).value = l5.value));
    return l343;
})();
var l344 = (new Symbol(make_lisp_string("DEF!STRUCT")));
l344;
var l345 = (new Symbol(make_lisp_string("MAKE-BINDING")));
var l346 = (new Symbol(make_lisp_string("NAME"), make_lisp_string("KEYWORD")));
var l347 = (new Symbol(make_lisp_string("TYPE"), make_lisp_string("KEYWORD")));
var l348 = (new Symbol(make_lisp_string("VALUE"), make_lisp_string("KEYWORD")));
var l349 = (new Symbol(make_lisp_string("DECLARATIONS"), make_lisp_string("KEYWORD")));
var l350 = (new Symbol(make_lisp_string("BINDING")));
var l351 = (new Symbol(make_lisp_string("BINDING-P")));
var l352 = (new Symbol(make_lisp_string("COPY-BINDING")));
var l353 = (new Symbol(make_lisp_string("BINDING-NAME")));
var l354 = make_lisp_string("The object `~S' is not of type `~S'");
var l355 = make_lisp_string("BINDING");
var l356 = (new Symbol(make_lisp_string("BINDING-TYPE")));
var l357 = (new Symbol(make_lisp_string("BINDING-VALUE")));
var l358 = (new Symbol(make_lisp_string("BINDING-DECLARATIONS")));
(function(){
    (function(){
        (l345).fvalue = (function(){
            var func = (function (values,nargs){
                var v1051; 
                var v1052; 
                var v1053; 
                var v1054; 
                var i;
                for (i=0; i<nargs; i+=2){
                    if (arguments[i+2] === l346.value){
                        v1051 = arguments[i+3];
                        break;
                    }
                }
                if (i == nargs){
                    v1051 = l5.value;
                }
                for (i=0; i<nargs; i+=2){
                    if (arguments[i+2] === l347.value){
                        v1052 = arguments[i+3];
                        break;
                    }
                }
                if (i == nargs){
                    v1052 = l5.value;
                }
                for (i=0; i<nargs; i+=2){
                    if (arguments[i+2] === l348.value){
                        v1053 = arguments[i+3];
                        break;
                    }
                }
                if (i == nargs){
                    v1053 = l5.value;
                }
                for (i=0; i<nargs; i+=2){
                    if (arguments[i+2] === l349.value){
                        v1054 = arguments[i+3];
                        break;
                    }
                }
                if (i == nargs){
                    v1054 = l5.value;
                }
                for (i=0; i<nargs; i+=2){
                    if (arguments[i+2] !== l346.value && arguments[i+2] !== l347.value && arguments[i+2] !== l348.value && arguments[i+2] !== l349.value)
                        throw 'Unknown keyword argument ' + xstring(arguments[i].name);
                }
                return (function(){
                    return l104.fvalue(values, 5, l350, v1051, v1052, v1053, v1054);
                })();
            });
            func.fname = 'MAKE-BINDING';
            return func;
        })();
        return l345;
    })();
    (function(){
        (l351).fvalue = (function(){
            var func = (function (values,nargs,v1056){
                checkArgs(nargs, 1);
                return (function(){
                    return (((function(){
                        var tmp = v1056;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l5.value) !== l5.value ? (((function(){
                        var tmp = v1056;
                        return tmp === l5.value? l5.value: tmp.car;
                    })() === l350)?l4.value: l5.value) : l5.value);
                })();
            });
            func.fname = 'BINDING-P';
            return func;
        })();
        return l351;
    })();
    (function(){
        (l352).fvalue = (function(){
            var func = (function (values,nargs,v1058){
                checkArgs(nargs, 1);
                return (function(){
                    return l185.fvalue(values, 1, v1058);
                })();
            });
            func.fname = 'COPY-BINDING';
            return func;
        })();
        return l352;
    })();
    (function(){
        (l353).fvalue = (function(){
            var func = (function (values,nargs,v1060){
                checkArgs(nargs, 1);
                return (function(){
                    (l351.fvalue(pv, 1, v1060) !== l5.value ? l5.value : l81.fvalue(pv, 3, l354, v1060, l355));
                    return l161.fvalue(values, 2, 1, v1060);
                })();
            });
            func.fname = 'BINDING-NAME';
            return func;
        })();
        return l353;
    })();
    (function(){
        (function(){
            var v1062 = ({car: l353, cdr: (function (values,nargs,v1063){
                checkArgs(nargs, 1);
                return (function(v1064,v1065){
                    return values(l104.fvalue(pv, 1, v1064), l104.fvalue(pv, 1, v1063), l104.fvalue(pv, 1, v1065), l104.fvalue(pv, 3, l200, l104.fvalue(pv, 3, l201, l104.fvalue(pv, 3, l160, 1, v1064), v1065), v1065), l104.fvalue(pv, 2, l353, v1064));
                })(l15.fvalue(pv, 0),l15.fvalue(pv, 0));
            })});
            var v1066 = ({car: v1062, cdr: (function(){
                var symbol = l102;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()});
            return ((l102).value = v1066);
        })();
        return l353;
    })();
    (function(){
        (l356).fvalue = (function(){
            var func = (function (values,nargs,v1067){
                checkArgs(nargs, 1);
                return (function(){
                    (l351.fvalue(pv, 1, v1067) !== l5.value ? l5.value : l81.fvalue(pv, 3, l354, v1067, l355));
                    return l161.fvalue(values, 2, 2, v1067);
                })();
            });
            func.fname = 'BINDING-TYPE';
            return func;
        })();
        return l356;
    })();
    (function(){
        (function(){
            var v1069 = ({car: l356, cdr: (function (values,nargs,v1070){
                checkArgs(nargs, 1);
                return (function(v1071,v1072){
                    return values(l104.fvalue(pv, 1, v1071), l104.fvalue(pv, 1, v1070), l104.fvalue(pv, 1, v1072), l104.fvalue(pv, 3, l200, l104.fvalue(pv, 3, l201, l104.fvalue(pv, 3, l160, 2, v1071), v1072), v1072), l104.fvalue(pv, 2, l356, v1071));
                })(l15.fvalue(pv, 0),l15.fvalue(pv, 0));
            })});
            var v1073 = ({car: v1069, cdr: (function(){
                var symbol = l102;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()});
            return ((l102).value = v1073);
        })();
        return l356;
    })();
    (function(){
        (l357).fvalue = (function(){
            var func = (function (values,nargs,v1074){
                checkArgs(nargs, 1);
                return (function(){
                    (l351.fvalue(pv, 1, v1074) !== l5.value ? l5.value : l81.fvalue(pv, 3, l354, v1074, l355));
                    return l161.fvalue(values, 2, 3, v1074);
                })();
            });
            func.fname = 'BINDING-VALUE';
            return func;
        })();
        return l357;
    })();
    (function(){
        (function(){
            var v1076 = ({car: l357, cdr: (function (values,nargs,v1077){
                checkArgs(nargs, 1);
                return (function(v1078,v1079){
                    return values(l104.fvalue(pv, 1, v1078), l104.fvalue(pv, 1, v1077), l104.fvalue(pv, 1, v1079), l104.fvalue(pv, 3, l200, l104.fvalue(pv, 3, l201, l104.fvalue(pv, 3, l160, 3, v1078), v1079), v1079), l104.fvalue(pv, 2, l357, v1078));
                })(l15.fvalue(pv, 0),l15.fvalue(pv, 0));
            })});
            var v1080 = ({car: v1076, cdr: (function(){
                var symbol = l102;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()});
            return ((l102).value = v1080);
        })();
        return l357;
    })();
    (function(){
        (l358).fvalue = (function(){
            var func = (function (values,nargs,v1081){
                checkArgs(nargs, 1);
                return (function(){
                    (l351.fvalue(pv, 1, v1081) !== l5.value ? l5.value : l81.fvalue(pv, 3, l354, v1081, l355));
                    return l161.fvalue(values, 2, 4, v1081);
                })();
            });
            func.fname = 'BINDING-DECLARATIONS';
            return func;
        })();
        return l358;
    })();
    (function(){
        (function(){
            var v1083 = ({car: l358, cdr: (function (values,nargs,v1084){
                checkArgs(nargs, 1);
                return (function(v1085,v1086){
                    return values(l104.fvalue(pv, 1, v1085), l104.fvalue(pv, 1, v1084), l104.fvalue(pv, 1, v1086), l104.fvalue(pv, 3, l200, l104.fvalue(pv, 3, l201, l104.fvalue(pv, 3, l160, 4, v1085), v1086), v1086), l104.fvalue(pv, 2, l358, v1085));
                })(l15.fvalue(pv, 0),l15.fvalue(pv, 0));
            })});
            var v1087 = ({car: v1083, cdr: (function(){
                var symbol = l102;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()});
            return ((l102).value = v1087);
        })();
        return l358;
    })();
    return l350;
})();
var l359 = (new Symbol(make_lisp_string("MAKE-LEXENV")));
var l360 = (new Symbol(make_lisp_string("VARIABLE"), make_lisp_string("KEYWORD")));
var l361 = (new Symbol(make_lisp_string("FUNCTION"), make_lisp_string("KEYWORD")));
var l362 = (new Symbol(make_lisp_string("BLOCK"), make_lisp_string("KEYWORD")));
var l363 = (new Symbol(make_lisp_string("GOTAG"), make_lisp_string("KEYWORD")));
var l364 = (new Symbol(make_lisp_string("LEXENV")));
var l365 = (new Symbol(make_lisp_string("LEXENV-P")));
var l366 = (new Symbol(make_lisp_string("COPY-LEXENV")));
var l367 = (new Symbol(make_lisp_string("LEXENV-VARIABLE")));
var l368 = make_lisp_string("LEXENV");
var l369 = (new Symbol(make_lisp_string("LEXENV-FUNCTION")));
var l370 = (new Symbol(make_lisp_string("LEXENV-BLOCK")));
var l371 = (new Symbol(make_lisp_string("LEXENV-GOTAG")));
(function(){
    (function(){
        (l359).fvalue = (function(){
            var func = (function (values,nargs){
                var v1088; 
                var v1089; 
                var v1090; 
                var v1091; 
                var i;
                for (i=0; i<nargs; i+=2){
                    if (arguments[i+2] === l360.value){
                        v1088 = arguments[i+3];
                        break;
                    }
                }
                if (i == nargs){
                    v1088 = l5.value;
                }
                for (i=0; i<nargs; i+=2){
                    if (arguments[i+2] === l361.value){
                        v1089 = arguments[i+3];
                        break;
                    }
                }
                if (i == nargs){
                    v1089 = l5.value;
                }
                for (i=0; i<nargs; i+=2){
                    if (arguments[i+2] === l362.value){
                        v1090 = arguments[i+3];
                        break;
                    }
                }
                if (i == nargs){
                    v1090 = l5.value;
                }
                for (i=0; i<nargs; i+=2){
                    if (arguments[i+2] === l363.value){
                        v1091 = arguments[i+3];
                        break;
                    }
                }
                if (i == nargs){
                    v1091 = l5.value;
                }
                for (i=0; i<nargs; i+=2){
                    if (arguments[i+2] !== l360.value && arguments[i+2] !== l361.value && arguments[i+2] !== l362.value && arguments[i+2] !== l363.value)
                        throw 'Unknown keyword argument ' + xstring(arguments[i].name);
                }
                return (function(){
                    return l104.fvalue(values, 5, l364, v1088, v1089, v1090, v1091);
                })();
            });
            func.fname = 'MAKE-LEXENV';
            return func;
        })();
        return l359;
    })();
    (function(){
        (l365).fvalue = (function(){
            var func = (function (values,nargs,v1093){
                checkArgs(nargs, 1);
                return (function(){
                    return (((function(){
                        var tmp = v1093;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l5.value) !== l5.value ? (((function(){
                        var tmp = v1093;
                        return tmp === l5.value? l5.value: tmp.car;
                    })() === l364)?l4.value: l5.value) : l5.value);
                })();
            });
            func.fname = 'LEXENV-P';
            return func;
        })();
        return l365;
    })();
    (function(){
        (l366).fvalue = (function(){
            var func = (function (values,nargs,v1095){
                checkArgs(nargs, 1);
                return (function(){
                    return l185.fvalue(values, 1, v1095);
                })();
            });
            func.fname = 'COPY-LEXENV';
            return func;
        })();
        return l366;
    })();
    (function(){
        (l367).fvalue = (function(){
            var func = (function (values,nargs,v1097){
                checkArgs(nargs, 1);
                return (function(){
                    (l365.fvalue(pv, 1, v1097) !== l5.value ? l5.value : l81.fvalue(pv, 3, l354, v1097, l368));
                    return l161.fvalue(values, 2, 1, v1097);
                })();
            });
            func.fname = 'LEXENV-VARIABLE';
            return func;
        })();
        return l367;
    })();
    (function(){
        (function(){
            var v1099 = ({car: l367, cdr: (function (values,nargs,v1100){
                checkArgs(nargs, 1);
                return (function(v1101,v1102){
                    return values(l104.fvalue(pv, 1, v1101), l104.fvalue(pv, 1, v1100), l104.fvalue(pv, 1, v1102), l104.fvalue(pv, 3, l200, l104.fvalue(pv, 3, l201, l104.fvalue(pv, 3, l160, 1, v1101), v1102), v1102), l104.fvalue(pv, 2, l367, v1101));
                })(l15.fvalue(pv, 0),l15.fvalue(pv, 0));
            })});
            var v1103 = ({car: v1099, cdr: (function(){
                var symbol = l102;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()});
            return ((l102).value = v1103);
        })();
        return l367;
    })();
    (function(){
        (l369).fvalue = (function(){
            var func = (function (values,nargs,v1104){
                checkArgs(nargs, 1);
                return (function(){
                    (l365.fvalue(pv, 1, v1104) !== l5.value ? l5.value : l81.fvalue(pv, 3, l354, v1104, l368));
                    return l161.fvalue(values, 2, 2, v1104);
                })();
            });
            func.fname = 'LEXENV-FUNCTION';
            return func;
        })();
        return l369;
    })();
    (function(){
        (function(){
            var v1106 = ({car: l369, cdr: (function (values,nargs,v1107){
                checkArgs(nargs, 1);
                return (function(v1108,v1109){
                    return values(l104.fvalue(pv, 1, v1108), l104.fvalue(pv, 1, v1107), l104.fvalue(pv, 1, v1109), l104.fvalue(pv, 3, l200, l104.fvalue(pv, 3, l201, l104.fvalue(pv, 3, l160, 2, v1108), v1109), v1109), l104.fvalue(pv, 2, l369, v1108));
                })(l15.fvalue(pv, 0),l15.fvalue(pv, 0));
            })});
            var v1110 = ({car: v1106, cdr: (function(){
                var symbol = l102;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()});
            return ((l102).value = v1110);
        })();
        return l369;
    })();
    (function(){
        (l370).fvalue = (function(){
            var func = (function (values,nargs,v1111){
                checkArgs(nargs, 1);
                return (function(){
                    (l365.fvalue(pv, 1, v1111) !== l5.value ? l5.value : l81.fvalue(pv, 3, l354, v1111, l368));
                    return l161.fvalue(values, 2, 3, v1111);
                })();
            });
            func.fname = 'LEXENV-BLOCK';
            return func;
        })();
        return l370;
    })();
    (function(){
        (function(){
            var v1113 = ({car: l370, cdr: (function (values,nargs,v1114){
                checkArgs(nargs, 1);
                return (function(v1115,v1116){
                    return values(l104.fvalue(pv, 1, v1115), l104.fvalue(pv, 1, v1114), l104.fvalue(pv, 1, v1116), l104.fvalue(pv, 3, l200, l104.fvalue(pv, 3, l201, l104.fvalue(pv, 3, l160, 3, v1115), v1116), v1116), l104.fvalue(pv, 2, l370, v1115));
                })(l15.fvalue(pv, 0),l15.fvalue(pv, 0));
            })});
            var v1117 = ({car: v1113, cdr: (function(){
                var symbol = l102;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()});
            return ((l102).value = v1117);
        })();
        return l370;
    })();
    (function(){
        (l371).fvalue = (function(){
            var func = (function (values,nargs,v1118){
                checkArgs(nargs, 1);
                return (function(){
                    (l365.fvalue(pv, 1, v1118) !== l5.value ? l5.value : l81.fvalue(pv, 3, l354, v1118, l368));
                    return l161.fvalue(values, 2, 4, v1118);
                })();
            });
            func.fname = 'LEXENV-GOTAG';
            return func;
        })();
        return l371;
    })();
    (function(){
        (function(){
            var v1120 = ({car: l371, cdr: (function (values,nargs,v1121){
                checkArgs(nargs, 1);
                return (function(v1122,v1123){
                    return values(l104.fvalue(pv, 1, v1122), l104.fvalue(pv, 1, v1121), l104.fvalue(pv, 1, v1123), l104.fvalue(pv, 3, l200, l104.fvalue(pv, 3, l201, l104.fvalue(pv, 3, l160, 4, v1122), v1123), v1123), l104.fvalue(pv, 2, l371, v1122));
                })(l15.fvalue(pv, 0),l15.fvalue(pv, 0));
            })});
            var v1124 = ({car: v1120, cdr: (function(){
                var symbol = l102;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()});
            return ((l102).value = v1124);
        })();
        return l371;
    })();
    return l364;
})();
var l372 = (new Symbol(make_lisp_string("LOOKUP-IN-LEXENV")));
var l373 = (new Symbol(make_lisp_string("BLOCK")));
var l374 = (new Symbol(make_lisp_string("GOTAG")));
(function(){
    (l372).fvalue = (function(){
        var func = (function (values,nargs,v1125,v1126,v1127){
            checkArgs(nargs, 3);
            return (function(){
                return l77.fvalue(values, 4, v1125, (function(v1129){
                    return (function(v1130){
                        return (function(v1131){
                            return (v1131 !== l5.value ? l367.fvalue(pv, 1, v1126) : (function(v1132){
                                return (v1132 !== l5.value ? l369.fvalue(pv, 1, v1126) : (function(v1133){
                                    return (v1133 !== l5.value ? l370.fvalue(pv, 1, v1126) : (function(v1134){
                                        return (v1134 !== l5.value ? l371.fvalue(pv, 1, v1126) : l81.fvalue(pv, 2, l99, v1129));
                                    })(l26.fvalue(pv, 2, v1130, l374)));
                                })(l26.fvalue(pv, 2, v1130, l373)));
                            })(l26.fvalue(pv, 2, v1130, l94)));
                        })(l26.fvalue(pv, 2, v1130, l96));
                    })(v1129);
                })(v1127), l78.value, (function(){
                    var symbol = l353;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })());
            })();
        });
        func.fname = 'LOOKUP-IN-LEXENV';
        return func;
    })();
    return l372;
})();
var l375 = (new Symbol(make_lisp_string("PUSH-TO-LEXENV")));
(function(){
    (l375).fvalue = (function(){
        var func = (function (values,nargs,v1135,v1136,v1137){
            checkArgs(nargs, 3);
            return (function(){
                return (function(v1139){
                    return (function(v1140){
                        return (function(v1141){
                            return (v1141 !== l5.value ? (function(){
                                var v1142 = v1135;
                                var v1143 = v1136;
                                var v1144 = ({car: v1142, cdr: l367.fvalue(pv, 1, v1143)});
                                return (function(){
                                    (function(){
                                        var x = l160.fvalue(pv, 2, 1, v1143);
                                        if (typeof x != 'object')
                                            throw 'The value ' + x + ' is not a type object.';
                                        return (x.car = v1144, x);
                                    })();
                                    return v1144;
                                })();
                            })() : (function(v1145){
                                return (v1145 !== l5.value ? (function(){
                                    var v1146 = v1135;
                                    var v1147 = v1136;
                                    var v1148 = ({car: v1146, cdr: l369.fvalue(pv, 1, v1147)});
                                    return (function(){
                                        (function(){
                                            var x = l160.fvalue(pv, 2, 2, v1147);
                                            if (typeof x != 'object')
                                                throw 'The value ' + x + ' is not a type object.';
                                            return (x.car = v1148, x);
                                        })();
                                        return v1148;
                                    })();
                                })() : (function(v1149){
                                    return (v1149 !== l5.value ? (function(){
                                        var v1150 = v1135;
                                        var v1151 = v1136;
                                        var v1152 = ({car: v1150, cdr: l370.fvalue(pv, 1, v1151)});
                                        return (function(){
                                            (function(){
                                                var x = l160.fvalue(pv, 2, 3, v1151);
                                                if (typeof x != 'object')
                                                    throw 'The value ' + x + ' is not a type object.';
                                                return (x.car = v1152, x);
                                            })();
                                            return v1152;
                                        })();
                                    })() : (function(v1153){
                                        return (v1153 !== l5.value ? (function(){
                                            var v1154 = v1135;
                                            var v1155 = v1136;
                                            var v1156 = ({car: v1154, cdr: l371.fvalue(pv, 1, v1155)});
                                            return (function(){
                                                (function(){
                                                    var x = l160.fvalue(pv, 2, 4, v1155);
                                                    if (typeof x != 'object')
                                                        throw 'The value ' + x + ' is not a type object.';
                                                    return (x.car = v1156, x);
                                                })();
                                                return v1156;
                                            })();
                                        })() : l81.fvalue(values, 2, l99, v1139));
                                    })(l26.fvalue(pv, 2, v1140, l374)));
                                })(l26.fvalue(pv, 2, v1140, l373)));
                            })(l26.fvalue(pv, 2, v1140, l94)));
                        })(l26.fvalue(pv, 2, v1140, l96));
                    })(v1139);
                })(v1137);
            })();
        });
        func.fname = 'PUSH-TO-LEXENV';
        return func;
    })();
    return l375;
})();
var l376 = (new Symbol(make_lisp_string("EXTEND-LEXENV")));
(function(){
    (l376).fvalue = (function(){
        var func = (function (values,nargs,v1157,v1158,v1159){
            checkArgs(nargs, 3);
            return (function(){
                return (function(v1161){
                    return (function(){
                        return (function(v1163,v1164){
                            (function(){
                                while(v1163 !== l5.value){
                                    (v1164 = (function(){
                                        var tmp = v1163;
                                        return tmp === l5.value? l5.value: tmp.car;
                                    })());
                                    (function(){
                                        l375.fvalue(pv, 3, v1164, v1161, v1159);
                                        return l5.value;
                                    })();
                                    (v1163 = (function(){
                                        var tmp = v1163;
                                        return tmp === l5.value? l5.value: tmp.cdr;
                                    })());
                                }return l5.value;
                            })();
                            return v1161;
                        })(l47.fvalue(pv, 1, v1157),l5.value);
                    })();
                })(l366.fvalue(pv, 1, v1158));
            })();
        });
        func.fname = 'EXTEND-LEXENV';
        return func;
    })();
    return l376;
})();
var l377 = (new Symbol(make_lisp_string("*ENVIRONMENT*")));
(function(){
    (((l377.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l377).value = l359.fvalue(pv, 0)));
    return l377;
})();
var l378 = (new Symbol(make_lisp_string("*VARIABLE-COUNTER*")));
(function(){
    (((l378.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l378).value = 0));
    return l378;
})();
var l379 = (new Symbol(make_lisp_string("GVARNAME")));
var l380 = make_lisp_string("v");
(function(){
    (l379).fvalue = (function(){
        var func = (function (values,nargs,v1165){
            checkArgs(nargs, 1);
            return (function(){
                return l334.fvalue(values, 2, l380, (function(){
                    var v1167 = 1;
                    var v1168 = (function(){
                        var x1 = (function(){
                            var symbol = l378;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v1167;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l378).value = v1168);
                })());
            })();
        });
        func.fname = 'GVARNAME';
        return func;
    })();
    return l379;
})();
var l381 = (new Symbol(make_lisp_string("TRANSLATE-VARIABLE")));
(function(){
    (l381).fvalue = (function(){
        var func = (function (values,nargs,v1169){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1171){
                    return (v1171 !== l5.value ? l357.fvalue(values, 1, v1171) : l5.value);
                })(l372.fvalue(pv, 3, v1169, (function(){
                    var symbol = l377;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l96));
            })();
        });
        func.fname = 'TRANSLATE-VARIABLE';
        return func;
    })();
    return l381;
})();
var l382 = (new Symbol(make_lisp_string("EXTEND-LOCAL-ENV")));
(function(){
    (l382).fvalue = (function(){
        var func = (function (values,nargs,v1172){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1174){
                    return (function(){
                        return (function(v1176,v1177){
                            (function(){
                                while(v1176 !== l5.value){
                                    (v1177 = (function(){
                                        var tmp = v1176;
                                        return tmp === l5.value? l5.value: tmp.car;
                                    })());
                                    (function(){
                                        (function(v1178){
                                            return l375.fvalue(pv, 3, v1178, v1174, l96);
                                        })(l345.fvalue(pv, 6, l346.value, v1177, l347.value, l96, l348.value, l379.fvalue(pv, 1, v1177)));
                                        return l5.value;
                                    })();
                                    (v1176 = (function(){
                                        var tmp = v1176;
                                        return tmp === l5.value? l5.value: tmp.cdr;
                                    })());
                                }return l5.value;
                            })();
                            return v1174;
                        })(v1172,l5.value);
                    })();
                })(l366.fvalue(pv, 1, (function(){
                    var symbol = l377;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()));
            })();
        });
        func.fname = 'EXTEND-LOCAL-ENV';
        return func;
    })();
    return l382;
})();
var l383 = (new Symbol(make_lisp_string("*TOPLEVEL-COMPILATIONS*")));
(function(){
    (((l383.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l383).value = l5.value));
    return l383;
})();
var l384 = (new Symbol(make_lisp_string("TOPLEVEL-COMPILATION")));
(function(){
    (l384).fvalue = (function(){
        var func = (function (values,nargs,v1179){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var v1181 = v1179;
                    var v1182 = ({car: v1181, cdr: (function(){
                        var symbol = l383;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })()});
                    return ((l383).value = v1182);
                })();
            })();
        });
        func.fname = 'TOPLEVEL-COMPILATION';
        return func;
    })();
    return l384;
})();
var l385 = (new Symbol(make_lisp_string("NULL-OR-EMPTY-P")));
(function(){
    (l385).fvalue = (function(){
        var func = (function (values,nargs,v1183){
            checkArgs(nargs, 1);
            return (function(){
                return l24.fvalue(values, 1, l52.fvalue(pv, 1, v1183));
            })();
        });
        func.fname = 'NULL-OR-EMPTY-P';
        return func;
    })();
    return l385;
})();
var l386 = (new Symbol(make_lisp_string("GET-TOPLEVEL-COMPILATIONS")));
(function(){
    (l386).fvalue = (function(){
        var func = (function (values,nargs){
            checkArgsAtMost(nargs, 0);
            return (function(){
                return l47.fvalue(values, 1, l69.fvalue(pv, 2, (function(){
                    var symbol = l385;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })(), (function(){
                    var symbol = l383;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()));
            })();
        });
        func.fname = 'GET-TOPLEVEL-COMPILATIONS';
        return func;
    })();
    return l386;
})();
var l387 = (new Symbol(make_lisp_string("%COMPILE-DEFMACRO")));
var l388 = (new Symbol(make_lisp_string("MACRO")));
(function(){
    (l387).fvalue = (function(){
        var func = (function (values,nargs,v1186,v1187){
            checkArgs(nargs, 2);
            return (function(){
                l384.fvalue(pv, 1, l338.fvalue(pv, 1, l104.fvalue(pv, 2, l328, v1186)));
                (function(v1189){
                    return l375.fvalue(pv, 3, v1189, (function(){
                        var symbol = l377;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), l94);
                })(l345.fvalue(pv, 6, l346.value, v1186, l347.value, l388, l348.value, v1187));
                return v1186;
            })();
        });
        func.fname = '%COMPILE-DEFMACRO';
        return func;
    })();
    return l387;
})();
var l389 = (new Symbol(make_lisp_string("GLOBAL-BINDING")));
(function(){
    (l389).fvalue = (function(){
        var func = (function (values,nargs,v1190,v1191,v1192){
            checkArgs(nargs, 3);
            return (function(){
                return (function(v1194){
                    return (v1194 !== l5.value ? v1194 : (function(v1195){
                        l375.fvalue(pv, 3, v1195, (function(){
                            var symbol = l377;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), v1192);
                        return v1195;
                    })(l345.fvalue(pv, 6, l346.value, v1190, l347.value, v1191, l348.value, l5.value)));
                })(l372.fvalue(pv, 3, v1190, (function(){
                    var symbol = l377;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), v1192));
            })();
        });
        func.fname = 'GLOBAL-BINDING';
        return func;
    })();
    return l389;
})();
var l390 = (new Symbol(make_lisp_string("CLAIMP")));
(function(){
    (l390).fvalue = (function(){
        var func = (function (values,nargs,v1196,v1197,v1198){
            checkArgs(nargs, 3);
            return (function(){
                return (function(v1200){
                    return (v1200 !== l5.value ? l195.fvalue(values, 2, v1198, l358.fvalue(pv, 1, v1200)) : l5.value);
                })(l372.fvalue(pv, 3, v1196, (function(){
                    var symbol = l377;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), v1197));
            })();
        });
        func.fname = 'CLAIMP';
        return func;
    })();
    return l390;
})();
var l391 = (new Symbol(make_lisp_string("!PROCLAIM")));
var l392 = (new Symbol(make_lisp_string("SPECIAL")));
var l393 = (new Symbol(make_lisp_string("NOTINLINE")));
var l394 = (new Symbol(make_lisp_string("CONSTANT")));
(function(){
    (l391).fvalue = (function(){
        var func = (function (values,nargs,v1201){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1203){
                    return (function(v1204){
                        return (v1204 !== l5.value ? (function(){
                            return (function(v1206,v1207){
                                (function(){
                                    while(v1206 !== l5.value){
                                        (v1207 = (function(){
                                            var tmp = v1206;
                                            return tmp === l5.value? l5.value: tmp.car;
                                        })());
                                        (function(){
                                            (function(v1208){
                                                return (function(){
                                                    var v1209 = l392;
                                                    var v1210 = v1208;
                                                    var v1211 = ({car: v1209, cdr: l358.fvalue(pv, 1, v1210)});
                                                    return (function(){
                                                        (function(){
                                                            var x = l160.fvalue(pv, 2, 4, v1210);
                                                            if (typeof x != 'object')
                                                                throw 'The value ' + x + ' is not a type object.';
                                                            return (x.car = v1211, x);
                                                        })();
                                                        return v1211;
                                                    })();
                                                })();
                                            })(l389.fvalue(pv, 3, v1207, l96, l96));
                                            return l5.value;
                                        })();
                                        (v1206 = (function(){
                                            var tmp = v1206;
                                            return tmp === l5.value? l5.value: tmp.cdr;
                                        })());
                                    }return l5.value;
                                })();
                                return l5.value;
                            })((function(){
                                var tmp = v1201;
                                return tmp === l5.value? l5.value: tmp.cdr;
                            })(),l5.value);
                        })() : (function(v1212){
                            return (v1212 !== l5.value ? (function(){
                                return (function(v1214,v1215){
                                    (function(){
                                        while(v1214 !== l5.value){
                                            (v1215 = (function(){
                                                var tmp = v1214;
                                                return tmp === l5.value? l5.value: tmp.car;
                                            })());
                                            (function(){
                                                (function(v1216){
                                                    return (function(){
                                                        var v1217 = l393;
                                                        var v1218 = v1216;
                                                        var v1219 = ({car: v1217, cdr: l358.fvalue(pv, 1, v1218)});
                                                        return (function(){
                                                            (function(){
                                                                var x = l160.fvalue(pv, 2, 4, v1218);
                                                                if (typeof x != 'object')
                                                                    throw 'The value ' + x + ' is not a type object.';
                                                                return (x.car = v1219, x);
                                                            })();
                                                            return v1219;
                                                        })();
                                                    })();
                                                })(l389.fvalue(pv, 3, v1215, l94, l94));
                                                return l5.value;
                                            })();
                                            (v1214 = (function(){
                                                var tmp = v1214;
                                                return tmp === l5.value? l5.value: tmp.cdr;
                                            })());
                                        }return l5.value;
                                    })();
                                    return l5.value;
                                })((function(){
                                    var tmp = v1201;
                                    return tmp === l5.value? l5.value: tmp.cdr;
                                })(),l5.value);
                            })() : (function(v1220){
                                return (v1220 !== l5.value ? (function(){
                                    return (function(v1222,v1223){
                                        (function(){
                                            while(v1222 !== l5.value){
                                                (v1223 = (function(){
                                                    var tmp = v1222;
                                                    return tmp === l5.value? l5.value: tmp.car;
                                                })());
                                                (function(){
                                                    (function(v1224){
                                                        return (function(){
                                                            var v1225 = l394;
                                                            var v1226 = v1224;
                                                            var v1227 = ({car: v1225, cdr: l358.fvalue(pv, 1, v1226)});
                                                            return (function(){
                                                                (function(){
                                                                    var x = l160.fvalue(pv, 2, 4, v1226);
                                                                    if (typeof x != 'object')
                                                                        throw 'The value ' + x + ' is not a type object.';
                                                                    return (x.car = v1227, x);
                                                                })();
                                                                return v1227;
                                                            })();
                                                        })();
                                                    })(l389.fvalue(pv, 3, v1223, l96, l96));
                                                    return l5.value;
                                                })();
                                                (v1222 = (function(){
                                                    var tmp = v1222;
                                                    return tmp === l5.value? l5.value: tmp.cdr;
                                                })());
                                            }return l5.value;
                                        })();
                                        return l5.value;
                                    })((function(){
                                        var tmp = v1201;
                                        return tmp === l5.value? l5.value: tmp.cdr;
                                    })(),l5.value);
                                })() : l5.value);
                            })(l26.fvalue(pv, 2, v1203, l394)));
                        })(l26.fvalue(pv, 2, v1203, l393)));
                    })(l26.fvalue(pv, 2, v1203, l392));
                })((function(){
                    var tmp = v1201;
                    return tmp === l5.value? l5.value: tmp.car;
                })());
            })();
        });
        func.fname = '!PROCLAIM';
        return func;
    })();
    return l391;
})();
var l395 = (new Symbol(make_lisp_string("PROCLAIM")));
(l395).fvalue = (function(){
    var symbol = l391;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
    return func;
})();
(function(){
    (l290).fvalue = (function(){
        var func = (function (values,nargs,v1228,v1229){
            checkArgs(nargs, 2);
            return (function(){
                return (function(v1231){
                    l375.fvalue(pv, 3, v1231, (function(){
                        var symbol = l377;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), l96);
                    return v1228;
                })(l345.fvalue(pv, 6, l346.value, v1228, l347.value, l388, l348.value, v1229));
            })();
        });
        func.fname = '%DEFINE-SYMBOL-MACRO';
        return func;
    })();
    return l290;
})();
var l396 = (new Symbol(make_lisp_string("DEFINE-SYMBOL-MACRO")));
l396;
var l397 = (new Symbol(make_lisp_string("*COMPILATIONS*")));
(function(){
    (((l397.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l397).value = l5.value));
    return l397;
})();
var l398 = (new Symbol(make_lisp_string("DEFINE-COMPILATION")));
l398;
var l399 = (new Symbol(make_lisp_string("IF")));
var l400 = make_lisp_string(" !== ");
var l401 = make_lisp_string(" ? ");
var l402 = make_lisp_string(" : ");
(function(){
    var v1232 = l104.fvalue(pv, 2, l399, (function (values,nargs,v1233,v1234,v1235){
        checkArgs(nargs, 3);
        return (function(){
            return l334.fvalue(values, 9, l241, l338.fvalue(pv, 1, v1233), l400, l338.fvalue(pv, 1, l5.value), l401, l338.fvalue(pv, 2, v1234, (function(){
                var symbol = l343;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()), l402, l338.fvalue(pv, 2, v1235, (function(){
                var symbol = l343;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()), l244);
        })();
    }));
    var v1237 = ({car: v1232, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1237);
})();
var l403 = (new Symbol(make_lisp_string("*LL-KEYWORDS*")));
var l404 = (new Symbol(make_lisp_string("&OPTIONAL")));
var l405 = (new Symbol(make_lisp_string("&REST")));
var l406 = (new Symbol(make_lisp_string("&KEY")));
var l407 = QIList(l404,l405,l406,l5);
(function(){
    (((l403.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l403).value = l407));
    return l403;
})();
var l408 = (new Symbol(make_lisp_string("LIST-UNTIL-KEYWORD")));
(function(){
    (l408).fvalue = (function(){
        var func = (function (values,nargs,v1238){
            checkArgs(nargs, 1);
            return (function(){
                return ((function(v1240){
                    return (v1240 !== l5.value ? v1240 : l195.fvalue(pv, 2, (function(){
                        var tmp = v1238;
                        return tmp === l5.value? l5.value: tmp.car;
                    })(), (function(){
                        var symbol = l403;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })()));
                })(l42.fvalue(pv, 1, v1238)) !== l5.value ? l5.value : ({car: (function(){
                    var tmp = v1238;
                    return tmp === l5.value? l5.value: tmp.car;
                })(), cdr: l408.fvalue(pv, 1, (function(){
                    var tmp = v1238;
                    return tmp === l5.value? l5.value: tmp.cdr;
                })())}));
            })();
        });
        func.fname = 'LIST-UNTIL-KEYWORD';
        return func;
    })();
    return l408;
})();
var l409 = (new Symbol(make_lisp_string("LL-SECTION")));
(function(){
    (l409).fvalue = (function(){
        var func = (function (values,nargs,v1241,v1242){
            checkArgs(nargs, 2);
            return (function(){
                return l408.fvalue(values, 1, (function(){
                    var tmp = l195.fvalue(pv, 2, v1241, v1242);
                    return tmp === l5.value? l5.value: tmp.cdr;
                })());
            })();
        });
        func.fname = 'LL-SECTION';
        return func;
    })();
    return l409;
})();
var l410 = (new Symbol(make_lisp_string("LL-REQUIRED-ARGUMENTS")));
(function(){
    (l410).fvalue = (function(){
        var func = (function (values,nargs,v1244){
            checkArgs(nargs, 1);
            return (function(){
                return l408.fvalue(values, 1, v1244);
            })();
        });
        func.fname = 'LL-REQUIRED-ARGUMENTS';
        return func;
    })();
    return l410;
})();
var l411 = (new Symbol(make_lisp_string("LL-OPTIONAL-ARGUMENTS-CANONICAL")));
(function(){
    (l411).fvalue = (function(){
        var func = (function (values,nargs,v1246){
            checkArgs(nargs, 1);
            return (function(){
                return l130.fvalue(values, 2, (function(){
                    var symbol = l126;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })(), l409.fvalue(pv, 2, l404, v1246));
            })();
        });
        func.fname = 'LL-OPTIONAL-ARGUMENTS-CANONICAL';
        return func;
    })();
    return l411;
})();
var l412 = (new Symbol(make_lisp_string("LL-OPTIONAL-ARGUMENTS")));
(function(){
    (l412).fvalue = (function(){
        var func = (function (values,nargs,v1248){
            checkArgs(nargs, 1);
            return (function(){
                return l130.fvalue(values, 2, (function(){
                    var symbol = l141;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })(), l411.fvalue(pv, 1, v1248));
            })();
        });
        func.fname = 'LL-OPTIONAL-ARGUMENTS';
        return func;
    })();
    return l412;
})();
var l413 = (new Symbol(make_lisp_string("LL-REST-ARGUMENT")));
var l414 = make_lisp_string("Bad lambda-list `~S'.");
(function(){
    (l413).fvalue = (function(){
        var func = (function (values,nargs,v1250){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1252){
                    ((function(){
                        var tmp = v1252;
                        return tmp === l5.value? l5.value: tmp.cdr;
                    })() !== l5.value ? l81.fvalue(pv, 2, l414, v1250) : l5.value);
                    return (function(){
                        var tmp = v1252;
                        return tmp === l5.value? l5.value: tmp.car;
                    })();
                })(l409.fvalue(pv, 2, l405, v1250));
            })();
        });
        func.fname = 'LL-REST-ARGUMENT';
        return func;
    })();
    return l413;
})();
var l415 = (new Symbol(make_lisp_string("LL-KEYWORD-ARGUMENTS-CANONICAL")));
(function(){
    (l415).fvalue = (function(){
        var func = (function (values,nargs,v1253){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1258){
                    return l130.fvalue(values, 2, v1258, l409.fvalue(pv, 2, l406, v1253));
                })((function (values,nargs,v1255){
                    checkArgs(nargs, 1);
                    return (function(){
                        return (function(v1257){
                            return ({car: (l54.fvalue(pv, 1, (function(){
                                var tmp = v1257;
                                return tmp === l5.value? l5.value: tmp.car;
                            })()) !== l5.value ? (function(){
                                var tmp = v1257;
                                return tmp === l5.value? l5.value: tmp.car;
                            })() : l104.fvalue(pv, 2, l283.fvalue(pv, 2, ((function(){
                                var tmp = v1257;
                                return tmp === l5.value? l5.value: tmp.car;
                            })()).name, l227), (function(){
                                var tmp = v1257;
                                return tmp === l5.value? l5.value: tmp.car;
                            })())), cdr: (function(){
                                var tmp = v1257;
                                return tmp === l5.value? l5.value: tmp.cdr;
                            })()});
                        })(l126.fvalue(pv, 1, v1255));
                    })();
                }));
            })();
        });
        func.fname = 'LL-KEYWORD-ARGUMENTS-CANONICAL';
        return func;
    })();
    return l415;
})();
var l416 = (new Symbol(make_lisp_string("LL-KEYWORD-ARGUMENTS")));
(function(){
    (l416).fvalue = (function(){
        var func = (function (values,nargs,v1259){
            checkArgs(nargs, 1);
            return (function(){
                return l130.fvalue(values, 2, (function (values,nargs,v1261){
                    checkArgs(nargs, 1);
                    return l144.fvalue(values, 1, l143.fvalue(pv, 1, v1261));
                }), l415.fvalue(pv, 1, v1259));
            })();
        });
        func.fname = 'LL-KEYWORD-ARGUMENTS';
        return func;
    })();
    return l416;
})();
var l417 = (new Symbol(make_lisp_string("LL-SVARS")));
(function(){
    (l417).fvalue = (function(){
        var func = (function (values,nargs,v1262){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1264){
                    return l68.fvalue(values, 2, l5.value, l130.fvalue(pv, 2, (function(){
                        var symbol = l146;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })(), v1264));
                })(l44.fvalue(pv, 2, l415.fvalue(pv, 1, v1262), l411.fvalue(pv, 1, v1262)));
            })();
        });
        func.fname = 'LL-SVARS';
        return func;
    })();
    return l417;
})();
var l418 = (new Symbol(make_lisp_string("LAMBDA-NAME/DOCSTRING-WRAPPER")));
var l419 = make_lisp_string("(function(){");
var l420 = make_lisp_string("var func = ");
var l421 = make_lisp_string(";");
var l422 = make_lisp_string("func.fname = '");
var l423 = make_lisp_string("';");
var l424 = make_lisp_string("func.docstring = '");
var l425 = make_lisp_string("return func;");
var l426 = make_lisp_string("})()");
(function(){
    (l418).fvalue = (function(){
        var func = (function (values,nargs,v1266,v1267){
            checkArgsAtLeast(nargs, 2);
            var v1265= l5.value;
            for (var i = nargs-1; i>=2; i--)
                v1265 = {car: arguments[i+2], cdr: v1265};
            return (function(){
                return ((function(v1269){
                    return (v1269 !== l5.value ? v1269 : v1267);
                })(v1266) !== l5.value ? l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 8, l420, l127.fvalue(pv, 1, v1265), l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), (v1266 !== l5.value ? l334.fvalue(pv, 4, l422, l236.fvalue(pv, 1, v1266), l423, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()) : l5.value), (v1267 !== l5.value ? l334.fvalue(pv, 4, l424, l236.fvalue(pv, 1, v1267), l423, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()) : l5.value), l425, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l426) : (function(){
                    var f = (function(){
                        var symbol = l334;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })();
                    var args = [values, 0];
                    var tail = (v1265);
                    while (tail != l5.value){
                        args.push(tail.car);
                        args[1] += 1;
                        tail = tail.cdr;
                    }
                    return (typeof f === 'function'? f : f.fvalue).apply(this, args);
                })());
            })();
        });
        func.fname = 'LAMBDA-NAME/DOCSTRING-WRAPPER';
        return func;
    })();
    return l418;
})();
var l427 = (new Symbol(make_lisp_string("LAMBDA-CHECK-ARGUMENT-COUNT")));
var l428 = (new Symbol(make_lisp_string("N/A")));
var l429 = make_lisp_string("checkArgs(nargs, ");
var l430 = make_lisp_string(");");
var l431 = make_lisp_string("checkArgsAtLeast(nargs, ");
var l432 = make_lisp_string("checkArgsAtMost(nargs, ");
(function(){
    (l427).fvalue = (function(){
        var func = (function (values,nargs,v1270,v1271,v1272){
            checkArgs(nargs, 3);
            return (function(){
                return (function(v1274,v1275){
                    return (function(){
                        try {
                        var v1276 = [];
                            (((function(){
                                var x1 = v1274;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                return (0<x1?l4.value: l5.value);
                            })() !== l5.value ? l26.fvalue(pv, 2, v1274, v1275) : l5.value) !== l5.value ? (function(){
                                var values = mv;
                                throw ({type: 'block', id: v1276, values: l334.fvalue(values, 4, l429, v1274, l430, (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                    return value;
                                })()), message: 'Return from unknown block NIL.'})
                            })() : l5.value);
                            return l334.fvalue(values, 2, ((function(){
                                var x1 = v1274;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                return (0<x1?l4.value: l5.value);
                            })() !== l5.value ? l334.fvalue(pv, 4, l431, v1274, l430, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })()) : l5.value), (((typeof (v1275) == "number")?l4.value: l5.value) !== l5.value ? l334.fvalue(pv, 4, l432, v1275, l430, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })()) : l5.value));
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == v1276)
                                return values.apply(this, forcemv(cf.values));
                            else
                                throw cf;
                        }
                    })();
                })(v1270,(v1272 !== l5.value ? l428 : (function(){
                    var x1 = v1270;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v1271;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })()));
            })();
        });
        func.fname = 'LAMBDA-CHECK-ARGUMENT-COUNT';
        return func;
    })();
    return l427;
})();
var l433 = (new Symbol(make_lisp_string("COMPILE-LAMBDA-OPTIONAL")));
var l434 = make_lisp_string("switch(nargs){");
var l435 = make_lisp_string("case ");
var l436 = make_lisp_string("=");
var l437 = make_lisp_string("default: break;");
var l438 = make_lisp_string("}");
(function(){
    (l433).fvalue = (function(){
        var func = (function (values,nargs,v1277){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var v1279 = l411.fvalue(pv, 1, v1277);
                    var v1280 = l52.fvalue(pv, 1, l410.fvalue(pv, 1, v1277));
                    var v1281 = l52.fvalue(pv, 1, v1279);
                    return (v1279 !== l5.value ? l334.fvalue(values, 5, l434, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), (function(v1282,v1283){
                        return (function(){
                            (function(){
                                return (function(){
                                    while((function(){
                                        var x1 = v1283;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = v1281;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return (x1<x2?l4.value: l5.value);
                                    })() !== l5.value){
                                        (function(v1285){
                                            (function(){
                                                var v1286 = l334.fvalue(pv, 6, l435, (function(){
                                                    var x1 = v1283;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = v1280;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })(), l230, (function(){
                                                    var symbol = l123;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                    return value;
                                                })(), l341.fvalue(pv, 5, l381.fvalue(pv, 1, (function(){
                                                    var tmp = v1285;
                                                    return tmp === l5.value? l5.value: tmp.car;
                                                })()), l436, l338.fvalue(pv, 1, l145.fvalue(pv, 1, v1285)), l421, (function(){
                                                    var symbol = l123;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                    return value;
                                                })()), (l146.fvalue(pv, 1, v1285) !== l5.value ? l341.fvalue(pv, 5, l381.fvalue(pv, 1, l146.fvalue(pv, 1, v1285)), l436, l338.fvalue(pv, 1, l5.value), l421, (function(){
                                                    var symbol = l123;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                    return value;
                                                })()) : l5.value));
                                                var v1287 = ({car: v1286, cdr: v1282});
                                                return (v1282 = v1287);
                                            })();
                                            return (function(){
                                                var v1288 = 1;
                                                var v1289 = (function(){
                                                    var x1 = v1283;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = v1288;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })();
                                                return (v1283 = v1289);
                                            })();
                                        })(l161.fvalue(pv, 2, v1283, v1279));
                                    }return l5.value;
                                })();
                            })();
                            (function(){
                                var v1290 = l334.fvalue(pv, 2, l437, (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                    return value;
                                })());
                                var v1291 = ({car: v1290, cdr: v1282});
                                return (v1282 = v1291);
                            })();
                            return l127.fvalue(pv, 1, l47.fvalue(pv, 1, v1282));
                        })();
                    })(l5.value,0), l438, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })()) : l5.value);
                })();
            })();
        });
        func.fname = 'COMPILE-LAMBDA-OPTIONAL';
        return func;
    })();
    return l433;
})();
var l439 = (new Symbol(make_lisp_string("COMPILE-LAMBDA-REST")));
var l440 = make_lisp_string("var ");
var l441 = make_lisp_string("= ");
var l442 = make_lisp_string("for (var i = nargs-1; i>=");
var l443 = make_lisp_string("; i--)");
var l444 = make_lisp_string(" = {car: arguments[i+2], cdr: ");
var l445 = make_lisp_string("};");
(function(){
    (l439).fvalue = (function(){
        var func = (function (values,nargs,v1292){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1294,v1295,v1296){
                    return (v1296 !== l5.value ? (function(v1297){
                        return l334.fvalue(values, 11, l440, v1297, l441, l338.fvalue(pv, 1, l5.value), l421, (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), l442, (function(){
                            var x1 = v1294;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v1295;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return x1+x2;
                        })(), l443, (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), l341.fvalue(pv, 5, v1297, l444, v1297, l445, (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })()));
                    })(l381.fvalue(pv, 1, v1296)) : l5.value);
                })(l52.fvalue(pv, 1, l410.fvalue(pv, 1, v1292)),l52.fvalue(pv, 1, l412.fvalue(pv, 1, v1292)),l413.fvalue(pv, 1, v1292));
            })();
        });
        func.fname = 'COMPILE-LAMBDA-REST';
        return func;
    })();
    return l439;
})();
var l446 = (new Symbol(make_lisp_string("COMPILE-LAMBDA-PARSE-KEYWORDS")));
var l447 = make_lisp_string("; ");
var l448 = make_lisp_string(" = ");
var l449 = make_lisp_string("for (i=");
var l450 = make_lisp_string("; i<nargs; i+=2){");
var l451 = make_lisp_string("if (arguments[i+2] === ");
var l452 = make_lisp_string("){");
var l453 = make_lisp_string(" = arguments[i+3];");
var l454 = make_lisp_string("break;");
var l455 = make_lisp_string("if (i == nargs){");
var l456 = make_lisp_string("var i;");
var l457 = make_lisp_string("if (");
var l458 = make_lisp_string("arguments[i+2] !== ");
var l459 = make_lisp_string(" && ");
var l460 = make_lisp_string("throw 'Unknown keyword argument ' + xstring(arguments[i].name);");
(function(){
    (l446).fvalue = (function(){
        var func = (function (values,nargs,v1298){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1300,v1301,v1302){
                    return l334.fvalue(values, 3, l129.fvalue(pv, 2, (function (values,nargs,v1303){
                        checkArgs(nargs, 1);
                        return (function(v1304){
                            return l334.fvalue(values, 5, l440, l381.fvalue(pv, 1, v1304), l447, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), (l146.fvalue(pv, 1, v1303) !== l5.value ? l334.fvalue(pv, 6, l440, l381.fvalue(pv, 1, l146.fvalue(pv, 1, v1303)), l448, l338.fvalue(pv, 1, l5.value), l421, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })()) : l5.value));
                        })(l144.fvalue(pv, 1, (function(){
                            var tmp = v1303;
                            return tmp === l5.value? l5.value: tmp.car;
                        })()));
                    }), v1302), (function(v1308){
                        return (v1302 !== l5.value ? l334.fvalue(pv, 3, l456, (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), l129.fvalue(pv, 2, v1308, v1302)) : l5.value);
                    })((function (values,nargs,v1305){
                        checkArgs(nargs, 1);
                        return (function(){
                            return l334.fvalue(values, 12, l449, (function(){
                                var x1 = v1300;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v1301;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })(), l450, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), l341.fvalue(pv, 7, l451, l338.fvalue(pv, 1, l162.fvalue(pv, 1, v1305)), l452, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), l341.fvalue(pv, 6, l381.fvalue(pv, 1, l145.fvalue(pv, 1, (function(){
                                var tmp = v1305;
                                return tmp === l5.value? l5.value: tmp.car;
                            })())), l453, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), (function(v1307){
                                return (v1307 !== l5.value ? l334.fvalue(pv, 5, l381.fvalue(pv, 1, v1307), l448, l338.fvalue(pv, 1, l4.value), l421, (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                    return value;
                                })()) : l5.value);
                            })(l146.fvalue(pv, 1, v1305)), l454, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })()), l438, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })()), l438, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), l455, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), l341.fvalue(pv, 5, l381.fvalue(pv, 1, l145.fvalue(pv, 1, (function(){
                                var tmp = v1305;
                                return tmp === l5.value? l5.value: tmp.car;
                            })())), l448, l338.fvalue(pv, 1, l145.fvalue(pv, 1, v1305)), l421, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })()), l438, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })());
                        })();
                    })), (v1302 !== l5.value ? l334.fvalue(pv, 7, l449, (function(){
                        var x1 = v1300;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v1301;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })(), l450, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), l341.fvalue(pv, 5, l457, l127.fvalue(pv, 2, l130.fvalue(pv, 2, (function (values,nargs,v1309){
                        checkArgs(nargs, 1);
                        return l117.fvalue(values, 2, l458, l338.fvalue(pv, 1, l162.fvalue(pv, 1, v1309)));
                    }), v1302), l459), l244, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), l341.fvalue(pv, 2, l460, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })())), l438, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })()) : l5.value));
                })(l52.fvalue(pv, 1, l410.fvalue(pv, 1, v1298)),l52.fvalue(pv, 1, l412.fvalue(pv, 1, v1298)),l415.fvalue(pv, 1, v1298));
            })();
        });
        func.fname = 'COMPILE-LAMBDA-PARSE-KEYWORDS';
        return func;
    })();
    return l446;
})();
var l461 = (new Symbol(make_lisp_string("PARSE-LAMBDA-LIST")));
(function(){
    (l461).fvalue = (function(){
        var func = (function (values,nargs,v1310){
            checkArgs(nargs, 1);
            return (function(){
                return values(l410.fvalue(pv, 1, v1310), l412.fvalue(pv, 1, v1310), l416.fvalue(pv, 1, v1310), l413.fvalue(pv, 1, v1310));
            })();
        });
        func.fname = 'PARSE-LAMBDA-LIST';
        return func;
    })();
    return l461;
})();
var l462 = (new Symbol(make_lisp_string("PARSE-BODY")));
var l463 = (new Symbol(make_lisp_string("DOCSTRING"), make_lisp_string("KEYWORD")));
var l464 = (new Symbol(make_lisp_string("DECLARE")));
(function(){
    (l462).fvalue = (function(){
        var func = (function (values,nargs,v1312){
            checkArgsAtLeast(nargs, 1);
            var v1313; 
            var v1314; 
            var i;
            for (i=1; i<nargs; i+=2){
                if (arguments[i+2] === l349.value){
                    v1313 = arguments[i+3];
                    break;
                }
            }
            if (i == nargs){
                v1313 = l5.value;
            }
            for (i=1; i<nargs; i+=2){
                if (arguments[i+2] === l463.value){
                    v1314 = arguments[i+3];
                    break;
                }
            }
            if (i == nargs){
                v1314 = l5.value;
            }
            for (i=1; i<nargs; i+=2){
                if (arguments[i+2] !== l349.value && arguments[i+2] !== l463.value)
                    throw 'Unknown keyword argument ' + xstring(arguments[i].name);
            }
            return (function(){
                return (function(v1316,v1317){
                    (v1313 !== l5.value ? (function(){
                        return (function(){
                            var v1319 = v1312;
                            var v1320 = (function(){
                                var tmp = v1319;
                                return tmp === l5.value? l5.value: tmp.car;
                            })();
                            return (function(){
                                try {
                                var v1321 = [];
                                    return (function(){
                                        while(l4.value !== l5.value){
                                            ((function(v1322){
                                                return (v1322 !== l5.value ? v1322 : l27.fvalue(pv, 1, (((function(){
                                                    var tmp = v1320;
                                                    return tmp === l5.value? l5.value: tmp.car;
                                                })() === l464)?l4.value: l5.value)));
                                            })(l67.fvalue(pv, 1, v1320)) !== l5.value ? (function(){
                                                throw ({type: 'block', id: v1321, values: (function(){
                                                    return (function(){
                                                        var func = (function (values,nargs,v1324){
                                                            switch(nargs){
                                                            case 0:
                                                                v1324=l5.value;
                                                            default: break;
                                                            }
                                                            var v1323= l5.value;
                                                            for (var i = nargs-1; i>=1; i--)
                                                                v1323 = {car: arguments[i+2], cdr: v1323};
                                                            return (v1312 = v1324);
                                                        });
                                                        var args = [pv, 0];
                                                        return (function(){
                                                            var values = mv;
                                                            var vs;
                                                            vs = v1319;
                                                            if (typeof vs === 'object' && 'multiple-value' in vs)
                                                                args = args.concat(vs);
                                                            else
                                                                args.push(vs);
                                                            args[1] = args.length-2;
                                                            return func.apply(window, args);
                                                        })();
                                                    })();
                                                })(), message: 'Return from unknown block NIL.'})
                                            })() : l5.value);
                                            (function(){
                                                (function(){
                                                    var v1325 = v1320;
                                                    var v1326 = ({car: v1325, cdr: v1316});
                                                    return (v1316 = v1326);
                                                })();
                                                return l5.value;
                                            })();
                                            (v1319 = (function(){
                                                var tmp = v1319;
                                                return tmp === l5.value? l5.value: tmp.cdr;
                                            })(), v1320 = (function(){
                                                var tmp = v1319;
                                                return tmp === l5.value? l5.value: tmp.car;
                                            })());
                                        }return l5.value;
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == v1321)
                                        return cf.values;
                                    else
                                        throw cf;
                                }
                            })();
                        })();
                    })() : l5.value);
                    ((v1314 !== l5.value ? (((function(){
                        var x = (function(){
                            var tmp = v1312;
                            return tmp === l5.value? l5.value: tmp.car;
                        })();
                        return typeof(x) == 'object' && 'length' in x && x.type == 'character';
                    })()?l4.value: l5.value) !== l5.value ? l27.fvalue(pv, 1, l42.fvalue(pv, 1, (function(){
                        var tmp = v1312;
                        return tmp === l5.value? l5.value: tmp.cdr;
                    })())) : l5.value) : l5.value) !== l5.value ? (function(){
                        (v1317 = (function(){
                            var tmp = v1312;
                            return tmp === l5.value? l5.value: tmp.car;
                        })());
                        return (v1312 = (function(){
                            var tmp = v1312;
                            return tmp === l5.value? l5.value: tmp.cdr;
                        })());
                    })() : l5.value);
                    return values(v1312, v1316, v1317);
                })(l5.value,l5.value);
            })();
        });
        func.fname = 'PARSE-BODY';
        return func;
    })();
    return l462;
})();
var l465 = (new Symbol(make_lisp_string("COMPILE-LAMBDA")));
var l466 = make_lisp_string("(function (");
var l467 = make_lisp_string("values");
var l468 = make_lisp_string("nargs");
var l469 = make_lisp_string(",");
var l470 = (new Symbol(make_lisp_string("LS-COMPILE-BLOCK")));
var l471 = make_lisp_string("})");
(function(){
    (l465).fvalue = (function(){
        var func = (function (values,nargs,v1327,v1328){
            checkArgsAtLeast(nargs, 2);
            var v1329; 
            var v1330; 
            var i;
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] === l346.value){
                    v1329 = arguments[i+3];
                    break;
                }
            }
            if (i == nargs){
                v1329 = l5.value;
            }
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] === l362.value){
                    v1330 = arguments[i+3];
                    break;
                }
            }
            if (i == nargs){
                v1330 = l5.value;
            }
            for (i=2; i<nargs; i+=2){
                if (arguments[i+2] !== l346.value && arguments[i+2] !== l362.value)
                    throw 'Unknown keyword argument ' + xstring(arguments[i].name);
            }
            return (function(){
                return (function(){
                    var func = (function (values,nargs,v1333,v1334,v1335,v1336){
                        switch(nargs){
                        case 0:
                            v1333=l5.value;
                        case 1:
                            v1334=l5.value;
                        case 2:
                            v1335=l5.value;
                        case 3:
                            v1336=l5.value;
                        default: break;
                        }
                        var v1332= l5.value;
                        for (var i = nargs-1; i>=4; i--)
                            v1332 = {car: arguments[i+2], cdr: v1332};
                        return (function(){
                            var func = (function (values,nargs,v1338,v1339,v1340){
                                switch(nargs){
                                case 0:
                                    v1338=l5.value;
                                case 1:
                                    v1339=l5.value;
                                case 2:
                                    v1340=l5.value;
                                default: break;
                                }
                                var v1337= l5.value;
                                for (var i = nargs-1; i>=3; i--)
                                    v1337 = {car: arguments[i+2], cdr: v1337};
                                return (function(v1341,v1342,v1343){
                                    try {
                                        var tmp;
                                        tmp = l377.value;
                                        l377.value = v1343;
                                        v1343 = tmp;
                                        return l418.fvalue(values, 8, v1329, v1340, l466, l127.fvalue(pv, 2, l158.fvalue(pv, 3, l467, l468, l130.fvalue(pv, 2, (function(){
                                            var symbol = l381;
                                            var func = symbol.fvalue;
                                            if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                                            return func;
                                        })(), l44.fvalue(pv, 2, v1333, v1334))), l469), l452, (function(){
                                            var symbol = l123;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                            return value;
                                        })(), l341.fvalue(pv, 5, l427.fvalue(pv, 3, v1341, v1342, (function(v1344){
                                            return (v1344 !== l5.value ? v1344 : v1335);
                                        })(v1336)), l433.fvalue(pv, 1, v1327), l439.fvalue(pv, 1, v1327), l446.fvalue(pv, 1, v1327), (function(v1345){
                                            try {
                                                var tmp;
                                                tmp = l343.value;
                                                l343.value = v1345;
                                                v1345 = tmp;
                                                return (v1330 !== l5.value ? l470.fvalue(pv, 2, l104.fvalue(pv, 1, l158.fvalue(pv, 3, l373, v1330, v1338)), l4.value) : l470.fvalue(pv, 2, v1338, l4.value));
                                            }
                                            finally {
                                                l343.value = v1345;
                                            }
                                        })(l4.value)), l471);
                                    }
                                    finally {
                                        l377.value = v1343;
                                    }
                                })(l52.fvalue(pv, 1, v1333),l52.fvalue(pv, 1, v1334),l382.fvalue(pv, 1, l44.fvalue(pv, 5, l126.fvalue(pv, 1, v1336), v1333, v1334, v1335, l417.fvalue(pv, 1, v1327))));
                            });
                            var args = [values, 0];
                            return (function(){
                                var values = mv;
                                var vs;
                                vs = l462.fvalue(values, 5, v1328, l349.value, l4.value, l463.value, l4.value);
                                if (typeof vs === 'object' && 'multiple-value' in vs)
                                    args = args.concat(vs);
                                else
                                    args.push(vs);
                                args[1] = args.length-2;
                                return func.apply(window, args);
                            })();
                        })();
                    });
                    var args = [values, 0];
                    return (function(){
                        var values = mv;
                        var vs;
                        vs = l461.fvalue(values, 1, v1327);
                        if (typeof vs === 'object' && 'multiple-value' in vs)
                            args = args.concat(vs);
                        else
                            args.push(vs);
                        args[1] = args.length-2;
                        return func.apply(window, args);
                    })();
                })();
            })();
        });
        func.fname = 'COMPILE-LAMBDA';
        return func;
    })();
    return l465;
})();
var l472 = (new Symbol(make_lisp_string("SETQ-PAIR")));
var l473 = (new Symbol(make_lisp_string("SET")));
(function(){
    (l472).fvalue = (function(){
        var func = (function (values,nargs,v1346,v1347){
            checkArgs(nargs, 2);
            return (function(){
                return (function(v1349){
                    return (function(v1350){
                        return (v1350 !== l5.value ? l334.fvalue(values, 3, l357.fvalue(pv, 1, v1349), l448, l338.fvalue(pv, 1, v1347)) : (function(v1351){
                            return (v1351 !== l5.value ? l338.fvalue(values, 1, l104.fvalue(pv, 3, l110, v1346, v1347)) : l338.fvalue(values, 1, l104.fvalue(pv, 3, l473, l104.fvalue(pv, 2, l328, v1346), v1347)));
                        })((v1349 !== l5.value ? ((l356.fvalue(pv, 1, v1349) === l388)?l4.value: l5.value) : l5.value)));
                    })((v1349 !== l5.value ? (((l356.fvalue(pv, 1, v1349) === l96)?l4.value: l5.value) !== l5.value ? (l27.fvalue(pv, 1, l195.fvalue(pv, 2, l392, l358.fvalue(pv, 1, v1349))) !== l5.value ? l27.fvalue(pv, 1, l195.fvalue(pv, 2, l394, l358.fvalue(pv, 1, v1349))) : l5.value) : l5.value) : l5.value));
                })(l372.fvalue(pv, 3, v1346, (function(){
                    var symbol = l377;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l96));
            })();
        });
        func.fname = 'SETQ-PAIR';
        return func;
    })();
    return l472;
})();
var l474 = make_lisp_string("Odd pairs in SETQ");
var l475 = make_lisp_string(", ");
(function(){
    var v1352 = l104.fvalue(pv, 2, l105, (function (values,nargs){
        var v1353= l5.value;
        for (var i = nargs-1; i>=0; i--)
            v1353 = {car: arguments[i+2], cdr: v1353};
        return (function(){
            return (function(v1355){
                (function(){
                    try {
                    var v1356 = [];
                        return (function(){
                            while(l4.value !== l5.value){
                                (function(v1357){
                                    return (v1357 !== l5.value ? (function(){
                                        throw ({type: 'block', id: v1356, values: l5.value, message: 'Return from unknown block NIL.'})
                                    })() : (function(v1358){
                                        return (v1358 !== l5.value ? l81.fvalue(pv, 1, l474) : (function(){
                                            (v1355 = l117.fvalue(pv, 2, v1355, l117.fvalue(pv, 2, l472.fvalue(pv, 2, (function(){
                                                var tmp = v1353;
                                                return tmp === l5.value? l5.value: tmp.car;
                                            })(), l145.fvalue(pv, 1, v1353)), (l42.fvalue(pv, 1, l159.fvalue(pv, 1, v1353)) !== l5.value ? l118 : l475))));
                                            return (v1353 = l159.fvalue(pv, 1, v1353));
                                        })());
                                    })(l42.fvalue(pv, 1, (function(){
                                        var tmp = v1353;
                                        return tmp === l5.value? l5.value: tmp.cdr;
                                    })())));
                                })(l42.fvalue(pv, 1, v1353));
                            }return l5.value;
                        })();
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == v1356)
                            return cf.values;
                        else
                            throw cf;
                    }
                })();
                return l334.fvalue(values, 3, l241, v1355, l244);
            })(l118);
        })();
    }));
    var v1359 = ({car: v1352, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1359);
})();
(function(){
    (l236).fvalue = (function(){
        var func = (function (values,nargs,v1360){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1362,v1363,v1364){
                    (function(){
                        return (function(){
                            while((function(){
                                var x1 = v1363;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v1364;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1<x2?l4.value: l5.value);
                            })() !== l5.value){
                                (function(v1366){
                                    ((function(v1367){
                                        return (v1367 !== l5.value ? v1367 : l62.fvalue(pv, 2, v1366, "\\"));
                                    })(l62.fvalue(pv, 2, v1366, "\"")) !== l5.value ? (v1362 = l117.fvalue(pv, 2, v1362, l219)) : l5.value);
                                    (l62.fvalue(pv, 2, v1366, "\n") !== l5.value ? (function(){
                                        (v1362 = l117.fvalue(pv, 2, v1362, l219));
                                        return (v1366 = "n");
                                    })() : l5.value);
                                    return (v1362 = l117.fvalue(pv, 2, v1362, l135.fvalue(pv, 1, v1366)));
                                })(v1360[v1363]);
                                (function(){
                                    var v1368 = 1;
                                    var v1369 = (function(){
                                        var x1 = v1363;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = v1368;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1+x2;
                                    })();
                                    return (v1363 = v1369);
                                })();
                            }return l5.value;
                        })();
                    })();
                    return v1362;
                })(l118,0,l52.fvalue(pv, 1, v1360));
            })();
        });
        func.fname = 'ESCAPE-STRING';
        return func;
    })();
    return l236;
})();
var l476 = (new Symbol(make_lisp_string("*LITERAL-TABLE*")));
(function(){
    (((l476.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l476).value = l5.value));
    return l476;
})();
var l477 = (new Symbol(make_lisp_string("*LITERAL-COUNTER*")));
(function(){
    (((l477.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l477).value = 0));
    return l477;
})();
var l478 = (new Symbol(make_lisp_string("*MAGIC-UNQUOTE-MARKER*")));
var l479 = make_lisp_string("MAGIC-UNQUOTE");
(function(){
    (((l478.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l478).value = l15.fvalue(pv, 1, l479)));
    return l478;
})();
var l480 = (new Symbol(make_lisp_string("GENLIT")));
var l481 = make_lisp_string("l");
(function(){
    (l480).fvalue = (function(){
        var func = (function (values,nargs){
            checkArgsAtMost(nargs, 0);
            return (function(){
                return l334.fvalue(values, 2, l481, (function(){
                    var v1371 = 1;
                    var v1372 = (function(){
                        var x1 = (function(){
                            var symbol = l477;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v1371;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l477).value = v1372);
                })());
            })();
        });
        func.fname = 'GENLIT';
        return func;
    })();
    return l480;
})();
var l482 = (new Symbol(make_lisp_string("DUMP-SYMBOL")));
var l483 = make_lisp_string("(new Symbol(");
var l484 = (new Symbol(make_lisp_string("DUMP-STRING")));
var l485 = make_lisp_string("))");
(function(){
    (l482).fvalue = (function(){
        var func = (function (values,nargs,v1373){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1375){
                    return (l42.fvalue(pv, 1, v1375) !== l5.value ? l334.fvalue(values, 3, l483, l484.fvalue(pv, 1, (v1373).name), l485) : l338.fvalue(values, 1, l104.fvalue(pv, 3, l283, (v1373).name, l229.fvalue(pv, 1, v1375))));
                })(l223.fvalue(pv, 1, v1373));
            })();
        });
        func.fname = 'DUMP-SYMBOL';
        return func;
    })();
    return l482;
})();
var l486 = (new Symbol(make_lisp_string("DUMP-CONS")));
var l487 = make_lisp_string("QIList(");
var l488 = (new Symbol(make_lisp_string("LITERAL")));
(function(){
    (l486).fvalue = (function(){
        var func = (function (values,nargs,v1376){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1378,v1379){
                    return l334.fvalue(values, 6, l487, l128.fvalue(pv, 2, l130.fvalue(pv, 2, (function (values,nargs,v1380){
                        checkArgs(nargs, 1);
                        return l488.fvalue(values, 2, v1380, l4.value);
                    }), v1378), l469), l488.fvalue(pv, 2, (function(){
                        var tmp = v1379;
                        return tmp === l5.value? l5.value: tmp.car;
                    })(), l4.value), l469, l488.fvalue(pv, 2, (function(){
                        var tmp = v1379;
                        return tmp === l5.value? l5.value: tmp.cdr;
                    })(), l4.value), l244);
                })(l194.fvalue(pv, 1, v1376),l193.fvalue(pv, 1, v1376));
            })();
        });
        func.fname = 'DUMP-CONS';
        return func;
    })();
    return l486;
})();
var l489 = (new Symbol(make_lisp_string("DUMP-ARRAY")));
var l490 = make_lisp_string("[");
var l491 = make_lisp_string("]");
(function(){
    (l489).fvalue = (function(){
        var func = (function (values,nargs,v1381){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1383){
                    return l117.fvalue(values, 3, l490, l127.fvalue(pv, 2, l130.fvalue(pv, 2, (function(){
                        var symbol = l488;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })(), v1383), l475), l491);
                })(l131.fvalue(pv, 1, v1381));
            })();
        });
        func.fname = 'DUMP-ARRAY';
        return func;
    })();
    return l489;
})();
var l492 = make_lisp_string("make_lisp_string(\"");
var l493 = make_lisp_string("\")");
(function(){
    (l484).fvalue = (function(){
        var func = (function (values,nargs,v1384){
            checkArgs(nargs, 1);
            return (function(){
                return l334.fvalue(values, 3, l492, l236.fvalue(pv, 1, v1384), l493);
            })();
        });
        func.fname = 'DUMP-STRING';
        return func;
    })();
    return l484;
})();
(function(){
    (l488).fvalue = (function(){
        var func = (function (values,nargs,v1386,v1387){
            checkArgsAtLeast(nargs, 1);
            checkArgsAtMost(nargs, 2);
            switch(nargs){
            case 1:
                v1387=l5.value;
            default: break;
            }
            return (function(){
                return (function(v1389){
                    return (v1389 !== l5.value ? l17.fvalue(values, 1, v1386) : (function(v1390){
                        return (v1390 !== l5.value ? (function(){
                            var x = v1386;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            return make_lisp_string(x.toString());
                        })() : (function(v1391){
                            return (v1391 !== l5.value ? l334.fvalue(values, 3, l235, l236.fvalue(pv, 1, l135.fvalue(pv, 1, v1386)), l235) : (function(v1392){
                                return (v1392 !== l5.value ? v1392 : (function(v1398){
                                    return ((v1387 !== l5.value ? l27.fvalue(pv, 1, ((v1386 instanceof Symbol)?l4.value: l5.value)) : l5.value) !== l5.value ? v1398 : (function(v1399){
                                        (function(){
                                            var v1400 = ({car: v1386, cdr: v1399});
                                            var v1401 = ({car: v1400, cdr: (function(){
                                                var symbol = l476;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                return value;
                                            })()});
                                            return ((l476).value = v1401);
                                        })();
                                        l384.fvalue(pv, 1, l334.fvalue(pv, 4, l440, v1399, l448, v1398));
                                        return v1399;
                                    })(l480.fvalue(pv, 0)));
                                })((function(v1393){
                                    return (function(v1394){
                                        return (v1394 !== l5.value ? l482.fvalue(pv, 1, v1386) : (function(v1395){
                                            return (v1395 !== l5.value ? l484.fvalue(pv, 1, v1386) : (function(v1396){
                                                return (v1396 !== l5.value ? ((((function(){
                                                    var tmp = v1386;
                                                    return tmp === l5.value? l5.value: tmp.car;
                                                })() === (function(){
                                                    var symbol = l478;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                    return value;
                                                })())?l4.value: l5.value) !== l5.value ? l338.fvalue(pv, 1, (function(){
                                                    var tmp = v1386;
                                                    return tmp === l5.value? l5.value: tmp.cdr;
                                                })()) : l486.fvalue(pv, 1, v1386)) : (function(v1397){
                                                    return (v1397 !== l5.value ? l489.fvalue(pv, 1, v1386) : l5.value);
                                                })(((function(){
                                                    var x = v1393;
                                                    return typeof x === 'object' && 'length' in x;
                                                })()?l4.value: l5.value)));
                                            })(((function(){
                                                var tmp = v1393;
                                                return (typeof tmp == 'object' && 'car' in tmp);
                                            })()?l4.value: l5.value)));
                                        })(((function(){
                                            var x = v1393;
                                            return typeof(x) == 'object' && 'length' in x && x.type == 'character';
                                        })()?l4.value: l5.value)));
                                    })(((v1393 instanceof Symbol)?l4.value: l5.value));
                                })(v1386)));
                            })((function(){
                                var tmp = l107.fvalue(pv, 4, v1386, (function(){
                                    var symbol = l476;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                    return value;
                                })(), l79.value, (function(){
                                    var symbol = l87;
                                    var func = symbol.fvalue;
                                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                                    return func;
                                })());
                                return tmp === l5.value? l5.value: tmp.cdr;
                            })()));
                        })(((function(){
                            var x = v1386;
                            return (typeof(v1386) == "string") && x.length == 1;
                        })()?l4.value: l5.value)));
                    })(l64.fvalue(pv, 1, v1386)));
                })(l63.fvalue(pv, 1, v1386));
            })();
        });
        func.fname = 'LITERAL';
        return func;
    })();
    return l488;
})();
(function(){
    var v1402 = l104.fvalue(pv, 2, l328, (function (values,nargs,v1403){
        checkArgs(nargs, 1);
        return (function(){
            return l488.fvalue(values, 1, v1403);
        })();
    }));
    var v1405 = ({car: v1402, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1405);
})();
var l494 = (new Symbol(make_lisp_string("%WHILE")));
var l495 = make_lisp_string("while(");
var l496 = make_lisp_string("return ");
(function(){
    var v1406 = l104.fvalue(pv, 2, l494, (function (values,nargs,v1408){
        checkArgsAtLeast(nargs, 1);
        var v1407= l5.value;
        for (var i = nargs-1; i>=1; i--)
            v1407 = {car: arguments[i+2], cdr: v1407};
        return (function(){
            return l334.fvalue(values, 4, l419, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l341.fvalue(pv, 12, l495, l338.fvalue(pv, 1, v1408), l400, l338.fvalue(pv, 1, l5.value), l452, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l341.fvalue(pv, 1, l470.fvalue(pv, 1, v1407)), l438, l496, l338.fvalue(pv, 1, l5.value), l421, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()), l426);
        })();
    }));
    var v1410 = ({car: v1406, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1410);
})();
var l497 = (new Symbol(make_lisp_string("NAMED-LAMBDA")));
var l498 = (new Symbol(make_lisp_string("SYMBOL-FUNCTION")));
(function(){
    var v1411 = l104.fvalue(pv, 2, l94, (function (values,nargs,v1412){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1414){
                return (v1414 !== l5.value ? l465.fvalue(values, 2, l145.fvalue(pv, 1, v1412), l159.fvalue(pv, 1, v1412)) : (function(v1415){
                    return (v1415 !== l5.value ? (function(v1416,v1417,v1418){
                        return l465.fvalue(values, 6, v1417, v1418, l346.value, (v1416).name, l362.value, v1416);
                    })(l145.fvalue(pv, 1, v1412),l147.fvalue(pv, 1, v1412),l165.fvalue(pv, 1, v1412)) : (function(v1419){
                        return (v1419 !== l5.value ? (function(v1420){
                            return (v1420 !== l5.value ? l357.fvalue(values, 1, v1420) : l338.fvalue(values, 1, l104.fvalue(pv, 2, l498, l104.fvalue(pv, 2, l328, v1412))));
                        })(l372.fvalue(pv, 3, v1412, (function(){
                            var symbol = l377;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), l94)) : l5.value);
                    })(((v1412 instanceof Symbol)?l4.value: l5.value)));
                })((l54.fvalue(pv, 1, v1412) !== l5.value ? (((function(){
                    var tmp = v1412;
                    return tmp === l5.value? l5.value: tmp.car;
                })() === l497)?l4.value: l5.value) : l5.value)));
            })((l54.fvalue(pv, 1, v1412) !== l5.value ? (((function(){
                var tmp = v1412;
                return tmp === l5.value? l5.value: tmp.car;
            })() === l6)?l4.value: l5.value) : l5.value));
        })();
    }));
    var v1421 = ({car: v1411, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1421);
})();
var l499 = (new Symbol(make_lisp_string("MAKE-FUNCTION-BINDING")));
(function(){
    (l499).fvalue = (function(){
        var func = (function (values,nargs,v1422){
            checkArgs(nargs, 1);
            return (function(){
                return l345.fvalue(values, 6, l346.value, v1422, l347.value, l94, l348.value, l379.fvalue(pv, 1, v1422));
            })();
        });
        func.fname = 'MAKE-FUNCTION-BINDING';
        return func;
    })();
    return l499;
})();
var l500 = (new Symbol(make_lisp_string("COMPILE-FUNCTION-DEFINITION")));
(function(){
    (l500).fvalue = (function(){
        var func = (function (values,nargs,v1424){
            checkArgs(nargs, 1);
            return (function(){
                return l465.fvalue(values, 2, (function(){
                    var tmp = v1424;
                    return tmp === l5.value? l5.value: tmp.car;
                })(), (function(){
                    var tmp = v1424;
                    return tmp === l5.value? l5.value: tmp.cdr;
                })());
            })();
        });
        func.fname = 'COMPILE-FUNCTION-DEFINITION';
        return func;
    })();
    return l500;
})();
var l501 = (new Symbol(make_lisp_string("TRANSLATE-FUNCTION")));
(function(){
    (l501).fvalue = (function(){
        var func = (function (values,nargs,v1426){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1428){
                    return (v1428 !== l5.value ? l357.fvalue(values, 1, v1428) : l5.value);
                })(l372.fvalue(pv, 3, v1426, (function(){
                    var symbol = l377;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l94));
            })();
        });
        func.fname = 'TRANSLATE-FUNCTION';
        return func;
    })();
    return l501;
})();
var l502 = (new Symbol(make_lisp_string("FLET")));
var l503 = make_lisp_string("(function(");
var l504 = make_lisp_string("})(");
(function(){
    var v1429 = l104.fvalue(pv, 2, l502, (function (values,nargs,v1431){
        checkArgsAtLeast(nargs, 1);
        var v1430= l5.value;
        for (var i = nargs-1; i>=1; i--)
            v1430 = {car: arguments[i+2], cdr: v1430};
        return (function(){
            return (function(){
                try {
                    var v1437 = l377.value;
                    var v1433 = l130.fvalue(pv, 2, (function(){
                        var symbol = l141;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })(), v1431);
                    var v1434 = l130.fvalue(pv, 2, (function (values,nargs,v1435){
                        checkArgs(nargs, 1);
                        return l465.fvalue(values, 2, l145.fvalue(pv, 1, v1435), l104.fvalue(pv, 1, l158.fvalue(pv, 3, l373, (function(){
                            var tmp = v1435;
                            return tmp === l5.value? l5.value: tmp.car;
                        })(), l159.fvalue(pv, 1, v1435))));
                    }), v1431);
                    ((l377).value = l376.fvalue(pv, 3, l130.fvalue(pv, 2, (function(){
                        var symbol = l499;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })(), v1433), (function(){
                        var symbol = l377;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), l94));
                    return l334.fvalue(values, 8, l503, l127.fvalue(pv, 2, l130.fvalue(pv, 2, (function(){
                        var symbol = l501;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })(), v1433), l469), l452, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), (function(v1436){
                        return l341.fvalue(pv, 1, v1436);
                    })(l470.fvalue(pv, 2, v1430, l4.value)), l504, l127.fvalue(pv, 2, v1434, l469), l244);
                }
                finally {
                    l377.value = v1437;
                }
            })();
        })();
    }));
    var v1438 = ({car: v1429, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1438);
})();
var l505 = (new Symbol(make_lisp_string("LABELS")));
(function(){
    var v1439 = l104.fvalue(pv, 2, l505, (function (values,nargs,v1441){
        checkArgsAtLeast(nargs, 1);
        var v1440= l5.value;
        for (var i = nargs-1; i>=1; i--)
            v1440 = {car: arguments[i+2], cdr: v1440};
        return (function(){
            return (function(){
                try {
                    var v1445 = l377.value;
                    var v1443 = l130.fvalue(pv, 2, (function(){
                        var symbol = l141;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })(), v1441);
                    ((l377).value = l376.fvalue(pv, 3, l130.fvalue(pv, 2, (function(){
                        var symbol = l499;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })(), v1443), (function(){
                        var symbol = l377;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), l94));
                    return l334.fvalue(values, 4, l419, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), l341.fvalue(pv, 2, l129.fvalue(pv, 2, (function (values,nargs,v1444){
                        checkArgs(nargs, 1);
                        return l334.fvalue(values, 6, l440, l501.fvalue(pv, 1, (function(){
                            var tmp = v1444;
                            return tmp === l5.value? l5.value: tmp.car;
                        })()), l448, l465.fvalue(pv, 2, l145.fvalue(pv, 1, v1444), l104.fvalue(pv, 1, l158.fvalue(pv, 3, l373, (function(){
                            var tmp = v1444;
                            return tmp === l5.value? l5.value: tmp.car;
                        })(), l159.fvalue(pv, 1, v1444)))), l421, (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })());
                    }), v1441), l470.fvalue(pv, 2, v1440, l4.value)), l426);
                }
                finally {
                    l377.value = v1445;
                }
            })();
        })();
    }));
    var v1446 = ({car: v1439, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1446);
})();
var l506 = (new Symbol(make_lisp_string("*COMPILING-FILE*")));
(function(){
    (((l506.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l506).value = l5.value));
    return l506;
})();
var l507 = (new Symbol(make_lisp_string("EVAL-WHEN-COMPILE")));
(function(){
    var v1447 = l104.fvalue(pv, 2, l507, (function (values,nargs){
        var v1448= l5.value;
        for (var i = nargs-1; i>=0; i--)
            v1448 = {car: arguments[i+2], cdr: v1448};
        return (function(){
            return ((function(){
                var symbol = l506;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? (function(){
                l289.fvalue(pv, 1, ({car: l200, cdr: v1448}));
                return l5.value;
            })() : l338.fvalue(values, 1, ({car: l200, cdr: v1448})));
        })();
    }));
    var v1450 = ({car: v1447, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1450);
})();
var l508 = (new Symbol(make_lisp_string("DEFINE-TRANSFORMATION")));
l508;
(function(){
    var v1451 = l104.fvalue(pv, 2, l200, (function (values,nargs){
        var v1452= l5.value;
        for (var i = nargs-1; i>=0; i--)
            v1452 = {car: arguments[i+2], cdr: v1452};
        return (function(){
            return (l42.fvalue(pv, 1, (function(){
                var tmp = v1452;
                return tmp === l5.value? l5.value: tmp.cdr;
            })()) !== l5.value ? l338.fvalue(values, 2, (function(){
                var tmp = v1452;
                return tmp === l5.value? l5.value: tmp.car;
            })(), (function(){
                var symbol = l343;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()) : l334.fvalue(values, 4, l419, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l341.fvalue(pv, 1, l470.fvalue(pv, 2, v1452, l4.value)), l426));
        })();
    }));
    var v1454 = ({car: v1451, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1454);
})();
var l509 = (new Symbol(make_lisp_string("SPECIAL-VARIABLE-P")));
(function(){
    (l509).fvalue = (function(){
        var func = (function (values,nargs,v1455){
            checkArgs(nargs, 1);
            return (function(){
                return (l390.fvalue(pv, 3, v1455, l96, l392) !== l5.value ? l4.value : l5.value);
            })();
        });
        func.fname = 'SPECIAL-VARIABLE-P';
        return func;
    })();
    return l509;
})();
var l510 = (new Symbol(make_lisp_string("LET-BINDING-WRAPPER")));
var l511 = make_lisp_string("try {");
var l512 = make_lisp_string("var tmp;");
var l513 = make_lisp_string("tmp = ");
var l514 = make_lisp_string(".value;");
var l515 = make_lisp_string(".value = ");
var l516 = make_lisp_string(" = tmp;");
var l517 = make_lisp_string("finally {");
var l518 = make_lisp_string(".value");
(function(){
    (l510).fvalue = (function(){
        var func = (function (values,nargs,v1457,v1458){
            checkArgs(nargs, 2);
            return (function(){
                try {
                var v1459 = [];
                    (l42.fvalue(pv, 1, v1457) !== l5.value ? (function(){
                        var values = mv;
                        throw ({type: 'block', id: v1459, values: v1458, message: 'Return from unknown block LET-BINDING-WRAPPER.'})
                    })() : l5.value);
                    return l334.fvalue(values, 10, l511, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), l341.fvalue(pv, 5, l512, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), l129.fvalue(pv, 2, (function (values,nargs,v1460){
                        checkArgs(nargs, 1);
                        return (function(v1461){
                            return l334.fvalue(values, 12, l513, v1461, l514, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), v1461, l515, (function(){
                                var tmp = v1460;
                                return tmp === l5.value? l5.value: tmp.cdr;
                            })(), l421, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), (function(){
                                var tmp = v1460;
                                return tmp === l5.value? l5.value: tmp.cdr;
                            })(), l516, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })());
                        })(l338.fvalue(pv, 1, l104.fvalue(pv, 2, l328, (function(){
                            var tmp = v1460;
                            return tmp === l5.value? l5.value: tmp.car;
                        })())));
                    }), v1457), v1458, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })()), l438, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), l517, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), l341.fvalue(pv, 1, l129.fvalue(pv, 2, (function (values,nargs,v1462){
                        checkArgs(nargs, 1);
                        return (function(v1463){
                            return l334.fvalue(values, 6, v1463, l518, l448, (function(){
                                var tmp = v1462;
                                return tmp === l5.value? l5.value: tmp.cdr;
                            })(), l421, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })());
                        })(l338.fvalue(pv, 1, l104.fvalue(pv, 2, l328, (function(){
                            var tmp = v1462;
                            return tmp === l5.value? l5.value: tmp.car;
                        })())));
                    }), v1457)), l438, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })());
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == v1459)
                        return values.apply(this, forcemv(cf.values));
                    else
                        throw cf;
                }
            })();
        });
        func.fname = 'LET-BINDING-WRAPPER';
        return func;
    })();
    return l510;
})();
var l519 = (new Symbol(make_lisp_string("LET")));
(function(){
    var v1464 = l104.fvalue(pv, 2, l519, (function (values,nargs,v1466){
        checkArgsAtLeast(nargs, 1);
        var v1465= l5.value;
        for (var i = nargs-1; i>=1; i--)
            v1465 = {car: arguments[i+2], cdr: v1465};
        return (function(){
            return (function(){
                try {
                    var v1477 = l377.value;
                    var v1468 = l130.fvalue(pv, 2, (function(){
                        var symbol = l126;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })(), v1466);
                    var v1469 = l130.fvalue(pv, 2, (function(){
                        var symbol = l143;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })(), v1468);
                    var v1470 = l130.fvalue(pv, 2, (function(){
                        var symbol = l338;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })(), l130.fvalue(pv, 2, (function(){
                        var symbol = l144;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })(), v1468));
                    ((l377).value = l382.fvalue(pv, 1, l69.fvalue(pv, 2, (function(){
                        var symbol = l509;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })(), v1469)));
                    var v1471 = l5.value;
                    return l334.fvalue(values, 8, l503, l127.fvalue(pv, 2, l130.fvalue(pv, 2, (function (values,nargs,v1472){
                        checkArgs(nargs, 1);
                        return (l509.fvalue(pv, 1, v1472) !== l5.value ? (function(v1473){
                            (function(){
                                var v1474 = ({car: v1472, cdr: v1473});
                                var v1475 = ({car: v1474, cdr: v1471});
                                return (v1471 = v1475);
                            })();
                            return v1473;
                        })(l379.fvalue(pv, 1, v1472)) : l381.fvalue(values, 1, v1472));
                    }), v1469), l469), l452, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), (function(v1476){
                        return l341.fvalue(pv, 1, l510.fvalue(pv, 2, v1471, v1476));
                    })(l470.fvalue(pv, 2, v1465, l4.value)), l504, l127.fvalue(pv, 2, v1470, l469), l244);
                }
                finally {
                    l377.value = v1477;
                }
            })();
        })();
    }));
    var v1478 = ({car: v1464, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1478);
})();
var l520 = (new Symbol(make_lisp_string("LET*-INITIALIZE-VALUE")));
(function(){
    (l520).fvalue = (function(){
        var func = (function (values,nargs,v1479){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1481,v1482){
                    return (l509.fvalue(pv, 1, v1481) !== l5.value ? l334.fvalue(values, 3, l338.fvalue(pv, 1, l104.fvalue(pv, 3, l105, v1481, v1482)), l421, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })()) : (function(){
                        var v1483 = l379.fvalue(pv, 1, v1481);
                        var v1484 = l345.fvalue(pv, 6, l346.value, v1481, l347.value, l96, l348.value, v1483);
                        return (function(v1485){
                            l375.fvalue(pv, 3, v1484, (function(){
                                var symbol = l377;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), l96);
                            return v1485;
                        })(l334.fvalue(pv, 6, l440, v1483, l448, l338.fvalue(pv, 1, v1482), l421, (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })()));
                    })());
                })(l143.fvalue(pv, 1, v1479),l144.fvalue(pv, 1, v1479));
            })();
        });
        func.fname = 'LET*-INITIALIZE-VALUE';
        return func;
    })();
    return l520;
})();
var l521 = (new Symbol(make_lisp_string("LET*-BINDING-WRAPPER")));
(function(){
    (l521).fvalue = (function(){
        var func = (function (values,nargs,v1486,v1487){
            checkArgs(nargs, 2);
            return (function(){
                try {
                var v1488 = [];
                    (l42.fvalue(pv, 1, v1486) !== l5.value ? (function(){
                        var values = mv;
                        throw ({type: 'block', id: v1488, values: v1487, message: 'Return from unknown block LET*-BINDING-WRAPPER.'})
                    })() : l5.value);
                    return (function(v1490){
                        return l334.fvalue(values, 10, l511, (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), l341.fvalue(pv, 2, l129.fvalue(pv, 2, (function (values,nargs,v1491){
                            checkArgs(nargs, 1);
                            return (function(v1492){
                                return l334.fvalue(values, 6, l440, (function(){
                                    var tmp = v1491;
                                    return tmp === l5.value? l5.value: tmp.cdr;
                                })(), l448, v1492, l514, (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                    return value;
                                })());
                            })(l338.fvalue(pv, 1, l104.fvalue(pv, 2, l328, (function(){
                                var tmp = v1491;
                                return tmp === l5.value? l5.value: tmp.car;
                            })())));
                        }), v1490), v1487), l438, (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), l517, (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), l341.fvalue(pv, 1, l129.fvalue(pv, 2, (function (values,nargs,v1493){
                            checkArgs(nargs, 1);
                            return (function(v1494){
                                return l334.fvalue(values, 6, v1494, l518, l448, (function(){
                                    var tmp = v1493;
                                    return tmp === l5.value? l5.value: tmp.cdr;
                                })(), l421, (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                    return value;
                                })());
                            })(l338.fvalue(pv, 1, l104.fvalue(pv, 2, l328, (function(){
                                var tmp = v1493;
                                return tmp === l5.value? l5.value: tmp.car;
                            })())));
                        }), v1490)), l438, (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })());
                    })(l130.fvalue(pv, 2, (function (values,nargs,v1489){
                        checkArgs(nargs, 1);
                        return ({car: v1489, cdr: l379.fvalue(pv, 1, v1489)});
                    }), l70.fvalue(pv, 2, (function(){
                        var symbol = l509;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })(), v1486)));
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == v1488)
                        return values.apply(this, forcemv(cf.values));
                    else
                        throw cf;
                }
            })();
        });
        func.fname = 'LET*-BINDING-WRAPPER';
        return func;
    })();
    return l521;
})();
var l522 = (new Symbol(make_lisp_string("LET*")));
(function(){
    var v1495 = l104.fvalue(pv, 2, l522, (function (values,nargs,v1497){
        checkArgsAtLeast(nargs, 1);
        var v1496= l5.value;
        for (var i = nargs-1; i>=1; i--)
            v1496 = {car: arguments[i+2], cdr: v1496};
        return (function(){
            return (function(v1499,v1500){
                try {
                    var tmp;
                    tmp = l377.value;
                    l377.value = v1500;
                    v1500 = tmp;
                    return l334.fvalue(values, 4, l419, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), l341.fvalue(pv, 1, (function(v1501,v1502){
                        return l521.fvalue(pv, 2, v1501, v1502);
                    })(l70.fvalue(pv, 2, (function(){
                        var symbol = l509;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })(), l130.fvalue(pv, 2, (function(){
                        var symbol = l143;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })(), v1499)),l117.fvalue(pv, 2, l129.fvalue(pv, 2, (function(){
                        var symbol = l520;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })(), v1499), l470.fvalue(pv, 2, v1496, l4.value)))), l426);
                }
                finally {
                    l377.value = v1500;
                }
            })(l130.fvalue(pv, 2, (function(){
                var symbol = l126;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                return func;
            })(), v1497),l366.fvalue(pv, 1, (function(){
                var symbol = l377;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()));
        })();
    }));
    var v1503 = ({car: v1495, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1503);
})();
var l523 = (new Symbol(make_lisp_string("MULTIPLE-VALUE")));
var l524 = (new Symbol(make_lisp_string("USED")));
var l525 = make_lisp_string(" = [];");
var l526 = make_lisp_string("catch (cf){");
var l527 = make_lisp_string("    if (cf.type == 'block' && cf.id == ");
var l528 = make_lisp_string("        return values.apply(this, forcemv(cf.values));");
var l529 = make_lisp_string("        return cf.values;");
var l530 = make_lisp_string("    else");
var l531 = make_lisp_string("        throw cf;");
(function(){
    var v1504 = l104.fvalue(pv, 2, l373, (function (values,nargs,v1506){
        checkArgsAtLeast(nargs, 1);
        var v1505= l5.value;
        for (var i = nargs-1; i>=1; i--)
            v1505 = {car: arguments[i+2], cdr: v1505};
        return (function(){
            return (function(){
                var v1508 = l379.fvalue(pv, 1, v1506);
                var v1509 = l345.fvalue(pv, 6, l346.value, v1506, l347.value, l373, l348.value, v1508);
                ((function(){
                    var symbol = l343;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? (function(){
                    var v1510 = l523;
                    var v1511 = v1509;
                    var v1512 = ({car: v1510, cdr: l358.fvalue(pv, 1, v1511)});
                    return (function(){
                        (function(){
                            var x = l160.fvalue(pv, 2, 4, v1511);
                            if (typeof x != 'object')
                                throw 'The value ' + x + ' is not a type object.';
                            return (x.car = v1512, x);
                        })();
                        return v1512;
                    })();
                })() : l5.value);
                return (function(){
                    try {
                        var v1514 = l377.value;
                        ((l377).value = l376.fvalue(pv, 3, l104.fvalue(pv, 1, v1509), (function(){
                            var symbol = l377;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), l373));
                        var v1513 = l470.fvalue(pv, 2, v1505, l4.value);
                        return (l195.fvalue(pv, 2, l524, l358.fvalue(pv, 1, v1509)) !== l5.value ? l334.fvalue(values, 4, l419, (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), l341.fvalue(pv, 23, l511, (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), l440, v1508, l525, (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), l341.fvalue(pv, 1, v1513), l438, (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), l526, (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), l527, v1508, l244, (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), ((function(){
                            var symbol = l343;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })() !== l5.value ? l528 : l529), (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), l530, (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), l531, (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), l438, (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })()), l426) : l334.fvalue(values, 4, l419, (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), l341.fvalue(pv, 1, v1513), l426));
                    }
                    finally {
                        l377.value = v1514;
                    }
                })();
            })();
        })();
    }));
    var v1515 = ({car: v1504, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1515);
})();
var l532 = (new Symbol(make_lisp_string("RETURN-FROM")));
var l533 = make_lisp_string("Return from unknown block `~S'.");
var l534 = make_lisp_string("var values = mv;");
var l535 = make_lisp_string("throw ({");
var l536 = make_lisp_string("type: 'block', ");
var l537 = make_lisp_string("id: ");
var l538 = make_lisp_string("values: ");
var l539 = make_lisp_string("message: 'Return from unknown block ");
var l540 = make_lisp_string(".'");
(function(){
    var v1516 = l104.fvalue(pv, 2, l532, (function (values,nargs,v1517,v1518){
        checkArgsAtLeast(nargs, 1);
        checkArgsAtMost(nargs, 2);
        switch(nargs){
        case 1:
            v1518=l5.value;
        default: break;
        }
        return (function(){
            return (function(){
                var v1520 = l372.fvalue(pv, 3, v1517, (function(){
                    var symbol = l377;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l373);
                var v1521 = l195.fvalue(pv, 2, l523, l358.fvalue(pv, 1, v1520));
                (l42.fvalue(pv, 1, v1520) !== l5.value ? l81.fvalue(pv, 2, l533, (v1517).name) : l5.value);
                (function(){
                    var v1522 = l524;
                    var v1523 = v1520;
                    var v1524 = ({car: v1522, cdr: l358.fvalue(pv, 1, v1523)});
                    return (function(){
                        (function(){
                            var x = l160.fvalue(pv, 2, 4, v1523);
                            if (typeof x != 'object')
                                throw 'The value ' + x + ' is not a type object.';
                            return (x.car = v1524, x);
                        })();
                        return v1524;
                    })();
                })();
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 13, (v1521 !== l5.value ? l334.fvalue(pv, 2, l534, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()) : l5.value), l535, l536, l537, l357.fvalue(pv, 1, v1520), l475, l538, l338.fvalue(pv, 2, v1518, v1521), l475, l539, (v1517).name, l540, l471), l426);
            })();
        })();
    }));
    var v1525 = ({car: v1516, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1525);
})();
var l541 = (new Symbol(make_lisp_string("CATCH")));
var l542 = make_lisp_string("var id = ");
var l543 = make_lisp_string("    if (cf.type == 'catch' && cf.id == id)");
var l544 = make_lisp_string("        return pv.apply(this, forcemv(cf.values));");
(function(){
    var v1526 = l104.fvalue(pv, 2, l541, (function (values,nargs,v1528){
        checkArgsAtLeast(nargs, 1);
        var v1527= l5.value;
        for (var i = nargs-1; i>=1; i--)
            v1527 = {car: arguments[i+2], cdr: v1527};
        return (function(){
            return l334.fvalue(values, 4, l419, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l341.fvalue(pv, 22, l542, l338.fvalue(pv, 1, v1528), l421, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l511, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l341.fvalue(pv, 1, l470.fvalue(pv, 2, v1527, l4.value)), (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l438, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l526, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l543, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), ((function(){
                var symbol = l343;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l528 : l544), (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l530, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l531, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l438, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()), l426);
        })();
    }));
    var v1530 = ({car: v1526, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1530);
})();
var l545 = (new Symbol(make_lisp_string("THROW")));
var l546 = make_lisp_string("type: 'catch', ");
var l547 = make_lisp_string("message: 'Throw uncatched.'");
(function(){
    var v1531 = l104.fvalue(pv, 2, l545, (function (values,nargs,v1532,v1533){
        checkArgs(nargs, 2);
        return (function(){
            return l334.fvalue(values, 4, l419, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l341.fvalue(pv, 12, l534, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l535, l546, l537, l338.fvalue(pv, 1, v1532), l475, l538, l338.fvalue(pv, 2, v1533, l4.value), l475, l547, l471), l426);
        })();
    }));
    var v1535 = ({car: v1531, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1535);
})();
var l548 = (new Symbol(make_lisp_string("GO-TAG-P")));
(function(){
    (l548).fvalue = (function(){
        var func = (function (values,nargs,v1536){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1538){
                    return (v1538 !== l5.value ? v1538 : ((v1536 instanceof Symbol)?l4.value: l5.value));
                })(l63.fvalue(pv, 1, v1536));
            })();
        });
        func.fname = 'GO-TAG-P';
        return func;
    })();
    return l548;
})();
var l549 = (new Symbol(make_lisp_string("DECLARE-TAGBODY-TAGS")));
(function(){
    (l549).fvalue = (function(){
        var func = (function (values,nargs,v1539,v1540){
            checkArgs(nargs, 2);
            return (function(){
                return (function(){
                    var v1542 = 0;
                    var v1543 = l130.fvalue(pv, 2, (function (values,nargs,v1544){
                        checkArgs(nargs, 1);
                        return (function(v1547){
                            return l345.fvalue(values, 6, l346.value, v1544, l347.value, l374, l348.value, l104.fvalue(pv, 2, v1539, v1547));
                        })(l17.fvalue(pv, 1, (function(){
                            var v1545 = 1;
                            var v1546 = (function(){
                                var x1 = v1542;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v1545;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })();
                            return (v1542 = v1546);
                        })()));
                    }), l70.fvalue(pv, 2, (function(){
                        var symbol = l548;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })(), v1540));
                    return l376.fvalue(values, 3, v1543, (function(){
                        var symbol = l377;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), l374);
                })();
            })();
        });
        func.fname = 'DECLARE-TAGBODY-TAGS';
        return func;
    })();
    return l549;
})();
var l550 = (new Symbol(make_lisp_string("TAGBODY")));
var l551 = QIList(l5,l5);
var l552 = make_lisp_string("START");
var l553 = (new Symbol(make_lisp_string("BRANCH")));
var l554 = (new Symbol(make_lisp_string("TBIDX")));
var l555 = make_lisp_string("tbloop:");
var l556 = make_lisp_string("while (true) {");
var l557 = make_lisp_string("switch(");
var l558 = make_lisp_string("default:");
var l559 = make_lisp_string("    break tbloop;");
var l560 = make_lisp_string("catch (jump) {");
var l561 = make_lisp_string("    if (jump.type == 'tagbody' && jump.id == ");
var l562 = make_lisp_string("        ");
var l563 = make_lisp_string(" = jump.label;");
var l564 = make_lisp_string("        throw(jump);");
(function(){
    var v1548 = l104.fvalue(pv, 2, l550, (function (values,nargs){
        var v1549= l5.value;
        for (var i = nargs-1; i>=0; i--)
            v1549 = {car: arguments[i+2], cdr: v1549};
        return (function(){
            try {
            var v1550 = [];
                (l83.fvalue(pv, 2, (function(){
                    var symbol = l548;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })(), v1549) !== l5.value ? l5.value : (function(){
                    var values = mv;
                    throw ({type: 'block', id: v1550, values: l338.fvalue(values, 1, ({car: l200, cdr: l44.fvalue(pv, 2, v1549, l551)})), message: 'Return from unknown block TAGBODY.'})
                })());
                (l548.fvalue(pv, 1, (function(){
                    var tmp = v1549;
                    return tmp === l5.value? l5.value: tmp.car;
                })()) !== l5.value ? l5.value : (function(){
                    var v1551 = l15.fvalue(pv, 1, l552);
                    var v1552 = ({car: v1551, cdr: v1549});
                    return (v1549 = v1552);
                })());
                return (function(v1553,v1554){
                    return (function(v1556,v1555){
                        try {
                            var tmp;
                            tmp = l377.value;
                            l377.value = v1556;
                            v1556 = tmp;
                            (function(v1557){
                                return (v1555 = l144.fvalue(pv, 1, l357.fvalue(pv, 1, v1557)));
                            })(l372.fvalue(pv, 3, l143.fvalue(pv, 1, v1549), (function(){
                                var symbol = l377;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), l374));
                            return l334.fvalue(values, 4, l419, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), l341.fvalue(pv, 21, l440, v1553, l448, v1555, l421, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), l440, v1554, l525, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), l555, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), l556, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), l341.fvalue(pv, 21, l511, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), l341.fvalue(pv, 1, (function(v1558){
                                return l334.fvalue(pv, 15, l557, v1553, l452, (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                    return value;
                                })(), l435, v1555, l230, (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                    return value;
                                })(), (function(){
                                    return (function(v1560,v1561){
                                        (function(){
                                            while(v1560 !== l5.value){
                                                (v1561 = (function(){
                                                    var tmp = v1560;
                                                    return tmp === l5.value? l5.value: tmp.car;
                                                })());
                                                (function(){
                                                    (v1558 = l117.fvalue(pv, 2, v1558, (l27.fvalue(pv, 1, l548.fvalue(pv, 1, v1561)) !== l5.value ? l341.fvalue(pv, 3, l338.fvalue(pv, 1, v1561), l421, (function(){
                                                        var symbol = l123;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                        return value;
                                                    })()) : (function(v1562){
                                                        return l334.fvalue(pv, 4, l435, l144.fvalue(pv, 1, l357.fvalue(pv, 1, v1562)), l230, (function(){
                                                            var symbol = l123;
                                                            var value = symbol.value;
                                                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                            return value;
                                                        })());
                                                    })(l372.fvalue(pv, 3, v1561, (function(){
                                                        var symbol = l377;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                        return value;
                                                    })(), l374)))));
                                                    return l5.value;
                                                })();
                                                (v1560 = (function(){
                                                    var tmp = v1560;
                                                    return tmp === l5.value? l5.value: tmp.cdr;
                                                })());
                                            }return l5.value;
                                        })();
                                        return v1558;
                                    })((function(){
                                        var tmp = v1549;
                                        return tmp === l5.value? l5.value: tmp.cdr;
                                    })(),l5.value);
                                })(), l558, (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                    return value;
                                })(), l559, (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                    return value;
                                })(), l438, (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                    return value;
                                })());
                            })(l118)), l438, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), l560, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), l561, v1554, l244, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), l562, v1553, l563, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), l530, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), l564, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), l438, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })()), l438, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), l496, l338.fvalue(pv, 1, l5.value), l421, (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })()), l426);
                        }
                        finally {
                            l377.value = v1556;
                        }
                    })(l549.fvalue(pv, 2, v1554, v1549),l5.value);
                })(l379.fvalue(pv, 1, l553),l379.fvalue(pv, 1, l554));
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == v1550)
                    return values.apply(this, forcemv(cf.values));
                else
                    throw cf;
            }
        })();
    }));
    var v1563 = ({car: v1548, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1563);
})();
var l565 = (new Symbol(make_lisp_string("GO")));
var l566 = make_lisp_string("Unknown tag `~S'");
var l567 = make_lisp_string("type: 'tagbody', ");
var l568 = make_lisp_string("label: ");
var l569 = make_lisp_string("message: 'Attempt to GO to non-existing tag ");
var l570 = make_lisp_string("'");
(function(){
    var v1564 = l104.fvalue(pv, 2, l565, (function (values,nargs,v1565){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1569,v1570){
                (l42.fvalue(pv, 1, v1569) !== l5.value ? l81.fvalue(pv, 2, l566, v1565) : l5.value);
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 13, l535, l567, l537, l143.fvalue(pv, 1, l357.fvalue(pv, 1, v1569)), l475, l568, l144.fvalue(pv, 1, l357.fvalue(pv, 1, v1569)), l475, l569, v1570, l570, l471, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l426);
            })(l372.fvalue(pv, 3, v1565, (function(){
                var symbol = l377;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l374),(function(v1567){
                return (v1567 !== l5.value ? (v1565).name : (function(v1568){
                    return (v1568 !== l5.value ? l17.fvalue(pv, 1, v1565) : l5.value);
                })(l63.fvalue(pv, 1, v1565)));
            })(((v1565 instanceof Symbol)?l4.value: l5.value)));
        })();
    }));
    var v1571 = ({car: v1564, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1571);
})();
var l571 = (new Symbol(make_lisp_string("UNWIND-PROTECT")));
var l572 = make_lisp_string("var ret = ");
var l573 = make_lisp_string("ret = ");
var l574 = make_lisp_string("} finally {");
var l575 = make_lisp_string("return ret;");
(function(){
    var v1572 = l104.fvalue(pv, 2, l571, (function (values,nargs,v1574){
        checkArgsAtLeast(nargs, 1);
        var v1573= l5.value;
        for (var i = nargs-1; i>=1; i--)
            v1573 = {car: arguments[i+2], cdr: v1573};
        return (function(){
            return l334.fvalue(values, 4, l419, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l341.fvalue(pv, 14, l572, l338.fvalue(pv, 1, l5.value), l421, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l511, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l341.fvalue(pv, 4, l573, l338.fvalue(pv, 1, v1574), l421, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()), l574, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l341.fvalue(pv, 1, l470.fvalue(pv, 1, v1573)), l438, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l575, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()), l426);
        })();
    }));
    var v1576 = ({car: v1572, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1576);
})();
var l576 = (new Symbol(make_lisp_string("MULTIPLE-VALUE-CALL")));
var l577 = make_lisp_string("var args = [");
var l578 = make_lisp_string("pv");
var l579 = make_lisp_string(", 0];");
var l580 = make_lisp_string("var vs;");
var l581 = make_lisp_string("vs = ");
var l582 = make_lisp_string("if (typeof vs === 'object' && 'multiple-value' in vs)");
var l583 = make_lisp_string("args = args.concat(vs);");
var l584 = make_lisp_string("else");
var l585 = make_lisp_string("args.push(vs);");
var l586 = make_lisp_string("args[1] = args.length-2;");
var l587 = make_lisp_string("return func.apply(window, args);");
(function(){
    var v1577 = l104.fvalue(pv, 2, l576, (function (values,nargs,v1579){
        checkArgsAtLeast(nargs, 1);
        var v1578= l5.value;
        for (var i = nargs-1; i>=1; i--)
            v1578 = {car: arguments[i+2], cdr: v1578};
        return (function(){
            return l334.fvalue(values, 4, l419, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l341.fvalue(pv, 12, l420, l338.fvalue(pv, 1, v1579), l421, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l577, ((function(){
                var symbol = l343;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l467 : l578), l579, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l496, l334.fvalue(pv, 4, l419, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l341.fvalue(pv, 9, l534, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l580, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l129.fvalue(pv, 2, (function (values,nargs,v1581){
                checkArgs(nargs, 1);
                return l334.fvalue(values, 10, l581, l338.fvalue(pv, 2, v1581, l4.value), l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l582, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 2, l583, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l584, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 2, l585, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()));
            }), v1578), l586, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l587, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()), l426), l421, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()), l426);
        })();
    }));
    var v1582 = ({car: v1577, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1582);
})();
var l588 = (new Symbol(make_lisp_string("MULTIPLE-VALUE-PROG1")));
var l589 = make_lisp_string("var args = ");
var l590 = make_lisp_string("return args;");
(function(){
    var v1583 = l104.fvalue(pv, 2, l588, (function (values,nargs,v1585){
        checkArgsAtLeast(nargs, 1);
        var v1584= l5.value;
        for (var i = nargs-1; i>=1; i--)
            v1584 = {car: arguments[i+2], cdr: v1584};
        return (function(){
            return l334.fvalue(values, 4, l419, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l341.fvalue(pv, 7, l589, l338.fvalue(pv, 2, v1585, (function(){
                var symbol = l343;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()), l421, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l470.fvalue(pv, 1, v1584), l590, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()), l426);
        })();
    }));
    var v1587 = ({car: v1583, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1587);
})();
var l591 = (new Symbol(make_lisp_string("*COMMA*")));
(function(){
    (((l591.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l591).value = l331));
    return l591;
})();
var l592 = (new Symbol(make_lisp_string("*COMMA-ATSIGN*")));
(function(){
    (((l592.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l592).value = l330));
    return l592;
})();
var l593 = (new Symbol(make_lisp_string("*BQ-LIST*")));
var l594 = make_lisp_string("BQ-LIST");
(function(){
    (((l593.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l593).value = (new Symbol(l594))));
    return l593;
})();
var l595 = (new Symbol(make_lisp_string("*BQ-APPEND*")));
var l596 = make_lisp_string("BQ-APPEND");
(function(){
    (((l595.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l595).value = (new Symbol(l596))));
    return l595;
})();
var l597 = (new Symbol(make_lisp_string("*BQ-LIST**")));
var l598 = make_lisp_string("BQ-LIST*");
(function(){
    (((l597.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l597).value = (new Symbol(l598))));
    return l597;
})();
var l599 = (new Symbol(make_lisp_string("*BQ-NCONC*")));
var l600 = make_lisp_string("BQ-NCONC");
(function(){
    (((l599.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l599).value = (new Symbol(l600))));
    return l599;
})();
var l601 = (new Symbol(make_lisp_string("*BQ-CLOBBERABLE*")));
var l602 = make_lisp_string("BQ-CLOBBERABLE");
(function(){
    (((l601.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l601).value = (new Symbol(l602))));
    return l601;
})();
var l603 = (new Symbol(make_lisp_string("*BQ-QUOTE*")));
var l604 = make_lisp_string("BQ-QUOTE");
(function(){
    (((l603.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l603).value = (new Symbol(l604))));
    return l603;
})();
var l605 = (new Symbol(make_lisp_string("*BQ-QUOTE-NIL*")));
(function(){
    (((l605.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l605).value = l104.fvalue(pv, 2, (function(){
        var symbol = l603;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })(), l5.value)));
    return l605;
})();
var l606 = (new Symbol(make_lisp_string("*BQ-SIMPLIFY*")));
(function(){
    ((l606).value = l4.value);
    return l606;
})();
l329;
var l607 = (new Symbol(make_lisp_string("BQ-COMPLETELY-PROCESS")));
var l608 = (new Symbol(make_lisp_string("BQ-PROCESS")));
var l609 = (new Symbol(make_lisp_string("BQ-SIMPLIFY")));
var l610 = (new Symbol(make_lisp_string("BQ-REMOVE-TOKENS")));
(function(){
    (l607).fvalue = (function(){
        var func = (function (values,nargs,v1588){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1590){
                    return l610.fvalue(values, 1, ((function(){
                        var symbol = l606;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })() !== l5.value ? l609.fvalue(pv, 1, v1590) : v1590));
                })(l608.fvalue(pv, 1, v1588));
            })();
        });
        func.fname = 'BQ-COMPLETELY-PROCESS';
        return func;
    })();
    return l607;
})();
var l611 = make_lisp_string(",@~S after `");
var l612 = make_lisp_string("Malformed ,~S");
var l613 = make_lisp_string("Dotted ,@~S");
var l614 = (new Symbol(make_lisp_string("BRACKET")));
(function(){
    (l608).fvalue = (function(){
        var func = (function (values,nargs,v1591){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1593){
                    return (v1593 !== l5.value ? l104.fvalue(values, 2, (function(){
                        var symbol = l603;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), v1591) : (function(v1594){
                        return (v1594 !== l5.value ? l608.fvalue(values, 1, l607.fvalue(pv, 1, l145.fvalue(pv, 1, v1591))) : (function(v1595){
                            return (v1595 !== l5.value ? l145.fvalue(values, 1, v1591) : (function(v1596){
                                return (v1596 !== l5.value ? l81.fvalue(values, 2, l611, l145.fvalue(pv, 1, v1591)) : (function(){
                                    return (function(v1598,v1599){
                                        return (function(){
                                            try {
                                            var v1600 = [];
                                                return (function(){
                                                    while(l4.value !== l5.value){
                                                        (l67.fvalue(pv, 1, v1598) !== l5.value ? (function(){
                                                            var values = mv;
                                                            throw ({type: 'block', id: v1600, values: ({car: (function(){
                                                                var symbol = l595;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                                return value;
                                                            })(), cdr: l205.fvalue(pv, 2, v1599, l104.fvalue(pv, 1, l104.fvalue(pv, 2, (function(){
                                                                var symbol = l603;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                                return value;
                                                            })(), v1598)))}), message: 'Return from unknown block NIL.'})
                                                        })() : l5.value);
                                                        (function(){
                                                            ((((function(){
                                                                var tmp = v1598;
                                                                return tmp === l5.value? l5.value: tmp.car;
                                                            })() === (function(){
                                                                var symbol = l591;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                                return value;
                                                            })())?l4.value: l5.value) !== l5.value ? (function(){
                                                                (l42.fvalue(pv, 1, l159.fvalue(pv, 1, v1598)) !== l5.value ? l5.value : l81.fvalue(pv, 2, l612, v1598));
                                                                return (function(){
                                                                    var values = mv;
                                                                    throw ({type: 'block', id: v1600, values: ({car: (function(){
                                                                        var symbol = l595;
                                                                        var value = symbol.value;
                                                                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                                        return value;
                                                                    })(), cdr: l205.fvalue(pv, 2, v1599, l104.fvalue(pv, 1, l145.fvalue(pv, 1, v1598)))}), message: 'Return from unknown block NIL.'})
                                                                })();
                                                            })() : l5.value);
                                                            ((((function(){
                                                                var tmp = v1598;
                                                                return tmp === l5.value? l5.value: tmp.car;
                                                            })() === (function(){
                                                                var symbol = l592;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                                return value;
                                                            })())?l4.value: l5.value) !== l5.value ? l81.fvalue(pv, 2, l613, v1598) : l5.value);
                                                            return l5.value;
                                                        })();
                                                        (function(v1601,v1602){
                                                            return (v1598 = v1601, v1599 = v1602);
                                                        })((function(){
                                                            var tmp = v1598;
                                                            return tmp === l5.value? l5.value: tmp.cdr;
                                                        })(),({car: l614.fvalue(pv, 1, (function(){
                                                            var tmp = v1598;
                                                            return tmp === l5.value? l5.value: tmp.car;
                                                        })()), cdr: v1599}));
                                                    }return l5.value;
                                                })();
                                            }
                                            catch (cf){
                                                if (cf.type == 'block' && cf.id == v1600)
                                                    return values.apply(this, forcemv(cf.values));
                                                else
                                                    throw cf;
                                            }
                                        })();
                                    })(v1591,l5);
                                })());
                            })((((function(){
                                var tmp = v1591;
                                return tmp === l5.value? l5.value: tmp.car;
                            })() === (function(){
                                var symbol = l592;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })())?l4.value: l5.value)));
                        })((((function(){
                            var tmp = v1591;
                            return tmp === l5.value? l5.value: tmp.car;
                        })() === (function(){
                            var symbol = l591;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })())?l4.value: l5.value)));
                    })((((function(){
                        var tmp = v1591;
                        return tmp === l5.value? l5.value: tmp.car;
                    })() === l329)?l4.value: l5.value)));
                })(l67.fvalue(pv, 1, v1591));
            })();
        });
        func.fname = 'BQ-PROCESS';
        return func;
    })();
    return l608;
})();
(function(){
    (l614).fvalue = (function(){
        var func = (function (values,nargs,v1603){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1605){
                    return (v1605 !== l5.value ? l104.fvalue(values, 2, (function(){
                        var symbol = l593;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), l608.fvalue(pv, 1, v1603)) : (function(v1606){
                        return (v1606 !== l5.value ? l104.fvalue(values, 2, (function(){
                            var symbol = l593;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), l145.fvalue(pv, 1, v1603)) : (function(v1607){
                            return (v1607 !== l5.value ? l145.fvalue(values, 1, v1603) : l104.fvalue(values, 2, (function(){
                                var symbol = l593;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), l608.fvalue(pv, 1, v1603)));
                        })((((function(){
                            var tmp = v1603;
                            return tmp === l5.value? l5.value: tmp.car;
                        })() === (function(){
                            var symbol = l592;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })())?l4.value: l5.value)));
                    })((((function(){
                        var tmp = v1603;
                        return tmp === l5.value? l5.value: tmp.car;
                    })() === (function(){
                        var symbol = l591;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })())?l4.value: l5.value)));
                })(l67.fvalue(pv, 1, v1603));
            })();
        });
        func.fname = 'BRACKET';
        return func;
    })();
    return l614;
})();
var l615 = (new Symbol(make_lisp_string("MAPTREE")));
(function(){
    (l615).fvalue = (function(){
        var func = (function (values,nargs,v1608,v1609){
            checkArgs(nargs, 2);
            return (function(){
                return (l67.fvalue(pv, 1, v1609) !== l5.value ? (function(){
                    var f = v1608;
                    return (typeof f === 'function'? f: f.fvalue)(values, 1, v1609)
                })() : (function(v1611,v1612){
                    return ((l26.fvalue(pv, 2, v1611, (function(){
                        var tmp = v1609;
                        return tmp === l5.value? l5.value: tmp.car;
                    })()) !== l5.value ? l26.fvalue(pv, 2, v1612, (function(){
                        var tmp = v1609;
                        return tmp === l5.value? l5.value: tmp.cdr;
                    })()) : l5.value) !== l5.value ? v1609 : ({car: v1611, cdr: v1612}));
                })((function(){
                    var f = v1608;
                    return (typeof f === 'function'? f: f.fvalue)(pv, 1, (function(){
                        var tmp = v1609;
                        return tmp === l5.value? l5.value: tmp.car;
                    })())
                })(),l615.fvalue(pv, 2, v1608, (function(){
                    var tmp = v1609;
                    return tmp === l5.value? l5.value: tmp.cdr;
                })())));
            })();
        });
        func.fname = 'MAPTREE';
        return func;
    })();
    return l615;
})();
var l616 = (new Symbol(make_lisp_string("BQ-SPLICING-FROB")));
(function(){
    (l616).fvalue = (function(){
        var func = (function (values,nargs,v1613){
            checkArgs(nargs, 1);
            return (function(){
                return (((function(){
                    var tmp = v1613;
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?l4.value: l5.value) !== l5.value ? (((function(){
                    var tmp = v1613;
                    return tmp === l5.value? l5.value: tmp.car;
                })() === (function(){
                    var symbol = l592;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())?l4.value: l5.value) : l5.value);
            })();
        });
        func.fname = 'BQ-SPLICING-FROB';
        return func;
    })();
    return l616;
})();
var l617 = (new Symbol(make_lisp_string("BQ-FROB")));
(function(){
    (l617).fvalue = (function(){
        var func = (function (values,nargs,v1615){
            checkArgs(nargs, 1);
            return (function(){
                return (((function(){
                    var tmp = v1615;
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?l4.value: l5.value) !== l5.value ? (function(v1617){
                    return (v1617 !== l5.value ? v1617 : (((function(){
                        var tmp = v1615;
                        return tmp === l5.value? l5.value: tmp.car;
                    })() === (function(){
                        var symbol = l592;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })())?l4.value: l5.value));
                })((((function(){
                    var tmp = v1615;
                    return tmp === l5.value? l5.value: tmp.car;
                })() === (function(){
                    var symbol = l591;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())?l4.value: l5.value)) : l5.value);
            })();
        });
        func.fname = 'BQ-FROB';
        return func;
    })();
    return l617;
})();
var l618 = (new Symbol(make_lisp_string("BQ-SIMPLIFY-ARGS")));
(function(){
    (l609).fvalue = (function(){
        var func = (function (values,nargs,v1618){
            checkArgs(nargs, 1);
            return (function(){
                return (l67.fvalue(pv, 1, v1618) !== l5.value ? v1618 : (function(v1620){
                    return (l27.fvalue(pv, 1, (((function(){
                        var tmp = v1620;
                        return tmp === l5.value? l5.value: tmp.car;
                    })() === (function(){
                        var symbol = l595;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })())?l4.value: l5.value)) !== l5.value ? v1620 : l618.fvalue(values, 1, v1620));
                })(((((function(){
                    var tmp = v1618;
                    return tmp === l5.value? l5.value: tmp.car;
                })() === (function(){
                    var symbol = l603;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())?l4.value: l5.value) !== l5.value ? v1618 : l615.fvalue(pv, 2, (function(){
                    var symbol = l609;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })(), v1618))));
            })();
        });
        func.fname = 'BQ-SIMPLIFY';
        return func;
    })();
    return l609;
})();
var l619 = (new Symbol(make_lisp_string("BQ-ATTACH-APPEND")));
var l620 = (new Symbol(make_lisp_string("BQ-ATTACH-CONSES")));
(function(){
    (l618).fvalue = (function(){
        var func = (function (values,nargs,v1621){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    return (function(v1624,v1625){
                        return (function(){
                            try {
                            var v1626 = [];
                                return (function(){
                                    while(l4.value !== l5.value){
                                        (l42.fvalue(pv, 1, v1624) !== l5.value ? (function(){
                                            var values = mv;
                                            throw ({type: 'block', id: v1626, values: v1625, message: 'Return from unknown block NIL.'})
                                        })() : l5.value);
                                        l5.value;
                                        (function(v1632,v1633){
                                            return (v1624 = v1632, v1625 = v1633);
                                        })((function(){
                                            var tmp = v1624;
                                            return tmp === l5.value? l5.value: tmp.cdr;
                                        })(),(function(v1627){
                                            return (v1627 !== l5.value ? l619.fvalue(pv, 3, (function(){
                                                var symbol = l595;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                return value;
                                            })(), (function(){
                                                var tmp = v1624;
                                                return tmp === l5.value? l5.value: tmp.car;
                                            })(), v1625) : (function(v1628){
                                                return (v1628 !== l5.value ? l620.fvalue(pv, 2, l163.fvalue(pv, 1, v1624), v1625) : (function(v1629){
                                                    return (v1629 !== l5.value ? l620.fvalue(pv, 2, l47.fvalue(pv, 1, (function(){
                                                        var tmp = l47.fvalue(pv, 1, l163.fvalue(pv, 1, v1624));
                                                        return tmp === l5.value? l5.value: tmp.cdr;
                                                    })()), l619.fvalue(pv, 3, (function(){
                                                        var symbol = l595;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                        return value;
                                                    })(), (function(){
                                                        var tmp = l193.fvalue(pv, 1, (function(){
                                                            var tmp = v1624;
                                                            return tmp === l5.value? l5.value: tmp.car;
                                                        })());
                                                        return tmp === l5.value? l5.value: tmp.car;
                                                    })(), v1625)) : (function(v1630){
                                                        return (v1630 !== l5.value ? l620.fvalue(pv, 2, l104.fvalue(pv, 1, l104.fvalue(pv, 2, (function(){
                                                            var symbol = l603;
                                                            var value = symbol.value;
                                                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                            return value;
                                                        })(), l173.fvalue(pv, 1, v1624))), v1625) : (function(v1631){
                                                            return (v1631 !== l5.value ? l619.fvalue(pv, 3, (function(){
                                                                var symbol = l599;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                                return value;
                                                            })(), l164.fvalue(pv, 1, v1624), v1625) : l619.fvalue(pv, 3, (function(){
                                                                var symbol = l595;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                                return value;
                                                            })(), (function(){
                                                                var tmp = v1624;
                                                                return tmp === l5.value? l5.value: tmp.car;
                                                            })(), v1625));
                                                        })(((l162.fvalue(pv, 1, v1624) === (function(){
                                                            var symbol = l601;
                                                            var value = symbol.value;
                                                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                            return value;
                                                        })())?l4.value: l5.value)));
                                                    })((((l162.fvalue(pv, 1, v1624) === (function(){
                                                        var symbol = l603;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                        return value;
                                                    })())?l4.value: l5.value) !== l5.value ? (((function(){
                                                        var tmp = l164.fvalue(pv, 1, v1624);
                                                        return (typeof tmp == 'object' && 'car' in tmp);
                                                    })()?l4.value: l5.value) !== l5.value ? (l27.fvalue(pv, 1, l617.fvalue(pv, 1, l164.fvalue(pv, 1, v1624))) !== l5.value ? l42.fvalue(pv, 1, l170.fvalue(pv, 1, v1624)) : l5.value) : l5.value) : l5.value)));
                                                })((((l162.fvalue(pv, 1, v1624) === (function(){
                                                    var symbol = l597;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                    return value;
                                                })())?l4.value: l5.value) !== l5.value ? l112.fvalue(pv, 2, (function(){
                                                    var symbol = l616;
                                                    var func = symbol.fvalue;
                                                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                                                    return func;
                                                })(), l163.fvalue(pv, 1, v1624)) : l5.value)));
                                            })((((l162.fvalue(pv, 1, v1624) === (function(){
                                                var symbol = l593;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                return value;
                                            })())?l4.value: l5.value) !== l5.value ? l112.fvalue(pv, 2, (function(){
                                                var symbol = l616;
                                                var func = symbol.fvalue;
                                                if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                                                return func;
                                            })(), l163.fvalue(pv, 1, v1624)) : l5.value)));
                                        })(l67.fvalue(pv, 1, (function(){
                                            var tmp = v1624;
                                            return tmp === l5.value? l5.value: tmp.car;
                                        })())));
                                    }return l5.value;
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == v1626)
                                    return values.apply(this, forcemv(cf.values));
                                else
                                    throw cf;
                            }
                        })();
                    })(l47.fvalue(pv, 1, (function(){
                        var tmp = v1621;
                        return tmp === l5.value? l5.value: tmp.cdr;
                    })()),l5.value);
                })();
            })();
        });
        func.fname = 'BQ-SIMPLIFY-ARGS';
        return func;
    })();
    return l618;
})();
var l621 = (new Symbol(make_lisp_string("NULL-OR-QUOTED")));
(function(){
    (l621).fvalue = (function(){
        var func = (function (values,nargs,v1634){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1636){
                    return (v1636 !== l5.value ? v1636 : (((function(){
                        var tmp = v1634;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l5.value) !== l5.value ? (((function(){
                        var tmp = v1634;
                        return tmp === l5.value? l5.value: tmp.car;
                    })() === (function(){
                        var symbol = l603;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })())?l4.value: l5.value) : l5.value));
                })(l42.fvalue(pv, 1, v1634));
            })();
        });
        func.fname = 'NULL-OR-QUOTED';
        return func;
    })();
    return l621;
})();
(function(){
    (l619).fvalue = (function(){
        var func = (function (values,nargs,v1637,v1638,v1639){
            checkArgs(nargs, 3);
            return (function(){
                return (function(v1641){
                    return (v1641 !== l5.value ? l104.fvalue(values, 2, (function(){
                        var symbol = l603;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), l44.fvalue(pv, 2, l145.fvalue(pv, 1, v1638), l145.fvalue(pv, 1, v1639))) : (function(v1643){
                        return (v1643 !== l5.value ? (l616.fvalue(pv, 1, v1638) !== l5.value ? l104.fvalue(values, 2, v1637, v1638) : v1638) : (function(v1644){
                            return (v1644 !== l5.value ? l158.fvalue(values, 3, (function(){
                                var tmp = v1639;
                                return tmp === l5.value? l5.value: tmp.car;
                            })(), v1638, (function(){
                                var tmp = v1639;
                                return tmp === l5.value? l5.value: tmp.cdr;
                            })()) : l104.fvalue(values, 3, v1637, v1638, v1639));
                        })((((function(){
                            var tmp = v1639;
                            return (typeof tmp == 'object' && 'car' in tmp);
                        })()?l4.value: l5.value) !== l5.value ? (((function(){
                            var tmp = v1639;
                            return tmp === l5.value? l5.value: tmp.car;
                        })() === v1637)?l4.value: l5.value) : l5.value)));
                    })((function(v1642){
                        return (v1642 !== l5.value ? v1642 : l87.fvalue(pv, 2, v1639, (function(){
                            var symbol = l605;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })()));
                    })(l42.fvalue(pv, 1, v1639))));
                })((l621.fvalue(pv, 1, v1638) !== l5.value ? l621.fvalue(pv, 1, v1639) : l5.value));
            })();
        });
        func.fname = 'BQ-ATTACH-APPEND';
        return func;
    })();
    return l619;
})();
(function(){
    (l620).fvalue = (function(){
        var func = (function (values,nargs,v1645,v1646){
            checkArgs(nargs, 2);
            return (function(){
                return (function(v1648){
                    return (v1648 !== l5.value ? l104.fvalue(values, 2, (function(){
                        var symbol = l603;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), l44.fvalue(pv, 2, l130.fvalue(pv, 2, (function(){
                        var symbol = l145;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })(), v1645), l145.fvalue(pv, 1, v1646))) : (function(v1650){
                        return (v1650 !== l5.value ? ({car: (function(){
                            var symbol = l593;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })(), cdr: v1645}) : (function(v1652){
                            return (v1652 !== l5.value ? ({car: (function(){
                                var tmp = v1646;
                                return tmp === l5.value? l5.value: tmp.car;
                            })(), cdr: l44.fvalue(pv, 2, v1645, (function(){
                                var tmp = v1646;
                                return tmp === l5.value? l5.value: tmp.cdr;
                            })())}) : ({car: (function(){
                                var symbol = l597;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })(), cdr: l44.fvalue(pv, 2, v1645, l104.fvalue(pv, 1, v1646))}));
                        })((((function(){
                            var tmp = v1646;
                            return (typeof tmp == 'object' && 'car' in tmp);
                        })()?l4.value: l5.value) !== l5.value ? (function(v1651){
                            return (v1651 !== l5.value ? v1651 : (((function(){
                                var tmp = v1646;
                                return tmp === l5.value? l5.value: tmp.car;
                            })() === (function(){
                                var symbol = l597;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })())?l4.value: l5.value));
                        })((((function(){
                            var tmp = v1646;
                            return tmp === l5.value? l5.value: tmp.car;
                        })() === (function(){
                            var symbol = l593;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })())?l4.value: l5.value)) : l5.value)));
                    })((function(v1649){
                        return (v1649 !== l5.value ? v1649 : l87.fvalue(pv, 2, v1646, (function(){
                            var symbol = l605;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })()));
                    })(l42.fvalue(pv, 1, v1646))));
                })((l84.fvalue(pv, 2, (function(){
                    var symbol = l621;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })(), v1645) !== l5.value ? l621.fvalue(pv, 1, v1646) : l5.value));
            })();
        });
        func.fname = 'BQ-ATTACH-CONSES';
        return func;
    })();
    return l620;
})();
(function(){
    (l610).fvalue = (function(){
        var func = (function (values,nargs,v1653){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v1655){
                    return (v1655 !== l5.value ? l104 : (function(v1656){
                        return (v1656 !== l5.value ? l44 : (function(v1657){
                            return (v1657 !== l5.value ? l203 : (function(v1658){
                                return (v1658 !== l5.value ? l158 : (function(v1659){
                                    return (v1659 !== l5.value ? l328 : (function(v1660){
                                        return (v1660 !== l5.value ? v1653 : (function(v1661){
                                            return (v1661 !== l5.value ? l610.fvalue(values, 1, l145.fvalue(pv, 1, v1653)) : (function(v1662){
                                                return (v1662 !== l5.value ? ({car: l137, cdr: l615.fvalue(pv, 2, (function(){
                                                    var symbol = l610;
                                                    var func = symbol.fvalue;
                                                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                                                    return func;
                                                })(), (function(){
                                                    var tmp = v1653;
                                                    return tmp === l5.value? l5.value: tmp.cdr;
                                                })())}) : l615.fvalue(values, 2, (function(){
                                                    var symbol = l610;
                                                    var func = symbol.fvalue;
                                                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                                                    return func;
                                                })(), v1653));
                                            })(((((function(){
                                                var tmp = v1653;
                                                return tmp === l5.value? l5.value: tmp.car;
                                            })() === (function(){
                                                var symbol = l597;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                return value;
                                            })())?l4.value: l5.value) !== l5.value ? (((function(){
                                                var tmp = l159.fvalue(pv, 1, v1653);
                                                return (typeof tmp == 'object' && 'car' in tmp);
                                            })()?l4.value: l5.value) !== l5.value ? l42.fvalue(pv, 1, l165.fvalue(pv, 1, v1653)) : l5.value) : l5.value)));
                                        })((((function(){
                                            var tmp = v1653;
                                            return tmp === l5.value? l5.value: tmp.car;
                                        })() === (function(){
                                            var symbol = l601;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                            return value;
                                        })())?l4.value: l5.value)));
                                    })(l67.fvalue(pv, 1, v1653)));
                                })(((v1653 === (function(){
                                    var symbol = l603;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                    return value;
                                })())?l4.value: l5.value)));
                            })(((v1653 === (function(){
                                var symbol = l597;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                return value;
                            })())?l4.value: l5.value)));
                        })(((v1653 === (function(){
                            var symbol = l599;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })())?l4.value: l5.value)));
                    })(((v1653 === (function(){
                        var symbol = l595;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })())?l4.value: l5.value)));
                })(((v1653 === (function(){
                    var symbol = l593;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())?l4.value: l5.value));
            })();
        });
        func.fname = 'BQ-REMOVE-TOKENS';
        return func;
    })();
    return l610;
})();
(function(){
    var v1663 = l104.fvalue(pv, 2, l329, (function (values,nargs,v1664){
        checkArgs(nargs, 1);
        return (function(){
            return l338.fvalue(values, 1, l607.fvalue(pv, 1, v1664));
        })();
    }));
    var v1666 = ({car: v1663, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v1666);
})();
var l622 = (new Symbol(make_lisp_string("*BUILTINS*")));
(function(){
    (((l622.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l622).value = l5.value));
    return l622;
})();
var l623 = (new Symbol(make_lisp_string("DEFINE-RAW-BUILTIN")));
l623;
var l624 = (new Symbol(make_lisp_string("DEFINE-BUILTIN")));
l624;
var l625 = (new Symbol(make_lisp_string("TYPE-CHECK")));
l625;
var l626 = (new Symbol(make_lisp_string("VARIABLE-ARITY-CALL")));
var l627 = make_lisp_string("ARGS must be a non-empty list");
var l628 = make_lisp_string("x");
var l629 = make_lisp_string("if (typeof ");
var l630 = make_lisp_string(" !== 'number') throw 'Not a number!';");
(function(){
    (l626).fvalue = (function(){
        var func = (function (values,nargs,v1667,v1668){
            checkArgs(nargs, 2);
            return (function(){
                (((function(){
                    var tmp = v1667;
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?l4.value: l5.value) !== l5.value ? l5.value : l81.fvalue(pv, 1, l627));
                return (function(v1670,v1671,v1672){
                    (function(){
                        return (function(v1674,v1675){
                            (function(){
                                while(v1674 !== l5.value){
                                    (v1675 = (function(){
                                        var tmp = v1674;
                                        return tmp === l5.value? l5.value: tmp.car;
                                    })());
                                    (function(){
                                        (function(v1676){
                                            return (v1676 !== l5.value ? (function(){
                                                var v1677 = (function(){
                                                    var x = v1675;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    return make_lisp_string(x.toString());
                                                })();
                                                var v1678 = ({car: v1677, cdr: v1671});
                                                return (v1671 = v1678);
                                            })() : (function(v1679){
                                                return (v1679 !== l5.value ? (function(){
                                                    var v1680 = l17.fvalue(pv, 1, v1675);
                                                    var v1681 = ({car: v1680, cdr: v1671});
                                                    return (v1671 = v1681);
                                                })() : (function(v1684){
                                                    (function(){
                                                        var v1685 = v1684;
                                                        var v1686 = ({car: v1685, cdr: v1671});
                                                        return (v1671 = v1686);
                                                    })();
                                                    return (v1672 = l117.fvalue(pv, 2, v1672, l334.fvalue(pv, 10, l440, v1684, l448, l338.fvalue(pv, 1, v1675), l421, (function(){
                                                        var symbol = l123;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                        return value;
                                                    })(), l629, v1684, l630, (function(){
                                                        var symbol = l123;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                        return value;
                                                    })())));
                                                })(l334.fvalue(pv, 2, l628, (function(){
                                                    var v1682 = 1;
                                                    var v1683 = (function(){
                                                        var x1 = v1670;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = v1682;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })();
                                                    return (v1670 = v1683);
                                                })())));
                                            })(((typeof (v1675) == "number")?l4.value: l5.value)));
                                        })(l64.fvalue(pv, 1, v1675));
                                        return l5.value;
                                    })();
                                    (v1674 = (function(){
                                        var tmp = v1674;
                                        return tmp === l5.value? l5.value: tmp.cdr;
                                    })());
                                }return l5.value;
                            })();
                            return l5.value;
                        })(v1667,l5.value);
                    })();
                    return l334.fvalue(values, 4, l419, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), l341.fvalue(pv, 2, v1672, (function(){
                        var f = v1668;
                        return (typeof f === 'function'? f: f.fvalue)(pv, 1, l47.fvalue(pv, 1, v1671))
                    })()), l426);
                })(0,l5,l118);
            })();
        });
        func.fname = 'VARIABLE-ARITY-CALL';
        return func;
    })();
    return l626;
})();
var l631 = (new Symbol(make_lisp_string("VARIABLE-ARITY")));
l631;
var l632 = (new Symbol(make_lisp_string("NUM-OP-NUM")));
var l633 = make_lisp_string("y");
var l634 = make_lisp_string(" != '");
var l635 = make_lisp_string("number");
var l636 = make_lisp_string("')");
var l637 = make_lisp_string("throw 'The value ' + ");
var l638 = make_lisp_string(" + ' is not a type ");
var l639 = make_lisp_string(".';");
(function(){
    (l632).fvalue = (function(){
        var func = (function (values,nargs,v1687,v1688,v1689){
            checkArgs(nargs, 3);
            return (function(){
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 5, l334.fvalue(pv, 6, l440, l628, l448, v1687, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l334.fvalue(pv, 6, l440, l633, l448, v1689, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l334.fvalue(pv, 7, l629, l628, l634, l635, l636, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 6, l637, l628, l638, l635, l639, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())), l334.fvalue(pv, 7, l629, l633, l634, l635, l636, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 6, l637, l633, l638, l635, l639, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())), l334.fvalue(pv, 4, l496, l334.fvalue(pv, 3, l628, v1688, l633), l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())), l426);
            })();
        });
        func.fname = 'NUM-OP-NUM';
        return func;
    })();
    return l632;
})();
var l640 = make_lisp_string("+");
(function(){
    var v1691 = l104.fvalue(pv, 2, l40, (function (values,nargs){
        var v1692= l5.value;
        for (var i = nargs-1; i>=0; i--)
            v1692 = {car: arguments[i+2], cdr: v1692};
        return (function(){
            return (l42.fvalue(pv, 1, v1692) !== l5.value ? l133 : l626.fvalue(values, 2, v1692, (function (values,nargs,v1694){
                checkArgs(nargs, 1);
                return l334.fvalue(values, 4, l496, l127.fvalue(pv, 2, v1694, l640), l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })());
            })));
        })();
    }));
    var v1695 = ({car: v1691, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1695);
})();
(function(){
    var v1696 = l104.fvalue(pv, 2, l41, (function (values,nargs,v1698){
        checkArgsAtLeast(nargs, 1);
        var v1697= l5.value;
        for (var i = nargs-1; i>=1; i--)
            v1697 = {car: arguments[i+2], cdr: v1697};
        return (function(){
            return (function(v1700){
                return l626.fvalue(values, 2, v1700, (function (values,nargs,v1701){
                    checkArgs(nargs, 1);
                    return l334.fvalue(values, 4, l496, (l42.fvalue(pv, 1, v1697) !== l5.value ? l117.fvalue(pv, 2, l134, (function(){
                        var tmp = v1701;
                        return tmp === l5.value? l5.value: tmp.car;
                    })()) : l127.fvalue(pv, 2, v1701, l134)), l421, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })());
                }));
            })(({car: v1698, cdr: v1697}));
        })();
    }));
    var v1702 = ({car: v1696, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1702);
})();
var l641 = make_lisp_string("1");
var l642 = make_lisp_string("*");
(function(){
    var v1703 = l104.fvalue(pv, 2, l20, (function (values,nargs){
        var v1704= l5.value;
        for (var i = nargs-1; i>=0; i--)
            v1704 = {car: arguments[i+2], cdr: v1704};
        return (function(){
            return (l42.fvalue(pv, 1, v1704) !== l5.value ? l641 : l626.fvalue(values, 2, v1704, (function (values,nargs,v1706){
                checkArgs(nargs, 1);
                return l334.fvalue(values, 4, l496, l127.fvalue(pv, 2, v1706, l642), l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })());
            })));
        })();
    }));
    var v1707 = ({car: v1703, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1707);
})();
var l643 = make_lisp_string("1 /");
var l644 = make_lisp_string("/");
(function(){
    var v1708 = l104.fvalue(pv, 2, l21, (function (values,nargs,v1710){
        checkArgsAtLeast(nargs, 1);
        var v1709= l5.value;
        for (var i = nargs-1; i>=1; i--)
            v1709 = {car: arguments[i+2], cdr: v1709};
        return (function(){
            return (function(v1712){
                return l626.fvalue(values, 2, v1712, (function (values,nargs,v1713){
                    checkArgs(nargs, 1);
                    return l334.fvalue(values, 4, l496, (l42.fvalue(pv, 1, v1709) !== l5.value ? l117.fvalue(pv, 2, l643, (function(){
                        var tmp = v1713;
                        return tmp === l5.value? l5.value: tmp.car;
                    })()) : l127.fvalue(pv, 2, v1713, l644)), l421, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })());
                }));
            })(({car: v1710, cdr: v1709}));
        })();
    }));
    var v1714 = ({car: v1708, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1714);
})();
var l645 = (new Symbol(make_lisp_string("MOD")));
var l646 = make_lisp_string("%");
(function(){
    var v1715 = l104.fvalue(pv, 2, l645, (function (values,nargs,v1716,v1717){
        checkArgs(nargs, 2);
        return (function(){
            return (function(v1719,v1720){
                return l632.fvalue(values, 3, v1719, l646, v1720);
            })(l338.fvalue(pv, 1, v1716),l338.fvalue(pv, 1, v1717));
        })();
    }));
    var v1721 = ({car: v1715, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1721);
})();
var l647 = (new Symbol(make_lisp_string("COMPARISON-CONJUNTION")));
var l648 = make_lisp_string("true");
(function(){
    (l647).fvalue = (function(){
        var func = (function (values,nargs,v1722,v1723){
            checkArgs(nargs, 2);
            return (function(){
                return (function(v1725){
                    return (v1725 !== l5.value ? l648 : (function(v1726){
                        return (v1726 !== l5.value ? l117.fvalue(values, 3, (function(){
                            var tmp = v1722;
                            return tmp === l5.value? l5.value: tmp.car;
                        })(), v1723, l145.fvalue(pv, 1, v1722)) : l117.fvalue(values, 5, (function(){
                            var tmp = v1722;
                            return tmp === l5.value? l5.value: tmp.car;
                        })(), v1723, l145.fvalue(pv, 1, v1722), l459, l647.fvalue(pv, 2, (function(){
                            var tmp = v1722;
                            return tmp === l5.value? l5.value: tmp.cdr;
                        })(), v1723)));
                    })(l42.fvalue(pv, 1, l159.fvalue(pv, 1, v1722))));
                })(l42.fvalue(pv, 1, (function(){
                    var tmp = v1722;
                    return tmp === l5.value? l5.value: tmp.cdr;
                })()));
            })();
        });
        func.fname = 'COMPARISON-CONJUNTION';
        return func;
    })();
    return l647;
})();
var l649 = (new Symbol(make_lisp_string("DEFINE-BUILTIN-COMPARISON")));
l649;
var l650 = (new Symbol(make_lisp_string(">")));
(function(){
    var v1727 = l104.fvalue(pv, 2, l650, (function (values,nargs,v1729){
        checkArgsAtLeast(nargs, 1);
        var v1728= l5.value;
        for (var i = nargs-1; i>=1; i--)
            v1728 = {car: arguments[i+2], cdr: v1728};
        return (function(){
            return (function(v1731){
                return l626.fvalue(values, 2, v1731, (function (values,nargs,v1732){
                    checkArgs(nargs, 1);
                    return l334.fvalue(values, 4, l496, l336.fvalue(pv, 1, l647.fvalue(pv, 2, v1732, l239)), l421, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })());
                }));
            })(({car: v1729, cdr: v1728}));
        })();
    }));
    var v1733 = ({car: v1727, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1733);
})();
var l651 = (new Symbol(make_lisp_string("<")));
var l652 = make_lisp_string("<");
(function(){
    var v1734 = l104.fvalue(pv, 2, l651, (function (values,nargs,v1736){
        checkArgsAtLeast(nargs, 1);
        var v1735= l5.value;
        for (var i = nargs-1; i>=1; i--)
            v1735 = {car: arguments[i+2], cdr: v1735};
        return (function(){
            return (function(v1738){
                return l626.fvalue(values, 2, v1738, (function (values,nargs,v1739){
                    checkArgs(nargs, 1);
                    return l334.fvalue(values, 4, l496, l336.fvalue(pv, 1, l647.fvalue(pv, 2, v1739, l652)), l421, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })());
                }));
            })(({car: v1736, cdr: v1735}));
        })();
    }));
    var v1740 = ({car: v1734, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1740);
})();
var l653 = (new Symbol(make_lisp_string(">=")));
var l654 = make_lisp_string(">=");
(function(){
    var v1741 = l104.fvalue(pv, 2, l653, (function (values,nargs,v1743){
        checkArgsAtLeast(nargs, 1);
        var v1742= l5.value;
        for (var i = nargs-1; i>=1; i--)
            v1742 = {car: arguments[i+2], cdr: v1742};
        return (function(){
            return (function(v1745){
                return l626.fvalue(values, 2, v1745, (function (values,nargs,v1746){
                    checkArgs(nargs, 1);
                    return l334.fvalue(values, 4, l496, l336.fvalue(pv, 1, l647.fvalue(pv, 2, v1746, l654)), l421, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })());
                }));
            })(({car: v1743, cdr: v1742}));
        })();
    }));
    var v1747 = ({car: v1741, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1747);
})();
var l655 = (new Symbol(make_lisp_string("<=")));
var l656 = make_lisp_string("<=");
(function(){
    var v1748 = l104.fvalue(pv, 2, l655, (function (values,nargs,v1750){
        checkArgsAtLeast(nargs, 1);
        var v1749= l5.value;
        for (var i = nargs-1; i>=1; i--)
            v1749 = {car: arguments[i+2], cdr: v1749};
        return (function(){
            return (function(v1752){
                return l626.fvalue(values, 2, v1752, (function (values,nargs,v1753){
                    checkArgs(nargs, 1);
                    return l334.fvalue(values, 4, l496, l336.fvalue(pv, 1, l647.fvalue(pv, 2, v1753, l656)), l421, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })());
                }));
            })(({car: v1750, cdr: v1749}));
        })();
    }));
    var v1754 = ({car: v1748, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1754);
})();
var l657 = make_lisp_string("==");
(function(){
    var v1755 = l104.fvalue(pv, 2, l19, (function (values,nargs,v1757){
        checkArgsAtLeast(nargs, 1);
        var v1756= l5.value;
        for (var i = nargs-1; i>=1; i--)
            v1756 = {car: arguments[i+2], cdr: v1756};
        return (function(){
            return (function(v1759){
                return l626.fvalue(values, 2, v1759, (function (values,nargs,v1760){
                    checkArgs(nargs, 1);
                    return l334.fvalue(values, 4, l496, l336.fvalue(pv, 1, l647.fvalue(pv, 2, v1760, l657)), l421, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })());
                }));
            })(({car: v1757, cdr: v1756}));
        })();
    }));
    var v1761 = ({car: v1755, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1761);
})();
var l658 = (new Symbol(make_lisp_string("NUMBERP")));
var l659 = make_lisp_string("(typeof (");
var l660 = make_lisp_string(") == \"number\")");
(function(){
    var v1762 = l104.fvalue(pv, 2, l658, (function (values,nargs,v1763){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1765){
                return l336.fvalue(values, 1, l334.fvalue(pv, 3, l659, v1765, l660));
            })(l338.fvalue(pv, 1, v1763));
        })();
    }));
    var v1766 = ({car: v1762, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1766);
})();
var l661 = (new Symbol(make_lisp_string("FLOOR")));
var l662 = make_lisp_string("Math.floor(x)");
(function(){
    var v1767 = l104.fvalue(pv, 2, l661, (function (values,nargs,v1768){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1770){
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 3, l334.fvalue(pv, 6, l440, l628, l448, v1770, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l334.fvalue(pv, 7, l629, l628, l634, l635, l636, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 6, l637, l628, l638, l635, l639, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())), l334.fvalue(pv, 4, l496, l662, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())), l426);
            })(l338.fvalue(pv, 1, v1768));
        })();
    }));
    var v1771 = ({car: v1767, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1771);
})();
var l663 = (new Symbol(make_lisp_string("EXPT")));
var l664 = make_lisp_string("Math.pow(x, y)");
(function(){
    var v1772 = l104.fvalue(pv, 2, l663, (function (values,nargs,v1773,v1774){
        checkArgs(nargs, 2);
        return (function(){
            return (function(v1776,v1777){
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 5, l334.fvalue(pv, 6, l440, l628, l448, v1776, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l334.fvalue(pv, 6, l440, l633, l448, v1777, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l334.fvalue(pv, 7, l629, l628, l634, l635, l636, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 6, l637, l628, l638, l635, l639, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())), l334.fvalue(pv, 7, l629, l633, l634, l635, l636, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 6, l637, l633, l638, l635, l639, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())), l334.fvalue(pv, 4, l496, l664, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())), l426);
            })(l338.fvalue(pv, 1, v1773),l338.fvalue(pv, 1, v1774));
        })();
    }));
    var v1778 = ({car: v1772, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1778);
})();
var l665 = make_lisp_string("make_lisp_string(x.toString())");
(function(){
    var v1779 = l104.fvalue(pv, 2, l136, (function (values,nargs,v1780){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1782){
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 3, l334.fvalue(pv, 6, l440, l628, l448, v1782, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l334.fvalue(pv, 7, l629, l628, l634, l635, l636, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 6, l637, l628, l638, l635, l639, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())), l334.fvalue(pv, 4, l496, l665, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())), l426);
            })(l338.fvalue(pv, 1, v1780));
        })();
    }));
    var v1783 = ({car: v1779, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1783);
})();
var l666 = make_lisp_string("({car: ");
var l667 = make_lisp_string(", cdr: ");
(function(){
    var v1784 = l104.fvalue(pv, 2, l137, (function (values,nargs,v1785,v1786){
        checkArgs(nargs, 2);
        return (function(){
            return (function(v1788,v1789){
                return l334.fvalue(values, 5, l666, v1788, l667, v1789, l471);
            })(l338.fvalue(pv, 1, v1785),l338.fvalue(pv, 1, v1786));
        })();
    }));
    var v1790 = ({car: v1784, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1790);
})();
var l668 = make_lisp_string("var tmp = ");
var l669 = make_lisp_string("return (typeof tmp == 'object' && 'car' in tmp);");
(function(){
    var v1791 = l104.fvalue(pv, 2, l138, (function (values,nargs,v1792){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1794){
                return l336.fvalue(values, 1, l334.fvalue(pv, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 6, l668, v1794, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l669, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l426));
            })(l338.fvalue(pv, 1, v1792));
        })();
    }));
    var v1795 = ({car: v1791, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1795);
})();
var l670 = make_lisp_string("return tmp === ");
var l671 = make_lisp_string("? ");
var l672 = make_lisp_string(": tmp.car;");
(function(){
    var v1796 = l104.fvalue(pv, 2, l141, (function (values,nargs,v1797){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1799){
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 10, l668, v1799, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l670, l338.fvalue(pv, 1, l5.value), l671, l338.fvalue(pv, 1, l5.value), l672, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l426);
            })(l338.fvalue(pv, 1, v1797));
        })();
    }));
    var v1800 = ({car: v1796, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1800);
})();
var l673 = make_lisp_string(": tmp.cdr;");
(function(){
    var v1801 = l104.fvalue(pv, 2, l142, (function (values,nargs,v1802){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1804){
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 10, l668, v1804, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l670, l338.fvalue(pv, 1, l5.value), l671, l338.fvalue(pv, 1, l5.value), l673, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l426);
            })(l338.fvalue(pv, 1, v1802));
        })();
    }));
    var v1805 = ({car: v1801, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1805);
})();
var l674 = make_lisp_string("object");
var l675 = make_lisp_string("(x.car = ");
var l676 = make_lisp_string(", x)");
(function(){
    var v1806 = l104.fvalue(pv, 2, l201, (function (values,nargs,v1807,v1808){
        checkArgs(nargs, 2);
        return (function(){
            return (function(v1810,v1811){
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 3, l334.fvalue(pv, 6, l440, l628, l448, v1810, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l334.fvalue(pv, 7, l629, l628, l634, l674, l636, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 6, l637, l628, l638, l674, l639, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())), l334.fvalue(pv, 4, l496, l334.fvalue(pv, 3, l675, v1811, l676), l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())), l426);
            })(l338.fvalue(pv, 1, v1807),l338.fvalue(pv, 1, v1808));
        })();
    }));
    var v1812 = ({car: v1806, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1812);
})();
var l677 = make_lisp_string("(x.cdr = ");
(function(){
    var v1813 = l104.fvalue(pv, 2, l202, (function (values,nargs,v1814,v1815){
        checkArgs(nargs, 2);
        return (function(){
            return (function(v1817,v1818){
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 3, l334.fvalue(pv, 6, l440, l628, l448, v1817, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l334.fvalue(pv, 7, l629, l628, l634, l674, l636, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 6, l637, l628, l638, l674, l639, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())), l334.fvalue(pv, 4, l496, l334.fvalue(pv, 3, l677, v1818, l676), l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())), l426);
            })(l338.fvalue(pv, 1, v1814),l338.fvalue(pv, 1, v1815));
        })();
    }));
    var v1819 = ({car: v1813, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1819);
})();
var l678 = (new Symbol(make_lisp_string("SYMBOLP")));
var l679 = make_lisp_string(" instanceof Symbol)");
(function(){
    var v1820 = l104.fvalue(pv, 2, l678, (function (values,nargs,v1821){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1823){
                return l336.fvalue(values, 1, l334.fvalue(pv, 3, l241, v1823, l679));
            })(l338.fvalue(pv, 1, v1821));
        })();
    }));
    var v1824 = ({car: v1820, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1824);
})();
var l680 = (new Symbol(make_lisp_string("MAKE-SYMBOL")));
(function(){
    var v1825 = l104.fvalue(pv, 2, l680, (function (values,nargs,v1826){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1828){
                return l334.fvalue(values, 3, l483, v1828, l485);
            })(l338.fvalue(pv, 1, v1826));
        })();
    }));
    var v1829 = ({car: v1825, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1829);
})();
var l681 = (new Symbol(make_lisp_string("SYMBOL-NAME")));
var l682 = make_lisp_string(").name");
(function(){
    var v1830 = l104.fvalue(pv, 2, l681, (function (values,nargs,v1831){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1833){
                return l334.fvalue(values, 3, l241, v1833, l682);
            })(l338.fvalue(pv, 1, v1831));
        })();
    }));
    var v1834 = ({car: v1830, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1834);
})();
var l683 = make_lisp_string(").value = ");
(function(){
    var v1835 = l104.fvalue(pv, 2, l473, (function (values,nargs,v1836,v1837){
        checkArgs(nargs, 2);
        return (function(){
            return (function(v1839,v1840){
                return l334.fvalue(values, 4, l241, v1839, l683, v1840);
            })(l338.fvalue(pv, 1, v1836),l338.fvalue(pv, 1, v1837));
        })();
    }));
    var v1841 = ({car: v1835, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1841);
})();
var l684 = (new Symbol(make_lisp_string("FSET")));
var l685 = make_lisp_string(").fvalue = ");
(function(){
    var v1842 = l104.fvalue(pv, 2, l684, (function (values,nargs,v1843,v1844){
        checkArgs(nargs, 2);
        return (function(){
            return (function(v1846,v1847){
                return l334.fvalue(values, 4, l241, v1846, l685, v1847);
            })(l338.fvalue(pv, 1, v1843),l338.fvalue(pv, 1, v1844));
        })();
    }));
    var v1848 = ({car: v1842, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1848);
})();
var l686 = make_lisp_string(".value !== undefined)");
(function(){
    var v1849 = l104.fvalue(pv, 2, l18, (function (values,nargs,v1850){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1852){
                return l336.fvalue(values, 1, l334.fvalue(pv, 3, l241, v1852, l686));
            })(l338.fvalue(pv, 1, v1850));
        })();
    }));
    var v1853 = ({car: v1849, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1853);
})();
var l687 = (new Symbol(make_lisp_string("SYMBOL-VALUE")));
var l688 = make_lisp_string("var symbol = ");
var l689 = make_lisp_string("var value = symbol.value;");
var l690 = make_lisp_string("if (value === undefined) throw \"Variable `\" + xstring(symbol.name) + \"' is unbound.\";");
var l691 = make_lisp_string("return value;");
(function(){
    var v1854 = l104.fvalue(pv, 2, l687, (function (values,nargs,v1855){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1857){
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 10, l688, v1857, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l689, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l690, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l691, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l426);
            })(l338.fvalue(pv, 1, v1855));
        })();
    }));
    var v1858 = ({car: v1854, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1858);
})();
var l692 = make_lisp_string("var func = symbol.fvalue;");
var l693 = make_lisp_string("if (func === undefined) throw \"Function `\" + xstring(symbol.name) + \"' is undefined.\";");
(function(){
    var v1859 = l104.fvalue(pv, 2, l498, (function (values,nargs,v1860){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1862){
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 10, l688, v1862, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l692, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l693, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l425, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l426);
            })(l338.fvalue(pv, 1, v1860));
        })();
    }));
    var v1863 = ({car: v1859, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1863);
})();
var l694 = (new Symbol(make_lisp_string("SYMBOL-PLIST")));
var l695 = make_lisp_string("((");
var l696 = make_lisp_string(").plist || ");
(function(){
    var v1864 = l104.fvalue(pv, 2, l694, (function (values,nargs,v1865){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1867){
                return l334.fvalue(values, 5, l695, v1867, l696, l338.fvalue(pv, 1, l5.value), l244);
            })(l338.fvalue(pv, 1, v1865));
        })();
    }));
    var v1868 = ({car: v1864, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1868);
})();
var l697 = (new Symbol(make_lisp_string("LAMBDA-CODE")));
var l698 = make_lisp_string("make_lisp_string((");
var l699 = make_lisp_string(").toString())");
(function(){
    var v1869 = l104.fvalue(pv, 2, l697, (function (values,nargs,v1870){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1872){
                return l334.fvalue(values, 3, l698, v1872, l699);
            })(l338.fvalue(pv, 1, v1870));
        })();
    }));
    var v1873 = ({car: v1869, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1873);
})();
var l700 = (new Symbol(make_lisp_string("EQ")));
var l701 = make_lisp_string(" === ");
(function(){
    var v1874 = l104.fvalue(pv, 2, l700, (function (values,nargs,v1875,v1876){
        checkArgs(nargs, 2);
        return (function(){
            return (function(v1878,v1879){
                return l336.fvalue(values, 1, l334.fvalue(pv, 5, l241, v1878, l701, v1879, l244));
            })(l338.fvalue(pv, 1, v1875),l338.fvalue(pv, 1, v1876));
        })();
    }));
    var v1880 = ({car: v1874, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1880);
})();
var l702 = make_lisp_string("string");
var l703 = make_lisp_string("x.charCodeAt(0)");
(function(){
    var v1881 = l104.fvalue(pv, 2, l61, (function (values,nargs,v1882){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1884){
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 3, l334.fvalue(pv, 6, l440, l628, l448, v1884, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l334.fvalue(pv, 7, l629, l628, l634, l702, l636, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 6, l637, l628, l638, l702, l639, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())), l334.fvalue(pv, 4, l496, l703, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())), l426);
            })(l338.fvalue(pv, 1, v1882));
        })();
    }));
    var v1885 = ({car: v1881, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1885);
})();
var l704 = make_lisp_string("String.fromCharCode(x)");
(function(){
    var v1886 = l104.fvalue(pv, 2, l60, (function (values,nargs,v1887){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1889){
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 3, l334.fvalue(pv, 6, l440, l628, l448, v1889, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l334.fvalue(pv, 7, l629, l628, l634, l635, l636, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 6, l637, l628, l638, l635, l639, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())), l334.fvalue(pv, 4, l496, l704, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())), l426);
            })(l338.fvalue(pv, 1, v1887));
        })();
    }));
    var v1890 = ({car: v1886, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1890);
})();
var l705 = (new Symbol(make_lisp_string("CHARACTERP")));
var l706 = make_lisp_string("var x = ");
var l707 = make_lisp_string("return (typeof(");
var l708 = make_lisp_string(") == \"string\") && x.length == 1;");
(function(){
    var v1891 = l104.fvalue(pv, 2, l705, (function (values,nargs,v1892){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1894){
                return l336.fvalue(values, 1, l334.fvalue(pv, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 7, l706, v1894, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l707, v1894, l708), l426));
            })(l338.fvalue(pv, 1, v1892));
        })();
    }));
    var v1895 = ({car: v1891, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1895);
})();
var l709 = (new Symbol(make_lisp_string("CHAR-TO-STRING")));
var l710 = make_lisp_string("var r = [");
var l711 = make_lisp_string("];");
var l712 = make_lisp_string("r.type = 'character';");
var l713 = make_lisp_string("return r");
(function(){
    var v1896 = l104.fvalue(pv, 2, l709, (function (values,nargs,v1897){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1899){
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 6, l710, v1899, l711, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l712, l713), l426);
            })(l338.fvalue(pv, 1, v1897));
        })();
    }));
    var v1900 = ({car: v1896, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1900);
})();
var l714 = (new Symbol(make_lisp_string("CHAR-UPCASE")));
var l715 = make_lisp_string(".toUpperCase()");
(function(){
    var v1901 = l104.fvalue(pv, 2, l714, (function (values,nargs,v1902){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1904){
                return l334.fvalue(values, 2, v1904, l715);
            })(l338.fvalue(pv, 1, v1902));
        })();
    }));
    var v1905 = ({car: v1901, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1905);
})();
var l716 = (new Symbol(make_lisp_string("CHAR-DOWNCASE")));
var l717 = make_lisp_string(".toLowerCase()");
(function(){
    var v1906 = l104.fvalue(pv, 2, l716, (function (values,nargs,v1907){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1909){
                return l334.fvalue(values, 2, v1909, l717);
            })(l338.fvalue(pv, 1, v1907));
        })();
    }));
    var v1910 = ({car: v1906, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1910);
})();
var l718 = (new Symbol(make_lisp_string("STRINGP")));
var l719 = make_lisp_string("return typeof(x) == 'object' && 'length' in x && x.type == 'character';");
(function(){
    var v1911 = l104.fvalue(pv, 2, l718, (function (values,nargs,v1912){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1914){
                return l336.fvalue(values, 1, l334.fvalue(pv, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 5, l706, v1914, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l719), l426));
            })(l338.fvalue(pv, 1, v1912));
        })();
    }));
    var v1915 = ({car: v1911, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1915);
})();
var l720 = (new Symbol(make_lisp_string("STRING-UPCASE")));
var l721 = make_lisp_string("make_lisp_string(xstring(");
var l722 = make_lisp_string(").toUpperCase())");
(function(){
    var v1916 = l104.fvalue(pv, 2, l720, (function (values,nargs,v1917){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1919){
                return l334.fvalue(values, 3, l721, v1919, l722);
            })(l338.fvalue(pv, 1, v1917));
        })();
    }));
    var v1920 = ({car: v1916, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1920);
})();
var l723 = (new Symbol(make_lisp_string("STRING-LENGTH")));
var l724 = make_lisp_string(".length");
(function(){
    var v1921 = l104.fvalue(pv, 2, l723, (function (values,nargs,v1922){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1924){
                return l334.fvalue(values, 2, v1924, l724);
            })(l338.fvalue(pv, 1, v1922));
        })();
    }));
    var v1925 = ({car: v1921, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1925);
})();
var l725 = (new Symbol(make_lisp_string("SLICE")));
var l726 = make_lisp_string("var vector = ");
var l727 = make_lisp_string("var a = ");
var l728 = make_lisp_string("var b;");
var l729 = make_lisp_string("b = ");
var l730 = make_lisp_string("return vector.slice(a,b);");
(function(){
    var v1926 = l104.fvalue(pv, 2, l725, (function (values,nargs,v1927,v1928,v1929){
        checkArgsAtLeast(nargs, 2);
        checkArgsAtMost(nargs, 3);
        switch(nargs){
        case 2:
            v1929=l5.value;
        default: break;
        }
        return (function(){
            return l334.fvalue(values, 4, l419, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l341.fvalue(pv, 13, l726, l338.fvalue(pv, 1, v1927), l421, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l727, l338.fvalue(pv, 1, v1928), l421, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l728, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), (v1929 !== l5.value ? l334.fvalue(pv, 4, l729, l338.fvalue(pv, 1, v1929), l421, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()) : l5.value), l730, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })()), l426);
        })();
    }));
    var v1931 = ({car: v1926, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1931);
})();
(function(){
    var v1932 = l104.fvalue(pv, 2, l208, (function (values,nargs,v1933,v1934){
        checkArgs(nargs, 2);
        return (function(){
            return (function(v1936,v1937){
                return l334.fvalue(values, 4, v1936, l490, v1937, l491);
            })(l338.fvalue(pv, 1, v1933),l338.fvalue(pv, 1, v1934));
        })();
    }));
    var v1938 = ({car: v1932, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1938);
})();
var l731 = make_lisp_string("var r = ");
var l732 = make_lisp_string(".concat(");
var l733 = make_lisp_string("return r;");
(function(){
    var v1939 = l104.fvalue(pv, 2, l55, (function (values,nargs,v1940,v1941){
        checkArgs(nargs, 2);
        return (function(){
            return (function(v1943,v1944){
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 9, l731, v1943, l732, v1944, l430, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l712, l733, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l426);
            })(l338.fvalue(pv, 1, v1940),l338.fvalue(pv, 1, v1941));
        })();
    }));
    var v1945 = ({car: v1939, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1945);
})();
var l734 = (new Symbol(make_lisp_string("FUNCALL")));
var l735 = make_lisp_string("var f = ");
var l736 = make_lisp_string("return (typeof f === 'function'? f: f.fvalue)(");
(function(){
    var v1946 = l104.fvalue(pv, 2, l734, (function (values,nargs,v1948){
        checkArgsAtLeast(nargs, 1);
        var v1947= l5.value;
        for (var i = nargs-1; i>=1; i--)
            v1947 = {car: arguments[i+2], cdr: v1947};
        return (function(){
            return l334.fvalue(values, 4, l419, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l341.fvalue(pv, 7, l735, l338.fvalue(pv, 1, v1948), l421, (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })(), l736, l127.fvalue(pv, 2, l158.fvalue(pv, 3, ((function(){
                var symbol = l343;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l467 : l578), l17.fvalue(pv, 1, l52.fvalue(pv, 1, v1947)), l130.fvalue(pv, 2, (function(){
                var symbol = l338;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                return func;
            })(), v1947)), l475), l244), l426);
        })();
    }));
    var v1950 = ({car: v1946, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1950);
})();
var l737 = (new Symbol(make_lisp_string("APPLY")));
var l738 = make_lisp_string(")()");
var l739 = make_lisp_string("var tail = (");
var l740 = make_lisp_string("while (tail != ");
var l741 = make_lisp_string("    args.push(tail.car);");
var l742 = make_lisp_string("    args[1] += 1;");
var l743 = make_lisp_string("    tail = tail.cdr;");
var l744 = make_lisp_string("return (typeof f === 'function'? f : f.fvalue).apply(this, args);");
(function(){
    var v1951 = l104.fvalue(pv, 2, l737, (function (values,nargs,v1953){
        checkArgsAtLeast(nargs, 1);
        var v1952= l5.value;
        for (var i = nargs-1; i>=1; i--)
            v1952 = {car: arguments[i+2], cdr: v1952};
        return (function(){
            return (l42.fvalue(pv, 1, v1952) !== l5.value ? l334.fvalue(values, 3, l241, l338.fvalue(pv, 1, v1953), l738) : (function(v1955,v1956){
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 26, l735, l338.fvalue(pv, 1, v1953), l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l577, l127.fvalue(pv, 2, l158.fvalue(pv, 3, ((function(){
                    var symbol = l343;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l467 : l578), l17.fvalue(pv, 1, l52.fvalue(pv, 1, v1955)), l130.fvalue(pv, 2, (function(){
                    var symbol = l338;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })(), v1955)), l475), l711, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l739, l338.fvalue(pv, 1, v1956), l430, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l740, l338.fvalue(pv, 1, l5.value), l452, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l741, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l742, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l743, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l438, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l744, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l426);
            })(l194.fvalue(pv, 1, v1952),(function(){
                var tmp = l193.fvalue(pv, 1, v1952);
                return tmp === l5.value? l5.value: tmp.car;
            })()));
        })();
    }));
    var v1957 = ({car: v1951, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1957);
})();
var l745 = (new Symbol(make_lisp_string("JS-EVAL")));
var l746 = make_lisp_string("var v = globalEval(xstring(");
var l747 = make_lisp_string("));");
var l748 = make_lisp_string("return values.apply(this, forcemv(v));");
var l749 = make_lisp_string("globalEval(xstring(");
(function(){
    var v1958 = l104.fvalue(pv, 2, l745, (function (values,nargs,v1959){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1961){
                return ((function(){
                    var symbol = l343;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 6, l746, v1961, l747, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l748, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l426) : l334.fvalue(values, 3, l749, v1961, l485));
            })(l338.fvalue(pv, 1, v1959));
        })();
    }));
    var v1962 = ({car: v1958, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1962);
})();
var l750 = (new Symbol(make_lisp_string("%THROW")));
var l751 = make_lisp_string("throw ");
(function(){
    var v1963 = l104.fvalue(pv, 2, l750, (function (values,nargs,v1964){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1966){
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 4, l751, v1966, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l426);
            })(l338.fvalue(pv, 1, v1964));
        })();
    }));
    var v1967 = ({car: v1963, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1967);
})();
var l752 = (new Symbol(make_lisp_string("NEW")));
var l753 = make_lisp_string("{}");
(function(){
    var v1968 = l104.fvalue(pv, 2, l752, (function (values,nargs){
        checkArgsAtMost(nargs, 0);
        return (function(){
            return (function(){
                return l753;
            })();
        })();
    }));
    var v1970 = ({car: v1968, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1970);
})();
var l754 = (new Symbol(make_lisp_string("OBJECTP")));
var l755 = make_lisp_string(") === 'object')");
(function(){
    var v1971 = l104.fvalue(pv, 2, l754, (function (values,nargs,v1972){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v1974){
                return l336.fvalue(values, 1, l334.fvalue(pv, 3, l659, v1974, l755));
            })(l338.fvalue(pv, 1, v1972));
        })();
    }));
    var v1975 = ({car: v1971, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1975);
})();
var l756 = (new Symbol(make_lisp_string("OGET")));
var l757 = make_lisp_string(")[xstring(");
var l758 = make_lisp_string(")];");
var l759 = make_lisp_string("return tmp == undefined? ");
var l760 = make_lisp_string(": tmp ;");
(function(){
    var v1976 = l104.fvalue(pv, 2, l756, (function (values,nargs,v1977,v1978){
        checkArgs(nargs, 2);
        return (function(){
            return (function(v1980,v1981){
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 11, l668, l241, v1980, l757, v1981, l758, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l759, l338.fvalue(pv, 1, l5.value), l760, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l426);
            })(l338.fvalue(pv, 1, v1977),l338.fvalue(pv, 1, v1978));
        })();
    }));
    var v1982 = ({car: v1976, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1982);
})();
var l761 = (new Symbol(make_lisp_string("OSET")));
var l762 = make_lisp_string(")] = ");
(function(){
    var v1983 = l104.fvalue(pv, 2, l761, (function (values,nargs,v1984,v1985,v1986){
        checkArgs(nargs, 3);
        return (function(){
            return (function(v1988,v1989,v1990){
                return l334.fvalue(values, 7, l695, v1988, l757, v1989, l762, v1990, l244);
            })(l338.fvalue(pv, 1, v1984),l338.fvalue(pv, 1, v1985),l338.fvalue(pv, 1, v1986));
        })();
    }));
    var v1991 = ({car: v1983, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1991);
})();
var l763 = (new Symbol(make_lisp_string("IN")));
var l764 = make_lisp_string("(xstring(");
var l765 = make_lisp_string(") in (");
(function(){
    var v1992 = l104.fvalue(pv, 2, l763, (function (values,nargs,v1993,v1994){
        checkArgs(nargs, 2);
        return (function(){
            return (function(v1996,v1997){
                return l336.fvalue(values, 1, l334.fvalue(pv, 5, l764, v1996, l765, v1997, l485));
            })(l338.fvalue(pv, 1, v1993),l338.fvalue(pv, 1, v1994));
        })();
    }));
    var v1998 = ({car: v1992, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v1998);
})();
var l766 = (new Symbol(make_lisp_string("FUNCTIONP")));
var l767 = make_lisp_string("(typeof ");
var l768 = make_lisp_string(" == 'function')");
(function(){
    var v1999 = l104.fvalue(pv, 2, l766, (function (values,nargs,v2000){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v2002){
                return l336.fvalue(values, 1, l334.fvalue(pv, 3, l767, v2002, l768));
            })(l338.fvalue(pv, 1, v2000));
        })();
    }));
    var v2003 = ({car: v1999, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v2003);
})();
var l769 = (new Symbol(make_lisp_string("WRITE-STRING")));
var l770 = make_lisp_string("lisp.write(");
(function(){
    var v2004 = l104.fvalue(pv, 2, l769, (function (values,nargs,v2005){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v2007){
                return l334.fvalue(values, 3, l770, v2007, l244);
            })(l338.fvalue(pv, 1, v2005));
        })();
    }));
    var v2008 = ({car: v2004, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v2008);
})();
var l771 = (new Symbol(make_lisp_string("MAKE-ARRAY")));
var l772 = make_lisp_string("var r = [];");
var l773 = make_lisp_string("for (var i = 0; i < ");
var l774 = make_lisp_string("; i++)");
var l775 = make_lisp_string("r.push(");
(function(){
    var v2009 = l104.fvalue(pv, 2, l771, (function (values,nargs,v2010){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v2012){
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 9, l772, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l773, v2012, l774, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 4, l775, l338.fvalue(pv, 1, l5.value), l430, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l733, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l426);
            })(l338.fvalue(pv, 1, v2010));
        })();
    }));
    var v2013 = ({car: v2009, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v2013);
})();
var l776 = (new Symbol(make_lisp_string("ARRAYP")));
var l777 = make_lisp_string("return typeof x === 'object' && 'length' in x;");
(function(){
    var v2014 = l104.fvalue(pv, 2, l776, (function (values,nargs,v2015){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v2017){
                return l336.fvalue(values, 1, l334.fvalue(pv, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 5, l706, v2017, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l777), l426));
            })(l338.fvalue(pv, 1, v2015));
        })();
    }));
    var v2018 = ({car: v2014, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v2018);
})();
var l778 = (new Symbol(make_lisp_string("AREF")));
var l779 = make_lisp_string(")[");
var l780 = make_lisp_string("if (x === undefined) throw 'Out of range';");
var l781 = make_lisp_string("return x;");
(function(){
    var v2019 = l104.fvalue(pv, 2, l778, (function (values,nargs,v2020,v2021){
        checkArgs(nargs, 2);
        return (function(){
            return (function(v2023,v2024){
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 11, l706, l241, v2023, l779, v2024, l711, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l780, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l781, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l426);
            })(l338.fvalue(pv, 1, v2020),l338.fvalue(pv, 1, v2021));
        })();
    }));
    var v2025 = ({car: v2019, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v2025);
})();
var l782 = make_lisp_string("var i = ");
var l783 = make_lisp_string("if (i < 0 || i >= x.length) throw 'Out of range';");
var l784 = make_lisp_string("return x[i] = ");
(function(){
    var v2026 = l104.fvalue(pv, 2, l209, (function (values,nargs,v2027,v2028,v2029){
        checkArgs(nargs, 3);
        return (function(){
            return (function(v2031,v2032,v2033){
                return l334.fvalue(values, 4, l419, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l341.fvalue(pv, 14, l706, v2031, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l782, v2032, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l783, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l784, v2033, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l426);
            })(l338.fvalue(pv, 1, v2027),l338.fvalue(pv, 1, v2028),l338.fvalue(pv, 1, v2029));
        })();
    }));
    var v2034 = ({car: v2026, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v2034);
})();
var l785 = make_lisp_string("(new Date()).getTime()");
(function(){
    var v2035 = l104.fvalue(pv, 2, l114, (function (values,nargs){
        checkArgsAtMost(nargs, 0);
        return (function(){
            return (function(){
                return l785;
            })();
        })();
    }));
    var v2037 = ({car: v2035, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v2037);
})();
var l786 = (new Symbol(make_lisp_string("VALUES-ARRAY")));
var l787 = make_lisp_string("values.apply(this, ");
var l788 = make_lisp_string("pv.apply(this, ");
(function(){
    var v2038 = l104.fvalue(pv, 2, l786, (function (values,nargs,v2039){
        checkArgs(nargs, 1);
        return (function(){
            return (function(v2041){
                return ((function(){
                    var symbol = l343;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l334.fvalue(values, 3, l787, v2041, l244) : l334.fvalue(values, 3, l788, v2041, l244));
            })(l338.fvalue(pv, 1, v2039));
        })();
    }));
    var v2042 = ({car: v2038, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v2042);
})();
var l789 = make_lisp_string("values(");
var l790 = make_lisp_string("pv(");
(function(){
    var v2043 = l104.fvalue(pv, 2, l121, (function (values,nargs){
        var v2044= l5.value;
        for (var i = nargs-1; i>=0; i--)
            v2044 = {car: arguments[i+2], cdr: v2044};
        return (function(){
            return ((function(){
                var symbol = l343;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l334.fvalue(values, 3, l789, l127.fvalue(pv, 2, l130.fvalue(pv, 2, (function(){
                var symbol = l338;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                return func;
            })(), v2044), l475), l244) : l334.fvalue(values, 3, l790, l127.fvalue(pv, 2, l130.fvalue(pv, 2, (function(){
                var symbol = l338;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                return func;
            })(), v2044), l475), l244));
        })();
    }));
    var v2046 = ({car: v2043, cdr: (function(){
        var symbol = l622;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l622).value = v2046);
})();
var l791 = make_lisp_string("js_to_lisp(");
(function(){
    var v2047 = l104.fvalue(pv, 2, l288, (function (values,nargs,v2048){
        checkArgs(nargs, 1);
        return (function(){
            return l334.fvalue(values, 3, l791, v2048, l244);
        })();
    }));
    var v2050 = ({car: v2047, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v2050);
})();
var l792 = (new Symbol(make_lisp_string("%JS-VSET")));
var l793 = make_lisp_string(" = lisp_to_js(");
(function(){
    var v2051 = l104.fvalue(pv, 2, l792, (function (values,nargs,v2052,v2053){
        checkArgs(nargs, 2);
        return (function(){
            return l334.fvalue(values, 5, l241, v2052, l793, l338.fvalue(pv, 1, v2053), l485);
        })();
    }));
    var v2055 = ({car: v2051, cdr: (function(){
        var symbol = l397;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })()});
    return ((l397).value = v2055);
})();
var l794 = make_lisp_string("`~S' is not a string.");
(function(){
    (function(){
        var v2056 = ({car: l288, cdr: (function (values,nargs,v2057){
            checkArgs(nargs, 1);
            return (function(v2058){
                (((function(){
                    var x = v2057;
                    return typeof(x) == 'object' && 'length' in x && x.type == 'character';
                })()?l4.value: l5.value) !== l5.value ? l5.value : l81.fvalue(pv, 2, l794, v2057));
                return values(l5.value, l104.fvalue(pv, 1, v2057), l104.fvalue(pv, 1, v2058), l104.fvalue(pv, 3, l792, v2057, v2058), l104.fvalue(pv, 2, l288, v2057));
            })(l15.fvalue(pv, 0));
        })});
        var v2059 = ({car: v2056, cdr: (function(){
            var symbol = l102;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })()});
        return ((l102).value = v2059);
    })();
    return l288;
})();
var l795 = (new Symbol(make_lisp_string("!MACRO-FUNCTION")));
(function(){
    (l795).fvalue = (function(){
        var func = (function (values,nargs,v2060){
            checkArgs(nargs, 1);
            return (function(){
                (((v2060 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l5.value : l81.fvalue(pv, 2, l285, v2060));
                return (function(v2062){
                    return ((v2062 !== l5.value ? ((l356.fvalue(pv, 1, v2062) === l388)?l4.value: l5.value) : l5.value) !== l5.value ? (function(v2063){
                        (function(v2064){
                            return (v2064 !== l5.value ? (function(v2065){
                                (function(){
                                    var v2066 = v2062;
                                    return (function(){
                                        var func = (function (values,nargs,v2068){
                                            switch(nargs){
                                            case 0:
                                                v2068=l5.value;
                                            default: break;
                                            }
                                            var v2067= l5.value;
                                            for (var i = nargs-1; i>=1; i--)
                                                v2067 = {car: arguments[i+2], cdr: v2067};
                                            return (function(){
                                                (function(){
                                                    var x = l160.fvalue(pv, 2, 3, v2066);
                                                    if (typeof x != 'object')
                                                        throw 'The value ' + x + ' is not a type object.';
                                                    return (x.car = v2068, x);
                                                })();
                                                return v2068;
                                            })();
                                        });
                                        var args = [pv, 0];
                                        return (function(){
                                            var values = mv;
                                            var vs;
                                            vs = v2065;
                                            if (typeof vs === 'object' && 'multiple-value' in vs)
                                                args = args.concat(vs);
                                            else
                                                args.push(vs);
                                            args[1] = args.length-2;
                                            return func.apply(window, args);
                                        })();
                                    })();
                                })();
                                return (v2063 = v2065);
                            })(l289.fvalue(pv, 1, v2063)) : l5.value);
                        })(l54.fvalue(pv, 1, v2063));
                        return v2063;
                    })(l357.fvalue(pv, 1, v2062)) : l5.value);
                })(l372.fvalue(pv, 3, v2060, (function(){
                    var symbol = l377;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })(), l94));
            })();
        });
        func.fname = '!MACRO-FUNCTION';
        return func;
    })();
    return l795;
})();
(function(){
    (l106).fvalue = (function(){
        var func = (function (values,nargs,v2069){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v2071){
                    return (v2071 !== l5.value ? (function(v2072){
                        return ((v2072 !== l5.value ? ((l356.fvalue(pv, 1, v2072) === l388)?l4.value: l5.value) : l5.value) !== l5.value ? values(l357.fvalue(pv, 1, v2072), l4.value) : values(v2069, l5.value));
                    })(l372.fvalue(pv, 3, v2069, (function(){
                        var symbol = l377;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })(), l96)) : (function(v2073){
                        return (v2073 !== l5.value ? (function(v2074){
                            return (v2074 !== l5.value ? values((function(){
                                var f = v2074;
                                var args = [pv, 0];
                                var tail = ((function(){
                                    var tmp = v2069;
                                    return tmp === l5.value? l5.value: tmp.cdr;
                                })());
                                while (tail != l5.value){
                                    args.push(tail.car);
                                    args[1] += 1;
                                    tail = tail.cdr;
                                }
                                return (typeof f === 'function'? f : f.fvalue).apply(this, args);
                            })(), l4.value) : values(v2069, l5.value));
                        })(l795.fvalue(pv, 1, (function(){
                            var tmp = v2069;
                            return tmp === l5.value? l5.value: tmp.car;
                        })())) : values(v2069, l5.value));
                    })((((function(){
                        var tmp = v2069;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l5.value) !== l5.value ? (((function(){
                        var tmp = v2069;
                        return tmp === l5.value? l5.value: tmp.car;
                    })() instanceof Symbol)?l4.value: l5.value) : l5.value)));
                })(((v2069 instanceof Symbol)?l4.value: l5.value));
            })();
        });
        func.fname = '!MACROEXPAND-1';
        return func;
    })();
    return l106;
})();
var l796 = (new Symbol(make_lisp_string("COMPILE-FUNCALL")));
var l797 = make_lisp_string("Bad function designator `~S'");
var l798 = make_lisp_string("COMMON-LISP");
var l799 = make_lisp_string(".fvalue");
(function(){
    (l796).fvalue = (function(){
        var func = (function (values,nargs,v2075,v2076){
            checkArgs(nargs, 2);
            return (function(){
                return (function(){
                    var v2078 = ((function(){
                        var symbol = l343;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })() !== l5.value ? l467 : l578);
                    var v2079 = l117.fvalue(pv, 3, l241, l127.fvalue(pv, 2, l158.fvalue(pv, 3, v2078, l17.fvalue(pv, 1, l52.fvalue(pv, 1, v2076)), l130.fvalue(pv, 2, (function(){
                        var symbol = l338;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })(), v2076)), l475), l244);
                    ((function(v2080){
                        return (v2080 !== l5.value ? v2080 : (((function(){
                            var tmp = v2075;
                            return (typeof tmp == 'object' && 'car' in tmp);
                        })()?l4.value: l5.value) !== l5.value ? (((function(){
                            var tmp = v2075;
                            return tmp === l5.value? l5.value: tmp.car;
                        })() === l6)?l4.value: l5.value) : l5.value));
                    })(((v2075 instanceof Symbol)?l4.value: l5.value)) !== l5.value ? l5.value : l81.fvalue(pv, 2, l797, v2075));
                    return (function(v2081){
                        return (v2081 !== l5.value ? l117.fvalue(values, 2, l501.fvalue(pv, 1, v2075), v2079) : (function(v2082){
                            return (v2082 !== l5.value ? l334.fvalue(values, 3, l338.fvalue(pv, 1, l104.fvalue(pv, 2, l328, v2075)), l799, v2079) : l334.fvalue(values, 2, l338.fvalue(pv, 1, l104.fvalue(pv, 2, l94, v2075)), v2079));
                        })((((v2075 instanceof Symbol)?l4.value: l5.value) !== l5.value ? (((l223.fvalue(pv, 1, v2075) === l228.fvalue(pv, 1, l798))?l4.value: l5.value) !== l5.value ? l5.value : l5.value) : l5.value)));
                    })(l501.fvalue(pv, 1, v2075));
                })();
            })();
        });
        func.fname = 'COMPILE-FUNCALL';
        return func;
    })();
    return l796;
})();
(function(){
    (l470).fvalue = (function(){
        var func = (function (values,nargs,v2083,v2084){
            checkArgsAtLeast(nargs, 1);
            checkArgsAtMost(nargs, 2);
            switch(nargs){
            case 1:
                v2084=l5.value;
            default: break;
            }
            return (function(){
                return (v2084 !== l5.value ? l334.fvalue(values, 4, l470.fvalue(pv, 1, l194.fvalue(pv, 1, v2083)), l496, l338.fvalue(pv, 2, (function(){
                    var tmp = l193.fvalue(pv, 1, v2083);
                    return tmp === l5.value? l5.value: tmp.car;
                })(), (function(){
                    var symbol = l343;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })()), l421) : l128.fvalue(values, 2, l69.fvalue(pv, 2, (function(){
                    var symbol = l385;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })(), l130.fvalue(pv, 2, (function(){
                    var symbol = l338;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })(), v2083)), l117.fvalue(pv, 2, l421, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })())));
            })();
        });
        func.fname = 'LS-COMPILE-BLOCK';
        return func;
    })();
    return l470;
})();
var l800 = make_lisp_string("How should I compile `~S'?");
(function(){
    (l338).fvalue = (function(){
        var func = (function (values,nargs,v2086,v2087){
            checkArgsAtLeast(nargs, 1);
            checkArgsAtMost(nargs, 2);
            switch(nargs){
            case 1:
                v2087=l5.value;
            default: break;
            }
            return (function(){
                try {
                var v2088 = [];
                    return (function(){
                        var func = (function (values,nargs,v2090,v2091){
                            switch(nargs){
                            case 0:
                                v2090=l5.value;
                            case 1:
                                v2091=l5.value;
                            default: break;
                            }
                            var v2089= l5.value;
                            for (var i = nargs-1; i>=2; i--)
                                v2089 = {car: arguments[i+2], cdr: v2089};
                            (v2091 !== l5.value ? (function(){
                                var values = mv;
                                throw ({type: 'block', id: v2088, values: l338.fvalue(values, 2, v2090, v2087), message: 'Return from unknown block LS-COMPILE.'})
                            })() : l5.value);
                            return (function(v2092){
                                try {
                                    var tmp;
                                    tmp = l343.value;
                                    l343.value = v2092;
                                    v2092 = tmp;
                                    return (function(v2093){
                                        return (v2093 !== l5.value ? (function(v2094){
                                            return (function(v2095){
                                                return (v2095 !== l5.value ? l357.fvalue(values, 1, v2094) : (function(v2097){
                                                    return (v2097 !== l5.value ? l334.fvalue(values, 2, l338.fvalue(pv, 1, l104.fvalue(pv, 2, l328, v2090)), l518) : l338.fvalue(values, 1, l104.fvalue(pv, 2, l687, l104.fvalue(pv, 2, l328, v2090))));
                                                })((function(v2096){
                                                    return (v2096 !== l5.value ? v2096 : (v2094 !== l5.value ? l195.fvalue(pv, 2, l394, l358.fvalue(pv, 1, v2094)) : l5.value));
                                                })(l274.fvalue(pv, 1, v2090))));
                                            })((v2094 !== l5.value ? l27.fvalue(pv, 1, l195.fvalue(pv, 2, l392, l358.fvalue(pv, 1, v2094))) : l5.value));
                                        })(l372.fvalue(pv, 3, v2090, (function(){
                                            var symbol = l377;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                            return value;
                                        })(), l96)) : (function(v2102){
                                            return (v2102 !== l5.value ? l488.fvalue(values, 1, v2090) : (function(v2103){
                                                return (v2103 !== l5.value ? (function(v2104,v2105){
                                                    return (function(v2106){
                                                        return (v2106 !== l5.value ? (function(v2107){
                                                            return (function(){
                                                                var f = v2107;
                                                                var args = [values, 0];
                                                                var tail = (v2105);
                                                                while (tail != l5.value){
                                                                    args.push(tail.car);
                                                                    args[1] += 1;
                                                                    tail = tail.cdr;
                                                                }
                                                                return (typeof f === 'function'? f : f.fvalue).apply(this, args);
                                                            })();
                                                        })(l144.fvalue(pv, 1, l107.fvalue(pv, 2, v2104, (function(){
                                                            var symbol = l397;
                                                            var value = symbol.value;
                                                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                            return value;
                                                        })()))) : (function(v2108){
                                                            return (v2108 !== l5.value ? (function(v2109){
                                                                return (function(){
                                                                    var f = v2109;
                                                                    var args = [values, 0];
                                                                    var tail = (v2105);
                                                                    while (tail != l5.value){
                                                                        args.push(tail.car);
                                                                        args[1] += 1;
                                                                        tail = tail.cdr;
                                                                    }
                                                                    return (typeof f === 'function'? f : f.fvalue).apply(this, args);
                                                                })();
                                                            })(l144.fvalue(pv, 1, l107.fvalue(pv, 2, v2104, (function(){
                                                                var symbol = l622;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                                return value;
                                                            })()))) : l796.fvalue(values, 2, v2104, v2105));
                                                        })((l107.fvalue(pv, 2, v2104, (function(){
                                                            var symbol = l622;
                                                            var value = symbol.value;
                                                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                            return value;
                                                        })()) !== l5.value ? l27.fvalue(pv, 1, l390.fvalue(pv, 3, v2104, l94, l393)) : l5.value)));
                                                    })(l107.fvalue(pv, 2, v2104, (function(){
                                                        var symbol = l397;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                                        return value;
                                                    })()));
                                                })((function(){
                                                    var tmp = v2090;
                                                    return tmp === l5.value? l5.value: tmp.car;
                                                })(),(function(){
                                                    var tmp = v2090;
                                                    return tmp === l5.value? l5.value: tmp.cdr;
                                                })()) : l81.fvalue(values, 2, l800, v2090));
                                            })(l54.fvalue(pv, 1, v2090)));
                                        })((function(v2098){
                                            return (v2098 !== l5.value ? v2098 : (function(v2099){
                                                return (v2099 !== l5.value ? v2099 : (function(v2100){
                                                    return (v2100 !== l5.value ? v2100 : (function(v2101){
                                                        return (v2101 !== l5.value ? v2101 : ((function(){
                                                            var x = v2090;
                                                            return typeof x === 'object' && 'length' in x;
                                                        })()?l4.value: l5.value));
                                                    })(((function(){
                                                        var x = v2090;
                                                        return typeof(x) == 'object' && 'length' in x && x.type == 'character';
                                                    })()?l4.value: l5.value)));
                                                })(((function(){
                                                    var x = v2090;
                                                    return (typeof(v2090) == "string") && x.length == 1;
                                                })()?l4.value: l5.value)));
                                            })(l64.fvalue(pv, 1, v2090)));
                                        })(l63.fvalue(pv, 1, v2090))));
                                    })(((v2090 instanceof Symbol)?l4.value: l5.value));
                                }
                                finally {
                                    l343.value = v2092;
                                }
                            })(v2087);
                        });
                        var args = [values, 0];
                        return (function(){
                            var values = mv;
                            var vs;
                            vs = l106.fvalue(values, 1, v2086);
                            if (typeof vs === 'object' && 'multiple-value' in vs)
                                args = args.concat(vs);
                            else
                                args.push(vs);
                            args[1] = args.length-2;
                            return func.apply(window, args);
                        })();
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == v2088)
                        return values.apply(this, forcemv(cf.values));
                    else
                        throw cf;
                }
            })();
        });
        func.fname = 'LS-COMPILE';
        return func;
    })();
    return l338;
})();
var l801 = (new Symbol(make_lisp_string("*COMPILE-PRINT-TOPLEVELS*")));
(function(){
    (((l801.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l801).value = l5.value));
    return l801;
})();
var l802 = (new Symbol(make_lisp_string("TRUNCATE-STRING")));
var l803 = (new Symbol(make_lisp_string("MIN")));
(function(){
    (l802).fvalue = (function(){
        var func = (function (values,nargs,v2110,v2111){
            checkArgsAtLeast(nargs, 1);
            checkArgsAtMost(nargs, 2);
            switch(nargs){
            case 1:
                v2111=60;
            default: break;
            }
            return (function(){
                return (function(v2114){
                    return l75.fvalue(values, 3, v2110, 0, v2114);
                })((function(v2113){
                    return (v2113 !== l5.value ? v2113 : l803.fvalue(pv, 2, v2111, l52.fvalue(pv, 1, v2110)));
                })(l85.fvalue(pv, 2, "\n", v2110)));
            })();
        });
        func.fname = 'TRUNCATE-STRING';
        return func;
    })();
    return l802;
})();
var l804 = (new Symbol(make_lisp_string("LS-COMPILE-TOPLEVEL")));
var l805 = make_lisp_string("Compiling ~a...");
(function(){
    (l804).fvalue = (function(){
        var func = (function (values,nargs,v2115,v2116){
            checkArgsAtLeast(nargs, 1);
            checkArgsAtMost(nargs, 2);
            switch(nargs){
            case 1:
                v2116=l5.value;
            default: break;
            }
            return (function(){
                return (function(v2118){
                    try {
                        var tmp;
                        tmp = l383.value;
                        l383.value = v2118;
                        v2118 = tmp;
                        return (function(v2119){
                            return (v2119 !== l5.value ? (function(v2121){
                                return l127.fvalue(values, 1, l69.fvalue(pv, 2, (function(){
                                    var symbol = l385;
                                    var func = symbol.fvalue;
                                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                                    return func;
                                })(), v2121));
                            })(l130.fvalue(pv, 2, (function (values,nargs,v2120){
                                checkArgs(nargs, 1);
                                return l804.fvalue(values, 2, v2120, l4.value);
                            }), (function(){
                                var tmp = v2115;
                                return tmp === l5.value? l5.value: tmp.cdr;
                            })())) : (function(){
                                ((function(){
                                    var symbol = l801;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                    return value;
                                })() !== l5.value ? (function(v2122){
                                    return l122.fvalue(pv, 3, l4.value, l805, l802.fvalue(pv, 1, v2122));
                                })(l249.fvalue(pv, 1, v2115)) : l5.value);
                                return (function(v2123){
                                    return l334.fvalue(values, 2, l128.fvalue(pv, 2, l386.fvalue(pv, 0), l334.fvalue(pv, 2, l421, (function(){
                                        var symbol = l123;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                        return value;
                                    })())), (v2123 !== l5.value ? l334.fvalue(pv, 3, v2123, l421, (function(){
                                        var symbol = l123;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                        return value;
                                    })()) : l5.value));
                                })(l338.fvalue(pv, 2, v2115, v2116));
                            })());
                        })((((function(){
                            var tmp = v2115;
                            return (typeof tmp == 'object' && 'car' in tmp);
                        })()?l4.value: l5.value) !== l5.value ? (((function(){
                            var tmp = v2115;
                            return tmp === l5.value? l5.value: tmp.car;
                        })() === l200)?l4.value: l5.value) : l5.value));
                    }
                    finally {
                        l383.value = v2118;
                    }
                })(l5.value);
            })();
        });
        func.fname = 'LS-COMPILE-TOPLEVEL';
        return func;
    })();
    return l804;
})();
(function(){
    (l289).fvalue = (function(){
        var func = (function (values,nargs,v2124){
            checkArgs(nargs, 1);
            return (function(){
                return (function(){
                    var v = globalEval(xstring(l804.fvalue(pv, 2, v2124, l4.value)));
                    return values.apply(this, forcemv(v));
                })();
            })();
        });
        func.fname = 'EVAL';
        return func;
    })();
    return l289;
})();
(function(){
    (((l20.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l20).value = l5.value));
    return l20;
})();
var l806 = (new Symbol(make_lisp_string("**")));
(function(){
    (((l806.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l806).value = l5.value));
    return l806;
})();
var l807 = (new Symbol(make_lisp_string("***")));
(function(){
    (((l807.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l807).value = l5.value));
    return l807;
})();
(function(){
    (((l21.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l21).value = l5.value));
    return l21;
})();
var l808 = (new Symbol(make_lisp_string("//")));
(function(){
    (((l808.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l808).value = l5.value));
    return l808;
})();
var l809 = (new Symbol(make_lisp_string("///")));
(function(){
    (((l809.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l809).value = l5.value));
    return l809;
})();
(function(){
    (((l40.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l40).value = l5.value));
    return l40;
})();
var l810 = (new Symbol(make_lisp_string("++")));
(function(){
    (((l810.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l810).value = l5.value));
    return l810;
})();
var l811 = (new Symbol(make_lisp_string("+++")));
(function(){
    (((l811.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l811).value = l5.value));
    return l811;
})();
(function(){
    (((l41.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l41).value = l5.value));
    return l41;
})();
var l812 = (new Symbol(make_lisp_string("EVAL-INTERACTIVE")));
(function(){
    (l812).fvalue = (function(){
        var func = (function (values,nargs,v2126){
            checkArgs(nargs, 1);
            return (function(){
                (function(){
                    return (function(){
                        var func = (function (values,nargs,v2129){
                            switch(nargs){
                            case 0:
                                v2129=l5.value;
                            default: break;
                            }
                            var v2128= l5.value;
                            for (var i = nargs-1; i>=1; i--)
                                v2128 = {car: arguments[i+2], cdr: v2128};
                            return ((l41).value = v2129);
                        });
                        var args = [pv, 0];
                        return (function(){
                            var values = mv;
                            var vs;
                            vs = v2126;
                            if (typeof vs === 'object' && 'multiple-value' in vs)
                                args = args.concat(vs);
                            else
                                args.push(vs);
                            args[1] = args.length-2;
                            return func.apply(window, args);
                        })();
                    })();
                })();
                (function(v2130){
                    return (function(){
                        (function(){
                            return (function(){
                                var func = (function (values,nargs,v2132){
                                    switch(nargs){
                                    case 0:
                                        v2132=l5.value;
                                    default: break;
                                    }
                                    var v2131= l5.value;
                                    for (var i = nargs-1; i>=1; i--)
                                        v2131 = {car: arguments[i+2], cdr: v2131};
                                    return ((l809).value = v2132);
                                });
                                var args = [pv, 0];
                                return (function(){
                                    var values = mv;
                                    var vs;
                                    vs = (function(){
                                        var symbol = l808;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                        return value;
                                    })();
                                    if (typeof vs === 'object' && 'multiple-value' in vs)
                                        args = args.concat(vs);
                                    else
                                        args.push(vs);
                                    args[1] = args.length-2;
                                    return func.apply(window, args);
                                })();
                            })();
                        })();
                        (function(){
                            return (function(){
                                var func = (function (values,nargs,v2134){
                                    switch(nargs){
                                    case 0:
                                        v2134=l5.value;
                                    default: break;
                                    }
                                    var v2133= l5.value;
                                    for (var i = nargs-1; i>=1; i--)
                                        v2133 = {car: arguments[i+2], cdr: v2133};
                                    return ((l808).value = v2134);
                                });
                                var args = [pv, 0];
                                return (function(){
                                    var values = mv;
                                    var vs;
                                    vs = (function(){
                                        var symbol = l21;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                        return value;
                                    })();
                                    if (typeof vs === 'object' && 'multiple-value' in vs)
                                        args = args.concat(vs);
                                    else
                                        args.push(vs);
                                    args[1] = args.length-2;
                                    return func.apply(window, args);
                                })();
                            })();
                        })();
                        (function(){
                            return (function(){
                                var func = (function (values,nargs,v2136){
                                    switch(nargs){
                                    case 0:
                                        v2136=l5.value;
                                    default: break;
                                    }
                                    var v2135= l5.value;
                                    for (var i = nargs-1; i>=1; i--)
                                        v2135 = {car: arguments[i+2], cdr: v2135};
                                    return ((l21).value = v2136);
                                });
                                var args = [pv, 0];
                                return (function(){
                                    var values = mv;
                                    var vs;
                                    vs = v2130;
                                    if (typeof vs === 'object' && 'multiple-value' in vs)
                                        args = args.concat(vs);
                                    else
                                        args.push(vs);
                                    args[1] = args.length-2;
                                    return func.apply(window, args);
                                })();
                            })();
                        })();
                        (function(){
                            return (function(){
                                var func = (function (values,nargs,v2138){
                                    switch(nargs){
                                    case 0:
                                        v2138=l5.value;
                                    default: break;
                                    }
                                    var v2137= l5.value;
                                    for (var i = nargs-1; i>=1; i--)
                                        v2137 = {car: arguments[i+2], cdr: v2137};
                                    return ((l807).value = v2138);
                                });
                                var args = [pv, 0];
                                return (function(){
                                    var values = mv;
                                    var vs;
                                    vs = (function(){
                                        var symbol = l806;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                        return value;
                                    })();
                                    if (typeof vs === 'object' && 'multiple-value' in vs)
                                        args = args.concat(vs);
                                    else
                                        args.push(vs);
                                    args[1] = args.length-2;
                                    return func.apply(window, args);
                                })();
                            })();
                        })();
                        (function(){
                            return (function(){
                                var func = (function (values,nargs,v2140){
                                    switch(nargs){
                                    case 0:
                                        v2140=l5.value;
                                    default: break;
                                    }
                                    var v2139= l5.value;
                                    for (var i = nargs-1; i>=1; i--)
                                        v2139 = {car: arguments[i+2], cdr: v2139};
                                    return ((l806).value = v2140);
                                });
                                var args = [pv, 0];
                                return (function(){
                                    var values = mv;
                                    var vs;
                                    vs = (function(){
                                        var symbol = l20;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                        return value;
                                    })();
                                    if (typeof vs === 'object' && 'multiple-value' in vs)
                                        args = args.concat(vs);
                                    else
                                        args.push(vs);
                                    args[1] = args.length-2;
                                    return func.apply(window, args);
                                })();
                            })();
                        })();
                        return (function(){
                            return (function(){
                                var func = (function (values,nargs,v2142){
                                    switch(nargs){
                                    case 0:
                                        v2142=l5.value;
                                    default: break;
                                    }
                                    var v2141= l5.value;
                                    for (var i = nargs-1; i>=1; i--)
                                        v2141 = {car: arguments[i+2], cdr: v2141};
                                    return ((l20).value = v2142);
                                });
                                var args = [pv, 0];
                                return (function(){
                                    var values = mv;
                                    var vs;
                                    vs = (function(){
                                        var tmp = v2130;
                                        return tmp === l5.value? l5.value: tmp.car;
                                    })();
                                    if (typeof vs === 'object' && 'multiple-value' in vs)
                                        args = args.concat(vs);
                                    else
                                        args.push(vs);
                                    args[1] = args.length-2;
                                    return func.apply(window, args);
                                })();
                            })();
                        })();
                    })();
                })((function(){
                    var func = (function(){
                        var symbol = l104;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                        return func;
                    })();
                    var args = [pv, 0];
                    return (function(){
                        var values = mv;
                        var vs;
                        vs = l289.fvalue(values, 1, v2126);
                        if (typeof vs === 'object' && 'multiple-value' in vs)
                            args = args.concat(vs);
                        else
                            args.push(vs);
                        args[1] = args.length-2;
                        return func.apply(window, args);
                    })();
                })());
                (((l20.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : (function(){
                    return (function(){
                        var func = (function (values,nargs,v2144){
                            switch(nargs){
                            case 0:
                                v2144=l5.value;
                            default: break;
                            }
                            var v2143= l5.value;
                            for (var i = nargs-1; i>=1; i--)
                                v2143 = {car: arguments[i+2], cdr: v2143};
                            return ((l20).value = v2144);
                        });
                        var args = [pv, 0];
                        return (function(){
                            var values = mv;
                            var vs;
                            vs = l5.value;
                            if (typeof vs === 'object' && 'multiple-value' in vs)
                                args = args.concat(vs);
                            else
                                args.push(vs);
                            args[1] = args.length-2;
                            return func.apply(window, args);
                        })();
                    })();
                })());
                (function(){
                    (function(){
                        return (function(){
                            var func = (function (values,nargs,v2146){
                                switch(nargs){
                                case 0:
                                    v2146=l5.value;
                                default: break;
                                }
                                var v2145= l5.value;
                                for (var i = nargs-1; i>=1; i--)
                                    v2145 = {car: arguments[i+2], cdr: v2145};
                                return ((l811).value = v2146);
                            });
                            var args = [pv, 0];
                            return (function(){
                                var values = mv;
                                var vs;
                                vs = (function(){
                                    var symbol = l810;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                    return value;
                                })();
                                if (typeof vs === 'object' && 'multiple-value' in vs)
                                    args = args.concat(vs);
                                else
                                    args.push(vs);
                                args[1] = args.length-2;
                                return func.apply(window, args);
                            })();
                        })();
                    })();
                    (function(){
                        return (function(){
                            var func = (function (values,nargs,v2148){
                                switch(nargs){
                                case 0:
                                    v2148=l5.value;
                                default: break;
                                }
                                var v2147= l5.value;
                                for (var i = nargs-1; i>=1; i--)
                                    v2147 = {car: arguments[i+2], cdr: v2147};
                                return ((l810).value = v2148);
                            });
                            var args = [pv, 0];
                            return (function(){
                                var values = mv;
                                var vs;
                                vs = (function(){
                                    var symbol = l40;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                    return value;
                                })();
                                if (typeof vs === 'object' && 'multiple-value' in vs)
                                    args = args.concat(vs);
                                else
                                    args.push(vs);
                                args[1] = args.length-2;
                                return func.apply(window, args);
                            })();
                        })();
                    })();
                    return (function(){
                        return (function(){
                            var func = (function (values,nargs,v2150){
                                switch(nargs){
                                case 0:
                                    v2150=l5.value;
                                default: break;
                                }
                                var v2149= l5.value;
                                for (var i = nargs-1; i>=1; i--)
                                    v2149 = {car: arguments[i+2], cdr: v2149};
                                return ((l40).value = v2150);
                            });
                            var args = [pv, 0];
                            return (function(){
                                var values = mv;
                                var vs;
                                vs = (function(){
                                    var symbol = l41;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                                    return value;
                                })();
                                if (typeof vs === 'object' && 'multiple-value' in vs)
                                    args = args.concat(vs);
                                else
                                    args.push(vs);
                                args[1] = args.length-2;
                                return func.apply(window, args);
                            })();
                        })();
                    })();
                })();
                return l119.fvalue(values, 1, (function(){
                    var symbol = l21;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })());
            })();
        });
        func.fname = 'EVAL-INTERACTIVE';
        return func;
    })();
    return l812;
})();
var l813 = (new Symbol(make_lisp_string("&BODY")));
var l814 = (new Symbol(make_lisp_string("OTHERWISE")));
var l815 = QIList(l813,l406,l404,l405,l20,l806,l807,l14,l275,l40,l810,l811,l41,l21,l808,l809,l22,l23,l651,l655,l19,l19,l650,l653,l197,l206,l36,l44,l737,l778,l776,l107,l67,l373,l18,l194,l164,l166,l167,l168,l169,l170,l171,l172,l173,l174,l175,l176,l177,l178,l179,l180,l181,l182,l183,l184,l151,l162,l149,l147,l145,l141,l141,l34,l541,l163,l165,l159,l142,l142,l208,l61,l62,l60,l33,l137,l138,l59,l199,l185,l186,l29,l2,l464,l3,l109,l396,l1,l10,l11,l9,l73,l72,l91,l49,l50,l93,l31,l32,l35,l154,l700,l26,l87,l81,l289,l84,l284,l663,l89,l150,l228,l224,l143,l502,l122,l148,l684,l734,l94,l766,l15,l114,l103,l116,l565,l58,l399,l276,l28,l63,l283,l207,l274,l505,l6,l193,l52,l519,l522,l104,l158,l257,l54,l57,l771,l258,l680,l130,l195,l66,l645,l100,l576,l101,l588,l203,l5,l155,l27,l205,l161,l160,l42,l658,l37,l814,l229,l267,l246,l198,l324,l65,l190,l249,l253,l395,l38,l39,l200,l48,l30,l328,l196,l333,l68,l69,l70,l12,l532,l46,l47,l201,l202,l144,l473,l110,l153,l105,l152,l83,l135,l720,l88,l718,l75,l189,l498,l681,l223,l694,l687,l678,l4,l550,l188,l156,l146,l545,l187,l25,l8,l571,l121,l119,l96,l251,l7,l92,l769,l24,l5);
l284.fvalue(pv, 1, l815);
((l275).value = (function(){
    var symbol = l271;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
    return value;
})());
var l816 = make_lisp_string("var lisp");
globalEval(xstring(l816));
(lisp = lisp_to_js({}));
(lisp.read = lisp_to_js((function(){
    var symbol = l332;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
    return func;
})()));
(lisp.print = lisp_to_js((function(){
    var symbol = l249;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
    return func;
})()));
(lisp.eval = lisp_to_js((function(){
    var symbol = l289;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
    return func;
})()));
(lisp.compile = lisp_to_js((function (values,nargs,v2151){
    checkArgs(nargs, 1);
    return l804.fvalue(values, 2, v2151, l4.value);
})));
(lisp.evalString = lisp_to_js((function (values,nargs,v2152){
    checkArgs(nargs, 1);
    return l289.fvalue(values, 1, l332.fvalue(pv, 1, v2152));
})));
(lisp.evalInput = lisp_to_js((function (values,nargs,v2153){
    checkArgs(nargs, 1);
    return l812.fvalue(values, 1, l332.fvalue(pv, 1, v2153));
})));
(lisp.compileString = lisp_to_js((function (values,nargs,v2154){
    checkArgs(nargs, 1);
    return l804.fvalue(values, 2, l332.fvalue(pv, 1, v2154), l4.value);
})));
var l817 = (new Symbol(make_lisp_string("X")));
var l818 = (new Symbol(make_lisp_string("ARGS")));
var l819 = QIList(l817,l405,l818,l5);
var l820 = QIList(QIList(l818,QIList(l137,l817,l818,l5),l5),l5);
var l821 = QIList(l421,l123,l5);
var l822 = QIList(l639,l123,l5);
var l823 = QIList(l622,l5);
var l824 = QIList(l397,l5);
var l825 = make_lisp_string("It is not a full defstruct implementation.");
var l826 = make_lisp_string("Bad slot description `~S'.");
var l827 = make_lisp_string("-P");
var l828 = make_lisp_string("MAKE-");
var l829 = QIList(l817,l5);
var l830 = QIList(l138,l817,l5);
var l831 = QIList(l141,l817,l5);
var l832 = make_lisp_string("COPY-");
var l833 = QIList(l829,QIList(l185,l817,l5),l5);
var l834 = (new Symbol(make_lisp_string("OBJECT")));
var l835 = (new Symbol(make_lisp_string("NEW-VALUE")));
var l836 = QIList(QIList(l834,QIList(l15,l5),l5),QIList(l835,QIList(l15,l5),l5),l5);
var l837 = QIList(l104,l834,l5);
var l838 = QIList(l104,l817,l5);
var l839 = QIList(l104,l835,l5);
var l840 = QIList(l328,l200,l5);
var l841 = QIList(l328,l201,l5);
var l842 = QIList(l328,l160,l5);
var l843 = QIList(l834,l5);
var l844 = QIList(l835,l5);
var l845 = QIList(l426,l5);
var l846 = (new Symbol(make_lisp_string("IT")));
var l847 = (new Symbol(make_lisp_string("INTEGER")));
var l848 = (new Symbol(make_lisp_string("SYMBOL")));
var l849 = (new Symbol(make_lisp_string("ARRAY")));
var l850 = make_lisp_string("Odd number of arguments to setf.");
var l851 = make_lisp_string("ACCESS-FN `~S' must be a symbol.");
var l852 = QIList(l102,l5);
var l853 = QIList(l94,l104,l5);
var l854 = QIList(0,l5);
var l855 = QIList(QIList(l4,QIList(l81,l80,l5),l5),l5);
var l856 = QIList(QIList(l137,QIList(l328,l192,l5),l5,l5),l5);
var l857 = (new Symbol(make_lisp_string("COLLECT")));
var l858 = QIList(QIList(l137,l817,l5,l5),l5);
var l859 = make_lisp_string("Odd paris in PSETQ");
var l860 = QIList(l364,QIList(QIList(l350,l41,l96,l5,QIList(l392,l5),l5),QIList(l350,l811,l96,l5,QIList(l392,l5),l5),QIList(l350,l810,l96,l5,QIList(l392,l5),l5),QIList(l350,l40,l96,l5,QIList(l392,l5),l5),QIList(l350,l809,l96,l5,QIList(l392,l5),l5),QIList(l350,l808,l96,l5,QIList(l392,l5),l5),QIList(l350,l21,l96,l5,QIList(l392,l5),l5),QIList(l350,l807,l96,l5,QIList(l392,l5),l5),QIList(l350,l806,l96,l5,QIList(l392,l5),l5),QIList(l350,l20,l96,l5,QIList(l392,l5),l5),QIList(l350,l801,l96,l5,QIList(l392,l5),l5),QIList(l350,l622,l96,l5,QIList(l392,l5),l5),QIList(l350,l605,l96,l5,QIList(l392,l5),l5),QIList(l350,l603,l96,l5,QIList(l392,l5),l5),QIList(l350,l601,l96,l5,QIList(l392,l5),l5),QIList(l350,l599,l96,l5,QIList(l392,l5),l5),QIList(l350,l597,l96,l5,QIList(l392,l5),l5),QIList(l350,l595,l96,l5,QIList(l392,l5),l5),QIList(l350,l593,l96,l5,QIList(l392,l5),l5),QIList(l350,l592,l96,l5,QIList(l392,l5),l5),QIList(l350,l591,l96,l5,QIList(l392,l5),l5),QIList(l350,l506,l96,l5,QIList(l392,l5),l5),QIList(l350,l478,l96,l5,QIList(l392,l5),l5),QIList(l350,l477,l96,l5,QIList(l392,l5),l5),QIList(l350,l476,l96,l5,QIList(l392,l5),l5),QIList(l350,l403,l96,l5,QIList(l392,l5),l5),QIList(l350,l397,l96,l5,QIList(l392,l5),l5),QIList(l350,l383,l96,l5,QIList(l392,l5),l5),QIList(l350,l378,l96,l5,QIList(l392,l5),l5),QIList(l350,l377,l96,l5,QIList(l392,l5),l5),QIList(l350,l343,l96,l5,QIList(l392,l5),l5),QIList(l350,l225,l96,l5,QIList(l392,l5),l5),QIList(l350,l282,l96,l5,QIList(l392,l5),l5),QIList(l350,l275,l96,l5,QIList(l392,l5),l5),QIList(l350,l273,l96,l5,QIList(l392,l5),l5),QIList(l350,l271,l96,l5,QIList(l392,l5),l5),QIList(l350,l269,l96,l5,QIList(l392,l5),l5),QIList(l350,l256,l96,l5,QIList(l392,l5),l5),QIList(l350,l220,l96,l5,QIList(l392,l5),l5),QIList(l350,l123,l96,l5,QIList(l392,l5),l5),QIList(l350,l113,l96,l5,QIList(l394,l392,l5),l5),QIList(l350,l102,l96,l5,QIList(l392,l5),l5),QIList(l350,l14,l96,l5,QIList(l392,l5),l5),QIList(l350,l5,l96,l5,QIList(l394,l392,l5),l5),QIList(l350,l4,l96,l5,QIList(l394,l392,l5),l5),l5),QIList(QIList(l350,l649,l388,(function (values,nargs,v2155,v2156){
    checkArgs(nargs, 2);
    return l104.fvalue(values, 4, l623, v2155, l819, l104.fvalue(pv, 3, l519, l820, l104.fvalue(pv, 3, l631, l818, l104.fvalue(pv, 2, l336, l104.fvalue(pv, 3, l647, l818, v2156)))));
}),l5,l5),QIList(l350,l631,l388,(function (values,nargs,v2158){
    checkArgsAtLeast(nargs, 1);
    var v2157= l5.value;
    for (var i = nargs-1; i>=1; i--)
        v2157 = {car: arguments[i+2], cdr: v2157};
    (((v2158 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l5.value : l81.fvalue(pv, 2, l285, v2158));
    return l104.fvalue(values, 3, l626, v2158, l104.fvalue(pv, 3, l6, l104.fvalue(pv, 1, v2158), l158.fvalue(pv, 3, l334, l496, l44.fvalue(pv, 2, v2157, l821))));
}),l5,l5),QIList(l350,l625,l388,(function (values,nargs,v2160){
    checkArgsAtLeast(nargs, 1);
    var v2159= l5.value;
    for (var i = nargs-1; i>=1; i--)
        v2159 = {car: arguments[i+2], cdr: v2159};
    return ({car: l340, cdr: l44.fvalue(pv, 3, l130.fvalue(pv, 2, (function (values,nargs,v2161){
        checkArgs(nargs, 1);
        return l158.fvalue(values, 6, l334, l440, l143.fvalue(pv, 1, v2161), l448, l146.fvalue(pv, 1, v2161), l821);
    }), v2160), l130.fvalue(pv, 2, (function (values,nargs,v2162){
        checkArgs(nargs, 1);
        return l104.fvalue(values, 8, l334, l629, l143.fvalue(pv, 1, v2162), l634, l144.fvalue(pv, 1, v2162), l636, l123, l158.fvalue(pv, 6, l341, l637, l143.fvalue(pv, 1, v2162), l638, l144.fvalue(pv, 1, v2162), l822));
    }), v2160), l104.fvalue(pv, 1, l158.fvalue(pv, 4, l334, l496, ({car: l200, cdr: v2159}), l821)))});
}),l5,l5),QIList(l350,l624,l388,(function (values,nargs,v2164,v2165){
    checkArgsAtLeast(nargs, 2);
    var v2163= l5.value;
    for (var i = nargs-1; i>=2; i--)
        v2163 = {car: arguments[i+2], cdr: v2163};
    return l104.fvalue(values, 4, l623, v2164, v2165, l158.fvalue(pv, 3, l519, l130.fvalue(pv, 2, (function (values,nargs,v2166){
        checkArgs(nargs, 1);
        return l104.fvalue(values, 2, v2166, l104.fvalue(pv, 2, l338, v2166));
    }), v2165), v2163));
}),l5,l5),QIList(l350,l623,l388,(function (values,nargs,v2168,v2169){
    checkArgsAtLeast(nargs, 2);
    var v2167= l5.value;
    for (var i = nargs-1; i>=2; i--)
        v2167 = {car: arguments[i+2], cdr: v2167};
    return l158.fvalue(values, 3, l30, l104.fvalue(pv, 3, l104, l104.fvalue(pv, 2, l328, v2168), l104.fvalue(pv, 3, l6, v2169, l158.fvalue(pv, 3, l373, v2168, v2167))), l823);
}),l5,l5),QIList(l350,l329,l388,(function (values,nargs,v2170){
    checkArgs(nargs, 1);
    return l607.fvalue(values, 1, v2170);
}),l5,l5),QIList(l350,l508,l388,(function (values,nargs,v2171,v2172,v2173){
    checkArgs(nargs, 3);
    return l104.fvalue(values, 4, l398, v2171, v2172, l104.fvalue(pv, 2, l338, v2173));
}),l5,l5),QIList(l350,l398,l388,(function (values,nargs,v2175,v2176){
    checkArgsAtLeast(nargs, 2);
    var v2174= l5.value;
    for (var i = nargs-1; i>=2; i--)
        v2174 = {car: arguments[i+2], cdr: v2174};
    return l158.fvalue(values, 3, l30, l104.fvalue(pv, 3, l104, l104.fvalue(pv, 2, l328, v2175), l104.fvalue(pv, 3, l6, v2176, l158.fvalue(pv, 3, l373, v2175, v2174))), l824);
}),l5,l5),QIList(l350,l396,l388,(function (values,nargs,v2177,v2178){
    checkArgs(nargs, 2);
    return l104.fvalue(values, 3, l290, l104.fvalue(pv, 2, l328, v2177), l104.fvalue(pv, 2, l328, v2178));
}),l5,l5),QIList(l350,l344,l388,(function (values,nargs,v2180){
    checkArgsAtLeast(nargs, 1);
    var v2179= l5.value;
    for (var i = nargs-1; i>=1; i--)
        v2179 = {car: arguments[i+2], cdr: v2179};
    (((v2180 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l5.value : l81.fvalue(pv, 1, l825));
    return (function(){
        var v2181 = (v2180).name;
        var v2182 = l130.fvalue(pv, 2, (function (values,nargs,v2183){
            checkArgs(nargs, 1);
            return (function(v2184){
                return (v2184 !== l5.value ? l104.fvalue(values, 1, v2183) : (function(v2185){
                    return (v2185 !== l5.value ? v2183 : l81.fvalue(values, 2, l826, v2183));
                })((l54.fvalue(pv, 1, v2183) !== l5.value ? ((function(){
                    var tmp = v2183;
                    return tmp === l5.value? l5.value: tmp.car;
                })() !== l5.value ? l159.fvalue(pv, 1, v2183) : l5.value) : l5.value)));
            })(((v2183 instanceof Symbol)?l4.value: l5.value));
        }), v2179);
        var v2186 = l283.fvalue(pv, 1, l117.fvalue(pv, 2, v2181, l827));
        return l158.fvalue(values, 5, l200, l104.fvalue(pv, 4, l11, l283.fvalue(pv, 1, l117.fvalue(pv, 2, l828, v2181)), ({car: l406, cdr: v2182}), l158.fvalue(pv, 3, l104, l104.fvalue(pv, 2, l328, v2180), l130.fvalue(pv, 2, (function(){
            var symbol = l141;
            var func = symbol.fvalue;
            if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
            return func;
        })(), v2182))), l104.fvalue(pv, 4, l11, v2186, l829, l104.fvalue(pv, 3, l36, l830, l104.fvalue(pv, 3, l700, l831, l104.fvalue(pv, 2, l328, v2180)))), l158.fvalue(pv, 3, l11, l283.fvalue(pv, 1, l117.fvalue(pv, 2, l832, v2181)), l833), l44.fvalue(pv, 2, (function(){
            var v2187 = ({car: l192, cdr: l5.value});
            var v2188 = v2187;
            (function(v2191){
                return (function(v2192){
                    return (function(){
                        return (function(v2194,v2195){
                            (function(){
                                while(v2194 !== l5.value){
                                    (v2195 = (function(){
                                        var tmp = v2194;
                                        return tmp === l5.value? l5.value: tmp.car;
                                    })());
                                    (function(){
                                        (function(){
                                            var v2196 = (function(){
                                                var tmp = v2195;
                                                return tmp === l5.value? l5.value: tmp.car;
                                            })();
                                            var v2197 = l283.fvalue(pv, 1, l117.fvalue(pv, 3, v2181, l134, l135.fvalue(pv, 1, v2196)));
                                            v2191(pv, 1, l104.fvalue(pv, 5, l11, v2197, l829, l104.fvalue(pv, 3, l8, ({car: v2186, cdr: l829}), l104.fvalue(pv, 4, l81, l354, l817, v2181)), l158.fvalue(pv, 3, l161, v2192, l829)));
                                            v2191(pv, 1, l104.fvalue(pv, 4, l109, v2197, l829, l104.fvalue(pv, 3, l519, l836, l104.fvalue(pv, 6, l121, l837, l838, l839, l158.fvalue(pv, 4, l104, l840, l158.fvalue(pv, 4, l104, l841, l158.fvalue(pv, 4, l104, l842, l104.fvalue(pv, 2, l328, v2192), l843), l844), l844), l158.fvalue(pv, 3, l104, l104.fvalue(pv, 2, l328, v2197), l843)))));
                                            return (function(){
                                                var v2198 = 1;
                                                var v2199 = (function(){
                                                    var x1 = v2192;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = v2198;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })();
                                                return (v2192 = v2199);
                                            })();
                                        })();
                                        return l5.value;
                                    })();
                                    (v2194 = (function(){
                                        var tmp = v2194;
                                        return tmp === l5.value? l5.value: tmp.cdr;
                                    })());
                                }return l5.value;
                            })();
                            return l5.value;
                        })(v2182,l5.value);
                    })();
                })(1);
            })((function (values,nargs,v2189){
                checkArgs(nargs, 1);
                return (function(){
                    (function(){
                        var x = v2188;
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.cdr = ({car: v2189, cdr: l5.value}), x);
                    })();
                    (v2188 = (function(){
                        var tmp = v2188;
                        return tmp === l5.value? l5.value: tmp.cdr;
                    })());
                    return v2189;
                })();
            }));
            return (function(){
                var tmp = v2187;
                return tmp === l5.value? l5.value: tmp.cdr;
            })();
        })(), l104.fvalue(pv, 1, l104.fvalue(pv, 2, l328, v2180))));
    })();
}),l5,l5),QIList(l350,l340,l388,(function (values,nargs){
    var v2200= l5.value;
    for (var i = nargs-1; i>=0; i--)
        v2200 = {car: arguments[i+2], cdr: v2200};
    return l158.fvalue(values, 5, l334, l419, l123, ({car: l341, cdr: v2200}), l845);
}),l5,l5),QIList(l350,l276,l388,(function (values,nargs,v2201){
    checkArgs(nargs, 1);
    return l104.fvalue(values, 2, l507, l104.fvalue(pv, 3, l105, l275, l104.fvalue(pv, 2, l260, v2201)));
}),l5,l5),QIList(l350,l190,l388,(function (values,nargs,v2202){
    checkArgs(nargs, 1);
    return (function(){
        var func = (function (values,nargs,v2204,v2205,v2206,v2207,v2208){
            switch(nargs){
            case 0:
                v2204=l5.value;
            case 1:
                v2205=l5.value;
            case 2:
                v2206=l5.value;
            case 3:
                v2207=l5.value;
            case 4:
                v2208=l5.value;
            default: break;
            }
            var v2203= l5.value;
            for (var i = nargs-1; i>=5; i--)
                v2203 = {car: arguments[i+2], cdr: v2203};
            return (function(v2209){
                return l104.fvalue(values, 4, l522, l44.fvalue(pv, 2, l130.fvalue(pv, 3, (function(){
                    var symbol = l104;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })(), v2204, v2205), l158.fvalue(pv, 3, l104.fvalue(pv, 2, v2209, v2208), l104.fvalue(pv, 2, (function(){
                    var tmp = v2206;
                    return tmp === l5.value? l5.value: tmp.car;
                })(), l104.fvalue(pv, 2, l142, v2209)), (function(){
                    var tmp = v2206;
                    return tmp === l5.value? l5.value: tmp.cdr;
                })())), v2207, l104.fvalue(pv, 2, l141, v2209));
            })(l15.fvalue(pv, 0));
        });
        var args = [values, 0];
        return (function(){
            var values = mv;
            var vs;
            vs = l103.fvalue(values, 1, v2202);
            if (typeof vs === 'object' && 'multiple-value' in vs)
                args = args.concat(vs);
            else
                args.push(vs);
            args[1] = args.length-2;
            return func.apply(window, args);
        })();
    })();
}),l5,l5),QIList(l350,l132,l388,(function (values,nargs,v2211){
    checkArgsAtLeast(nargs, 1);
    var v2210= l5.value;
    for (var i = nargs-1; i>=1; i--)
        v2210 = {car: arguments[i+2], cdr: v2210};
    return l104.fvalue(values, 3, l519, l104.fvalue(pv, 1, l104.fvalue(pv, 2, l846, v2211)), l158.fvalue(pv, 3, l7, l846, v2210));
}),l5,l5),QIList(l350,l125,l388,(function (values,nargs,v2213){
    checkArgsAtLeast(nargs, 1);
    var v2212= l5.value;
    for (var i = nargs-1; i>=1; i--)
        v2212 = {car: arguments[i+2], cdr: v2212};
    return l104.fvalue(values, 3, l105, v2213, l104.fvalue(pv, 3, l117, v2213, ({car: l200, cdr: v2212})));
}),l5,l5),QIList(l350,l111,l388,(function (values,nargs,v2215){
    checkArgsAtLeast(nargs, 1);
    var v2214= l5.value;
    for (var i = nargs-1; i>=1; i--)
        v2214 = {car: arguments[i+2], cdr: v2214};
    return (function(v2216){
        return l104.fvalue(values, 3, l519, l104.fvalue(pv, 1, l104.fvalue(pv, 2, v2216, v2215)), ({car: l33, cdr: l130.fvalue(pv, 2, (function (values,nargs,v2217){
            checkArgs(nargs, 1);
            return ((((function(){
                var tmp = v2217;
                return tmp === l5.value? l5.value: tmp.car;
            })() === l4.value)?l4.value: l5.value) !== l5.value ? l104.fvalue(values, 1, ({car: l4, cdr: l157.fvalue(pv, 1, v2217)})) : ({car: l104.fvalue(pv, 2, (function(v2218){
                return (function(v2219){
                    return (function(v2220){
                        return (v2220 !== l5.value ? l63 : (function(v2221){
                            return (v2221 !== l5.value ? l138 : (function(v2222){
                                return (v2222 !== l5.value ? l678 : (function(v2223){
                                    return (v2223 !== l5.value ? l776 : (function(v2224){
                                        return (v2224 !== l5.value ? l718 : (function(v2225){
                                            return (v2225 !== l5.value ? l67 : (function(v2226){
                                                return (v2226 !== l5.value ? l42 : l81.fvalue(pv, 2, l99, v2218));
                                            })(l26.fvalue(pv, 2, v2219, l42)));
                                        })(l26.fvalue(pv, 2, v2219, l67)));
                                    })(l26.fvalue(pv, 2, v2219, l135)));
                                })(l26.fvalue(pv, 2, v2219, l849)));
                            })(l26.fvalue(pv, 2, v2219, l848)));
                        })(l26.fvalue(pv, 2, v2219, l137)));
                    })(l26.fvalue(pv, 2, v2219, l847));
                })(v2218);
            })((function(){
                var tmp = v2217;
                return tmp === l5.value? l5.value: tmp.car;
            })()), v2216), cdr: (function(v2227){
                return (v2227 !== l5.value ? v2227 : l104.fvalue(pv, 1, l5.value));
            })(l157.fvalue(pv, 1, v2217))}));
        }), v2214)}));
    })(l15.fvalue(pv, 0));
}),l5,l5),QIList(l350,l110,l388,(function (values,nargs){
    var v2228= l5.value;
    for (var i = nargs-1; i>=0; i--)
        v2228 = {car: arguments[i+2], cdr: v2228};
    return (function(v2229){
        return (v2229 !== l5.value ? l5.value : (function(v2230){
            return (v2230 !== l5.value ? l81.fvalue(values, 1, l850) : (function(v2231){
                return (v2231 !== l5.value ? (function(v2232,v2233){
                    return (function(){
                        var func = (function (values,nargs,v2235,v2236,v2237,v2238){
                            switch(nargs){
                            case 0:
                                v2235=l5.value;
                            case 1:
                                v2236=l5.value;
                            case 2:
                                v2237=l5.value;
                            case 3:
                                v2238=l5.value;
                            default: break;
                            }
                            var v2234= l5.value;
                            for (var i = nargs-1; i>=4; i--)
                                v2234 = {car: arguments[i+2], cdr: v2234};
                            return l104.fvalue(values, 3, l522, l130.fvalue(pv, 3, (function(){
                                var symbol = l104;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                                return func;
                            })(), v2235, v2236), l104.fvalue(pv, 4, l100, v2237, v2233, v2238));
                        });
                        var args = [values, 0];
                        return (function(){
                            var values = mv;
                            var vs;
                            vs = l103.fvalue(values, 1, v2232);
                            if (typeof vs === 'object' && 'multiple-value' in vs)
                                args = args.concat(vs);
                            else
                                args.push(vs);
                            args[1] = args.length-2;
                            return func.apply(window, args);
                        })();
                    })();
                })(l106.fvalue(pv, 1, l143.fvalue(pv, 1, v2228)),l144.fvalue(pv, 1, v2228)) : ({car: l200, cdr: (function(){
                    return (function(v2240,v2241){
                        return (function(){
                            try {
                            var v2242 = [];
                                return (function(){
                                    while(l4.value !== l5.value){
                                        (l42.fvalue(pv, 1, v2240) !== l5.value ? (function(){
                                            throw ({type: 'block', id: v2242, values: l47.fvalue(pv, 1, v2241), message: 'Return from unknown block NIL.'})
                                        })() : l5.value);
                                        l5.value;
                                        (function(v2243,v2244){
                                            return (v2240 = v2243, v2241 = v2244);
                                        })(l159.fvalue(pv, 1, v2240),({car: l104.fvalue(pv, 3, l110, (function(){
                                            var tmp = v2240;
                                            return tmp === l5.value? l5.value: tmp.car;
                                        })(), l145.fvalue(pv, 1, v2240)), cdr: v2241}));
                                    }return l5.value;
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == v2242)
                                    return cf.values;
                                else
                                    throw cf;
                            }
                        })();
                    })(v2228,l5);
                })()}));
            })(l42.fvalue(pv, 1, l159.fvalue(pv, 1, v2228))));
        })(l42.fvalue(pv, 1, (function(){
            var tmp = v2228;
            return tmp === l5.value? l5.value: tmp.cdr;
        })())));
    })(l42.fvalue(pv, 1, v2228));
}),l5,l5),QIList(l350,l109,l388,(function (values,nargs,v2246,v2247){
    checkArgsAtLeast(nargs, 2);
    var v2245= l5.value;
    for (var i = nargs-1; i>=2; i--)
        v2245 = {car: arguments[i+2], cdr: v2245};
    (((v2246 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l5.value : l81.fvalue(pv, 2, l851, v2246));
    return l104.fvalue(values, 3, l200, l158.fvalue(pv, 3, l30, l104.fvalue(pv, 3, l137, l104.fvalue(pv, 2, l328, v2246), l158.fvalue(pv, 3, l6, v2247, v2245)), l852), l104.fvalue(pv, 2, l328, v2246));
}),l5,l5),QIList(l350,l101,l388,(function (values,nargs,v2248){
    checkArgs(nargs, 1);
    return l104.fvalue(values, 3, l576, l853, v2248);
}),l5,l5),QIList(l350,l100,l388,(function (values,nargs,v2250,v2251){
    checkArgsAtLeast(nargs, 2);
    var v2249= l5.value;
    for (var i = nargs-1; i>=2; i--)
        v2249 = {car: arguments[i+2], cdr: v2249};
    return l104.fvalue(values, 3, l576, l158.fvalue(pv, 3, l6, ({car: l404, cdr: l44.fvalue(pv, 2, v2250, l104.fvalue(pv, 2, l405, l15.fvalue(pv, 0)))}), v2249), v2251);
}),l5,l5),QIList(l350,l76,l388,(function (values,nargs,v2253){
    checkArgsAtLeast(nargs, 1);
    var v2252= l5.value;
    for (var i = nargs-1; i>=1; i--)
        v2252 = {car: arguments[i+2], cdr: v2252};
    return (function(v2254,v2255){
        return l104.fvalue(values, 3, l519, l104.fvalue(pv, 1, l104.fvalue(pv, 2, v2254, l144.fvalue(pv, 1, v2253))), l158.fvalue(pv, 4, l33, l104.fvalue(pv, 2, l104.fvalue(pv, 2, l718, v2254), l104.fvalue(pv, 3, l519, l104.fvalue(pv, 1, ({car: v2255, cdr: l854})), l104.fvalue(pv, 3, l32, l104.fvalue(pv, 2, v2255, l104.fvalue(pv, 2, l52, v2254)), l158.fvalue(pv, 3, l519, l104.fvalue(pv, 1, l104.fvalue(pv, 2, l143.fvalue(pv, 1, v2253), l104.fvalue(pv, 3, l208, v2254, v2255))), v2252)))), l104.fvalue(pv, 2, l104.fvalue(pv, 2, l54, v2254), l158.fvalue(pv, 3, l31, l104.fvalue(pv, 2, l143.fvalue(pv, 1, v2253), v2254), v2252)), l855));
    })(l15.fvalue(pv, 0),l15.fvalue(pv, 0));
}),l5,l5),QIList(l350,l57,l388,(function (values,nargs){
    var v2256= l5.value;
    for (var i = nargs-1; i>=0; i--)
        v2256 = {car: arguments[i+2], cdr: v2256};
    return l158.fvalue(values, 3, l13, l4, v2256);
}),l5,l5),QIList(l350,l56,l388,(function (values,nargs){
    var v2257= l5.value;
    for (var i = nargs-1; i>=0; i--)
        v2257 = {car: arguments[i+2], cdr: v2257};
    return (function(v2258,v2259){
        return l104.fvalue(values, 4, l522, l104.fvalue(pv, 2, ({car: v2258, cdr: l856}), l104.fvalue(pv, 2, v2259, v2258)), l158.fvalue(pv, 3, l502, l104.fvalue(pv, 1, l158.fvalue(pv, 5, l857, l829, l158.fvalue(pv, 3, l202, v2259, l858), l104.fvalue(pv, 3, l105, v2259, l104.fvalue(pv, 2, l142, v2259)), l829)), v2257), l104.fvalue(pv, 2, l142, v2258));
    })(l15.fvalue(pv, 0),l15.fvalue(pv, 0));
}),l5,l5),QIList(l350,l50,l388,(function (values,nargs,v2261,v2262){
    checkArgsAtLeast(nargs, 2);
    var v2260= l5.value;
    for (var i = nargs-1; i>=2; i--)
        v2260 = {car: arguments[i+2], cdr: v2260};
    return l104.fvalue(values, 3, l373, l5, l104.fvalue(pv, 3, l522, l130.fvalue(pv, 2, (function (values,nargs,v2263){
        checkArgs(nargs, 1);
        return l104.fvalue(values, 2, l143.fvalue(pv, 1, v2263), l144.fvalue(pv, 1, v2263));
    }), v2261), l104.fvalue(pv, 5, l13, l4, l104.fvalue(pv, 3, l7, (function(){
        var tmp = v2262;
        return tmp === l5.value? l5.value: tmp.car;
    })(), l104.fvalue(pv, 2, l12, ({car: l200, cdr: (function(){
        var tmp = v2262;
        return tmp === l5.value? l5.value: tmp.cdr;
    })()}))), ({car: l550, cdr: v2260}), ({car: l105, cdr: (function(){
        var f = (function(){
            var symbol = l44;
            var func = symbol.fvalue;
            if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
            return func;
        })();
        var args = [pv, 0];
        var tail = (l130.fvalue(pv, 2, (function (values,nargs,v2264){
            checkArgs(nargs, 1);
            return (((function(){
                var tmp = l159.fvalue(pv, 1, v2264);
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?l4.value: l5.value) !== l5.value ? l104.fvalue(values, 2, l143.fvalue(pv, 1, v2264), l146.fvalue(pv, 1, v2264)) : l5.value);
        }), v2261));
        while (tail != l5.value){
            args.push(tail.car);
            args[1] += 1;
            tail = tail.cdr;
        }
        return (typeof f === 'function'? f : f.fvalue).apply(this, args);
    })()}))));
}),l5,l5),QIList(l350,l49,l388,(function (values,nargs,v2266,v2267){
    checkArgsAtLeast(nargs, 2);
    var v2265= l5.value;
    for (var i = nargs-1; i>=2; i--)
        v2265 = {car: arguments[i+2], cdr: v2265};
    return l104.fvalue(values, 3, l373, l5, l104.fvalue(pv, 3, l519, l130.fvalue(pv, 2, (function (values,nargs,v2268){
        checkArgs(nargs, 1);
        return l104.fvalue(values, 2, l143.fvalue(pv, 1, v2268), l144.fvalue(pv, 1, v2268));
    }), v2266), l104.fvalue(pv, 5, l13, l4, l104.fvalue(pv, 3, l7, (function(){
        var tmp = v2267;
        return tmp === l5.value? l5.value: tmp.car;
    })(), l104.fvalue(pv, 2, l12, ({car: l200, cdr: (function(){
        var tmp = v2267;
        return tmp === l5.value? l5.value: tmp.cdr;
    })()}))), ({car: l550, cdr: v2265}), ({car: l48, cdr: (function(){
        var f = (function(){
            var symbol = l44;
            var func = symbol.fvalue;
            if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
            return func;
        })();
        var args = [pv, 0];
        var tail = (l130.fvalue(pv, 2, (function (values,nargs,v2269){
            checkArgs(nargs, 1);
            return (((function(){
                var tmp = l159.fvalue(pv, 1, v2269);
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?l4.value: l5.value) !== l5.value ? l104.fvalue(values, 2, l143.fvalue(pv, 1, v2269), l146.fvalue(pv, 1, v2269)) : l5.value);
        }), v2266));
        while (tail != l5.value){
            args.push(tail.car);
            args[1] += 1;
            tail = tail.cdr;
        }
        return (typeof f === 'function'? f : f.fvalue).apply(this, args);
    })()}))));
}),l5,l5),QIList(l350,l48,l388,(function (values,nargs){
    var v2270= l5.value;
    for (var i = nargs-1; i>=0; i--)
        v2270 = {car: arguments[i+2], cdr: v2270};
    return (function(v2271){
        (function(){
            try {
            var v2272 = [];
                return (function(){
                    while(l4.value !== l5.value){
                        (function(v2273){
                            return (v2273 !== l5.value ? (function(){
                                throw ({type: 'block', id: v2272, values: l5.value, message: 'Return from unknown block NIL.'})
                            })() : (function(v2274){
                                return (v2274 !== l5.value ? l81.fvalue(pv, 1, l859) : (function(v2275,v2276){
                                    (function(){
                                        var v2277 = l104.fvalue(pv, 3, v2275, l15.fvalue(pv, 0), v2276);
                                        var v2278 = ({car: v2277, cdr: v2271});
                                        return (v2271 = v2278);
                                    })();
                                    return (v2270 = l159.fvalue(pv, 1, v2270));
                                })((function(){
                                    var tmp = v2270;
                                    return tmp === l5.value? l5.value: tmp.car;
                                })(),l145.fvalue(pv, 1, v2270)));
                            })(l42.fvalue(pv, 1, (function(){
                                var tmp = v2270;
                                return tmp === l5.value? l5.value: tmp.cdr;
                            })())));
                        })(l42.fvalue(pv, 1, v2270));
                    }return l5.value;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == v2272)
                    return cf.values;
                else
                    throw cf;
            }
        })();
        (v2271 = l47.fvalue(pv, 1, v2271));
        return l104.fvalue(values, 3, l519, l130.fvalue(pv, 2, (function(){
            var symbol = l142;
            var func = symbol.fvalue;
            if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
            return func;
        })(), v2271), ({car: l105, cdr: l45.fvalue(pv, 3, (function(){
            var symbol = l44;
            var func = symbol.fvalue;
            if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
            return func;
        })(), l130.fvalue(pv, 2, (function(){
            var symbol = l194;
            var func = symbol.fvalue;
            if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
            return func;
        })(), v2271), l5.value)}));
    })(l5);
}),l5,l5),QIList(l350,l39,l388,(function (values,nargs,v2280,v2281){
    checkArgsAtLeast(nargs, 2);
    var v2279= l5.value;
    for (var i = nargs-1; i>=2; i--)
        v2279 = {car: arguments[i+2], cdr: v2279};
    return l158.fvalue(values, 3, l38, l104.fvalue(pv, 3, l200, v2280, v2281), v2279);
}),l5,l5),QIList(l350,l38,l388,(function (values,nargs,v2283){
    checkArgsAtLeast(nargs, 1);
    var v2282= l5.value;
    for (var i = nargs-1; i>=1; i--)
        v2282 = {car: arguments[i+2], cdr: v2282};
    return (function(v2284){
        return l158.fvalue(values, 3, l519, l104.fvalue(pv, 1, l104.fvalue(pv, 2, v2284, v2283)), l44.fvalue(pv, 2, v2282, l104.fvalue(pv, 1, v2284)));
    })(l15.fvalue(pv, 0));
}),l5,l5),QIList(l350,l37,l388,(function (values,nargs){
    var v2285= l5.value;
    for (var i = nargs-1; i>=0; i--)
        v2285 = {car: arguments[i+2], cdr: v2285};
    return (function(v2286){
        return (v2286 !== l5.value ? l5.value : (function(v2287){
            return (v2287 !== l5.value ? (function(){
                var tmp = v2285;
                return tmp === l5.value? l5.value: tmp.car;
            })() : (function(v2288){
                return l104.fvalue(values, 3, l519, l104.fvalue(pv, 1, l104.fvalue(pv, 2, v2288, (function(){
                    var tmp = v2285;
                    return tmp === l5.value? l5.value: tmp.car;
                })())), l104.fvalue(pv, 4, l399, v2288, v2288, ({car: l37, cdr: (function(){
                    var tmp = v2285;
                    return tmp === l5.value? l5.value: tmp.cdr;
                })()})));
            })(l15.fvalue(pv, 0)));
        })(l42.fvalue(pv, 1, (function(){
            var tmp = v2285;
            return tmp === l5.value? l5.value: tmp.cdr;
        })())));
    })(l42.fvalue(pv, 1, v2285));
}),l5,l5),QIList(l350,l36,l388,(function (values,nargs){
    var v2289= l5.value;
    for (var i = nargs-1; i>=0; i--)
        v2289 = {car: arguments[i+2], cdr: v2289};
    return (function(v2290){
        return (v2290 !== l5.value ? l4.value : (function(v2291){
            return (v2291 !== l5.value ? (function(){
                var tmp = v2289;
                return tmp === l5.value? l5.value: tmp.car;
            })() : l158.fvalue(values, 4, l399, (function(){
                var tmp = v2289;
                return tmp === l5.value? l5.value: tmp.car;
            })(), ({car: l36, cdr: (function(){
                var tmp = v2289;
                return tmp === l5.value? l5.value: tmp.cdr;
            })()}), l551));
        })(l42.fvalue(pv, 1, (function(){
            var tmp = v2289;
            return tmp === l5.value? l5.value: tmp.cdr;
        })())));
    })(l42.fvalue(pv, 1, v2289));
}),l5,l5),QIList(l350,l35,l388,(function (values,nargs,v2293){
    checkArgsAtLeast(nargs, 1);
    var v2292= l5.value;
    for (var i = nargs-1; i>=1; i--)
        v2292 = {car: arguments[i+2], cdr: v2292};
    return (function(v2294){
        return l104.fvalue(values, 3, l519, l104.fvalue(pv, 1, l104.fvalue(pv, 2, v2294, v2293)), l158.fvalue(pv, 3, l34, v2294, l44.fvalue(pv, 2, v2292, l104.fvalue(pv, 1, l104.fvalue(pv, 2, l4, l104.fvalue(pv, 3, l81, l99, v2294))))));
    })(l15.fvalue(pv, 0));
}),l5,l5),QIList(l350,l34,l388,(function (values,nargs,v2296){
    checkArgsAtLeast(nargs, 1);
    var v2295= l5.value;
    for (var i = nargs-1; i>=1; i--)
        v2295 = {car: arguments[i+2], cdr: v2295};
    return (function(v2297){
        return l104.fvalue(values, 3, l519, l104.fvalue(pv, 1, l104.fvalue(pv, 2, v2297, v2296)), ({car: l33, cdr: l130.fvalue(pv, 2, (function (values,nargs,v2298){
            checkArgs(nargs, 1);
            return ((function(v2299){
                return (v2299 !== l5.value ? v2299 : (((function(){
                    var tmp = v2298;
                    return tmp === l5.value? l5.value: tmp.car;
                })() === l814)?l4.value: l5.value));
            })((((function(){
                var tmp = v2298;
                return tmp === l5.value? l5.value: tmp.car;
            })() === l4.value)?l4.value: l5.value)) !== l5.value ? ({car: l4, cdr: (function(){
                var tmp = v2298;
                return tmp === l5.value? l5.value: tmp.cdr;
            })()}) : ({car: l104.fvalue(pv, 3, l26, v2297, l104.fvalue(pv, 2, l328, (function(){
                var tmp = v2298;
                return tmp === l5.value? l5.value: tmp.car;
            })())), cdr: (function(){
                var tmp = v2298;
                return tmp === l5.value? l5.value: tmp.cdr;
            })()}));
        }), v2295)}));
    })(l15.fvalue(pv, 0));
}),l5,l5),QIList(l350,l33,l388,(function (values,nargs){
    var v2300= l5.value;
    for (var i = nargs-1; i>=0; i--)
        v2300 = {car: arguments[i+2], cdr: v2300};
    return (l42.fvalue(pv, 1, v2300) !== l5.value ? l5.value : (((l162.fvalue(pv, 1, v2300) === l4.value)?l4.value: l5.value) !== l5.value ? ({car: l200, cdr: l163.fvalue(pv, 1, v2300)}) : (function(v2301){
        return l104.fvalue(values, 3, l519, l104.fvalue(pv, 1, l104.fvalue(pv, 2, v2301, l162.fvalue(pv, 1, v2300))), l104.fvalue(pv, 4, l399, v2301, (l42.fvalue(pv, 1, l163.fvalue(pv, 1, v2300)) !== l5.value ? v2301 : ({car: l200, cdr: l163.fvalue(pv, 1, v2300)})), ({car: l33, cdr: (function(){
            var tmp = v2300;
            return tmp === l5.value? l5.value: tmp.cdr;
        })()})));
    })(l15.fvalue(pv, 0))));
}),l5,l5),QIList(l350,l32,l388,(function (values,nargs,v2303){
    checkArgsAtLeast(nargs, 1);
    var v2302= l5.value;
    for (var i = nargs-1; i>=1; i--)
        v2302 = {car: arguments[i+2], cdr: v2302};
    return (function(v2304,v2305,v2306,v2307){
        return l104.fvalue(values, 3, l373, l5, l104.fvalue(pv, 4, l519, l104.fvalue(pv, 2, ({car: v2305, cdr: l854}), l104.fvalue(pv, 2, v2304, v2306)), l104.fvalue(pv, 4, l494, l104.fvalue(pv, 3, l651, v2305, v2304), ({car: l550, cdr: v2302}), l104.fvalue(pv, 2, l28, v2305)), v2307));
    })(l15.fvalue(pv, 0),l143.fvalue(pv, 1, v2303),l144.fvalue(pv, 1, v2303),l146.fvalue(pv, 1, v2303));
}),l5,l5),QIList(l350,l31,l388,(function (values,nargs,v2309){
    checkArgsAtLeast(nargs, 1);
    var v2308= l5.value;
    for (var i = nargs-1; i>=1; i--)
        v2308 = {car: arguments[i+2], cdr: v2308};
    return (function(v2310,v2311){
        return l104.fvalue(values, 3, l373, l5, l104.fvalue(pv, 4, l519, l104.fvalue(pv, 2, l104.fvalue(pv, 2, v2311, l144.fvalue(pv, 1, v2309)), ({car: v2310, cdr: l551})), l104.fvalue(pv, 5, l494, v2311, l104.fvalue(pv, 3, l105, v2310, l104.fvalue(pv, 2, l141, v2311)), ({car: l550, cdr: v2308}), l104.fvalue(pv, 3, l105, v2311, l104.fvalue(pv, 2, l142, v2311))), l146.fvalue(pv, 1, v2309)));
    })(l143.fvalue(pv, 1, v2309),l15.fvalue(pv, 0));
}),l5,l5),QIList(l350,l30,l388,(function (values,nargs,v2312,v2313){
    checkArgs(nargs, 2);
    return (function(){
        var func = (function (values,nargs,v2315,v2316,v2317,v2318,v2319){
            switch(nargs){
            case 0:
                v2315=l5.value;
            case 1:
                v2316=l5.value;
            case 2:
                v2317=l5.value;
            case 3:
                v2318=l5.value;
            case 4:
                v2319=l5.value;
            default: break;
            }
            var v2314= l5.value;
            for (var i = nargs-1; i>=5; i--)
                v2314 = {car: arguments[i+2], cdr: v2314};
            return (function(v2320){
                return l104.fvalue(values, 3, l522, ({car: l104.fvalue(pv, 2, v2320, v2312), cdr: l44.fvalue(pv, 2, l130.fvalue(pv, 3, (function(){
                    var symbol = l104;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })(), v2315, v2316), ({car: l104.fvalue(pv, 2, (function(){
                    var tmp = v2317;
                    return tmp === l5.value? l5.value: tmp.car;
                })(), l104.fvalue(pv, 3, l137, v2320, v2319)), cdr: (function(){
                    var tmp = v2317;
                    return tmp === l5.value? l5.value: tmp.cdr;
                })()}))}), v2318);
            })(l15.fvalue(pv, 0));
        });
        var args = [values, 0];
        return (function(){
            var values = mv;
            var vs;
            vs = l103.fvalue(values, 1, v2313);
            if (typeof vs === 'object' && 'multiple-value' in vs)
                args = args.concat(vs);
            else
                args.push(vs);
            args[1] = args.length-2;
            return func.apply(window, args);
        })();
    })();
}),l5,l5),QIList(l350,l29,l388,(function (values,nargs,v2321,v2322){
    checkArgsAtLeast(nargs, 1);
    checkArgsAtMost(nargs, 2);
    switch(nargs){
    case 1:
        v2322=1;
    default: break;
    }
    return (function(){
        var func = (function (values,nargs,v2324,v2325,v2326,v2327,v2328){
            switch(nargs){
            case 0:
                v2324=l5.value;
            case 1:
                v2325=l5.value;
            case 2:
                v2326=l5.value;
            case 3:
                v2327=l5.value;
            case 4:
                v2328=l5.value;
            default: break;
            }
            var v2323= l5.value;
            for (var i = nargs-1; i>=5; i--)
                v2323 = {car: arguments[i+2], cdr: v2323};
            return (function(v2329){
                return l104.fvalue(values, 3, l522, l44.fvalue(pv, 2, l130.fvalue(pv, 3, (function(){
                    var symbol = l104;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })(), v2324, v2325), l158.fvalue(pv, 3, l104.fvalue(pv, 2, v2329, v2322), l104.fvalue(pv, 2, (function(){
                    var tmp = v2326;
                    return tmp === l5.value? l5.value: tmp.car;
                })(), l104.fvalue(pv, 3, l41, v2328, v2329)), (function(){
                    var tmp = v2326;
                    return tmp === l5.value? l5.value: tmp.cdr;
                })())), v2327);
            })(l15.fvalue(pv, 0));
        });
        var args = [values, 0];
        return (function(){
            var values = mv;
            var vs;
            vs = l103.fvalue(values, 1, v2321);
            if (typeof vs === 'object' && 'multiple-value' in vs)
                args = args.concat(vs);
            else
                args.push(vs);
            args[1] = args.length-2;
            return func.apply(window, args);
        })();
    })();
}),l5,l5),QIList(l350,l28,l388,(function (values,nargs,v2330,v2331){
    checkArgsAtLeast(nargs, 1);
    checkArgsAtMost(nargs, 2);
    switch(nargs){
    case 1:
        v2331=1;
    default: break;
    }
    return (function(){
        var func = (function (values,nargs,v2333,v2334,v2335,v2336,v2337){
            switch(nargs){
            case 0:
                v2333=l5.value;
            case 1:
                v2334=l5.value;
            case 2:
                v2335=l5.value;
            case 3:
                v2336=l5.value;
            case 4:
                v2337=l5.value;
            default: break;
            }
            var v2332= l5.value;
            for (var i = nargs-1; i>=5; i--)
                v2332 = {car: arguments[i+2], cdr: v2332};
            return (function(v2338){
                return l104.fvalue(values, 3, l522, l44.fvalue(pv, 2, l130.fvalue(pv, 3, (function(){
                    var symbol = l104;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
                    return func;
                })(), v2333, v2334), l158.fvalue(pv, 3, l104.fvalue(pv, 2, v2338, v2331), l104.fvalue(pv, 2, (function(){
                    var tmp = v2335;
                    return tmp === l5.value? l5.value: tmp.car;
                })(), l104.fvalue(pv, 3, l40, v2337, v2338)), (function(){
                    var tmp = v2335;
                    return tmp === l5.value? l5.value: tmp.cdr;
                })())), v2336);
            })(l15.fvalue(pv, 0));
        });
        var args = [values, 0];
        return (function(){
            var values = mv;
            var vs;
            vs = l103.fvalue(values, 1, v2330);
            if (typeof vs === 'object' && 'multiple-value' in vs)
                args = args.concat(vs);
            else
                args.push(vs);
            args[1] = args.length-2;
            return func.apply(window, args);
        })();
    })();
}),l5,l5),QIList(l350,l13,l388,(function (values,nargs,v2340){
    checkArgsAtLeast(nargs, 1);
    var v2339= l5.value;
    for (var i = nargs-1; i>=1; i--)
        v2339 = {car: arguments[i+2], cdr: v2339};
    return l104.fvalue(values, 3, l373, l5, l158.fvalue(pv, 3, l494, v2340, v2339));
}),l5,l5),QIList(l350,l12,l388,(function (values,nargs,v2341){
    checkArgsAtMost(nargs, 1);
    switch(nargs){
    case 0:
        v2341=l5.value;
    default: break;
    }
    return l104.fvalue(values, 3, l532, l5, v2341);
}),l5,l5),QIList(l350,l11,l388,(function (values,nargs,v2343,v2344){
    checkArgsAtLeast(nargs, 2);
    var v2342= l5.value;
    for (var i = nargs-1; i>=2; i--)
        v2342 = {car: arguments[i+2], cdr: v2342};
    return l104.fvalue(values, 3, l200, l104.fvalue(pv, 3, l684, l104.fvalue(pv, 2, l328, v2343), l104.fvalue(pv, 2, l94, l158.fvalue(pv, 4, l497, v2343, v2344, v2342))), l104.fvalue(pv, 2, l328, v2343));
}),l5,l5),QIList(l350,l10,l388,(function (values,nargs,v2345,v2346,v2347){
    checkArgsAtLeast(nargs, 2);
    checkArgsAtMost(nargs, 3);
    switch(nargs){
    case 2:
        v2347=l5.value;
    default: break;
    }
    return l158.fvalue(values, 3, l200, l104.fvalue(pv, 3, l105, v2345, v2346), l44.fvalue(pv, 2, (((function(){
        var x = v2347;
        return typeof(x) == 'object' && 'length' in x && x.type == 'character';
    })()?l4.value: l5.value) !== l5.value ? l104.fvalue(pv, 1, l104.fvalue(pv, 4, l761, l104.fvalue(pv, 2, l328, v2345), l98, v2347)) : l5.value), l104.fvalue(pv, 1, l104.fvalue(pv, 2, l328, v2345))));
}),l5,l5),QIList(l350,l9,l388,(function (values,nargs,v2348,v2349,v2350){
    checkArgsAtLeast(nargs, 2);
    checkArgsAtMost(nargs, 3);
    switch(nargs){
    case 2:
        v2350=l5.value;
    default: break;
    }
    return l158.fvalue(values, 4, l200, l104.fvalue(pv, 2, l2, l104.fvalue(pv, 2, l392, v2348)), l104.fvalue(pv, 3, l8, l104.fvalue(pv, 2, l18, l104.fvalue(pv, 2, l328, v2348)), l104.fvalue(pv, 3, l105, v2348, v2349)), l44.fvalue(pv, 2, (((function(){
        var x = v2350;
        return typeof(x) == 'object' && 'length' in x && x.type == 'character';
    })()?l4.value: l5.value) !== l5.value ? l104.fvalue(pv, 1, l104.fvalue(pv, 4, l761, l104.fvalue(pv, 2, l328, v2348), l98, v2350)) : l5.value), l104.fvalue(pv, 1, l104.fvalue(pv, 2, l328, v2348))));
}),l5,l5),QIList(l350,l8,l388,(function (values,nargs,v2352){
    checkArgsAtLeast(nargs, 1);
    var v2351= l5.value;
    for (var i = nargs-1; i>=1; i--)
        v2351 = {car: arguments[i+2], cdr: v2351};
    return l104.fvalue(values, 4, l399, v2352, l5, ({car: l200, cdr: v2351}));
}),l5,l5),QIList(l350,l7,l388,(function (values,nargs,v2354){
    checkArgsAtLeast(nargs, 1);
    var v2353= l5.value;
    for (var i = nargs-1; i>=1; i--)
        v2353 = {car: arguments[i+2], cdr: v2353};
    return l158.fvalue(values, 4, l399, v2354, ({car: l200, cdr: v2353}), l551);
}),l5,l5),QIList(l350,l6,l388,(function (values,nargs,v2356){
    checkArgsAtLeast(nargs, 1);
    var v2355= l5.value;
    for (var i = nargs-1; i>=1; i--)
        v2355 = {car: arguments[i+2], cdr: v2355};
    return l104.fvalue(values, 2, l94, l158.fvalue(pv, 3, l6, v2356, v2355));
}),l5,l5),QIList(l350,l3,l388,(function (values,nargs,v2357,v2358,v2359){
    checkArgsAtLeast(nargs, 2);
    checkArgsAtMost(nargs, 3);
    switch(nargs){
    case 2:
        v2359=l5.value;
    default: break;
    }
    return l158.fvalue(values, 5, l200, l104.fvalue(pv, 2, l2, l104.fvalue(pv, 2, l392, v2357)), l104.fvalue(pv, 2, l2, l104.fvalue(pv, 2, l394, v2357)), l104.fvalue(pv, 3, l105, v2357, v2358), l44.fvalue(pv, 2, (((function(){
        var x = v2359;
        return typeof(x) == 'object' && 'length' in x && x.type == 'character';
    })()?l4.value: l5.value) !== l5.value ? l104.fvalue(pv, 1, l104.fvalue(pv, 4, l761, l104.fvalue(pv, 2, l328, v2357), l98, v2359)) : l5.value), l104.fvalue(pv, 1, l104.fvalue(pv, 2, l328, v2357))));
}),l5,l5),QIList(l350,l2,l388,(function (values,nargs){
    var v2360= l5.value;
    for (var i = nargs-1; i>=0; i--)
        v2360 = {car: arguments[i+2], cdr: v2360};
    return ({car: l507, cdr: l130.fvalue(pv, 2, (function (values,nargs,v2361){
        checkArgs(nargs, 1);
        return l104.fvalue(values, 2, l391, l104.fvalue(pv, 2, l328, v2361));
    }), v2360)});
}),l5,l5),QIList(l350,l1,l388,(function (values,nargs,v2363,v2364){
    checkArgsAtLeast(nargs, 2);
    var v2362= l5.value;
    for (var i = nargs-1; i>=2; i--)
        v2362 = {car: arguments[i+2], cdr: v2362};
    return l104.fvalue(values, 2, l507, l104.fvalue(pv, 3, l387, l104.fvalue(pv, 2, l328, v2363), l104.fvalue(pv, 2, l328, l104.fvalue(pv, 2, l94, l158.fvalue(pv, 3, l6, l130.fvalue(pv, 2, (function (values,nargs,v2365){
        checkArgs(nargs, 1);
        return (((v2365 === l813)?l4.value: l5.value) !== l5.value ? l405 : v2365);
    }), v2364), v2362)))));
}),l5,l5),l5),l5,l5,l5);
((l377).value = l860);
l277.fvalue(values, 1, js_to_lisp(l857));
l277.fvalue(values, 1, js_to_lisp(l849));
l277.fvalue(values, 1, js_to_lisp(l848));
l277.fvalue(values, 1, js_to_lisp(l847));
l277.fvalue(values, 1, js_to_lisp(l846));
l277.fvalue(values, 1, js_to_lisp(l835));
l277.fvalue(values, 1, js_to_lisp(l834));
l277.fvalue(values, 1, js_to_lisp(l818));
l277.fvalue(values, 1, js_to_lisp(l817));
l277.fvalue(values, 1, js_to_lisp(l814));
l277.fvalue(values, 1, js_to_lisp(l813));
l277.fvalue(values, 1, js_to_lisp(l812));
l277.fvalue(values, 1, js_to_lisp(l811));
l277.fvalue(values, 1, js_to_lisp(l810));
l277.fvalue(values, 1, js_to_lisp(l809));
l277.fvalue(values, 1, js_to_lisp(l808));
l277.fvalue(values, 1, js_to_lisp(l807));
l277.fvalue(values, 1, js_to_lisp(l806));
l277.fvalue(values, 1, js_to_lisp(l804));
l277.fvalue(values, 1, js_to_lisp(l803));
l277.fvalue(values, 1, js_to_lisp(l802));
l277.fvalue(values, 1, js_to_lisp(l801));
l277.fvalue(values, 1, js_to_lisp(l796));
l277.fvalue(values, 1, js_to_lisp(l795));
l277.fvalue(values, 1, js_to_lisp(l792));
l277.fvalue(values, 1, js_to_lisp(l786));
l277.fvalue(values, 1, js_to_lisp(l778));
l277.fvalue(values, 1, js_to_lisp(l776));
l277.fvalue(values, 1, js_to_lisp(l771));
l277.fvalue(values, 1, js_to_lisp(l769));
l277.fvalue(values, 1, js_to_lisp(l766));
l277.fvalue(values, 1, js_to_lisp(l763));
l277.fvalue(values, 1, js_to_lisp(l761));
l277.fvalue(values, 1, js_to_lisp(l756));
l277.fvalue(values, 1, js_to_lisp(l754));
l277.fvalue(values, 1, js_to_lisp(l752));
l277.fvalue(values, 1, js_to_lisp(l750));
l277.fvalue(values, 1, js_to_lisp(l745));
l277.fvalue(values, 1, js_to_lisp(l737));
l277.fvalue(values, 1, js_to_lisp(l734));
l277.fvalue(values, 1, js_to_lisp(l725));
l277.fvalue(values, 1, js_to_lisp(l723));
l277.fvalue(values, 1, js_to_lisp(l720));
l277.fvalue(values, 1, js_to_lisp(l718));
l277.fvalue(values, 1, js_to_lisp(l716));
l277.fvalue(values, 1, js_to_lisp(l714));
l277.fvalue(values, 1, js_to_lisp(l709));
l277.fvalue(values, 1, js_to_lisp(l705));
l277.fvalue(values, 1, js_to_lisp(l700));
l277.fvalue(values, 1, js_to_lisp(l697));
l277.fvalue(values, 1, js_to_lisp(l694));
l277.fvalue(values, 1, js_to_lisp(l687));
l277.fvalue(values, 1, js_to_lisp(l684));
l277.fvalue(values, 1, js_to_lisp(l681));
l277.fvalue(values, 1, js_to_lisp(l680));
l277.fvalue(values, 1, js_to_lisp(l678));
l277.fvalue(values, 1, js_to_lisp(l663));
l277.fvalue(values, 1, js_to_lisp(l661));
l277.fvalue(values, 1, js_to_lisp(l658));
l277.fvalue(values, 1, js_to_lisp(l655));
l277.fvalue(values, 1, js_to_lisp(l653));
l277.fvalue(values, 1, js_to_lisp(l651));
l277.fvalue(values, 1, js_to_lisp(l650));
l277.fvalue(values, 1, js_to_lisp(l649));
l277.fvalue(values, 1, js_to_lisp(l647));
l277.fvalue(values, 1, js_to_lisp(l645));
l277.fvalue(values, 1, js_to_lisp(l632));
l277.fvalue(values, 1, js_to_lisp(l631));
l277.fvalue(values, 1, js_to_lisp(l626));
l277.fvalue(values, 1, js_to_lisp(l625));
l277.fvalue(values, 1, js_to_lisp(l624));
l277.fvalue(values, 1, js_to_lisp(l623));
l277.fvalue(values, 1, js_to_lisp(l622));
l277.fvalue(values, 1, js_to_lisp(l621));
l277.fvalue(values, 1, js_to_lisp(l620));
l277.fvalue(values, 1, js_to_lisp(l619));
l277.fvalue(values, 1, js_to_lisp(l618));
l277.fvalue(values, 1, js_to_lisp(l617));
l277.fvalue(values, 1, js_to_lisp(l616));
l277.fvalue(values, 1, js_to_lisp(l615));
l277.fvalue(values, 1, js_to_lisp(l614));
l277.fvalue(values, 1, js_to_lisp(l610));
l277.fvalue(values, 1, js_to_lisp(l609));
l277.fvalue(values, 1, js_to_lisp(l608));
l277.fvalue(values, 1, js_to_lisp(l607));
l277.fvalue(values, 1, js_to_lisp(l606));
l277.fvalue(values, 1, js_to_lisp(l605));
l277.fvalue(values, 1, js_to_lisp(l603));
l277.fvalue(values, 1, js_to_lisp(l601));
l277.fvalue(values, 1, js_to_lisp(l599));
l277.fvalue(values, 1, js_to_lisp(l597));
l277.fvalue(values, 1, js_to_lisp(l595));
l277.fvalue(values, 1, js_to_lisp(l593));
l277.fvalue(values, 1, js_to_lisp(l592));
l277.fvalue(values, 1, js_to_lisp(l591));
l277.fvalue(values, 1, js_to_lisp(l588));
l277.fvalue(values, 1, js_to_lisp(l576));
l277.fvalue(values, 1, js_to_lisp(l571));
l277.fvalue(values, 1, js_to_lisp(l565));
l277.fvalue(values, 1, js_to_lisp(l554));
l277.fvalue(values, 1, js_to_lisp(l553));
l277.fvalue(values, 1, js_to_lisp(l550));
l277.fvalue(values, 1, js_to_lisp(l549));
l277.fvalue(values, 1, js_to_lisp(l548));
l277.fvalue(values, 1, js_to_lisp(l545));
l277.fvalue(values, 1, js_to_lisp(l541));
l277.fvalue(values, 1, js_to_lisp(l532));
l277.fvalue(values, 1, js_to_lisp(l524));
l277.fvalue(values, 1, js_to_lisp(l523));
l277.fvalue(values, 1, js_to_lisp(l522));
l277.fvalue(values, 1, js_to_lisp(l521));
l277.fvalue(values, 1, js_to_lisp(l520));
l277.fvalue(values, 1, js_to_lisp(l519));
l277.fvalue(values, 1, js_to_lisp(l510));
l277.fvalue(values, 1, js_to_lisp(l509));
l277.fvalue(values, 1, js_to_lisp(l508));
l277.fvalue(values, 1, js_to_lisp(l507));
l277.fvalue(values, 1, js_to_lisp(l506));
l277.fvalue(values, 1, js_to_lisp(l505));
l277.fvalue(values, 1, js_to_lisp(l502));
l277.fvalue(values, 1, js_to_lisp(l501));
l277.fvalue(values, 1, js_to_lisp(l500));
l277.fvalue(values, 1, js_to_lisp(l499));
l277.fvalue(values, 1, js_to_lisp(l498));
l277.fvalue(values, 1, js_to_lisp(l497));
l277.fvalue(values, 1, js_to_lisp(l494));
l277.fvalue(values, 1, js_to_lisp(l489));
l277.fvalue(values, 1, js_to_lisp(l488));
l277.fvalue(values, 1, js_to_lisp(l486));
l277.fvalue(values, 1, js_to_lisp(l484));
l277.fvalue(values, 1, js_to_lisp(l482));
l277.fvalue(values, 1, js_to_lisp(l480));
l277.fvalue(values, 1, js_to_lisp(l478));
l277.fvalue(values, 1, js_to_lisp(l477));
l277.fvalue(values, 1, js_to_lisp(l476));
l277.fvalue(values, 1, js_to_lisp(l473));
l277.fvalue(values, 1, js_to_lisp(l472));
l277.fvalue(values, 1, js_to_lisp(l470));
l277.fvalue(values, 1, js_to_lisp(l465));
l277.fvalue(values, 1, js_to_lisp(l464));
l277.fvalue(values, 1, js_to_lisp(l463));
l277.fvalue(values, 1, js_to_lisp(l462));
l277.fvalue(values, 1, js_to_lisp(l461));
l277.fvalue(values, 1, js_to_lisp(l446));
l277.fvalue(values, 1, js_to_lisp(l439));
l277.fvalue(values, 1, js_to_lisp(l433));
l277.fvalue(values, 1, js_to_lisp(l428));
l277.fvalue(values, 1, js_to_lisp(l427));
l277.fvalue(values, 1, js_to_lisp(l418));
l277.fvalue(values, 1, js_to_lisp(l417));
l277.fvalue(values, 1, js_to_lisp(l416));
l277.fvalue(values, 1, js_to_lisp(l415));
l277.fvalue(values, 1, js_to_lisp(l413));
l277.fvalue(values, 1, js_to_lisp(l412));
l277.fvalue(values, 1, js_to_lisp(l411));
l277.fvalue(values, 1, js_to_lisp(l410));
l277.fvalue(values, 1, js_to_lisp(l409));
l277.fvalue(values, 1, js_to_lisp(l408));
l277.fvalue(values, 1, js_to_lisp(l406));
l277.fvalue(values, 1, js_to_lisp(l405));
l277.fvalue(values, 1, js_to_lisp(l404));
l277.fvalue(values, 1, js_to_lisp(l403));
l277.fvalue(values, 1, js_to_lisp(l399));
l277.fvalue(values, 1, js_to_lisp(l398));
l277.fvalue(values, 1, js_to_lisp(l397));
l277.fvalue(values, 1, js_to_lisp(l396));
l277.fvalue(values, 1, js_to_lisp(l395));
l277.fvalue(values, 1, js_to_lisp(l394));
l277.fvalue(values, 1, js_to_lisp(l393));
l277.fvalue(values, 1, js_to_lisp(l392));
l277.fvalue(values, 1, js_to_lisp(l391));
l277.fvalue(values, 1, js_to_lisp(l390));
l277.fvalue(values, 1, js_to_lisp(l389));
l277.fvalue(values, 1, js_to_lisp(l388));
l277.fvalue(values, 1, js_to_lisp(l387));
l277.fvalue(values, 1, js_to_lisp(l386));
l277.fvalue(values, 1, js_to_lisp(l385));
l277.fvalue(values, 1, js_to_lisp(l384));
l277.fvalue(values, 1, js_to_lisp(l383));
l277.fvalue(values, 1, js_to_lisp(l382));
l277.fvalue(values, 1, js_to_lisp(l381));
l277.fvalue(values, 1, js_to_lisp(l379));
l277.fvalue(values, 1, js_to_lisp(l378));
l277.fvalue(values, 1, js_to_lisp(l377));
l277.fvalue(values, 1, js_to_lisp(l376));
l277.fvalue(values, 1, js_to_lisp(l375));
l277.fvalue(values, 1, js_to_lisp(l374));
l277.fvalue(values, 1, js_to_lisp(l373));
l277.fvalue(values, 1, js_to_lisp(l372));
l277.fvalue(values, 1, js_to_lisp(l371));
l277.fvalue(values, 1, js_to_lisp(l370));
l277.fvalue(values, 1, js_to_lisp(l369));
l277.fvalue(values, 1, js_to_lisp(l367));
l277.fvalue(values, 1, js_to_lisp(l366));
l277.fvalue(values, 1, js_to_lisp(l365));
l277.fvalue(values, 1, js_to_lisp(l364));
l277.fvalue(values, 1, js_to_lisp(l363));
l277.fvalue(values, 1, js_to_lisp(l362));
l277.fvalue(values, 1, js_to_lisp(l361));
l277.fvalue(values, 1, js_to_lisp(l360));
l277.fvalue(values, 1, js_to_lisp(l359));
l277.fvalue(values, 1, js_to_lisp(l358));
l277.fvalue(values, 1, js_to_lisp(l357));
l277.fvalue(values, 1, js_to_lisp(l356));
l277.fvalue(values, 1, js_to_lisp(l353));
l277.fvalue(values, 1, js_to_lisp(l352));
l277.fvalue(values, 1, js_to_lisp(l351));
l277.fvalue(values, 1, js_to_lisp(l350));
l277.fvalue(values, 1, js_to_lisp(l349));
l277.fvalue(values, 1, js_to_lisp(l348));
l277.fvalue(values, 1, js_to_lisp(l347));
l277.fvalue(values, 1, js_to_lisp(l346));
l277.fvalue(values, 1, js_to_lisp(l345));
l277.fvalue(values, 1, js_to_lisp(l344));
l277.fvalue(values, 1, js_to_lisp(l343));
l277.fvalue(values, 1, js_to_lisp(l341));
l277.fvalue(values, 1, js_to_lisp(l340));
l277.fvalue(values, 1, js_to_lisp(l338));
l277.fvalue(values, 1, js_to_lisp(l336));
l277.fvalue(values, 1, js_to_lisp(l334));
l277.fvalue(values, 1, js_to_lisp(l333));
l277.fvalue(values, 1, js_to_lisp(l332));
l277.fvalue(values, 1, js_to_lisp(l331));
l277.fvalue(values, 1, js_to_lisp(l330));
l277.fvalue(values, 1, js_to_lisp(l329));
l277.fvalue(values, 1, js_to_lisp(l328));
l277.fvalue(values, 1, js_to_lisp(l325));
l277.fvalue(values, 1, js_to_lisp(l324));
l277.fvalue(values, 1, js_to_lisp(l323));
l277.fvalue(values, 1, js_to_lisp(l321));
l277.fvalue(values, 1, js_to_lisp(l320));
l277.fvalue(values, 1, js_to_lisp(l318));
l277.fvalue(values, 1, js_to_lisp(l317));
l277.fvalue(values, 1, js_to_lisp(l316));
l277.fvalue(values, 1, js_to_lisp(l315));
l277.fvalue(values, 1, js_to_lisp(l312));
l277.fvalue(values, 1, js_to_lisp(l311));
l277.fvalue(values, 1, js_to_lisp(l310));
l277.fvalue(values, 1, js_to_lisp(l308));
l277.fvalue(values, 1, js_to_lisp(l307));
l277.fvalue(values, 1, js_to_lisp(l304));
l277.fvalue(values, 1, js_to_lisp(l302));
l277.fvalue(values, 1, js_to_lisp(l299));
l277.fvalue(values, 1, js_to_lisp(l298));
l277.fvalue(values, 1, js_to_lisp(l297));
l277.fvalue(values, 1, js_to_lisp(l296));
l277.fvalue(values, 1, js_to_lisp(l295));
l277.fvalue(values, 1, js_to_lisp(l294));
l277.fvalue(values, 1, js_to_lisp(l293));
l277.fvalue(values, 1, js_to_lisp(l292));
l277.fvalue(values, 1, js_to_lisp(l291));
l277.fvalue(values, 1, js_to_lisp(l290));
l277.fvalue(values, 1, js_to_lisp(l289));
l277.fvalue(values, 1, js_to_lisp(l288));
l277.fvalue(values, 1, js_to_lisp(l287));
l277.fvalue(values, 1, js_to_lisp(l284));
l277.fvalue(values, 1, js_to_lisp(l283));
l277.fvalue(values, 1, js_to_lisp(l282));
l277.fvalue(values, 1, js_to_lisp(l281));
l277.fvalue(values, 1, js_to_lisp(l280));
l277.fvalue(values, 1, js_to_lisp(l277));
l277.fvalue(values, 1, js_to_lisp(l276));
l277.fvalue(values, 1, js_to_lisp(l275));
l277.fvalue(values, 1, js_to_lisp(l274));
l277.fvalue(values, 1, js_to_lisp(l273));
l277.fvalue(values, 1, js_to_lisp(l271));
l277.fvalue(values, 1, js_to_lisp(l269));
l277.fvalue(values, 1, js_to_lisp(l268));
l277.fvalue(values, 1, js_to_lisp(l267));
l277.fvalue(values, 1, js_to_lisp(l266));
l277.fvalue(values, 1, js_to_lisp(l260));
l277.fvalue(values, 1, js_to_lisp(l259));
l277.fvalue(values, 1, js_to_lisp(l258));
l277.fvalue(values, 1, js_to_lisp(l257));
l277.fvalue(values, 1, js_to_lisp(l256));
l277.fvalue(values, 1, js_to_lisp(l255));
l277.fvalue(values, 1, js_to_lisp(l253));
l277.fvalue(values, 1, js_to_lisp(l251));
l277.fvalue(values, 1, js_to_lisp(l250));
l277.fvalue(values, 1, js_to_lisp(l249));
l277.fvalue(values, 1, js_to_lisp(l246));
l277.fvalue(values, 1, js_to_lisp(l236));
l277.fvalue(values, 1, js_to_lisp(l231));
l277.fvalue(values, 1, js_to_lisp(l229));
l277.fvalue(values, 1, js_to_lisp(l228));
l277.fvalue(values, 1, js_to_lisp(l225));
l277.fvalue(values, 1, js_to_lisp(l224));
l277.fvalue(values, 1, js_to_lisp(l223));
l277.fvalue(values, 1, js_to_lisp(l221));
l277.fvalue(values, 1, js_to_lisp(l220));
l277.fvalue(values, 1, js_to_lisp(l217));
l277.fvalue(values, 1, js_to_lisp(l216));
l277.fvalue(values, 1, js_to_lisp(l212));
l277.fvalue(values, 1, js_to_lisp(l211));
l277.fvalue(values, 1, js_to_lisp(l210));
l277.fvalue(values, 1, js_to_lisp(l209));
l277.fvalue(values, 1, js_to_lisp(l208));
l277.fvalue(values, 1, js_to_lisp(l207));
l277.fvalue(values, 1, js_to_lisp(l206));
l277.fvalue(values, 1, js_to_lisp(l205));
l277.fvalue(values, 1, js_to_lisp(l203));
l277.fvalue(values, 1, js_to_lisp(l202));
l277.fvalue(values, 1, js_to_lisp(l201));
l277.fvalue(values, 1, js_to_lisp(l200));
l277.fvalue(values, 1, js_to_lisp(l199));
l277.fvalue(values, 1, js_to_lisp(l198));
l277.fvalue(values, 1, js_to_lisp(l197));
l277.fvalue(values, 1, js_to_lisp(l196));
l277.fvalue(values, 1, js_to_lisp(l195));
l277.fvalue(values, 1, js_to_lisp(l194));
l277.fvalue(values, 1, js_to_lisp(l193));
l277.fvalue(values, 1, js_to_lisp(l192));
l277.fvalue(values, 1, js_to_lisp(l191));
l277.fvalue(values, 1, js_to_lisp(l190));
l277.fvalue(values, 1, js_to_lisp(l189));
l277.fvalue(values, 1, js_to_lisp(l188));
l277.fvalue(values, 1, js_to_lisp(l187));
l277.fvalue(values, 1, js_to_lisp(l186));
l277.fvalue(values, 1, js_to_lisp(l185));
l277.fvalue(values, 1, js_to_lisp(l184));
l277.fvalue(values, 1, js_to_lisp(l183));
l277.fvalue(values, 1, js_to_lisp(l182));
l277.fvalue(values, 1, js_to_lisp(l181));
l277.fvalue(values, 1, js_to_lisp(l180));
l277.fvalue(values, 1, js_to_lisp(l179));
l277.fvalue(values, 1, js_to_lisp(l178));
l277.fvalue(values, 1, js_to_lisp(l177));
l277.fvalue(values, 1, js_to_lisp(l176));
l277.fvalue(values, 1, js_to_lisp(l175));
l277.fvalue(values, 1, js_to_lisp(l174));
l277.fvalue(values, 1, js_to_lisp(l173));
l277.fvalue(values, 1, js_to_lisp(l172));
l277.fvalue(values, 1, js_to_lisp(l171));
l277.fvalue(values, 1, js_to_lisp(l170));
l277.fvalue(values, 1, js_to_lisp(l169));
l277.fvalue(values, 1, js_to_lisp(l168));
l277.fvalue(values, 1, js_to_lisp(l167));
l277.fvalue(values, 1, js_to_lisp(l166));
l277.fvalue(values, 1, js_to_lisp(l165));
l277.fvalue(values, 1, js_to_lisp(l164));
l277.fvalue(values, 1, js_to_lisp(l163));
l277.fvalue(values, 1, js_to_lisp(l162));
l277.fvalue(values, 1, js_to_lisp(l161));
l277.fvalue(values, 1, js_to_lisp(l160));
l277.fvalue(values, 1, js_to_lisp(l159));
l277.fvalue(values, 1, js_to_lisp(l158));
l277.fvalue(values, 1, js_to_lisp(l157));
l277.fvalue(values, 1, js_to_lisp(l156));
l277.fvalue(values, 1, js_to_lisp(l155));
l277.fvalue(values, 1, js_to_lisp(l154));
l277.fvalue(values, 1, js_to_lisp(l153));
l277.fvalue(values, 1, js_to_lisp(l152));
l277.fvalue(values, 1, js_to_lisp(l151));
l277.fvalue(values, 1, js_to_lisp(l150));
l277.fvalue(values, 1, js_to_lisp(l149));
l277.fvalue(values, 1, js_to_lisp(l148));
l277.fvalue(values, 1, js_to_lisp(l147));
l277.fvalue(values, 1, js_to_lisp(l146));
l277.fvalue(values, 1, js_to_lisp(l145));
l277.fvalue(values, 1, js_to_lisp(l144));
l277.fvalue(values, 1, js_to_lisp(l143));
l277.fvalue(values, 1, js_to_lisp(l142));
l277.fvalue(values, 1, js_to_lisp(l141));
l277.fvalue(values, 1, js_to_lisp(l139));
l277.fvalue(values, 1, js_to_lisp(l138));
l277.fvalue(values, 1, js_to_lisp(l137));
l277.fvalue(values, 1, js_to_lisp(l136));
l277.fvalue(values, 1, js_to_lisp(l135));
l277.fvalue(values, 1, js_to_lisp(l132));
l277.fvalue(values, 1, js_to_lisp(l131));
l277.fvalue(values, 1, js_to_lisp(l130));
l277.fvalue(values, 1, js_to_lisp(l129));
l277.fvalue(values, 1, js_to_lisp(l128));
l277.fvalue(values, 1, js_to_lisp(l127));
l277.fvalue(values, 1, js_to_lisp(l126));
l277.fvalue(values, 1, js_to_lisp(l125));
l277.fvalue(values, 1, js_to_lisp(l123));
l277.fvalue(values, 1, js_to_lisp(l122));
l277.fvalue(values, 1, js_to_lisp(l121));
l277.fvalue(values, 1, js_to_lisp(l120));
l277.fvalue(values, 1, js_to_lisp(l119));
l277.fvalue(values, 1, js_to_lisp(l117));
l277.fvalue(values, 1, js_to_lisp(l116));
l277.fvalue(values, 1, js_to_lisp(l115));
l277.fvalue(values, 1, js_to_lisp(l114));
l277.fvalue(values, 1, js_to_lisp(l113));
l277.fvalue(values, 1, js_to_lisp(l112));
l277.fvalue(values, 1, js_to_lisp(l111));
l277.fvalue(values, 1, js_to_lisp(l110));
l277.fvalue(values, 1, js_to_lisp(l109));
l277.fvalue(values, 1, js_to_lisp(l107));
l277.fvalue(values, 1, js_to_lisp(l106));
l277.fvalue(values, 1, js_to_lisp(l105));
l277.fvalue(values, 1, js_to_lisp(l104));
l277.fvalue(values, 1, js_to_lisp(l103));
l277.fvalue(values, 1, js_to_lisp(l102));
l277.fvalue(values, 1, js_to_lisp(l101));
l277.fvalue(values, 1, js_to_lisp(l100));
l277.fvalue(values, 1, js_to_lisp(l96));
l277.fvalue(values, 1, js_to_lisp(l94));
l277.fvalue(values, 1, js_to_lisp(l93));
l277.fvalue(values, 1, js_to_lisp(l92));
l277.fvalue(values, 1, js_to_lisp(l91));
l277.fvalue(values, 1, js_to_lisp(l89));
l277.fvalue(values, 1, js_to_lisp(l88));
l277.fvalue(values, 1, js_to_lisp(l87));
l277.fvalue(values, 1, js_to_lisp(l86));
l277.fvalue(values, 1, js_to_lisp(l85));
l277.fvalue(values, 1, js_to_lisp(l84));
l277.fvalue(values, 1, js_to_lisp(l83));
l277.fvalue(values, 1, js_to_lisp(l82));
l277.fvalue(values, 1, js_to_lisp(l81));
l277.fvalue(values, 1, js_to_lisp(l79));
l277.fvalue(values, 1, js_to_lisp(l78));
l277.fvalue(values, 1, js_to_lisp(l77));
l277.fvalue(values, 1, js_to_lisp(l76));
l277.fvalue(values, 1, js_to_lisp(l75));
l277.fvalue(values, 1, js_to_lisp(l73));
l277.fvalue(values, 1, js_to_lisp(l72));
l277.fvalue(values, 1, js_to_lisp(l71));
l277.fvalue(values, 1, js_to_lisp(l70));
l277.fvalue(values, 1, js_to_lisp(l69));
l277.fvalue(values, 1, js_to_lisp(l68));
l277.fvalue(values, 1, js_to_lisp(l67));
l277.fvalue(values, 1, js_to_lisp(l66));
l277.fvalue(values, 1, js_to_lisp(l65));
l277.fvalue(values, 1, js_to_lisp(l64));
l277.fvalue(values, 1, js_to_lisp(l63));
l277.fvalue(values, 1, js_to_lisp(l62));
l277.fvalue(values, 1, js_to_lisp(l61));
l277.fvalue(values, 1, js_to_lisp(l60));
l277.fvalue(values, 1, js_to_lisp(l59));
l277.fvalue(values, 1, js_to_lisp(l58));
l277.fvalue(values, 1, js_to_lisp(l57));
l277.fvalue(values, 1, js_to_lisp(l56));
l277.fvalue(values, 1, js_to_lisp(l55));
l277.fvalue(values, 1, js_to_lisp(l54));
l277.fvalue(values, 1, js_to_lisp(l52));
l277.fvalue(values, 1, js_to_lisp(l51));
l277.fvalue(values, 1, js_to_lisp(l50));
l277.fvalue(values, 1, js_to_lisp(l49));
l277.fvalue(values, 1, js_to_lisp(l48));
l277.fvalue(values, 1, js_to_lisp(l47));
l277.fvalue(values, 1, js_to_lisp(l46));
l277.fvalue(values, 1, js_to_lisp(l45));
l277.fvalue(values, 1, js_to_lisp(l44));
l277.fvalue(values, 1, js_to_lisp(l43));
l277.fvalue(values, 1, js_to_lisp(l42));
l277.fvalue(values, 1, js_to_lisp(l41));
l277.fvalue(values, 1, js_to_lisp(l40));
l277.fvalue(values, 1, js_to_lisp(l39));
l277.fvalue(values, 1, js_to_lisp(l38));
l277.fvalue(values, 1, js_to_lisp(l37));
l277.fvalue(values, 1, js_to_lisp(l36));
l277.fvalue(values, 1, js_to_lisp(l35));
l277.fvalue(values, 1, js_to_lisp(l34));
l277.fvalue(values, 1, js_to_lisp(l33));
l277.fvalue(values, 1, js_to_lisp(l32));
l277.fvalue(values, 1, js_to_lisp(l31));
l277.fvalue(values, 1, js_to_lisp(l30));
l277.fvalue(values, 1, js_to_lisp(l29));
l277.fvalue(values, 1, js_to_lisp(l28));
l277.fvalue(values, 1, js_to_lisp(l27));
l277.fvalue(values, 1, js_to_lisp(l26));
l277.fvalue(values, 1, js_to_lisp(l25));
l277.fvalue(values, 1, js_to_lisp(l24));
l277.fvalue(values, 1, js_to_lisp(l23));
l277.fvalue(values, 1, js_to_lisp(l22));
l277.fvalue(values, 1, js_to_lisp(l21));
l277.fvalue(values, 1, js_to_lisp(l20));
l277.fvalue(values, 1, js_to_lisp(l19));
l277.fvalue(values, 1, js_to_lisp(l18));
l277.fvalue(values, 1, js_to_lisp(l17));
l277.fvalue(values, 1, js_to_lisp(l15));
l277.fvalue(values, 1, js_to_lisp(l14));
l277.fvalue(values, 1, js_to_lisp(l13));
l277.fvalue(values, 1, js_to_lisp(l12));
l277.fvalue(values, 1, js_to_lisp(l11));
l277.fvalue(values, 1, js_to_lisp(l10));
l277.fvalue(values, 1, js_to_lisp(l9));
l277.fvalue(values, 1, js_to_lisp(l8));
l277.fvalue(values, 1, js_to_lisp(l7));
l277.fvalue(values, 1, js_to_lisp(l6));
l277.fvalue(values, 1, js_to_lisp(l5));
l277.fvalue(values, 1, js_to_lisp(l4));
l277.fvalue(values, 1, js_to_lisp(l3));
l277.fvalue(values, 1, js_to_lisp(l2));
l277.fvalue(values, 1, js_to_lisp(l1));
var l861 = QIList(QIList(l860,make_lisp_string("l860")),QIList(l859,make_lisp_string("l859")),QIList(l858,make_lisp_string("l858")),QIList(l857,make_lisp_string("l857")),QIList(l856,make_lisp_string("l856")),QIList(l855,make_lisp_string("l855")),QIList(l854,make_lisp_string("l854")),QIList(l853,make_lisp_string("l853")),QIList(l852,make_lisp_string("l852")),QIList(l851,make_lisp_string("l851")),QIList(l850,make_lisp_string("l850")),QIList(l849,make_lisp_string("l849")),QIList(l848,make_lisp_string("l848")),QIList(l847,make_lisp_string("l847")),QIList(l846,make_lisp_string("l846")),QIList(l845,make_lisp_string("l845")),QIList(l844,make_lisp_string("l844")),QIList(l843,make_lisp_string("l843")),QIList(l842,make_lisp_string("l842")),QIList(l841,make_lisp_string("l841")),QIList(l840,make_lisp_string("l840")),QIList(l839,make_lisp_string("l839")),QIList(l838,make_lisp_string("l838")),QIList(l837,make_lisp_string("l837")),QIList(l836,make_lisp_string("l836")),QIList(l835,make_lisp_string("l835")),QIList(l834,make_lisp_string("l834")),QIList(l833,make_lisp_string("l833")),QIList(l832,make_lisp_string("l832")),QIList(l831,make_lisp_string("l831")),QIList(l830,make_lisp_string("l830")),QIList(l829,make_lisp_string("l829")),QIList(l828,make_lisp_string("l828")),QIList(l827,make_lisp_string("l827")),QIList(l826,make_lisp_string("l826")),QIList(l825,make_lisp_string("l825")),QIList(l824,make_lisp_string("l824")),QIList(l823,make_lisp_string("l823")),QIList(l822,make_lisp_string("l822")),QIList(l821,make_lisp_string("l821")),QIList(l820,make_lisp_string("l820")),QIList(l819,make_lisp_string("l819")),QIList(l818,make_lisp_string("l818")),QIList(l817,make_lisp_string("l817")),QIList(l816,make_lisp_string("l816")),QIList(l815,make_lisp_string("l815")),QIList(l814,make_lisp_string("l814")),QIList(l813,make_lisp_string("l813")),QIList(l812,make_lisp_string("l812")),QIList(l811,make_lisp_string("l811")),QIList(l810,make_lisp_string("l810")),QIList(l809,make_lisp_string("l809")),QIList(l808,make_lisp_string("l808")),QIList(l807,make_lisp_string("l807")),QIList(l806,make_lisp_string("l806")),QIList(l805,make_lisp_string("l805")),QIList(l804,make_lisp_string("l804")),QIList(l803,make_lisp_string("l803")),QIList(l802,make_lisp_string("l802")),QIList(l801,make_lisp_string("l801")),QIList(l800,make_lisp_string("l800")),QIList(l799,make_lisp_string("l799")),QIList(l798,make_lisp_string("l798")),QIList(l797,make_lisp_string("l797")),QIList(l796,make_lisp_string("l796")),QIList(l795,make_lisp_string("l795")),QIList(l794,make_lisp_string("l794")),QIList(l793,make_lisp_string("l793")),QIList(l792,make_lisp_string("l792")),QIList(l791,make_lisp_string("l791")),QIList(l790,make_lisp_string("l790")),QIList(l789,make_lisp_string("l789")),QIList(l788,make_lisp_string("l788")),QIList(l787,make_lisp_string("l787")),QIList(l786,make_lisp_string("l786")),QIList(l785,make_lisp_string("l785")),QIList(l784,make_lisp_string("l784")),QIList(l783,make_lisp_string("l783")),QIList(l782,make_lisp_string("l782")),QIList(l781,make_lisp_string("l781")),QIList(l780,make_lisp_string("l780")),QIList(l779,make_lisp_string("l779")),QIList(l778,make_lisp_string("l778")),QIList(l777,make_lisp_string("l777")),QIList(l776,make_lisp_string("l776")),QIList(l775,make_lisp_string("l775")),QIList(l774,make_lisp_string("l774")),QIList(l773,make_lisp_string("l773")),QIList(l772,make_lisp_string("l772")),QIList(l771,make_lisp_string("l771")),QIList(l770,make_lisp_string("l770")),QIList(l769,make_lisp_string("l769")),QIList(l768,make_lisp_string("l768")),QIList(l767,make_lisp_string("l767")),QIList(l766,make_lisp_string("l766")),QIList(l765,make_lisp_string("l765")),QIList(l764,make_lisp_string("l764")),QIList(l763,make_lisp_string("l763")),QIList(l762,make_lisp_string("l762")),QIList(l761,make_lisp_string("l761")),QIList(l760,make_lisp_string("l760")),QIList(l759,make_lisp_string("l759")),QIList(l758,make_lisp_string("l758")),QIList(l757,make_lisp_string("l757")),QIList(l756,make_lisp_string("l756")),QIList(l755,make_lisp_string("l755")),QIList(l754,make_lisp_string("l754")),QIList(l753,make_lisp_string("l753")),QIList(l752,make_lisp_string("l752")),QIList(l751,make_lisp_string("l751")),QIList(l750,make_lisp_string("l750")),QIList(l749,make_lisp_string("l749")),QIList(l748,make_lisp_string("l748")),QIList(l747,make_lisp_string("l747")),QIList(l746,make_lisp_string("l746")),QIList(l745,make_lisp_string("l745")),QIList(l744,make_lisp_string("l744")),QIList(l743,make_lisp_string("l743")),QIList(l742,make_lisp_string("l742")),QIList(l741,make_lisp_string("l741")),QIList(l740,make_lisp_string("l740")),QIList(l739,make_lisp_string("l739")),QIList(l738,make_lisp_string("l738")),QIList(l737,make_lisp_string("l737")),QIList(l736,make_lisp_string("l736")),QIList(l735,make_lisp_string("l735")),QIList(l734,make_lisp_string("l734")),QIList(l733,make_lisp_string("l733")),QIList(l732,make_lisp_string("l732")),QIList(l731,make_lisp_string("l731")),QIList(l730,make_lisp_string("l730")),QIList(l729,make_lisp_string("l729")),QIList(l728,make_lisp_string("l728")),QIList(l727,make_lisp_string("l727")),QIList(l726,make_lisp_string("l726")),QIList(l725,make_lisp_string("l725")),QIList(l724,make_lisp_string("l724")),QIList(l723,make_lisp_string("l723")),QIList(l722,make_lisp_string("l722")),QIList(l721,make_lisp_string("l721")),QIList(l720,make_lisp_string("l720")),QIList(l719,make_lisp_string("l719")),QIList(l718,make_lisp_string("l718")),QIList(l717,make_lisp_string("l717")),QIList(l716,make_lisp_string("l716")),QIList(l715,make_lisp_string("l715")),QIList(l714,make_lisp_string("l714")),QIList(l713,make_lisp_string("l713")),QIList(l712,make_lisp_string("l712")),QIList(l711,make_lisp_string("l711")),QIList(l710,make_lisp_string("l710")),QIList(l709,make_lisp_string("l709")),QIList(l708,make_lisp_string("l708")),QIList(l707,make_lisp_string("l707")),QIList(l706,make_lisp_string("l706")),QIList(l705,make_lisp_string("l705")),QIList(l704,make_lisp_string("l704")),QIList(l703,make_lisp_string("l703")),QIList(l702,make_lisp_string("l702")),QIList(l701,make_lisp_string("l701")),QIList(l700,make_lisp_string("l700")),QIList(l699,make_lisp_string("l699")),QIList(l698,make_lisp_string("l698")),QIList(l697,make_lisp_string("l697")),QIList(l696,make_lisp_string("l696")),QIList(l695,make_lisp_string("l695")),QIList(l694,make_lisp_string("l694")),QIList(l693,make_lisp_string("l693")),QIList(l692,make_lisp_string("l692")),QIList(l691,make_lisp_string("l691")),QIList(l690,make_lisp_string("l690")),QIList(l689,make_lisp_string("l689")),QIList(l688,make_lisp_string("l688")),QIList(l687,make_lisp_string("l687")),QIList(l686,make_lisp_string("l686")),QIList(l685,make_lisp_string("l685")),QIList(l684,make_lisp_string("l684")),QIList(l683,make_lisp_string("l683")),QIList(l682,make_lisp_string("l682")),QIList(l681,make_lisp_string("l681")),QIList(l680,make_lisp_string("l680")),QIList(l679,make_lisp_string("l679")),QIList(l678,make_lisp_string("l678")),QIList(l677,make_lisp_string("l677")),QIList(l676,make_lisp_string("l676")),QIList(l675,make_lisp_string("l675")),QIList(l674,make_lisp_string("l674")),QIList(l673,make_lisp_string("l673")),QIList(l672,make_lisp_string("l672")),QIList(l671,make_lisp_string("l671")),QIList(l670,make_lisp_string("l670")),QIList(l669,make_lisp_string("l669")),QIList(l668,make_lisp_string("l668")),QIList(l667,make_lisp_string("l667")),QIList(l666,make_lisp_string("l666")),QIList(l665,make_lisp_string("l665")),QIList(l664,make_lisp_string("l664")),QIList(l663,make_lisp_string("l663")),QIList(l662,make_lisp_string("l662")),QIList(l661,make_lisp_string("l661")),QIList(l660,make_lisp_string("l660")),QIList(l659,make_lisp_string("l659")),QIList(l658,make_lisp_string("l658")),QIList(l657,make_lisp_string("l657")),QIList(l656,make_lisp_string("l656")),QIList(l655,make_lisp_string("l655")),QIList(l654,make_lisp_string("l654")),QIList(l653,make_lisp_string("l653")),QIList(l652,make_lisp_string("l652")),QIList(l651,make_lisp_string("l651")),QIList(l650,make_lisp_string("l650")),QIList(l649,make_lisp_string("l649")),QIList(l648,make_lisp_string("l648")),QIList(l647,make_lisp_string("l647")),QIList(l646,make_lisp_string("l646")),QIList(l645,make_lisp_string("l645")),QIList(l644,make_lisp_string("l644")),QIList(l643,make_lisp_string("l643")),QIList(l642,make_lisp_string("l642")),QIList(l641,make_lisp_string("l641")),QIList(l640,make_lisp_string("l640")),QIList(l639,make_lisp_string("l639")),QIList(l638,make_lisp_string("l638")),QIList(l637,make_lisp_string("l637")),QIList(l636,make_lisp_string("l636")),QIList(l635,make_lisp_string("l635")),QIList(l634,make_lisp_string("l634")),QIList(l633,make_lisp_string("l633")),QIList(l632,make_lisp_string("l632")),QIList(l631,make_lisp_string("l631")),QIList(l630,make_lisp_string("l630")),QIList(l629,make_lisp_string("l629")),QIList(l628,make_lisp_string("l628")),QIList(l627,make_lisp_string("l627")),QIList(l626,make_lisp_string("l626")),QIList(l625,make_lisp_string("l625")),QIList(l624,make_lisp_string("l624")),QIList(l623,make_lisp_string("l623")),QIList(l622,make_lisp_string("l622")),QIList(l621,make_lisp_string("l621")),QIList(l620,make_lisp_string("l620")),QIList(l619,make_lisp_string("l619")),QIList(l618,make_lisp_string("l618")),QIList(l617,make_lisp_string("l617")),QIList(l616,make_lisp_string("l616")),QIList(l615,make_lisp_string("l615")),QIList(l614,make_lisp_string("l614")),QIList(l613,make_lisp_string("l613")),QIList(l612,make_lisp_string("l612")),QIList(l611,make_lisp_string("l611")),QIList(l610,make_lisp_string("l610")),QIList(l609,make_lisp_string("l609")),QIList(l608,make_lisp_string("l608")),QIList(l607,make_lisp_string("l607")),QIList(l606,make_lisp_string("l606")),QIList(l605,make_lisp_string("l605")),QIList(l604,make_lisp_string("l604")),QIList(l603,make_lisp_string("l603")),QIList(l602,make_lisp_string("l602")),QIList(l601,make_lisp_string("l601")),QIList(l600,make_lisp_string("l600")),QIList(l599,make_lisp_string("l599")),QIList(l598,make_lisp_string("l598")),QIList(l597,make_lisp_string("l597")),QIList(l596,make_lisp_string("l596")),QIList(l595,make_lisp_string("l595")),QIList(l594,make_lisp_string("l594")),QIList(l593,make_lisp_string("l593")),QIList(l592,make_lisp_string("l592")),QIList(l591,make_lisp_string("l591")),QIList(l590,make_lisp_string("l590")),QIList(l589,make_lisp_string("l589")),QIList(l588,make_lisp_string("l588")),QIList(l587,make_lisp_string("l587")),QIList(l586,make_lisp_string("l586")),QIList(l585,make_lisp_string("l585")),QIList(l584,make_lisp_string("l584")),QIList(l583,make_lisp_string("l583")),QIList(l582,make_lisp_string("l582")),QIList(l581,make_lisp_string("l581")),QIList(l580,make_lisp_string("l580")),QIList(l579,make_lisp_string("l579")),QIList(l578,make_lisp_string("l578")),QIList(l577,make_lisp_string("l577")),QIList(l576,make_lisp_string("l576")),QIList(l575,make_lisp_string("l575")),QIList(l574,make_lisp_string("l574")),QIList(l573,make_lisp_string("l573")),QIList(l572,make_lisp_string("l572")),QIList(l571,make_lisp_string("l571")),QIList(l570,make_lisp_string("l570")),QIList(l569,make_lisp_string("l569")),QIList(l568,make_lisp_string("l568")),QIList(l567,make_lisp_string("l567")),QIList(l566,make_lisp_string("l566")),QIList(l565,make_lisp_string("l565")),QIList(l564,make_lisp_string("l564")),QIList(l563,make_lisp_string("l563")),QIList(l562,make_lisp_string("l562")),QIList(l561,make_lisp_string("l561")),QIList(l560,make_lisp_string("l560")),QIList(l559,make_lisp_string("l559")),QIList(l558,make_lisp_string("l558")),QIList(l557,make_lisp_string("l557")),QIList(l556,make_lisp_string("l556")),QIList(l555,make_lisp_string("l555")),QIList(l554,make_lisp_string("l554")),QIList(l553,make_lisp_string("l553")),QIList(l552,make_lisp_string("l552")),QIList(l551,make_lisp_string("l551")),QIList(l550,make_lisp_string("l550")),QIList(l549,make_lisp_string("l549")),QIList(l548,make_lisp_string("l548")),QIList(l547,make_lisp_string("l547")),QIList(l546,make_lisp_string("l546")),QIList(l545,make_lisp_string("l545")),QIList(l544,make_lisp_string("l544")),QIList(l543,make_lisp_string("l543")),QIList(l542,make_lisp_string("l542")),QIList(l541,make_lisp_string("l541")),QIList(l540,make_lisp_string("l540")),QIList(l539,make_lisp_string("l539")),QIList(l538,make_lisp_string("l538")),QIList(l537,make_lisp_string("l537")),QIList(l536,make_lisp_string("l536")),QIList(l535,make_lisp_string("l535")),QIList(l534,make_lisp_string("l534")),QIList(l533,make_lisp_string("l533")),QIList(l532,make_lisp_string("l532")),QIList(l531,make_lisp_string("l531")),QIList(l530,make_lisp_string("l530")),QIList(l529,make_lisp_string("l529")),QIList(l528,make_lisp_string("l528")),QIList(l527,make_lisp_string("l527")),QIList(l526,make_lisp_string("l526")),QIList(l525,make_lisp_string("l525")),QIList(l524,make_lisp_string("l524")),QIList(l523,make_lisp_string("l523")),QIList(l522,make_lisp_string("l522")),QIList(l521,make_lisp_string("l521")),QIList(l520,make_lisp_string("l520")),QIList(l519,make_lisp_string("l519")),QIList(l518,make_lisp_string("l518")),QIList(l517,make_lisp_string("l517")),QIList(l516,make_lisp_string("l516")),QIList(l515,make_lisp_string("l515")),QIList(l514,make_lisp_string("l514")),QIList(l513,make_lisp_string("l513")),QIList(l512,make_lisp_string("l512")),QIList(l511,make_lisp_string("l511")),QIList(l510,make_lisp_string("l510")),QIList(l509,make_lisp_string("l509")),QIList(l508,make_lisp_string("l508")),QIList(l507,make_lisp_string("l507")),QIList(l506,make_lisp_string("l506")),QIList(l505,make_lisp_string("l505")),QIList(l504,make_lisp_string("l504")),QIList(l503,make_lisp_string("l503")),QIList(l502,make_lisp_string("l502")),QIList(l501,make_lisp_string("l501")),QIList(l500,make_lisp_string("l500")),QIList(l499,make_lisp_string("l499")),QIList(l498,make_lisp_string("l498")),QIList(l497,make_lisp_string("l497")),QIList(l496,make_lisp_string("l496")),QIList(l495,make_lisp_string("l495")),QIList(l494,make_lisp_string("l494")),QIList(l493,make_lisp_string("l493")),QIList(l492,make_lisp_string("l492")),QIList(l491,make_lisp_string("l491")),QIList(l490,make_lisp_string("l490")),QIList(l489,make_lisp_string("l489")),QIList(l488,make_lisp_string("l488")),QIList(l487,make_lisp_string("l487")),QIList(l486,make_lisp_string("l486")),QIList(l485,make_lisp_string("l485")),QIList(l484,make_lisp_string("l484")),QIList(l483,make_lisp_string("l483")),QIList(l482,make_lisp_string("l482")),QIList(l481,make_lisp_string("l481")),QIList(l480,make_lisp_string("l480")),QIList(l479,make_lisp_string("l479")),QIList(l478,make_lisp_string("l478")),QIList(l477,make_lisp_string("l477")),QIList(l476,make_lisp_string("l476")),QIList(l475,make_lisp_string("l475")),QIList(l474,make_lisp_string("l474")),QIList(l473,make_lisp_string("l473")),QIList(l472,make_lisp_string("l472")),QIList(l471,make_lisp_string("l471")),QIList(l470,make_lisp_string("l470")),QIList(l469,make_lisp_string("l469")),QIList(l468,make_lisp_string("l468")),QIList(l467,make_lisp_string("l467")),QIList(l466,make_lisp_string("l466")),QIList(l465,make_lisp_string("l465")),QIList(l464,make_lisp_string("l464")),QIList(l463,make_lisp_string("l463")),QIList(l462,make_lisp_string("l462")),QIList(l461,make_lisp_string("l461")),QIList(l460,make_lisp_string("l460")),QIList(l459,make_lisp_string("l459")),QIList(l458,make_lisp_string("l458")),QIList(l457,make_lisp_string("l457")),QIList(l456,make_lisp_string("l456")),QIList(l455,make_lisp_string("l455")),QIList(l454,make_lisp_string("l454")),QIList(l453,make_lisp_string("l453")),QIList(l452,make_lisp_string("l452")),QIList(l451,make_lisp_string("l451")),QIList(l450,make_lisp_string("l450")),QIList(l449,make_lisp_string("l449")),QIList(l448,make_lisp_string("l448")),QIList(l447,make_lisp_string("l447")),QIList(l446,make_lisp_string("l446")),QIList(l445,make_lisp_string("l445")),QIList(l444,make_lisp_string("l444")),QIList(l443,make_lisp_string("l443")),QIList(l442,make_lisp_string("l442")),QIList(l441,make_lisp_string("l441")),QIList(l440,make_lisp_string("l440")),QIList(l439,make_lisp_string("l439")),QIList(l438,make_lisp_string("l438")),QIList(l437,make_lisp_string("l437")),QIList(l436,make_lisp_string("l436")),QIList(l435,make_lisp_string("l435")),QIList(l434,make_lisp_string("l434")),QIList(l433,make_lisp_string("l433")),QIList(l432,make_lisp_string("l432")),QIList(l431,make_lisp_string("l431")),QIList(l430,make_lisp_string("l430")),QIList(l429,make_lisp_string("l429")),QIList(l428,make_lisp_string("l428")),QIList(l427,make_lisp_string("l427")),QIList(l426,make_lisp_string("l426")),QIList(l425,make_lisp_string("l425")),QIList(l424,make_lisp_string("l424")),QIList(l423,make_lisp_string("l423")),QIList(l422,make_lisp_string("l422")),QIList(l421,make_lisp_string("l421")),QIList(l420,make_lisp_string("l420")),QIList(l419,make_lisp_string("l419")),QIList(l418,make_lisp_string("l418")),QIList(l417,make_lisp_string("l417")),QIList(l416,make_lisp_string("l416")),QIList(l415,make_lisp_string("l415")),QIList(l414,make_lisp_string("l414")),QIList(l413,make_lisp_string("l413")),QIList(l412,make_lisp_string("l412")),QIList(l411,make_lisp_string("l411")),QIList(l410,make_lisp_string("l410")),QIList(l409,make_lisp_string("l409")),QIList(l408,make_lisp_string("l408")),QIList(l407,make_lisp_string("l407")),QIList(l406,make_lisp_string("l406")),QIList(l405,make_lisp_string("l405")),QIList(l404,make_lisp_string("l404")),QIList(l403,make_lisp_string("l403")),QIList(l402,make_lisp_string("l402")),QIList(l401,make_lisp_string("l401")),QIList(l400,make_lisp_string("l400")),QIList(l399,make_lisp_string("l399")),QIList(l398,make_lisp_string("l398")),QIList(l397,make_lisp_string("l397")),QIList(l396,make_lisp_string("l396")),QIList(l395,make_lisp_string("l395")),QIList(l394,make_lisp_string("l394")),QIList(l393,make_lisp_string("l393")),QIList(l392,make_lisp_string("l392")),QIList(l391,make_lisp_string("l391")),QIList(l390,make_lisp_string("l390")),QIList(l389,make_lisp_string("l389")),QIList(l388,make_lisp_string("l388")),QIList(l387,make_lisp_string("l387")),QIList(l386,make_lisp_string("l386")),QIList(l385,make_lisp_string("l385")),QIList(l384,make_lisp_string("l384")),QIList(l383,make_lisp_string("l383")),QIList(l382,make_lisp_string("l382")),QIList(l381,make_lisp_string("l381")),QIList(l380,make_lisp_string("l380")),QIList(l379,make_lisp_string("l379")),QIList(l378,make_lisp_string("l378")),QIList(l377,make_lisp_string("l377")),QIList(l376,make_lisp_string("l376")),QIList(l375,make_lisp_string("l375")),QIList(l374,make_lisp_string("l374")),QIList(l373,make_lisp_string("l373")),QIList(l372,make_lisp_string("l372")),QIList(l371,make_lisp_string("l371")),QIList(l370,make_lisp_string("l370")),QIList(l369,make_lisp_string("l369")),QIList(l368,make_lisp_string("l368")),QIList(l367,make_lisp_string("l367")),QIList(l366,make_lisp_string("l366")),QIList(l365,make_lisp_string("l365")),QIList(l364,make_lisp_string("l364")),QIList(l363,make_lisp_string("l363")),QIList(l362,make_lisp_string("l362")),QIList(l361,make_lisp_string("l361")),QIList(l360,make_lisp_string("l360")),QIList(l359,make_lisp_string("l359")),QIList(l358,make_lisp_string("l358")),QIList(l357,make_lisp_string("l357")),QIList(l356,make_lisp_string("l356")),QIList(l355,make_lisp_string("l355")),QIList(l354,make_lisp_string("l354")),QIList(l353,make_lisp_string("l353")),QIList(l352,make_lisp_string("l352")),QIList(l351,make_lisp_string("l351")),QIList(l350,make_lisp_string("l350")),QIList(l349,make_lisp_string("l349")),QIList(l348,make_lisp_string("l348")),QIList(l347,make_lisp_string("l347")),QIList(l346,make_lisp_string("l346")),QIList(l345,make_lisp_string("l345")),QIList(l344,make_lisp_string("l344")),QIList(l343,make_lisp_string("l343")),QIList(l342,make_lisp_string("l342")),QIList(l341,make_lisp_string("l341")),QIList(l340,make_lisp_string("l340")),QIList(l339,make_lisp_string("l339")),QIList(l338,make_lisp_string("l338")),QIList(l337,make_lisp_string("l337")),QIList(l336,make_lisp_string("l336")),QIList(l335,make_lisp_string("l335")),QIList(l334,make_lisp_string("l334")),QIList(l333,make_lisp_string("l333")),QIList(l332,make_lisp_string("l332")),QIList(l331,make_lisp_string("l331")),QIList(l330,make_lisp_string("l330")),QIList(l329,make_lisp_string("l329")),QIList(l328,make_lisp_string("l328")),QIList(l327,make_lisp_string("l327")),QIList(l326,make_lisp_string("l326")),QIList(l325,make_lisp_string("l325")),QIList(l324,make_lisp_string("l324")),QIList(l323,make_lisp_string("l323")),QIList(l322,make_lisp_string("l322")),QIList(l321,make_lisp_string("l321")),QIList(l320,make_lisp_string("l320")),QIList(l319,make_lisp_string("l319")),QIList(l318,make_lisp_string("l318")),QIList(l317,make_lisp_string("l317")),QIList(l316,make_lisp_string("l316")),QIList(l315,make_lisp_string("l315")),QIList(l314,make_lisp_string("l314")),QIList(l313,make_lisp_string("l313")),QIList(l312,make_lisp_string("l312")),QIList(l311,make_lisp_string("l311")),QIList(l310,make_lisp_string("l310")),QIList(l309,make_lisp_string("l309")),QIList(l308,make_lisp_string("l308")),QIList(l307,make_lisp_string("l307")),QIList(l306,make_lisp_string("l306")),QIList(l305,make_lisp_string("l305")),QIList(l304,make_lisp_string("l304")),QIList(l303,make_lisp_string("l303")),QIList(l302,make_lisp_string("l302")),QIList(l301,make_lisp_string("l301")),QIList(l300,make_lisp_string("l300")),QIList(l299,make_lisp_string("l299")),QIList(l298,make_lisp_string("l298")),QIList(l297,make_lisp_string("l297")),QIList(l296,make_lisp_string("l296")),QIList(l295,make_lisp_string("l295")),QIList(l294,make_lisp_string("l294")),QIList(l293,make_lisp_string("l293")),QIList(l292,make_lisp_string("l292")),QIList(l291,make_lisp_string("l291")),QIList(l290,make_lisp_string("l290")),QIList(l289,make_lisp_string("l289")),QIList(l288,make_lisp_string("l288")),QIList(l287,make_lisp_string("l287")),QIList(l286,make_lisp_string("l286")),QIList(l285,make_lisp_string("l285")),QIList(l284,make_lisp_string("l284")),QIList(l283,make_lisp_string("l283")),QIList(l282,make_lisp_string("l282")),QIList(l281,make_lisp_string("l281")),QIList(l280,make_lisp_string("l280")),QIList(l279,make_lisp_string("l279")),QIList(l278,make_lisp_string("l278")),QIList(l277,make_lisp_string("l277")),QIList(l276,make_lisp_string("l276")),QIList(l275,make_lisp_string("l275")),QIList(l274,make_lisp_string("l274")),QIList(l273,make_lisp_string("l273")),QIList(l272,make_lisp_string("l272")),QIList(l271,make_lisp_string("l271")),QIList(l270,make_lisp_string("l270")),QIList(l269,make_lisp_string("l269")),QIList(l268,make_lisp_string("l268")),QIList(l267,make_lisp_string("l267")),QIList(l266,make_lisp_string("l266")),QIList(l265,make_lisp_string("l265")),QIList(l264,make_lisp_string("l264")),QIList(l263,make_lisp_string("l263")),QIList(l262,make_lisp_string("l262")),QIList(l261,make_lisp_string("l261")),QIList(l260,make_lisp_string("l260")),QIList(l259,make_lisp_string("l259")),QIList(l258,make_lisp_string("l258")),QIList(l257,make_lisp_string("l257")),QIList(l256,make_lisp_string("l256")),QIList(l255,make_lisp_string("l255")),QIList(l254,make_lisp_string("l254")),QIList(l253,make_lisp_string("l253")),QIList(l252,make_lisp_string("l252")),QIList(l251,make_lisp_string("l251")),QIList(l250,make_lisp_string("l250")),QIList(l249,make_lisp_string("l249")),QIList(l248,make_lisp_string("l248")),QIList(l247,make_lisp_string("l247")),QIList(l246,make_lisp_string("l246")),QIList(l245,make_lisp_string("l245")),QIList(l244,make_lisp_string("l244")),QIList(l243,make_lisp_string("l243")),QIList(l242,make_lisp_string("l242")),QIList(l241,make_lisp_string("l241")),QIList(l240,make_lisp_string("l240")),QIList(l239,make_lisp_string("l239")),QIList(l238,make_lisp_string("l238")),QIList(l237,make_lisp_string("l237")),QIList(l236,make_lisp_string("l236")),QIList(l235,make_lisp_string("l235")),QIList(l234,make_lisp_string("l234")),QIList(l233,make_lisp_string("l233")),QIList(l232,make_lisp_string("l232")),QIList(l231,make_lisp_string("l231")),QIList(l230,make_lisp_string("l230")),QIList(l229,make_lisp_string("l229")),QIList(l228,make_lisp_string("l228")),QIList(l227,make_lisp_string("l227")),QIList(l226,make_lisp_string("l226")),QIList(l225,make_lisp_string("l225")),QIList(l224,make_lisp_string("l224")),QIList(l223,make_lisp_string("l223")),QIList(l222,make_lisp_string("l222")),QIList(l221,make_lisp_string("l221")),QIList(l220,make_lisp_string("l220")),QIList(l219,make_lisp_string("l219")),QIList(l218,make_lisp_string("l218")),QIList(l217,make_lisp_string("l217")),QIList(l216,make_lisp_string("l216")),QIList(l215,make_lisp_string("l215")),QIList(l214,make_lisp_string("l214")),QIList(l213,make_lisp_string("l213")),QIList(l212,make_lisp_string("l212")),QIList(l211,make_lisp_string("l211")),QIList(l210,make_lisp_string("l210")),QIList(l209,make_lisp_string("l209")),QIList(l208,make_lisp_string("l208")),QIList(l207,make_lisp_string("l207")),QIList(l206,make_lisp_string("l206")),QIList(l205,make_lisp_string("l205")),QIList(l204,make_lisp_string("l204")),QIList(l203,make_lisp_string("l203")),QIList(l202,make_lisp_string("l202")),QIList(l201,make_lisp_string("l201")),QIList(l200,make_lisp_string("l200")),QIList(l199,make_lisp_string("l199")),QIList(l198,make_lisp_string("l198")),QIList(l197,make_lisp_string("l197")),QIList(l196,make_lisp_string("l196")),QIList(l195,make_lisp_string("l195")),QIList(l194,make_lisp_string("l194")),QIList(l193,make_lisp_string("l193")),QIList(l192,make_lisp_string("l192")),QIList(l191,make_lisp_string("l191")),QIList(l190,make_lisp_string("l190")),QIList(l189,make_lisp_string("l189")),QIList(l188,make_lisp_string("l188")),QIList(l187,make_lisp_string("l187")),QIList(l186,make_lisp_string("l186")),QIList(l185,make_lisp_string("l185")),QIList(l184,make_lisp_string("l184")),QIList(l183,make_lisp_string("l183")),QIList(l182,make_lisp_string("l182")),QIList(l181,make_lisp_string("l181")),QIList(l180,make_lisp_string("l180")),QIList(l179,make_lisp_string("l179")),QIList(l178,make_lisp_string("l178")),QIList(l177,make_lisp_string("l177")),QIList(l176,make_lisp_string("l176")),QIList(l175,make_lisp_string("l175")),QIList(l174,make_lisp_string("l174")),QIList(l173,make_lisp_string("l173")),QIList(l172,make_lisp_string("l172")),QIList(l171,make_lisp_string("l171")),QIList(l170,make_lisp_string("l170")),QIList(l169,make_lisp_string("l169")),QIList(l168,make_lisp_string("l168")),QIList(l167,make_lisp_string("l167")),QIList(l166,make_lisp_string("l166")),QIList(l165,make_lisp_string("l165")),QIList(l164,make_lisp_string("l164")),QIList(l163,make_lisp_string("l163")),QIList(l162,make_lisp_string("l162")),QIList(l161,make_lisp_string("l161")),QIList(l160,make_lisp_string("l160")),QIList(l159,make_lisp_string("l159")),QIList(l158,make_lisp_string("l158")),QIList(l157,make_lisp_string("l157")),QIList(l156,make_lisp_string("l156")),QIList(l155,make_lisp_string("l155")),QIList(l154,make_lisp_string("l154")),QIList(l153,make_lisp_string("l153")),QIList(l152,make_lisp_string("l152")),QIList(l151,make_lisp_string("l151")),QIList(l150,make_lisp_string("l150")),QIList(l149,make_lisp_string("l149")),QIList(l148,make_lisp_string("l148")),QIList(l147,make_lisp_string("l147")),QIList(l146,make_lisp_string("l146")),QIList(l145,make_lisp_string("l145")),QIList(l144,make_lisp_string("l144")),QIList(l143,make_lisp_string("l143")),QIList(l142,make_lisp_string("l142")),QIList(l141,make_lisp_string("l141")),QIList(l140,make_lisp_string("l140")),QIList(l139,make_lisp_string("l139")),QIList(l138,make_lisp_string("l138")),QIList(l137,make_lisp_string("l137")),QIList(l136,make_lisp_string("l136")),QIList(l135,make_lisp_string("l135")),QIList(l134,make_lisp_string("l134")),QIList(l133,make_lisp_string("l133")),QIList(l132,make_lisp_string("l132")),QIList(l131,make_lisp_string("l131")),QIList(l130,make_lisp_string("l130")),QIList(l129,make_lisp_string("l129")),QIList(l128,make_lisp_string("l128")),QIList(l127,make_lisp_string("l127")),QIList(l126,make_lisp_string("l126")),QIList(l125,make_lisp_string("l125")),QIList(l124,make_lisp_string("l124")),QIList(l123,make_lisp_string("l123")),QIList(l122,make_lisp_string("l122")),QIList(l121,make_lisp_string("l121")),QIList(l120,make_lisp_string("l120")),QIList(l119,make_lisp_string("l119")),QIList(l118,make_lisp_string("l118")),QIList(l117,make_lisp_string("l117")),QIList(l116,make_lisp_string("l116")),QIList(l115,make_lisp_string("l115")),QIList(l114,make_lisp_string("l114")),QIList(l113,make_lisp_string("l113")),QIList(l112,make_lisp_string("l112")),QIList(l111,make_lisp_string("l111")),QIList(l110,make_lisp_string("l110")),QIList(l109,make_lisp_string("l109")),QIList(l108,make_lisp_string("l108")),QIList(l107,make_lisp_string("l107")),QIList(l106,make_lisp_string("l106")),QIList(l105,make_lisp_string("l105")),QIList(l104,make_lisp_string("l104")),QIList(l103,make_lisp_string("l103")),QIList(l102,make_lisp_string("l102")),QIList(l101,make_lisp_string("l101")),QIList(l100,make_lisp_string("l100")),QIList(l99,make_lisp_string("l99")),QIList(l98,make_lisp_string("l98")),QIList(l97,make_lisp_string("l97")),QIList(l96,make_lisp_string("l96")),QIList(l95,make_lisp_string("l95")),QIList(l94,make_lisp_string("l94")),QIList(l93,make_lisp_string("l93")),QIList(l92,make_lisp_string("l92")),QIList(l91,make_lisp_string("l91")),QIList(l90,make_lisp_string("l90")),QIList(l89,make_lisp_string("l89")),QIList(l88,make_lisp_string("l88")),QIList(l87,make_lisp_string("l87")),QIList(l86,make_lisp_string("l86")),QIList(l85,make_lisp_string("l85")),QIList(l84,make_lisp_string("l84")),QIList(l83,make_lisp_string("l83")),QIList(l82,make_lisp_string("l82")),QIList(l81,make_lisp_string("l81")),QIList(l80,make_lisp_string("l80")),QIList(l79,make_lisp_string("l79")),QIList(l78,make_lisp_string("l78")),QIList(l77,make_lisp_string("l77")),QIList(l76,make_lisp_string("l76")),QIList(l75,make_lisp_string("l75")),QIList(l74,make_lisp_string("l74")),QIList(l73,make_lisp_string("l73")),QIList(l72,make_lisp_string("l72")),QIList(l71,make_lisp_string("l71")),QIList(l70,make_lisp_string("l70")),QIList(l69,make_lisp_string("l69")),QIList(l68,make_lisp_string("l68")),QIList(l67,make_lisp_string("l67")),QIList(l66,make_lisp_string("l66")),QIList(l65,make_lisp_string("l65")),QIList(l64,make_lisp_string("l64")),QIList(l63,make_lisp_string("l63")),QIList(l62,make_lisp_string("l62")),QIList(l61,make_lisp_string("l61")),QIList(l60,make_lisp_string("l60")),QIList(l59,make_lisp_string("l59")),QIList(l58,make_lisp_string("l58")),QIList(l57,make_lisp_string("l57")),QIList(l56,make_lisp_string("l56")),QIList(l55,make_lisp_string("l55")),QIList(l54,make_lisp_string("l54")),QIList(l53,make_lisp_string("l53")),QIList(l52,make_lisp_string("l52")),QIList(l51,make_lisp_string("l51")),QIList(l50,make_lisp_string("l50")),QIList(l49,make_lisp_string("l49")),QIList(l48,make_lisp_string("l48")),QIList(l47,make_lisp_string("l47")),QIList(l46,make_lisp_string("l46")),QIList(l45,make_lisp_string("l45")),QIList(l44,make_lisp_string("l44")),QIList(l43,make_lisp_string("l43")),QIList(l42,make_lisp_string("l42")),QIList(l41,make_lisp_string("l41")),QIList(l40,make_lisp_string("l40")),QIList(l39,make_lisp_string("l39")),QIList(l38,make_lisp_string("l38")),QIList(l37,make_lisp_string("l37")),QIList(l36,make_lisp_string("l36")),QIList(l35,make_lisp_string("l35")),QIList(l34,make_lisp_string("l34")),QIList(l33,make_lisp_string("l33")),QIList(l32,make_lisp_string("l32")),QIList(l31,make_lisp_string("l31")),QIList(l30,make_lisp_string("l30")),QIList(l29,make_lisp_string("l29")),QIList(l28,make_lisp_string("l28")),QIList(l27,make_lisp_string("l27")),QIList(l26,make_lisp_string("l26")),QIList(l25,make_lisp_string("l25")),QIList(l24,make_lisp_string("l24")),QIList(l23,make_lisp_string("l23")),QIList(l22,make_lisp_string("l22")),QIList(l21,make_lisp_string("l21")),QIList(l20,make_lisp_string("l20")),QIList(l19,make_lisp_string("l19")),QIList(l18,make_lisp_string("l18")),QIList(l17,make_lisp_string("l17")),QIList(l16,make_lisp_string("l16")),QIList(l15,make_lisp_string("l15")),QIList(l14,make_lisp_string("l14")),QIList(l13,make_lisp_string("l13")),QIList(l12,make_lisp_string("l12")),QIList(l11,make_lisp_string("l11")),QIList(l10,make_lisp_string("l10")),QIList(l9,make_lisp_string("l9")),QIList(l8,make_lisp_string("l8")),QIList(l7,make_lisp_string("l7")),QIList(l6,make_lisp_string("l6")),QIList(l5,make_lisp_string("l5")),QIList(l4,make_lisp_string("l4")),QIList(l3,make_lisp_string("l3")),QIList(l2,make_lisp_string("l2")),QIList(l1,make_lisp_string("l1")),l5);
((l476).value = l861);
((l378).value = 2365);
((l14).value = 15040);
((l477).value = 861);

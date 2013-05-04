var l862 = (new Symbol(make_lisp_string("*TOTAL-TESTS*")));
(function(){
    ((l862).value = 0);
    return l862;
})();
var l863 = (new Symbol(make_lisp_string("*PASSED-TESTS*")));
(function(){
    ((l863).value = 0);
    return l863;
})();
var l864 = (new Symbol(make_lisp_string("*FAILED-TESTS*")));
(function(){
    ((l864).value = 0);
    return l864;
})();
var l865 = (new Symbol(make_lisp_string("*EXPECTED-FAILURES*")));
(function(){
    ((l865).value = 0);
    return l865;
})();
var l866 = (new Symbol(make_lisp_string("*UNEXPECTED-PASSES*")));
(function(){
    ((l866).value = 0);
    return l866;
})();
var l867 = (new Symbol(make_lisp_string("*USE-HTML-OUTPUT-P*")));
(function(){
    (((l867.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l867).value = l4.value));
    return l867;
})();
var l868 = (new Symbol(make_lisp_string("*TIMESTAMP*")));
(function(){
    (((l868.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l868).value = l5.value));
    return l868;
})();
var l869 = (new Symbol(make_lisp_string("TEST")));
l869;
var l870 = (new Symbol(make_lisp_string("EXPECTED-FAILURE")));
l870;
var l871 = (new Symbol(make_lisp_string("TEST-EQUAL")));
l871;
var l872 = make_lisp_string("Running tests...~%~%");
l122.fvalue(pv, 2, l4.value, l872);
((l868).value = (new Date()).getTime());
var l873 = make_lisp_string("Test `~S' passed~%");
var l874 = QIList(l26,QIList(l36,l5,1,l5),l5,l5);
var l875 = make_lisp_string("<font color='red'>Test `~S' failed.</font>~%");
var l876 = make_lisp_string("Test `~S' failed.~%");
(function(){
    (function(v2366){
        return (v2366 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l874);
            return (function(){
                var v2367 = 1;
                var v2368 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2367;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2368);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l874) : l122.fvalue(pv, 3, l4.value, l876, l874));
            return (function(){
                var v2369 = 1;
                var v2370 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2369;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2370);
            })();
        })());
    })(l26.fvalue(pv, 2, (l5.value !== l5.value ? 1 : l5.value), l5.value));
    return (function(){
        var v2371 = 1;
        var v2372 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2371;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2372);
    })();
})();
var l877 = QIList(l19,QIList(l36,1,2,l5),2,l5);
(function(){
    (function(v2373){
        return (v2373 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l877);
            return (function(){
                var v2374 = 1;
                var v2375 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2374;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2375);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l877) : l122.fvalue(pv, 3, l4.value, l876, l877));
            return (function(){
                var v2376 = 1;
                var v2377 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2376;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2377);
            })();
        })());
    })((function(){
        var x1 = (1 !== l5.value ? 2 : l5.value);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (x1==2?l4.value: l5.value);
    })());
    return (function(){
        var v2378 = 1;
        var v2379 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2378;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2379);
    })();
})();
var l878 = QIList(l19,QIList(l37,l5,1,l5),1,l5);
(function(){
    (function(v2381){
        return (v2381 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l878);
            return (function(){
                var v2382 = 1;
                var v2383 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2382;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2383);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l878) : l122.fvalue(pv, 3, l4.value, l876, l878));
            return (function(){
                var v2384 = 1;
                var v2385 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2384;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2385);
            })();
        })());
    })((function(){
        var x1 = (function(v2380){
            return (v2380 !== l5.value ? v2380 : 1);
        })(l5.value);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (x1==1?l4.value: l5.value);
    })());
    return (function(){
        var v2386 = 1;
        var v2387 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2386;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2387);
    })();
})();
var l879 = QIList(l19,QIList(l37,1,2,l5),1,l5);
(function(){
    (function(v2389){
        return (v2389 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l879);
            return (function(){
                var v2390 = 1;
                var v2391 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2390;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2391);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l879) : l122.fvalue(pv, 3, l4.value, l876, l879));
            return (function(){
                var v2392 = 1;
                var v2393 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2392;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2393);
            })();
        })());
    })((function(){
        var x1 = (function(v2388){
            return (v2388 !== l5.value ? v2388 : 2);
        })(1);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (x1==1?l4.value: l5.value);
    })());
    return (function(){
        var v2394 = 1;
        var v2395 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2394;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2395);
    })();
})();
var l880 = QIList(l26,l5,QIList(l33,l5),l5);
(function(){
    (function(v2396){
        return (v2396 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l880);
            return (function(){
                var v2397 = 1;
                var v2398 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2397;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2398);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l880) : l122.fvalue(pv, 3, l4.value, l876, l880));
            return (function(){
                var v2399 = 1;
                var v2400 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2399;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2400);
            })();
        })());
    })(l26.fvalue(pv, 2, l5.value, l5.value));
    return (function(){
        var v2401 = 1;
        var v2402 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2401;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2402);
    })();
})();
var l881 = QIList(l19,1,QIList(l33,QIList(1,l5),l5),l5);
(function(){
    (function(v2404){
        return (v2404 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l881);
            return (function(){
                var v2405 = 1;
                var v2406 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2405;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2406);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l881) : l122.fvalue(pv, 3, l4.value, l876, l881));
            return (function(){
                var v2407 = 1;
                var v2408 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2407;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2408);
            })();
        })());
    })((function(){
        var x1 = (function(v2403){
            return (v2403 !== l5.value ? v2403 : l5.value);
        })(1);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (1==x1?l4.value: l5.value);
    })());
    return (function(){
        var v2409 = 1;
        var v2410 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2409;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2410);
    })();
})();
var l882 = QIList(l19,1,QIList(l519,QIList(QIList(l817,0,l5),l5),QIList(l33,QIList(QIList(l28,l817,l5),l5),l5),l5),l5);
(function(){
    (function(v2415){
        return (v2415 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l882);
            return (function(){
                var v2416 = 1;
                var v2417 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2416;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2417);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l882) : l122.fvalue(pv, 3, l4.value, l876, l882));
            return (function(){
                var v2418 = 1;
                var v2419 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2418;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2419);
            })();
        })());
    })((function(){
        var x1 = (function(v2411){
            return (function(v2414){
                return (v2414 !== l5.value ? v2414 : l5.value);
            })((function(){
                var v2412 = 1;
                var v2413 = (function(){
                    var x1 = v2411;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2412;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return (v2411 = v2413);
            })());
        })(0);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (1==x1?l4.value: l5.value);
    })());
    return (function(){
        var v2420 = 1;
        var v2421 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2420;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2421);
    })();
})();
var l883 = QIList(l19,2,QIList(l33,QIList(1,2,l5),l5),l5);
(function(){
    (function(v2423){
        return (v2423 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l883);
            return (function(){
                var v2424 = 1;
                var v2425 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2424;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2425);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l883) : l122.fvalue(pv, 3, l4.value, l876, l883));
            return (function(){
                var v2426 = 1;
                var v2427 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2426;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2427);
            })();
        })());
    })((function(){
        var x1 = (function(v2422){
            return (v2422 !== l5.value ? 2 : l5.value);
        })(1);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (2==x1?l4.value: l5.value);
    })());
    return (function(){
        var v2428 = 1;
        var v2429 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2428;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2429);
    })();
})();
var l884 = QIList(l19,3,QIList(l33,QIList(l5,1,l5),QIList(2,3,l5),l5),l5);
(function(){
    (function(v2432){
        return (v2432 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l884);
            return (function(){
                var v2433 = 1;
                var v2434 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2433;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2434);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l884) : l122.fvalue(pv, 3, l4.value, l876, l884));
            return (function(){
                var v2435 = 1;
                var v2436 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2435;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2436);
            })();
        })());
    })((function(){
        var x1 = (function(v2430){
            return (v2430 !== l5.value ? 1 : (function(v2431){
                return (v2431 !== l5.value ? 3 : l5.value);
            })(2));
        })(l5.value);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (3==x1?l4.value: l5.value);
    })());
    return (function(){
        var v2437 = 1;
        var v2438 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2437;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2438);
    })();
})();
var l885 = QIList(l26,l5,QIList(l33,QIList(l5,1,l5),QIList(l5,2,l5),l5),l5);
(function(){
    (function(v2441){
        return (v2441 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l885);
            return (function(){
                var v2442 = 1;
                var v2443 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2442;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2443);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l885) : l122.fvalue(pv, 3, l4.value, l876, l885));
            return (function(){
                var v2444 = 1;
                var v2445 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2444;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2445);
            })();
        })());
    })(l26.fvalue(pv, 2, l5.value, (function(v2439){
        return (v2439 !== l5.value ? 1 : (function(v2440){
            return (v2440 !== l5.value ? 2 : l5.value);
        })(l5.value));
    })(l5.value)));
    return (function(){
        var v2446 = 1;
        var v2447 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2446;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2447);
    })();
})();
var l886 = QIList(l19,QIList(l34,1,QIList(2,3,l5),QIList(l814,42,l5),l5),42,l5);
(function(){
    (function(v2450){
        return (v2450 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l886);
            return (function(){
                var v2451 = 1;
                var v2452 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2451;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2452);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l886) : l122.fvalue(pv, 3, l4.value, l876, l886));
            return (function(){
                var v2453 = 1;
                var v2454 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2453;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2454);
            })();
        })());
    })((function(){
        var x1 = (function(v2448){
            return (function(v2449){
                return (v2449 !== l5.value ? 3 : 42);
            })(l26.fvalue(pv, 2, v2448, 2));
        })(1);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (x1==42?l4.value: l5.value);
    })());
    return (function(){
        var v2455 = 1;
        var v2456 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2455;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2456);
    })();
})();
var l887 = QIList(l19,QIList(l34,1,QIList(2,3,l5),QIList(l4,42,l5),l5),42,l5);
(function(){
    (function(v2459){
        return (v2459 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l887);
            return (function(){
                var v2460 = 1;
                var v2461 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2460;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2461);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l887) : l122.fvalue(pv, 3, l4.value, l876, l887));
            return (function(){
                var v2462 = 1;
                var v2463 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2462;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2463);
            })();
        })());
    })((function(){
        var x1 = (function(v2457){
            return (function(v2458){
                return (v2458 !== l5.value ? 3 : 42);
            })(l26.fvalue(pv, 2, v2457, 2));
        })(1);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (x1==42?l4.value: l5.value);
    })());
    return (function(){
        var v2464 = 1;
        var v2465 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2464;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2465);
    })();
})();
var l888 = QIList(l19,QIList(l34,1,QIList(2,3,l5),QIList(1,42,l5),l5),42,l5);
(function(){
    (function(v2469){
        return (v2469 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l888);
            return (function(){
                var v2470 = 1;
                var v2471 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2470;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2471);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l888) : l122.fvalue(pv, 3, l4.value, l876, l888));
            return (function(){
                var v2472 = 1;
                var v2473 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2472;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2473);
            })();
        })());
    })((function(){
        var x1 = (function(v2466){
            return (function(v2467){
                return (v2467 !== l5.value ? 3 : (function(v2468){
                    return (v2468 !== l5.value ? 42 : l5.value);
                })(l26.fvalue(pv, 2, v2466, 1)));
            })(l26.fvalue(pv, 2, v2466, 2));
        })(1);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (x1==42?l4.value: l5.value);
    })());
    return (function(){
        var v2474 = 1;
        var v2475 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2474;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2475);
    })();
})();
var l889 = QIList(l42,QIList(l34,1,QIList(2,3,l5),l5),l5);
(function(){
    (function(v2478){
        return (v2478 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l889);
            return (function(){
                var v2479 = 1;
                var v2480 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2479;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2480);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l889) : l122.fvalue(pv, 3, l4.value, l876, l889));
            return (function(){
                var v2481 = 1;
                var v2482 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2481;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2482);
            })();
        })());
    })(l42.fvalue(pv, 1, (function(v2476){
        return (function(v2477){
            return (v2477 !== l5.value ? 3 : l5.value);
        })(l26.fvalue(pv, 2, v2476, 2));
    })(1)));
    return (function(){
        var v2483 = 1;
        var v2484 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2483;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2484);
    })();
})();
var l890 = (new Symbol(make_lisp_string("FOO")));
(function(){
    (l890).fvalue = (function(){
        var func = (function (values,nargs,v2485){
            checkArgs(nargs, 1);
            return (function(){
                try {
                var v2486 = [];
                    (v2485 !== l5.value ? (function(){
                        var f = v2485;
                        return (typeof f === 'function'? f: f.fvalue)(pv, 0)
                    })() : l5.value);
                    l890.fvalue(pv, 1, (function (values,nargs){
                        checkArgsAtMost(nargs, 0);
                        return (function(){
                            var values = mv;
                            throw ({type: 'block', id: v2486, values: 1, message: 'Return from unknown block FOO.'})
                        })();
                    }));
                    return (function(){
                        var values = mv;
                        throw ({type: 'block', id: v2486, values: 2, message: 'Return from unknown block FOO.'})
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == v2486)
                        return values.apply(this, forcemv(cf.values));
                    else
                        throw cf;
                }
            })();
        });
        func.fname = 'FOO';
        return func;
    })();
    return l890;
})();
var l891 = QIList(l19,QIList(l890,l5,l5),1,l5);
(function(){
    (function(v2487){
        return (v2487 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l891);
            return (function(){
                var v2488 = 1;
                var v2489 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2488;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2489);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l891) : l122.fvalue(pv, 3, l4.value, l876, l891));
            return (function(){
                var v2490 = 1;
                var v2491 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2490;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2491);
            })();
        })());
    })((function(){
        var x1 = l890.fvalue(pv, 1, l5.value);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (x1==1?l4.value: l5.value);
    })());
    return (function(){
        var v2492 = 1;
        var v2493 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2492;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2493);
    })();
})();
var l892 = (new Symbol(make_lisp_string("FOO-2")));
(function(){
    (l892).fvalue = (function(){
        var func = (function (values,nargs,v2494){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v2496){
                    (function(){
                        var v2497 = 1;
                        var v2498 = [];
                        tbloop:
                        while (true) {
                            try {
                                switch(v2497){
                                case 1:
                                    (v2494 !== l5.value ? (function(){
                                        var f = v2494;
                                        return (typeof f === 'function'? f: f.fvalue)(pv, 0)
                                    })() : l5.value);
                                    l892.fvalue(pv, 1, (function (values,nargs){
                                        checkArgsAtMost(nargs, 0);
                                        return (function(){
                                            throw ({type: 'tagbody', id: v2498, label: 2, message: 'Attempt to GO to non-existing tag EXIT-2'})
                                        })();
                                    }));
                                    (function(){
                                        throw ({type: 'tagbody', id: v2498, label: 3, message: 'Attempt to GO to non-existing tag END'})
                                    })();
                                case 2:
                                    (v2496 = l4.value);
                                case 3:
                                default:
                                    break tbloop;
                                }
                            }
                            catch (jump) {
                                if (jump.type == 'tagbody' && jump.id == v2498)
                                    v2497 = jump.label;
                                else
                                    throw(jump);
                            }
                        }
                        return l5.value;
                    })();
                    return v2496;
                })(l5.value);
            })();
        });
        func.fname = 'FOO-2';
        return func;
    })();
    return l892;
})();
var l893 = QIList(l892,l5,l5);
(function(){
    (function(v2499){
        return (v2499 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l893);
            return (function(){
                var v2500 = 1;
                var v2501 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2500;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2501);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l893) : l122.fvalue(pv, 3, l4.value, l876, l893));
            return (function(){
                var v2502 = 1;
                var v2503 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2502;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2503);
            })();
        })());
    })(l892.fvalue(pv, 1, l5.value));
    return (function(){
        var v2504 = 1;
        var v2505 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2504;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2505);
    })();
})();
var l894 = QIList(l87,QIList(l502,QIList(QIList(l890,l5,QIList(l532,l890,42,l5),l5),l5),QIList(l890,l5),l5),42,l5);
(function(){
    (function(v2508){
        return (v2508 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l894);
            return (function(){
                var v2509 = 1;
                var v2510 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2509;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2510);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l894) : l122.fvalue(pv, 3, l4.value, l876, l894));
            return (function(){
                var v2511 = 1;
                var v2512 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2511;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2512);
            })();
        })());
    })(l87.fvalue(pv, 2, (function(v2507){
        return v2507(pv, 0);
    })((function (values,nargs){
        checkArgsAtMost(nargs, 0);
        return (function(){
            try {
            var v2506 = [];
                return (function(){
                    var values = mv;
                    throw ({type: 'block', id: v2506, values: 42, message: 'Return from unknown block FOO.'})
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == v2506)
                    return values.apply(this, forcemv(cf.values));
                else
                    throw cf;
            }
        })();
    })), 42));
    return (function(){
        var v2513 = 1;
        var v2514 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2513;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2514);
    })();
})();
var l895 = QIList(-5,-4,-3,999,1,2,3,4,5,l5);
var l896 = (new Symbol(make_lisp_string("OUT")));
var l897 = (new Symbol(make_lisp_string("ZFOO")));
var l898 = (new Symbol(make_lisp_string("N")));
var l899 = (new Symbol(make_lisp_string("RF")));
var l900 = (new Symbol(make_lisp_string("I")));
var l901 = QIList(l87,QIList(l519,QIList(QIList(l896,QIList(l104,l5),l5),l5),QIList(l505,QIList(QIList(l897,QIList(l898,l899,l900,l5),QIList(l399,QIList(l650,l898,0,l5),QIList(l200,QIList(l30,QIList(l6,l5,QIList(l532,l897,l898,l5),l5),l899,l5),QIList(l30,l898,l896,l5),QIList(l897,QIList(l23,l898,l5),l899,l900,l5),QIList(l30,QIList(l41,l898,l5),l896,l5),l5),QIList(l200,QIList(l30,999,l896,l5),QIList(l734,QIList(l161,l900,QIList(l47,l899,l5),l5),l5),QIList(l30,-999,l896,l5),l5),l5),l5),l5),QIList(l519,QIList(QIList(l899,QIList(l104,l5),l5),l5),QIList(l897,5,l899,3,l5),l896,l5),l5),l5),QIList(l328,l895,l5),l5);
(function(){
    (function(v2532){
        return (v2532 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l901);
            return (function(){
                var v2533 = 1;
                var v2534 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2533;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2534);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l901) : l122.fvalue(pv, 3, l4.value, l876, l901));
            return (function(){
                var v2535 = 1;
                var v2536 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2535;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2536);
            })();
        })());
    })(l87.fvalue(pv, 2, (function(v2515){
        return (function(){
            var v2516 = (function (values,nargs,v2517,v2518,v2519){
                checkArgs(nargs, 3);
                return (function(){
                    try {
                    var v2520 = [];
                        return ((function(){
                            var x1 = v2517;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            return (x1>0?l4.value: l5.value);
                        })() !== l5.value ? (function(){
                            (function(){
                                var v2521 = (function (values,nargs){
                                    checkArgsAtMost(nargs, 0);
                                    return (function(){
                                        var values = mv;
                                        throw ({type: 'block', id: v2520, values: v2517, message: 'Return from unknown block ZFOO.'})
                                    })();
                                });
                                var v2522 = ({car: v2521, cdr: v2518});
                                return (v2518 = v2522);
                            })();
                            (function(){
                                var v2523 = v2517;
                                var v2524 = ({car: v2523, cdr: v2515});
                                return (v2515 = v2524);
                            })();
                            v2516(pv, 3, l23.fvalue(pv, 1, v2517), v2518, v2519);
                            return (function(){
                                var v2525 = (function(){
                                    var x1 = v2517;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    return -x1;
                                })();
                                var v2526 = ({car: v2525, cdr: v2515});
                                return (v2515 = v2526);
                            })();
                        })() : (function(){
                            (function(){
                                var v2527 = 999;
                                var v2528 = ({car: v2527, cdr: v2515});
                                return (v2515 = v2528);
                            })();
                            (function(){
                                var f = l161.fvalue(pv, 2, v2519, l47.fvalue(pv, 1, v2518));
                                return (typeof f === 'function'? f: f.fvalue)(pv, 0)
                            })();
                            return (function(){
                                var v2529 = -999;
                                var v2530 = ({car: v2529, cdr: v2515});
                                return (v2515 = v2530);
                            })();
                        })());
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == v2520)
                            return values.apply(this, forcemv(cf.values));
                        else
                            throw cf;
                    }
                })();
            });
            return (function(v2531){
                v2516(pv, 3, 5, v2531, 3);
                return v2515;
            })(l104.fvalue(pv, 0));
        })();
    })(l104.fvalue(pv, 0)), l895));
    return (function(){
        var v2537 = 1;
        var v2538 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2537;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2538);
    })();
})();
var l902 = QIList(1,2,l5);
var l903 = QIList(l87,QIList(l328,l902,l5),QIList(l328,l902,l5),l5);
(function(){
    (function(v2539){
        return (v2539 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l903);
            return (function(){
                var v2540 = 1;
                var v2541 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2540;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2541);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l903) : l122.fvalue(pv, 3, l4.value, l876, l903));
            return (function(){
                var v2542 = 1;
                var v2543 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2542;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2543);
            })();
        })());
    })(l87.fvalue(pv, 2, l902, l902));
    return (function(){
        var v2544 = 1;
        var v2545 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2544;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2545);
    })();
})();
var l904 = QIList(l87,1,1,l5);
(function(){
    (function(v2546){
        return (v2546 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l904);
            return (function(){
                var v2547 = 1;
                var v2548 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2547;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2548);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l904) : l122.fvalue(pv, 3, l4.value, l876, l904));
            return (function(){
                var v2549 = 1;
                var v2550 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2549;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2550);
            })();
        })());
    })(l87.fvalue(pv, 2, 1, 1));
    return (function(){
        var v2551 = 1;
        var v2552 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2551;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2552);
    })();
})();
var l905 = make_lisp_string("abc");
var l906 = QIList(l87,l905,l905,l5);
(function(){
    (function(v2553){
        return (v2553 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l906);
            return (function(){
                var v2554 = 1;
                var v2555 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2554;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2555);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l906) : l122.fvalue(pv, 3, l4.value, l876, l906));
            return (function(){
                var v2556 = 1;
                var v2557 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2556;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2557);
            })();
        })());
    })(l87.fvalue(pv, 2, l905, l905));
    return (function(){
        var v2558 = 1;
        var v2559 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2558;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2559);
    })();
})();
var l907 = make_lisp_string("def");
var l908 = QIList(l27,QIList(l87,l905,l907,l5),l5);
(function(){
    (function(v2560){
        return (v2560 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l908);
            return (function(){
                var v2561 = 1;
                var v2562 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2561;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2562);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l908) : l122.fvalue(pv, 3, l4.value, l876, l908));
            return (function(){
                var v2563 = 1;
                var v2564 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2563;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2564);
            })();
        })());
    })(l27.fvalue(pv, 1, l87.fvalue(pv, 2, l905, l907)));
    return (function(){
        var v2565 = 1;
        var v2566 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2565;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2566);
    })();
})();
var l909 = make_lisp_string("Abc");
var l910 = QIList(l27,QIList(l87,l909,l905,l5),l5);
(function(){
    (function(v2567){
        return (v2567 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l910);
            return (function(){
                var v2568 = 1;
                var v2569 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2568;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2569);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l910) : l122.fvalue(pv, 3, l4.value, l876, l910));
            return (function(){
                var v2570 = 1;
                var v2571 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2570;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2571);
            })();
        })());
    })(l27.fvalue(pv, 1, l87.fvalue(pv, 2, l909, l905)));
    return (function(){
        var v2572 = 1;
        var v2573 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2572;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2573);
    })();
})();
var l911 = QIList(l40,1,2,l5);
var l912 = QIList(l19,QIList(l289,QIList(l328,l911,l5),l5),3,l5);
(function(){
    (function(v2574){
        return (v2574 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l912);
            return (function(){
                var v2575 = 1;
                var v2576 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2575;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2576);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l912) : l122.fvalue(pv, 3, l4.value, l876, l912));
            return (function(){
                var v2577 = 1;
                var v2578 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2577;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2578);
            })();
        })());
    })((function(){
        var x1 = l289.fvalue(pv, 1, l911);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (x1==3?l4.value: l5.value);
    })());
    return (function(){
        var v2579 = 1;
        var v2580 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2579;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2580);
    })();
})();
var l913 = make_lisp_string("a");
var l914 = QIList(l88,l913,QIList(l122,l5,l913,l5),l5);
(function(){
    (function(v2581){
        return (v2581 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l914);
            return (function(){
                var v2582 = 1;
                var v2583 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2582;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2583);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l914) : l122.fvalue(pv, 3, l4.value, l876, l914));
            return (function(){
                var v2584 = 1;
                var v2585 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2584;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2585);
            })();
        })());
    })(l88.fvalue(pv, 2, l913, l122.fvalue(pv, 2, l5.value, l913)));
    return (function(){
        var v2586 = 1;
        var v2587 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2586;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2587);
    })();
})();
var l915 = make_lisp_string("~~");
var l916 = QIList(l88,l254,QIList(l122,l5,l915,l5),l5);
(function(){
    (function(v2588){
        return (v2588 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l916);
            return (function(){
                var v2589 = 1;
                var v2590 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2589;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2590);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l916) : l122.fvalue(pv, 3, l4.value, l876, l916));
            return (function(){
                var v2591 = 1;
                var v2592 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2591;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2592);
            })();
        })());
    })(l88.fvalue(pv, 2, l254, l122.fvalue(pv, 2, l5.value, l915)));
    return (function(){
        var v2593 = 1;
        var v2594 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2593;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2594);
    })();
})();
var l917 = make_lisp_string("a~a");
var l918 = make_lisp_string("a~~a");
var l919 = QIList(l88,l917,QIList(l122,l5,l918,l5),l5);
(function(){
    (function(v2595){
        return (v2595 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l919);
            return (function(){
                var v2596 = 1;
                var v2597 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2596;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2597);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l919) : l122.fvalue(pv, 3, l4.value, l876, l919));
            return (function(){
                var v2598 = 1;
                var v2599 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2598;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2599);
            })();
        })());
    })(l88.fvalue(pv, 2, l917, l122.fvalue(pv, 2, l5.value, l918)));
    return (function(){
        var v2600 = 1;
        var v2601 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2600;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2601);
    })();
})();
var l920 = make_lisp_string("a\na");
var l921 = make_lisp_string("a~%a");
var l922 = QIList(l88,l920,QIList(l122,l5,l921,l5),l5);
(function(){
    (function(v2602){
        return (v2602 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l922);
            return (function(){
                var v2603 = 1;
                var v2604 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2603;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2604);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l922) : l122.fvalue(pv, 3, l4.value, l876, l922));
            return (function(){
                var v2605 = 1;
                var v2606 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2605;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2606);
            })();
        })());
    })(l88.fvalue(pv, 2, l920, l122.fvalue(pv, 2, l5.value, l921)));
    return (function(){
        var v2607 = 1;
        var v2608 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2607;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2608);
    })();
})();
var l923 = make_lisp_string("this is foo");
var l924 = make_lisp_string("this is ~a");
var l925 = make_lisp_string("foo");
var l926 = QIList(l88,l923,QIList(l122,l5,l924,l925,l5),l5);
(function(){
    (function(v2609){
        return (v2609 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l926);
            return (function(){
                var v2610 = 1;
                var v2611 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2610;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2611);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l926) : l122.fvalue(pv, 3, l4.value, l876, l926));
            return (function(){
                var v2612 = 1;
                var v2613 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2612;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2613);
            })();
        })());
    })(l88.fvalue(pv, 2, l923, l122.fvalue(pv, 3, l5.value, l924, l925)));
    return (function(){
        var v2614 = 1;
        var v2615 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2614;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2615);
    })();
})();
var l927 = make_lisp_string("this is \"foo\"");
var l928 = make_lisp_string("this is ~S");
var l929 = QIList(l88,l927,QIList(l122,l5,l928,l925,l5),l5);
(function(){
    (function(v2616){
        return (v2616 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l929);
            return (function(){
                var v2617 = 1;
                var v2618 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2617;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2618);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l929) : l122.fvalue(pv, 3, l4.value, l876, l929));
            return (function(){
                var v2619 = 1;
                var v2620 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2619;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2620);
            })();
        })());
    })(l88.fvalue(pv, 2, l927, l122.fvalue(pv, 3, l5.value, l928, l925)));
    return (function(){
        var v2621 = 1;
        var v2622 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2621;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2622);
    })();
})();
var l930 = (new Symbol(make_lisp_string("TOTAL")));
var l931 = QIList(l519,QIList(QIList(l930,0,l5),l5),QIList(l32,QIList(l898,6,l5),QIList(l28,l930,l898,l5),l5),QIList(l19,l930,15,l5),l5);
(function(){
    (function(v2631){
        return (v2631 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l931);
            return (function(){
                var v2632 = 1;
                var v2633 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2632;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2633);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l931) : l122.fvalue(pv, 3, l4.value, l876, l931));
            return (function(){
                var v2634 = 1;
                var v2635 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2634;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2635);
            })();
        })());
    })((function(v2623){
        (function(){
            return (function(v2625,v2626){
                (function(){
                    while((function(){
                        var x1 = v2625;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2626;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1<x2?l4.value: l5.value);
                    })() !== l5.value){
                        (function(){
                            (function(){
                                var v2627 = v2625;
                                var v2628 = (function(){
                                    var x1 = v2623;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v2627;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })();
                                return (v2623 = v2628);
                            })();
                            return l5.value;
                        })();
                        (function(){
                            var v2629 = 1;
                            var v2630 = (function(){
                                var x1 = v2625;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v2629;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })();
                            return (v2625 = v2630);
                        })();
                    }return l5.value;
                })();
                return l5.value;
            })(0,6);
        })();
        return (function(){
            var x1 = v2623;
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==15?l4.value: l5.value);
        })();
    })(0));
    return (function(){
        var v2636 = 1;
        var v2637 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2636;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2637);
    })();
})();
var l932 = QIList(1,2,3,4,5,l5);
var l933 = QIList(l519,QIList(QIList(l930,0,l5),l5),QIList(l31,QIList(l898,QIList(l328,l932,l5),l5),QIList(l28,l930,l898,l5),l5),QIList(l19,l930,15,l5),l5);
(function(){
    (function(v2644){
        return (v2644 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l933);
            return (function(){
                var v2645 = 1;
                var v2646 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2645;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2646);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l933) : l122.fvalue(pv, 3, l4.value, l876, l933));
            return (function(){
                var v2647 = 1;
                var v2648 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2647;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2648);
            })();
        })());
    })((function(v2638){
        (function(){
            return (function(v2640,v2641){
                (function(){
                    while(v2640 !== l5.value){
                        (v2641 = (function(){
                            var tmp = v2640;
                            return tmp === l5.value? l5.value: tmp.car;
                        })());
                        (function(){
                            (function(){
                                var v2642 = v2641;
                                var v2643 = (function(){
                                    var x1 = v2638;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v2642;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })();
                                return (v2638 = v2643);
                            })();
                            return l5.value;
                        })();
                        (v2640 = (function(){
                            var tmp = v2640;
                            return tmp === l5.value? l5.value: tmp.cdr;
                        })());
                    }return l5.value;
                })();
                return l5.value;
            })(l932,l5.value);
        })();
        return (function(){
            var x1 = v2638;
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==15?l4.value: l5.value);
        })();
    })(0));
    return (function(){
        var v2649 = 1;
        var v2650 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2649;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2650);
    })();
})();
var l934 = (new Symbol(make_lisp_string("A")));
var l935 = (new Symbol(make_lisp_string("B")));
var l936 = QIList(l49,QIList(QIList(l934,0,l935,l5),QIList(l935,1,QIList(l40,l934,l935,l5),l5),QIList(l898,0,QIList(l22,l898,l5),l5),l5),QIList(QIList(l19,l898,10,l5),QIList(l19,l934,55,l5),l5),l5);
(function(){
    (function(v2659){
        return (v2659 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l936);
            return (function(){
                var v2660 = 1;
                var v2661 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2660;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2661);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l936) : l122.fvalue(pv, 3, l4.value, l876, l936));
            return (function(){
                var v2662 = 1;
                var v2663 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2662;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2663);
            })();
        })());
    })((function(){
        return (function(v2652,v2653,v2654){
            return (function(){
                try {
                var v2655 = [];
                    return (function(){
                        while(l4.value !== l5.value){
                            ((function(){
                                var x1 = v2654;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                return (x1==10?l4.value: l5.value);
                            })() !== l5.value ? (function(){
                                throw ({type: 'block', id: v2655, values: (function(){
                                    var x1 = v2652;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    return (x1==55?l4.value: l5.value);
                                })(), message: 'Return from unknown block NIL.'})
                            })() : l5.value);
                            l5.value;
                            (function(v2656,v2657,v2658){
                                return (v2652 = v2656, v2653 = v2657, v2654 = v2658);
                            })(v2653,(function(){
                                var x1 = v2652;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v2653;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })(),l22.fvalue(pv, 1, v2654));
                        }return l5.value;
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == v2655)
                        return cf.values;
                    else
                        throw cf;
                }
            })();
        })(0,1,0);
    })());
    return (function(){
        var v2664 = 1;
        var v2665 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2664;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2665);
    })();
})();
var l937 = QIList(l50,QIList(QIList(l934,0,l935,l5),QIList(l935,1,QIList(l40,l934,l935,l5),l5),QIList(l898,0,QIList(l22,l898,l5),l5),l5),QIList(QIList(l19,l898,10,l5),QIList(l19,l934,512,l5),l5),l5);
(function(){
    (function(v2671){
        return (v2671 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l937);
            return (function(){
                var v2672 = 1;
                var v2673 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2672;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2673);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l937) : l122.fvalue(pv, 3, l4.value, l876, l937));
            return (function(){
                var v2674 = 1;
                var v2675 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2674;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2675);
            })();
        })());
    })((function(){
        return (function(){
            var v2667 = 0;
            var v2668 = 1;
            var v2669 = 0;
            return (function(){
                try {
                var v2670 = [];
                    return (function(){
                        while(l4.value !== l5.value){
                            ((function(){
                                var x1 = v2669;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                return (x1==10?l4.value: l5.value);
                            })() !== l5.value ? (function(){
                                throw ({type: 'block', id: v2670, values: (function(){
                                    var x1 = v2667;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    return (x1==512?l4.value: l5.value);
                                })(), message: 'Return from unknown block NIL.'})
                            })() : l5.value);
                            l5.value;
                            (v2667 = v2668, v2668 = (function(){
                                var x1 = v2667;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v2668;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })(), v2669 = l22.fvalue(pv, 1, v2669));
                        }return l5.value;
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == v2670)
                        return cf.values;
                    else
                        throw cf;
                }
            })();
        })();
    })());
    return (function(){
        var v2676 = 1;
        var v2677 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2676;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2677);
    })();
})();
var l938 = QIList(3,4,l5);
var l939 = (new Symbol(make_lisp_string("BAR")));
var l940 = QIList(l522,QIList(QIList(l890,QIList(l104,QIList(l328,l902,l5),QIList(l328,l938,l5),l5),l5),QIList(l939,QIList(l186,l890,l5),l5),l5),QIList(l201,QIList(l141,l890,l5),0,l5),QIList(l27,QIList(l19,QIList(l141,QIList(l141,l890,l5),l5),QIList(l141,QIList(l141,l939,l5),l5),l5),l5),l5);
(function(){
    (function(v2680){
        return (v2680 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l940);
            return (function(){
                var v2681 = 1;
                var v2682 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2681;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2682);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l940) : l122.fvalue(pv, 3, l4.value, l876, l940));
            return (function(){
                var v2683 = 1;
                var v2684 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2683;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2684);
            })();
        })());
    })((function(){
        var v2678 = l104.fvalue(pv, 2, l902, l938);
        var v2679 = l186.fvalue(pv, 1, v2678);
        (function(){
            var x = (function(){
                var tmp = v2678;
                return tmp === l5.value? l5.value: tmp.car;
            })();
            if (typeof x != 'object')
                throw 'The value ' + x + ' is not a type object.';
            return (x.car = 0, x);
        })();
        return l27.fvalue(pv, 1, (function(){
            var x1 = (function(){
                var tmp = (function(){
                    var tmp = v2678;
                    return tmp === l5.value? l5.value: tmp.car;
                })();
                return tmp === l5.value? l5.value: tmp.car;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = (function(){
                var tmp = (function(){
                    var tmp = v2679;
                    return tmp === l5.value? l5.value: tmp.car;
                })();
                return tmp === l5.value? l5.value: tmp.car;
            })();
            if (typeof x2 !== 'number') throw 'Not a number!';
            return (x1==x2?l4.value: l5.value);
        })());
    })());
    return (function(){
        var v2685 = 1;
        var v2686 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2685;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2686);
    })();
})();
var l941 = QIList(1,2,3,l5);
var l942 = QIList(l187,QIList(l328,l941,l5),QIList(l328,l941,l5),l5);
(function(){
    (function(v2687){
        return (v2687 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l942);
            return (function(){
                var v2688 = 1;
                var v2689 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2688;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2689);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l942) : l122.fvalue(pv, 3, l4.value, l876, l942));
            return (function(){
                var v2690 = 1;
                var v2691 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2690;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2691);
            })();
        })());
    })(l187.fvalue(pv, 2, l941, l941));
    return (function(){
        var v2692 = 1;
        var v2693 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2692;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2693);
    })();
})();
var l943 = QIList(1,QIList(2,l938,5,l5),6,l5);
var l944 = QIList(l187,QIList(l328,l943,l5),QIList(l328,l943,l5),l5);
(function(){
    (function(v2694){
        return (v2694 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l944);
            return (function(){
                var v2695 = 1;
                var v2696 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2695;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2696);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l944) : l122.fvalue(pv, 3, l4.value, l876, l944));
            return (function(){
                var v2697 = 1;
                var v2698 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2697;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2698);
            })();
        })());
    })(l187.fvalue(pv, 2, l943, l943));
    return (function(){
        var v2699 = 1;
        var v2700 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2699;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2700);
    })();
})();
var l945 = QIList(l187,QIList(l137,1,2,l5),QIList(l137,2,3,l5),l79,QIList(l6,QIList(l934,l935,l5),QIList(l27,QIList(l19,l934,l935,l5),l5),l5),l5);
(function(){
    (function(v2703){
        return (v2703 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l945);
            return (function(){
                var v2704 = 1;
                var v2705 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2704;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2705);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l945) : l122.fvalue(pv, 3, l4.value, l876, l945));
            return (function(){
                var v2706 = 1;
                var v2707 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2706;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2707);
            })();
        })());
    })(l187.fvalue(pv, 4, ({car: 1, cdr: 2}), ({car: 2, cdr: 3}), l79.value, (function (values,nargs,v2701,v2702){
        checkArgs(nargs, 2);
        return l27.fvalue(values, 1, (function(){
            var x1 = v2701;
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2702;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return (x1==x2?l4.value: l5.value);
        })());
    })));
    return (function(){
        var v2708 = 1;
        var v2709 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2708;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2709);
    })();
})();
var l946 = QIList(1,2,3,4,5,6,7,8,9,10,l5);
var l947 = (new Symbol(make_lisp_string("NUMS")));
var l948 = QIList(l19,QIList(l143,l947,l5),1,l5);
var l949 = QIList(l19,QIList(l144,l947,l5),2,l5);
var l950 = QIList(l19,QIList(l146,l947,l5),3,l5);
var l951 = QIList(l19,QIList(l148,l947,l5),4,l5);
var l952 = QIList(l19,QIList(l150,l947,l5),5,l5);
var l953 = QIList(l19,QIList(l152,l947,l5),6,l5);
var l954 = QIList(l19,QIList(l153,l947,l5),7,l5);
var l955 = QIList(l19,QIList(l154,l947,l5),8,l5);
var l956 = QIList(l19,QIList(l155,l947,l5),9,l5);
var l957 = QIList(l19,QIList(l156,l947,l5),10,l5);
(function(v2710){
    (function(){
        (function(v2711){
            return (v2711 !== l5.value ? (function(){
                l122.fvalue(pv, 3, l4.value, l873, l948);
                return (function(){
                    var v2712 = 1;
                    var v2713 = (function(){
                        var x1 = (function(){
                            var symbol = l863;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2712;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l863).value = v2713);
                })();
            })() : (function(){
                ((function(){
                    var symbol = l867;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l948) : l122.fvalue(pv, 3, l4.value, l876, l948));
                return (function(){
                    var v2714 = 1;
                    var v2715 = (function(){
                        var x1 = (function(){
                            var symbol = l864;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2714;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l864).value = v2715);
                })();
            })());
        })((function(){
            var x1 = l143.fvalue(pv, 1, v2710);
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==1?l4.value: l5.value);
        })());
        return (function(){
            var v2716 = 1;
            var v2717 = (function(){
                var x1 = (function(){
                    var symbol = l862;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2716;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l862).value = v2717);
        })();
    })();
    (function(){
        (function(v2718){
            return (v2718 !== l5.value ? (function(){
                l122.fvalue(pv, 3, l4.value, l873, l949);
                return (function(){
                    var v2719 = 1;
                    var v2720 = (function(){
                        var x1 = (function(){
                            var symbol = l863;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2719;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l863).value = v2720);
                })();
            })() : (function(){
                ((function(){
                    var symbol = l867;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l949) : l122.fvalue(pv, 3, l4.value, l876, l949));
                return (function(){
                    var v2721 = 1;
                    var v2722 = (function(){
                        var x1 = (function(){
                            var symbol = l864;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2721;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l864).value = v2722);
                })();
            })());
        })((function(){
            var x1 = l144.fvalue(pv, 1, v2710);
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==2?l4.value: l5.value);
        })());
        return (function(){
            var v2723 = 1;
            var v2724 = (function(){
                var x1 = (function(){
                    var symbol = l862;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2723;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l862).value = v2724);
        })();
    })();
    (function(){
        (function(v2725){
            return (v2725 !== l5.value ? (function(){
                l122.fvalue(pv, 3, l4.value, l873, l950);
                return (function(){
                    var v2726 = 1;
                    var v2727 = (function(){
                        var x1 = (function(){
                            var symbol = l863;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2726;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l863).value = v2727);
                })();
            })() : (function(){
                ((function(){
                    var symbol = l867;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l950) : l122.fvalue(pv, 3, l4.value, l876, l950));
                return (function(){
                    var v2728 = 1;
                    var v2729 = (function(){
                        var x1 = (function(){
                            var symbol = l864;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2728;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l864).value = v2729);
                })();
            })());
        })((function(){
            var x1 = l146.fvalue(pv, 1, v2710);
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==3?l4.value: l5.value);
        })());
        return (function(){
            var v2730 = 1;
            var v2731 = (function(){
                var x1 = (function(){
                    var symbol = l862;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2730;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l862).value = v2731);
        })();
    })();
    (function(){
        (function(v2732){
            return (v2732 !== l5.value ? (function(){
                l122.fvalue(pv, 3, l4.value, l873, l951);
                return (function(){
                    var v2733 = 1;
                    var v2734 = (function(){
                        var x1 = (function(){
                            var symbol = l863;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2733;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l863).value = v2734);
                })();
            })() : (function(){
                ((function(){
                    var symbol = l867;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l951) : l122.fvalue(pv, 3, l4.value, l876, l951));
                return (function(){
                    var v2735 = 1;
                    var v2736 = (function(){
                        var x1 = (function(){
                            var symbol = l864;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2735;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l864).value = v2736);
                })();
            })());
        })((function(){
            var x1 = l148.fvalue(pv, 1, v2710);
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==4?l4.value: l5.value);
        })());
        return (function(){
            var v2737 = 1;
            var v2738 = (function(){
                var x1 = (function(){
                    var symbol = l862;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2737;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l862).value = v2738);
        })();
    })();
    (function(){
        (function(v2739){
            return (v2739 !== l5.value ? (function(){
                l122.fvalue(pv, 3, l4.value, l873, l952);
                return (function(){
                    var v2740 = 1;
                    var v2741 = (function(){
                        var x1 = (function(){
                            var symbol = l863;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2740;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l863).value = v2741);
                })();
            })() : (function(){
                ((function(){
                    var symbol = l867;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l952) : l122.fvalue(pv, 3, l4.value, l876, l952));
                return (function(){
                    var v2742 = 1;
                    var v2743 = (function(){
                        var x1 = (function(){
                            var symbol = l864;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2742;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l864).value = v2743);
                })();
            })());
        })((function(){
            var x1 = l150.fvalue(pv, 1, v2710);
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==5?l4.value: l5.value);
        })());
        return (function(){
            var v2744 = 1;
            var v2745 = (function(){
                var x1 = (function(){
                    var symbol = l862;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2744;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l862).value = v2745);
        })();
    })();
    (function(){
        (function(v2746){
            return (v2746 !== l5.value ? (function(){
                l122.fvalue(pv, 3, l4.value, l873, l953);
                return (function(){
                    var v2747 = 1;
                    var v2748 = (function(){
                        var x1 = (function(){
                            var symbol = l863;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2747;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l863).value = v2748);
                })();
            })() : (function(){
                ((function(){
                    var symbol = l867;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l953) : l122.fvalue(pv, 3, l4.value, l876, l953));
                return (function(){
                    var v2749 = 1;
                    var v2750 = (function(){
                        var x1 = (function(){
                            var symbol = l864;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2749;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l864).value = v2750);
                })();
            })());
        })((function(){
            var x1 = l152.fvalue(pv, 1, v2710);
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==6?l4.value: l5.value);
        })());
        return (function(){
            var v2751 = 1;
            var v2752 = (function(){
                var x1 = (function(){
                    var symbol = l862;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2751;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l862).value = v2752);
        })();
    })();
    (function(){
        (function(v2753){
            return (v2753 !== l5.value ? (function(){
                l122.fvalue(pv, 3, l4.value, l873, l954);
                return (function(){
                    var v2754 = 1;
                    var v2755 = (function(){
                        var x1 = (function(){
                            var symbol = l863;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2754;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l863).value = v2755);
                })();
            })() : (function(){
                ((function(){
                    var symbol = l867;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l954) : l122.fvalue(pv, 3, l4.value, l876, l954));
                return (function(){
                    var v2756 = 1;
                    var v2757 = (function(){
                        var x1 = (function(){
                            var symbol = l864;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2756;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l864).value = v2757);
                })();
            })());
        })((function(){
            var x1 = l153.fvalue(pv, 1, v2710);
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==7?l4.value: l5.value);
        })());
        return (function(){
            var v2758 = 1;
            var v2759 = (function(){
                var x1 = (function(){
                    var symbol = l862;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2758;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l862).value = v2759);
        })();
    })();
    (function(){
        (function(v2760){
            return (v2760 !== l5.value ? (function(){
                l122.fvalue(pv, 3, l4.value, l873, l955);
                return (function(){
                    var v2761 = 1;
                    var v2762 = (function(){
                        var x1 = (function(){
                            var symbol = l863;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2761;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l863).value = v2762);
                })();
            })() : (function(){
                ((function(){
                    var symbol = l867;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l955) : l122.fvalue(pv, 3, l4.value, l876, l955));
                return (function(){
                    var v2763 = 1;
                    var v2764 = (function(){
                        var x1 = (function(){
                            var symbol = l864;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2763;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l864).value = v2764);
                })();
            })());
        })((function(){
            var x1 = l154.fvalue(pv, 1, v2710);
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==8?l4.value: l5.value);
        })());
        return (function(){
            var v2765 = 1;
            var v2766 = (function(){
                var x1 = (function(){
                    var symbol = l862;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2765;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l862).value = v2766);
        })();
    })();
    (function(){
        (function(v2767){
            return (v2767 !== l5.value ? (function(){
                l122.fvalue(pv, 3, l4.value, l873, l956);
                return (function(){
                    var v2768 = 1;
                    var v2769 = (function(){
                        var x1 = (function(){
                            var symbol = l863;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2768;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l863).value = v2769);
                })();
            })() : (function(){
                ((function(){
                    var symbol = l867;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l956) : l122.fvalue(pv, 3, l4.value, l876, l956));
                return (function(){
                    var v2770 = 1;
                    var v2771 = (function(){
                        var x1 = (function(){
                            var symbol = l864;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2770;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l864).value = v2771);
                })();
            })());
        })((function(){
            var x1 = l155.fvalue(pv, 1, v2710);
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==9?l4.value: l5.value);
        })());
        return (function(){
            var v2772 = 1;
            var v2773 = (function(){
                var x1 = (function(){
                    var symbol = l862;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2772;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l862).value = v2773);
        })();
    })();
    return (function(){
        (function(v2774){
            return (v2774 !== l5.value ? (function(){
                l122.fvalue(pv, 3, l4.value, l873, l957);
                return (function(){
                    var v2775 = 1;
                    var v2776 = (function(){
                        var x1 = (function(){
                            var symbol = l863;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2775;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l863).value = v2776);
                })();
            })() : (function(){
                ((function(){
                    var symbol = l867;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l957) : l122.fvalue(pv, 3, l4.value, l876, l957));
                return (function(){
                    var v2777 = 1;
                    var v2778 = (function(){
                        var x1 = (function(){
                            var symbol = l864;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2777;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l864).value = v2778);
                })();
            })());
        })((function(){
            var x1 = l156.fvalue(pv, 1, v2710);
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==10?l4.value: l5.value);
        })());
        return (function(){
            var v2779 = 1;
            var v2780 = (function(){
                var x1 = (function(){
                    var symbol = l862;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2779;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l862).value = v2780);
        })();
    })();
})(l946);
var l958 = QIList(l188,l935,l934,l5);
var l959 = QIList(l188,l934,l934,l5);
(function(){
    var v2781 = l104.fvalue(pv, 3, 1, 2, 3);
    var v2782 = (function(){
        var tmp = v2781;
        return tmp === l5.value? l5.value: tmp.cdr;
    })();
    (function(){
        (function(v2783){
            return (v2783 !== l5.value ? (function(){
                l122.fvalue(pv, 3, l4.value, l873, l958);
                return (function(){
                    var v2784 = 1;
                    var v2785 = (function(){
                        var x1 = (function(){
                            var symbol = l863;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2784;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l863).value = v2785);
                })();
            })() : (function(){
                ((function(){
                    var symbol = l867;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l958) : l122.fvalue(pv, 3, l4.value, l876, l958));
                return (function(){
                    var v2786 = 1;
                    var v2787 = (function(){
                        var x1 = (function(){
                            var symbol = l864;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2786;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l864).value = v2787);
                })();
            })());
        })(l188.fvalue(pv, 2, v2782, v2781));
        return (function(){
            var v2788 = 1;
            var v2789 = (function(){
                var x1 = (function(){
                    var symbol = l862;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2788;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l862).value = v2789);
        })();
    })();
    return (function(){
        (function(v2790){
            return (v2790 !== l5.value ? (function(){
                l122.fvalue(pv, 3, l4.value, l873, l959);
                return (function(){
                    var v2791 = 1;
                    var v2792 = (function(){
                        var x1 = (function(){
                            var symbol = l863;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2791;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l863).value = v2792);
                })();
            })() : (function(){
                ((function(){
                    var symbol = l867;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l959) : l122.fvalue(pv, 3, l4.value, l876, l959));
                return (function(){
                    var v2793 = 1;
                    var v2794 = (function(){
                        var x1 = (function(){
                            var symbol = l864;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2793;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l864).value = v2794);
                })();
            })());
        })(l188.fvalue(pv, 2, v2781, v2781));
        return (function(){
            var v2795 = 1;
            var v2796 = (function(){
                var x1 = (function(){
                    var symbol = l862;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2795;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l862).value = v2796);
        })();
    })();
})();
var l960 = QIList(l188,QIList(l328,l934,l5),QIList(l137,QIList(l328,l935,l5),QIList(l328,l934,l5),l5),l5);
(function(){
    (function(v2797){
        return (v2797 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l960);
            return (function(){
                var v2798 = 1;
                var v2799 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2798;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2799);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l960) : l122.fvalue(pv, 3, l4.value, l876, l960));
            return (function(){
                var v2800 = 1;
                var v2801 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2800;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2801);
            })();
        })());
    })(l188.fvalue(pv, 2, l934, ({car: l935, cdr: l934})));
    return (function(){
        var v2802 = 1;
        var v2803 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2802;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2803);
    })();
})();
var l961 = QIList(QIList(1,2),QIList(3,4),l5);
var l962 = QIList(QIList(3,4),l5);
var l963 = QIList(l87,QIList(l328,l961,l5),QIList(l197,1,2,QIList(l328,l962,l5),l5),l5);
(function(){
    (function(v2804){
        return (v2804 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l963);
            return (function(){
                var v2805 = 1;
                var v2806 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2805;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2806);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l963) : l122.fvalue(pv, 3, l4.value, l876, l963));
            return (function(){
                var v2807 = 1;
                var v2808 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2807;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2808);
            })();
        })());
    })(l87.fvalue(pv, 2, l961, l197.fvalue(pv, 3, 1, 2, l962)));
    return (function(){
        var v2809 = 1;
        var v2810 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2809;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2810);
    })();
})();
var l964 = QIList(QIList(1,2),l5);
var l965 = QIList(l87,QIList(l328,l964,l5),QIList(l197,1,2,l5,l5),l5);
(function(){
    (function(v2811){
        return (v2811 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l965);
            return (function(){
                var v2812 = 1;
                var v2813 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2812;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2813);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l965) : l122.fvalue(pv, 3, l4.value, l876, l965));
            return (function(){
                var v2814 = 1;
                var v2815 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2814;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2815);
            })();
        })());
    })(l87.fvalue(pv, 2, l964, l197.fvalue(pv, 3, 1, 2, l5.value)));
    return (function(){
        var v2816 = 1;
        var v2817 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2816;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2817);
    })();
})();
var l966 = QIList(QIList(1,3),QIList(0,2),l5);
var l967 = QIList(0,1,l5);
var l968 = QIList(2,3,l5);
var l969 = QIList(l87,QIList(l328,l966,l5),QIList(l198,QIList(l328,l967,l5),QIList(l328,l968,l5),l5),l5);
(function(){
    (function(v2818){
        return (v2818 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l969);
            return (function(){
                var v2819 = 1;
                var v2820 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2819;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2820);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l969) : l122.fvalue(pv, 3, l4.value, l876, l969));
            return (function(){
                var v2821 = 1;
                var v2822 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2821;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2822);
            })();
        })());
    })(l87.fvalue(pv, 2, l966, l198.fvalue(pv, 2, l967, l968)));
    return (function(){
        var v2823 = 1;
        var v2824 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2823;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2824);
    })();
})();
var l970 = QIList(QIList(1,2),QIList(l934,l935),l5);
var l971 = QIList(1,l5);
var l972 = QIList(2,l5);
var l973 = QIList(QIList(l934,l935),l5);
var l974 = QIList(l87,QIList(l328,l970,l5),QIList(l198,QIList(l328,l971,l5),QIList(l328,l972,l5),QIList(l328,l973,l5),l5),l5);
(function(){
    (function(v2825){
        return (v2825 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l974);
            return (function(){
                var v2826 = 1;
                var v2827 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2826;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2827);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l974) : l122.fvalue(pv, 3, l4.value, l876, l974));
            return (function(){
                var v2828 = 1;
                var v2829 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2828;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2829);
            })();
        })());
    })(l87.fvalue(pv, 2, l970, l198.fvalue(pv, 3, l971, l972, l973)));
    return (function(){
        var v2830 = 1;
        var v2831 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2830;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2831);
    })();
})();
var l975 = (new Symbol(make_lisp_string("ALIST")));
var l976 = (new Symbol(make_lisp_string("COPY")));
var l977 = QIList(l27,QIList(l26,l975,l976,l5),l5);
var l978 = QIList(l27,QIList(l26,QIList(l141,l975,l5),QIList(l141,l976,l5),l5),l5);
var l979 = QIList(l87,l975,l976,l5);
(function(){
    var v2832 = l961;
    var v2833 = l199.fvalue(pv, 1, v2832);
    (function(){
        (function(v2834){
            return (v2834 !== l5.value ? (function(){
                l122.fvalue(pv, 3, l4.value, l873, l977);
                return (function(){
                    var v2835 = 1;
                    var v2836 = (function(){
                        var x1 = (function(){
                            var symbol = l863;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2835;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l863).value = v2836);
                })();
            })() : (function(){
                ((function(){
                    var symbol = l867;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l977) : l122.fvalue(pv, 3, l4.value, l876, l977));
                return (function(){
                    var v2837 = 1;
                    var v2838 = (function(){
                        var x1 = (function(){
                            var symbol = l864;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2837;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l864).value = v2838);
                })();
            })());
        })(l27.fvalue(pv, 1, l26.fvalue(pv, 2, v2832, v2833)));
        return (function(){
            var v2839 = 1;
            var v2840 = (function(){
                var x1 = (function(){
                    var symbol = l862;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2839;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l862).value = v2840);
        })();
    })();
    (function(){
        (function(v2841){
            return (v2841 !== l5.value ? (function(){
                l122.fvalue(pv, 3, l4.value, l873, l978);
                return (function(){
                    var v2842 = 1;
                    var v2843 = (function(){
                        var x1 = (function(){
                            var symbol = l863;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2842;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l863).value = v2843);
                })();
            })() : (function(){
                ((function(){
                    var symbol = l867;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l978) : l122.fvalue(pv, 3, l4.value, l876, l978));
                return (function(){
                    var v2844 = 1;
                    var v2845 = (function(){
                        var x1 = (function(){
                            var symbol = l864;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2844;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l864).value = v2845);
                })();
            })());
        })(l27.fvalue(pv, 1, l26.fvalue(pv, 2, (function(){
            var tmp = v2832;
            return tmp === l5.value? l5.value: tmp.car;
        })(), (function(){
            var tmp = v2833;
            return tmp === l5.value? l5.value: tmp.car;
        })())));
        return (function(){
            var v2846 = 1;
            var v2847 = (function(){
                var x1 = (function(){
                    var symbol = l862;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2846;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l862).value = v2847);
        })();
    })();
    return (function(){
        (function(v2848){
            return (v2848 !== l5.value ? (function(){
                l122.fvalue(pv, 3, l4.value, l873, l979);
                return (function(){
                    var v2849 = 1;
                    var v2850 = (function(){
                        var x1 = (function(){
                            var symbol = l863;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2849;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l863).value = v2850);
                })();
            })() : (function(){
                ((function(){
                    var symbol = l867;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l979) : l122.fvalue(pv, 3, l4.value, l876, l979));
                return (function(){
                    var v2851 = 1;
                    var v2852 = (function(){
                        var x1 = (function(){
                            var symbol = l864;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2851;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l864).value = v2852);
                })();
            })());
        })(l87.fvalue(pv, 2, v2832, v2833));
        return (function(){
            var v2853 = 1;
            var v2854 = (function(){
                var x1 = (function(){
                    var symbol = l862;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2853;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l862).value = v2854);
        })();
    })();
})();
var l980 = QIList(1,2);
var l981 = QIList(l87,QIList(l107,1,l975,l5),QIList(l328,l980,l5),l5);
var l982 = QIList(l87,QIList(l196,2,l975,l5),QIList(l328,l980,l5),l5);
var l983 = QIList(l27,QIList(l107,2,l975,l5),l5);
var l984 = QIList(l27,QIList(l196,1,l975,l5),l5);
(function(v2855){
    (function(){
        (function(v2856){
            return (v2856 !== l5.value ? (function(){
                l122.fvalue(pv, 3, l4.value, l873, l981);
                return (function(){
                    var v2857 = 1;
                    var v2858 = (function(){
                        var x1 = (function(){
                            var symbol = l863;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2857;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l863).value = v2858);
                })();
            })() : (function(){
                ((function(){
                    var symbol = l867;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l981) : l122.fvalue(pv, 3, l4.value, l876, l981));
                return (function(){
                    var v2859 = 1;
                    var v2860 = (function(){
                        var x1 = (function(){
                            var symbol = l864;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2859;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l864).value = v2860);
                })();
            })());
        })(l87.fvalue(pv, 2, l107.fvalue(pv, 2, 1, v2855), l980));
        return (function(){
            var v2861 = 1;
            var v2862 = (function(){
                var x1 = (function(){
                    var symbol = l862;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2861;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l862).value = v2862);
        })();
    })();
    (function(){
        (function(v2863){
            return (v2863 !== l5.value ? (function(){
                l122.fvalue(pv, 3, l4.value, l873, l982);
                return (function(){
                    var v2864 = 1;
                    var v2865 = (function(){
                        var x1 = (function(){
                            var symbol = l863;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2864;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l863).value = v2865);
                })();
            })() : (function(){
                ((function(){
                    var symbol = l867;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l982) : l122.fvalue(pv, 3, l4.value, l876, l982));
                return (function(){
                    var v2866 = 1;
                    var v2867 = (function(){
                        var x1 = (function(){
                            var symbol = l864;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2866;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l864).value = v2867);
                })();
            })());
        })(l87.fvalue(pv, 2, l196.fvalue(pv, 2, 2, v2855), l980));
        return (function(){
            var v2868 = 1;
            var v2869 = (function(){
                var x1 = (function(){
                    var symbol = l862;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2868;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l862).value = v2869);
        })();
    })();
    (function(){
        (function(v2870){
            return (v2870 !== l5.value ? (function(){
                l122.fvalue(pv, 3, l4.value, l873, l983);
                return (function(){
                    var v2871 = 1;
                    var v2872 = (function(){
                        var x1 = (function(){
                            var symbol = l863;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2871;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l863).value = v2872);
                })();
            })() : (function(){
                ((function(){
                    var symbol = l867;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l983) : l122.fvalue(pv, 3, l4.value, l876, l983));
                return (function(){
                    var v2873 = 1;
                    var v2874 = (function(){
                        var x1 = (function(){
                            var symbol = l864;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2873;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l864).value = v2874);
                })();
            })());
        })(l27.fvalue(pv, 1, l107.fvalue(pv, 2, 2, v2855)));
        return (function(){
            var v2875 = 1;
            var v2876 = (function(){
                var x1 = (function(){
                    var symbol = l862;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2875;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l862).value = v2876);
        })();
    })();
    return (function(){
        (function(v2877){
            return (v2877 !== l5.value ? (function(){
                l122.fvalue(pv, 3, l4.value, l873, l984);
                return (function(){
                    var v2878 = 1;
                    var v2879 = (function(){
                        var x1 = (function(){
                            var symbol = l863;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2878;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l863).value = v2879);
                })();
            })() : (function(){
                ((function(){
                    var symbol = l867;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l984) : l122.fvalue(pv, 3, l4.value, l876, l984));
                return (function(){
                    var v2880 = 1;
                    var v2881 = (function(){
                        var x1 = (function(){
                            var symbol = l864;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v2880;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                    return ((l864).value = v2881);
                })();
            })());
        })(l27.fvalue(pv, 1, l196.fvalue(pv, 2, 1, v2855)));
        return (function(){
            var v2882 = 1;
            var v2883 = (function(){
                var x1 = (function(){
                    var symbol = l862;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2882;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l862).value = v2883);
        })();
    })();
})(l961);
var l985 = QIList(l87,QIList(l195,2,QIList(l328,l941,l5),l5),QIList(l328,l968,l5),l5);
(function(){
    (function(v2884){
        return (v2884 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l985);
            return (function(){
                var v2885 = 1;
                var v2886 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2885;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2886);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l985) : l122.fvalue(pv, 3, l4.value, l876, l985));
            return (function(){
                var v2887 = 1;
                var v2888 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2887;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2888);
            })();
        })());
    })(l87.fvalue(pv, 2, l195.fvalue(pv, 2, 2, l941), l968));
    return (function(){
        var v2889 = 1;
        var v2890 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2889;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2890);
    })();
})();
var l986 = QIList(l27,QIList(l195,4,QIList(l328,l941,l5),l5),l5);
(function(){
    (function(v2891){
        return (v2891 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l986);
            return (function(){
                var v2892 = 1;
                var v2893 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2892;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2893);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l986) : l122.fvalue(pv, 3, l4.value, l876, l986));
            return (function(){
                var v2894 = 1;
                var v2895 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2894;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2895);
            })();
        })());
    })(l27.fvalue(pv, 1, l195.fvalue(pv, 2, 4, l941)));
    return (function(){
        var v2896 = 1;
        var v2897 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2896;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2897);
    })();
})();
var l987 = QIList(l87,QIList(l195,4,QIList(l328,l961,l5),l78,QIList(l94,l142,l5),l5),QIList(l328,l962,l5),l5);
(function(){
    (function(v2898){
        return (v2898 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l987);
            return (function(){
                var v2899 = 1;
                var v2900 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2899;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2900);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l987) : l122.fvalue(pv, 3, l4.value, l876, l987));
            return (function(){
                var v2901 = 1;
                var v2902 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2901;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2902);
            })();
        })());
    })(l87.fvalue(pv, 2, l195.fvalue(pv, 4, 4, l961, l78.value, (function(){
        var symbol = l142;
        var func = symbol.fvalue;
        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
        return func;
    })()), l962));
    return (function(){
        var v2903 = 1;
        var v2904 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2903;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2904);
    })();
})();
var l988 = QIList(l971,l972,QIList(3,l5),l5);
var l989 = QIList(l195,QIList(l328,l972,l5),QIList(l328,l988,l5),l79,QIList(l94,l87,l5),l5);
(function(){
    (function(v2905){
        return (v2905 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l989);
            return (function(){
                var v2906 = 1;
                var v2907 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2906;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2907);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l989) : l122.fvalue(pv, 3, l4.value, l876, l989));
            return (function(){
                var v2908 = 1;
                var v2909 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2908;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2909);
            })();
        })());
    })(l195.fvalue(pv, 4, l972, l988, l79.value, (function(){
        var symbol = l87;
        var func = symbol.fvalue;
        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
        return func;
    })()));
    return (function(){
        var v2910 = 1;
        var v2911 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2910;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2911);
    })();
})();
var l990 = QIList(l87,QIList(l206,1,QIList(l328,l968,l5),l5),QIList(l328,l941,l5),l5);
(function(){
    (function(v2912){
        return (v2912 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l990);
            return (function(){
                var v2913 = 1;
                var v2914 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2913;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2914);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l990) : l122.fvalue(pv, 3, l4.value, l876, l990));
            return (function(){
                var v2915 = 1;
                var v2916 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2915;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2916);
            })();
        })());
    })(l87.fvalue(pv, 2, l206.fvalue(pv, 2, 1, l968), l941));
    return (function(){
        var v2917 = 1;
        var v2918 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2917;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2918);
    })();
})();
var l991 = QIList(l87,QIList(l206,1,QIList(l328,l941,l5),l5),QIList(l328,l941,l5),l5);
(function(){
    (function(v2919){
        return (v2919 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l991);
            return (function(){
                var v2920 = 1;
                var v2921 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2920;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2921);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l991) : l122.fvalue(pv, 3, l4.value, l876, l991));
            return (function(){
                var v2922 = 1;
                var v2923 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2922;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2923);
            })();
        })());
    })(l87.fvalue(pv, 2, l206.fvalue(pv, 2, 1, l941), l941));
    return (function(){
        var v2924 = 1;
        var v2925 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2924;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2925);
    })();
})();
var l992 = QIList(l971,l972,l5);
var l993 = QIList(l87,QIList(l206,QIList(l328,l971,l5),QIList(l328,l992,l5),l79,QIList(l94,l87,l5),l5),QIList(l328,l992,l5),l5);
(function(){
    (function(v2926){
        return (v2926 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l993);
            return (function(){
                var v2927 = 1;
                var v2928 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2927;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2928);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l993) : l122.fvalue(pv, 3, l4.value, l876, l993));
            return (function(){
                var v2929 = 1;
                var v2930 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2929;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2930);
            })();
        })());
    })(l87.fvalue(pv, 2, l206.fvalue(pv, 4, l971, l992, l79.value, (function(){
        var symbol = l87;
        var func = symbol.fvalue;
        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
        return func;
    })()), l992));
    return (function(){
        var v2931 = 1;
        var v2932 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2931;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2932);
    })();
})();
var l994 = QIList(l87,QIList(l207,QIList(l328,l902,l5),QIList(l328,l968,l5),l5),QIList(l328,l972,l5),l5);
(function(){
    (function(v2933){
        return (v2933 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l994);
            return (function(){
                var v2934 = 1;
                var v2935 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2934;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2935);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l994) : l122.fvalue(pv, 3, l4.value, l876, l994));
            return (function(){
                var v2936 = 1;
                var v2937 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2936;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2937);
            })();
        })());
    })(l87.fvalue(pv, 2, l207.fvalue(pv, 2, l902, l968), l972));
    return (function(){
        var v2938 = 1;
        var v2939 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2938;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2939);
    })();
})();
var l995 = QIList(4,5,6,l5);
var l996 = QIList(l27,QIList(l207,QIList(l328,l941,l5),QIList(l328,l995,l5),l5),l5);
(function(){
    (function(v2940){
        return (v2940 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l996);
            return (function(){
                var v2941 = 1;
                var v2942 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2941;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2942);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l996) : l122.fvalue(pv, 3, l4.value, l876, l996));
            return (function(){
                var v2943 = 1;
                var v2944 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2943;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2944);
            })();
        })());
    })(l27.fvalue(pv, 1, l207.fvalue(pv, 2, l941, l995)));
    return (function(){
        var v2945 = 1;
        var v2946 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2945;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2946);
    })();
})();
var l997 = QIList(l972,QIList(3,l5),l5);
var l998 = QIList(l972,l5);
var l999 = QIList(l87,QIList(l207,QIList(l328,l992,l5),QIList(l328,l997,l5),l79,QIList(l94,l87,l5),l5),QIList(l328,l998,l5),l5);
(function(){
    (function(v2947){
        return (v2947 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l999);
            return (function(){
                var v2948 = 1;
                var v2949 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2948;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2949);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l999) : l122.fvalue(pv, 3, l4.value, l876, l999));
            return (function(){
                var v2950 = 1;
                var v2951 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2950;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2951);
            })();
        })());
    })(l87.fvalue(pv, 2, l207.fvalue(pv, 4, l992, l997, l79.value, (function(){
        var symbol = l87;
        var func = symbol.fvalue;
        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
        return func;
    })()), l998));
    return (function(){
        var v2952 = 1;
        var v2953 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2952;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2953);
    })();
})();
var l1000 = QIList(l522,QIList(QIList(l890,QIList(l328,l941,l5),l5),QIList(l939,QIList(l190,l890,l5),l5),l5),QIList(l36,QIList(l19,l939,1,l5),QIList(l19,QIList(l141,l890,l5),2,l5),l5),l5);
(function(){
    (function(v2958){
        return (v2958 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1000);
            return (function(){
                var v2959 = 1;
                var v2960 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2959;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2960);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1000) : l122.fvalue(pv, 3, l4.value, l876, l1000));
            return (function(){
                var v2961 = 1;
                var v2962 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2961;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2962);
            })();
        })());
    })((function(){
        var v2954 = l941;
        var v2955 = (function(){
            var v2956 = v2954;
            var v2957 = (function(){
                var tmp = v2956;
                return tmp === l5.value? l5.value: tmp.cdr;
            })();
            (v2954 = v2957);
            return (function(){
                var tmp = v2956;
                return tmp === l5.value? l5.value: tmp.car;
            })();
        })();
        return ((function(){
            var x1 = v2955;
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==1?l4.value: l5.value);
        })() !== l5.value ? (function(){
            var x1 = (function(){
                var tmp = v2954;
                return tmp === l5.value? l5.value: tmp.car;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==2?l4.value: l5.value);
        })() : l5.value);
    })());
    return (function(){
        var v2963 = 1;
        var v2964 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2963;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2964);
    })();
})();
var l1001 = make_lisp_string("FOO");
var l1002 = QIList(l519,QIList(QIList(l817,QIList(l333,QIList(l249,QIList(l328,l890,l5),l5),l5),l5),l5),QIList(l36,QIList(l678,l817,l5),QIList(l87,QIList(l681,l817,l5),l1001,l5),l5),l5);
(function(){
    (function(v2966){
        return (v2966 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1002);
            return (function(){
                var v2967 = 1;
                var v2968 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2967;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2968);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1002) : l122.fvalue(pv, 3, l4.value, l876, l1002));
            return (function(){
                var v2969 = 1;
                var v2970 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2969;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2970);
            })();
        })());
    })((function(v2965){
        return (((v2965 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l87.fvalue(pv, 2, (v2965).name, l1001) : l5.value);
    })(l333.fvalue(pv, 1, l249.fvalue(pv, 1, l890))));
    return (function(){
        var v2971 = 1;
        var v2972 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2971;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2972);
    })();
})();
var l1003 = (new Symbol(make_lisp_string("FOo")));
var l1004 = make_lisp_string("FOo");
var l1005 = QIList(l519,QIList(QIList(l817,QIList(l333,QIList(l249,QIList(l328,l1003,l5),l5),l5),l5),l5),QIList(l36,QIList(l678,l817,l5),QIList(l87,QIList(l681,l817,l5),l1004,l5),l5),l5);
(function(){
    (function(v2974){
        return (v2974 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1005);
            return (function(){
                var v2975 = 1;
                var v2976 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2975;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2976);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1005) : l122.fvalue(pv, 3, l4.value, l876, l1005));
            return (function(){
                var v2977 = 1;
                var v2978 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2977;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2978);
            })();
        })());
    })((function(v2973){
        return (((v2973 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l87.fvalue(pv, 2, (v2973).name, l1004) : l5.value);
    })(l333.fvalue(pv, 1, l249.fvalue(pv, 1, l1003))));
    return (function(){
        var v2979 = 1;
        var v2980 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2979;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2980);
    })();
})();
var l1006 = (new Symbol(make_lisp_string("1..2")));
var l1007 = make_lisp_string("1..2");
var l1008 = QIList(l519,QIList(QIList(l817,QIList(l333,QIList(l249,QIList(l328,l1006,l5),l5),l5),l5),l5),QIList(l36,QIList(l678,l817,l5),QIList(l87,QIList(l681,l817,l5),l1007,l5),l5),l5);
(function(){
    (function(v2982){
        return (v2982 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1008);
            return (function(){
                var v2983 = 1;
                var v2984 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2983;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2984);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1008) : l122.fvalue(pv, 3, l4.value, l876, l1008));
            return (function(){
                var v2985 = 1;
                var v2986 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2985;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2986);
            })();
        })());
    })((function(v2981){
        return (((v2981 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l87.fvalue(pv, 2, (v2981).name, l1007) : l5.value);
    })(l333.fvalue(pv, 1, l249.fvalue(pv, 1, l1006))));
    return (function(){
        var v2987 = 1;
        var v2988 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2987;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2988);
    })();
})();
var l1009 = (new Symbol(make_lisp_string("1")));
var l1010 = QIList(l519,QIList(QIList(l817,QIList(l333,QIList(l249,QIList(l328,l1009,l5),l5),l5),l5),l5),QIList(l36,QIList(l678,l817,l5),QIList(l87,QIList(l681,l817,l5),l641,l5),l5),l5);
(function(){
    (function(v2990){
        return (v2990 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1010);
            return (function(){
                var v2991 = 1;
                var v2992 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2991;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v2992);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1010) : l122.fvalue(pv, 3, l4.value, l876, l1010));
            return (function(){
                var v2993 = 1;
                var v2994 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2993;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v2994);
            })();
        })());
    })((function(v2989){
        return (((v2989 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l87.fvalue(pv, 2, (v2989).name, l641) : l5.value);
    })(l333.fvalue(pv, 1, l249.fvalue(pv, 1, l1009))));
    return (function(){
        var v2995 = 1;
        var v2996 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2995;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v2996);
    })();
})();
var l1011 = (new Symbol(make_lisp_string("-10")));
var l1012 = make_lisp_string("-10");
var l1013 = QIList(l519,QIList(QIList(l817,QIList(l333,QIList(l249,QIList(l328,l1011,l5),l5),l5),l5),l5),QIList(l36,QIList(l678,l817,l5),QIList(l87,QIList(l681,l817,l5),l1012,l5),l5),l5);
(function(){
    (function(v2998){
        return (v2998 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1013);
            return (function(){
                var v2999 = 1;
                var v3000 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2999;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3000);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1013) : l122.fvalue(pv, 3, l4.value, l876, l1013));
            return (function(){
                var v3001 = 1;
                var v3002 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3001;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3002);
            })();
        })());
    })((function(v2997){
        return (((v2997 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l87.fvalue(pv, 2, (v2997).name, l1012) : l5.value);
    })(l333.fvalue(pv, 1, l249.fvalue(pv, 1, l1011))));
    return (function(){
        var v3003 = 1;
        var v3004 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3003;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3004);
    })();
})();
var l1014 = (new Symbol(make_lisp_string("...")));
var l1015 = make_lisp_string("...");
var l1016 = QIList(l519,QIList(QIList(l817,QIList(l333,QIList(l249,QIList(l328,l1014,l5),l5),l5),l5),l5),QIList(l36,QIList(l678,l817,l5),QIList(l87,QIList(l681,l817,l5),l1015,l5),l5),l5);
(function(){
    (function(v3006){
        return (v3006 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1016);
            return (function(){
                var v3007 = 1;
                var v3008 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3007;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3008);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1016) : l122.fvalue(pv, 3, l4.value, l876, l1016));
            return (function(){
                var v3009 = 1;
                var v3010 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3009;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3010);
            })();
        })());
    })((function(v3005){
        return (((v3005 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l87.fvalue(pv, 2, (v3005).name, l1015) : l5.value);
    })(l333.fvalue(pv, 1, l249.fvalue(pv, 1, l1014))));
    return (function(){
        var v3011 = 1;
        var v3012 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3011;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3012);
    })();
})();
var l1017 = (new Symbol(make_lisp_string("1E")));
var l1018 = make_lisp_string("1E");
var l1019 = QIList(l519,QIList(QIList(l817,QIList(l333,QIList(l249,QIList(l328,l1017,l5),l5),l5),l5),l5),QIList(l36,QIList(l678,l817,l5),QIList(l87,QIList(l681,l817,l5),l1018,l5),l5),l5);
(function(){
    (function(v3014){
        return (v3014 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1019);
            return (function(){
                var v3015 = 1;
                var v3016 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3015;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3016);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1019) : l122.fvalue(pv, 3, l4.value, l876, l1019));
            return (function(){
                var v3017 = 1;
                var v3018 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3017;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3018);
            })();
        })());
    })((function(v3013){
        return (((v3013 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l87.fvalue(pv, 2, (v3013).name, l1018) : l5.value);
    })(l333.fvalue(pv, 1, l249.fvalue(pv, 1, l1017))));
    return (function(){
        var v3019 = 1;
        var v3020 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3019;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3020);
    })();
})();
var l1020 = (new Symbol(make_lisp_string("1E+2")));
var l1021 = make_lisp_string("1E+2");
var l1022 = QIList(l519,QIList(QIList(l817,QIList(l333,QIList(l249,QIList(l328,l1020,l5),l5),l5),l5),l5),QIList(l36,QIList(l678,l817,l5),QIList(l87,QIList(l681,l817,l5),l1021,l5),l5),l5);
(function(){
    (function(v3022){
        return (v3022 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1022);
            return (function(){
                var v3023 = 1;
                var v3024 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3023;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3024);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1022) : l122.fvalue(pv, 3, l4.value, l876, l1022));
            return (function(){
                var v3025 = 1;
                var v3026 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3025;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3026);
            })();
        })());
    })((function(v3021){
        return (((v3021 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l87.fvalue(pv, 2, (v3021).name, l1021) : l5.value);
    })(l333.fvalue(pv, 1, l249.fvalue(pv, 1, l1020))));
    return (function(){
        var v3027 = 1;
        var v3028 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3027;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3028);
    })();
})();
var l1023 = (new Symbol(make_lisp_string("1E+")));
var l1024 = make_lisp_string("1E+");
var l1025 = QIList(l519,QIList(QIList(l817,QIList(l333,QIList(l249,QIList(l328,l1023,l5),l5),l5),l5),l5),QIList(l36,QIList(l678,l817,l5),QIList(l87,QIList(l681,l817,l5),l1024,l5),l5),l5);
(function(){
    (function(v3030){
        return (v3030 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1025);
            return (function(){
                var v3031 = 1;
                var v3032 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3031;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3032);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1025) : l122.fvalue(pv, 3, l4.value, l876, l1025));
            return (function(){
                var v3033 = 1;
                var v3034 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3033;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3034);
            })();
        })());
    })((function(v3029){
        return (((v3029 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l87.fvalue(pv, 2, (v3029).name, l1024) : l5.value);
    })(l333.fvalue(pv, 1, l249.fvalue(pv, 1, l1023))));
    return (function(){
        var v3035 = 1;
        var v3036 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3035;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3036);
    })();
})();
var l1026 = make_lisp_string("(a b c)");
var l1027 = (new Symbol(make_lisp_string("C")));
var l1028 = QIList(QIList(l934,l935,l1027,l5),7,l5);
var l1029 = make_lisp_string("<font color='orange'>Test `~S' passed unexpectedly!</font>~%");
var l1030 = QIList(l87,QIList(l101,QIList(l333,l1026,l5),l5),QIList(l328,l1028,l5),l5);
var l1031 = make_lisp_string("Test `~S' passed unexpectedly!~%");
var l1032 = make_lisp_string("Test `~S' failed failed expectedly.~%");
(function(){
    (function(v3037){
        return (v3037 !== l5.value ? (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l1029, l1030) : l122.fvalue(pv, 3, l4.value, l1031, l1030));
            return (function(){
                var v3038 = 1;
                var v3039 = (function(){
                    var x1 = (function(){
                        var symbol = l866;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3038;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l866).value = v3039);
            })();
        })() : (function(){
            l122.fvalue(pv, 3, l4.value, l1032, l1030);
            return (function(){
                var v3040 = 1;
                var v3041 = (function(){
                    var x1 = (function(){
                        var symbol = l865;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3040;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l865).value = v3041);
            })();
        })());
    })(l87.fvalue(pv, 2, (function(){
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
            vs = l333.fvalue(values, 1, l1026);
            if (typeof vs === 'object' && 'multiple-value' in vs)
                args = args.concat(vs);
            else
                args.push(vs);
            args[1] = args.length-2;
            return func.apply(window, args);
        })();
    })(), l1028));
    return (function(){
        var v3042 = 1;
        var v3043 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3042;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3043);
    })();
})();
var l1033 = make_lisp_string("cl:cond");
var l1034 = make_lisp_string("COND");
var l1035 = QIList(l87,QIList(l681,QIList(l333,l1033,l5),l5),l1034,l5);
(function(){
    (function(v3044){
        return (v3044 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1035);
            return (function(){
                var v3045 = 1;
                var v3046 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3045;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3046);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1035) : l122.fvalue(pv, 3, l4.value, l876, l1035));
            return (function(){
                var v3047 = 1;
                var v3048 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3047;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3048);
            })();
        })());
    })(l87.fvalue(pv, 2, (l333.fvalue(pv, 1, l1033)).name, l1034));
    return (function(){
        var v3049 = 1;
        var v3050 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3049;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3050);
    })();
})();
var l1036 = make_lisp_string("co|N|d");
var l1037 = QIList(l87,QIList(l681,QIList(l333,l1036,l5),l5),l1034,l5);
(function(){
    (function(v3051){
        return (v3051 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1037);
            return (function(){
                var v3052 = 1;
                var v3053 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3052;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3053);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1037) : l122.fvalue(pv, 3, l4.value, l876, l1037));
            return (function(){
                var v3054 = 1;
                var v3055 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3054;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3055);
            })();
        })());
    })(l87.fvalue(pv, 2, (l333.fvalue(pv, 1, l1036)).name, l1034));
    return (function(){
        var v3056 = 1;
        var v3057 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3056;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3057);
    })();
})();
var l1038 = make_lisp_string("abc\\def");
var l1039 = make_lisp_string("ABCdEF");
var l1040 = QIList(l87,QIList(l681,QIList(l333,l1038,l5),l5),l1039,l5);
(function(){
    (function(v3058){
        return (v3058 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1040);
            return (function(){
                var v3059 = 1;
                var v3060 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3059;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3060);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1040) : l122.fvalue(pv, 3, l4.value, l876, l1040));
            return (function(){
                var v3061 = 1;
                var v3062 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3061;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3062);
            })();
        })());
    })(l87.fvalue(pv, 2, (l333.fvalue(pv, 1, l1038)).name, l1039));
    return (function(){
        var v3063 = 1;
        var v3064 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3063;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3064);
    })();
})();
var l1041 = make_lisp_string("|.|");
var l1042 = QIList(l87,QIList(l681,QIList(l333,l1041,l5),l5),l306,l5);
(function(){
    (function(v3065){
        return (v3065 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1042);
            return (function(){
                var v3066 = 1;
                var v3067 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3066;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3067);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1042) : l122.fvalue(pv, 3, l4.value, l876, l1042));
            return (function(){
                var v3068 = 1;
                var v3069 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3068;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3069);
            })();
        })());
    })(l87.fvalue(pv, 2, (l333.fvalue(pv, 1, l1041)).name, l306));
    return (function(){
        var v3070 = 1;
        var v3071 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3070;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3071);
    })();
})();
var l1043 = make_lisp_string("(1 .25)");
var l1044 = QIList(1,0.25,l5);
var l1045 = QIList(l87,QIList(l333,l1043,l5),QIList(l328,l1044,l5),l5);
(function(){
    (function(v3072){
        return (v3072 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1045);
            return (function(){
                var v3073 = 1;
                var v3074 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3073;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3074);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1045) : l122.fvalue(pv, 3, l4.value, l876, l1045));
            return (function(){
                var v3075 = 1;
                var v3076 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3075;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3076);
            })();
        })());
    })(l87.fvalue(pv, 2, l333.fvalue(pv, 1, l1043), l1044));
    return (function(){
        var v3077 = 1;
        var v3078 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3077;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3078);
    })();
})();
var l1046 = make_lisp_string(".25");
var l1047 = QIList(l87,QIList(l333,l1046,l5),0.25,l5);
(function(){
    (function(v3079){
        return (v3079 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1047);
            return (function(){
                var v3080 = 1;
                var v3081 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3080;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3081);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1047) : l122.fvalue(pv, 3, l4.value, l876, l1047));
            return (function(){
                var v3082 = 1;
                var v3083 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3082;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3083);
            })();
        })());
    })(l87.fvalue(pv, 2, l333.fvalue(pv, 1, l1046), 0.25));
    return (function(){
        var v3084 = 1;
        var v3085 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3084;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3085);
    })();
})();
var l1048 = make_lisp_string("(1 . 25)");
var l1049 = QIList(1,25);
var l1050 = QIList(l87,QIList(l333,l1048,l5),QIList(l328,l1049,l5),l5);
(function(){
    (function(v3086){
        return (v3086 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1050);
            return (function(){
                var v3087 = 1;
                var v3088 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3087;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3088);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1050) : l122.fvalue(pv, 3, l4.value, l876, l1050));
            return (function(){
                var v3089 = 1;
                var v3090 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3089;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3090);
            })();
        })());
    })(l87.fvalue(pv, 2, l333.fvalue(pv, 1, l1048), l1049));
    return (function(){
        var v3091 = 1;
        var v3092 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3091;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3092);
    })();
})();
var l1051 = QIList(l19,2,QIList(l519,QIList(QIList(l817,0,l5),l5),QIList(l28,l817,QIList(l110,l817,1,l5),l5),l817,l5),l5);
(function(){
    (function(v3098){
        return (v3098 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1051);
            return (function(){
                var v3099 = 1;
                var v3100 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3099;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3100);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1051) : l122.fvalue(pv, 3, l4.value, l876, l1051));
            return (function(){
                var v3101 = 1;
                var v3102 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3101;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3102);
            })();
        })());
    })((function(){
        var x1 = (function(v3093){
            (function(){
                var v3094 = (function(){
                    return (function(){
                        var func = (function (values,nargs,v3096){
                            switch(nargs){
                            case 0:
                                v3096=l5.value;
                            default: break;
                            }
                            var v3095= l5.value;
                            for (var i = nargs-1; i>=1; i--)
                                v3095 = {car: arguments[i+2], cdr: v3095};
                            return (v3093 = v3096);
                        });
                        var args = [pv, 0];
                        return (function(){
                            var values = mv;
                            var vs;
                            vs = 1;
                            if (typeof vs === 'object' && 'multiple-value' in vs)
                                args = args.concat(vs);
                            else
                                args.push(vs);
                            args[1] = args.length-2;
                            return func.apply(window, args);
                        })();
                    })();
                })();
                var v3097 = (function(){
                    var x1 = v3093;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3094;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return (v3093 = v3097);
            })();
            return v3093;
        })(0);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (2==x1?l4.value: l5.value);
    })());
    return (function(){
        var v3103 = 1;
        var v3104 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3103;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3104);
    })();
})();
var l1052 = (new Symbol(make_lisp_string("*STR*")));
var l1053 = make_lisp_string("hello world");
(function(){
    (((l1052.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l1052).value = l1053));
    return l1052;
})();
var l1054 = (new Symbol(make_lisp_string("*STR2*")));
var l1055 = make_lisp_string("h");
(function(){
    (((l1054.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l1054).value = l1055));
    return l1054;
})();
var l1056 = QIList(l718,l1052,l5);
(function(){
    (function(v3105){
        return (v3105 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1056);
            return (function(){
                var v3106 = 1;
                var v3107 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3106;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3107);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1056) : l122.fvalue(pv, 3, l4.value, l876, l1056));
            return (function(){
                var v3108 = 1;
                var v3109 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3108;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3109);
            })();
        })());
    })(((function(){
        var x = (function(){
            var symbol = l1052;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })();
        return typeof(x) == 'object' && 'length' in x && x.type == 'character';
    })()?l4.value: l5.value));
    return (function(){
        var v3110 = 1;
        var v3111 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3110;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3111);
    })();
})();
var l1057 = QIList(l27,QIList(l705,l1052,l5),l5);
(function(){
    (function(v3112){
        return (v3112 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1057);
            return (function(){
                var v3113 = 1;
                var v3114 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3113;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3114);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1057) : l122.fvalue(pv, 3, l4.value, l876, l1057));
            return (function(){
                var v3115 = 1;
                var v3116 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3115;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3116);
            })();
        })());
    })(l27.fvalue(pv, 1, ((function(){
        var x = (function(){
            var symbol = l1052;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })();
        return (typeof((function(){
            var symbol = l1052;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })()) == "string") && x.length == 1;
    })()?l4.value: l5.value)));
    return (function(){
        var v3117 = 1;
        var v3118 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3117;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3118);
    })();
})();
var l1058 = QIList(l27,QIList(l63,l1052,l5),l5);
(function(){
    (function(v3119){
        return (v3119 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1058);
            return (function(){
                var v3120 = 1;
                var v3121 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3120;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3121);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1058) : l122.fvalue(pv, 3, l4.value, l876, l1058));
            return (function(){
                var v3122 = 1;
                var v3123 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3122;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3123);
            })();
        })());
    })(l27.fvalue(pv, 1, l63.fvalue(pv, 1, (function(){
        var symbol = l1052;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })())));
    return (function(){
        var v3124 = 1;
        var v3125 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3124;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3125);
    })();
})();
var l1059 = QIList(l718,l1054,l5);
(function(){
    (function(v3126){
        return (v3126 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1059);
            return (function(){
                var v3127 = 1;
                var v3128 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3127;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3128);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1059) : l122.fvalue(pv, 3, l4.value, l876, l1059));
            return (function(){
                var v3129 = 1;
                var v3130 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3129;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3130);
            })();
        })());
    })(((function(){
        var x = (function(){
            var symbol = l1054;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })();
        return typeof(x) == 'object' && 'length' in x && x.type == 'character';
    })()?l4.value: l5.value));
    return (function(){
        var v3131 = 1;
        var v3132 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3131;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3132);
    })();
})();
var l1060 = QIList(l27,QIList(l705,l1054,l5),l5);
(function(){
    (function(v3133){
        return (v3133 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1060);
            return (function(){
                var v3134 = 1;
                var v3135 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3134;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3135);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1060) : l122.fvalue(pv, 3, l4.value, l876, l1060));
            return (function(){
                var v3136 = 1;
                var v3137 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3136;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3137);
            })();
        })());
    })(l27.fvalue(pv, 1, ((function(){
        var x = (function(){
            var symbol = l1054;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })();
        return (typeof((function(){
            var symbol = l1054;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })()) == "string") && x.length == 1;
    })()?l4.value: l5.value)));
    return (function(){
        var v3138 = 1;
        var v3139 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3138;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3139);
    })();
})();
var l1061 = QIList(l27,QIList(l63,l1054,l5),l5);
(function(){
    (function(v3140){
        return (v3140 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1061);
            return (function(){
                var v3141 = 1;
                var v3142 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3141;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3142);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1061) : l122.fvalue(pv, 3, l4.value, l876, l1061));
            return (function(){
                var v3143 = 1;
                var v3144 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3143;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3144);
            })();
        })());
    })(l27.fvalue(pv, 1, l63.fvalue(pv, 1, (function(){
        var symbol = l1054;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })())));
    return (function(){
        var v3145 = 1;
        var v3146 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3145;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3146);
    })();
})();
var l1062 = QIList(l19,QIList(l52,l1053,l5),11,l5);
(function(){
    (function(v3147){
        return (v3147 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1062);
            return (function(){
                var v3148 = 1;
                var v3149 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3148;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3149);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1062) : l122.fvalue(pv, 3, l4.value, l876, l1062));
            return (function(){
                var v3150 = 1;
                var v3151 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3150;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3151);
            })();
        })());
    })((function(){
        var x1 = l52.fvalue(pv, 1, l1053);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (x1==11?l4.value: l5.value);
    })());
    return (function(){
        var v3152 = 1;
        var v3153 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3152;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3153);
    })();
})();
var l1063 = QIList(l776,l1053,l5);
(function(){
    (function(v3154){
        return (v3154 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1063);
            return (function(){
                var v3155 = 1;
                var v3156 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3155;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3156);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1063) : l122.fvalue(pv, 3, l4.value, l876, l1063));
            return (function(){
                var v3157 = 1;
                var v3158 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3157;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3158);
            })();
        })());
    })(((function(){
        var x = l1053;
        return typeof x === 'object' && 'length' in x;
    })()?l4.value: l5.value));
    return (function(){
        var v3159 = 1;
        var v3160 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3159;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3160);
    })();
})();
var l1064 = QIList(l88,l1055,QIList(l135,"h",l5),l5);
(function(){
    (function(v3161){
        return (v3161 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1064);
            return (function(){
                var v3162 = 1;
                var v3163 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3162;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3163);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1064) : l122.fvalue(pv, 3, l4.value, l876, l1064));
            return (function(){
                var v3164 = 1;
                var v3165 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3164;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3165);
            })();
        })());
    })(l88.fvalue(pv, 2, l1055, l135.fvalue(pv, 1, "h")));
    return (function(){
        var v3166 = 1;
        var v3167 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3166;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3167);
    })();
})();
var l1065 = QIList(l88,l925,l925,l5);
(function(){
    (function(v3168){
        return (v3168 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1065);
            return (function(){
                var v3169 = 1;
                var v3170 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3169;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3170);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1065) : l122.fvalue(pv, 3, l4.value, l876, l1065));
            return (function(){
                var v3171 = 1;
                var v3172 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3171;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3172);
            })();
        })());
    })(l88.fvalue(pv, 2, l925, l925));
    return (function(){
        var v3173 = 1;
        var v3174 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3173;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3174);
    })();
})();
var l1066 = make_lisp_string("Foo");
var l1067 = QIList(l27,QIList(l88,l1066,l925,l5),l5);
(function(){
    (function(v3175){
        return (v3175 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1067);
            return (function(){
                var v3176 = 1;
                var v3177 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3176;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3177);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1067) : l122.fvalue(pv, 3, l4.value, l876, l1067));
            return (function(){
                var v3178 = 1;
                var v3179 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3178;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3179);
            })();
        })());
    })(l27.fvalue(pv, 1, l88.fvalue(pv, 2, l1066, l925)));
    return (function(){
        var v3180 = 1;
        var v3181 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3180;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3181);
    })();
})();
var l1068 = make_lisp_string("foox");
var l1069 = QIList(l27,QIList(l88,l925,l1068,l5),l5);
(function(){
    (function(v3182){
        return (v3182 !== l5.value ? (function(){
            l122.fvalue(pv, 3, l4.value, l873, l1069);
            return (function(){
                var v3183 = 1;
                var v3184 = (function(){
                    var x1 = (function(){
                        var symbol = l863;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3183;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l863).value = v3184);
            })();
        })() : (function(){
            ((function(){
                var symbol = l867;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l122.fvalue(pv, 3, l4.value, l875, l1069) : l122.fvalue(pv, 3, l4.value, l876, l1069));
            return (function(){
                var v3185 = 1;
                var v3186 = (function(){
                    var x1 = (function(){
                        var symbol = l864;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3185;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l864).value = v3186);
            })();
        })());
    })(l27.fvalue(pv, 1, l88.fvalue(pv, 2, l925, l1068)));
    return (function(){
        var v3187 = 1;
        var v3188 = (function(){
            var x1 = (function(){
                var symbol = l862;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3187;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l862).value = v3188);
    })();
})();
var l1070 = make_lisp_string("~%Finished. The execution took ~a seconds.~%");
l122.fvalue(pv, 3, l4.value, l1070, (function(){
    var x1 = (function(){
        var x1 = (new Date()).getTime();
        if (typeof x1 !== 'number') throw 'Not a number!';
        var x2 = (function(){
            var symbol = l868;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })();
        if (typeof x2 !== 'number') throw 'Not a number!';
        return x1-x2;
    })();
    if (typeof x1 !== 'number') throw 'Not a number!';
    var x2 = l113.value;
    if (typeof x2 !== 'number') throw 'Not a number!';
    return x1/x2/1.0;
})());
var l1071 = make_lisp_string("All the tests (~a) passed successfully.~%");
var l1072 = make_lisp_string("~a/~a test(s) passed successfully.~%");
((function(){
    var x1 = (function(){
        var symbol = l863;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })();
    if (typeof x1 !== 'number') throw 'Not a number!';
    var x2 = (function(){
        var symbol = l862;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })();
    if (typeof x2 !== 'number') throw 'Not a number!';
    return (x1==x2?l4.value: l5.value);
})() !== l5.value ? l122.fvalue(pv, 3, l4.value, l1071, (function(){
    var symbol = l862;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
    return value;
})()) : l122.fvalue(pv, 4, l4.value, l1072, (function(){
    var symbol = l863;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
    return value;
})(), (function(){
    var symbol = l862;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
    return value;
})()));
var l1073 = make_lisp_string("~a test(s) failed expectedly.~%");
(l24.fvalue(pv, 1, (function(){
    var symbol = l865;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
    return value;
})()) !== l5.value ? l5.value : l122.fvalue(pv, 3, l4.value, l1073, (function(){
    var symbol = l865;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
    return value;
})()));
var l1074 = make_lisp_string("~a test(s) passed unexpectedly.~%");
(l24.fvalue(pv, 1, (function(){
    var symbol = l866;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
    return value;
})()) !== l5.value ? l5.value : l122.fvalue(pv, 3, l4.value, l1074, (function(){
    var symbol = l866;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
    return value;
})()));

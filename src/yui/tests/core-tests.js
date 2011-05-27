YUI.add('core-tests', function(Y) {

    var testCore = new Y.Test.Case({

        name: "Core tests",

        'cached functions should execute only once per input': function() {

            var r1 = "", r2 = "", r3 = "";

            var f1 = function(a) {
                r1 += a;
            };
            var c1 = Y.cached(f1);

            c1('a');
            c1('b');
            c1('a');
            c1('b');
            c1('a');
            c1('b');

            Y.Assert.areEqual('ab', r1);

            var f2 = function(a, b) {
                r2 += (a + b);
            };
            var c2 = Y.cached(f2);

            c2('a', 'b');
            c2('c', 'd');
            c2('a', 'b');
            c2('c', 'd');
            c2('a', 'b');
            c2('c', 'd');

            var o = new Y.EventTarget();
            o.foo = 1;

            var f3 = function(a) {
                Y.Assert.areEqual(1, this.foo);
                r3 += a;
            };

            var c3 = Y.cached(Y.bind(f3, o), {
                a: 'z'
            });

            c3('a');
            c3('b');
            c3('a');
            c3('b');
            c3('a');
            c3('b');

            Y.Assert.areEqual('b', r3);

            // falsy second arg needs to produce a different key than no second arg
            var cn = Y.ClassNameManager.getClassName;
            Y.Assert.areEqual('yui3-a-', cn('a', ''));
            Y.Assert.areEqual('yui3-a', cn('a'));

        },

        test_ie_enum_bug: function() {
            var o = {
                valueOf: function() {
                    return 'foo';
                }
            },

            p = Y.merge(o);
            Y.Assert.areEqual('foo', p.valueOf());
        }

    });

    Y.SeedTests.add(testCore);
});

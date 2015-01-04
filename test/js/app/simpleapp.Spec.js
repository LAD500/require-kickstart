define(
    [ 'app/simpleapp' ],
    function( simpleApp) {
    'use strict';

    describe('Test for app/simpleapp', function() {
        it('add works as expected for 2 + 2', function() {
            expect(simpleApp.add(2,2)).toBe(4);
        });
        it('add works as expected for 1+2+3', function() {
            expect(simpleApp.add(1,2,3)).toBe(6);
        });
        it('add works as expected for 1+2+3+4+5', function() {
            expect(simpleApp.add(1,2,3,4,5)).toBe(15);
        });
    });

});
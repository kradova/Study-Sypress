describe('Test Body', () => {
    it('test 1', () => {
        let a = 1;
        let b = 2;
        expect(3).to.eq(a + b);
    });

    it.skip('test 2', () => {
        let a = 1;
        let b = 1;
        expect(3).to.eq(a + b);
    });
})



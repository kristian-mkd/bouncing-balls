describe('Test ball movement', () => {
    it('Expect to move ball on both axes', () => {

        // given
        let ballColor = 1; //getRandomColor([[0,0,0]]);
        let ballX = 1;
        let ballY = 1;
        let ballRadius = 1;
        let someDrag = 5;
        let someInitialUpperForceLimit = 2;
        let newBall = new Ball(ballX, ballY , ballRadius, ballColor, someInitialUpperForceLimit);

        // when
        newBall.move(someDrag);

        // then
        expect(newBall.x).not.toBe(1);
    })
});

// describe('desc2', () => {
//     it('to fail', () => {
//         // arrange
//         let bool = false;

//         // act
//         const result = getOpposite(bool);

//         // assert
//         expect(result).toBe(true);
//     })
// });

// describe('desc3', () => {
//     it('to fail1', () => {
//         // arrange
//         let bool = false;

//         // act
//         const result = getOpposite(bool);

//         // assert
//         expect(result).toBe(true);
//     })
// });
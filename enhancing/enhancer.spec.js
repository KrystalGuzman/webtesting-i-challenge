const enhancer = require('./enhancer.js');
// test away!
describe('the enhancer', () => {

    describe('the repair function', () => {
        it('should restore the durability to 100', () => {

            // arrange
            const item = {durability:50};
            // act
            const result = enhancer.repair(item).durability;
            // assert
            expect(result).toStrictEqual(100);
        })
        it('should throw error when the durability is not between 0-100', () => {
            const item = {durability:1000};
            expect(() =>{
                enhancer.repair(item.durability)
            }).toThrow();
            const item2 = {durability:-30};
            expect(() =>{
                enhancer.repair(item2.durability)
            }).toThrow();
        })
    })

    describe('the succeed function', () => {
    
        it('if enhancement level is below 20 then will increment up by 1', () => {

            let item = { enhancement : 1 };
            let result = enhancer.succeed(item).enhancement;
            expect(result).toBe(2);
        });
    
        it('if enhancement level is 20 it will not increase anymore', () => {
            let item = { enhancement: 20};

            let result = enhancer.succeed(item).enhancement;
    
            expect(result).toBe(20);
        })

        // it('should throw error when the enhancement is not between 0-20', () => {
        //     const item = {enhancement:100};
        //     expect(() =>{
        //         enhancer.succeed(item).enhancement
        //     }).toThrow();
        //     const item2 = {enhancement:-30};
        //     expect(() =>{
        //         enhancer.succeed(item2).enhancement
        //     }).toThrow();
        // })
    })

    describe('The fail function', () => {
        it('When enhancement is less than 15, durability decrease by 5 ', () => {
            let item = {enhancement: 13, durability : 10};
            let result = enhancer.fail(item).durability;
    
            expect(result).toBe(5);
        });
    
        it('If enhancement is more than 15, durability decrease by 10', () => {
            let item = {enhancement: 20, durability : 15};
            let result = enhancer.fail(item).durability;
    
            expect(result).toBe(5);
        });
    
        it('If item enhancement greater than 16, decrease by 1', () => {
            let item = {enhancement: 20, durability : 15};
            
            let result = enhancer.fail(item).enhancement;
    
            expect(result).toBe(19);
        });
    })

    describe('get() method', () => {
        const item2 = {
            name: 'Copper Sword',
            enhancement: 10,
            durability: 100
          }
          
          const item3 = {
            name: 'Broken Sword',
            enhancement: 0,
            durability:0
          }

        it('tests if ok', () => {
          expect(true).toBe(true);
        })
    
        //produce the correct name
        it('output the correct enhanced name', () => {
          let result = enhancer.get(item2).name
          expect(result).toBe('[+10] Copper Sword')
        })
    
        //should remain the same
        it('should output just the name', () => {
          let result = enhancer.get(item3).name
          expect(result).toBe('Broken Sword')
        })
      })
});
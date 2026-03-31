function minOperations(boxes: string): number[] {

    let result : number[] = [];

    // boxes.split('')

    for(let i : number = 0; i< boxes.length ; i++) {

        let totalOperations : number  = 0;

        for(let j: number = 0; j < boxes.length; j++){

            if(boxes[j] === '1') {

                 totalOperations += Math.abs(i-j);

            }

            };
            result.push(totalOperations);
        }
         return result
    };
   



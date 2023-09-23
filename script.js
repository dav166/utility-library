class _ {

    // Array Methods
    static chunk(array, size=1){
        let newArray = [];
        for (let i = 0; i <array.length; i += size){
            let chunk = array.slice(i, i + size);
            newArray.push(chunk)
        }
        return newArray;
    }

    static compact(array){
        let newArray = array.filter( val => {return Boolean(val) === true})
        return newArray;
    }

    static concat(array, ...values){                
        for(let i = 0; i < values.length; i++){
            array = array.concat( values[i] ) 
        } 
        return array;
    }

    static drop(array, n=1){
        return array.slice(n, array.length) 
    }

    static dropRight(array, n=1){
        return array.slice(0, -n)
    }

    static fill(array, value, start=0, end=array.length){ 
        for(let i = start; i < end; i++){ 
            array[i] = value 
        } 
        return array;    
    }

    static flatten(array){
        return [].concat(...array);
    }

    static intersection(...arrays){ 
        if (arrays.length === 0){
              return []
        }
        let intersection = arrays.reduce((prev, current) => {
              return prev.filter((element) => current.includes(element) );
        })
                    
        return [...new Set(intersection)]; //remove duplicates
    }

    static remove(array, predicate){
        let truthy = array.filter(predicate);
        for(let i of truthy){
              let n = array.indexOf(i)
              array.splice(n, 1); 
        } 
        return truthy;
    }

    static union(...arrays){
        let total = []
        for(let i of arrays){
              total.push(...i)
        }
        return new Set(total);
    }
}



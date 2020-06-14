//const parseData;

function parseData(input) {
    var result = [];
    let {data, column} = input;
    data.forEach(function(temp) {
        for(let i=0; i<temp.length; i++) {
            column[i].note = temp[i];
        }
        let person = {};
        column.forEach(function(temp) {
            let {name, note} = temp;
            person[name] = note;

        })
        result.push(person);
    })
    //console.log(result)
    return result;
}

export { parseData };




function inject(items, sections) {

    var length = items.length + sections.length;
    var arr = new Array(length);
    for(let i=0; i<sections.length; i++) {
        arr[sections[i].index + i] = sections[i].content;
    }
    for(let item of items) {
        for(let j=0; j<arr.length; j++) {
            if( arr[j] == undefined) {
                arr[j] = item;
                break;
            }
        }
    }
    return arr;
}
export { inject };

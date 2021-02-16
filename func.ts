function str_len(value: string):number{
    return value.length;
}

console.log(str_len("Test 1"));

function str_len_spaces(value: string):number{
    let num1:number = value.replace(/\s+/, "").length;
    return num1;
}

console.log(str_len_spaces("Test 1"));

function str_len_both(value:string, spaces?:boolean):number{

    let num1: number;
    if (spaces){
        num1  = value.replace(/\s+/, "").length;
    } else
    {
        num1  = value.length;
    }

    return num1;
}

console.log(str_len_both("Test 1"));
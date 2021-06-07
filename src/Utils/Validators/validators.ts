
export const required = (value: Array<string>) => {
    if(value) return undefined
    return ' Field is required'
}

export const maxLengthCreator = (maxLength30: number) =>(value: Array<string>) => {
    if( value.length > 30) return `Max length is ${maxLength30} symbols `
    return undefined;
}
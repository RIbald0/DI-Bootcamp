function validateUnionType(value: any, allowedTypes: string[]): boolean {
    if (allowedTypes.includes(typeof value)){
        return true;
    } else {
        return false;
    }
};


console.log(validateUnionType(5, ['string','number']));
console.log(validateUnionType(5, ['string']));



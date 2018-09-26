function whichSchool(age) {
    if (age < 13) {
        return 'Elementary School'
    } else if (age <= 18) {
        return 'Secondary School'
    } else {
        return 'Lighthouse Labs'
    }
}
console.log(whichSchool(5));
console.log(whichSchool(13));
console.log(whichSchool(15));
console.log(whichSchool(18));
console.log(whichSchool(37));
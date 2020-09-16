function varTest() {
    var x = 31;
    if (true) {
        var x = 71;
        console.log(x);
    }
    console.log(x);
}
varTest();


function letTest() {
    let y = 31;
    if (true) {
        let y = 71;
        console.log(y);
    }
    console.log(y);
}
letTest();
function reverseString(s = ['2', '3', '5', '6']) {
    try{
        var splitString = s.split("");
        var reverseArray = splitString.reverse();
        var joinString = reverseArray.join("");
        console.log(joinString);
    }
    catch (error){
        console.log(error.message);
        console.log(s);
    }
}
reverseString();
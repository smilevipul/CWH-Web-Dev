console.log("This is module")

function average(arr){
    let sum =0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

module.exports.name = "vipul"
module.exports = {
   avg: average,
   name : "Vipul",
   repo : "Github"

}


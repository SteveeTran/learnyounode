var value = 0;
for(var i = 2; i < process.argv.length; i++){
    value += +process.argv[i];
}
console.log(value);
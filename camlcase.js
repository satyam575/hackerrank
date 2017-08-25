function main() {
    var str = readLine();
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    str = str.split(" ")
    console.log(str.length) 
}
module.exports = {
    RandomChar : (num)=>{
        var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ9";
        var str = ""
        var i = 0;
        while(i<81){
            str += string.charAt(Math.floor(Math.random() * string.length));
            i++;
        }
        return str;
    }
}
let randomWords =[45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]



console.log(randomWords);

let filterMe = randomWords.filter(e=>{
const isString =(typeof e === 'string')
return isString;})
 

    
    console.log(filterMe);

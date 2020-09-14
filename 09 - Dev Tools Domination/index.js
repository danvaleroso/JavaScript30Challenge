const dogs = [{ name: 'Snickers',  amo:"tupac", age: 2}, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log("hello");
// Interpolated
console.log("hello I am a %s string", "sss");
// Styled
console.log("%c I am some great text" , "font-size: 23px; background:red;")
// warning!
console.warn("oh nooo");
// Error :|
console.error("oh noooo");
// Info
console.info("Crocodile eat 3-4 people per year");
// Testing

const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "that is wron bro"); // only fired when false
// clearing
console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();
// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`); //console.group ----> makes the group initially open // groupCollapsed make the group initially closed
    console.log(`This is ${dog.name}`);
    console.log(`the dog age is ${dog.age}`);
    console.groupEnd(`${dog.name}`);
});
// counting
console.count("Wes");
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Wes");


//timing
console.time("Fetching data yo"); // string same as time end
fetch("https://api.github.com/users/wesbos")
    .then(data => data.json())
    .then(data => {
        console.timeEnd("Fetching data yo"); // string same as time
        console.log(data);
});

console.table(dogs);

//my solution
{
class Park {
    constructor(name,buildYear,numberOfTrees,age,parkArea){
        this.name = name;
        this.buildYear = buildYear;
        this.numberOfTrees = numberOfTrees;
        this.age = age;
        this.parkArea = parkArea;
    }
    treeDensity(){
        let density = this.numberOfTrees / this.parkArea;
        return density;
    }
    
}

class Street extends Park {
    constructor(name,buildYear,length,size = 'normal') {
        super(name, buildYear);
        this.size = size;
        this.length = length;
    }
}

const sallyPark = new Park('Sally Park', 1954, 1400, 65 , 34);
const tobiasPark = new Park('Tobias Park',1986, 400, 31, 13 );
const oceanPark = new Park('Ocean Park', 1956, 900, 25, 20);
const meanStreet = new Street('Mean Street',2000, 2.5);
const shortLine = new Street('Short Line', 1951, 1.2, 'small');
const prosperLane = new Street('Prosper Lane',2010, 5, 'huge');
const blueAvenue = new Street('Blue Avenue', 1930, 3.9, 'big');


const avgParkAge = function() { 
    let count = 0;
    let totalAge = 0;
    let average;
    parks.forEach((cur) => {
        
        if(cur.age){
            totalAge += cur.age;
            count++;
        }
    })
    average = totalAge / count;
    return average;
} 
const totalStreetLength = function() {
    let totalLength = 0;
    streets.forEach(cur => {
        if(cur.length){
            totalLength += cur.length;
        }
    })
    return totalLength;
}


const avgStreetLength = function(){
    let count = 0;
    let totalLength = 0;
    let average;
    streets.forEach(cur => {
        if(cur.length){
        totalLength += cur.length;
        count++
        }
    })
    average = totalLength / count;
    return average
}

console.log()

const parks = new Map();
parks.set('Report', '----PARKS REPORT----');
parks.set(1, sallyPark);
parks.set(2,tobiasPark);
parks.set(3, oceanPark);

const streets = new Map();
streets.set('Report', '----STREETS REPORT----');
streets.set(1, meanStreet);
streets.set(2, shortLine);
streets.set(3, prosperLane);
streets.set(4, blueAvenue);

const parksReport = function(){
    let count = 0;
    console.log(parks.get('Report'));
    console.log(`our 3 parks have an average age of ${avgParkAge()} years.`)
    parks.forEach(function(value,key) {
        if(typeof(key) === 'number'){
            count++
            let treeDensity = parks.get(count).treeDensity();
            console.log(`${value.name} has a tree density of ${treeDensity} trees per square km`);
        }
        if(value.numberOfTrees > 1000){
            console.log(`${value.name} has more than 1000 trees.`);
        }
    })

}

const streetReport = function(){
    console.log(streets.get('Report'));
    console.log(`Our 4 streets have a total length of ${totalStreetLength()} km, with an average of ${avgStreetLength()} km.`)
    streets.forEach(function(value,key) {
        if(typeof(key) === 'number'){
            console.log(`${value.name}, built in ${value.buildYear} is a ${value.size} street.`);
        }
    })

}


parksReport();
streetReport();
}

// his solution

/*class Element {
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name,buildYear)
        this.area = area; //km2
        this.numTrees = numTrees;
    }
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`); 
    }
}

class Street extends Element {
    constructor(name,buildYear, length, size = 3) {
        super(name,buildYear)
        this.length = length;
        this.size = size;
    }
    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny')
        classification.set(2, 'small')
        classification.set(3, 'normal')
        classification.set(4, 'big')
        classification.set(5, 'huge')
        console.log(`${this.name}, built in ${this.buildYear} is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215), new Park('National park', 1894, 2.9, 3541), new Park('Oak Park', 1953, 0.4, 949)];
const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), new Street('Evergreen Street', 2008, 2.7, 2), new Street('4th Street', 2015, 0.8), new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur)

    return [sum, sum/ arr.length];
}

function reportParks(p){
    console.log('-----PARKS REPORT-----')

    //Density
    p.forEach(el => el.treeDensity())
    //Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const[totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
    //Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees`);
}

function reportStreets(s) {
    console.log('-----STREETS REPORT -----');

    // total and average length of the town's Streets

    const [totalLength, avglength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total lenght of ${totalLength} km, with an average of ${avglength} km.`);

    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);*/
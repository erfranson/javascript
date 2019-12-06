//Async Await
const getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500)
});

const getRecipe = recID => {
    return new Promise((resolve,reject) => {
        setTimeout(ID => {
            const recipe = {title: 'Fresh tomato pasta', publisher: 'Ethan'};
            resolve(`${recID}: ${recipe.title}`);
        }, 1500, recID);
        
    })
}

const getPub = publisher => {
    return new Promise((resolve, reject) =>{
        setTimeout(pub => {
            const recipe2 = {title: 'Italian Pizza', publisher: 'Ethan'};
            resolve(recipe2)
        }, 1500, publisher)
    });
}

// this is the normal way of consuming promises 
//promises have two methods that can be called on them then/catch
// getIds.then(IDs =>{ // the callback function argument will the result of the promise
//     console.log(IDs);
//     return (getRecipe(IDs[2]));
// })
// .then(recipe =>{
//     console.log(recipe);
//     return getPub(recipe);
// })
// .then(pub => {
//     console.log(`${pub.publisher}: ${pub.title}`);
// })
// .catch(error => {
//     console.log('Error!!');
// })


// This is the Async await way of consuming promises 
// async function runs in the background
async function getRecipesAW() {
    const IDs = await getIds;
    console.log(IDs);
    const recipes = await getRecipe(IDs[2]);
    console.log(recipes);
    const pub = await getPub(recipes)
    console.log(`${pub.publisher}: ${pub.title}`);

    return recipes;
}

// const rec = getRecipesAW();
//this wont return anything because the async function isn't done processing yet. 
// console.log(rec);

//we have to do it here
getRecipesAW().then(result => console.log(`${result} is the best ever!`));
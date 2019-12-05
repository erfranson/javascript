//Promises
//A promise is an object that keeps track about wheter a certain event has happened already or not;
// if it did happen then the promise determines what happens next
//Implements the concept of a future value that we'er expecting

// promise cycle  pending -> event happens -> settled/resolved -> if promise was successfull then promises is fulfilled else it is rejected

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

//promises have two methods that can be called on them then/catch
getIds.then(IDs =>{ // the callback function argument will the result of the promise
    console.log(IDs);
    return (getRecipe(IDs[2]));
})
.then(recipe =>{
    console.log(recipe);
    return getPub(recipe);
})
.then(pub => {
    console.log(`${pub.publisher}: ${pub.title}`);
})
.catch(error => {
    console.log('Error!!');
})


// synchronous javascript means all the lines are executed one after the other, line after line. 
// asynchronous javascript means dynamically load data from the server without affecting the current flow of execution
// we allow asynchronous functions to run in the background
// we pass in callbacks that run once the function has finished its work;
//move on immediately: Non-blocking

//web apis live outside the javascript engine so things like setTimeout(), Dom events, XMLHttpRequest() are included in web APIs


// execution Stack runs the code, if there is an Asychronous request like setTimeout then that waits in the Web API. After the asychronous event returns it sends the event to the message queue where the event loop checks the message queue for the event to push onto the execution stack. 

//example 1
// const second = () => {
//     setTimeout(()=>{
//         console.log('Async Hey there');
//     }, 2000);
// }
// const first = () =>{
//     console.log('Hey there');
//     second();
//     console.log('The End')
// }
// first();

//callback Hell
function getRecipe() {
    setTimeout(()=> {
        const recipeID = [12, 34, 54, 67, 78, 99, 987];
        console.log(recipeID);
        setTimeout((id)=> {
            const recipe  = {title: 'Fresh Tomato Pasta', publisher: 'Ethan'};
            console.log(`${id}: ${recipe.title}`);
            setTimeout(publisher => {
                const recipe2 = {title: 'Italian Pizza', publisher: 'Ethan'}
                console.log(recipe2);
            }, 1500, recipe.publisher)
        }, 1500, recipeID[2])// SetTimeout takes a handler what is, a time, and as many arguements as you want, Id = recipe[2];
    }, 1500);
}
getRecipe()
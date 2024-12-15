//Nested Callback 

//here we have multiple callbacks which becomes difficult to understand. This is calles callback hell;

/*
function getData(dataId,getNextData){
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

getData(1,() => {
    getData(2, () => getData(3));
});

*/


//Promises


//Promise is a javascript object that represents the eventual completion or failure of an asynchronous operation;

/*

 let promise = new Promise((resolve,reject) => {
     console.log("I am a promise");
     resolve("success");
     //reject("some error occured");
 });


*/

/*
function getData(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`Data: ${dataId}`);
            resolve("success");
            
        }, 5000);
    })
}

*/

/*

const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("I am a promise");
         resolve("success");
        // reject("Network error");
    });
};

let promise = getPromise();

promise.then((res) => {
    console.log("promise fulfilled",res);
});

promise.catch((err) => {
    console.log("Error",err);
})
*/

//promise chain

/*

function getData(getId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`fetching data ${getId}`);
            resolve("success");
        },4000);
    });
}

getData(1).then((res) =>{return getData(2)}).then((res) => {
    return getData(3);
}).then((res) => {
    console.log("success");
});


*/

/*



function asyncFunc1(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        },4000);

    });

}

function asyncFunc2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        },4000);

    });

}

console.log("fetching data1...");
asyncFunc1().then((res) => {
    console.log("fetching data2");
    asyncFunc2().then((res) => {

    });
});

*/  


/*
//////async await

function getData(dataId){
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log(`Data ${dataId}`);
            resolve("success");
            
        }, 2000);
    });
}
 
async function getAllData() {
    console.log("fetching data1...");
    await getData(1);
     console.log("fetching data2...");
    await getData(2);
     console.log("fetching data3...");
    await getData(3);
     console.log("fetching data4...");
    await getData(4);
    
}


*/

/*

Promise chaining

const fetchUser = () => {
    return new Promise((resolve,reject) => {

        setTimeout(() => {
            resolve({id:1, name: "Amit Singh"});
        },1000);

    });
};

const fetchPosts = (userId) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(userId == 1){
                resolve(["Post 1","Post 2"]);
            } else{
                reject("Posts not found for this user.");
            }

        },1000);

    });

};

fetchUser().then((user) => {
    console.log("User fetched:", user);
    return fetchPosts(user.id)
}).then((posts) => {
    console.log("Posts fetched",posts);
}).catch((error)  => {
    console.log("Error:",error);
});

*/




const URL = "https://dog.ceo/api/breeds/image/random";


const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    let data = await response.json();

    console.log(data);

    const imgSrc = document.getElementById("dogo");
   
    imgSrc.src = data.message;
 

};

getFacts();

const imgElement = document.getElementById("dogo");
imgElement.addEventListener("click",getFacts);
    
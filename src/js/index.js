import axios from 'axios';

async function getResults(query){
    const key = 'e681c5c8e235db080481a0ab8c0fed20';
    const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
    console.log(res);
}

getResults('pizza');
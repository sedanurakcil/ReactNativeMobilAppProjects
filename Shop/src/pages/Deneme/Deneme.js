import React from 'react'
import {View,Text } from 'react-native'
import axios from "axios";

const Deneme =()=>{
    

const options = {
  method: 'POST',
  url: 'https://books17.p.rapidapi.com/authors/8418015/works',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '06dd174c8bmshb265b57273b41a6p1172c6jsn591f270f7a99',
    'X-RapidAPI-Host': 'books17.p.rapidapi.com'
  },
  data: '{"cursor":1}'
};
console.log('istek alındı')
axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
    console.log('errore girdi')
	console.error(error);
});
   

   

    return (
        <View>
            <Text style = {{fontSize:90}}>lale</Text>

        </View>
    )
}

export default Deneme;
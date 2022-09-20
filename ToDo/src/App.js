

import React, {useState} from 'react';

import {
  Button,

  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';



const App=() => {

  const [input,setInput] = React.useState('');
  const [todos,setTodos] = React.useState([{
    id:1,
    title:'Learn React Native',
    completed:true},]);
  const [counter,setCounter]= React.useState(0);
  

  const addTodo = () => {
    if(input.trim()){
        const newTodo = {
            id:Math.floor(Math.random()*100),
            title:input,
            completed:false
        }
        setTodos([...todos,newTodo]);
        setInput('');
        setCounter(counter+1);
       
    }
}

const toggleTodo = (id) => {
  const newTodos = todos.map(todo => {
      if(todo.id === id){
          todo.completed = !todo.completed;
      }
      return todo;
  });
  setTodos(newTodos);
}

const removeTodo = (id) => {
  const newTodos = todos.filter(todo => todo.id !== id);
  setTodos(newTodos);
  setCounter(counter - 1);
}

 
  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.innerContainer}>
          <Text style = {styles.title}>YAPILACAKLAR</Text>
          <Text style= {styles.number}>{counter}</Text>
       </View>
       
       <View style= {styles.middleContainer}>  
       {todos.map(todo => (
                <View style={{backgroundColor: todo.completed ? "gray" : "green",margin:10,padding:10,borderRadius:10}} key={todo.id}> 
                <Text onLongPress={() =>removeTodo(todo.id)} onPress={() =>toggleTodo(todo.id)} style={{color: "#fff",textDecorationLine: todo.completed ? "line-through" : "none",fontSize:20,}} key={todo.id}>{todo.title}</Text>
                </View>
            ))}
        </View>

       <View style = {styles.bottomContainer}>
        <TextInput  style = {styles.input} placeholder='Yapılacak...'
          onChangeText={(text) => setInput(text)}
        />
        <Separator/>
          <View style = {styles.button}>
          <Button color= 'gray' title = 'Kaydet' onPress= {addTodo}/>
          </View>
        
        </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'black',
    flex:1
  },
  innerContainer:{
    flex:1,
    margin:20,
    flexDirection:'row',
    justifyContent:'flex-end' 
    
  },
  title:{
    fontWeight:'bold',
    fontSize:30,
    color:'#ffa500',
    flex:1

  },
  number:{
    color:'#ffa500',
    fontWeight:'bold',
    fontSize:30,
  },
  bottomContainer:{
    flex:5,
    margin:15,
    borderRadius:10,
    backgroundColor:'#778899'
  },
  input:{
    marginLeft:10,
    fontSize:30,
    color:'#c0c0c0'

  },
  separator: {
    marginVertical:0.5,
    borderBottomColor: '#b0c4de',
    borderBottomWidth:2,
    marginLeft:10,
    marginRight:10
  },
  button: {
    margin:20,
    backgroundColor:'gray',
    borderRadius:15,
    padding:10

     
  },

 
  middleContainer:{ flex:13
  }
  
 
});

export default App;

const Separator = () => (
  <View style={styles.separator} />
);


  
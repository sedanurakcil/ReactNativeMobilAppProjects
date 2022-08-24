import { Dimensions, StyleSheet } from "react-native";

  export default StyleSheet.create({

    container:{
        backgroundColor: '#eceff1',
        margin: 10,
        padding:2,
        borderRadius:10
      
       
    },
    
    image_container:{
        backgroundColor: 'white', 
        borderRadius:10,
        margin:10,
        alignItems: 'center'
 

        
    },

    image:{
        height: Dimensions.get('window').height/3,
        aspectRatio: 0.7,
        resizeMode:"stretch"
    },
    inner_container:{
        padding:2,
        margin:2
    },
    price: {
        fontSize:10,
        marginLeft:2,
        marginTop: 5
    },

    description:{
        fontWeight: 'bold',
        fontSize: 10,
        color: 'red',
        marginLeft:2,
        marginTop: 2
         

    },
    title:{ 
        marginLeft:2,
        fontSize:10,
        fontWeight:'bold',
        color:'black',
       
       

    }




})
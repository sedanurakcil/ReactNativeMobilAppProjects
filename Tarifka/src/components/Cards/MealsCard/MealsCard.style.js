import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{   
        flex: 1,
        margin:10,
        
       
         
    },
    titleContainer:{
        padding:10,
        backgroundColor :'rgba(0, 0, 0, 0.6)',
   
        
    },
    image:{
        width : Dimensions.get('window').width-24,
        height: Dimensions.get('window').height / 4,
        resizeMode:'contain',
        justifyContent: 'flex-end',
        
        
        
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color: 'white',
        textAlign:'right',
        marginRight:5
    }
    
    
})
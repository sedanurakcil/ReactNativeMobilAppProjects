import { StyleSheet,Dimensions } from "react-native"

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue'
        
         
    },

    image:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/3,
        resizeMode: 'contain',
        alignSelf:'center',
        tintColor:'white'
   

    },
    logo_container:{
       justifyContent:'center',
       flex:1 
       
    },

    body_container:{
        flex:1,
        backgroundColor:'blue'

    }
}
)
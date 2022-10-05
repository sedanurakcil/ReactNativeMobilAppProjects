import { StyleSheet ,Dimensions} from "react-native";

export default StyleSheet.create({

    container:{ 
        margin:10,
        backgroundColor:'white',
        height:100,
        flexDirection:'row',
        borderRadius:5,
        borederWidth:5,
        borderTopLeftRadius:100,
        borderBottomLeftRadius:100,
        alignItems:'center'

    },
    image:{
        resizeMode:'contain',
        width:100,
        height:75,
        
        
        
    },
    title:{
        fontSize: 30,
        fontWeight : '400',
        color:'black'
        


    }
 } )
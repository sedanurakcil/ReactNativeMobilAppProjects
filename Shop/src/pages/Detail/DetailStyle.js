import { StyleSheet ,Dimensions} from "react-native";

const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1

    },
    bodyContainer:{
        padding:10},
    image:{
        width: deviceSize.width,
        height: deviceSize.height / 3,
        resizeMode: 'contain',
        backgroundColor: 'white'
    },
    detail:{
         fontStyle: 'italic',
        padding:5},
    title:{
         fontWeight:'bold',
         fontSize:25
    },
    price:{
    textAlign: 'right',
    fontStyle:'italic',
    fontWeight:'bold',
    fontSize:20
}

})
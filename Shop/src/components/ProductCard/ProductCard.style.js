import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor: '#bdbdbd',
        borderWidth:1,
        margin:10,
        flexDirection: 'row',
        borderColor: '#bdbdbd'


    },
    bodyContainer:{
        flex:1,
        justifyContent:'space-between',
        padding:5
    },
    image:{
        flex:3,
        width:50,
        minHeight:50,
         // min yükseklik 100 olsun ama container büyürse onla aynı ölçüde büyücek
         resizeMode:'contain',
         backgroundColor: 'white'
         // resize mode contain olduğu için arka planda kalan fazlalıklar beyaz görünsün

    },
    title:{
        fontSize:18,
        fontWeight:'bold'

    },
    price:{
        textAlign:'right',
        fontSize:16,
        fontStyle:'italic'

    }

})
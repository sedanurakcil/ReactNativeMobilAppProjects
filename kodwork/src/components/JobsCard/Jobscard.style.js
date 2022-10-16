import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({

    container:{
        margin:10,
        padding:2,
        borderWidth:2,
        borderColor:'#d3d3d3',
        borderRadius:10,
        backgroundColor: '#fff',
        paddingBottom:20
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#000000',
        marginLeft:5,

    },
    company:{
        fontSize: 14,
        fontWeight:'bold',
        color:'#000000',
        marginLeft: 5,

    },
    city_body:{
        margin:5,
        padding:5,
        backgroundColor:'red',
        borderRadius:10,
        alignSelf: 'flex-start',
        

    },

    city:{
        color:'white',
        fontWeight:'bold',

        

    },

    level:{
        textAlign:'right',
        color: '#FF5C58',
        fontWeight: '900',
        marginLeft:10,
        fontSize:18


    },
   

});
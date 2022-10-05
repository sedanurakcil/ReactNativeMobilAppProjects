import { StyleSheet, Dimensions} from "react-native"

export default StyleSheet.create({

container:{
    flex:1,
    margin:5,
},
image:{
    width : Dimensions.get('window').width -5,
    height:Dimensions.get('window').height/3

},
bodyContainer:{

},
title:{
 fontSize: 25,
 margin:5,
 fontWeight :'bold',
 color:'red'

},
mealFrom:{
    fontSize: 25,
    margin:5,
    fontWeight :'bold',
    color:'red'

},
desc:{
    margin:5,
    color: 'black',
    textAlign: 'justify',

},
button:{
    borderWidth: 1,
    backgroundColor: 'red',
    margin: 6,
    padding: 4,
    height: 40,
    borderColor: 'red',
    borderRadius: 6,

},
buttonText:{
    textAlign: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '500',

},
separator: {
    borderColor: '#D2D2D2',
    borderWidth: 1,
    marginTop: 3,
    marginBottom: 3,
  },
})
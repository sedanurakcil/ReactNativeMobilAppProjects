

import React,{useState} from 'react';
import {SafeAreaView,StyleSheet,Text,View,FlatList} from 'react-native';
import music_data from './music-data.json'
import SongCard from './components/SongCard';
import Searchbar from './components/SearchBar'





const App= () => {

  const [list, setList] = useState(music_data);

  const renderSong = ({item})=> <SongCard song= {item}/>

  const renderSeperator =()=> <View style ={styles.seperator}/>


  // aramaya göre (text değerine) listeyi set ettik
  const handleSearch = text => {
    const filteredList = music_data.filter(song=>{
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
       return currentTitle.indexOf(searchedText) > -1 ;
      // titileın içinde aranan değer varsa hangi indexte döncek
    });
    setList(filteredList);
  };

  return(
  
    <View style = {styles.Container}>
      <Searchbar onSearch= {handleSearch}/>
      <FlatList
      keyExtractor={item => item.id}
        data= {list}
        renderItem = {renderSong}
        ItemSeparatorComponent={renderSeperator}
        //itemlar arasında istediğim yapıyı eklemeyi sağlar
      />
      </View>
   
   
    
  
  );
};

const styles = StyleSheet.create({
  Container: {flex:1 
  },
  seperator:{
    borderWidth:1,
    // iç çizgiler için
    borderColor:'gray'

  }
  
});

export default App;

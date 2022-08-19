
import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import NewsCard from './components/NewsCard';

import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>News</Text>
      <FlatList

        ListHeaderComponent={() => (
          <ScrollView horizontal= {true} showsHorizontalScrollIndicator={false} >
            {news_banner_data.map(bannerNews => (
            
              <Image
                key={bannerNews.id}
                style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}
                
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={item => item.u_id.toString()}
        
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    
    height: Dimensions.get('window').height / 8,
    width: Dimensions.get('window').width / 4,
  },
  header_text: {
    
    fontWeight: 'bold',
    fontSize: 50,
  },
});

export default App;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, useEffect} from 'react';
 import {
   Button,
   FlatList,
   SafeAreaView,
   Text,
   View,
   TouchableOpacity
 } from 'react-native';
 import styles from '../styling/styles';
 import axios from 'axios';
 
 const posts = ({navigation}) => {
 
   const [posts, setPosts] = useState([])
 
   useEffect(() => {
     axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
       setPosts(res.data)
     }).catch(err => console.log(err))
   }, [])
 
   const renderItem = ({item}) => {
     return (
       <View key={item.id} style={styles.postItem}>
         <Text style={styles.postTitle}>{item.id}. {item.title.substr(0,20)}...</Text>
         <Text style={styles.postBody}>{item.body}</Text>
         <Button title='Go to Post' onPress={() => navigation.navigate('Post', { postId: `${item.id}`})} />
       </View>
     )
   }
 
   return (
    <SafeAreaView style={styles.container}>
     <TouchableOpacity style={styles.createPostButton} onPress={() => navigation.navigate('CreatePost')} ><Text>Create New Post</Text></TouchableOpacity>
     {/* <ScrollView> */}
     <View style={styles.scrollArea}>
       <FlatList data={posts} renderItem={renderItem} keyExtractor={item => item.id}>
     
       </FlatList>
     </View>
     {/* </ScrollView> */}
   </SafeAreaView>
   );
 };
 

 
 export default posts;
 
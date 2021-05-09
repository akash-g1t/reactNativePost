import axios from 'axios';
import React, { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    Alert,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import styles from '../styling/styles';

const CreatePost = ({navigation}) => {
    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const [post, setPost] = useState({})
    
    const handleSubmit = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title,
            body,
            userId: 1
        }) 
        .then(res => {
            console.log('post response is : ', res.data)
            setPost(res.data)
            setTitle()
            setBody()
        })
        .catch(err => console.log(err))
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View>
                <View style={styles.CreatePost}>
                    <TextInput placeholder='Enter a Title' value={title} onChangeText={setTitle} />
                </View>
                <View style={styles.CreatePost}>
                    <TextInput placeholder='Paragraph' value={body} onChangeText={setBody} />
                </View>
                <Button onPress={handleSubmit} title='Submit' />
                { post.id && 
                <View style={stylesInline.postView}>
                    <Text style={styles.postTitle}>{post.id}. {post.title && post.title.substr(0, 20)}...</Text>
                    <Text style={styles.postBody}>{ post.body}</Text>
                </View>
                }
            </View>
        </TouchableWithoutFeedback>
    )
}


const stylesInline = StyleSheet.create({
    postView: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#75e5ff',
        borderRadius: 8
    }
})

export default CreatePost;
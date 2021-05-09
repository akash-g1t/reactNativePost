import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';
import axios from 'axios';
import styles from '../styling/styles'

const Post = ({navigation, route}) => {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    
    useEffect( async () => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.postId}`)
            setPost(res.data)
            const commentsRes = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${route.params.postId}`)
            setComments(commentsRes.data)
        } catch (error) {
            console.log(error)
        }
    }, [])
    
    const renderItem = ({ item }) => {
        return (
            <View key={item.id} style={styles.CommentItem}>
                <Text style={styles.SingleCommentTitle}>{item.id}. {item.name.substr(0,20)}...</Text>
                <Text style={styles.SingleCommentTitle}>{item.email}</Text>
                <Text style={styles.SingleCommentBody}>{item.body}</Text>
            </View>
        )
    }

    return (
    <View style={styles.container}>
        <Text style={{ marginTop: 5}}>Post</Text>
        <View key={post.id} style={styles.SinglepostItem}>
            <Text style={styles.SinglePostTitle}>{post.id}. {post.title && post.title.substr(0, 20)}...</Text>
            <Text style={styles.SinglePostBody}>{post.body}</Text>
        </View>
        <Text>Comments</Text>
        <View style={styles.scrollAreaComments}>
            <FlatList data={comments} renderItem={renderItem} keyExtractor={item => item.id} />
        </View>
    </View>
    )
}

export default Post;
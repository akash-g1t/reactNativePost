import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  scrollArea: {
    margin: 10,
    width: '100%',
    borderRadius: 8,
  },
  scrollAreaComments: {
    flex: 1,
    margin: 10,
    width: '100%',
    borderRadius: 8,
  },
  SinglepostItem: {
    margin: 10,
    padding: 20,
    width: ('100%'),
    backgroundColor: '#75e5ff',
    borderRadius: 8,
  },
  CommentItem: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: '#caedf5',
    borderRadius: 8,
  },
  postItem: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: '#75e5ff',
    borderRadius: 8,
  },
  SingleCommentTitle: {
    fontSize: 15,
  },
  SingleCommentBody: {
    fontSize: 10,
  },
  SinglePostTitle: {
    fontSize: 20,
  },
  SinglePostBody: {
    fontSize: 15
  },
  postTitle: {
    fontSize: 30,
  },
  postBody: {
    fontSize: 20,
  },
  createPostButton: {
    marginTop: 70,
    padding: 20,
    backgroundColor: '#75e5ff',
    borderRadius: 8,
  },
  CreatePost: {
    padding: 10,
  },
});

export default styles;

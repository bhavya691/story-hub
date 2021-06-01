import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Header from '../Header';
import firebase from 'firebase';
import db from '../config';

export default class WriteStory extends React.Component{
    constructor(){
        super();
        this.state = {
            title: '',
            author: '',
            story: ''
        }
    }
    submitStory = async () => {
        const title = this.state.title;
        const author = this.state.author;
        const story = this.state.story;
        if(title !== '' && author !== '' && story !== ''){
            db.collection('story').add({
                'Author': author,
                "Title": title,
                "Story": story
            })
            alert('Your story is submitted.')
        }else{
            alert('Please fill all the fields.')
        }
    }
    render(){
        return (
            <View>
                <Header />
                <View style={styles.container}>
                    <View style={styles.form}>
                        <TextInput style={styles.title} type='text' autoComplete='off' onChangeText={(title) => {
                                this.setState({title: title})}} value = {this.state.text} placeholder='Story Title'
                        />
                        <TextInput style={styles.author} type='text' autoComplete='off' onChangeText={(author) => {
                                this.setState({author: author})}} value = {this.state.text} placeholder='Author'
                        />
                        <TextInput style={styles.textBox} type='text' autoComplete='off' onChangeText={(story) => {
                                this.setState({story: story})}} value = {this.state.text} placeholder='Write your story' multiline = {true}
                        />
                        <TouchableOpacity style={styles.btn} onPress={this.submitStory}>
                            <Text style={styles.btnText}>Submit</Text>
                        </TouchableOpacity>
                </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f5f5f5',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        width: '90%',
        height: 50,
        borderWidth: 3,
        padding: 10,
        backgroundColor: '#fff',
        fontWeight: 700
    },
    author:{
        width: '90%',
        height: 50,
        borderWidth: 3,
        padding: 10,
        backgroundColor: '#fff',
        fontStyle: 'italic',
        fontWeight: 500
    },
    textBox:{
        width: '90%',
        height: 200,
        borderWidth: 3,
        backgroundColor: '#fff',
    },
    form:{
        height: '70%',
        width: '60%',
        marginBottom: 150,
        backgroundColor: 'pink',
        borderWidth: 3,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    btn:{
        borderWidth: 3,
        width: '50%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgreen',
        borderRadius: 50
    },
    btnText:{
        fontWeight: 600,
        fontSize: 30
    }
})

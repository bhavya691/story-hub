import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Header from '../Header';
import firebase from 'firebase';
import db from '../config';
import Fakedata from '../FakeData.json';

export default class ReadStory extends React.Component{
    constructor(){
        super();
        this.state = {
            searchedWord: '',
            allStories: [],
            dataSourceList: null,
        }
    }

    componentDidMount = async () => {
        const query = await db.collection('story').get();
        query.docs.map((doc) => {
            var data = doc.data();
            this.setState({
                allStories: [...this.state.allStories, doc.data()]
            })
        })
    }

    fetchMoreStories = async () => {
        const query = await db.collection('story').startAfter(this.state.dataSourceList).limit(2).get()
        query.docs.map((doc) => {
            this.setState({
                allStories: [...this.state.allStories, doc.data()],
                dataSourceList: doc
            })
        })
    }

    render(){
        return (
            // <ScrollView>
            //     <Header />
            //     <View>
                    // <SearchBar 
                    // placeholder='Search what do you want?'
                    // onChangeText = {(searchedWord) => {
                    //     this.setState({
                    //         searchedWord
                    //     })
                    // }}
                    // value = {this.state.searchedWord}
                    // style = {{color: '#fff', paddingLeft: 10}}
                    // />

                <FlatList 
                data = {this.state.allStories}
                renderItem = {({item}) => {
                    <View>
                        <Text>
                            {"Title: " + item.Title}
                        </Text>
                        <Text>
                            {"Author: " + item.Author}
                        </Text>
                    </View>
                }}
                keyExtractor = {(item, index) => index.toString()}
                onEndReached = {this.fetchMoreStories}
                onEndReachedThreshold = {0.7}
                />
                        // {/* {Fakedata.filter((val) => {
                        //     if(this.state.searchedWord == ''){
                        //         return val
                        //     }else if(val.first_name.toLowerCase().includes(this.state.searchedWord.toLowerCase()) || val.last_name.toLowerCase().includes(this.state.searchedWord.toLowerCase()) ){
                        //         return val
                        //     }
                        // }).map((val, key) => {  
                        //     return(
                        //         <View style={{display: 'flex', justifyContent: 'center', alignItems: 'left', borderBottomWidth: 3, paddingTop: 8, paddingBottom: 8, marginTop:8}}>
                        //             <Text style={{fontSize: 15, marginTop: 10}}>Firest Name: {val.first_name}</Text>
                        //             <Text style={{fontSize: 15, marginTop: 10}}>Last Name: {val.last_name}</Text>
                        //         </View>
                        //         )
                        //     })
                        // } */}
            //     </View>
            // </ScrollView>
        )
    }
}



import React, {Component} from 'react';
import './App.css';
import Topic from "./Topic";
import TopicInformation from "./TopicInformation";
import TopicList from "./TopicList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './AppHeader';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            topics : [
                { title: 'rajuu menoo', descpt: 'koodattu nii vituiks. ',addscr: 'Ressu Redfordin lyriikat.'}
            ]
        }
    }

    componentDidMount() {
        const setTopics = (topics) => {
            console.log(topics)
            this.setState({
                topics
            })
        }

        fetch("http://localhost:8080/api/topics")
            .then((response) => {
                return response.json();
            })
            .then(setTopics)
            .catch((error)=> {
                console.log(error)

            })
    }

    addTopic = (topic) => {
        fetch("http://localhost:8080/api/topics", {
            method:"POST",
            headers : {'content-type': 'application/json'},
            body:JSON.stringify(topic),

        })
            .then(response=> {
                console.log(topic)
            })
    }



    render() {



        return (
            <div className="App">

                <h1>Topic Diary</h1><br/>
                    <h2>New Topic</h2><br/>
                <Topic viittaus = {this.addTopic}/>
                {this.state.topics.map ((topic) => (
                    <TopicInformation  topic = {topic}/>
                ))}


            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import Topic from "./Topic";
import TopicInformation from "./TopicInformation";
import 'bootstrap/dist/css/bootstrap.min.css';
import {unstable_renderSubtreeIntoContainer} from "react-dom";


class OldTopic extends React.Component {
    constructor() {
        super();
        this.state = {
            topics : [
                { title: 'rajuu menoo', descpt: 'koodattu nii vituiks. ',addscr: 'Ressu Redfordin lyriikat.'}
            ]
        }
    }

    UNSAFE_componentWillMount() {
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

                <h1>Old Topics</h1><br/>

                {/*<Topic viittaus = {this.addTopic}/>*/}
                {this.state.topics.map ((topic) => (
                    <container>
                    <TopicInformation  topic = {topic}/>
                    </container>
                ))}<br/>


            </div>

        );
    }
}

export default OldTopic;

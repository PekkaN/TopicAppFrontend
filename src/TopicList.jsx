// import React, {Component} from 'react';
//
// const TopicJson = {
//     "title":{this.props.topic.title},
//     "descpt":{this.props.topic.descpt},
//     "addsrc":{this.props.topic.addscr},
//     "done":{this.props.topic.donebl}
// }
//
// const LOCALSTORAGE_KEY = 'someJson'
//
// class SomeComponent extends React.Component {
//     constructor (props) {
//         super(props)
//
//         this.json = {}
//     }
//
//     componentWillMount () {
//         this.loadJson()
//     }
//
//     validateJson (json) {
//         let validJson
//
//         try{
//             validJson = JSON.stringify(JSON.parse(this.state.json), null, 2)
//         } catch(e) {
//             throw e
//         }
//
//         return validJson
//     }
//
//     loadJson = () => {
//         const json = window.localStorage.getItem(LOCALSTORAGE_KEY) || JSON.stringify(TopicJson, null, 2)
//         this.setState({ json })
//     }
//
//     saveJson = () => {
//         const validJson = this.validateJson(this.state.json)
//
//         if (!validJson) return;
//
//         window.localStorage.setItem(
//             LOCALSTORAGE_KEY,
//             validJson
//         )
//     }
//
//     handleChange = e => this.setState({
//         json: e.target.value
//     })
//
//     export default TopicList;
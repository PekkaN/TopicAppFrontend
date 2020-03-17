import React, {Component} from 'react';
import UpdatePopup from './Modal';
import Modal from "react-bootstrap/Modal";
import Navigation from "./AppHeader";
import Button from "react-bootstrap/Button";


class TopicInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.topic.title,
            description: this.props.topic.description,
            additionalsource: this.props.topic.additionalsource,
            complete: this.props.topic.complete,
            id: this.props.topic.id

        }
        this.deleteTopic = this.deleteTopic.bind(this)
    }


    deleteTopic() {

        fetch("http://localhost:8080/api/topics/" + this.state.id, {
            method: "DELETE",
            headers : {'content-type': 'application/json'}
        })
            .then(response => {
                console.log(response)
            })
        document.location.reload()
    }



    // editTopic() {
    // <div>
    //     <UpdatePopup show={modalShow} onHide={() => setModalShow(false)}/>
    // </div>
    // }

    render() {
        return (
            <div>
                <h2>Topic information</h2>
                <h3>Title:</h3> <h3>{this.props.topic.title}</h3>
                <h4>Description:</h4> <p>{this.props.topic.description}</p>
                <h4>Additional source:</h4> <p><br/>{this.props.topic.additionalsource}</p>
                <h4>Done:</h4> <p>{this.props.topic.complete}</p>
                <input type="button" class="btn btn-secondary btn-lg"  defaultValue="Edit" onClick={this.editTopic}/>
                <input type="button" class="btn btn-secondary btn-lg" defaultValue="Delete" onClick={this.deleteTopic}/>

            </div>
        );
    }
}

export default TopicInformation;

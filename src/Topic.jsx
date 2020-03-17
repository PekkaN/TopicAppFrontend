import React, {Component} from 'react';

class Topic extends Component {
    state = {title: '', description: '', additionalsource:'',complete:false}
    done;

    jokuMuuttu = (e)=> {
        const olio = {}
        olio[e.target.name] = e.target.value;
        this.setState(olio);
    }

    lahetaLomake = () => {
        console.log("jee")
        this.props.viittaus(this.state)
        this.setState({title: ''})
        this.setState({description: ''})
        this.setState({additionalsource: ''})
        this.setState({complete: this.done})



    }


    render() {
        return (
            <div>
                <input name="title" placeholder ={"Title"} value={this.state.title} onChange={this.jokuMuuttu}/><br/><br/>
                <input name="description" placeholder ={"Description"} value={this.state.description} onChange={this.jokuMuuttu}/><br/><br/>
                <input name="additionalsource" placeholder ={"Source"} value={this.state.additionalsource} onChange={this.jokuMuuttu}/><br/><br/>



                <br/>
                <br/>

                <input type="button" value="Submit" className="btn btn-primary"  size="xl" onClick={this.lahetaLomake}/>
            </div>

        );
    }


}

export default Topic;

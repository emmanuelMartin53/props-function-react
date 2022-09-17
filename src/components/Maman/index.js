
import {Component} from 'react';
import Toto from '../Toto';

class Maman extends Component {

        state = {
            messageMaman : null,
            messageToto : null,
            disabled: true
        }

    orderMom = (event) => {
        this.setState({
            messageMaman: event,
            disabled: false
        })
    }

    responseToto = (message) => {
        this.setState({
            messageToto: message
        })
    }

 
    render() {

        return (
            <div>
                <h1>Maman</h1>
                <button
                 onClick={() => this.orderMom("Va ranger ta chambre !")}
                 >
                    Ordre de maman!
                </button>
                <p>{this.state.messageMaman}</p>
                <hr />
                <Toto name="Toto" state={this.state} responseToto={this.responseToto} />
            </div>
        )
    }

    
}

export default Maman;



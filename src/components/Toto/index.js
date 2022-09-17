

const Toto = (props) => {

    console.log(props.state);

    
    return (
        <div>
            <h2>{props.name}</h2>
            <button
            disabled={props.state.disabled}
            onClick={() => props.responseToto("Non! je veux jouer à la playstation")}
            >
                Réponse
            </button>
             
            <p>{props.state.messageToto}</p>
        </div>
    )
}
export default Toto; 
const Events = () => {
    const handleMyEvent = (e) => {
        console.log('Clicou no botão');
    }

    const renderSomething = (X) => {
        if(X){
            return <h1>Verdadeiro!</h1>;
        }else{
            return <h1>Falso!</h1>;
        }
    };

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Arriba")}>Clique aqui</button>
                <button onClick={() =>{
                    if(true){
                        console.log("Verdadeiro");
                }}}>Clique aqui tambem!</button>
            </div>
            <br />
            {renderSomething(true)}
        </div>
    )

};

export default Events;
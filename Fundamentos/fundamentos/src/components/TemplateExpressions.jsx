const TemplateExpressions = () => {

const name = 'React';
const data = {
    age: 31,
    job: 'Developer',
    company: 'Google'
}

    return(
    <div>
        <h1>Olá {name}, tudo bem?</h1>
        <p>Você atua como: {data.job}</p>
        <br />
        <p>5+5 = {5+5}</p>
        <p>{console.log("JSX REACT")}</p>
    </div>
);


};

export default TemplateExpressions;
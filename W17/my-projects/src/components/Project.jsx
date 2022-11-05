const Project = ({ title, desc, stack}) => {

    return (
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <ul>
                {stack?.map((ln, i) => <li key={`stack-${i}`}>{ln}</li>)}
            </ul>
        </div>
    );
};

export default Project;
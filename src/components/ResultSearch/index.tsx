import './styles.css';

type Props = {
    title: string;
    description: string;
}

const ResultSearch = ( { title, description } : Props) => {

    return (
        <div className="result-container">            
            <p className="result-description"><strong>{title}:</strong> {description}</p>
        </div>
    );
}

export default ResultSearch;
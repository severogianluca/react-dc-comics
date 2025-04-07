
function Card(props){
    const comics = props.Comics
    
    return(
        <>
            <div className="card-container">
            {comics.map(element =>
                <div key={element.id} className="new-card">
                    <img src={element.thumb} alt={element.title} />
                    <p>{element.series}</p>
                    
                </div>
            )}
            </div>
        </>
    )
}

export default Card


{/* <>
{comics.map(element =>{
    <div>
        <img src={element.thumb} alt={element.title} />
        <h4>{element.series}</h4>
    </div>
})}
</> */}
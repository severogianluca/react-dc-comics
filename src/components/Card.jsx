
function Card(props){
    const comics = props.Comics
    
    return(
        <>

            {comics.map(element =>
                <div key={element.id}>
                    <img src={element.thumb} alt={element.title} />
                    <h4>{element.series}</h4>
                    
                </div>
            )}
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
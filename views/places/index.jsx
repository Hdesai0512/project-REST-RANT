const router = require("../../controllers/places")

function index (data){
    let placesFormatted = data.places.map((place, index) => {
        return (
            <div className="col-sm-6">
                <a href={`/places/${index}`}>
                <h2>{place.name}</h2>
                </a>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src= {place.pic} alt={place.name}/>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    
return (
    <Def>
        <main>
            <h1>Places to Rant or Rave About</h1>
            <div className="row">
                {placesFormatted}
            </div>
        </main>
    </Def>
)
}

module.exports= index
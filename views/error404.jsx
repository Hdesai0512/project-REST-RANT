const React = require('react')
const Def = require('./default')

function error404() {
    return (
      <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page! </p>
             <div>
                <img src="images/Rick.jpg" alt= "Hammster" />
                </div>
            <div>
            Photo by <a href="AUTHOR_LINK">Ricky  Kharawala</a> on <a href="https://unsplash.com/s/photos/animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            
                
             
            </main>
        </Def>



    )
}

module.exports = error404


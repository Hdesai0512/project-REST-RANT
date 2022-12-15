const router = require('express').Router()


router.get('/', (req, res) => {
    res.render('GET/places')
})

router.get('/new', (req, res) => {
    res.render('places/new')
  })



let places = [{
    name: 'Viceroy',
    city: 'Durham',
    state: 'NC',
    cuisnes: 'Indian, South-Indian',
    pic:'/images/Andy.jpg'
}, {
    name: 'Coffee Bean',
    city: 'Fayetteville',
    state: 'NC',
    cusines: 'Coffee, Cafe',
    pic: 'images/Coffee.jpg'
}
]

  
module.exports = router

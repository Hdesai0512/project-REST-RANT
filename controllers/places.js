const router = require('express')

router.get('/',(req,res) => {
    router.send('Get /places')
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

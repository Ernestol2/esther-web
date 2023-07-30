import salado1 from '../images/salado1.jpeg'
import salado2 from '../images/salado2.jpeg'
import salado3 from '../images/salado3.jpeg'
import salado4 from '../images/salado4.jpeg'
import salado5 from '../images/salado5.jpeg'
import salado6 from '../images/salado6.jpeg'

const salados = [
    {
        id: 0,
        name:'Tequeños',
        price: '20$',
        description: "Tequeños rellenos de queso",
        imageUrl: `${salado1}`
    },
    {
        id: 1,
        name:'Tartaletas de Atun',
        price: '89€',
        imageUrl: `${salado2}`
    },
    {
        id: 2,
        name:'Empanadas',
        price: '79€',
        imageUrl: `${salado3}`
    },
    {
        id: 3,
        name:'Tostones con queso',
        price: '99€',
        imageUrl: `${salado4}`
    },
    {
        id: 4,
        name:'Canapes',
        price: '89€',
        imageUrl: `${salado5}`
    },
    {
        id: 5,
        name:'Bolitas de carne y tartara',
        price: '119€',
        imageUrl: `${salado6}`,
    }
]

export default salados
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Catalog from "./components/pages/Catalog";
import Cart from "./components/pages/Cart";
import Footer from './components/Footer/Footer';
import ItemDetails from "./components/pages/ItemDetails/ItemDetails"


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/catalog'>
            <Catalog list={items}/>
          </Route>  
          <Route path='/item/:id'>
            <ItemDetails list={items}/>
          </Route>
          <Route path='/cart' exact component={Cart} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

const items = [
  {
    id: 1,
    type:"Rods",
    condition: "New",
    header: 'Johnny Morris CarbonLite 2.0 Casting Rod',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium doloremque porro quibusdam sapiente, animi consectetur impedit molestiae aperiam iste quisquam dignissimos optio recusandae consequatur velit architecto deleniti. Adipisci, fuga.",
    price: 199.99,
    alt: "fishing rod",
    img: 'https://basspro.scene7.com/is/image/BassPro/2344801_178909_is?$Prod_PLPThumb$'
  },
  {
    id: 2,
    type:"Rods",
    condition: "Used",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium doloremque porro quibusdam sapiente, animi consectetur impedit molestiae aperiam iste quisquam dignissimos optio recusandae consequatur velit architecto deleniti. Adipisci, fuga.",
    header: 'Johnny Morris Platinum Signature Casting Rod',
    price: 179.99,
    alt: "fishing rod",
    img: 'https://basspro.scene7.com/is/image/BassPro/2455097_100054092_is?$Prod_PLPThumb$'
  },
  {
    id: 3,
    type:"Rods",
    condition: "Used",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium doloremque porro quibusdam sapiente, animi consectetur impedit molestiae aperiam iste quisquam dignissimos optio recusandae consequatur velit architecto deleniti. Adipisci, fuga.",
    header: 'Johnny Morris CarbonLite 2.0 Spinning Rod',
    price: 119.99,
    alt: "fishing rod",
    img: 'https://basspro.scene7.com/is/image/BassPro/2455126_100054110_is?$Prod_PLPThumb$'
  },
  {
    id: 4,
    type:"Rods",
    condition: "New",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium doloremque porro quibusdam sapiente, animi consectetur impedit molestiae aperiam iste quisquam dignissimos optio recusandae consequatur velit architecto deleniti. Adipisci, fuga.",
    header: 'Pro Qualifier 2 Casting Rod',
    price: 99.99,
    alt: "fishing rod",
    img: 'https://basspro.scene7.com/is/image/BassPro/2360433_165606_is?$Prod_PLPThumb$'
  },
  {
    id: 5,
    type:"Lures",
    condition: "Used",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium doloremque porro quibusdam sapiente, animi consectetur impedit molestiae aperiam iste quisquam dignissimos optio recusandae consequatur velit architecto deleniti. Adipisci, fuga.",
    header: 'Rapala X-Rap Long Cast Shallow',
    price: 12.99,
    alt: "lures",
    img: 'https://basspro.scene7.com/is/image/BassPro/2348337_180627_is?$Prod_PLPThumb$'
  },
  {
    id: 6,
    type:"Lures",
    condition: "New",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium doloremque porro quibusdam sapiente, animi consectetur impedit molestiae aperiam iste quisquam dignissimos optio recusandae consequatur velit architecto deleniti. Adipisci, fuga.",
    header: 'Bill Lewis Original Rat-L-Trap',
    price: 6.49,
    alt: "lures",
    img: 'https://basspro.scene7.com/is/image/BassPro/2452112_7601_is?$Prod_PLPThumb$'
  },
  {
    id: 7,
    type:"Fishing Sale",
    condition: "New",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium doloremque porro quibusdam sapiente, animi consectetur impedit molestiae aperiam iste quisquam dignissimos optio recusandae consequatur velit architecto deleniti. Adipisci, fuga.",
    header: 'Cabela\'s Prodigy Ice Spinning Combo',
    price: 49.99,
    alt: "ice rod",
    img: 'https://basspro.scene7.com/is/image/BassPro/2776279_100320866_is?$Prod_PLPThumb$'
  },
  {
    id: 8,
    type:"Bowfishing",
    condition: "New",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium doloremque porro quibusdam sapiente, animi consectetur impedit molestiae aperiam iste quisquam dignissimos optio recusandae consequatur velit architecto deleniti. Adipisci, fuga.",
    header: 'Cajun Archery Sucker Punch RTF (Ready To Fish) Bow Package',
    price: 123,
    alt: "bowfishing",
    img: 'https://basspro.scene7.com/is/image/BassPro/2098510_14012309062612_is?$Prod_PLPThumb$'
  }
]

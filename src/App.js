import React,{useState} from 'react'
import {ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './ui/Header'
import theme from './ui/Theme'
import LandingPage from './pages/Home'
import Footer from './ui/Footer';
import BirthdayCollections from './pages/BirthdayCollections';
import AnniversayCollections from './pages/AnniversaryCollections'
import ProductPage from './pages/ProductPage'
import Cart from './pages/Cart'
function App() {
  const [cart,setCart]=useState([]);
  
  const handleCartClick =(name,price,source)=>{
    
    const cartData = {name:name,price:price,source:source}
    const cartList = cart
    cartList.push(cartData)
    setCart(cartList)
    console.log(cart);
    
  }

  const handleDeleteCart = (name,price,source)=>{
    
    
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header></Header>

      <Switch>
        <Route path="/" exact 
        render={(props)=>
        
          <LandingPage
          ></LandingPage>
        
        }
       ></Route>
        <Route path="/birthdaycollections" exact 
        
        render={(props)=>
        <BirthdayCollections></BirthdayCollections>
        }
        
        ></Route>

<Route path="/birthdaycollections/:product" exact 
        
        render={(props)=>
        <ProductPage
        title={props.location.title}
        name={props.location.name}
        source={props.location.source}
        price={props.location.price}
        handleCartClick={handleCartClick}
      
        ></ProductPage>
        }
        ></Route>

<Route path="/anniversarycollections" exact 
        
        render={(props)=>
        <AnniversayCollections></AnniversayCollections>
        }
        
        ></Route>

<Route path="/anniversarycollections/:product" exact 
        
        render={(props)=>
        <ProductPage
        title={props.location.title}
        name={props.location.name}
        source={props.location.source}
        price={props.location.price}
        handleCartClick={handleCartClick}
        
        ></ProductPage>
        }
        ></Route>

<Route path="/cart" exact 
        
        render={(props)=>
        <Cart
        title={props.location.title}
        name={props.location.name}
        source={props.location.source}
        price={props.location.price}
        cartData={cart}
        handleDeleteCart={handleDeleteCart}
        ></Cart>
        }
        ></Route>

        </Switch>
        <Footer></Footer>
    </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;

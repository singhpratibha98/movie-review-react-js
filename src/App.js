// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer'
import Main from './Main';

function App() {
  return (
    <div style={{backgroundColor:"black"}}>
       <Header/>
    <div  style={{margin:"5%", padding:"20px"}} >
    <Main 
    img="https://i.pinimg.com/564x/5b/58/68/5b5868c52057d2a1ba26f560438a9274.jpg"
    title="Squid Game"
    subtitle = "2021,	Hwang Dong-hyuk"
    rating = {5}
     des = "Squid Game is a show that will stay in your mind long after you watched it. After reading all the great reviews and seeing it was one of the most watched series in the entire world I finally found time to watch Squid Game. I have to admit that I had fun watching it and was very entertained throughout the entire season."
     bg = "https://www.onmanorama.com/content/dam/mm/en/entertainment/movie-reviews/images/2021/9/28/squid-game-review-1.jpg.transform/845x440/image.jpg"
    />
    </div>

    <div  style={{margin:"5%", backgroundColor:"black", padding:"20px"}} >
    <Main 
    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMCiM84x0b1m2m5j77kzxrg9JFrosLlJod8H3CchQxqRHs97WV9LjTyIFTghGEtIMguPQ&usqp=CAU"
    title="Fighter"
    subtitle = "2024,Saurabh Shrikhande"
    rating = {5}
     des = "Double-sided Advance poster for Fighter superhero blockbuster, directed by Saurabh Shrikhande. The upcoming movie fighter starring hrithik roshan and deepika padukone in a lead role.the film will be released on 30 september 2022.Film director siddharth anand opened his own production house"
     bg = "https://www.theindianwire.com/wp-content/uploads/2022/03/FIGHTER-POSTER.jpg"
    />
    </div>


    <Footer/>
    </div>
    // <div className="App">
    //   <h1>saurabh</h1>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p> 
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
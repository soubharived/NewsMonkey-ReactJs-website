
import React, { useStategit  } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

const App=()=>{
  
 let api = process.env.REACT_APP_NEWS_API


const [page, setpage] = useState(5);
const [country, setCountry] = useState("in")
const [category, setCategory] = useState("general")
const [progress, setprogress] = useState(0)
  

    

  
  const setProgress =(progress)=>{
    setprogress(progress);
   

  }
  
 


  const chooseCategory = (category)=>{
    setCategory(category);
  
  }



  const chooseCountry = (country) => {
    setCountry(country);
    

    console.log("onclick changed to" + country)

  }




  
    return (
      <>
        <Router>
          <LoadingBar
          height={3}
            color='#f11946'
            progress = {progress}
            
          />
          <Navbar country={chooseCountry} category={chooseCategory} />




          <Routes>
            <Route exact path="/" element={<News  setProgress={setProgress} apiKey ={ api}  key="general" pagesize={page} country={country} category="general" />} />
            <Route exact path="/general" element={<News  setProgress={setProgress} apiKey ={ api}  key="general" pagesize={page} country={country} category="general" />} />

            <Route exact path="/business" element={<News  setProgress={setProgress} apiKey ={ api}  key="business" pagesize={page} country={country} category="business" />} />
            <Route exact path="/entertainment" element={<News  setProgress={setProgress} apiKey ={ api}  key="entertainment" pagesize={page} country={country} category="entertainment" />} />
            <Route exact path="/sports" element={<News  setProgress={setProgress} apiKey ={ api}  key="sports" pagesize={page} country={country} category="sports" />} />
            <Route exact path="/science" element={<News  setProgress={setProgress} apiKey ={ api}  key="science" pagesize={page} country={country} category="science" />} />
            <Route exact path="/technology" element={<News  setProgress={setProgress} apiKey ={ api}  key="technology" pagesize={page} country={country} category="technology" />} />
            <Route exact path="/health" element={<News  setProgress={setProgress} apiKey ={ api}  key="health" pagesize={page} country={country} category="health" />} />


            <Route exact path="/in" element={<News  setProgress={setProgress} apiKey ={ api}  key="in" pagesize={page} country="in" category = {category}/>} />
            <Route exact path="/us" element={<News  setProgress={setProgress} apiKey ={ api}  key="us" pagesize={page} country='us' category = {category}/>} />
            <Route exact path="/ae" element={<News  setProgress={setProgress} apiKey ={ api}  key="ae" pagesize={page} country='ae' category = {category}/>} />
            <Route exact path="/ar" element={<News  setProgress={setProgress} apiKey ={ api}  key="ar" pagesize={page} country='ar' category = {category}/>} />
            <Route exact path="/at" element={<News  setProgress={setProgress} apiKey ={ api}  key="at" pagesize={page} country='at' category = {category}/>} />
            <Route exact path="/au" element={<News  setProgress={setProgress} apiKey ={ api}  key="au" pagesize={page} country='au' category = {category}/>} />
            <Route exact path="/be" element={<News  setProgress={setProgress} apiKey ={ api}  key="be" pagesize={page} country='be' category = {category}/>} />
            <Route exact path="/bg" element={<News  setProgress={setProgress} apiKey ={ api}  key="bg" pagesize={page} country='bg' category = {category}/>} />
            <Route exact path="/br" element={<News  setProgress={setProgress} apiKey ={ api}  key="br" pagesize={page} country='br' category = {category}/>} />
            <Route exact path="/ca" element={<News  setProgress={setProgress} apiKey ={ api}  key="ca" pagesize={page} country='ca' category = {category}/>} />
            <Route exact path="/ch" element={<News  setProgress={setProgress} apiKey ={ api}  key="ch" pagesize={page} country='ch' category = {category}/>} />
            <Route exact path="/cn" element={<News  setProgress={setProgress} apiKey ={ api}  key="cn" pagesize={page} country='cn' category = {category}/>} />
            <Route exact path="/co" element={<News  setProgress={setProgress} apiKey ={ api}  key="co" pagesize={page} country='co' category = {category}/>} />
            <Route exact path="/cu" element={<News  setProgress={setProgress} apiKey ={ api}  key="cu" pagesize={page} country='cu' category = {category}/>} />
            <Route exact path="/cz" element={<News  setProgress={setProgress} apiKey ={ api}  key="cz" pagesize={page} country='cz' category = {category}/>} />
            <Route exact path="/de" element={<News  setProgress={setProgress} apiKey ={ api}  key="de" pagesize={page} country='de' category = {category}/>} />
            <Route exact path="/eg" element={<News  setProgress={setProgress} apiKey ={ api}  key="eg" pagesize={page} country='eg' category = {category}/>} />
            {/* <Route exact path="/cz" element={<News  setProgress={ setProgress} apiKey ={ api}  key="ae" pagesize={page} country='ae' />} />
            <Route exact path="/cz" element={<News  setProgress={ setProgress} apiKey ={ api}  key="ae" pagesize={page} country='ae' />} /> */}










          </Routes>
        </Router>

      </>


    )
  
}

export default App

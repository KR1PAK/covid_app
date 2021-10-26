import React, {useEffect, useState} from "react";
import City from "./components/city/City";
import "./app.scss"
import Header from "./components/header/header";
import Board from "./components/Board/Board";

function App() {
  const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.covid19api.com/summary")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result.Countries);
                },
            )
    }, [])

    const [value, setValue] = useState('');

    const filtredCountries = items.filter(item => {
        return item.Country.toLowerCase().includes(value.toLowerCase())
    })

    return (
    <div className="App">
        <div className="container">
            <Header setValue={setValue}/>
            <Board/>
            <div className="city_wrapper">
                {filtredCountries.map((item, index) => (
                    <City key={item.ID}  item={item} index={index}/>
                ))}
            </div>
        </div>
    </div>
  );
}

export default App;

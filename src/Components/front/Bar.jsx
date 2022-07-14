import { useContext, useEffect, useState, useRef } from "react";
import { filterPrice, sortProducts } from "../../Actions/products";
import FrontContext from "../../Contexts/FrontContexts";

function Bar() {

    const [select, setSelect] = useState('default_sort');

    const {dp, min, max} = useContext(FrontContext);

    const[minRange, setMinRange] = useState(0)
    const[maxRange, setMaxRange] = useState(0)

    const run = useRef(true);

    useEffect(() => {
        if (run.current) {
            run.current = false;
            return;
        }
        console.log(select)
        dp(sortProducts(select));
    }, [select, dp]);

    useEffect(() => {
        if (run.current) {
            run.current = false;
            return;
        }
        console.log(select)
        dp(filterPrice({min: minRange, max: maxRange}));
        setMinRange(min)
        setMaxRange(max)
    }, [minRange, maxRange, dp]);

    return (
        <div className="bar">
            <div className="sort">
                <span>Rūšiuoti pagal:</span>
                <select value={select} onChange={e => setSelect(e.target.value)}>
                    <option value="default_sort">Numatytasis</option>
                    <option value="price_asc_sort">Kaina nuo mažiausios</option>
                    <option value="price_desc_sort">Kaina nuo didžiausios</option>
                    <option value="title_sort">Pagal pavadimą</option>
                </select>
            </div>
            <div className="sort">
                <span>Filtruoti pagal:</span>
                    <div className="range">
                        <div className="range"> <i>min:</i> <b>{min}</b> <input type="range" value={minRange} onChange={e => setMinRange(e.target.value)} /> <b>{max}</b></div>
                        <div className="range"> <i>max:</i><input type="range" value={maxRange} onChange={e => setMaxRange(e.target.value)} /></div>
                    </div>
            </div>
        </div>
    );
}

export default Bar;
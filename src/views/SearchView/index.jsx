import {useDispatch, useSelector } from 'react-redux';
import {useEffect, useState} from 'react';
import {CROSSAPI} from '../../store/modules/cross/actions/crossAction'
import {ELEVAPI} from '../../store/modules/elev/actions/elevAction'
import './Search.css';
import SizedBox from '../../components/SizedBox';
import Logo from '../../components/Logo';
import {options} from "./sigungu"
import CardList from '../../components/CardList';
import AddrAPI from '../../store/modules/addr/actions/addrAction';

const SearchView = () => {
    const [param, setParam] = useState({
        sch: "",
        sigungu: "",
        type:"elev",
    });
    const dispatch = useDispatch();
    const sch_cross = (sch) => dispatch(CROSSAPI(sch));
    const sch_elev = (sch, sigungu) => dispatch(ELEVAPI(sch, sigungu));

    const addr = useSelector((state) => state.Addr.data)
    const cross = useSelector((state)=> state.Cross)
    const getAddr = (query)=> dispatch(AddrAPI(query));

    const handleChange = e =>{
        e.preventDefault();
        setParam({
            ...param,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(param.type === "elev"){
            getAddr(param.sch);
        } else{
            sch_cross(param.sch);
        }
    }

    return <>
        <div className="search_main">
            <SizedBox height="6vh" />
            <Logo />
            <div className="logo">
                Handi Map
            </div>
            <SizedBox height="1vh" />
            <form onSubmit={handleSubmit}>
                <select style = {{display:"block"}}name="type" value = {param.type} onChange={handleChange}>
                    <option value="elev">엘레베이터</option>
                    <option value="cross">육교</option>
                </select>
                <input type="search" name="sch" placeholder="search" onChange={handleChange}/>
                
                {/* {
                    param.type === "elev" 
                        ? <select name="sigungu" value= {param.sigungu} onChange = {handleChange}>{options.map((option)=>(
                            <option value={option.value}>{option.label}</option>
                        ))}</select>:
                        <div></div>
                } */}
                <button style={{display:"block"}}>검색</button>
            </form>
            {param.type === "elev" ? addr.documents ?<CardList items={addr.documents} type={param.type}/> : <div></div>:
              cross.data ?<CardList items={cross.data} type={param.type} /> : <div></div>}
        </div>
    </>
}

export default SearchView;
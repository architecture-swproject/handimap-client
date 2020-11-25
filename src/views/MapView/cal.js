const stand = [
    {
        cap: 6,
        wid: 1400,
        len: 850,
    },
    {
        cap: 8,
        wid: 1400,
        len: 1030,
    },
    {
        cap: 9,
        wid: 1400,
        len: 1130,
    },
    {
        cap: 10,
        wid: 1400,
        len: 1250,
    },
    {
        cap: 11,
        wid: 1400,
        len: 1350,
    },
    {
        cap: 15,
        wid: 1600,
        len: 1500,
    },
    {
        cap: 17,
        wid: 1800,
        len: 1500,
    },
    {
        cap: 20,
        wid: 1800,
        len: 1700,
    },
    {
        cap: 24,
        wid: 2000,
        len: 1750
    }
]
export const Calculate = ({size, cap}) =>{
    console.log(size.width)
    for(let i=0; i<stand.length;i++){
        if(stand[i].cap === Number(cap)){
            if(stand[i].wid - size.width < 300){
                console.log("cal1")
                return <div style={{color:"red"}}>매우 좁음</div>
            } else if(stand[i].wid - size.width < 500){
                console.log("cal2")
                return <div style={{color:"orange"}}>좁음</div>
            } else if(stand[i].wid - size.width < 850){
                return <div style={{color:"black"}}>보통</div>
            } else {
                console.log("cal4")
                return <div style={{color:"green"}}>넓음</div>
            }
        } 
    }
    return <div></div>
}
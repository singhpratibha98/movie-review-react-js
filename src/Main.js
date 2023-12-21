function Main(props){
    return (
        <div style={{backgroundImage:`linear-gradient(90deg, 
            rgba(0,0,0, 1),rgba(0,0,0, 0.8),   rgba(255,255,255, 0)), URL(${props.bg})` , height:"40vh", backgroundsize:"contain", padding:"20px", color:"white", borderRadius:"2%", boxShadow:"0px 0px 2px 2px black", backgroundSize:"cover", backgroundPosition:"center"} }>
          <div style={{display:"flex", opacity:"1" }}>
            <img src={props.img}  alt=""  height="150" width="100"/>
           <div style={{padding:"20px", opacity:"1"}}>
            <h1 style={{marginTop:"0" }}>{props.title}</h1>
            <p>{props.subtitle}</p>
            <p>rating :: {props.rating}</p>
            </div>
          </div>
          <p style={{width:"40vw"}}>{props.des}</p>
            
        </div>
    )
}

export default Main;
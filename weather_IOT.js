function Weter0  (props)  {
  //const   setcitt = useSelector((state) => state.setcitt); // Rule 1: call hooks in top-level
 
  const styleObj = {
    fontSize: 14,
    color: "#4a54f1",
    textAlign: "center",
    paddingTop: "100px",
}  
const styleObj6 = {
  fontSize: 14,
  color: "#4a54f1",
  textAlign: "left",
  paddingTop: "10px",
  paddingRight: "10px",
  paddingLeft: "10px",
  paddingBottom: "10px",
   
  display:'inline-block'
} 
const styleObj2 = {
  fontSize: 14,
  color: "black",
  textAlign: "center",
  paddingTop: "30px",
  paddingRight: "10px",
  paddingLeft: "10px",
  paddingBottom: "10px",
   
   
} 
    //const   selCity = 'tehran'; // Rule 1: call hooks in top-level

//  const selectedDevice = useSelector((state) => state.devicesState.selectedDevice)
 // const   fser  =  "8cf9574000000012"
  const [weterror, setwetError] = useState(null);
  const  [wetisLoaded, setwetIsLoaded] = useState(false);
  const   [wethomes, setwetHomes] = useState([]);
  
  //const   setcitt =  {this.props.value}
  
   
  const resultt =  localStorage.getItem('cidy');
   
  useEffect(() => {
    setTimeout(() => {
     fetch(`https://iotibti.ddns.net:7998/forecast/wete?city=${resultt}`)
      .then (res => {
        return res.json();
      })
      .then(wetresult => {
       setwetIsLoaded( true) ;
       setwetHomes( wetresult);
      })
      .catch(err => {
         console.log(err.message);
         
         setwetIsLoaded( true) 
         setwetError()
      })
     },1000);
   },[]);
 
   const wetpdata =     wethomes.map((wethome, i) => {
    return (
       <div>
          
         {wethome}  
      </div> 
    );
  });  
  console.log(wetpdata[0])
  return(
     
    <div> 
 
      <h style={styleObj6}>Cidade selecionada: <h>   </h><h style={styleObj2}> {wetpdata[0]}   </h> </h>  
      <h style={styleObj6}> Tempo: <h>   </h><h style={styleObj2}> {wetpdata[1]}  </h> </h>    
      <h style={styleObj6}> Clima:<h>   </h> <h style={styleObj2}> {wetpdata[2]} </h> </h>  
      <h style={styleObj6}>  Temperatura: <h>   </h><h style={styleObj2}> {wetpdata[3]} </h> </h>  
    </div>
     

  )
}
 
 
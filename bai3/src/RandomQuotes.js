import {useState} from 'react';
import { useEffect } from 'react';



const RandomQuotes = () => {
    // const [index,setIndex] = useState(0);
    const [post,setPost] = useState([]);
    const [randomQuote,setRandomQuote] = useState('');
    

    useEffect(() => {
        fetch ('https://61ebae077ec58900177cdd0b.mockapi.io/quotes')
        .then(res => res.json())
        .then(post => {setPost(post);})
     }, []);
    
     
     function changeFact() {
        let index = Math.floor(Math.random() * post.length); // now on every click setting a random index between 0 and quotes array length (quotes array length is excluded)
        
    
        setRandomQuote(post[index]);;
      }
      
      
    
   
      

   return (
    <div  style={{fontStyle:'italic',fontSize:'25px',fontWeight:'lighter',color:'gray'}}>
         <ul style={{
            listStyle:'none',
            display:'flex',
            flexDirection:'column',
            position:'relative'
            }}>
            <li style={{fontWeight : 'bolder'}}>{randomQuote.text}</li>
            <li style={{
               position:'absolute',
               textAlign:'center',
               right: '40%' ,
               bottom: -30,
               fontSize:'18px'
            }}>{randomQuote.author}</li>
         </ul>
         {/* {post.map((text,author) => {
            return(
            <ul style={{listStyle:'none'}}>
                <li>{someFact.text}</li>
                <li style={{paddingLeft:'100px'}}>{someFact.author}</li>
            </ul>)
         })} */}
        <button onClick={changeFact}>Change Quotes</button>

    </div>
   )
      
};
export default RandomQuotes;
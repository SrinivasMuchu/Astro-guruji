import Headers from './Components/Header/Headers';
import Videos from './Components/VideoReviews/Videos';
import Premium from './Components/PremiuimAstro/Premium';
import Wheel from './Components/AstroWheel/Wheel';
import Reviews from './Components/Reviews/Reviews';
import Footer from './Components/Footer/Footer';
import extra from './assets/extension.svg'
import extra1 from './assets/extrabg.svg'
import './App.css';
import React,{useState} from 'react'
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const LoadingSkeleton = () => {
  return (
    <Card>
      <CardContent sx={{margin:"auto",alignItems:"center"}}>
        <CardContent sx={{display:"flex",justifyContent:"space-around"}}>
        <Skeleton  height={150} width={200} />
        <Skeleton height={150} width={600}/>
        <Skeleton height={150} width={150}/>
        </CardContent>
        <CardContent sx={{margin:"auto",alignItems:"center"}}>
        <Typography variant='h1'><Skeleton width={400} height={400}/></Typography>
        <Typography variant='p'><Skeleton width={300} height={400}/></Typography>
        <Button ><Skeleton width={200} height={150}/></Button>
        </CardContent>
        <CardContent sx={{display:"flex",justifyContent:"space-around"}}>
        <Skeleton height={250} width={350}/>
        <Skeleton height={250} width={350}/>
        <Skeleton height={250} width={350}/>
        <Skeleton height={250} width={350}/>
        <Skeleton height={250} width={350}/>
        </CardContent>
        </CardContent>
        <CardContent>
        <Skeleton  height={700}/>
        </CardContent>
        <CardContent>
          <CardContent sx={{display:"grid",gridTemplateColumns:"auto auto auto",gap:"25px"}}>
          <Skeleton height={500} width={300} />
          <Skeleton height={500} width={300} />
          <Skeleton height={500} width={300} />
         
          
          <Skeleton height={500} width={300} />
          <Skeleton height={500} width={300} />
          <Skeleton height={500} width={300} />
         
          
          <Skeleton height={500} width={300} />
          <Skeleton height={500} width={300} />
          <Skeleton height={500} width={300} />
          </CardContent>
        </CardContent>
        
    </Card>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  if (loading) {
    return <LoadingSkeleton />;
  }
  return (
    <>
    <Card>
      
        
    <div className="App">
  
        <Headers />
         <Videos />
        <Premium />
        <img src={extra} alt='extra' style={{width:"90.40%"}}/>
        <Wheel />
        <Reviews />
        <img src={extra1} alt='extra1' style={{width:"90.7%",marginTop:"0"}}/>
        <Footer />

    </div>


    </Card>
    </>
  );
}

export default App;

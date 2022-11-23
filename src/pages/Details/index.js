import { Link, useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import Api from "../../config/connection-apikey";
import { Container, Hero, HeroName, HeroImage, HeroDtaModi, GoBack} from "./styles";

function Details(){

    const {id} = useParams();
    const [hero, setHero] = useState([]);
    

    useEffect(() => {
        const getToApi = async () => {
            try {
              const result= await Api.getCharacter(id);
              setHero(result);             
              
            } catch (error) {
              alert("Ocorreu um erro ao acessar a API");
            }
          }         
          
          getToApi();
    }, [id])

    return(
        <Container>
            <GoBack>
                <Link to="/"><button>Back</button></Link>                    
                </GoBack>
            <div className="hero">
            {hero.map((item,key) => (
                
                <Hero key = {key}>
                    <HeroImage src = {`${item.thumbnail.path}/standard_amazing.${item.thumbnail.extension}`}/>                                      
                    <HeroName>{item.name} #{item.id}</HeroName>                                    
                    <HeroDtaModi>Modificado: {item.modified}</HeroDtaModi>                    
                </Hero>                
                ))}
            </div>
        </Container>                         
        
    )
}

export default Details;
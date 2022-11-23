import { Container, HerosList, Hero, HeroImage, HeroName, MoreButtonArea, MoreButton, MoreButtonText } from "./styles";
import {useEffect, useState} from "react";
import Api from "../../config/connection-apikey";
import { Link } from "react-router-dom";




function Home(){

    const [heros, setHeros] = useState([]);
    const  [ nMore ,  setNMores ]  =  useState ( 1 ) ;

    useEffect(() => {
        const getToApi = async () => {
            try {
              const result= await Api.getCharacters(20,0);
              setHeros(result);
            } catch (error) {
              alert("Ocorreu um erro ao acessar a API");
            }
          }
          getToApi();
    }, [])

    const handleMoreButton = async() => {
        setNMores(nMore + 1);
        const moreCharacters = await Api.getCharacters(20, nMore * 20);
        
        setHeros(heros.concat(moreCharacters));
       }

    return(
        <Container>
            <h1>Heros</h1>
            <HerosList>
                {heros.map((item,key) => (
                <Hero key = {key}>
                    <Link to={`/details/${item.id}`} ><HeroImage src = {`${item.thumbnail.path}/standard_amazing.${item.thumbnail.extension}`}/></Link>                    
                    <HeroName>{item.name}</HeroName>
                </Hero>
                ))}
            </HerosList>

            <MoreButtonArea>
                <MoreButton onClick = {() => handleMoreButton()}>
                    <MoreButtonText>...</MoreButtonText>
                </MoreButton>
            </MoreButtonArea>
        </Container>

    )}

export default Home;

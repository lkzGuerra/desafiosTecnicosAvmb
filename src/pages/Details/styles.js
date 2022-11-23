import styled from "styled-components";

export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 4rem 0;
    }
`

export const HerosList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;   
`
export const Hero = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
    
    a {
        transition: all 0.3;
    }

    a:hover {
        transform: scale(1.1);
    }
`

export const HeroImage = styled.img`
    border-top-right-radius: 50px;
    width: 100%;
`
export const HeroName = styled.div`
    font-size: 20px;
    color: #e6e6e6;
`

export const HeroDtaModi = styled.div`
    text-align: center;
    margin: 1rem 0;
    font-size: 20px;
    color: #e6e6e6;
`

export const GoBack = styled.div`

    button {
        
        border: node;
        cursor: pointer;
        border-radius: 1rem;
        color: black;
        padding 0.2rem 1rem;
        margin-top: 1rem;
        font-size: 100%;

    }

`


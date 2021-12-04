import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const HeadingTab = styled.h2`
  border: 1px solid #ddd;
  background: rebeccapurple;
  color: white;
  padding: 15px;
  margin-bottom: 0;
`;

export const ContentTab = styled.div`
  border: 1px solid gray;
  border-top: none;
  opacity: ${props => (props.open ? "1" : "0")};
  max-height: ${props => (props.open ? "100%" : "0")};
  overflow: hidden;
  padding: ${props => (props.open ? "15px" : "0 15px")};
  transition: all 0.3s;

  p {
    margin: 0;
  }
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #f5f3f4;
  font-style: 2rem;
  line-height: 24px;
    transition: all 0.3s;
  overflow: hidden;
  opacity: ${props => (props.open ? "1" : "0")};
  max-height: ${props => (props.open ? "100%" : "0")};
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 2px 2px 15px #660708;
  text-align: center;
  width: 300px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;

export const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({active}) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
`;


export const Subtext = styled.p`
  max-width: 800px;
  font-size: 16px;
  line-height: 40px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 14px;
    line-height: 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    line-height: 24px;
  }
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #d3d3d3;
  padding: .5rem 0;
  margin-top: .5rem;
  font-size: ${(props) => props.title ? '2rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d3d3d3;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`
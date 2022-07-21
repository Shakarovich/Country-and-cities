import React from 'react'
import styles from  '../styles/Home.module.css';
import type { NextPage } from 'next'
import Head from 'next/head'
import MainLayoutReact from '../layout/MainLayout';
import { Grid } from '@mui/material';
import { Itrack } from '../types/countries';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '../components/context/Theme.context';
import _Button_Context from "../components/Button.component"



interface IHome {
  any:any;
}
const Home: NextPage<IHome> = ({any}) => {
  const datas: Itrack[] =[
    {_id:'1', title:'Uzbekistan', text:'Tashkent', picture:'out_istock-1249451586-copy.pc7yxh.webp', comments:[], info:'Tashkent is the capital of Uzbekistan, which is famous for its numerous museums and a combination of modern and Soviet architecture. The Timurid History Museum houses manuscripts, weapons and other relics of the famous dynasty. Nearby is a huge Museum of the History of Uzbekistan, which displays ancient Buddhist artifacts. The Tashkent TV tower rises above the city, from the observation deck of which a panoramic view of the city opens.'},
    {_id:'2', title:'Russia', text:'Moscow', picture:'_125662317_gettyimages-1143351798.jpeg', comments:[], info:'Moscow is the capital of Russia, a cosmopolitan city on the Moskva River in the western part of the country. In its historical center is the medieval fortress of the Kremlin - the residence of the Russian president. On its territory you can visit the Armory, where precious items that belonged to the royal family are exhibited. Behind the northeastern wall of the Kremlin lies Red Square, the symbolic center of Russia. Here you can see the Lenin Mausoleum, the State Historical Museum and St. Basils Cathedral with colorful onion domes.'},
    {_id:'3', title:'Switzerland', text:'Bern', picture:'Switzerland.jpeg', comments:[], info:'Bern is the capital of Switzerland, located at the bend of the river Aare. The city was founded in the XII century. In the Altstadt (Old Town), medieval buildings have been preserved since those times. These include the 13th-century French Church (Französische Kirche) and the Zytglogge Tower. The neo-Renaissance style of the Federal Palace (Bundeshaus) houses the Swiss Parliament.'},
    {_id:'4', title:'Italy', text:'Rome', picture:'Italy.webp', comments:[], info:'Rome is the capital of Italy, a huge multinational city with a history of almost three thousand years. Its architecture and works of art have had a huge impact on world culture. The ruins of the ancient Forum and the Colosseum demonstrate the former greatness of the Roman Empire. The Vatican, seat of the leadership of the Roman Catholic Church, is very popular with tourists thanks to St. Peters Basilica and numerous museums. Among them is the Sistine Chapel, where you can see the famous frescoes by Michelangelo.'},
    {_id:'5', title:'France', text:'Paris', picture:'france.png', comments:[], info:'The 5th arrondissement of Paris, also known as the Latin Quarter, is the area in which the Sorbonne and student cafes are located. On its territory there are bookstores, including the famous Shakespeare and Company. The garden of plants and the National Museum of Natural History can be visited by the whole family. The majestic Pantheon houses the tombs of the great people of France, including Voltaire and Marie Curie.'},
    {_id:'7', title:'German', text:'Berlin', picture:'German.jpeg', comments:[],info:'Berlin is the capital of Germany, whose history dates back to the 13th century. About the difficult history of the city in the XX century. reminiscent of the Holocaust Memorial and graffiti on the ruins of the Berlin Wall. The Brandenburg Gate, built in the 18th century, is known as a symbol of the reunification of Berlin, divided into two parts during the Cold War. The city is also famous for its art galleries and modern attractions, such as the gold-colored Philharmonic Hall built in 1963 with a roof in the shape of a circus tent'},
    {_id:'8', title:'Greece', text:'Athens', picture:'Greece.jpeg', comments:[], info:'Athens is the capital of modern Greece and the center of the ancient Greek civilization, which was famous for its power in the era of antiquity. The Acropolis rises above the city - built in the 5th century. BC fortress, which is crowned by the Parthenon temple with its famous colonnade. The exposition of the Acropolis Museum and the National Archaeological Museum presents sculptures, vases, jewelry and other objects of the material culture of Ancient Greece.'},
    {_id:'9', title:'Spain', text:'Madrid', picture:'Spain.webp', comments:[],info:'Madrid is the capital of Spain in the center of the Iberian Peninsula, a city of elegant boulevards and huge manicured parks, including the Buen Retiro Park. The city is famous for its museums of European art. The most famous of them, the Prado Museum, exhibits works by Goya, Velasquez and other Spanish masters. The heart of the old Habsburg Madrid is Mayor Square, surrounded by buildings with galleries. Not far from it are the Baroque Royal Palace and the Royal Armory with a collection of historical weapons.'},
    {_id:'10', title:'Portugal', text:'Lisbon', picture:'Portugal.jpeg', comments:[], info:'Lisbon is the capital of Portugal, located on several hills and washed by the waters of the Atlantic Ocean. The majestic St. Georges Castle offers a memorable view of the pastel-colored buildings in the old town, the mouth of the Tagus River and the April 25 Suspension Bridge. The exposition of the National Azulejo Museum presents Portuguese tiles created over five centuries. Near Lisbon are the beach resorts of Cascais and Estoril.'},
    {_id:'11', title:'Latvia', text:'Riga', picture:'Latvia.jpeg', comments:[],info:'Riga is the capital of Latvia, located on both banks of the Daugava River at its confluence with the Baltic Sea. Thanks to numerous museums and concert halls, the city is considered an important cultural center. Riga is famous for its wooden buildings and Art Nouveau houses. Shops and restaurants are open to visitors in the pedestrianized medieval Old Town, while the lively Livu Square in the area offers bars and nightclubs.'},
    {_id:'12', title:'Denmark', text:'Copenhagen', picture:'Denmark.jpeg', comments:[], info:'Copenhagen, the capital of Denmark, is located on the offshore islands of Zeeland and Amager and is connected to the southern Swedish city of Malmö via the Øresund Bridge. In Indre By, the historical center of the city, it is worth visiting the Frederiksstaden district, where you can see buildings from the 18th century. in the Rococo style and the royal palace of Amalienborg. Nearby are Christiansborg Palace and Renaissance-style Rosenborg Castle, surrounded by gardens and home to the royal jewels.'},
    {_id:'13', title:'Poland', text:'Warsaw', picture:'Poland.jpeg', comments:[], info:'Warsaw is the capital of Poland and its architecture reflects the citys long and complex history. Here you can see Gothic churches and neoclassical palaces, typical houses of the Soviet period and modern skyscrapers. In the heart of the Old Town, almost completely destroyed during the Second World War and rebuilt in the post-war years, lies the Market Square. It is surrounded by pastel-colored buildings and outdoor summer cafes. In the center of the square there is a monument to the Warsaw Siren - the symbol of the city'},
  ]

  const Textbold = styled.span`
  font-weight: bolder;
  font-size: 30px;
  `
  const Container = styled.div`
  `
   const Button_Close = styled.button`
   border: 1px solid white;
   border-radius: 5px;
   padding:10px;
   `

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');
  const [select, setSelect] = React.useState(0);
  const {theme} = useTheme();
  const {themeType} = useTheme();
  const { setCurrentTheme } = useTheme();
  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open])

  return (
    <React.Fragment>
      <Head>
        <title>Create Next.js and Typescript</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayoutReact>
        <Container className={styles.container}
        style={{ ...theme as React.CSSProperties }}>
          
          <_Button_Context onClick={()=> setCurrentTheme('light')} type={'primary'}>Day theme</_Button_Context>
          <_Button_Context onClick={() => setCurrentTheme('dark')} type={'secondary'}>Night theme</_Button_Context>

          <Grid container justifyContent='center'>
            <ImageList sx={{ width: 1500, height: 950 }}>
                  <ImageListItem key="Subheader" cols={2}>
                    {/* <ListSubheader component="div"><Textbold>Countries and Cities</Textbold></ListSubheader> */}
                  </ImageListItem>
                  {datas.map((data, index) => (
                    <ImageListItem onClick={() => setSelect(index)} key={data._id}>
                      <img
                        src={`${data.picture}?w=248&fit=crop&auto=format`}
                        srcSet={`${data.picture}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={data.title}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        title={data.title}
                        subtitle={data.text}
                        actionIcon={
                          <Grid container>
                            <IconButton             
                              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                              aria-label={`info about ${data.info}`}
                            >                   
                            </IconButton>
                            <Button variant="contained" onClick={handleClickOpen('paper')} style={{marginRight:'10px'}}><InfoIcon/>{' '}Information</Button>
                          </Grid>
                        }
                      />
                    </ImageListItem>
                  ))}
            </ImageList>
            <Dialog
              open={open}
              onClose={handleClose}
              scroll={scroll}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
            >
            {themeType === 'dark' ? <DialogTitle id="scroll-dialog-title"
              className={styles.container}
              style={{ ...theme as React.CSSProperties , color:'white'}}>Description</DialogTitle>
            :
            <DialogTitle id="scroll-dialog-title"
              className={styles.container}
              style={{ ...theme as React.CSSProperties}}>Description</DialogTitle>}
            <DialogContent dividers={scroll === 'paper'}
              className={styles.container}
              style={{ ...theme as React.CSSProperties }}>
            {themeType  === 'dark' ?  <DialogContentText
              style={{color:'white'}}
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
              >
            <p key={datas[select]._id}>{datas[select].info}</p>
            </DialogContentText>
            : 
            <DialogContentText              
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
            <Textbold key={datas[select]._id}>{datas[select].info}</Textbold>
            </DialogContentText> }
              </DialogContent>
            {themeType === 'dark' ?  <DialogActions
               className={styles.container}
               style={{ ...theme as React.CSSProperties }}>
                <Button_Close style={{color:'white', backgroundColor:'#060819'}} onClick={handleClose}>Close</Button_Close>
              </DialogActions> 
              :  
              <DialogActions
              className={styles.container}
              style={{ ...theme as React.CSSProperties }}>
              <Button_Close onClick={handleClose}>Close</Button_Close>
              </DialogActions>}
            </Dialog>
          </Grid>
        </Container>
      </MainLayoutReact>
    </React.Fragment>
  )
}

export default Home

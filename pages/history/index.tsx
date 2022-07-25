import React from 'react'
import styles from  '../../styles/Home.module.css';

import MainLayoutReact from '../../layout/MainLayout';
import { Grid } from '@mui/material';
import { Itrack } from '../../types/countries';
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
import { useTheme } from '../../components/context/Theme.context';
import _Button_Context from "../../components/Button.component"




const History:React.FC = (any) => {
  const datas: Itrack[] =[
    {_id:'1', title:'Uzbekistan', text:'Tashkent', picture:'out_istock-1249451586-copy.pc7yxh.webp', comments:[], info:'In 1924, Uzbekistan became the Soviet Republic. During the soviet period, there was a massive migration of various nationalities from numerous republics. On August 31, 1991, Uzbekistan gained its independence. The republic became a member of the UN, a democratic form of government and a market economy began to develop.'},
    {_id:'2', title:'Russia', text:'Moscow', picture:'_125662317_gettyimages-1143351798.jpeg', comments:[], info:'The history of Russia begins with the histories of the East Slavs. The traditional start-date of specifically Russian history is the establishment of the Rus state in the north in 862, ruled by Varangians.'},
    {_id:'3', title:'Switzerland', text:'Bern', picture:'Switzerland.jpeg', comments:[], info:'Switzerland was formed in 1291 by an alliance of cantons against the Habsburg dynasty—the Confoederatio Helvetica (or Swiss Confederation), from which the abbreviation CH for Switzerland derives—though only in 1848, when a new constitution was adopted, was the present nation formed.'},
    {_id:'5', title:'France', text:'Paris', picture:'france.png', comments:[], info:'France was originally named Gaul or Gallia. Julius Caesar led the Romans into Gaul, whilst the Celts were still dominating the territory. In 121, the Roman troops won a conclusive victory over the Celtic tribes and the Roman Empire set the First Roman Province (in the area of Narbonne).'},
    {_id:'8', title:'Greece', text:'Athens', picture:'Greece.jpeg', comments:[], info:'The history of Greece can be traced back to Stone Age hunters. Later came early farmers and the Minoan and Mycenaean civilizations. This was followed by a period of wars and invasions, known as the Middle Ages. Around 1100 BC, the people of the Dorians invaded from the north and spread along the west coast.'},
    {_id:'9', title:'Spain', text:'Madrid', picture:'Spain.webp', comments:[],info:'Heracles later renounced his throne in preference for his native Greece, leaving his kingdom to his nephew, Espan, from whom the country of España (Spain) took its name. Based upon their testimonies, this eponym would have already been in use in Spain by c. 350 BC.'},
    {_id:'10', title:'Portugal', text:'Lisbon', picture:'Portugal.jpeg', comments:[], info:'Portugal is one of the oldest countries in Europe. Its history is the combination of the story of Iberian tribes, Celtic peoples, the Roman Empire, Germanic kingdoms, Muslim invasions and the consequent Christian Reconquista, and finally, of the Exploration of the World.'},
    {_id:'11', title:'Latvia', text:'Riga', picture:'Latvia.jpeg', comments:[],info:'The history of Latvia began around 9000 BC with the end of the last glacial period in northern Europe. Ancient Baltic peoples arrived in the area during the second millennium BC, and four distinct tribal realms in Latvias territory were identifiable towards the end of the first millennium AD.'},
    {_id:'12', title:'Denmark', text:'Copenhagen', picture:'Denmark.jpeg', comments:[], info:'The first Danes were hunters and fisherman who probably entered the country migrating from Southern and Eastern Europe by the end of the last Ice Age around 10,000 BC. By 3000 BC, farms had begun to appear on the flat, fertile land we now call Denmark.'},
    {_id:'13', title:'Poland', text:'Warsaw', picture:'Poland.jpeg', comments:[], info:'The history of Poland spans over a thousand years, from medieval tribes, Christianization and monarchy; through Polands Golden Age, expansionism and becoming one of the largest European powers to its collapse and partitions, two world wars, communism, and the restoration of democracy.'},
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
      <MainLayoutReact>
        <Container className={styles.container}
        style={{ ...theme as React.CSSProperties }}>
          
          <_Button_Context onClick={()=> setCurrentTheme('light')} type={'primary'}>Day theme</_Button_Context>
          <_Button_Context onClick={() => setCurrentTheme('dark')} type={'secondary'}>Night theme</_Button_Context>

          <Grid container justifyContent='center'>
            <ImageList sx={{ width: 1500, height: 950 }}>
                  <ImageListItem key="Subheader" cols={2}>
              {  themeType === 'dark' ? <ListSubheader component="div"  className={styles.container} style={{ ...theme as React.CSSProperties, color:'white' }}><Textbold>Here you can read history</Textbold></ListSubheader> : <ListSubheader component="div"  className={styles.container} style={{ ...theme as React.CSSProperties }}><Textbold>Here you can read history</Textbold></ListSubheader>}
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

export default History;
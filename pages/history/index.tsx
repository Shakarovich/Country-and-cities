import React from 'react'
import MainLayoutReact from '../../layout/MainLayout';
import { Itrack } from '../../types/countries';
import { useRouter } from 'next/router';


const History:React.FC = () => {
  const router = useRouter()

  const data: Itrack[] =[
    {_id:'1', title:'Uzbekistan', text:'Tashkent', picture:'https://kapital.uz/uzb-top-3/', comments:[], info:''},
    {_id:'2', title:'Russia', text:'Moscow', picture:'https://www.bbc.com/news/world-europe-60125659', comments:[], info:''},
    {_id:'3', title:'Switzerland', text:'Bern', picture:'https://www.fantastic-removals.co.uk/blog/moving-to-switzerland-from-uk/', comments:[], info:''},
    {_id:'4', title:'Italy', text:'Rome', picture:'https://www.britannica.com/place/Italy', comments:[], info:''},
    {_id:'5', title:'France', text:'Paris', picture:'https://www.isolatedtraveller.com/what-is-the-capital-city-of-france/', comments:[], info:''},
    {_id:'7', title:'German', text:'Berlin', picture:'https://www.oxy.edu/academics/areas-study/comparative-studies-literature-culture/programs/german-studies', comments:[], info:''},
    {_id:'8', title:'Greece', text:'Athens', picture:'https://handluggageonly.co.uk/2018/01/20/19-beautiful-greek-islands-visit/', comments:[], info:''},
    {_id:'9', title:'Spain', text:'Madrid', picture:'https://www.schengenvisainfo.com/news/spain-7-million-travellers-reached-the-country-through-air-in-april/', comments:[], info:''},
    {_id:'10', title:'Portugal', text:'Lisbon', picture:'https://travellersworldwide.com/best-places-to-visit-in-portugal/', comments:[], info:''},
    {_id:'11', title:'Spain', text:'Madrid', picture:'https://kids.nationalgeographic.com/geography/countries/article/spain', comments:[], info:''},
    {_id:'12', title:'Latvia', text:'Riga', picture:'https://www.nationsonline.org/oneworld/latvia.htm', comments:[], info:''},
    {_id:'12', title:'Denmark', text:'Copenhagen', picture:'https://theculturetrip.com/europe/denmark/guides-and-tips/', comments:[], info:''},
    {_id:'12', title:'Poland', text:'Warsaw', picture:'https://www.agoda.com/country/poland.html', comments:[], info:''},
  ]

  return (
    <React.Fragment>
      <MainLayoutReact>
        {data.map((datas) =>(
          <h3>{datas.title}</h3>
        ))}
      </MainLayoutReact>
    </React.Fragment>
  )
}

export default History;
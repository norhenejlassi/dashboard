import { Doughnut } from "react-chartjs-2";
import React, { useEffect, useState } from 'react';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { useParams } from "react-router";


ChartJs.register(
    Tooltip, Title, ArcElement, Legend
  );
  
  
  const data = {
      datasets: [{
          data: [10, 20, 30],
          backgroundColor:[
            'red',
            'blue',
            'yellow'
          ]
      },
    ],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ], 
  };
  function Graphregionalimpot() {
    let { id } = useParams();
    const [data, setData] = useState({
        
      datasets: [{
            // Label for bars
            labels: "valeur",
            // Data or value of your each variable
            data: [1552, 1319, 613, 1400],
            // Color of each bar
            backgroundColor: ["aqua", "green", "red", "yellow"],
            // Border color of each bar
            borderColor: ["aqua", "green", "red", "yellow"],
            borderWidth: 0.5,
      },
    ],
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ], 
    
  });
 
    useEffect(()=> {
      const fetchData = () =>  {
        fetch( `http://localhost:8006/api/test/RepChargeFinanciere/${id}`).then((data) => {
          const res = data.json();
          return res
        }).then((res) => {
          console.log("resss", res)
          const label = [];
          const data = [];
          for(var i of res) {
              label.push(i.region);
              data.push(i.chargefin)
          }
          setData(
            {
              datasets: [{
                  data:data,
                  labels:data,
                  label:"valeur en %",
                  backgroundColor:[
                   
'AntiqueWhite',
'Orchid',
'SteelBlue',
'LightGreen',
'Tan',
'RosyBrown',
'Goldenrod',
'BurlyWood',
'Brown',
'PaleVioletRed',
'Thistle',
'CornflowerBlue',
'Aquamarine',
'LightSalmon',
'DarkSalmon',
'Peru',
'MediumAquamarine	',
'LightGrey',
'Tomato',
'MediumPurple',
'RoyalBlue',
'Pink',
'MistyRose',
'DarkGray	'
                   

                   
                      
                   ],
                  borderWidth:1.5,
              },
            ],
            labels:label, 
          
          }
          )
  
        }).catch(e => {
          console.log("error", e)
        }) 
      }
    fetchData();
    
    }, [])
    return (

      
        <div >
            
                <br />
                <br />
              <div className="App" style={{width:'75%', height:'25%',marginLeft:'30%'}}>



                  <h5 class="mt-3 mb-3 text-secondary">  charge financiere nette par region  de Annee  { id } </h5>
                <div style={{ maxWidth: "100%" }}>
                    <Doughnut data={data}/>
                </div>
                </div>
              </div>
  
      
    );
  }
  export default Graphregionalimpot;
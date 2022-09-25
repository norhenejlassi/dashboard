import { Bar} from "react-chartjs-2";
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
  function Graphnetttoutannee() {
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
        fetch( `http://localhost:8006/api/test/PourcentageTotalNett`).then((data) => {
          const res = data.json();
          return res
        }).then((res) => {
          console.log("resss", res)
          const label = [];
          const data = [];
          for(var i of res) {
              label.push(i.periode);
              data.push(i.poucentage)
          }
          setData(
            {
              datasets: [{
                  data:data,
                  labels:data,
                  label:"valeur en %",
                  backgroundColor:[
                    'pink',
                    'green',
                    '#FFBF00',
                   
                      '#DE3163',
                      '#D71DB2',
                      'red',
                      
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


                <div style={{ maxWidth: "50%" }}>
                    <Bar  data={data}/>
                </div>
                </div>
              </div>
  
      
    );
  }
  export default Graphnetttoutannee;
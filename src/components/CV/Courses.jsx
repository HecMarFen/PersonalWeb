import '../../Styles/education.css'
import '../../Styles/courses.css'
import { Chrono } from "react-chrono"
import {RiFileExcel2Fill} from 'react-icons/ri'

export default function Courses (){

    return(
        <div className='display_box_edu'>   
            <div className="line">
                <h2 className='lineUp'>Courses</h2>
            </div>
            <hr/>
            
            <div style={{ width: "100%", height: "70vh" }}>
        <Chrono
          mode="VERTICAL"
          slideShow
          slideItemDuration={4000}
          scrollable={{ scrollbar: true }}
          theme={{
            primary: 'darkgreen',
            secondary: 'yellow',
            cardBgColor: 'rgba(128, 128, 128, 0.2)',
            cardForeColor: 'yellow',
            titleColor: 'darkgreen',
          }}
          
        >
          <div>
            <div style={{ width: "250px", height: "250px" }}>
              <img
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt="test"
                src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
              />
            </div>
          </div>
          <div>
              <div>
                <RiFileExcel2Fill/>
              </div>
              <div>
              <h3>Data Analysis with Excel</h3>
              <p>
                  17 NOV 2021 - 20 DEC 2022
              </p>
                <p>
                    DelftX - University of Technology
                </p>
              </div> 
            
            </div>
          <div>
            <h3>Dunkirk</h3>
            <p>
              The Battle of Dunkirk (French: Bataille de Dunkerque) was fought
              in Dunkirk (Dunkerque), France, during the Second World War,
              between the Allies and Nazi Germany. As the Allies were losing the
              Battle of France on the Western Front, the Battle of Dunkirk was
              the defence and evacuation to Britain of British and other Allied
              forces in Europe from 26 May to 4 June 1940.
            </p>
            <p>
              After the Phoney War, the Battle of France began in earnest on 10
              May 1940. To the east, the German Army Group B invaded the
              Netherlands and advanced westward. In response, the Supreme Allied
              Commander—French General Maurice Gamelin—initiated "Plan D" and
              entered Belgium to engage the Germans in the Netherlands. The plan
              relied heavily on the Maginot Line fortifications along the
              German–French border, but German forces had already crossed
              through most of the Netherlands before the French forces arrived.
              Gamelin instead committed the forces under his command, three
              mechanised armies, the French First and Seventh Armies and the
              British Expeditionary Force (BEF), to the River Dyle.
            </p>
          </div>
          <div style={{ margin: "1rem" }}>
            <h3>Table</h3>
            <table>
              <thead>
                <tr>
                  <td>Column 1</td>
                  <td>Column 2</td>
                  <td>Column 3</td>
                  <td>Column 4</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Value 1</td>
                  <td>Value 2</td>
                  <td>Value 3</td>
                  <td>Value 4</td>
                </tr>
                <tr>
                  <td>Value 5</td>
                  <td>Value 6</td>
                  <td>Value 7</td>
                  <td>Value 8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Chrono>
      </div>
        </div> 
    )
}

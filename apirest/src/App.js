import './App.css';
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const getCp = async () => 
  {
    try {
    let codigop = document.getElementById("c_p").value;
    let ciudad = document.getElementById("estado");
    let mun = document.getElementById("municipio");
    let col = document.getElementById("colonia");
    console.log("funciona");
    if(codigop.length ===5)
    {
      let url = "http://api.masksoftco.mx/direcciones/codigo-postal"
        let formData = new FormData();
        formData.append("cp", codigop);

        let result = await axios({
        url,
        method: 'POST',
        dataType : 'json',
        ContentType: 'application/json',
        data: formData
        });
        console.log(result.data);
        let cps = result.data;
        ciudad.innerHTML = "<option>" + cps[0].estado + "</option>";
        mun.innerHTML = "<option>" + cps[0].municipio + "</option>";
        
        for (let i=0; i<cps.length;++i)
        {
            col.innerHTML += "<option>" + cps[i].colonia + "</option>";
        }
    }
    else{
      ciudad.innerHTML = "<option>---</option>";
      mun.innerHTML="<option>---</option>";
      col.innerHTML = "<option>---</option>";
    }
        
    }catch (error) 
    {
      alert(error);
    }
  }
 
  return (
    <div className="App container">
      <div className='row'>
      <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <label> Código Postal: </label>
          <br />
          <input
            id="c_p"
            className="color-white"
            type="number"
            onChange={getCp}
            placeholder='Código Postal'
          />
          <br />
          <label> Estado: </label>
          <br />
          <select id="estado" className='color-white' disabled>
          <option>---</option>
          </select>
          <br />
          <label> Municipio / Alcaldia: </label>
          <br />
          <select id="municipio" className='color-white' disabled > 
            <option>---</option>
          </select>
          <br />
          <label> Colonia: </label>
          <br />
          <select id="colonia" className='color-white'>
            <option>---</option>
          </select>
          <br />
        </div>
        <div className='col-sm-4'></div>
      </div>
    </div>
  );
}

export default App;
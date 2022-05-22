import './App.css';
import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [cliente,updClt] = useState([]);
  const getClientList = async () => 
  {
    try {
      let url = "https://apigrupogr.com/grapi/clientes/lista-clientes"
      
      let result = await axios({
      url,
      method: 'GET',
      dataType : 'json',
      ContentType: 'application/json',
      });
      updClt( result.data.clients);
    }
    catch(error)
    {
      alert(error);
    }
  }

  return (
    <div className="container App">
      <button className='btn btn-primary' onClick={getClientList}>Consultar</button>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'> ID </th>
            <th scope='col'> Nombre</th>
            <th scope='col'> Descripción</th>
            <th scope='col'> Correo</th>
            <th scope='col'> Regimen Fiscal </th>
            <th scope='col'> RFC</th>
          </tr>
        </thead>
        <tbody>
        {
          cliente.map( (data)=> 
          <tr key={"celda"+data.id_cliente}>
            <td key={"id_cliente"+data.id_cliente}>{data.id_cliente}</td> 
            <td key={"nombre"+data.id_cliente}>{data.nombre}</td>
            <td key={"descripcion"+data.descripcion}>{data.descripcion} </td>
            <td key={"correo"+data.correo}>{data.correo}</td>
            <td key={"reg_fiscal"+data.reg_fiscal}>{data.reg_fiscal}</td>
            <td key={"rfc"+data.urf}>{data.rfc}</td>
          </tr>
          )
        }
        </tbody>
      </table> 
    </div>
  );
}

export default App;

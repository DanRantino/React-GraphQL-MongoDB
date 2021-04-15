import axios from 'axios'
import {useEffect,useState} from 'react'
import './table.css'
import {VscLoading} from "react-icons/vsc"

function Home() {
  const [dados,setDados] = useState([])
  const [Data, setData] = useState([])
  function handleChangeID(event) {
    setDados(Data)
    if(event.target.value == '')
    {
      return dados
    }
    setDados(Data.filter(function filtra(e)
    {
      const dados = e.identificador == event.target.value
      return dados
    }))
    }
    function handleChangeAutor(event) {
      setDados(Data)
      if(event.target.value == '')
      {
        return dados
      }
      setDados(Data.filter(function filtra(e)
      {
        const dados = e.autor.includes(event.target.value)
        return dados
      }))
      }
      function handleChangeLivro(event) {
        setDados(Data)
        if(event.target.value == '')
        {
          return dados
        }
        setDados(Data.filter(function filtra(e)
        {
          const dados = e.titulo.includes(event.target.value)
          return dados
        }))
        } 
  
  useEffect(() => {
   axios({
      method: "POST",
      params: ``,
      url: "http://localhost:5000/",
      data: { 
        query: `
        {
          getLivros 
          {
            identificador,
            titulo,
            autor
          }
        }`
      }
    }).then(function setadata(res){
     const data = res.data.data.getLivros
     setData(data)
    setDados(data)})
    },[])
    if (Data != '')
{  return (
    <form id="form1" >
        <div className="divTable" >
               <div className="headRow">
                  <div className="divCellH" align="center" >Identificador do Livro</div>
                  <div  className="divCellH" align='center'>Nome do Autor</div>
                  <div  className="divCellH" align='center'>Título do Livro</div>
               </div>
               {dados.map(dado => (
              <div className="divRow" key={dado.identificador}>
                  <div className="divCell" align='center'>{dado.identificador}</div>
                  <div className="divCell" align='center'>{dado.autor}</div>
                  <div className="divCell" align='center'>{dado.titulo}</div>
              </div>))}
              <div className="footRow">
                  <input className="divCellHI" align='center' type='text' placeholder='Digite um ID' onChange={handleChangeID}></input>
                  <input className="divCellHI" align='center' type='text' placeholder='Digite um Autor' onChange={handleChangeAutor}></input>
                  <input className="divCellHI" align='center' type='text' placeholder='Digite um Livro' onChange={handleChangeLivro}></input>
               </div>
        </div>
    </form>
    );}
    else {
      return <div className='divRodando'><VscLoading size={150} className='rodando'/></div>
    }
}
export default Home;

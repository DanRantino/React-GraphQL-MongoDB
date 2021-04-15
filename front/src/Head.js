import './Head.css'
import FontAwesome from 'react-fontawesome'


function Head() {
  return (
    <div className='Head'>
        <a href='/' top='30px' className='Text'> <FontAwesome className='fas fa-home'/>Home</a>
        <p/>
        <a href='/Teste' className='Text' > Pagina teste </a>
    </div>
  );
}
export default Head
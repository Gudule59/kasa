
    import { NavLink } from 'react-router-dom';

    function PageErreurconfig() {    
    return (
      <div className="main2" style={{ maxwidth: '1440px', height: '576px'}}>
      
      <div style={{ 
      fontFamily : "Montserrat",
      fontSize: '200px',
      fontWeight :"700",
      color:"#FF6060",
      lineHeight: '410.69px',
      textAlign: 'center',
      Width: '597px',
      marginBottom:"30px",
      Height: '263px'
  }}>
       404
  </div>
    <div style={{ 
      width: '872px', 
      height: '51px',
       color:"#FF6060", 
       fontSize: '28px',
       margin:"20px",
       textAlign:'center'}}>
  
  
    Oups! La page que vous demandez n'existe pas.
      </div>
      <div style={{ maxwidth: '284px', height: '96px', paddingTop :"30px", marginBottom:"50px",}}>
      <NavLink className='lmj-title' to='/'> Retourner sur la page d’accueil </NavLink>  
      </div>
         </div>
    );
  }
  
  export default PageErreurconfig;
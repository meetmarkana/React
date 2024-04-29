import logo from './logo.svg';
import './App.css';
import Data from './Data';
function App() {
    const posts = [{

      id: 1001,
      
      name: 'Jedediah	Sporer',
      
      email:'Jedediah.Sporer@dummyapis.com',

      position : 'Web Developer',

      salary:10000
      
      },

      {

        id: 1002,
        
        name: 'Annamarie	Kirlin',
        
        email:'Annamarie.Kirlin@dummyapis.com',
  
        position : 'UI/UX Designer',
  
        salary: 15000
        
        },

        {

          id: 1003,
          
          name: 'Linda	Stokes',
          
          email:'Linda.Stokes@dummyapis.com',
    
          position : 'App Developer',
    
          salary: 12000
          
          },

          {

            id: 1004,
            
            name: 'Kole	Herman',
            
            email:'Kole.Herman@dummyapis.com',
      
            position : 'Frontend Developer',
      
            salary: 17000
            
            },
      
      ]
    return (
     <> 
     <Data posts={posts}/>
  
     </>
    );
}

export default App;

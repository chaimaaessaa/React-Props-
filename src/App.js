import React from 'react';
import Profile from './profile/Profile';

function App() {
  const handleName = (name) => {
    alert(`Name: ${name}`);
  };

  return ( 
    
    <Profile
      fullName="Chaimaa ESS"
      bio=" software  engineer"
      profession="Full-stack developer"
      handleName={handleName}
     
    >
      <img src="https://img.freepik.com/vecteurs-premium/heureuse-jeune-femme-tenant-pancarte-vierge-dans-ses-mains-isolees-fond-blanc-jeune-fille-souriante-portant-banniere-vide-place-pour-texte-illustration-vectorielle-style-cartoon-plat_171965-2694.jpg?w=360"  />
    
    </Profile>
  );
}

export default App;

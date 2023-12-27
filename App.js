import * as Font from 'expo-font';
import Home from './screens/Home';
import { useState } from 'react';
import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync(
  {
      'nunito-regular' : require('./assets/fonts/NunitoSans_10pt_SemiExpanded-Regular.ttf'),
      'nunito-bold' : require('./assets/fonts/NunitoSans_7pt_Expanded-Bold.ttf')
  })

export default function App() {
  return (
    <Home />
  )
  // const [fontsLoaded, setFontLoaded] = useState(false);

  // if(fontsLoaded){
  //   return (
  //     <Home />
  //   );
  // }
  // else{
  //   return (
  //     <AppLoading
  //       startAsync={getFonts}
  //       onFinish={() => setFontLoaded(true)}
  //     />
  //   )
  // }
}
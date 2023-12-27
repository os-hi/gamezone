### THE KNOW HOW

**TO CREATE AN APP**
1. open your terminal
2. `npx create-expo-app --template`
3. choose blank (or whatever)
4. name your app 
5. `code .` (if you're using vscode)

**TO RUN**
- `npm start` or `expo start`

**TO ADD FONTS**
1. go to [google fonts](https://fonts.google.com/)
2. download the font you want
3. create fonts folder in the assets folder
4. paste the font from the downloaded google font
5. import ` import * as Font from 'expo-font' `
6. load the Font by doing 
    ``` 
    const getFonts = () => {
        return Font.loadAsync({
            '[font name]' : require([Font Location in the folder (assets/fonts/[fontname.ttf])])
        })
    } 
    ```
7. to load the font, import {AppLoading} from 'expo'

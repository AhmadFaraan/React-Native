import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import GenderSelection from './screens/GenderSelection';
import CredentialsStore from './screens/CredentialsStore';
import LogScreen from './screens/LogScreen';
import MainScreen from './screens/MainScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import AllMenu from './screens/AllMenu';
import Beverages from './screens/Beverages';
import Beverages2 from './screens/Beverages2';
import Food from './screens/Food';
import Food2 from './screens/Food2';
import BevHotHandCrafted from './screens/BevHotHandCrafted';
import BevChilledFavourites from './screens/BevChilledFavourites';
import BevFrozenYogurtShake from './screens/BevFrozenYogurtShake';
import BevColdPressedJuice from './screens/BevColdPressedJuice';
import BevSignatures from './screens/BevSignatures';
import Food_SandwichesAndWraps from './screens/Food_SandwichesAndWraps';
import Food_Desserts from './screens/Food_Desserts';
import Food_Breakfast from './screens/Food_Breakfast';
import Food_Cakes from './screens/Food_Cakes';
import Food_FreshlyBaked from './screens/Food_FreshlyBaked';
import Settings from './screens/Settings';
import RewardsScreen from './screens/RewardsScreen';
import CartScreen from './screens/CartScreen';
import AddToCart from './screens/AddToCart';
import AddToCartEspresso from './screens/AddToCartEspresso';
import AddToCartTeaLattes from './screens/AddToCartTeaLattes';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import AddToCartHotChocolate from './screens/AddToCartHotChocolate';
import AddToCartChilledf from './screens/AddToCartChilledf';
import AddToCartCoffeeChiller from './screens/AddToCartCoffeeChiller';
import AddToCartTeaChiller from './screens/AddToCartTeaChiller';
import AddToCartFruitChiller from './screens/AddToCartFruitChiller';
import AddToCartItalianSoda from './screens/AddToCartItalianSoda';
import AddToCartCaramel from './screens/AddToCartCaramel';
import AddToCartChocolateShake from './screens/AddToCartChocolateShake';
import AddToCartStrawberryShake from './screens/AddToCartStrawberryShake';
import AddToCartFrozenYog from './screens/AddToCartFrozenYog';
import AddToCartCookiesNCream from './screens/AddToCartCookiesNCream';
import AddToCartColdPressed from './screens/AddToCartColdPressed';
import AddToCartSusCoffee from './screens/AddToCartSusCoffee';
import AddToCartOrganicTea from './screens/AddToCartOrganicTea';
import AddToCartBurger from './screens/AddToCartBurger';
import AddToCartSandwich from './screens/AddToCartSandwich';
import AddToCartWrap from './screens/AddToCartWrap';
import AddToCartChicken from './screens/AddToCartChicken';
import AddToCartBrownie from './screens/AddToCartBrownie';
import AddToCartLotus from './screens/AddToCartLotus';
import AddToCartTart from './screens/AddToCartTart';
import AddToCartLemon from './screens/AddToCartLemon';
import AddToCartWaffles from './screens/AddToCartWaffles';
import AddToCartNutella from './screens/AddToCartNutella';
import AddToCartOmlet from './screens/AddToCartOmlet';
import AddToCartPancake from './screens/AddToCartPancake';
import AddToCartCrum from './screens/AddToCartCrum';
import AddToCartEggN from './screens/AddToCartEggN';
import AddToCartLotusCake from './screens/AddToCartLotusCake';
import AddToCartThree from './screens/AddToCartThree';
import AddToCartDevil from './screens/AddToCartDevil';
import AddToCartFrochers from './screens/AddToCartFrochers';
import AddToCartMuffin from './screens/AddToCartMuffin';
import RewardPage from './screens/RewardPage';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GenderSelection" component={GenderSelection} options={{ headerShown: false }} />
        <Stack.Screen name="CredentialsStore" component={CredentialsStore} options={{ headerShown: false }} />
        <Stack.Screen name="LogScreen" component={LogScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AllMenu" component={AllMenu} options={{ headerShown: false }}/>
        <Stack.Screen name="Beverages" component={Beverages} options={{ headerShown: false }}/>
        <Stack.Screen name="Beverages2" component={Beverages2} options={{ headerShown: false }}/>
        <Stack.Screen name="Food" component={Food} options={{ headerShown: false }}/>
        <Stack.Screen name="Food2" component={Food2} options={{ headerShown: false }}/>
        <Stack.Screen name="BevHotHandCrafted" component={BevHotHandCrafted} options={{ headerShown: false }}/>
        <Stack.Screen name="BevChilledFavourites" component={BevChilledFavourites} options={{ headerShown: false }}/>
        <Stack.Screen name="BevFrozenYogurtShake" component={BevFrozenYogurtShake} options={{ headerShown: false }}/>
        <Stack.Screen name="BevColdPressedJuice" component={BevColdPressedJuice} options={{ headerShown: false }}/>
        <Stack.Screen name="BevSignatures" component={BevSignatures} options={{ headerShown: false }}/>
        <Stack.Screen name="Food_SandwichesAndWraps" component={Food_SandwichesAndWraps} options={{ headerShown: false }}/>
        <Stack.Screen name="Food_Desserts" component={Food_Desserts} options={{ headerShown: false }}/>
        <Stack.Screen name="Food_Breakfast" component={Food_Breakfast} options={{ headerShown: false }}/>
        <Stack.Screen name="Food_Cakes" component={Food_Cakes} options={{ headerShown: false }}/>
        <Stack.Screen name="Food_FreshlyBaked" component={Food_FreshlyBaked} options={{ headerShown: false }}/>
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
        <Stack.Screen name="RewardsScreen" component={RewardsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }}/>
        <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }}/>
        <Stack.Screen name="AddToCart" component={AddToCart} options={{ headerShown: false }}/>
        <Stack.Screen name="AddToCartEspresso" component={AddToCartEspresso} options={{ headerShown: false }}/>
        <Stack.Screen name="AddToCartTeaLattes" component={AddToCartTeaLattes} options={{ headerShown: false }}/>
        <Stack.Screen name="AddToCartHotChocolate" component={AddToCartHotChocolate} options={{ headerShown: false }}/>
        <Stack.Screen name="AddToCartChilledf" component={AddToCartChilledf} options={{ headerShown: false }}/>  
        <Stack.Screen name="AddToCartCoffeeChiller" component={AddToCartCoffeeChiller} options={{ headerShown: false }}/>  
        <Stack.Screen name="AddToCartTeaChiller" component={AddToCartTeaChiller} options={{ headerShown: false }}/>
        <Stack.Screen name="AddToCartFruitChiller" component={AddToCartFruitChiller} options={{ headerShown: false }}/>  
        <Stack.Screen name="AddToCartItalianSoda" component={AddToCartItalianSoda} options={{ headerShown: false }}/>  
        <Stack.Screen name="AddToCartCaramel" component={AddToCartCaramel} options={{ headerShown: false }}/>
        <Stack.Screen name="AddToCartChocolateShake" component={AddToCartChocolateShake} options={{ headerShown: false }}/>    
        <Stack.Screen name="AddToCartStrawberryShake" component={AddToCartStrawberryShake} options={{ headerShown: false }}/>
        <Stack.Screen name="AddToCartFrozenYog" component={AddToCartFrozenYog} options={{ headerShown: false }}/>
        <Stack.Screen name="AddToCartCookiesNCream" component={AddToCartCookiesNCream} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartColdPressed" component={AddToCartColdPressed} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartSusCoffee" component={AddToCartSusCoffee} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartOrganicTea" component={AddToCartOrganicTea} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartBurger" component={AddToCartBurger} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartSandwich" component={AddToCartSandwich} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartWrap" component={AddToCartWrap} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartChicken" component={AddToCartChicken} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartBrownie" component={AddToCartBrownie} options={{ headerShown: false }}/>
        <Stack.Screen name="AddToCartLotus" component={AddToCartLotus} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartTart" component={AddToCartTart} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartLemon" component={AddToCartLemon} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartWaffles" component={AddToCartWaffles} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartNutella" component={AddToCartNutella} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartOmlet" component={AddToCartOmlet} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartPancake" component={AddToCartPancake} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartCrum" component={AddToCartCrum} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartEggN" component={AddToCartEggN} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartLotusCake" component={AddToCartLotusCake} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartThree" component={AddToCartThree} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartDevil" component={AddToCartDevil} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartFrochers" component={AddToCartFrochers} options={{ headerShown: false }}/> 
        <Stack.Screen name="AddToCartMuffin" component={AddToCartMuffin} options={{ headerShown: false }}/> 
        <Stack.Screen name="RewardPage" component={RewardPage} options={{ headerShown: false }}/> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



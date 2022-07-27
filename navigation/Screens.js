import { Animated, Dimensions, Easing } from "react-native";
// header for screens
import { Header, Icon } from "../components";
import { argonTheme, tabs } from "../constants";

import Articles from "../screens/Articles";
import { Block } from "galio-framework";
// drawer
import CustomDrawerContent from "./Menu";
import Elements from "../screens/Elements";
// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import React from "react";
import Register from "../screens/Register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Makeup from "../screens/Makeup";
import Viewfood from "../screens/Viewfood";
import Foods from "../screens/Foods";
import Model from "../screens/Model";
import Delivery from "../screens/Delivery";
import Wahiba from "../screens/Wahiba";
import Message from "../screens/Message";
import Cosmetique from "../screens/Cosmetique";
import Cuthair from "../screens/Cuthair";
import Ptdej from "../screens/Ptdej";
import Patisserie from "../screens/Patisserie";
import FastFood from "../screens/FastFood";
const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();




function ElementsStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Elements"
        component={Elements}
        options={{
          header: ({ navigation, route }) => (
            <Header title="Elements" navigation={navigation} route={route} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
  
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, route }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              route={route}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
    
  );
}

function ProStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Food"
        component={Pro}
        options={{
          header: ({ navigation, route }) => (
            <Header title="Food" navigation={navigation} route={route} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, route }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              route={route}
            />
          ),
          headerTransparent: true,
        }}
      />
          <Stack.Screen
        name="Ptdej"
        component={Ptdej}
        options={{
          header: ({ navigation, route }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              route={route}
            />
          ),
          headerTransparent: true,
        }}
      />
        <Stack.Screen
        name="FastFood"
        component={FastFood}
        options={{
          header: ({ navigation, route }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              route={route}
            />
          ),
          headerTransparent: true,
        }}
      />
               <Stack.Screen
        name="Patisserie"
        component={Patisserie}
        options={{
          header: ({ navigation, route }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              route={route}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
  
function MakeStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
   
      <Stack.Screen
        name="Makeup"
        component={Makeup}
        options={{
          header: ({ navigation, route }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              route={route}
            />
            
          ),
          headerTransparent: true,
        }}
      />

<Stack.Screen
        name="Wahiba"
        component={Wahiba}
        options={{
          header: ({ navigation, route }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              route={route}
            />
            ),
            headerTransparent: true,
          }}
        />
    </Stack.Navigator>
  );
}
function ViewFStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      
      <Stack.Screen
        name="Viewfood"
        component={Viewfood}
        options={{
          header: ({ navigation, route }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              route={route}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
function ModelsStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Model"
        component={Model}
        options={{
          header: ({ navigation, route }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              route={route}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
function FoodsStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
     <Stack.Screen
        name="Delivery"
        component={Delivery}
        options={{
          header: ({ navigation, route }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              route={route}
            />
            
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Foods"
        component={Foods}
        options={{
          header: ({ navigation, route }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              route={route}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
function MessageStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
    
      <Stack.Screen
        name="Message"
        component={Message}
        options={{
          header: ({ navigation, route }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              route={route}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function WahibaStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
    
      <Stack.Screen
        name="Wahiba"
        component={Wahiba}
        options={{
          header: ({ navigation, route }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              route={route}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}


function ProfileStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, route }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              route={route}
            />
            
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
      />
       
       <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, route }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              route={route}
            />
          ),
        }}
      />
    
    </Stack.Navigator>
  );
}
function DeliveryStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Delivery"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Delivery"
        component={Delivery}
        options={{
          header: ({ navigation, route }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              route={route}
            />
            
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
      />
       
       <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, route }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              route={route}
            />
          ),
        }}
      />
     <Stack.Screen
        name="Foods"
        component={Foods}
        options={{
          header: ({ navigation, route }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              route={route}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}


function HomeStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, route }) => (
            <Header
              title="Home"
              search
              options
              navigation={navigation}
              route={route}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
   
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, route }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              route={route}
            />
          ),
        }}
      />
        <Stack.Screen
        name="Cosmetique"
        component={Cosmetique}
        options={{
          header: ({ navigation, route }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              route={route}
            />
            ),
            headerTransparent: true,
          }}
        />
         <Stack.Screen
        name="Cuthair"
        component={Cuthair}
        options={{
          header: ({ navigation, route }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              route={route}
            />
            ),
            headerTransparent: true,
          }}
        />
    </Stack.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Logout"
        component={Onboarding}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        option={{
          headerTransparent: true,
        }}
      />
      
    
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>

  );
}


function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Account" component={Register} />
      <Drawer.Screen name="Elements" component={ElementsStack} />
      <Drawer.Screen name="Food" component={ProStack} />
      <Drawer.Screen name="Logout" component={Onboarding}/>
      <Drawer.Screen name="Makeup" component={MakeStack}/>
      <Drawer.Screen name="Model" component={ModelsStack}/>
      <Drawer.Screen name="Foods" component={FoodsStack}/>
      <Drawer.Screen name="Viewfood" component={ViewFStack}/>
      <Drawer.Screen name="Delivery" component={DeliveryStack}/>
      <Drawer.Screen name="Wahiba" component={WahibaStack}/>
      <Drawer.Screen name="Message" component={MessageStack}/>
      <Drawer.Screen name="Cosmetique" component={HomeStack}/>
      <Drawer.Screen name="Cuthair" component={HomeStack}/>
      <Drawer.Screen name="Ptdej" component={ProStack}/>
      <Drawer.Screen name="Patisserie" component={ProStack}/>
      <Drawer.Screen name="FastFood" component={ProStack}/>

    </Drawer.Navigator>
  );
}

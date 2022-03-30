import React, {useState} from "react";
import {TextInput, View, Button, Text, Alert} from "react-native";

export default function Suma(){

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const suma = ()=>{
        if(typeof num1 === 'string' && typeof num2 === 'string'){
            let resultado = parseFloat(num1) + parseFloat(num2); 
            if(isNaN(resultado)){
                return 'no es un numero';
            }
            return `${resultado}`;
        }
    }

    return (
        <View>
            <Text>Esta es la suma</Text>
            <View>
                <TextInput placeholder="Introduce un numero" onChangeText={(num1)=>setNum1(num1)} />
                <TextInput placeholder="Introduce otro numero" onChangeText={(num2)=>setNum2(num2)} />
            </View>
            <Button title = 'Resultado' onPress = {()=>Alert.alert('La suama es: ', suma())} />
        </View>
    )
}
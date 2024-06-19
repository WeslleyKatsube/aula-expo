import { View, Pressable, Text } from "react-native";


export default function exemplos ({navigation}) {
    return (
        <View>
            <Pressable onPress={() => navigation.navigate('ex_2')}>
                <Text>Exemplo 2</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('ex_3')}>
                <Text>Exemplo 3</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('ex_4')}>
                <Text>Exemplo 4</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('ex_5')}>
                <Text>Exemplo 5</Text>
            </Pressable>
        </View>
    )
}
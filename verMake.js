import { View, Text, Image, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { getMake } from './getMake'

export default function VerMake() {
    const [make, setMake] = useState([])
    const [nome, setNome] = useState('')

    async function carregaMake() {
        try {
            const resultado = await getMake(nome)
            setMake(resultado)
        } catch (error) {
            console.log(error)
            setMake([])
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
            <Text>Make API</Text>
            {Array.isArray(make) && make.map((item, index) => (
                <View key={index} style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'black', width: 200, padding: 5 }} >
                    <Image
                        source={{ uri: item.image_link }}
                        style={{ width: 100, height: 100 }}
                    />
                    <Text>Nome: {item.name}</Text>
                    <Text>Preço: $ {item.price}</Text>
                </View>
            ))}

            <TextInput
                style={{ borderColor: "black", borderWidth: 1, width: 200, height: 30, margin: 10, padding: 5, textAlign: 'center' }}
                placeholder="Digite o nome..."
                onChangeText={(text) => setNome(text)}
                value={nome}
            />
            <Button title='Ver Make' onPress={carregaMake} />
        </View>
    )
}

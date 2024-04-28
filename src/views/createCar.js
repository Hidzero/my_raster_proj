import React, {useState} from "react";
import { View, TextInput } from "react-native";
import { styles } from "../../assets/css/Css";
import { EnterButton } from '../buttons/Buttons';
import axios from 'axios';

export default function CreateCar() {
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
    async function handleCreateCar() {
        const data = {
            marca: marca,
            modelo: modelo,
            ano: ano,
        }
        await axios.post('http://192.168.0.110:3000/car', data)
        .then(res => {
            console.log(res.data);
            alert('Carro criado com sucesso')
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.container_login2}>
                <TextInput 
                    style={styles.login_input}
                    placeholder="Marca"
                    value={marca}
                    onChangeText={setMarca}
                    autoCapitalize="none"
                />
                <TextInput 
                    style={styles.login_input}
                    placeholder="Modelo"
                    value={modelo}
                    onChangeText={setModelo}
                    autoCapitalize="none"
                />
                <TextInput 
                    style={styles.login_input}
                    placeholder="Ano"
                    value={ano}
                    onChangeText={setAno}
                    autoCapitalize="none"
                />
                <EnterButton title="Criar Carro" value='Entrar' style={styles.margin_button}  onPress={handleCreateCar}/>
            </View>
        </View>
    );
}
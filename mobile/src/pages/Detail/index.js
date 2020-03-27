import React from 'react';
import {View, TouchableOpacity, Image, Text, ScrollView, Linking} from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";
import styles from "./styles"
import logoImg from '../../assets/logo.png';
import Feather from "@expo/vector-icons/Feather"

export default function Detail(){
    const route = useRoute();
    const incident = route.params.incident;
    const navigation = useNavigation();
    var message = `
    Olá, ${incident.name}. Estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style:"currency",currency:"BRL"}).format(incident.value)}.
    `

    function goBack(){
        navigation.goBack();
    }

    function sendMail(incidentName, ongEmail){
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incidentName}`,
            recipients: [ongEmail],
            body: message
        });
    }

    function sendWhats(ongWhatsapp){
        Linking.openURL(`whatsapp://send?phone=${ongWhatsapp}&text=${message}`);
    }
    return(
        <ScrollView style = {styles.container}>
            
            <View style = {styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={goBack}>
                    <Feather name="arrow-left" color="#e02041" size={16}></Feather>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>{incident.name}</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>{incident.value}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.actionButton} onPress={() => sendWhats(incident.whatsapp)}>
                        <Text style={styles.actionButtonText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton} onPress={()=>sendMail(incident.title, incident.email)}>
                    <Text style={styles.actionButtonText}>E-Mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    );
}
import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    incident:{
        backgroundColor: "#FFF",
        padding: 24,
        borderRadius: 4,
        marginBottom: 16,
        marginTop: 48
    },
    incidentProperty:{
        fontSize: 14,
        color: "#414d",
        fontWeight: "bold",
    },
    incidentValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },
    contactBox:{
        backgroundColor: "#FFF",
        padding: 24,
        borderRadius: 4,
        marginBottom: 16,
        marginTop: 48
    },
    heroTitle:{
        fontWeight: "bold",
        fontSize: 20,
        color: "#13131a",
        lineHeight: 30,
    },
    heroDescription:{
        fontSize: 15,
        color:"#737380",
        marginTop: 16,
    },
    actions:{
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 32,
    },
    actionButton:{
        backgroundColor:"#e02041",
        borderRadius: 8,
        height: 50,
        width: "48%",
        justifyContent: "center",
        alignItems: 'center',
    },
    actionButtonText:{
        color: "#FFF",
        fontSize: 15,
        fontWeight: "bold"
    }
})
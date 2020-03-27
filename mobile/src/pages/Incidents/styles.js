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
    headerText:{
        color: '#737380',
        fontSize: 15
    },
    boldHeaderText:{
        fontWeight: 'bold',
    },
    welcome:{
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131A',
        fontWeight: "bold",
    },
    welcomeSub:{
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
    },
    incidentsView:{
        marginTop: 32,
    },
    incident:{
        backgroundColor: "#FFF",
        padding: 24,
        borderRadius: 4,
        marginBottom: 16
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
    detailsButton:{
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    detailsButtonText:{
        color:"#e02041",
        fontSize: 15,
        fontWeight: "bold",
    }
});
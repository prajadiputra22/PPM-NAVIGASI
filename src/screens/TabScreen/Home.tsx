import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { NavigationProp } from '@react-navigation/native';
import { useState } from "react";

const product = [
    { id: '1', name: 'Cappuccino', description: 'with chocolate', image: require('../../assets/coffe.jpeg'), price: '$4.50', rating: 4.8 },
    { id: '2', name: 'Latte', description: 'with chocolate', image: require('../../assets/milk.jpg'), price: '$3.80', rating: 4.9 },
    { id: '3', name: 'Machito', description: 'with chocolate', image: require('../../assets/oatmilk.jpg'), price: '$4.00', rating: 4.5 },
    { id: '4', name: 'Americano', description: 'with chocolate', image: require('../../assets/cream.jpg'), price: '$3.00', rating: 4.8 },
];

type RootStackParamList = {
    Home: undefined;
    DetailExample: { message: string };
    Profile: undefined;
};

type DetailNavigationProps = NavigationProp<RootStackParamList, 'DetailExample'>;


const Coffee = () => {
    const navigation = useNavigation<DetailNavigationProps>();

    const [searchText, setSearchText] = useState('')

    const handleProductPress = (product: any) => {
        navigation.navigate('DetailExample', {
            message: 'Product Details',
            name: product.name,
            description: product.description,
            image: product.image,
            price: product.price,
            rating: product.rating,
        });
    };

    const filteredProducts = product.filter(p =>
        p.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.locationContainer}>
                        <Text style={styles.locationText}>Dermawan Suka Prajadiputra</Text>
                        <Text style={styles.location}>Sukabumi, Jawa Barat</Text>
                    </View>
                    <Image source={require("../../assets/profil.jpg")} style={styles.avatar} />
                </View>

                <View style={styles.searchContainer}>
                    <TextInput placeholder="Search Coffee" style={styles.search}
                    value={searchText} 
                    onChangeText={(text) => setSearchText(text)}/>
                </View>

                <View style={styles.bannerContainer}>
                    <Image source={require("../../assets/coffe-banner.png")} style={styles.banner} />
                    <View>
                        <Text style={{width:75,height:35,backgroundColor:"#6f4e37", color:"white", borderRadius:10,textAlign:"center",padding:7,top:20,right:130}}>
                            Promo
                        </Text>
                    </View>
                    <Text style={{fontSize:40, color:"white", fontWeight:"800", top:25, right:20}}>
                        Buy one get one
                    </Text>
                    <Text style={{fontSize:40, color:"white", fontWeight:"800",top:20,right:116}}>FREE</Text>
                </View>

                <ScrollView horizontal={true} style={styles.scrollView}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Cappuccino</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCase}>
                            <Text style={styles.buttonTextCase}>Machito</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCase}>
                            <Text style={styles.buttonTextCase}>Latte</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCase}>
                            <Text style={styles.buttonTextCase}>Americano</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <View style={styles.cardWrapper}>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <TouchableOpacity key={product.id} style={styles.cardContainer} onPress={() => handleProductPress(product)}>
                                <Image source={product.image} style={styles.cardImage} />
                                <Image source={require("../../assets/star.png")} style={styles.iconStar} />
                                <Text style={styles.rating}>{product.rating}</Text>
                                <Text style={styles.cardTitle}>{product.name}</Text>
                                <Text style={styles.cardDescription}>{product.description}</Text>
                                <Text style={styles.cardPrice}>{product.price}</Text>
                                <View style={{width:30,height:30, backgroundColor:"white",marginLeft:120,bottom:26, borderRadius:10,}}>
                                    <Text style={styles.iconPlus}>+</Text>
                                </View>
                                {/* <Image source={require("../../assets/plus.png")} style={styles.iconPlus} /> */}
                            </TouchableOpacity>
                        ))
                    ) : (
                        <Text style={styles.noResults}>No products found</Text> 
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

export default Coffee;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    noResults:{
        fontSize: 20,
        color:"red",
        
        
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        marginLeft: 30,
        marginRight: 30,
        alignItems: 'center',
    },
    locationContainer: {
        flexDirection: 'column',
    },
    locationText: {
        fontSize: 14,
        color: "grey",
        fontFamily: "sora",
        fontWeight: "400",
    },
    location: {
        fontSize: 18,
        color: "black",
        fontWeight: "600",
        fontFamily: "sora",
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    searchContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    search: {
        paddingLeft: 20,
        borderRadius: 16,
        width: 351,
        height: 52,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: "white",
    },
    bannerContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    banner: {
        width: "90%",
        height: 170,
        borderRadius:20,
        marginLeft:10,
        position:"absolute"
    },
    scrollView: {
        marginTop: 50,
        marginLeft: 18,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: "#C67C4E",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    buttonCase: {
        backgroundColor: "#6f4e37",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    buttonText: {
        fontWeight: "600",
        fontSize: 14,
        color: "#FFFFFF",
        fontFamily: "sora",
    },
    buttonTextCase: {
        fontWeight: "600",
        fontSize: 14,
        color: "white",
        fontFamily: "sora",
    },
    cardWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: 10,
        marginTop: 20,
    },
    cardContainer: {
        backgroundColor: "#6f4e37",
        borderRadius: 12,
        padding: 4,
        marginBottom: 20,
        width: '45%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    cardImage: {
        width: '100%',
        height: 130,
        borderRadius: 10,
    },
    cardTitle: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
        marginTop: 10,
        marginLeft: 5,
    },
    cardDescription: {
        marginTop: 1,
        fontSize: 14,
        marginLeft: 7,
        color: "white",
    },
    cardPrice: {
        marginTop: 10,
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        color: "white",
    },
    iconPlus: {
        bottom:7,
        width: 35,
        height: 35,
        color:"black",
        marginLeft:7,
        fontSize:30
    },
    iconStar: {
        position: "absolute",
        width: 20,
        height: 20,
        marginLeft: 9,
        marginTop: 5,
    },
    rating: {
        position: "absolute",
        color: "#FFFFFF",
        fontWeight: "bold",
        marginTop: 6,
        marginLeft: 35,
    },
});

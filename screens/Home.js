import React, { useState, useEffect } from 'react'
import { View, SafeAreaView, ScrollView } from 'react-native'
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from '../components/home/SearchBar';
import Categories from "../components/home/Categories";
import RestaurantItem from '../components/home/RestaurantItem';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/home/BottomTabs';


const Home = () => {

    const localRestaurants = [
        {
            name: "Beachside Bar",
            image_url:
                "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
            categories: ["Cafe", "Bar"],
            price: "$$",
            reviews: 1244,
            rating: 4.5,
        },
        {
            name: "Benihana",
            image_url:
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
            categories: ["Cafe", "Bar"],
            price: "$$",
            reviews: 1244,
            rating: 3.7,
        },
        {
            name: "India's Grill",
            image_url:
                "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
            categories: ["Indian", "Bar"],
            price: "$$",
            reviews: 700,
            rating: 4.9,
        },
    ];

    const [restaurantData, setRestaurantData] = useState(localRestaurants);

    const [city, setCity] = useState("London");

    const [activeTab, setActiveTab] = useState("Delivery");

    const YELP_API_KEY = "...";

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => {
                setRestaurantData(
                    json.businesses
                );
            }
            );
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);


    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>

            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem restaurantData={restaurantData} />
            </ScrollView>

            <Divider width={1} />

            <BottomTabs />

        </SafeAreaView>
    )
}

export default Home;

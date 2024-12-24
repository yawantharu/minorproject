// demodata  //normal case
// demodata //camale case  ex:AmAGoodBoy
// demo_data //snake case ex:i_am_a_good_boy


import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import MasonaryList from '@react-native-seoul/masonry-list'
import FlashSalesData from '../constants/flashSaleData';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StarIcon } from 'react-native-heroicons/solid';
import { HeartIcon } from 'react-native-heroicons/outline';
import Icon from "react-native-vector-icons/FontAwesome"
import { useNavigation } from 'expo-router';

const FlashSales = () => {

  const navigator = useNavigation()

  const saleEnd = "2024-12-20T23:45:30";
  const [endDate, setEndDate] = useState(calenderLastDate(saleEnd))

  //console.log(endDate)

  useEffect(() => {

    const timer = setInterval(() => {  //setting the timer to change value to display in screen
      const remainingTime = calenderLastDate(saleEnd)  //store the calenderlastdate object value in the remainingTime variable
      if (remainingTime.total <= 0) {
        clearInterval(timer) //if total milisecond is less than and equal to 0 timer will stop here
      }

      setEndDate(remainingTime) //if not setEndDate value will change with a new remaining time

    }, 100)  // setInterval() function will run is every 1000 milliseconds

    return () => clearInterval(timer) //after the timer stop is every 1000 miliseconds useEffect Hooks run again

  }, [saleEnd])




  // Category tuggle
  const subCategory = ["All", "Newest", "Popular", "Mens", "Kids", "Womens"]
  const [activeSet, setActiveSet] = useState("All")

  const handleSubCategory = (item) => {
    setActiveSet(item)
  }
  // favourite toggle
  const [isFavourite, setIsFavourite] = useState(false)
  const handleFavouriteToggle = () => {
    setIsFavourite(!isFavourite)
  }
  return (
    <View>
      <View className="flex-row justify-between items-center px-1 mx-4 mb-4">
        <Text className="text-xl font-semibold">FlashSales</Text>
        {
          endDate.total > 0 &&
          <View className="flex-row items-center gap-2">
            <Text className="font-medium text-gray-500">closing in:</Text>

            <View className="bg-btnPrimary h-8 w-8 flex justify-center items-center rounded-lg">
              <Text className="text-primary">{endDate.hours}</Text>
            </View>
            <Text>:</Text>
            <View className="bg-btnPrimary h-8 w-8 flex justify-center items-center rounded-lg">
              <Text className="text-primary">{endDate.minutes}</Text>
            </View>
            <Text>:</Text>
            <View className="bg-btnPrimary h-8 w-8 flex justify-center items-center rounded-lg">
              <Text className="text-primary">{endDate.seconds}</Text>
            </View>
          </View>

        }

      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          subCategory.map((item, index) => {
            let isActive = item == activeSet;
            return (
              <TouchableOpacity
                onPress={() => handleSubCategory(item)}
                key={index}
                className={`ml-4 border border-gray-600 px-4  mb-4 rounded-full py-2
              ${isActive ? "bg-primary" : ""}
                `}>
                <Text className={`font-bold ${isActive ? "text-white" : ""}`}>
                  {item}
                </Text>

              </TouchableOpacity>

            )
          })
        }
      </ScrollView>

      <MasonaryList
        data={FlashSalesData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => <CardItem item={item} index={index} handleFavouriteToggle={handleFavouriteToggle} isFavourite={isFavourite} navigator={navigator} />}
        className="mx-4 "
      />

    </View>

  )
}

const calenderLastDate = (saleEnd) => {
  const nowDate = new Date();
  const saleEndDate = new Date(saleEnd)
  const total = Math.floor(saleEndDate - nowDate)  //extracting the total value after substracting the saleEndDate with nowDate (value in milliseconds)

  const days = Math.floor(total / (1000 * 60 * 60 * 24))  //calculating the days from total(niliseconds) value
  const hours = Math.floor(total / (1000 * 60 * 60) % 24) //calculating the hours from total (miliseconds)value
  const minutes = Math.floor(total / (1000 * 60) % 60) //calculating the minutes form total(miliseconds)value
  const seconds = Math.floor(total / (1000) % 60) //calculating the seconds from total(miliseconds)value

  return (
    { // returning the extracted value in object

      total: total,
      days: Math.max(0, days),
      hours: Math.max(0, hours),
      minutes: Math.max(0, minutes),
      seconds: Math.max(0, seconds),

    }
  )
}

const CardItem = ({ item, index, handleFavouriteToggle, isFavourite,navigator }) => {
  let isEven = item.id % 2 == 0
  return (
    <View className={`${isEven ? "pl-4" : "pr-4"} flex-col gap-3 mb-4`}>
      <TouchableOpacity onPress={()=>{navigator.navigate("ProductDetails")}} className="relative ">
        <Image source={{ uri: item.image }} height={hp(20)} className=" object-cover rounded-3xl" />
        <TouchableOpacity onPress={() => handleFavouriteToggle()} className="absolute right-4 top-4 bg-white/50 p-2 rounded-full">
          {
            isFavourite ?
              <Icon name='heart' size={16} color={"red"} />
              :
              <HeartIcon size={20} color={"white"} />
          }
        </TouchableOpacity>
      </TouchableOpacity>

      <View className="flex-row justify-between px-1 ">
        <Text>{item.name}</Text>
        <View className="flex-row gap-1">
          <StarIcon size={20} color={"orange"} />
          <Text>{item.rating}</Text>
        </View>
      </View>

      <View className="px-1 ">

        <Text className="font-medium"> Rs{item.price}</Text>

      </View>

    </View>
  )
}

export default FlashSales
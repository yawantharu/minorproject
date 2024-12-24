import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ArrowLeftIcon, HeartIcon, } from 'react-native-heroicons/outline'
import Pic from "../../assets/images/pic.jpg"
import { StarIcon } from 'react-native-heroicons/solid';
export default function ProductDetails() {
   const size = ["S", "M", "XL", "XXL", "XXXL"]
    const [activeSet, setActiveSet] = useState("S")
  
    const handleSize = (item) => {
      setActiveSet(item)
    }

    const color = ["red", "blue", "green", "yellow", "black"]
    // const [activeSet, setActiveSet] = useState("red")
    const handleColor = (item) => {
      setActiveSet(item)
    }
   
  return (
    <ScrollView>
    <View>
      
      <View className="flex-row justify-between items-center mx-4 gap-10 my-5 absolute top-0 z-20">

        <TouchableOpacity className="bg-gray-300 size-16 justify-center items-center rounded-full  ">
          <ArrowLeftIcon color={"black"} size={24} />
        </TouchableOpacity>

        <View className="flex-1 flex-row justify-center items-center">
          <Text className="font-semibold text-2xl text-black ">Product Details</Text>
        </View>

        <TouchableOpacity className="bg-gray-300 size-16 rounded-full flex items-center justify-center">
          <HeartIcon size={24} color={"black"} />
        </TouchableOpacity>
      </View>
      <Image source={Pic} className="w-full h-[400px]" />

      
      <View className="mx-4 my-3 flex-col gap-3">
        <View className="flex-row justify-between "> 
        <Text className=" font-light text-2xl">Males Style</Text>

        <View className="flex-row gap-1 items-center  ">
        <StarIcon size={20} color={"orange"} />
        <Text>4.5</Text>
        </View>
          </View>

          <Text className="font-semibold text-2xl">Product Details </Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, officia! Esse repudiandae optio quia numquam beatae delectus aliquam veniam. </Text>
      
          <Text className="font-semibold text-2xl">Select Size</Text>

          <View>
             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                      size.map((item, index) => {
                        let isActive = item == activeSet;
                        return (
                          <TouchableOpacity
                            onPress={() => handleSize(item)}
                            key={index}
                            className={`ml-4 mr-4 border border-gray-600 px-4  mb-4 rounded-xl py-3
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

          </View>

          
           <Text className="font-semibold text-2xl">Select Color</Text>
           <View>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                      color.map((item, index) => {
                        let isActive = item == activeSet;
                        return (
                          <TouchableOpacity
                            onPress={() => handleColor(item)}
                            key={index}
                            className={`ml-4 border border-gray-600 px-4  mb-4 rounded-full py-3
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
           </View>
           

           
          </View>
      </View>
        </ScrollView>


    


  );
}
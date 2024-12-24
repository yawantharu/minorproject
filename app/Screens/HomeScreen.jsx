import { ScrollView, Text, TextInput, View } from "react-native";
import { AdjustmentsHorizontalIcon, BellIcon, ChevronDownIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline"
import { MapPinIcon } from "react-native-heroicons/micro"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Category from "../Components/Category";
import FlashSales from "../Components/FlashSales";

export default function HomeScreen() {
  return (
    <ScrollView>
      {/* header start */}
      <View className="flex-row justify-between items-center mx-[20px] py-6">
        <View className="flex-col gap-1 ">
          <Text className="text-2xl font-bold">Location</Text>
          <View />

          <View className="bg-color-blue flex-row gap-1 justify-center items-center">
            <MapPinIcon color={"#704f38"} width={"25"} height={"25"} />
            <Text className="text-lg font-semibold">Kohalpur-11,Banke</Text>
            <ChevronDownIcon color={"#704f38"} width={"25"} height={"35"} />
          </View>
        </View>
        <View className="bg-gray-300 h-14 w-14 rounded-full flex justify-center items-center">
          <BellIcon color={"black"} width={25} height={25} />
          <View className="bg-red-600 size-3 absolute top-1 right-1 rounded-full "></View>
        </View>
      </View>
      {/* header end */}
      {/* search bar start */}
      <View className="h-12 w-30 rounded-3xl flex-row justify-between items-center gap-3 mx-4 mb-8 ">
        <View className="flex-row items-center flex-1 border border-primary px-3 h-14 rounded-full">
          <MagnifyingGlassIcon color={"black"} width={"25"} height={"25"} />
          <TextInput placeholder="Search" className="font-medium flex-1 h-full" />
        </View>

        <View className="bg-primary h-14 w-14 rounded-full flex justify-center items-center">
          <AdjustmentsHorizontalIcon color={"white"} width={"25"} height={"25"} />
        </View>
      </View>
      {/* search bar start */}

      {/* ads component start */}
      <View className="bg-red-600 mx-4 mb-8 rounded-xl" style={{ height: hp('20%') }}>

      </View>
      {/* ads component end */}

      <Category/>

      <FlashSales/>
  


    </ScrollView>

  );
}
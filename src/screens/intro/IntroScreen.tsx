import React from 'react';
import { StackNavigationProp } from "@react-navigation/stack";
import { useRef, useState } from "react";
import { Dimensions, Image, ImageSourcePropType, SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel-v4";
import Icon from 'react-native-vector-icons/Ionicons';
import IMAGES from '../../assets/Images';
import SCREENS from '..';
import COLORS from '../../assets/Colors';

interface CarouselItem {
    id: number;
    content: string;
    image: ImageSourcePropType;
    title: string;
}

interface IntroScreenProps {
    navigation: StackNavigationProp<any>; 
}

const IntroScreen: React.FC<IntroScreenProps> = props => {
    const {navigation} = props;

    const carouselRef = useRef<Carousel<CarouselItem>>(null);

    const [activeDotIndex, setActiveDotIndex] = useState(0);

    const data: CarouselItem[] = [
        { id: 1, content: 'Tạo Tài Khoản', image: IMAGES.Coffe_Onboarding, title: 'Để bắt đầu, hãy tạo tài khoản của bạn để trải nghiệm tất cả các tính năng tuyệt vời của chúng tôi. Chỉ mất vài bước đơn giản!' },
        { id: 2, content: 'Khám Phá Thực Đơn', image: IMAGES.Coffe_Onboarding1, title: 'Dạo quanh thực đơn của chúng tôi và khám phá đủ loại cà phê từ cà phê đen đơn giản đến các thức uống đặc biệt. Bạn cũng có thể tìm kiếm theo sở thích hoặc loại cà phê yêu thích của bạn.' },
        { id: 3, content: 'Tiết Kiệm Thời Gian, Không Cần Đi Đến Quán Cafe', image: IMAGES.Coffe_Onboarding2, title: 'Khách hàng có thể sử dụng bất cứ lúc nào, bất kì nơi đâu, thao tác dễ dàng, quan trọng nhất là độ bảo mật an toàn' },
    ];

    const renderItem = ({ item, index }: { item: CarouselItem; index: number }) => {
        return (
            <View>
                <Image source={item.image}
                    style={{
                        height: Dimensions.get('window').width,
                        width: Dimensions.get('window').width,
                    }} />
                <View>
                    <Text style={{
                        fontSize: 28,
                        fontWeight: 'bold',
                        paddingHorizontal: 20,
                        color: COLORS.WHITE,
                        textAlign: 'center',
                    }}>{item.content}</Text>
                </View>
                <View style={{
                    width: 290,
                    height: 1,
                    backgroundColor: COLORS.HEX_LIGHT_GREY,
                    marginTop: 35,
                    alignSelf: 'center',
                }} />
                <View>
                    <Text style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: COLORS.WHITE,
                        paddingHorizontal: 13,
                        marginTop: 20
                    }}>{item.title}</Text>
                </View>
            </View>
        );
    };
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', backgroundColor:COLORS.HEX_BLACK }}>
            <View style={{ alignItems: 'flex-end', padding: 15 }}>
                <TouchableOpacity onPress = {() => {
                    navigation.navigate(SCREENS.LOGIN);
                }}>
                    <Text style={{ color: COLORS.HEX_ORANGE, fontWeight: 'bold', fontSize: 18 }}>Skip</Text>
                </TouchableOpacity>
            </View>
            <Carousel
                ref={carouselRef}
                data={data}
                renderItem={renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
                vertical={false}
                onSnapToItem={index => setActiveDotIndex(index)}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Pagination carouselRef={carouselRef}
                    activeDotIndex={activeDotIndex}
                    dotsLength={3}
                    dotStyle={{ width: 15, backgroundColor: COLORS.HEX_ORANGE }}
                    inactiveDotStyle={{ width: 10, backgroundColor: COLORS.HEX_LIGHT_GREY }} />
                <View style={{ padding: 15, flexDirection: 'row' }}>
                    <TouchableWithoutFeedback onPress={() => {
                        carouselRef.current?.snapToItem(activeDotIndex - 1);
                    }}>
                        <View style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: COLORS.HEX_LIGHT_GREY,
                            marginEnd: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}><Text><Icon name="arrow-back" size={30} color="#FFF" /></Text></View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {
                        carouselRef.current?.snapToItem(activeDotIndex + 1);
                    }}>
                        <View style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: COLORS.HEX_ORANGE,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}><Text><Icon name="arrow-forward" size={30} color="#FFF" /></Text></View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default IntroScreen;
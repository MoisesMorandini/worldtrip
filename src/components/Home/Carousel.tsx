import { Flex, Text } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {
  Navigation,
  Pagination
} from 'swiper';
import { CarouselItem } from './CarouselItem';
SwiperCore.use([Navigation, Pagination]);


export function Carousel() {
  const pagination = {
    "clickable": true,
    "renderBullet": function (index, className) {
      return (
        '<span class=\"' + className + '\">' + '</span>'
      )
    }
  }

  return (
    <Flex m='52px auto 0'
      width={['375px', '375px', '720px', '1080px', '1240px']}
      h={['250px', '250px', '350px', '400px', '450px']}>
      <Swiper navigation={true} pagination={pagination} >
        <SwiperSlide>
          <CarouselItem imagePath='https://images.unsplash.com/photo-1589871090211-7f2efeec05b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
            title='América do Norte' text='O continente ' />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem imagePath='https://images.unsplash.com/photo-1519761112046-3abcd5a21728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
            title='América do Sul' text='O continente mais belo' />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem imagePath='https://images.unsplash.com/photo-1574236170878-f66e35f83207?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            title='Ásia' text='O continente com a cultura mais rica' />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem imagePath='https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80'
            title='África' text='O continente mais antigo' />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem imagePath='./images/continent/EuropeContinentImage.png'
            title='Europa' text='O continente mais antigo' />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem imagePath='https://images.unsplash.com/photo-1622732718352-d4c89c582f7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1366&q=80'
            title='Oceania' text='O continente' />
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}
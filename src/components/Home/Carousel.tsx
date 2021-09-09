import { Flex, Text } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {
  Navigation,
  Pagination
} from 'swiper';
import { CarouselItem } from './CarouselItem';
SwiperCore.use([Navigation, Pagination]);


interface CarouselProps {
  continents: {
    id: number;
    name: string;
    description: string;
    image: string;
  }[]
}

export function Carousel({ continents }: CarouselProps) {
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
        {
          continents.map(continent => {
            return (
              <SwiperSlide key={String(continent.id)}>
                <CarouselItem imagePath={continent.image}
                  name={continent.name} description={continent.description} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </Flex>
  )
}
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import crewComments, {
  type CrewPhoto,
  type CrewReview,
} from "@/fixtures/crewComments.json";

export default function CrewComments() {
  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[FreeMode]}
        spaceBetween={16}
        slidesPerView="auto"
        centeredSlides={true}
        freeMode={{
          enabled: true,
          sticky: false,
        }}
        wrapperClass="flex desktop:-ml-[200px] tablet:-ml-[150px]"
      >
        {crewComments.map((item) => (
          <SwiperSlide key={item.id} className="flex-shrink-0">
            {item.type === "review" ? (
              <CrewReview {...item} />
            ) : (
              <CrewPhoto {...item} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function CrewReview({ position, name, comment, backgroundColor }: CrewReview) {
  return (
    <div className="w-[288px] p-24 rounded-2xl" style={{ backgroundColor }}>
      <p className="text-title-s mb-4">{position}</p>
      <p className="text-body-1-medium mb-40">{name}</p>
      <p className="text-body-3-regular">{comment}</p>
    </div>
  );
}

function CrewPhoto({ url }: CrewPhoto) {
  return (
    <Image
      width={288}
      height={288}
      className="rounded-2xl"
      src={url}
      alt={url}
    />
  );
}

import React from 'react';
import { SwiperSlider } from 'pragmate-ui/swiper';
import { v4 as uuid } from 'uuid';
import { CardOpinion } from './card';

interface IOpinion {
	name: string;
	src: string;
	profession?: string;
	comment: string;
	alt?: string;
}

interface IProps {
	opinions: IOpinion[];
}

export /* bundle */ function Opinions(props: IProps) {
	const items = props.opinions.map(opinion => {
		return <CardOpinion key={uuid()} {...opinion} />;
	});

	return (
		<section className="container__opinion">
			<SwiperSlider slidesPerView="auto" spaceBetween={0} pagination navigation className="swiper-implementation">
				{items}
			</SwiperSlider>
		</section>
	);
}

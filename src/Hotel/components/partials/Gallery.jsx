import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel';
export default function Gallery() {

    const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
    return (
        <section id="gallery" className="mb-24">
            <h1 className="font-resto text-md section-etablissement-title">Gallery <span className="text-primary font-resto">photos</span></h1>
            <ItemsCarousel
                requestToChangeActive={setActiveGalleryIndex}
                activeItemIndex={activeGalleryIndex}
                numberOfCards={5}
                infiniteLoop={true}
                gutter={10}
                slidesToScroll={2}
                leftChevron={<button className="detail-btn"><i className="fa fa-angle-left"></i></button>}
                rightChevron={<button className="detail-btn"><i className="fa fa-angle-right"></i></button>}

                chevronWidth={40}
            >
                <img src="/activity/detail/activity-detail-1.jpeg" alt="" srcset="" />
                <img src="/activity/detail/activity-detail-2.jpeg" alt="" srcset="" />
                <img src="/activity/detail/activity-detail-2.jpeg" alt="" srcset="" />
                <img src="/activity/detail/activity-detail-3.jpeg" alt="" srcset="" />
                <img src="/activity/detail/activity-detail-2.jpeg" alt="" srcset="" />
                <img src="/activity/detail/activity-detail-1.jpeg" alt="" srcset="" />
                <img src="/activity/detail/activity-detail-2.jpeg" alt="" srcset="" />
                <img src="/activity/detail/activity-detail-3.jpeg" alt="" srcset="" />
                <img src="/activity/detail/activity-detail-1.jpeg" alt="" srcset="" />
            </ItemsCarousel>
        </section>
    )
}

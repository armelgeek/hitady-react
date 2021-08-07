import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel';
export default function Banner() {

    const [activeBannerIndex, setActiveBannerIndex] = useState(0);
    return (
        <>
            <ItemsCarousel
                requestToChangeActive={setActiveBannerIndex}
                activeItemIndex={activeBannerIndex}
                numberOfCards={3}
                infiniteLoop={true}
                gutter={3}
                leftChevron={<button className="detail-btn"><i className="fa fa-arrow-left"></i></button>}
                rightChevron={<button className="detail-btn"><i className="fa fa-arrow-right"></i></button>}
                chevronWidth={40}
            >
                <img src="/activity/detail/activity-detail-1.jpeg" alt="" srcset="" />
                <img src="/activity/detail/activity-detail-2.jpeg" alt="" srcset="" />
                <img src="/activity/detail/activity-detail-2.jpeg" alt="" srcset="" />
                <img src="/activity/detail/activity-detail-3.jpeg" alt="" srcset="" />
            </ItemsCarousel>
        </>
    )
}

import React from 'react'
import Slider from '../components/Search/Slider'
export default function SearchForm() {
    return (
        <div>
            <Slider
                type="budget"
                label="Monthly Budget"
                minName={"100"}
                maxName={"300"}
            />

        </div>
    )
}

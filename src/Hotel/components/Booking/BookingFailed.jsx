import React from 'react'

export default function BookingFailed() {
    return (
        <div class="container">
            <div class="row success-detail mt-44 mb-44">
                <div class="col text-center relative">
                    <h2 className="font-bold text-xl">oops ! we are unable to process your payment.</h2>
                    <p className="pr-64 pl-64 mt-2 mb-2">looks like we encountered an error. please try again. if you continue to have issue, try another payment method!</p>
                    <button type="submit" class="btn btn-primary mt-2 ">Try Again</button>
                </div>
            </div>
        </div>
    )
}

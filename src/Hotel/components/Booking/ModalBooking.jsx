import React, { useEffect, useState } from 'react';
import { Step, Steps } from 'react-step-builder';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
const Step1 = (props) => {
    useEffect(() => {
        props.setState("canmove", true);
    }, [])
    return (
        <>
            Step one
        </>
    )
}
const Step2 = (props) => {
    useEffect(() => {
        props.setState("canmove", true);
    }, [])
    return (
        <>
            <p>This is step two </p>
        </>
    )
}
const Step3 = (props) => {
    useEffect(() => {
        props.setState("canmove", false);
    }, [])
    return (
        <>
            <p>This is step three </p>
        </>
    )

}
export default function ModalBooking({ data }) {
    function callback(e) {

    }
    const Navigation = (props) => {
        useEffect(() => {
        }, [])
        return (
            <>

                <div className="all-steps">
                    {props.allSteps.map((step, i) => (
                        <p className={`${props.current === (i + 1) && `text-primary`}`}>{step.title}</p>
                    ))}
                    {JSON.stringify(props.state)}
                </div>
                <div className="flex justify-end">
                    {
                        <button className="btn btn-primary" onClick={props.state.canmove ? props.prev : callback}>Previous {props.state.canmove ? 'ok' : 'non'}</button>

                    }
                    <button onClick={props.state.canmove ? props.next : callback}>Next {props.state.canmove ? 'ok' : 'non'}</button>
                </div>
            </>
        );
    }

    const Before = (props) => {
        return <span></span>
    }

    const After = (props) => {
        return <span></span>
    }

    const config = {
        before: Before, // a React component with special props provided automatically
        after: After, // a React component with special props provided automatically
        navigation: {
            component: Navigation, // a React component with special props provided automatically
            location: "before" // or after
        }
    }

    return (
        <div>

            <div className="w-96 h-40">
                <Steps config={config}>
                    <Step title="My First Step" component={Step1} />
                    <Step title="My Second Step" component={Step2} />
                    <Step title="My Third Step" component={Step3} />
                </Steps>
            </div>

        </div>
    )
}

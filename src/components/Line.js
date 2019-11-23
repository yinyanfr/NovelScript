import React from 'react'
import Typing from "react-typing-animation"
import Controls from './Controls'

const Line = ({ className, line, next, setNext, ...props }) => {

    return (
        <div className={className || "nova-line"}>
            {
                line.speaker
                    ? (
                        <div className="nova-speaker">
                            {line ? line.speaker : ""}

                        </div>
                    )
                    : <div className="nova-speaker-placeholder"></div>
            }

            <div className="nova-text">
                {
                    next === "pending"
                        ? (
                            <Typing
                                hideCursor={true}
                                onFinishedTyping={() => { setNext("success") }}
                            >
                                {
                                    line
                                        ? line.line
                                        : "finished"
                                }
                            </Typing>
                        )
                        : (
                            line
                                ? line.line
                                : "finished"
                        )
                }
            </div>
            <div className="nova-icon">
                <Controls />
            </div>
        </div>
    )
}

export default Line

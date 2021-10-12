import React, { useRef, useState } from 'react'
import './App.css'

const App: React.FC = () => {
    const [text, setText] = useState<string>('')

    const textRef = useRef<string>()
    const textRef2 = useRef<HTMLTextAreaElement>(null)

    const getValueTextRef = () => {
        let msg = `textRef: ${textRef.current} \n`
        alert(msg)
    }
    const getValueTextRef2 = () => {
        alert(textRef2.current?.value)
    }

    console.log("render page counter")      

    return (
        <div className="container">
            <div className="box-container effect2">
                <h3>#useState</h3>
                <p>#open console in browser</p>
                <div className="box-items">
                    <textarea
                        className="text-area"
                        onChange={(e) => {
                            setText(e.target.value)
                        }}
                    />
                    <p>preview</p>
                    <pre className="preview-area" >
                        {text}
                    </pre>
                </div>
            </div>

            <div className="box-container effect2">
                <h3>#useRef #1</h3>
                <div className="box-items">
                    <textarea
                        className="text-area"
                        onChange={(e) => {
                            textRef.current = e.target.value
                        }}
                    />
                </div>
                <div>
                    <button onClick={getValueTextRef}>get useRef</button>
                </div>
            </div>

            <div className="box-container effect2">
                <h3>#useRef #2</h3>
                <div className="box-items">
                    <textarea className="text-area" ref={textRef2} />
                </div>
                <div>
                    <span>
                        <button onClick={getValueTextRef2}>get useRef</button>
                        <button
                            style={{ marginLeft: '1rem' }}
                            onClick={() => {
                                textRef2.current?.focus()
                                textRef2.current?.select()
                                // document.execCommand("copy")
                                const test = textRef2.current?.value || ''
                                navigator.clipboard.writeText(test)
                            }}
                        >
                            select all text and copy to clipboard
                        </button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default App

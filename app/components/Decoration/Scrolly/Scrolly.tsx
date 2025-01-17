import styles from "./scrolly.module.css";

const messages = [
    "initializing system...",
    "connecting...",
    "error: connection lost...",
    "re-establishing connection...",
    "system update complete...",
    "verifying credentials...",
    "CPU performance: 100%...",
    "memory allocation: optimal...",
    "all systems online.",
    "",
    "",
    "decrypting signal...",
    "code: 01101000 01100101 01101100 01110000",
    "checksum validation passed.",
    "",
    "connection to external network established",
    "running diagnostics...",
    "error code: 418 - i am a teapot",
    "system recovery in progress...",
    "system recovery complete.",
    "",
    "",
    "warning: unknown entity detected...",
    "signal source: unknown",
    "origin: deep space - 3500 light years away...",
    "processing anomaly...",
    "message received from unknown source: ",
    "you are not alone.",
    "",
    "",
];

const Scrolly = () => <div className={ styles.container }>
    <div className={ styles.text } id="scrollingText">
        { messages.map((msg, index) => (
            <p key={ index }> { msg } <br /> </p>
        ))}

        {/* Extra copy for smooth transition for looping */}
        { messages.map((msg, index) => (
            <p key={ index + messages.length }> { msg } <br /> </p>
        ))}
    </div>
</div>

export default Scrolly;
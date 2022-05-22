import { createSignal } from "solid-js";

export default () => {

    const [count, setCount] = createSignal(0);

    return (
        <div class="bg-blue-800 text-white">
            count is {count()}
            <br />
            <button onClick={() => { setCount(count() + 1) }}>Add</button>
        </div>
    )
}
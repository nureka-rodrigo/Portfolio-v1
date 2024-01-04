import {infinity} from 'ldrs'

infinity.register()

const LoadingAnimation = () => {
    return (
        <div role="status"
             className="fixed inset-0 start-0 top-0 z-[999] flex h-full w-full items-center justify-center bg-slate-950/60">
            <l-infinity
                className="inline h-12 w-12 text-gray-200 animate-spin dark:text-gray-600"
                size="55"
                stroke="4"
                stroke-length="0.15"
                bg-opacity="0.1"
                speed="1.3"
                color="black"
            ></l-infinity>
        </div>

    )
}

export default LoadingAnimation
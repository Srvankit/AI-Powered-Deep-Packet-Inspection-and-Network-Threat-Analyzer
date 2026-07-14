import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function LoadingSkeleton({

    height = 20,

    width = "100%",

    count = 1,

    borderRadius = 12

}) {

    return (

        <Skeleton

            height={height}

            width={width}

            count={count}

            borderRadius={borderRadius}

            baseColor="#1E293B"

            highlightColor="#334155"

        />

    );

}

export default LoadingSkeleton;
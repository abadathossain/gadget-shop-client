import { ClipLoader } from "react-spinners"

const Loading = () => {
    return (
        <div>
            <ClipLoader
                color="0000"
                loading={true}
                size={150}

            />
        </div>
    )
}

export default Loading
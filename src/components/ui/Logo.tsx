import Image from "next/image"

const Logo = () => {
    return (
        <Image
            src="https://ik.imagekit.io/b1ty4nofq/office-dine/logo.png?updatedAt=1734338651637"
            width={100}
            height={100}
            className="w-20 animate__animated animate__heartBeat"
            alt="logo"
        />
    )
}

export default Logo
interface Props {
    title: string
    description: string
    selected?: boolean
}

export const CustomerCard = ({
    title,
    description,
    selected
}: Props) => {
    return (
        <div className={["hover:bg-gray-100 duration-300 px-8 py-6 cursor-pointer border-r-2", selected ? "bg-[#EEEEEE] border-[#6F7275]" : "bg-white border-transparent"].join(" ")}>
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="mt-4">{description}</p>
        </div>
    )
}
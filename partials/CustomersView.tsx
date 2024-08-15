"use client"

import { CustomerCard } from "@/components/CustomerCard";
import { customerData } from "@/constants/customerData"
import { useMemo, useState } from "react"

export const CustomersView = () => {
    const [selectedId, setselectedId] = useState<number>(customerData[0].id);
    const selectedCustomer = useMemo(() => customerData.find(({ id }) => id == selectedId), [selectedId])

    return (
        <div className="flex w-full bg-[#F9F9F9] border h-[70vh]">
            <div className="w-1/3">
                {customerData.map((card) =>
                    <div key={card.id} onClick={() => setselectedId(card.id)}>
                        <CustomerCard selected={selectedId == card.id} {...card} />
                    </div>
                )}
            </div>
            <div className="w-2/3 px-28 flex items-center gap-4 flex-col py-10 overflow-auto">
                <h1 className="text-xl text-black/90">{selectedCustomer?.name}</h1>
                <p className="text-center text-black/60">{selectedCustomer?.description}</p>
                <div className="grid grid-cols-3 gap-10 w-full mt-8">
                    {selectedCustomer?.photos.map((item) => <img key={item + selectedCustomer.id} width={100} height={100} className="shadow-md w-full h-full aspect-square object-cover rounded-xl" src={item} />)}
                </div>
            </div>
        </div>
    )
}
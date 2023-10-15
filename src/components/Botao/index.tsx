import React from "react";

interface BotaoProps {
    texto?: string
    type?: "submit" | "button"
}

export default function Botao({texto = "Enviar", type = "button"}:BotaoProps){
    return (
        <button type={type} className="bg-cor-azulClaro text-cor-branco font-bold h-[40px] w-full rounded-sm hover:opacity-90 max-[500px]:w-full max-[500px]:ml-0 max-[500px]:mt-[4px]">{texto}</button>
    )
}
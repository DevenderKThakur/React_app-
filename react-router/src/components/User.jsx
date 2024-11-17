import React from "react";
import { useParams } from "react-router-dom";

export default function User () {
    const {userid} = useParams()
    return (
        <div className="text-center py-2 font-semibold text-xl">
            User:{userid}
        </div>
    )
}
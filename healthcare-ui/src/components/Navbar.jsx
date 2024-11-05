import React from "react";

import overview_logo from "../assets/home_FILL0_wght300_GRAD0_opsz24.svg"

import group_logo from "../assets/group_FILL0_wght300_GRAD0_opsz24.svg"

import calender_logo from "../assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg"

import message_logo from "../assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg"

import transaction_logo from "../assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg"

import setting_logo from "../assets/settings_FILL0_wght300_GRAD0_opsz24.svg"

import more_logo from "../assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg"

export default function Navbar () {
    return(
        <header className="flex flex-row justify-between items-center h-16 rounded-2xl bg-white m-5 bg-white shadow-2xl py-2">
            <div className="w-56 h-16 pr-7">
                <img 
                src="https://assets.turbologo.com/blog/en/2021/11/14061115/Naruto_logo.png" 
                alt="navbar-log"
                className="w-48 h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-row justify-between items-center max-w-2xl">
                    <div className="flex flex-row justify-between items-center center hover:bg-hover_color py-1 px-3 rounded-3xl transition-all cursor-pointer">
                        <img src={overview_logo} 
                        alt="" 
                        className="p-1"/>
                        <p>Overview</p>
                    </div>
                    <div className="flex flex-row justify-between items-center hover:bg-hover_color py-1 px-3 rounded-3xl transition-all cursor-pointer">
                        <img src={group_logo} alt="" className="p-1"/>
                        <p>Character</p>
                    </div>
                    <div className="flex flex-row justify-between items-center center hover:bg-hover_color py-1 px-3 rounded-3xl transition-all cursor-pointer">
                        <img src={calender_logo} alt="" className="p-1"/>
                        <p>Schedule</p>
                    </div>
                    <div className="flex flex-row justify-between items-center center hover:bg-hover_color py-1 px-3 rounded-3xl transition-all cursor-pointer">
                        <img src={message_logo} alt="" className="p-1"/>
                        <p>Message</p>
                    </div>
                    <div className="flex flex-row justify-between items-center center hover:bg-hover_color py-1 px-3 rounded-3xl transition-all cursor-pointer">
                        <img src={transaction_logo} alt="" className="p-1"/>
                        <p>Transaction</p>
                    </div>
            </div>
            <div className="w-56 h-12 flex flex-row  items-center">
                <div className="h-full w-12 mr-2">
                    <img src="https://superherojacked.b-cdn.net/wp-content/uploads/2020/11/Satoru-Gojo-Workout-3.jpg" alt=""
                    className="w-full h-full object-cover rounded-full object-center" />
                </div> 
                <div className="text-sm mr-3">
                    <p className="font-semibold">Gojo Satoru</p>
                    <p>S Grade Sorcerer</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <img src={setting_logo} alt="" 
                    className="w-4 mr-2"/>
                    <img src={more_logo} alt="" 
                    className="h-4"/>
                </div>
            </div>
        </header>
    )
}

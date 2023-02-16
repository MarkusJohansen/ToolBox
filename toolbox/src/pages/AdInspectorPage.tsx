import AdUserInfo from "../components/AdUserInfo";
import Title from "../components/Title";
import {AdIconAndText} from "../components//Ad";
import { getUser, getAd } from "../lib/controller";
import { Ad, User } from "../types/types";
import { useEffect, useState } from "react";


const AdInspectorPage = () => {

    const [user, setUser] = useState<User[]>([]);
    const [ad, setAd] = useState<Ad[]>([]);
    const userIDFromSessionStorage = sessionStorage.getItem("userID");
    const adFromSessionStorage = sessionStorage.getItem("ADID");

    async function getAdFromDatabase() {
        if (adFromSessionStorage != null) {
            const adFromDatabase = await getAd(adFromSessionStorage).then((doc) => {
                return { id: doc.id, ...doc.data() }
            });
            setAd([adFromDatabase]);
        }
    }
    
    // Get user from database
    async function getUserFromDatabase() {
        if (userIDFromSessionStorage != null) {
            const userFromDatabase = await getUser(userIDFromSessionStorage).then((doc) => {
                return { id: doc.id, ...doc.data() }
            });
            setUser([userFromDatabase]);
            console.log(user);
        }
    }


    // Call getUser2() when site is loaded
    useEffect(() => {
        getUserFromDatabase().then(() => {
            getAdFromDatabase();
        });
    }, []);
        

    return (
    <div className="pt-40 pb-40 flex flex-col px-60">

        <div 
            className="bg-cover h-96 bg-slate-100 rounded-md bg-center relative" 
            style={{ 
                backgroundImage: `url("https://static.bb.se/wcsstore/CAS/PIM/Luna/imgs/1151376.jpg")`
            
            }}
        >
            <div id="c_wrapper" className='w-auto justify-center bg-white rounded-tl-xl absolute right-0 bottom-0 '>
                <Title size={"text-7xl ml-5 mr-5"} heading={ad.title} description={""} span={""} ></Title>
            </div>
        </div>

        <div className="w-full">
            <div className="flex flex-row p-10 h-32 w-full justify-between">
                <AdIconAndText icon="https://img.icons8.com/ios/512/calendar--v1.png"  text={ad.date} iconSize="h-full" textSize="text-4xl" />
                <AdIconAndText icon="https://img.icons8.com/ios/50/000000/price-tag-euro.png"   text={ad.price} iconSize="h-full" textSize="text-4xl" />
                <AdIconAndText icon="https://img.icons8.com/material-sharp/256/map-marker.png" text={ad.location} iconSize="h-full" textSize="text-4xl" />
            </div>        
        </div>

        <div className="flex flex-row">
            <div className='pt-24 w-1/2'>
                <AdUserInfo name={user.firstname} email={user.email} phone={user.phone} avatar={""} />
            </div>

            <div className="p-10 text-2xl w-1/2 text-left" >
                <p>
                    {ad.description}
                </p>
            </div>
        </div>
    </div>
    );
};

export default AdInspectorPage;




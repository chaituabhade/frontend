import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Success = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapper>
                
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
                    <div className="text-2xl font-bold">
                        About
                    </div>
                    <div className="text-lg font-bold mt-2">
                        Our Story

                    </div>
                    <div className="text-base mt-5">
                    At Aero Shoes, we believe that every step you take should be a statement of style and comfort. Founded in 2024, we have been dedicated to crafting high-quality footwear that not only looks great but also feels great to wear.
                    </div>
                    <div className="text-lg font-bold mt-2">
                        Our Mission

                    </div>
                    <div className="text-base mt-5">
                    Our mission is simple: to provide our customers with stylish and comfortable shoes that enhance their everyday experiences. We are committed to using the finest materials and craftsmanship to ensure that every pair of Aero Shoes meets the highest standards of quality and durability.
                    </div>
                    <div className="text-lg font-bold mt-2">
                    Our Commitment

                    </div>
                    <div className="text-base mt-5">
                    Quality, comfort, and style are the pillars of our brand. We are passionate about creating footwear that not only looks good but also supports your feet throughout the day. With Aero Shoes, you can step out with confidence, knowing that you are wearing shoes that are designed to keep up with your active lifestyle.
                    </div>
                    <div className="text-lg font-bold mt-2">
                    Join the Aero Shoes Family

                    </div>
                    <div className="text-base mt-5">
                    Experience the difference of Aero Shoes today. Browse our collection and find your perfect pair of stylish and comfortable footwear that will take you wherever you want to go.

                    </div>

                    

                    <Link href="/" className="font-bold mt-5">
                        Continue Shopping
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Success;
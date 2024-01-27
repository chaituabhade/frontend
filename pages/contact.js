import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Success = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapper>
                
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
                    <div className="text-3xl font-bold">
                    Contact Us
                       
                    </div>
                    <div className="text-lg font-bold mt-2">
                       Get in Touch
                    </div>
                    <div className="text-base mt-5">
                       We'd love to hear from you! Whether you have a question about our products, need assistance with an order, or just want to say hello, we're here to help.
                    </div>
                    <div className="text-lg font-bold mt-2">
                       Contact Information
                    </div>
                    <div className="text-base mt-5">
                    Email: info@aeroshoes.com
                      Phone: +1-XXX-XXX-XXXX
                       Address:
                       Aero Shoes
                       123 Shoe Avenue                 
                       city, State, Zip Code
                    </div>
                    <div className="text-lg font-bold mt-2">
                       Follow Us
                    </div>
                    <div className="text-base mt-5">
                        Facebook: @AeroShoes
                    </div>
                    <div className="text-base mt-5">
                        Instagram: @AeroShoesOfficial

                    </div>
                    <div className="text-base mt-5">
                        Twitter: @AeroShoesHQ
                    </div>

                    <div className="text-lg font-bold mt-2">
                         We're Here for You
                    </div>
                    <div className="text-base mt-5">
                    Your satisfaction is our priority. If you have any feedback or suggestions on how we can improve your experience with Aero Shoes, please let us know. Your input is invaluable to us as we strive to provide you with the best footwear and customer service possible.

    
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
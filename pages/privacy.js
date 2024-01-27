import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Success = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapper>
                
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
                    <div className="text-2xl font-bold">
                     Privacy Policy
                    </div>
                    <div className="text-lg font-bold mt-2">
                     Information We Collect

                    </div>
                    <div className="text-base mt-5">
                    We may collect personal information such as your name, email address, phone number, and address when you place an order or sign up for our newsletter. We also gather data on how you use our website, such as your IP address and browsing behavior.
                    </div>
                    <div className="text-lg font-bold mt-2">
                    How We Use Your Information

                    </div>
                    <div className="text-base mt-5">
                    We use your information to process orders, communicate with you, and improve our products and services. We may also use your data for marketing purposes, but you can opt out at any time.
                    </div>
                    <div className="text-lg font-bold mt-2">
                    Your Rights

                    </div>
                    <div className="text-base mt-5">
                    You have the right to access, correct, or delete your personal information. You can also opt out of marketing communications or request a copy of your data.
                    </div>
                    <div className="text-lg font-bold mt-2">
                    Changes to This Policy

                    </div>
                    <div className="text-base mt-5">
                    We may update our Privacy Policy from time to time. Any changes will be posted on this page, so please check back periodically for updates.



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
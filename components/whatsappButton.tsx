"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const phoneNumber = "2348063636497"; // change to your number (no + sign)
  const message = encodeURIComponent("Hello, I would like to make an enquiry!");

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      className="heartbeat fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-2 rounded-xl shadow-lg z-50 transition-all flex items-center justify-center"
    >
      <FaWhatsapp size={30} />
    </Link>
  );
}

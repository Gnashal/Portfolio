"use client";

import CertCard from "@/components/CertCard";
import { motion } from "framer-motion";

const certs = [
  {
    name: "Cloud Infrastructure Fundamentals",
    issuer: "Zuitt",
    date: "May 2024",
    image: "/assets/certs/zuitt-cert.jpg",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "May 2024",
    image: "/assets/certs/into_to_cybersec.png",
  },
  {
    name: "CCNAv7: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "January 2025",
    image: "/assets/certs/net_2.png",
  },
  {
    name: "NC2: Computer Systems Servicing",
    issuer: "Technical Education and Skills Development Authority (TESDA)",
    date: "December 17,2024",
    image: "/assets/certs/NC.png",
  },
];

function CertificationsPage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.2,
            ease: "easeIn",
          },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
      >
        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Certifications</h2>
            <p className="text-white/70 mb-8 max-w-2xl">
              A selection of certifications and courses I've completed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certs.map((c, i) => (
                <CertCard key={i} cert={c} />
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}

export default CertificationsPage;

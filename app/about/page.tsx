import type { Metadata } from "next";
import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { COMPANY } from "@/data/company";
import { Certifications } from "@/components/sections/Certifications";
import { ForwardBookingCTA } from "@/components/sections/ForwardBookingCTA";

export const metadata: Metadata = {
  title: "About Us | SYR Global Exports",
  description:
    "Learn about SYR Global Exports — an Indian export merchant house connecting sustainable agricultural produce and biodegradable tableware with international markets.",
};

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-[#001337] via-[#0F2854] to-[#0A1C3B] text-white py-10 lg:py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#FECE57] rounded-full w-fit text-xs font-bold uppercase tracking-wider font-label-sm border border-white/10">
              <MaterialIcon name="info" size={14} />
              <span>Corporate Profile</span>
            </div>
            <h1 className="font-display-lg text-3xl sm:text-5xl font-extrabold tracking-tight">
              About SYR Global Exports
            </h1>
            <p className="font-body-lg text-base sm:text-lg text-slate-300 leading-relaxed">
              Committed to promoting environmentally responsible international commerce by supplying verified agricultural commodities and 100% natural, biodegradable products to world markets.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div>
                <span className="text-[#C59B27] font-label-sm text-xs uppercase tracking-wider font-bold">
                  Trade Philosophy
                </span>
                <h2 className="font-headline-xl text-2xl sm:text-3xl font-bold text-[#0F2854] mt-1">
                  Connecting Nature with Global Markets
                </h2>
                <p className="font-body-md text-sm sm:text-base text-slate-700 mt-3 leading-relaxed">
                  SYR Global Exports operates as a Government Registered Export Merchant House based out of Ponneri, Tamil Nadu. We bridge the gap between fertile agricultural heartlands, rural artisan manufacturing clusters, and commercial international procurement teams seeking authentic, sustainable supply lines.
                </p>
                <p className="font-body-md text-sm sm:text-base text-slate-700 mt-3 leading-relaxed">
                  Our operational ethos is built around transparency, uncompromising pre-shipment inspection, and adherence to international trade conventions (Incoterms 2020: FOB, CIF, CFR). We work directly with primary farming cooperatives and certified eco-ware manufacturers to ensure direct farmgate pricing and total batch traceability.
                </p>
              </div>

              {/* Manufacturing & Sourcing Approach */}
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0F2854] text-[#FECE57] flex items-center justify-center">
                    <MaterialIcon name="precision_manufacturing" size={22} />
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-base sm:text-lg font-bold text-[#0F2854]">
                      Manufacturing & Sourcing Approach
                    </h3>
                    <span className="text-xs text-slate-500 font-label-sm">
                      Responsible Farmgate & Workshop Protocols
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-800">1. Raw Leaf Collection</span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Only naturally shed leaves collected post-monsoon from areca plantations. No live trees are ever harvested or damaged.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-800">2. Water Jet Sterilization</span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Leaves and sugarcane pulp are cleaned with pressurized freshwater and processed without chemical bleaching agents or artificial binders.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-800">3. Thermal Hydraulic Pressing</span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      High-pressure steam presses shape the raw fibers into rigid, heat-tolerant tableware capable of handling hot foods and gravies.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-800">4. Cold Chain Produce Dispatch</span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Fresh green chillies sorted by stem and cultivar under pre-cooled packhouses, loaded in ventilated cartons for reefer transport.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision and Mission Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <MaterialIcon name="visibility" size={26} className="text-[#C59B27]" />
                    <h3 className="font-headline-sm text-base font-bold text-[#0F2854]">
                      Our Vision
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      To establish our enterprise as a benchmark global supplier for zero-plastic tableware and agricultural commodities, recognized for integrity, compliance, and dependable transit timelines.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-[#0F2854] text-white rounded-xl shadow-md flex flex-col justify-between border border-[#0F2854]">
                  <div className="flex flex-col gap-2">
                    <MaterialIcon name="flag" size={26} className="text-[#FECE57]" />
                    <h3 className="font-headline-sm text-base font-bold">
                      Our Mission
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      To empower regional rural growers, displace petroleum single-use plastics from commercial dining, and supply international buyers with certified export solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar: Key Personnel & Port Proximity Advantage */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Executive Contact Card */}
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <span className="text-xs font-bold text-[#C59B27] uppercase tracking-wider font-label-sm">
                  Executive Leadership Desk
                </span>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-[#0F2854] text-[#FECE57] flex items-center justify-center font-headline-md text-lg font-bold shrink-0">
                    YS
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-lg font-bold text-[#0F2854]">
                      {COMPANY.personnel.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#C59B27] uppercase">
                      {COMPANY.personnel.title}
                    </p>
                    <p className="text-xs text-slate-500">
                      {COMPANY.personnel.desk}
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-200 flex flex-col gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <MaterialIcon name="call" size={16} className="text-[#0F2854]" />
                    <span>{COMPANY.phones[0]} / {COMPANY.phones[1]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MaterialIcon name="mail" size={16} className="text-[#0F2854]" />
                    <a href={`mailto:${COMPANY.emails.primary}`} className="hover:underline">
                      {COMPANY.emails.primary}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MaterialIcon name="schedule" size={16} className="text-[#0F2854]" />
                    <span>{COMPANY.hours}</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-2.5 bg-[#FECE57] hover:bg-[#ffdf98] text-[#251a00] font-bold text-xs uppercase rounded text-center block transition-colors"
                  >
                    Direct RFQ Inquiry
                  </Link>
                </div>
              </div>

              {/* Geographic Advantage */}
              <div className="p-6 bg-[#001337] text-white rounded-xl shadow-md border border-slate-800 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[#FECE57]">
                  <MaterialIcon name="hub" size={20} />
                  <h3 className="font-headline-sm text-base font-bold">
                    Strategic Seaport Proximity
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Headquartered at Ponneri, Tamil Nadu, with direct access to major maritime container terminals:
                </p>
                <ul className="flex flex-col gap-2 text-xs text-slate-200">
                  <li className="flex items-center gap-2">
                    <MaterialIcon name="anchor" size={16} className="text-[#FECE57]" />
                    <span><strong>Chennai Port (CCPL):</strong> ~35 km arterial link</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MaterialIcon name="anchor" size={16} className="text-[#FECE57]" />
                    <span><strong>Ennore & Kattupalli Ports:</strong> ~28 km dedicated corridor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MaterialIcon name="flight_takeoff" size={16} className="text-[#FECE57]" />
                    <span><strong>Chennai International Airport Cargo (MAA):</strong> Rapid perishables dispatch</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statutory Certifications Module */}
      <Certifications showTitle={true} />

      {/* Forward Booking CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ForwardBookingCTA />
        </div>
      </section>
    </main>
  );
}

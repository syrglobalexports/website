"use client";

import React, { useState, useEffect } from "react";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { COMPANY } from "@/data/company";

interface EnquiryFormProps {
  defaultProduct?: string;
  isForwardBooking?: boolean;
  title?: string;
  subtitle?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  defaultProduct = "",
  isForwardBooking = false,
  title,
  subtitle,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: defaultProduct || (isForwardBooking ? "Other / Upcoming Products" : "Areca Leaf Plates"),
    volume: "1x 20ft FCL Container",
    destinationPort: "",
    message: isForwardBooking ? "Interested in advance contract and forward booking." : "",
  });

  useEffect(() => {
    if (defaultProduct) {
      setFormData((prev) => ({ ...prev, product: defaultProduct }));
    }
  }, [defaultProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const productOptions = [
    "Areca Leaf Plates",
    "Green Chilli",
    "Biodegradable Cutlery Set Made from Sugarcane Bagasse",
    "Other / Upcoming Products",
  ];

  return (
    <div className="w-full bg-white rounded-xl shadow-lg border border-slate-200 p-6 sm:p-8">
      {title && (
        <div className="mb-6">
          <h3 className="font-headline-lg text-xl sm:text-2xl font-bold text-[#0F2854]">
            {title}
          </h3>
          {subtitle && (
            <p className="font-body-md text-sm text-slate-600 mt-1">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {submitted ? (
        <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <MaterialIcon name="check_circle" size={28} />
          </div>
          <h4 className="font-headline-sm text-lg font-bold text-emerald-900">
            {isForwardBooking ? "Forward Interest Registered" : "Enquiry Transmitted Successfully"}
          </h4>
          <p className="text-sm text-emerald-800 max-w-md leading-relaxed">
            Thank you for reaching out. Our export trade desk ({COMPANY.personnel.name}) has logged your inquiry and will provide official proforma CIF/FOB specifications within 12 business hours.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-2 text-xs font-bold text-emerald-700 hover:underline"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Row 1: Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="enquiry-name" className="text-xs font-bold text-[#0F2854] font-label-md">
                Full Name *
              </label>
              <input
                id="enquiry-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. John Doe"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2854] focus:bg-white transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="enquiry-company" className="text-xs font-bold text-[#0F2854] font-label-md">
                Company / Importer Name *
              </label>
              <input
                id="enquiry-company"
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Global Foods Trading Ltd"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2854] focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="enquiry-email" className="text-xs font-bold text-[#0F2854] font-label-md">
                Business Email *
              </label>
              <input
                id="enquiry-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2854] focus:bg-white transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="enquiry-phone" className="text-xs font-bold text-[#0F2854] font-label-md">
                Phone / WhatsApp (with Country Code) *
              </label>
              <input
                id="enquiry-phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 555 0192 / +44 20 7946"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2854] focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Row 3: Product of Interest & Volume */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="enquiry-product" className="text-xs font-bold text-[#0F2854] font-label-md">
                Product of Interest *
              </label>
              <select
                id="enquiry-product"
                required
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2854] focus:bg-white transition-all"
              >
                {productOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="enquiry-volume" className="text-xs font-bold text-[#0F2854] font-label-md">
                Quantity / Estimated Volume *
              </label>
              <select
                id="enquiry-volume"
                required
                value={formData.volume}
                onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2854] focus:bg-white transition-all"
              >
                <option value="1x 20ft FCL Container">1x 20ft FCL Container</option>
                <option value="1x 40ft HQ FCL Container">1x 40ft HQ FCL Container</option>
                <option value="Multiple Containers / Annual Contract">Multiple Containers / Annual Contract</option>
                <option value="LCL / Trial Pallet Shipment">LCL / Trial Pallet Shipment</option>
                <option value="Commercial Sample Request">Commercial Sample Batch</option>
                <option value="Forward Allocation Booking">Forward Allocation Booking</option>
              </select>
            </div>
          </div>

          {/* Row 4: Destination Port */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="enquiry-port" className="text-xs font-bold text-[#0F2854] font-label-md">
              Destination Port / City *
            </label>
            <input
              id="enquiry-port"
              type="text"
              required
              value={formData.destinationPort}
              onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
              placeholder="e.g. Rotterdam, Jebel Ali, Singapore, New York, Hamburg"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2854] focus:bg-white transition-all"
            />
          </div>

          {/* Row 5: Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="enquiry-message" className="text-xs font-bold text-[#0F2854] font-label-md">
              Order Specifications / Incoterms / Notes
            </label>
            <textarea
              id="enquiry-message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Specify requirements such as packaging preference, preferred Incoterms (FOB / CIF / CFR), shipment target date..."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2854] focus:bg-white transition-all"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className={`w-full py-3.5 px-6 rounded-md font-label-lg font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                isForwardBooking
                  ? "bg-[#FECE57] hover:bg-[#ffdf98] text-[#251a00] border border-[#eec14b]"
                  : "bg-[#0F2854] hover:bg-[#001337] text-white border border-[#0F2854]"
              }`}
            >
              {submitting ? (
                <>
                  <MaterialIcon name="sync" size={18} className="animate-spin" />
                  <span>Processing Submission...</span>
                </>
              ) : isForwardBooking ? (
                <>
                  <MaterialIcon name="bookmark_add" size={18} />
                  <span>Register Forward Interest</span>
                </>
              ) : (
                <>
                  <MaterialIcon name="send" size={18} />
                  <span>Send Enquiry</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
            <span>Direct Desk SLA: 12 Hours</span>
            <span>Commercial Confidentiality Assured</span>
          </div>
        </form>
      )}
    </div>
  );
};

export interface ComplianceItem {
  code: string;
  name: string;
  status: "Registered" | "Active" | "Verified";
  description: string;
  authority: string;
}

export const EXPORT_COMPLIANCE_ITEMS: ComplianceItem[] = [
  {
    code: "IEC",
    name: "Import Export Code",
    status: "Active",
    description:
      "Statutory export license issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce & Industry, Government of India.",
    authority: "DGFT, Govt. of India",
  },
  {
    code: "FIEO",
    name: "Federation of Indian Export Organisations",
    status: "Registered",
    description:
      "Premier apex trade promotion organisation set up jointly by the Ministry of Commerce and private trade bodies to regulate export quality.",
    authority: "Ministry of Commerce, Govt. of India",
  },
  {
    code: "GST",
    name: "Goods & Services Tax Registered",
    status: "Verified",
    description:
      "Full export invoice and tax compliance under the Central Board of Indirect Taxes and Customs (CBIC) for legal commercial cross-border shipments.",
    authority: "CBIC, Govt. of India",
  },
  {
    code: "UDYAM",
    name: "UDYAM Registered Enterprise",
    status: "Registered",
    description:
      "Formally registered micro, small and medium export manufacturing enterprise recognized under the Ministry of MSME, Government of India.",
    authority: "Ministry of MSME, Govt. of India",
  },
];

export const THIRD_PARTY_INSPECTION_NOTE =
  "Third-party inspection can be facilitated upon buyer request.";

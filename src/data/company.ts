// ---------------------------------------------------------------------------
// Company Data – Vihani Transoceanic Pvt. Ltd.
// ---------------------------------------------------------------------------

export interface ContactInfo {
  emails: {
    address: string;
    purpose: string;
  }[];
  phone: string;
  phoneHref: string;
  address: string;
  addressHref: string;
}

export interface CompanyInfo {
  name: string;
  companyName: string;
  tagline: string;
  description: string;
  /** Year the company was founded. `undefined` until confirmed. */
  founded?: number;
  contactInfo: ContactInfo;
}

export const company: CompanyInfo = {
  name: "Vihani Transoceanic Pvt. Ltd.",
  companyName: "Vihani Transoceanic Pvt. Ltd.",
  tagline: "Reliable Packaging for a Sustainable Future",
  description:
    "Vihani Transoceanic is an industrial packaging supplier and manufacturer specializing in woven polypropylene, flexible packaging, and geotextile solutions. We serve agriculture, construction, chemicals, and infrastructure sectors with dependable, export-quality products.",
  founded: undefined,
  contactInfo: {
    emails: [
      {
        address: "sales@vihanitransoceanic.com",
        purpose: "General sales enquiries",
      },
      {
        address: "dhaval@vihanitransoceanic.com",
        purpose: "Direct business enquiries",
      },
    ],
    phone: "+91 63581 98988",
    phoneHref: "+916358198988",
    address: "821, Shilp Epitome, Rajpath Rangoli Road, Bodakdev, 380054, Ahmedabad, Gujarat, India",
    addressHref: "https://www.google.com/maps/search/?api=1&query=821%2C%20Shilp%20Epitome%2C%20Rajpath%20Rangoli%20Road%2C%20Bodakdev%2C%20380054%2C%20Ahmedabad%2C%20Gujarat%2C%20India",
  },
};

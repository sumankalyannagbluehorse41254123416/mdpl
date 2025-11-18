"use client";

import React, { useState } from "react";

// --------------------
// CMS Types
// --------------------
interface Section {
  id?: number;
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
  [key: string]: unknown;
}

interface FormField {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
  [key: string]: unknown;
}

interface FormData {
  id?: string;
  title?: string;
  [key: string]: unknown;
}

interface ContactFormProps {
  section?: Section;
  serviceSections?: Section[];
  form?: FormData;
  fields?: FormField[];
}

// --------------------
// Clean unwanted HTML
// --------------------
const cleanHTML = (text: string = ""): string => {
  return text
    .replace(/<a[^>]*>(.*?)<\/a>/gi, "$1")
    .replace(/<p[^>]*>/gi, "")
    .replace(/<\/p>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
};

export default function ContactForm({
  section,
  serviceSections = [],
  form,
  fields = [],
}: ContactFormProps) {
  const [activeTab, setActiveTab] = useState("newscan-0");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [formData, setFormData] = useState<Record<string, string>>({});

  // -------------------------------
  // Dynamic CMS Services
  // -------------------------------
  const services = serviceSections.map((svc, i) => ({
    id: `newscan-${i}`,
    name: cleanHTML(svc?.title || `Service ${i + 1}`),
    hospitals: (svc?.subsections || []).map((sub) => ({
      label: cleanHTML(sub?.title || ""),
      value: cleanHTML(sub?.description || ""),
    })),
  }));

  // -------------------------------
  // Handle form change
  // -------------------------------
  const handleInputChange = (fieldId: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  };

  const handleHospitalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrice(e.target.value);
  };

  // -------------------------------
  // Render form field WITH unique key
  // -------------------------------
  const renderFormField = (field: FormField, index: number) => {
    const fieldKey = `${field.id}-${index}`;

    const commonProps = {
      id: fieldKey,
      name: fieldKey,
      className: "form-control",
      placeholder: field.placeholder || "",
      required: field.required || false,
      value: formData[fieldKey] || "",
      onChange: (
        e: React.ChangeEvent<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
      ) => handleInputChange(fieldKey, e.target.value),
    };

    switch (field.type) {
      case "text":
      case "email":
      case "tel":
        return <input type={field.type} {...commonProps} />;

      case "textarea":
        return <textarea rows={4} {...commonProps} />;

      case "select":
        return (
          <select {...commonProps}>
            <option value="">Select {field.label}</option>
            {field.options?.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case "date":
        return <input type="date" {...commonProps} />;

      default:
        return <input type="text" {...commonProps} />;
    }
  };

  // -------------------------------
  // Group fields
  // -------------------------------
  const basicFields = fields.filter((f) =>
    ["text", "email", "tel", "date"].includes(f.type)
  );
  const messageField = fields.find((f) => f.type === "textarea");
  const selectFields = fields.filter((f) => f.type === "select");

  // -------------------------------
  // JSX
  // -------------------------------
  return (
    <div className="container">
      <div className="row">
        {/* LEFT FORM AREA */}
        <div className="col-lg-8 col-md-7 col-sm-7">
          <h4 className="hs_heading">{form?.title || "Leave a Message"}</h4>

          <form
            className="hs_comment_form"
            action="https://www.mdpl.co/home/save"
            method="POST"
          >
            <input
              type="hidden"
              name="_token"
              value="yfi6pGTwaeeufDLN7W4cNXOLJRiINxkVYGpdwXPB"
            />

            <div className="row">
              {/* BASIC FIELDS */}
              {basicFields.map((field, index) => (
                <div
                  key={`${field.id}-${index}`}
                  className="col-lg-6 col-md-6 col-sm-12"
                >
                  <div className="input-group">
                    <span className="input-group-btn">
                      <button className="btn btn-success" type="button">
                        <i
                          className={`fa fa-${
                            field.type === "email"
                              ? "envelope"
                              : field.type === "tel"
                              ? "phone"
                              : field.type === "date"
                              ? "calendar"
                              : "user"
                          }`}
                        ></i>
                      </button>
                    </span>

                    {renderFormField(field, index)}
                  </div>
                </div>
              ))}

              {/* SERVICE SELECTOR */}
              <div className="col-lg-12">
                <div className="form-group">
                  <div className="tophead56">
                    <label>Service *</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control price_append"
                        placeholder="price"
                        value={selectedPrice}
                        readOnly
                      />
                    </div>
                  </div>

                  {/* TABS */}
                  <div className="radio service_row">
                    <ul className="nav nav-tabs">
                      {services.map((service) => (
                        <li
                          key={service.id}
                          className={activeTab === service.id ? "active" : ""}
                        >
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveTab(service.id);
                              setSelectedPrice("");
                            }}
                          >
                            {service.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {/* TAB CONTENT */}
                    <div className="tab-content" style={{ borderBottom: 0 }}>
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className={`tab-pane fade ${
                            activeTab === service.id ? "active in" : ""
                          }`}
                          style={{
                            display:
                              activeTab === service.id ? "block" : "none",
                          }}
                        >
                          <h3>{service.name}</h3>

                          <div className="form-group">
                            <select
                              className="form-control"
                              onChange={handleHospitalChange}
                            >
                              <option value="">--Select hospital--</option>
                              {service.hospitals.map((hospital, i) => (
                                <option key={i} value={hospital.value}>
                                  {hospital.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* SELECT FIELDS */}
              {selectFields.map((field, index) => (
                <div key={field.id + "-" + index} className="col-lg-12">
                  <div className="form-group">
                    <label>{field.label}</label>
                    {renderFormField(field, index)}
                  </div>
                </div>
              ))}

              {/* MESSAGE FIELD */}
              {messageField && (
                <div className="col-lg-12">
                  <div className="form-group">
                    {/* <label>{messageField.label}</label> */}
                    {renderFormField(messageField, 0)}
                  </div>
                </div>
              )}

              {/* SEND BUTTON */}
              <div className="form-group">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" defaultChecked />
                      <span>Receive Your Comments By Email</span>
                    </label>
                    <div className="g-recaptcha" id="rcaptcha"></div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <button
                    className="btn btn-success pull-right btn-gap"
                    type="button"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE CONTACT DETAILS */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h4 className="hs_heading">
            {section?.title || "Our Contact Details"}
          </h4>

          <div className="hs_contact">
            <ul>
              <li>
                <i className="fa fa-map-marker"></i>
                <p>{cleanHTML(section?.shortDescription || "")}</p>
              </li>
            </ul>

            <ul>
              <li>
                <i className="fa fa-phone"></i>
                <p>{cleanHTML(section?.subsections?.[0]?.title || "")}</p>
              </li>
            </ul>

            <ul>
              <li>
                <i className="fa fa-envelope"></i>
                <p>{cleanHTML(section?.subsections?.[0]?.description || "")}</p>
              </li>
            </ul>
          </div>

          <div className="hs_contact_social">
            <div className="hs_profile_social">
              <ul>
                <li>
                  <a href="https://www.facebook.com/mdpl.co">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/mdpl_co">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

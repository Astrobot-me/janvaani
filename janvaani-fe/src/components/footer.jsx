import React from "react";
import { Facebook, Twitter, X, Mail, Phone, MapPin, ExternalLink, Download } from "lucide-react";
import Emblem from "../assets/Emblem_of_India1.png";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-gradient {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
          /* Removed position: fixed */
          width: 100%;
          margin-top: auto; /* Pushes footer to bottom if using flex column layout */
        }
        
        .footer-link {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          padding: 0.25rem 0;
          display: inline-block;
        }
        
        .footer-link:hover {
          color: #fbbf24;
          text-decoration: none;
          transform: translateX(4px);
        }
        
        .social-btn {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.1);
          color: white;
          transition: all 0.3s ease;
        }
        
        .social-btn:hover {
          background: #fbbf24;
          border-color: #fbbf24;
          color: #1e1b4b;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3);
        }
        
        .btn-government {
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          border: none;
          color: #1e1b4b;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(251, 191, 36, 0.3);
        }
        
        .btn-government:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(251, 191, 36, 0.4);
          color: #1e1b4b;
        }
        
        .btn-outline-government {
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
          background: transparent;
          transition: all 0.3s ease;
        }
        
        .btn-outline-government:hover {
          background: rgba(251, 191, 36, 0.1);
          border-color: #fbbf24;
          color: #fbbf24;
          transform: translateY(-2px);
        }
        
        .logo-circle {
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.2);
        }
        
        .contact-item {
          color: #94a3b8;
          font-size: 0.875rem;
          transition: color 0.3s ease;
        }
        
        .contact-item:hover {
          color: #fbbf24;
        }
        
        .section-heading {
          color: #ffffff;
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #fbbf24;
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          background: rgba(0,0,0,0.2);
        }
        
        /* Remove the body padding adjustments since footer is no longer fixed */
        
        @media (max-width: 768px) {
          .footer-buttons {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .footer-buttons .btn {
            width: 100%;
            justify-content: center;
          }
          
          .social-buttons {
            justify-content: center;
            margin: 1rem 0;
          }
          
          .col-lg-4 {
            text-align: center;
            margin-bottom: 2rem;
          }
          
          .col-lg-4 .d-flex {
            justify-content: center;
          }
          
          .contact-item {
            justify-content: center;
          }
        }
        
        @media (max-width: 576px) {
          .container {
            padding-left: 15px;
            padding-right: 15px;
          }
          
          .row {
            margin-left: -8px;
            margin-right: -8px;
          }
          
          .col-lg-2, .col-md-3, .col-md-6, .col-sm-6 {
            padding-left: 8px;
            padding-right: 8px;
            margin-bottom: 1.5rem;
          }
          
          .section-heading {
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }
          
          .footer-link {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .footer-buttons {
            flex-direction: column;
          }
          
          .social-buttons {
            flex-wrap: wrap;
          }
          
          .logo-circle {
            width: 50px !important;
            height: 50px !important;
          }
          
          .logo-circle div {
            width: 38px !important;
            height: 38px !important;
          }
          
          .logo-circle img {
            height: 24px !important;
          }
        }

        @media (max-width: 360px) {
          .footer-bottom .d-flex {
            flex-direction: column;
            gap: 1rem !important;
          }
        }
      `}</style>

      <footer className="footer-gradient text-light">
        <div className="container py-4">
          <div className="row g-4">
            <div className="col-lg-4">
              {/* Logo and Title */}
              <div className="d-flex align-items-center mb-3">
                <div className="logo-circle rounded-circle d-flex align-items-center justify-content-center me-3" 
                     style={{width: '60px', height: '60px'}}>
                  <div className="bg-white rounded-circle d-flex align-items-center justify-content-center"
                       style={{width: '45px', height: '45px'}}>
                    <img 
                        src={Emblem} 
                        alt="Jharkhand Logo" 
                        style={{ height: "30px", width: "auto" }} 
                        />
                  </div>
                </div>
                <div>
                  <h4 className="mb-0 fw-bold text-white" style={{fontSize: 'clamp(1rem, 4vw, 1.5rem)'}}>Ministry of Jharkhand</h4>
                </div>
              </div>

              <div className="mb-3">
                <div className="d-flex align-items-center mb-2 contact-item">
                  <Phone size={16} className="text-warning me-2" />
                  <span>+91-9798018523</span>
                </div>
                <div className="d-flex align-items-center mb-2 contact-item">
                  <Mail size={16} className="text-warning me-2" />
                  <span>jharkhand@gov.in</span>
                </div>
                <div className="d-flex align-items-center mb-3 contact-item">
                  <MapPin size={16} className="text-warning me-2" />
                  <span>Secretariat, Ranchi - 800008</span>
                </div>
              </div>

              <div className="social-buttons d-flex gap-2 mb-3">
                <a href="#" className="btn social-btn rounded-circle d-flex align-items-center justify-content-center" 
                   aria-label="Facebook">
                  <Facebook size={16} />
                </a>
                <a href="#" className="btn social-btn rounded-circle d-flex align-items-center justify-content-center"
                   aria-label="Twitter">
                  <Twitter size={16} />
                </a>
                <a href="#" className="btn social-btn rounded-circle d-flex align-items-center justify-content-center"
                   aria-label="X (Twitter)">
                  <X size={16} />
                </a>
              </div>

              <div className="footer-buttons d-flex gap-2">
                <button className="btn btn-government px-3 py-2 d-flex align-items-center gap-2">
                  <span>Register Complain</span>
                  <ExternalLink size={14} />
                </button>
                <button className="btn btn-outline-government px-3 py-2 d-flex align-items-center gap-2">
                  <Download size={14} />
                  <span>Tenders</span>
                </button>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 col-sm-6">
              <h6 className="section-heading">About Us</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="footer-link">Overview</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Mission & Vision</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Leadership</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Organization</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Annual Reports</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 col-sm-6">
              <h6 className="section-heading">Services</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="footer-link">Citizen Services</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Online Applications</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Document Verification</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Grievance Portal</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Track Status</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <h6 className="section-heading">Information</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="footer-link">News & Updates</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Notifications</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Publications</a></li>
                <li className="mb-2"><a href="#" className="footer-link">RTI Portal</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Downloads</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <h6 className="section-heading">Support</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="footer-link">Help Center</a></li>
                <li className="mb-2"><a href="#" className="footer-link">FAQs</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Contact Directory</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Feedback</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Site Map</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom py-3">
          <div className="container">
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <span className="footer-link">Terms & Conditions</span>
              <span className="footer-link">Privacy Policy</span>
              <span className="footer-link">Contact Us</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
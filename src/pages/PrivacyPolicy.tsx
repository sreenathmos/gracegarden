import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10 border border-green-100">
        <h1 className="text-4xl font-bold text-green-700 mb-6 border-b pb-3 border-green-200">
          Privacy Policy
        </h1>

        {/* <p className="text-gray-700 mb-6 italic">Updated: 13-Oct-2025</p> */}

        <section className="space-y-6 text-gray-800 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>Grace Garden Care Home</strong> (“we,” “our,” or
              “us”). Your privacy is important to us. This Privacy Policy
              explains how we collect, use, and protect your personal
              information when you visit our website —
              <a
                href="https://gracegarden.co.in"
                className="text-green-700 underline ml-1"
              >
                www.gracegarden.co.in
              </a>{" "}
              — or contact us through any of our communication channels.
            </p>
            <p className="mt-2">
              By using our website, you agree to the terms outlined in this
              Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              2. Information We Collect
            </h2>
            <ul className="list-disc ml-6">
              <li>
                <strong>Personal Information:</strong> Your name, email address,
                phone number, or other details submitted through contact forms
                or inquiries.
              </li>
              <li>
                <strong>Usage Data:</strong> Information such as your IP
                address, browser type, pages visited, and time spent on the
                website.
              </li>
              <li>
                <strong>Cookies:</strong> Our website may use cookies to enhance
                your browsing experience and collect anonymous traffic data. You
                can manage or disable cookies through your browser settings.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc ml-6">
              <li>Respond to your inquiries or requests.</li>
              <li>Provide information about our care home and services.</li>
              <li>Improve our website’s functionality and user experience.</li>
              <li>Send updates, if you have opted to receive them.</li>
            </ul>
            <p className="mt-2">
              We do not sell, rent, or trade your personal information to any
              third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              4. Data Protection and Security
            </h2>
            <p>
              We take appropriate technical and organizational measures to
              protect your personal data against unauthorized access, alteration,
              or disclosure. However, please note that no online transmission is
              completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              5. Third-Party Links
            </h2>
            <p>
              Our website may contain links to external websites. We are not
              responsible for the privacy practices or content of these
              third-party sites. We encourage you to review their privacy
              policies before sharing any information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              6. Your Rights
            </h2>
            <ul className="list-disc ml-6">
              <li>Access the personal information we hold about you.</li>
              <li>Request corrections or updates to your data.</li>
              <li>Withdraw consent or request deletion of your information.</li>
            </ul>
            <p className="mt-2">
              To exercise these rights, please contact us at{" "}
              <strong className="text-green-700">gracegarden1983@gmail.com</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              7. Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. Any changes will
              be reflected on this page with a revised “Last Updated” date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              8. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or how we
              handle your information, please contact:
            </p>
            <div className="mt-3 bg-green-50 p-4 rounded-lg border border-green-100">
              <p className="font-semibold text-gray-800">
                Grace Garden Care Home
              </p>
              <p>Chendakuni, Meenangadi, Wayanad, Kerala, 673591</p>
              <p>📧 <strong>gracegarden1983@gmail.com</strong></p>
              <p>📞 91007 73861</p>
              <p>
                🌐{" "}
                <a
                  href="https://gracegarden.co.in"
                  className="text-green-700 underline"
                >
                  www.gracegarden.co.in
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy</title>
      </Helmet>
      <Navbar />
      <main className="max-w-4xl mx-auto my-20 p-5">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-6 text-[12px] md:text-[20px]">
          This is the Privacy Policy <b>"Policy" </b>of{" "}
          <b> 5C Network (India) Private Limited </b>, a company incorporated
          under the Companies Act, 2013, and having its registered office at
          No.313, Mico Employees Gruha Nirmana Sangha, BTM 2nd Stage,
          Rashtrakavi Kuvempu Nagara, Bengaluru, Karnataka 560076 (hereinafter
          referred to as <b>“Company”</b>, which expression includes the
          Company’s successors-in-interest and assignees).
        </p>

        <p className="mb-6 text-[12px] md:text-[20px]">
          The Company provides teleradiology and tele-diagnostics services and
          solutions(“Services”). As an individual(“Patient”), if you undergo a
          radiology test like an x-ray, MRI or CT at one of the Company’s
          radiology/diagnostic partners(“Diagnostic Partner”), either directly
          or through certain third-party diagnostic aggregators of the
          Company(“Aggregators”), or give any blood sample or other lab sample
          or any radiology imaging or scans(“Diagnostic Material”), the Company
          receives your Diagnostic Material from that Diagnostic Partner and
          makes them available to a qualified radiologist or other
          diagnostician(“Diagnostician”). The Diagnostician prepares a
          <b> “Report” </b> based on the Diagnostic Material and the Company
          then sends back the Report to the Diagnostic Partner.
        </p>

        <p className="mb-6 text-[12px] md:text-[20px]">
          The Company receives Personal Information (as defined below) from you
          as a person submitting yourself to a diagnostic procedure. The Company
          may also collect Personal Information from you if you are a
          representative of a Diagnostic Partner or a Diagnostician who visits
          the Company’s website for the purpose of availing a demo of the
          Company’s Services.
        </p>

        <p className="mb-6 text-[12px] md:text-[20px]">
          This Policy gives details of the Personal Information about you that
          the Company receives and the purpose for which and the manner in which
          the Company uses the Personal Information.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">
          Your Personal Information
        </h2>
        <p className="mb-6 text-[12px] md:text-[20px]">
          The Company may receive your “Personal Information” such as: name,
          sex, age, date of birth, email address, phone numbers (if required),
          location, IP address, preferences, medical documents, medical history
          and health status.
        </p>

        <p className="mb-6 text-[12px] md:text-[20px]">
          By accepting this Policy, you authorize the Company to collect,
          receive, store and process your Personal Information for enabling the
          Company to provide the Services or a demo and other information
          related to the Services.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">
          How We Receive Your Personal Information
        </h2>
        <p className="mb-6 text-[12px] md:text-[20px]">
          We receive your Personal Information through the Diagnostic Partner,
          for which you have consented to the further sharing of such Personal
          Information by the Diagnostic Partner with us in relation to the
          Services.
        </p>

        <p className="mb-6 text-[12px] md:text-[20px]">
          We may also receive your Personal Information through the Aggregators,
          for which you have consented to the further sharing of such Personal
          Information by the Aggregators with us in relation to the Services.
        </p>

        <p className="mb-6 text-[12px] md:text-[20px]">
          The Personal Information we receive is usually in the form of metadata
          tagged with the Diagnostic Material. We may also receive your Personal
          Information as part of a case-sheet or other document or information
          made available to us along with the Diagnostic Material.
        </p>

        <p className="mb-6 text-[12px] md:text-[20px]">
          We may collect your Personal Information on our website and
          applications if you are a representative of a Diagnostic Partner or if
          you are a Diagnostician.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">
          How We Use The Information We Collect
        </h2>
        <p className="mb-6 text-[12px] md:text-[20px]">
          The Company receives and uses your Personal Information for the
          following purposes:
        </p>
        <p className="mb-6 text-[12px] md:text-[20px]">
          To connect you with the nearest Diagnostic Partner,
        </p>
        <p className="mb-6 text-[12px] md:text-[20px]">
          For providing the Services indirectly to you through Aggregators, the
          Diagnostic Partners and/or Diagnosticians,
        </p>
        <p className="mb-6 text-[12px] md:text-[20px]">
          For identifying patients and facilitating consultation and follow-up
          consultations with a physician,
        </p>
        <p className="mb-6 text-[12px] md:text-[20px]">
          To improve diagnostic accuracy by clinically correlating diagnostic
          results and patient symptomatic information,
        </p>
        <p className="mb-6 text-[12px] md:text-[20px]">
          To improve patient experience,
        </p>
        <p className="mb-6 text-[12px] md:text-[20px]">
          For providing a demo to you if you are a prospective Diagnostic
          Partner or a Diagnostician,
        </p>

        <p className="mb-6 text-[12px] md:text-[20px]">
          To train certain tools and machine learning algorithms (either
          in-house or third-party developed), to enhance, develop, and improve
          its Services.
        </p>

        <p className="mb-6 text-[12px] md:text-[20px]">
          The Company may also share your Personal Information with its
          successors-in-interest, assignees and any other entities consequent
          upon a corporate restructuring of the Company including by way of
          merger, amalgamation, acquisition, sale of assets and so on. At all
          times, the Company shall use your Personal Information for lawful
          purposes only.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">
          Consent To Share Your Personal Information
        </h2>

        <p className="mb-6 text-[12px] md:text-[20px]">
          In order to provide Services, you authorize and provide consent to the
          Company to share and transfer your Personal Information with
          Diagnosticians, Diagnostic Partners, Aggregators and third-party
          sub-processors of the Company for the purposes set forth above in
          paragraph 3, to enable the Company to provide Services
        </p>

        <p className="mb-6 text-[12px] md:text-[20px]">
          We may share your Personal Information with certain government
          agencies mandated by the applicable law to obtain personal
          information, for the purposes of verification of identity, or for
          prevention, detection, investigation including cyber incidents,
          prosecution, and punishment of offences
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">
          Term Of Storage Of Personal Information
        </h2>
        <p className="mb-6 text-[12px] md:text-[20px]">
          The Company shall store your Personal Information for as long as it
          deems sufficient for purposes of providing Services and to fulfil
          legal and regulatory mandates applicable to the Company.
        </p>

        <p className="mb-6 text-[12px] md:text-[20px]">
          As long as your Personal Information is deemed useful as evidence, the
          Company shall retain a copy of the same
        </p>
        <p className="mb-6 text-[12px] md:text-[20px]">
          A copy of your Personal Information may always exist as a backup or
          archival media to enable the Company to comply with legal and
          regulatory requirements
        </p>
        <p className="mb-6 text-[12px] md:text-[20px]">
          Your Personal Information is stored on the Company’s servers in India
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Security</h2>

        <p className="mb-6 text-[12px] md:text-[20px]">
          To ensure the security and integrity of your Personal Information, the
          Company complies with the technical and organizational measures,
          specifically applicable to the Company, under the Electronic Health
          Record (EHR) Standards - 2016 and as applicable from time to time.
          We've established a dedicated department within 5C that is responsible
          for promptly addressing all security and cyber-related matters. Users
          have the convenience of directly engaging with the 5C-CyberSecurity
          Department by expressing their concerns through the email address
          <label className=" text-[#00d4ff] font-italic">
            <a href="mailto:cybersafe@5cnetwork.com">
              {" "}
              cybersafe@5cnetwork.com
            </a>
          </label>{" "}
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Your Rights</h2>
        <p className="mb-6 text-[12px] md:text-[20px]">
          You have the right to not consent to us receiving your Personal
          Information. In such cases, you agree and acknowledge that the Company
          will not be obligated to provide Services
        </p>
        <p className="mb-6 text-[12px] md:text-[20px]">
          You have the right to withdraw consent from enabling the Company to
          process your Personal Information. Upon request, we will remove your
          Personal Information from the Company’s database. However, such
          withdrawal of consent and removal of your Personal Information from
          the Company’s database may make you ineligible to avail the Services
        </p>

        <p className="mb-6 text-[12px] md:text-[20px]">
          Upon written request, you may review, access and/or request that any
          erroneous Personal Information about you be corrected or amended
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Security</h2>

        <p className="mb-6 text-[12px] md:text-[20px]">
          Notwithstanding anything to the contrary in this Policy or any other
          terms of service or use applicable as between Company and you,
          Company’s aggregate liability hereunder towards direct damages shall
          be limited to Rs.1000 only or such other maximum permissible amount
          under applicable law. Company’s liability shall not extend to any
          indirect or remote damages whatsoever, including but not limited to
          special, incidental, consequential, or punitive damages or loss of
          profits.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Contact Us</h2>

        <p className="mb-6 text-[12px] md:text-[20px]">
          Please contact our Privacy Officer at
          <label className=" text-[#00d4ff] font-italic">
            <a href="mailto:cybersafe@5cnetwork.com">
              {" "}
              cybersafe@5cnetwork.com
            </a>
          </label>{" "}
          for accessing or updating your Personal Information or withdrawing
          consent; or in case of any discrepancy or grievances with this Policy
          or with respect to your Personal Information
        </p>

        <p className="mb-6 text-[12px] md:text-[20px]">
          The Privacy Grievance Officer shall address your concerns as soon as
          possible and no later than 1 (one) month from the date of receipt of
          your grievance
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">
          Where We Store Your Personal Information
        </h2>

        <p className="mb-6 text-[12px] md:text-[20px]">
          The Personal Information we receive and process is stored in India
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Compliance</h2>

        <p className="mb-6 text-[12px] md:text-[20px]">
          The Company shall always cooperate with regulatory authorities and
          investigating agencies in India in the matter of treatment of your
          Personal Information.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Severability</h2>

        <p className="mb-6 text-[12px] md:text-[20px]">
          In the event that any part of this Policy shall be held by a court of
          competent jurisdiction to be unlawful or otherwise unenforceable, the
          remainder of this Policy shall remain in full force and effect to the
          maximum extent possible, and an attempt shall be made to substitute
          the unenforceable provision with an enforceable provision of similar
          intent
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Assignment</h2>

        <p className="mb-6 text-[12px] md:text-[20px]">
          The Company may, at any time, assign this Policy and/or its rights and
          under this Policy to any entity, in its sole discretion
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Amendments</h2>

        <p className="mb-6 text-[12px] md:text-[20px]">
          The Company may modify this Policy in its sole discretion at any time.
          While the Company shall make best efforts to notify you of any such
          modification, it shall be your responsibility to read and understand
          the Policy as prevalent from time to time.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Refund Policy</h2>

        <p className="mb-6 text-[12px] md:text-[20px]">
          Please be aware that because our services are customized to each
          client and based on specific agreements, refund policies may vary
          according to the terms of the contract.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;

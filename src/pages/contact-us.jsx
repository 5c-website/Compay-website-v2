import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import contactImgBg from "../../public/img/contact_us.png";
import CompanyBanner from "../components/CompanyBanner";
import Footer from "../components/Footer";
import { NocoFetch } from "../api/NocoDBEndpoints";
import { slackAlerts } from "../api/SlackTiggers";
import Popup from "../components/Popup";
import { Country, State } from "country-state-city";
import { ChevronDown } from "lucide-react";

function ContactUs() {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "India",
    state: "",
    phone: "",
    help: "",
    message: "",
  });

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredStates, setFilteredStates] = useState([]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("India");
  const [stateSearch, setStateSearch] = useState("");
  const [loadingStates, setLoadingStates] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("IN");
  const [phoneCode, setPhoneCode] = useState("+91");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fetch countries on component mount
  useEffect(() => {
    const fetchCountries = () => {
      try {
        const allCountries = Country.getAllCountries();
        const countryData = allCountries.map(country => ({
          name: country.name,
          code: country.isoCode,
          phoneCode: country.phonecode,
          flag: country.flag
        }));
        
        // Sort countries alphabetically
        countryData.sort((a, b) => a.name.localeCompare(b.name));
        setCountries(countryData);
        setFilteredCountries(countryData);
        
        // Set India as default and fetch its states
        const indiaCountry = countryData.find(c => c.name === "India");
        if (indiaCountry) {
          fetchStates(indiaCountry.code);
          setSelectedCountryCode(indiaCountry.code);
          setPhoneCode(`+${indiaCountry.phoneCode}`);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  // Fetch states based on selected country
  const fetchStates = (countryCode) => {
    setLoadingStates(true);
    try {
      const statesOfCountry = State.getStatesOfCountry(countryCode);
      const stateNames = statesOfCountry.map(state => state.name);
      
      // Sort states alphabetically
      stateNames.sort((a, b) => a.localeCompare(b));
      
      setStates(stateNames);
      setFilteredStates(stateNames);
    } catch (error) {
      console.error("Error fetching states:", error);
      setStates([]);
      setFilteredStates([]);
    } finally {
      setLoadingStates(false);
    }
  };

  // Filter countries based on search
  useEffect(() => {
    if (countrySearch.trim() === "") {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter(country =>
        country.name.toLowerCase().includes(countrySearch.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  }, [countrySearch, countries]);

  // Filter states based on search
  useEffect(() => {
    if (stateSearch.trim() === "") {
      setFilteredStates(states);
    } else {
      const filtered = states.filter(state =>
        state.toLowerCase().includes(stateSearch.toLowerCase())
      );
      setFilteredStates(filtered);
    }
  }, [stateSearch, states]);

  const handleCountrySearch = (e) => {
    setCountrySearch(e.target.value);
    setShowCountryDropdown(true);
  };

  const handleCountrySelect = (countryName) => {
    const selectedCountry = countries.find(c => c.name === countryName);
    setFormData({ ...formData, country: countryName, state: "" });
    setCountrySearch(countryName);
    setShowCountryDropdown(false);
    setStateSearch("");
    if (selectedCountry) {
      fetchStates(selectedCountry.code);
      setSelectedCountryCode(selectedCountry.code);
      setPhoneCode(`+${selectedCountry.phoneCode}`);
    }
  };

  const handleStateSearch = (e) => {
    setStateSearch(e.target.value);
    setShowStateDropdown(true);
  };

  const handleStateSelect = (stateName) => {
    setFormData({ ...formData, state: stateName });
    setShowStateDropdown(false);
    setStateSearch(stateName);
  };

  // Function to get country flag emoji from country code
  const getCountryFlag = (countryCode) => {
    const selectedCountry = countries.find(c => c.code === countryCode);
    return selectedCountry?.flag || "🇮🇳";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const payload = {
        "Form-name": "Contact-Page",
        "First name": formData.fullName,
        Email: formData.email,
        Country: formData.country,
        State: formData.state,
        "Mobile Number": formData.phone,
        Message: formData.message,
        Category: formData.help,
      };
      const response = await NocoFetch.createDemoRequestEntry(payload);

      const demoRequestAlertAttributes = {
        client_name: formData.fullName,
        email: formData.email,
        country: formData.country,
        state: formData.state,
        mobile_number: formData.phone,
        category: formData.help,
        description: formData.message,
      };
      await slackAlerts.demoRequestAlert(demoRequestAlertAttributes);
      if (response.status === 200) {
        setShowPopup(true);
        setFormData({
          fullName: "",
          email: "",
          country: "India",
          state: "",
          phone: "",
          help: "",
          message: "",
        });
        setCountrySearch("India");
        setStateSearch("");
        // Reset to India's states
        const indiaCountry = countries.find(c => c.name === "India");
        if (indiaCountry) {
          fetchStates(indiaCountry.code);
          setSelectedCountryCode(indiaCountry.code);
          setPhoneCode(`+${indiaCountry.phoneCode}`);
        }
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
      <div className="w-[100%] flex flex-col justify-center items-center pt-[90px] px-4 md:px-10">
        <div className="w-[100%]">
          <CompanyBanner
            img={contactImgBg}
            heading={"Get in touch!"}
            contentClassName="w-full md:w-[42%] flex flex-col justify-center"
            headerClassName="text-center md:text-left"
            descriptionClassName="text-center md:text-left"
            description={
              <>
                Have an inquiry or potential opportunity for us?
                <br /> Fill out the form to contact our team.
              </>
            }
          />
        </div>
        <div className="w-[100%] md:min-h-[30vh] my-[60px] ">
          <div className="flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="w-[90%] md:w-[50%] h-[100%] md:ml-3 my-2 md:my-0 mt-12">
              <div className="flex flex-row md:justify-start md:items-start justify-center items-center">
                <h1 className="text-[#1B3363] text-center md:text-left text-[28px] md:text-[42px] font-bold">
                  Locations
                </h1>
                <div className="h-[8px] w-[8px] bg-red-500 self-end relative top-[-16px] left-[6px] md:block hidden"></div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-start md:mt-4">
                <div className="w-[100%] md:w-[33%] border-[#000] border-solid border-b-2 md:border-r-2 md:border-b-0">
                  <p className="text-[16px] text-[#000] p-3">
                    The Radhouse, 313, 7th Main Rd, opposite Ashirwad
                    Supermarket, Mico Layout, BTM 2nd Stage, BTM Layout,
                    Bengaluru, Karnataka 560076
                  </p>
                </div>
                <div className="md:w-[33%] border-[#000] border-solid border-b-2 md:border-r-2 md:border-b-0">
                  <p className="text-[16px] text-[#000] p-3">
                    Cerebrum, above Third Wave Coffee, Mico Layout, BTM 2nd
                    Stage, BTM Layout, Bengaluru, Karnataka 560076
                  </p>
                </div>
                <div className="md:w-[33%] border-[#000] border-solid border-b-2 md:border-none md:border-b-0">
                  <p className="text-[16px] text-[#000] p-3">
                    Neocortex, Covai Tech Park, Indira Nagar, Civil Aerodrome
                    Post, Nehru Nagar, Coimbatore, Tamil Nadu 641014
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[94%] md:w-[50%] h-[100%]">
              <div className="flex flex-col justify-between items-center position-none lg:absolute w-full lg:w-1/2">
                <div className="md:min-h-[450px] w-full lg:w-[420px] rounded-2xl bg-white shadow-lg p-6 position-none lg:absolute -top-[30rem] left-[20%]">
                  <h1 className="text-center font-bold text-[#1B3363] text-[20px] md:text-[24px] my-1">
                    {" "}
                    Schedule a Demo{" "}
                  </h1>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        required
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1B3363]"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email Address"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1B3363]"
                      />
                    </div>

                    <div>
                      <div className="relative">
                        <input
                          type="text"
                          value={countrySearch}
                          required
                          onChange={handleCountrySearch}
                          onFocus={() => setShowCountryDropdown(true)}
                          onBlur={() => setTimeout(() => setShowCountryDropdown(false), 200)}
                          placeholder="Search country..."
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1B3363]"
                        />
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        {showCountryDropdown && filteredCountries.length > 0 && (
                          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                            {filteredCountries.map((country) => (
                              <div
                                key={country.code}
                                onClick={() => handleCountrySelect(country.name)}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              >
                                {country.name}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="relative">
                        <input
                          type="text"
                          value={stateSearch}
                          required
                          onChange={handleStateSearch}
                          onFocus={() => !loadingStates && states.length > 0 && setShowStateDropdown(true)}
                          onBlur={() => setTimeout(() => setShowStateDropdown(false), 200)}
                          placeholder={loadingStates ? "Loading states..." : "Search state..."}
                          disabled={loadingStates || states.length === 0}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1B3363] disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        {showStateDropdown && filteredStates.length > 0 && (
                          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                            {filteredStates.map((state) => (
                              <div
                                key={state}
                                onClick={() => handleStateSelect(state)}
                                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                                  formData.state === state ? "bg-blue-50 text-blue-600" : ""
                                }`}
                              >
                                {state}
                              </div>
                            ))}
                          </div>
                        )}
                        {showStateDropdown && filteredStates.length === 0 && stateSearch.trim() !== "" && (
                          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4 text-gray-500 text-center">
                            No states found matching "{stateSearch}"
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 py-2 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                          {getCountryFlag(selectedCountryCode)} {phoneCode}
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="Phone Number"
                          className="flex-1 block w-full px-3 py-2 border border-gray-300 rounded-r-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1B3363]"
                        />
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        name="help"
                        value={formData.help}
                        required
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1B3363]"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={2}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Leave a message"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1B3363]"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full bg-[#1C3363] text-white font-semibold py-2 rounded-lg shadow hover:bg-[#1B3363] transition duration-300"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin flex justify-center items-center rounded-full h-6 w-6 border-b-2 border-white"></div>
                          </div>
                        ) : (
                          "Contact"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
      {showPopup && <Popup />}
    </>
  );
}

export default ContactUs;

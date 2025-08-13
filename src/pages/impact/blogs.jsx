import React from "react";
import Navbar from "../../components/Navbar";
import CompanyBanner from "../../components/CompanyBanner";
import BannerImg from "../../../public/img/impact/blog_banner.png";
import Footer from "../../components/Footer";
import ContentGridComponent from "../../components/ContentGridComponent";
import { useStrapiContent } from "../../hooks/use-strapi";
import { COLLECTION_TYPES } from "../../services/strapi";
import { extractCategories } from "../../utils/contentUtils";
import TechOne from "../../../public/img/impact/tech_blog_1.png";
import DcOne from "../../../public/img/impact/dc_blog_1.jpg";
import blog3 from "../../../public/img/impact/blogs/b1.png";
import blog4 from "../../../public/img/impact/blogs/b2.png";
import blog5 from "../../../public/img/impact/blogs/b3.png";
import blog6 from "../../../public/img/impact/blogs/b4.png";
import blog7 from "../../../public/img/impact/blogs/b6.png";
import BlogGridComponent from "../../components/BlogGridComponent";

function Blogs() {
  // Info : static blogs as fallback if strapi blogs are not available
  const BlogsData = [
    {
      category: "Technology",
      title:
        "After Reporting 8.5 Mn Radiology Reports, Here’s How 5C Network has Built the Future of Radiology Reporting",
      description: [
        "Healthcare industry in India is experiencing significant expansion across various domains, notably radiology. The evolving trends and advancements in technology unveils the immense potential within this sector.",
        "The Indian Diagnostic Imaging Services market size was valued at $9.54 Bn in 2022 and is estimated to expand at a compound annual growth rate of 7.9 % from 2022 to 2030 and will reach $17.54 Bn in 2030.",
        "Despite conducting around 1 million radiological scans daily, the country faces a severe shortage of radiologists. With only about 14,000 radiologists available, the healthcare system in India struggles to meet the demand. As per the PCPNDT act, only registered radiologists can perform ultrasonography that consumes the time of nearly half of these radiologists.",
        "The future of radiology looks bright because technology keeps getting better. Things like artificial intelligence and machine learning are making it easier for doctors to understand these images quickly and accurately. But how exactly are these technological advancements shaping the future of healthcare? And what does this mean for patients and medical professionals alike?",
      ],
      imageUrl: TechOne,
      information: [
        {
          title: "Challenges in Radiology",
          description: [
            "The client hospital, located in a tier 1 city was struggling with a surge in diagnostic scans due to more patients seeking healthcare. They have only one radiologist who can not keep up with the workload, causing delays in reporting results and treating patients. Specialized cases are being delayed as well. The hospital needed help managing the large number of scans and reducing the backlog of pending reports within a 12-hour timeframe.",
          ],
          imageUrl: null,
        },
        {
          title:
            "Presenting the Blend of AI & Radiologists - Bionic Report by 5C Network",
          description: [
            "In recent years, there has been a substantial rise in radiologists' interest in artificial intelligence. The focus of discussions has shifted from viewing AI as a threat to exploring its capabilities to complement and enhance the work of radiologists.",
            "The Bionic Report marks a significant leap in the application of AI to radiology reporting. It harnesses a state-of-the-art, fine-tuned model embedded within a Retrieval-Augmented Generation framework to produce detailed and precise reports. It is trained by using 8.5 million radiology reports that were reported by 5C Network.",
            "In addition, it features automated content generation capabilities, streamlining the process of drafting reports. Another key feature is an error-checking algorithm, which functions like a vigilant quality control officer. It cross-references findings against known error patterns, significantly reducing the risk of mistakes and ensuring the highest quality of outcomes.",
            "Additionally, the Bionic Report's capabilities extend beyond general diagnostics to include disease-specific reporting. For example, in conditions like pneumonia and tuberculosis, the AI system is designed to meticulously analyze and report on various aspects, such as the extent of the disease and its specific patterns. This detailed analysis assists healthcare providers in managing patients more effectively and timely.",
            "The Bionic Report aims to alleviate radiologists' caseload by an impressive 65%, consequently tripling their productivity and mitigating burnout.",
          ],
          imageUrl: null,
        },
        {
          title: "Understanding the LLM Model of Bionic Report",
          description: [
            "The advent of large language models (LLMs) like ChatGPT and GPT-4 has significantly impacted the field of natural language processing, showing great promise for applications in radiology. These models, capable of sophisticated understanding and interpretation, are well-suited to manage the extensive textual data generated in radiology, including reports and clinical notes. However, their integration into clinical settings faces challenges such as privacy regulations and the need for secure data handling.",
            "The open-source movement has significantly contributed to the development of advanced LLMs, such as Llama2, Mixtral, and Yi. Among these, Mixtral 8x7B stands out for its exceptional architecture and benchmark results, promising to elevate radiology reporting to new heights to explore Open Source LLMs in Radiology.",
            "In the process of preparing data and fine-tuning for the Bionic Report, we utilized an extensive dataset comprising 8.5 million entries to encompass a wide range of pathologies. By employing keyword searches, we systematically extracted relevant pathologies from each report, setting up a structured input-output relationship where the identified pathology serves as the input and the corresponding detailed report acts as the output. This meticulous setup trains the model to accurately associate each pathology with its specific descriptors, enabling it to generate comprehensive and precise reports.",
            "This method not only enhances the model's understanding of medical terminology but also ensures that it learns the nuances of report writing in the context of radiology, thereby improving its ability to produce clinically relevant and detailed radiology reports.",
          ],
          imageUrl: null,
        },
        {
          title:
            "Stay Ahead in the Curve of Radiology Reporting with Bionic Report",
          description: [
            "As AI technology advances, its role in radiology will become more entrenched. The Bionic Report is set to become an integral part of the radiologist's toolkit. It will assist radiologists in managing their workload with greater accuracy and efficiency, ensuring that they can keep up with the growing needs of their field.",
            "The future envisioned with the Bionic Report is one where AI is not just a helpful tool but an essential ally in radiology. It's paving the way for a scenario where radiologists can leverage the power of AI to enhance their capabilities, ensuring that they can provide the highest standards of patient care in an increasingly demanding healthcare landscape.",
            "Bionic Report spearheads a transformation in radiology, establishing AI as a fundamental component in the evolution of diagnostic practices.",
          ],
          imageUrl: null,
        },
      ],
    },
    {
      category: "Diagnostic center",
      title:
        "149 Diagnostic Centers & Hospitals Have Increased Their Revenue By 87%. Here’s How",
      description: [
        "Did you know that a key image in a radiology report can dramatically change a patient's treatment plan and boost your diagnostic center's revenue?",
        "A case in point is a Mumbai-based diagnostic center that integrated key images into its reports. This strategic move revolutionized their service quality and led to a staggering 30% increase in patient referrals and an 87% revenue boost within just 6 months. This underscores the profound impact of visual aids in diagnostics on both patient care and business growth.",
        "In medical diagnostics, clarity is crucial, and traditional text-heavy reports often miss this mark. Enter 'key images,' a revolutionary feature transforming diagnostic communication. These carefully chosen visuals from scans like MRIs and CT scans provide a clear, concise picture of the patient's condition, guiding physicians toward accurate diagnoses and effective treatment plans. They bridge the gap between complex medical data and actionable insights, enhancing both physician understanding and patient trust.",
        "This innovation isn't just a technological advancement; it's a catalyst for business growth and improved patient care.",
      ],
      imageUrl: DcOne,
      information: [
        {
          title: "Transforming Diagnostics the Power of Key Images",
          description: [
            "Visual aids in diagnostics do more than just assist; they change the entire diagnostic process.",
            "The integration of key images in radiology reports marks a significant leap forward in medical diagnostics. These images, selected for their clarity and relevance, offer a visual summary that complements the textual information. This approach has been shown to significantly improve the diagnostic accuracy of non-radiologist physicians significantly, enhancing patient understanding and trust. As a result, diagnostic centers using key images in their reports see increased referrals and patient throughput, directly impacting their revenue and reputation.",
            "In essence, key images are reshaping the landscape of medical diagnostics, making complex information accessible and actionable.",
          ],
          imageUrl: null,
        },
        {
          title: "Key Images: The Future of Diagnostic Reporting",
          description: [
            "Integrating key images in radiology reports is more than a trend; it's the future of diagnostic reporting.",
            "With advancements in AI and technology, the future of key images in diagnostic reports looks even more promising. Machine learning algorithms are being developed to select the most relevant images automatically, ensuring consistent quality and informative reports. This synergy of technology and diagnostics not only improves report accuracy but also streamlines the diagnostic process, enhancing patient care and boosting business growth for diagnostic centers. ",
            "As healthcare continues to evolve, key images stand at the forefront, leading the charge in innovative and effective patient care. Embracing this technology means staying current and ahead in the healthcare industry.",
          ],
          imageUrl: null,
        },
        {
          title: "Benefits of Key Images",
          description: [],
          imageUrl: null,
        },
        {
          title: "For Physicians",
          description: [
            "These key images act as a guide, leading to more accurate diagnoses and better treatment plans. They also save time, allowing physicians to quickly understand the problem without sifting through dense text.",
          ],
          imageUrl: null,
        },
        {
          title: "For Patients",
          description: [
            "Key images demystify medical reports, making them more accessible and understandable. This transparency builds trust and enhances patient satisfaction.",
          ],
          imageUrl: null,
        },
        {
          title: "For Diagnostic Centers",
          description: [
            "High-quality reports with key images can set a center apart, leading to increased trust from physicians and patients alike, which can translate into higher patient inflow and referrals.",
          ],
          imageUrl: null,
        },
        {
          title: "Integration with AI and Technology",
          description: [
            "The future of key images is even more exciting when paired with AI. Machine learning algorithms are being developed to automatically select the most relevant images from a scan, ensuring that reports are consistently of high quality and informative.",
            "Key images are more than just pictures; they are a pivotal part of the narrative in patient care. They empower physicians with clarity, engage patients in their care journey, and elevate the standards of diagnostic reporting.",
            "Are you a healthcare provider looking to enhance your diagnostic services? Consider the power of key images in your reports. ",
            "Reach out to us to learn how you can integrate this revolutionary feature into your practice.",
          ],
          imageUrl: null,
        },
      ],
    },
    {
      category: "Diagnostic center",
      title:
        "How is Digital Diagnostics Delivery Different from Teleradiology?",
      description: [
        "The pace of technological developments within the medical imaging and diagnostics industry has quickened in recent years and will continue to do so. The introduction of new products, technologies, and services has all contributed to this trend. Furthermore, digital technologies have transformed the healthcare industry. One of the most significant changes has been the shift toward digital diagnostics delivery and teleradiology. While both approaches involve the use of technology to facilitate medical diagnosis and treatment, there are major differences between the two.",
      ],
      imageUrl: blog3,
      information: [
        {
          title:
            "Difference between Digital Diagnostics Delivery and Teleradiology",
          description: [
            "Teleradiology involves the remote interpretation of radiology scans, such as X-rays, CT scans, MRIs, etc. It allows radiologists to provide diagnostic reporting services from a remote location, which is particularly useful for diagnostic facilities that lack on-site radiology expertise.",
            "Whereas digital diagnostics delivery is a vast term that refers to optimizing the workflow of diagnostic delivery from imaging to reporting. It covers everything from imaging to reporting and delivering excellent patient support. On average, 15,00,000 scans are performed in India in a day, resulting in increased waiting time and error rates due to shortage of radiologists. Therefore, digital diagnostics delivery is an important area of focus for radiology because it can improve patient care and reduce error rates by reducing waiting time to get a scan done and improving the accuracy of diagnostic reporting.",
          ],
          imageUrl: null,
        },
        {
          title: "Need for Digital Diagnostics Delivery",
          description: [
            "Diagnostics plays a vital role in the healthcare industry to improve the quality of medical care. It is an important part of healthcare delivery as it helps in the diagnosis and treatment of diseases. The Indian diagnostics market holds immense potential and is projected to reach $20 billion by FY 2026. Of the billion dollars worth of market, standalone centers account for 48% market share, followed by hospital-based labs with 37% share and national chains accounting for only 5% share. India’s diagnostic industry is severely limited by a substantial demand-supply gap in the number of patient footfalls as well as availability of equipment for scans at diagnostic establishments.",
            "With this in mind, it is evident that the future of the diagnostic industry depends on its ability to adapt to a changing market and develop new methods for improving efficiency, report quality, and patient experience. One solution that can prove to be effective is the implementation of a digital diagnostics delivery system. It includes a collaborative network of multiple diagnostic establishments and connects them with patients via online and offline patient aggregators.",
          ],
          imageUrl: null,
        },
        {
          title: "Benefits of Digital Diagnostics Delivery",
          description: [],
          imageUrl: null,
        },
        {
          title: "1. Single point contact management",
          description: [
            "Digital diagnostics delivery platform provides solutions that hospitals, diagnostic centers, and aggregators have been looking for to improve patient flow. It takes patient information from all departments—including scheduling and billing — and creates a single point for all communication in one place. It makes the entire process more streamlined and efficient for patients, diagnostic establishments, and aggregators.",
          ],
          imageUrl: null,
        },
        {
          title: "2. Collaborative network of diagnostic establishments",
          description: [
            "Digital diagnostic delivery platform establishes a collaborative network of diagnostic centers so that patients can choose the centers as per their need. Additionally, it also reduces the dependency on selected diagnostic centers, thereby optimizing the patient experience.",
          ],
          imageUrl: null,
        },
        {
          title: "3. Increased asset utilization",
          description: [
            "Digital diagnostic delivery platform allows diagnostic centers to make the most of their equipment to serve more patients. The equipment doesn't go to waste, and the diagnostic center earns more money from its services as they get a large number of patients from online and offline aggregators.",
          ],
          imageUrl: null,
        },
        {
          title: "4. Smooth patient experience",
          description: [
            "A visit to the diagnostic center can be a stressful, anxiety-inducing experience for some. Prodigi is making it easier and more pleasant for patients by allowing them to view the treatment plan, book appointments using their smartphone, and receive reminders.",
          ],
          imageUrl: null,
        },
        {
          title:
            "Experience Seamless Digital Diagnostics Delivery with Prodigi",
          description: [
            "Prodigi.ai has networked diagnostic facilities nationwide to provide a seamless patient experience and deliver quality digital diagnostic services. As you research the digital diagnostics delivery market, check out our new-age digital delivery services. We are here to help you get started. Reach out to us at communication@5cnetwork.com.",
          ],
          imageUrl: null,
        },
      ],
    },
    {
      category: "Radiologists",
      title: "How can Teleradiology be Used for Second Opinions?",
      description: [
        "With the development of communication technologies and the ability to transmit images from a computer to distant locations in a short time, teleradiology is becoming a more common solution for the interpretation of diagnostic images. Teleradiology offers several benefits, including efficient management of high-volume scans, rapid interpretations, and support for nighthawk services. However, there is another significant advantage that teleradiology can provide: the ability to obtain a valuable second opinion.",
      ],
      imageUrl: blog4,
      information: [
        {
          title: "What is Second Opinion in Radiology?",
          description: [
            "A second opinion in radiology refers to a medical professional, usually, a radiologist, who provides an independent evaluation and interpretation of radiological images or studies, such as X-rays, CT scans, MRI scans, ultrasounds, etc.",
            "A patient or their primary care physician may request a second opinion to confirm a diagnosis or treatment plan or provide additional insights that may have been missed in the initial interpretation. It can also be beneficial in cases where a diagnosis is uncertain or complex or when there is disagreement among healthcare providers regarding the interpretation of imaging studies. Obtaining a second opinion in radiology is a common practice and can help ensure patients receive the most accurate diagnosis and treatment plan possible.",
          ],
          imageUrl: null,
        },
        {
          title: "Importance of Second Opinions",
          description: [
            "Second opinions are crucial in diagnosing and treating many medical conditions, including those related to radiology. The use of teleradiology for second opinions has increased in recent years due to its convenience, speed, and accuracy.",
            "Teleradiology allows a second opinion to be taken by any radiologist, regardless of place or time. All subspecialists are available in the teleradiology setup 24/7, which is not possible in conventional radiology practice because it is expensive to have a radiologist on-site all the time and practically not likely to have all specialist radiologists available in one place. The importance of getting a second opinion from a subspecialty radiologist is that it can ensure the accuracy of the diagnosis.",
          ],
          imageUrl: null,
        },
        {
          title:
            "Here are some ways in which teleradiology can be used for second opinions:",
          description: [],
          imageUrl: null,
        },
        {
          title: "1. Specialist consultations",
          description: [
            "In some cases, radiologists may encounter a complex medical condition that requires specialist consultation. Teleradiology can transmit images and data to the specialist, who can then provide a second opinion on the diagnosis and treatment plan.",
          ],
          imageUrl: null,
        },
        {
          title: "2. No geographic barrier",
          description: [
            "Teleradiology is particularly useful in areas where specialist radiologists are unavailable or in rural areas where patients may have to travel long distances for a second opinion. Using teleradiology, radiologists can easily consult with specialists worldwide and provide patients with a more accurate diagnosis and treatment plan. It also allows radiologists to get exposed to different types of cases and use their expertise to deliver accurate reports.",
          ],
          imageUrl: null,
        },
        {
          title: "3. Quality assurance",
          description: [
            "Teleradiology can be used for quality assurance purposes, especially in cases where there may be discrepancies in the initial diagnosis. By obtaining a second opinion from a different radiologist, the accuracy of the diagnosis can be confirmed, and any potential errors can be identified and corrected.",
          ],
          imageUrl: null,
        },
        {
          title: "4. Cost effective",
          description: [
            "Teleradiology is also cost-effective, as it eliminates the need for patients to travel long distances for a second opinion, which can be expensive. In addition, teleradiology can reduce the time required for a second opinion, which can be particularly beneficial in emergencies.",
          ],
          imageUrl: null,
        },
        {
          title: "5. Remote monitoring",
          description: [
            "Teleradiology can also monitor patients with chronic conditions remotely. The patient's condition can be observed in real-time by transmitting images and data to the radiologist, and any changes can be identified and addressed promptly.",
          ],
          imageUrl: null,
        },
        {
          title: "Get Second Opinions through Prodigi",
          description: [
            "Teleradiology has revolutionized the field of radiology by providing remote medical diagnosis and second opinions. Using teleradiology platforms like Prodigi.ai, radiologists can consult with specialists in other parts of the world, eliminate geographical constraints, reduce costs, and provide patients with a more accurate diagnosis and treatment plan. With the rapid advancements in technology, teleradiology is likely to become an increasingly important tool for radiologists in the future.",
            "Looking to reap the benefits of teleradiology? Contact us today at communication@5cnetwork.com ",
          ],
          imageUrl: null,
        },
      ],
    },
    {
      category: "Radiologists",
      title:
        "5 Reasons Why Teleradiology Platforms Should Have AI-Powered Speech Recognition Feature",
      description: [
        "Today, artificial intelligence is in the midst of a revolution. From Microsoft's ChatGPT to Google's Alpha Code, there are numerous generative AI platforms with a vast array of use cases. The near future will see us increasingly leverage these technologies to build automated, autonomous, and robust enterprises or workflows. So, how will we harness these innovations for an overworked yet absolutely critical sector—healthcare?",
        "The global artificial intelligence in the healthcare market is projected to grow from $13.82 billion in 2022 to $164.10 billion by 2029 at a CAGR of 42.4%, growing at a significant pace during the forecast period. In recent years, AI-powered teleradiology platforms have become an increasingly popular method for radiologists to provide remote consultations and read imaging studies.",
        "With teleradiology, radiologists can work from anywhere, and healthcare providers can receive timely and accurate diagnoses for their patients. However, with the rise of advanced healthcare delivery systems comes the need for efficient and effective communication tools, one of which is speech recognition.",
      ],
      imageUrl: blog5,
      information: [
        {
          title: "Understanding AI-Powered Speech Recognition Feature",
          description: [
            "Voice recognition software has long been used for voice-activated computer systems and smartphones. Recent developments in voice recognition technology have included Siri, the virtual assistant in Apple’s iPhones and iPads, and Alexa, Amazon’s virtual assistant. But the accuracy of modern AI-powered speech recognition technology has made it popular for consumers, businesses, and especially the healthcare industry. As a result, speech recognition is one feature that has been popular in recent healthcare development trends.",
          ],
          imageUrl: null,
        },
        {
          title:
            "Benefits of Speech Recognition Feature in Radiology Reporting",
          description: [],
          imageUrl: null,
        },
        {
          title:
            "Here are some ways in which teleradiology can be used for second opinions:",
          description: [
            "The medical profession is increasingly dependent on clinical documentation. The adoption of speech recognition technologies can improve the efficiency and accuracy of patient care by allowing radiologists to document their observations with ease.",
          ],
          imageUrl: null,
        },
        {
          title: "1. Less documentation time",
          description: [
            "Radiologists spend nearly four times as much time on documentation as they do on scan encounters. With AI-powered speech recognition, they can dictate findings while the software automatically converts their speech to text in real-time. By recording data in this manner, radiologists can operate at nearly 4X the speed and save over 3 hours daily. This process also streamlines the clinical workflows, making healthcare data securely accessible.",
          ],
          imageUrl: null,
        },
        {
          title: "2. Seamless integration",
          description: [
            "Speech is the most natural form of communication. AI-based voice recognition software is highly intuitive, requiring no training or familiarization processes. It does not necessarily require hardware or infrastructure upgrades as they are made to be fully interoperable with existing reporting systems.",
          ],
          imageUrl: null,
        },
        {
          title: "3. Easy access",
          description: [
            "The speech recognition tool can increase efficiency, productivity, and speed. Additionally, it also enables clinical reporting on the go--via mobile, web, and desktop applications. Speech recognition results in reduced duplication errors and promotes digital note-taking, which is more effective than manual typing. The time saved can be used for a better quality of consultation, see more scans or even grant radiologists a better work-life balance.",
          ],
          imageUrl: null,
        },
        {
          title: "4. Optimized medical records",
          description: [
            "Radiologists are being empowered by the use of speech recognition software. This feature enables them to provide more attentive and effective reports, as well as improve the quality of reports and data collection and processing.",
            "In summary, speech recognition technology is revolutionizing healthcare and medical imaging, not only by providing a cost-effective solution but one that improves outcomes for both radiologists and their patients. Radiology practice owners seeking to improve efficiency should consider investing in teleradiology platforms like Prodigi.ai, which provides AI-powered speech recognition features.",
          ],
          imageUrl: null,
        },
      ],
    },
    {
      category: "Technology",
      title: "5 Advantages of Leveraging Teleradiology Services",
      description: [
        "Medical practices are constantly evolving and improving, not just in terms of medication and treatment options but also in terms of hospital and medical facility procedures. These changes have the potential to bring about more revenue as well as better care for patients. One option many medical facilities are taking advantage of is partnering with an experienced teleradiology group since such a partnership can provide numerous benefits.",
        "Outsourcing radiology services provide accurate and timely interpretations of scans. These services are backed by the latest technology and are extremely professional. The practice of outsourcing radiology requirements had started with small requirements, but as time progressed, medical practices began outsourcing a bulk of their radiology requirements regardless of modality. This is because it has helped diagnostic establishments raise their high standards of patient care",
      ],
      imageUrl: blog6,
      information: [
        {
          title: "5 Advantages of Outsourcing Radiology Services",
          description: [
            "Fortune Business Insights predicts that the global teleradiology market will reach $65.21 billion by 2026, growing at a 23.8% CAGR. The primary reasons for this remarkable growth are:",
          ],
          imageUrl: null,
        },
        {
          title: "1. 24/7/365 availability",
          description: [
            "By outsourcing radiology services, you can take advantage of 24/7/365 coverage. This includes night coverage, regardless of whether you are a hospital or diagnostic center. You can rely on teleradiology platforms around-the-clock for quality imaging and urgent interpretation services.",
            "Reputable teleradiology companies have staffing flexibility to accommodate after-hours requirements. This can help you ensure that patient care is not compromised. In case of an emergency, you can expect a turnaround time of as fast as 15-30 minutes, even in the evening hours.",
          ],
          imageUrl: null,
        },
        {
          title: "2. Up-to-date operation process",
          description: [
            "Teleradiology service providers have well-organized processes to meet turnaround time. For instance, the record-keeping process is meticulous and diligent; this provides a backup system in case of any medical emergencies.",
            "In addition, they also provide continuing education to their pool of radiologists, who must keep up with the latest technology and rules for correct interpretation. The radiologists are also tested for their upgraded skills.",
          ],
          imageUrl: null,
        },
        {
          title: "3. Reliability on technologies like on-cloud smart PACS",
          description: [
            "A large teleradiology company depends on state-of-the-art technology to provide services. One such technology is cloud-based picture archiving and communication systems (PACS). This system offers unmatched efficiency and equips the practice with report availability at any time and on any device.",
            "A further benefit of PACS is that it allows for the quick retrieval of images, along with interpretations and related data. This eliminates the usual time and physical hindrances associated with traditional image distribution. Further, PACS are well-equipped to handle images from different types of medical imaging tools such as MRI, CT and ultrasound.",
          ],
          imageUrl: null,
        },
        {
          title: "4. Cost-effective service",
          description: [
            "Outsourcing radiology service is a cost-effective form of radiology that allows images to be transferred to and from a central location. This eliminates the need for expensive printing, packing and shipping of film. It also eliminates the need for on-site staffing, which can be extremely costly in some cases.",
            "The technology is ideal for clinics and hospitals that wish to outsource their radiology services, as well as private practitioners who do not wish to hire additional staff members.",
          ],
          imageUrl: null,
        },
        {
          title: "5. Personalized reporting templates",
          description: [
            "A teleradiology outsourcing partner provides standardized, structured reports of radiology images that can be adjusted to fit your clinic's workflow. These reports help to improve patient outcomes by providing a structured method to present radiology reports.",
            "An experienced teleradiology service provider will offer you a wide range of reporting templates to choose from. They also assist you in developing a template customized to your needs, streamlining data capture and maximizing efficiency.",
          ],
          imageUrl: null,
        },
        {
          title: "Experience high-quality Teleradiology Services with Prodigi",
          description: [
            "Prodigi is a leading teleradiology service platform. Our rapid expansion is due to our reputation for providing exceptional performance and high-quality results. We have the right resources and expertise to handle a variety of cases, including emergency reporting, regular and elective cases, and even sub-specialty diagnoses.",
            "Teleradiology provides diagnostic centers, hospitals, and healthcare aggregators with several benefits. To learn more about how it can benefit your practice, contact us at communication@5cnetwork.com.",
          ],
          imageUrl: null,
        },
      ],
    },
    {
      category: "Technology",
      title: "Role of Music Therapy during Medical Imaging Procedure",
      description: [
        "Music is found in every culture and has been used by humans for thousands of years. Our ability to create, interpret and enjoy music is built into our anatomy. The human ear is tuned to the human voice, but its range is much greater. Music has a positive effect on mood, boosting concentration and memory, and giving people a greater ability to cope with stress.",
        "In a study published in Brain: A Journal of Neurology, researchers found that music helped people recovering from a stroke with verbal memory and maintaining focus. The findings also stated that music lessened depression and confusion.",
      ],
      imageUrl: blog7,
      information: [
        {
          title: "The Magic of Music Therapy",
          description: [
            "The American Music Therapy Association asserts that the magic of music is far-reaching, even in medical treatments. The association reports that music can reduce pain, stress, and anxiety, even to the point of measurable physiological changes, including lowering blood pressure, improving heart function, reducing heart rate, and relaxing muscle tension. Music has many benefits, including the fact that it is low-cost to administer, non-invasive, and does not have side effects other than having a tune stuck in your head on repeat!",
            "Brain imaging studies suggest that listening to music activates the brain's reward centers, triggering the feel-good hormone dopamine. Research has shown that playing music can be beneficial in pediatric procedures and for adults to mask the sound of surgical instruments being unwrapped or monitors beeping. It also can help people feel more secure and normal in stressful situations such as those surrounding a hospital stay. Patients may feel that being given the option to play music and what songs to play provides them with a sense of control during their time in the hospital or diagnostic center.",
          ],
          imageUrl: null,
        },
        {
          title: "Music Therapy in Radiodiagnosis",
          description: [
            "According to a research study by the National Library of Medicine, patients undergoing interventional radiological procedures were randomly assigned to two groups. The intervention group received music of their choice via headphones during the procedure. Patients in the control group did not receive music during the procedure. Blood pressure and pulse rate were monitored before and during the procedures in order to measure anxiety levels. The primary outcomes measured were reductions in drug doses for sedation and analgesia. Anxiety scores were also assessed after each procedure using a validated state anxiety inventory.",
            "The study concluded that music therapy helped significantly reduce the sedation requirements during interventional radiology procedures. Music while undergoing interventional radiology minimizes the risks of sedation and contributes to making the procedure safer. It also makes the patient experience more pleasant.",
          ],
          imageUrl: null,
        },
        {
          title: "Access Prodigi’s Playlist to Provide Music Therapy",
          description: [
            "Prodigi's strategy for a patient-centric approach is unique and in tune with the music. Music therapy helps patients counteract many negative emotions and conditions that may arise during diagnostic imaging. Our team has carefully designed a set of playlists on Spotify with patients in mind, which is an optimal blend of slow, harmonic songs and upbeat, fast tracks.",
            "To know more about our services, contact us today at communication@5cnetwork.com .",
          ],
          imageUrl: null,
        },
      ],
    },
  ];
  const BlogsCategories = [
    "Latest",
    "Technology",
    "Diagnostic center",
    "Radiologists",
  ];
  const {
    data: strapiBlogs,
    loading,
    error,
  } = useStrapiContent(COLLECTION_TYPES.ARTICLES, {
    filters: {
      category: {
        name: {
          $eq: "blogs",
        },
      },
    },
    populate: {
      category: true,
      cover: true,
      author: true,
    },
    sort: ["publishedAt:desc"],
  });

  const categoriesToShow = extractCategories(strapiBlogs, true);

  const renderStaticBlogs = () => (
    <BlogGridComponent
      section={"Blogs"}
      comInformation={BlogsData}
      comCategories={BlogsCategories}
      isNewsRoom={false}
    />
  );

  const renderStrapiBlogs = () => (
    <ContentGridComponent
      section={"Blogs"}
      comInformation={strapiBlogs || []}
      comCategories={categoriesToShow}
      isNewsRoom={false}
      loading={loading}
      error={error}
      useStrapiData={true}
      showCategories={true}
    />
  );

  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
      <div className="w-[100%] flex flex-col justify-center items-center pt-[90px]">
        {/* <div className="w-[100%] px-4 md:px-10">
          <CompanyBanner
            img={BannerImg}
            heading={"Blogs"}
            containerClassName={"items-center md:items-start"}
            contentClassName={"flex items-center"}
          />
        </div> */}
        {loading ? (
          <div className="w-[100%] flex flex-col justify-center items-center h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1B3366]"></div>
          </div>
        ) : (
          <div className="w-[100%]">
            {Boolean(strapiBlogs?.length)
              ? renderStrapiBlogs()
              : renderStaticBlogs()}
          </div>
        )}
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Blogs;

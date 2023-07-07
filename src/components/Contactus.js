import React from "react";
import {useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import {
  Typography,
  Card
} from "@material-tailwind/react";

const TABLE_HEAD = ["Name of website", "E-mail", "Helpline number", "URL"];
 
const TABLE_ROWS = [
  {
    website: "Next Generation E Ticketing",
    email: <div>
        <Typography>I-tickets/e-tickets :care@irctc.co.in</Typography>
        <Typography>For Cancellation E-tickets : etickets@irctc.co.in</Typography>
    </div>,
    number: <div>
    <Typography>14646 or 0755-6610661, 0755-4090600</Typography>
    <Typography>(Language: Hindi and English)</Typography>
</div>,
    url: <a href="https://www.irctc.co.in/nget/" class="text-sky-800">Visit Website</a>,
  },
  {
    website: "E-catering",
    email: "",
    number: "1323(Care number)",
    url: <a href="https://www.ecatering.irctc.co.in/" class="text-sky-800">Visit Website</a>,
  },
  {
    website: "Air Ticketing",
    email: "flights@irctc.co.in",
    number:"1800 110 139 / 0755 - 6698100 / 4090400",
    url: <a href="https://www.air.irctc.co.in/" class="text-sky-800">Visit Website</a>,
  },
  {
    website: "Tourism",
    email: "tourism@irctc.com",
    number: "1800 110 139 / 0755 - 6698100 / 4090400",
    url: <a href="https://www.irctctourism.com/" class="text-sky-800">Visit Website</a>,
  },
  {
    website: "Maharajas' Express",
    email: "maharajas@irctc.com",
    number: "+91 9717635915",
    url: <a href="https://www.the-maharajas.com/" class="text-sky-800">Visit Website</a>,
  },
  {
    website: "Buddhist train",
    email: "buddhisttrain@irctc.com",
    number: "+91 9717648718",
    url: <a href="https://www.irctcbuddhisttrain.com/" class="text-sky-800">Visit Website</a>,
  },
];

const SITEMAP = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Our Team", "Projects"],
    },
    {
      title: "Help Center",
      links: ["Discord", "Twitter", "GitHub", "Contact Us"],
    },
    {
      title: "Resources",
      links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
    },
    {
      title: "Products",
      links: ["Templates", "UI Kits", "Icons", "Mockups"],
    },
  ];
   
  const currentYear = new Date().getFullYear();

export default function Contactus() {
    return (
      <>
        <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/owr7tfihocqtspzhu3td"
        alt="nature image"
      />
      <Typography className="mb-2 p-4 font-bold text-sky-800">     
      Helpline Number & Email
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-black">     
        Railway
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography>
    NTES (NATIONAL TRAIN ENQUIRY SYSTEM)
      </Typography>
      </div>
    <div class="space-y-4">
      <Typography>
      RAIL MADAD HELPLINE
      </Typography>
    </div>
    <div class="space-y-4">
      <Typography>
      INTEGRATED RAILWAYS HELPLINE & ENQUIRY SYSTEM(IRHES)
      </Typography>
    </div>
</div>
<div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <a href="https://enquiry.indianrail.gov.in/mntes/" class="text-sky-800">Visit Website</a>
      </div>
    <div class="space-y-4">
    <a href="https://railmadad.indianrailways.gov.in/madad/final/home.jsp" class="text-sky-800">Visit Website</a>
    </div>
    <div class="space-y-4">
    <Typography className="text-sky-800" strokeWidth={2}>     
      139
        </Typography>
    </div>
</div>
<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>IRCTC</Accordion.Header>
        <Accordion.Body>
        <Typography className="mb-2 p-4 font-bold text-black">     
        Business Related Helpline number and IRCTC websites
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ website, email, number, url }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={website}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {website}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {number}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {url}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Corporate Office</Accordion.Header>
        <Accordion.Body>
        <div class="grid grid-cols-2 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Registered Office / Corporate Office
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-black">     
        Indian Railway Catering and Tourism Corporation Ltd.
        </Typography>
        <Typography>
        B 148, 11th Floor, Statesman House, Barakhamba Road, New Delhi-110001
        </Typography>
        <Typography>
        Tourism Office M 13, Punj House,New Delhi 110001
        </Typography>
        <Typography>
        Tel.No. 011-23311263/64, 23314752 , 23314784 ( For Empanelment only)
        </Typography>
        <Typography>
        For Railway tickets booked & Refund related Queries through IRCTC Delhi Customer Care No. :14646 or 0755-4090600, 0755-6610661 (Language: Hindi and English)
        </Typography>
        <Typography>
        Fax No. 011-23311259
        </Typography>
        <Typography>
        Internet Ticketing Complaints Write to: <a href="https://www.care.irctc.co.in/" class="text-sky-800">https://www.care.irctc.co.in/</a>
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-black">     
        Internet Ticketing Services/Indian Railway Conference Association Building
        </Typography>
        <Typography>
        Internet Ticketing, State Entry Road, Indian Railway Conference Association Building, New Delhi-110055
        </Typography>
        <Typography>
        Email Id: <a href="ggmit@irctc.com" class="text-sky-800">ggmit@irctc.com</a>
        </Typography>
        <Typography>
        I-tickets/e-tickets : <a href="care@irctc.co.in" class="text-sky-800">care@irctc.co.in</a>
        </Typography>
        <Typography>
        For Cancellation E-tickets : <a href="etickets@irctc.co.in" class="text-sky-800">etickets@irctc.co.in</a>
        </Typography>
        <Typography className="mb-2 p-4 flex text-black">     
        Original GC/TTE certificate sent to :
        </Typography>
        <Typography>
        GGM/IT
        </Typography>
        <Typography>
        Indian Railway Catering and Tourism Corporation Ltd.,
        </Typography>
        <Typography>
        Internet Ticketing Centre
        </Typography>
        <Typography>
        IRCA Building
        </Typography>
        <Typography>
        State Entry Road
        </Typography>
        <Typography>
        New Delhi 110055
        </Typography>
        <Typography class="p-6">
        For IRCTC iMudra Prepaid Wallet & Card : <a href="imudracare@irctc.co.in" class="text-sky-800">imudracare@irctc.co.in</a>
        </Typography>
        <Typography>
        For IRCTC SBI Card users who do not receive the card within 01 month from the date of application kindly call on the Railway SBI Card Helpline nos. at 0124-39021212 or 18001801295 (if calling from BSNL/MTNL line) or send email to <a href="customercare@sbicard.com" class="text-sky-800">customercare@sbicard.com</a>. For other queries on your IRCTC SBI card account, kindly email at <a href="loyaltyprogram@irctc.co.in" class="text-sky-800">loyaltyprogram@irctc.co.in</a>
        </Typography>
      </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Central Control Number (Catering Services)
        </Typography>
        <Typography>
        Mobile : 9717639006
        </Typography>
        <Typography>
        Phone No: 011-23345300, 23745950
        </Typography>
        <Typography>
        Fax No.: 011-23345400
        </Typography>
    </div>
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>East Zone</Accordion.Header>
        <Accordion.Body>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    East Zone I & II:
        </Typography>
        <Typography>
        Old Koilaghat Building,Ground Floor,3,Koilaghat Street, Kolkata 700001
        </Typography>
        <Typography>
        Tel.No. 033-22439045, 22133207 Fax No. 033-22439046
        </Typography>
        <Typography>
        Email Id: ggmkolkatta@irctc.com
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-black">     
        Rail Neer Plant Danapur:
        </Typography>
        <Typography>
        Loco Colony, South R.P.F. Barracks, Khagul, Danapur-801105 (Bihar)
        </Typography>
        <Typography>
        Tel.No. 0612-3295150
        </Typography>
        <Typography>
        Fax No. 06115-232557
        </Typography>
        <Typography>
        Email Id: railneerdanapur@irctc.com
        </Typography>
      </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Regional Office - Patna
        </Typography>
        <Typography>
        Biscomaun Tower,4th Floor, West Gandhi Maidan, Patna - 800001
        </Typography>
        <Typography>
        Tel.No. 0612-2205801,2213993
        </Typography>
        <Typography>
        Fax No. 0612-2213993
        </Typography>
    </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Regional Office -Guwahati
        </Typography>
        <Typography>
        4D, Mandvi Aptts., In Front of Ranvirra Bhawan, GNB Road, Ambari, Guwahati, Assam- 781001
        </Typography>
        <Typography>
        Tel.No. 0361-2737123
        </Typography>
        <Typography>
        Fax No. 0361-2367122
        </Typography>
    </div>
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>North Zone</Accordion.Header>
        <Accordion.Body>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    North Zone
        </Typography>
        <Typography>
        Rail Yatri Niwas Building, New Delhi Railway Station Complex, Ajmeri Gate Side, New Delhi - 110002
        </Typography>
        <Typography>
        Zonal Office Tel.No.: - 011-23234763, 23221146 , Fax: - 011-23210321
        </Typography>
        <Typography>
        North Zone Control Tele No. / Fax No.: 011-23221147 Mobile:9717640700
        </Typography>
        <Typography>
        Email Id: ggmdelhi@irctc.com
        </Typography>
      </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Rail Neer Plant Nangloi
        </Typography>
        <Typography>
        Rail Neer Plant, Northan Railways Wireless Station Area, Opposite Nangloi Bus Depot, Nangloi -110041
        </Typography>
        <Typography>
        Tel.No. 011-65152575,25949774
        </Typography>
        <Typography>
        Fax No. 011-25949773
        </Typography>
    </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Regional Office - Lucknow
        </Typography>
        <Typography>
        Paryatan Bhawan, 2nd Floor, C-13, Vipin Khand, Gomti Nagar, Lucknow -226010
        </Typography>
        <Typography>
        Tel.No. 0522-2305522
        </Typography>
        <Typography>
        Fax No. 0522-2305533
        </Typography>
    </div>
</div>
<div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
        Regional Office - Jaipur
        </Typography>
        <Typography>
        708, 7th Floor, Crystal Mall , Sawai Jai Singh Highway,Banipark, Jaipur- 302016
        </Typography>
        <Typography>
        Tel.No. 0141-4020194, 4020198
        </Typography>
        <Typography>
        Fax No. 0141-4020193
        </Typography>
      </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Regional Office - Chandigarh
        </Typography>
        <Typography>
        SCO-80-81-8, Sector -34A, Chandigarh -160034
        </Typography>
        <Typography>
        Tel.No. 0172-4645795, 6572156
        </Typography>
        <Typography>
        Fax No. 0172-4645795
        </Typography>
    </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Rail Neer Plant Nangloi
        </Typography>
        <Typography>
        Northern Railway’s Wireless Station Area, Opp. Nangloi Bus Depot, Rohtak Road, Nangloi, Delhi-110041
        </Typography>
        <Typography>
        Tel.No. 011-25949774-75
        </Typography>
        <Typography>
        Email Id: railneernangloi@irctc.com
        </Typography>
    </div>
</div>
<div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
        Rail Neer Plant, Hapur
        </Typography>
        <Typography>
        I-2, Phase-III, Industrial Area, Massori Gulavathi Road, Hapur (U.P.)
        </Typography>
        <Typography>
        Tel.No. 9717648888
        </Typography>
        <Typography>
        Email Id: rnphapur@irctc.com
        </Typography>
      </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Rail Neer Plant, Amethi
        </Typography>
        <Typography>
        Plot No. C11 & 12, UPSIDC Industrial Area, Takaria Gauriganj, Distt. Amethi
        </Typography>
        <Typography>
        Tel.No. 9839358105
        </Typography>
        <Typography>
        Email Id: railneerplantamethi@irctc.com
        </Typography>
    </div>
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>South Zone</Accordion.Header>
        <Accordion.Body>
        <div class="grid grid-cols-2 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    South Zone
        </Typography>
        <Typography>
        6A, The Rain Tree Place, No.9, MC Nicholas Road, Chetpet, Chennai - 600031
        </Typography>
        <Typography>
        Tel.No. 044 28363726/28363727 (Zonal Office), 044 28362145 (Control)
        </Typography>
        <Typography>
        Fax No. 044 28363453
        </Typography>
        <Typography>
        Email Id: ggmchennai@irctc.com
        </Typography>
      </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Regional office - Bangalore
        </Typography>
        <Typography>
        No.82, IDBI Bank, Shree Maruthi Ramakrishnan Arcade, Dr.Rajkumar Road, Rajaji Nagar, Bangalore - 560010
        </Typography>
        <Typography>
        Tel.No. 080 23123877
        </Typography>
        <Typography>
        Fax No. 080 23123877
        </Typography>
        <Typography>
        Email Id: rosbc@irctc.com
        </Typography>
    </div>
</div>
<div class="grid grid-cols-2 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Regional Office - Ernakulam
        </Typography>
        <Typography>
        Salih Arcade, Ist Floor, Building No.40/8194, Convent Road, Kochi- 682 035
        </Typography>
        <Typography>
        Tele: 0484 2382991
        </Typography>
        <Typography>
        Email Id: rm_ers@irctc.com
        </Typography>
      </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Rail Neer Plant, Palur
        </Typography>
        <Typography>
        Rail Neer Packaged Drinking Water Bottling Plant, Palur Railway Station, Palur Post, Chengalpattu Taluk, Kanchipuram District – 603101 Tamil Nadu
        </Typography>
        <Typography>
        Tel.No. 044 27437007
        </Typography>
        <Typography>
        Email Id: railneerpalur@irctc.com
        </Typography>
    </div>
</div>
<div class="grid grid-cols-2 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Rail Neer Plant, Palur
        </Typography>
        <Typography>
        Station, Taluk - Chenagalpattu, Distt. Kanchipuram, Tamilnadu
        </Typography>
        <Typography>
        Tel.No. 044-27437007
        </Typography>
        <Typography>
        Email Id: railneerpalur@irctc.com
        </Typography>
      </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Rail Neer Plant, Parassala
        </Typography>
        <Typography>
        Railway Yard, Near Parassala Railway Station, Kerala-695502
        </Typography>
        <Typography>
        Tel.No. 0471-2203355
        </Typography>
        <Typography>
        Email Id: railneerplantparassala@irctc.com
        </Typography>
    </div>
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>South Central Zone</Accordion.Header>
        <Accordion.Body>
        <div class="grid grid-cols-2 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    South Central Zone
        </Typography>
        <Typography>
        9-1-129/1/102, 1st Floor, Oxford Plaza, Sarojini Devi Road, Secunderabad, Telangana - 500 003
        </Typography>
        <Typography>
        Tel. No. 040-27702401, 27808899
        </Typography>
        <Typography>
        Email Id: ggmsecunderabad@irctc.com
        </Typography>
      </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Regional Office - Bhubaneshwar
        </Typography>
        <Typography>
        House No-08, Gangadhar Meher Nagar,Jaydev Vihar (Infront of Pal Heights) Bhubaneswar, Odisha -751013
        </Typography>
        <Typography>
        Tele No. : 0674-2303657,0674-2303658
        </Typography>
        <Typography>
        Fax No.: 0674-2301853
        </Typography>
    </div>
</div>
<div class="grid grid-cols-2 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Rail Neer Plant, Bilaspur
        </Typography>
        <Typography>
        Plot No. 22/23, Sector-B, Sirigitti Industrial Area, Dist. Bilaspur, (CG)- 495004
        </Typography>
        <Typography>
        Tel.No. 9717649221
        </Typography>
        <Typography>
        Email Id: railneerbilaspur@irctc.com
        </Typography>
      </div>
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>West Zone</Accordion.Header>
        <Accordion.Body>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    West Zone office
        </Typography>
        <Typography>
        2nd Floor,New Administrative Building,Central Railway,CST, Mumbai-400001
        </Typography>
        <Typography>
        Tel.No. 022-22618062,22618063,22618064
        </Typography>
        <Typography>
        Fax No. 022-22618066
        </Typography>
        <Typography>
        Email Id: ggmmumbai@irctc.com
        </Typography>
      </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    West Regional Office - Bhopal:
        </Typography>
        <Typography>
        2nd Floor, Paryawas Bhavan, Block-4 ,Arera Hills, Bhopal – 462011
        </Typography>
        <Typography>
        Tel.No. 0755- 2577011, 4285226
        </Typography>
        <Typography>
        Fax No. 0755 - 4057982
        </Typography>
    </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    West Regional Office - Ahmedabad:
        </Typography>
        <Typography>
        5nd Floor, Pelican Building, Gujarat Chamber of Commerce and Industary Ashram Road, Ahmedabad-380009.
        </Typography>
        <Typography>
        Tel.No. 079-26582673-75
        </Typography>
        <Typography>
        Fax No. 079-26580735
        </Typography>
    </div>
</div>
<div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Rail Neer Plant Mandideep, Bhopal
        </Typography>
        <Typography>
        Plot no. 01, Warehousing Complex, Industrial Area, Manideep, Phase-II, Dist. Raisen (MP)
        </Typography>
        <Typography>
        Tel.No. 9004080007
        </Typography>
        <Typography>
        rnpsanand@irctc.com
        </Typography>
      </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Rail Neer Plant Sanand, Ahmedabad
        </Typography>
        <Typography>
        Plot no. 01, Warehousing Complex, Industrial Area, Manideep, Phase-II, Dist. Raisen (MP)
        </Typography>
        <Typography>
        Tel.No. 8287931874
        </Typography>
        <Typography>
        rnpsanand@irctc.com
        </Typography>
    </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Rail Neer Plant, Ambernath
        </Typography>
        <Typography>
        GIP Dam, Near additional MIDC, Post Anand Nagar, Ambernath (East), Dist. Thane, Maharashtra-421506
        </Typography>
        <Typography>
        Tel.No. 9004082752
        </Typography>
        <Typography>
        ambernath.rnp@irctc.com
        </Typography>
    </div>
</div>
<div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Rail Neer Plant, Nagpur
        </Typography>
        <Typography>
        D-53, MIDC Buti Bori Industrial Area, Dist. Nagpur
        </Typography>
        <Typography>
        Tel.No. 011-42581132
        </Typography>
        <Typography>
        rnpnagpur@irctc.com
        </Typography>
      </div>
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Tourism Facilitation Centres</Accordion.Header>
        <Accordion.Body>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    New Delhi
        </Typography>
        <Typography>
        Near Cloakroom, Opp to Executive Lounge, Platform No.16 New Delhi Railway Station, Ajmeri Gate, New Delhi – 110002
        </Typography>
        <Typography>
        Tel. No. - +011-23213197, +91 9717648888, 9717641764
        </Typography>
      </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Bilaspur
        </Typography>
        <Typography>
        Beside VIP Gate No. 02 Bilaspur Railway Station
        </Typography>
        <Typography>
        Tel: 07752 - 247040, 8287932242
        </Typography>
        <Typography>
        Email: bhanu6504@irctc.com
        </Typography>
    </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Mumbai
        </Typography>
        <Typography>
        Main Line Station Mumbai Central Railway Station , Mumbai, Maharashtra – 400008
        </Typography>
        <Typography>
        Tel. No. - +91-8433926649
        </Typography>
    </div>
</div>
<div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Chennai
        </Typography>
        <Typography>
        Gate No.3, Main Entrance, (Opposite to SMR Room) Chennai Central Railway Station, Park Town, Chennai – 3, Tamil Nadu
        </Typography>
        <Typography>
        Tel No. 9003140681, 044-25332548
        </Typography>
      </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Kolkata
        </Typography>
        <Typography>
        Howarh Railway station (Howarh Old Complex), Near to Railway Enquiry & Opp to Platform no 10, Howrah-711101
        </Typography>
        <Typography>
        Tel. No. - +91- 9002040089/142
        </Typography>
    </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Agra
        </Typography>
        <Typography>
        Platform No.1, Agra Cantt. Railway Station, AGRA-282003
        </Typography>
        <Typography>
        Landline No.:- 0562-2420111.
        </Typography>
        <Typography>
        Tel No. - 9794863639/ 9794863641.
        </Typography>
    </div>
</div>
<div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Puri
        </Typography>
        <Typography>
        Opposite to second class waiting Hall, Besides RPF post Puri Railway station concourse, Odisha
        </Typography>
        <Typography>
        Tel. No. –06752-223005, +91-9777440061
        </Typography>
      </div>
      <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Gaya
        </Typography>
        <Typography>
        Platform No. 1, Near to SBI ATM,Opposite Bihar Tourism Office, Gaya, Bihar
        </Typography>
        <Typography>
        Tel. No. - +91- 9771440025 /10
        </Typography>
      </div>
      <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Ahmedabad
        </Typography>
        <Typography>
        Platform No.1, Near Gate No.1 & Gujarat Tourism Office, Musafirkhana, Ahmedabad-380002
        </Typography>
        <Typography>
        Tel. No. - + 7922160576
        </Typography>
      </div>
</div>
<div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Bengaluru
        </Typography>
        <Typography>
        Concourse area, Main Entrance Bangaluru City Railway Station, Bangalore – 560025, Karnataka
        </Typography>
        <Typography>
        Tel. No. 080 - 22960014, +919741429437
        </Typography>
        <Typography>
        E-mail id:- tifcsbc@irctc.com
        </Typography>
      </div>
      <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Tirupati
        </Typography>
        <Typography>
        Platform No.1, Besides Main Entrance, Tirupati Railway Station, Andhra Pradesh
        </Typography>
        <Typography>
        Tel. No. – 9701360612, 0877-2222010
        </Typography>
        <Typography>
        E-mailid:- Sukumar.Bandala@irctc.com; pavan.kumar@irctc.com
        </Typography>
      </div>
      <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Mysuru
        </Typography>
        <Typography>
        Near General Booking Office Mysuru Junction, Karnataka
        </Typography>
        <Typography>
        Tel. No. +91 9741421486, 0821 – 2426001
        </Typography>
        <Typography>
        E-mail id:- tifcmys@irctc.com
        </Typography>
      </div>
</div>
<div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Thiruvananthapuram
        </Typography>
        <Typography>
        Near Booking Office, 2nd Entry, Trivandrum Central Railway Station, Powerhouse Road, Thiruvananthapuram – 695036, Kerala.
        </Typography>
        <Typography>
        Phone: +91 8287932095
        </Typography>
        <Typography>
        E-mail: tourismtvc@irctc.com
        </Typography>
      </div>
      <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Kozhikode
        </Typography>
        <Typography>
        Platform No. 1, Near Food Plaza Kozhikode Railway Station, Kozhikode- 673001, Kerala.
        </Typography>
        <Typography>
        Tel No. + 91 8287932098
        </Typography>
        <Typography>
        E- mail: tifcclt@irctc.com
        </Typography>
      </div>
      <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Ernakulam
        </Typography>
        <Typography>
        Tourism Information and Facilitation Centre,1st Floor,Salih Arcade, 40/8194, Convent Road, Kochi- 682035.
        </Typography>
        <Typography>
        Tel No. + 91 8287932082
        </Typography>
        <Typography>
        E- mail: tourismkerala@irctc.com
        </Typography>
      </div>
</div>
<div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Coimbatore
        </Typography>
        <Typography>
        Area Office No.209 Maruti Towers,Opp to Government Hospital,Coimbatore- 641018.
        </Typography>
        <Typography>
        Tel No. + 91 8287931965
        </Typography>
        <Typography>
        E- mail: tifccoimbatore@irctc.com
        </Typography>
      </div>
      <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Madurai
        </Typography>
        <Typography>
        First floor, New concourse, Madurai Railway junction – 625001, Karnataka
        </Typography>
        <Typography>
        Tel. No. 0452-2345757, +919003140714
        </Typography>
      </div>
      <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Hubli
        </Typography>
        <Typography>
        IRCTC area office, Near booking office, Hubli Railway Station, Hubli-580023
        </Typography>
        <Typography>
        Tel No. – 9741421088
        </Typography>
      </div>
</div>
<div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Vijayawada
        </Typography>
        <Typography>
        Platform No.1, Besides Main Entrance, Vijayawada Railway Station, Andhra Pradesh
        </Typography>
        <Typography>
        Tel. No. – 0866-2572280, 8374000783/ 9701360634/ 675
        </Typography>
        <Typography>
        E-mail id:- ch.balaji@irctc.com
        </Typography>
      </div>
      <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Secunderabad
        </Typography>
        <Typography>
        Platform No.10, Besides SBI Credit Card Counter, Secunderabad Railway Station, Telangana
        </Typography>
        <Typography>
        Tel. No. - 040-27800580, 9701360690
        </Typography>
        <hr className="my-8 border-blue-gray-50" />
        <Typography>
        Tourism Plaza (Paryatak Bhavan, Hyderabad) TIFC, GF-14, Ground Floor, Tourism Plaza, Greenlands, Begumpet, Hyderabad-500016
        </Typography>
        <Typography>
        Tel. No. - +91-9701360698, 040-23400606
        </Typography>
      </div>
      <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Pune
        </Typography>
        <Typography>
        IRCTC Regional office,1st Floor, Retiring Room No 1, Above Station Manager, Office, Pune Railway Station, Pune, Maharashtra – 411001
        </Typography>
        <Typography>
        Tel. No. - +91-9503057202
        </Typography>
      </div>
</div>
<div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Indore
        </Typography>
        <Typography>
        Platform No. 1, Opp PRO office, Indore Railway Station, Indore, Madhya Pradesh – 452001
        </Typography>
        <Typography>
        Tel. No. - +91-9630098913
        </Typography>
      </div>
      <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Jabalpur
        </Typography>
        <Typography>
        Near Railway Retiring Room, Platform No 1, Jabalpur Railway Station, Madhya Pradesh – 482001
        </Typography>
        <Typography>
        Tel. No. - +91-7898970238,0761-4010702
        </Typography>
      </div>
      <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Vishakhapatnam
        </Typography>
        <Typography>
        Visakhapatnam Railway Station, Platform No.1, Besides APTDC Counter, Visakhapatnam-530004
        </Typography>
        <Typography>
        Contact: 9078089263/ 9701360695
        </Typography>
        <Typography>
        E-mail id:- cknath@irctc.com & vy.prasad@irctc.com
        </Typography>
      </div>
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Central Control</Accordion.Header>
        <Accordion.Body>
        <Typography className="mb-2 p-4 font-bold text-black">     
        Contact Numbers
        </Typography>
        <Typography>
        Contact: 9078089263/ 9701360695
        </Typography>
        <hr className="my-8 border-blue-gray-50" />
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Central Control
        </Typography>
        <Typography>
        Contact : - 9717639006
        </Typography>
        <Typography>
        E-mail id: - centralcontrol@irctc.com
        </Typography>
      </div>
      <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    East Zone
        </Typography>
        <Typography>
        Contact : - 9831074006
        </Typography>
        <Typography>
        E-mail id: - controleastzone@irctc.com
        </Typography>
      </div>
      <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    West Zone
        </Typography>
        <Typography>
        Contact : - 8287931874,8287931875
        </Typography>
        <Typography>
        E-mail id: - controlwestzone@irctc.com
        </Typography>
      </div>
</div>
<div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    South Zone
        </Typography>
        <Typography>
        Contact : - 9003016161
        </Typography>
        <Typography>
        E-mail id: - controlsouthzone@irctc.com
        </Typography>
      </div>
      <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    South Central Zone
        </Typography>
        <Typography>
        Contact : - 9701360702
        </Typography>
        <Typography>
        E-mail id: - controlsouthcentralzone@irctc.com
        </Typography>
      </div>
      <div class="space-y-4">
    <Typography className="mb-2 p-4 font-bold text-black">     
    Vishakhapatnam
        </Typography>
        <Typography>
        North Zone
        </Typography>
        <Typography>
        Contact : - 9717640700
        </Typography>
        <Typography>
        E-mail id: - controlnorthzone@irctc.com
        </Typography>
      </div>
</div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-bold uppercase opacity-50"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography key={key} as="li" color="blue-gray" className="font-normal">
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">Material Tailwind</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
      </>
    );
  }
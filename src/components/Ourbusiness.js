import React from "react";
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Typography,
  Button,
  Card,
} from "@material-tailwind/react";
import {
  ArrowDownTrayIcon
} from "@heroicons/react/24/outline";

const TABLE_HEAD = ["Sr. No.", "Location/Plant Name", "Production Capacity(Bottles per day)", "Status"];
const TABLE_ROWS = [
    {
      sno: "1",
      location: "Bhusawal (MH)",
      capacity: "72,000",
      status: "Under Construction",
    },
    {
        sno: "2",
        location: "Mallavalli (Vijayawada)",
        capacity: "72,000",
        status: "Under Construction",
      },
      {
        sno: "3",
        location: "Bhubaneswar",
        capacity: "72,000",
        status: "Under Construction",
      },
      {
        sno: "4",
        location: "Vishakhapattanam",
        capacity: "72,000",
        status: "Under Construction",
      },
      {
        sno: "5",
        location: "Kota",
        capacity: "72,000",
        status: "Under tendering process",
      },
  ];
 
const TABLE_ROWS_2 = [
  {
    name: "Address",
    job: "Plot no. 01, Warehousing Complex, Industrial Area, Manideep, Phase-II, Dist. Raisen (MP)",
  },
  {
    name: "Contact No.-",
    job: "9004080007",
  },
  {
    name: "E-mail id",
    job: "rnpsanand@irctc.com",
  },
];

const TABLE_ROWS_3 = [
    {
      name: "Address",
      job: "Plot no. 01, Warehousing Complex, Industrial Area, Manideep, Phase-II, Dist. Raisen (MP)",
    },
    {
      name: "Contact No.-",
      job: "9004080007",
    },
    {
      name: "E-mail id",
      job: "rnpsanand@irctc.com",
    },
  ];

  const TABLE_ROWS_4 = [
    {
      name: "Address",
      job: "GIP Dam, Near additional MIDC, Post Anand Nagar, Ambernath (East), Dist. Thane, Maharashtra-421506",
    },
    {
      name: "Contact No.-",
      job: "9004082752",
    },
    {
      name: "E-mail id",
      job: "ambernath.rnp@irctc.com",
    },
  ];

  const TABLE_ROWS_5 = [
    {
      name: "Address",
      job: "Plot No. F-20, Bhusawal Industrial Area, Bhusawal, Dist.� Jalgaon (Maharastra)",
    },
    {
      name: "Status",
      job: "Under Construction",
    },
  ];

  const TABLE_ROWS_6 = [
    {
        name: "Address",
        job: "Plot No. 11, Sec- E, IGC Maneri Dist. Mandla (Jabalpur)",
      },
      {
        name: "Contact No.-",
        job: "9831042147",
      },
      {
        name: "E-mail id",
        job: "rnpmaneri@irctc.com",
      },
  ];

  const TABLE_ROWS_7 = [
    {
        name: "Address",
        job: "FP3/8, Food Park, Phase-III, Sankrail",
      },
      {
        name: "Contact No.-",
        job: "9831042147",
      },
      {
        name: "E-mail id",
        job: "rnpsankrail@irctc.com",
      },
  ];

  const TABLE_ROWS_8 = [
    {
        name: "Address",
        job: "Village Borkhal under Uttar khola Mouza, Amlighat, Dist.Morigaon,Guwahati (Assam)",
      },
      {
        name: "Contact No.-",
        job: "9435060250",
      },
      {
        name: "E-mail id",
        job: "rnpjagiroad@irctc.com",
      },
  ];

  const TABLE_ROWS_9 = [
    {
        name: "Address",
        job: "Loco Colony, South R.P.F. Barracks, Khagul, Danapur-801105 (Bihar)",
      },
      {
        name: "Contact No.-",
        job: "0612-3295150",
      },
      {
        name: "E-mail id",
        job: "railneerdanapur@irctc.com",
      },
  ];

  const TABLE_ROWS_10 = [
    {
        name: "Address",
        job: "Northern Railway�s Wireless Station Area, Opp. Nangloi Bus Depot, Rohtak Road, Nangloi, Delhi-110041",
      },
      {
        name: "Contact No.-",
        job: "011-25949774-75",
      },
      {
        name: "E-mail id",
        job: "railneernangloi@irctc.com",
      },
  ];

  const TABLE_ROWS_11 = [
    {
        name: "Address",
        job: "I-2, Phase-III, Industrial Area, Massori Gulavathi Road, Hapur (U.P.)",
      },
      {
        name: "Contact No.-",
        job: "9717640700",
      },
      {
        name: "E-mail id",
        job: "rnphapur@irctc.com",
      },
  ];

  const TABLE_ROWS_12 = [
    {
        name: "Address",
        job: "Plot no. - 5A(1), Industrial Area Mehatpur, Dist. - Una",
      },
      {
        name: "Contact No.-",
        job: "9717640700",
      },
      {
        name: "E-mail id",
        job: "rnpuna@irctc.com",
      },
  ];

  const TABLE_ROWS_13 = [
    {
        name: "Address",
        job: "Plot No. C11 & 12, UPSIDC Industrial Area, Takaria Gauriganj, Distt. Amethi",
      },
      {
        name: "Contact No.-",
        job: "9839358105",
      },
      {
        name: "E-mail id",
        job: "railneerplantamethi@irctc.com",
      },
  ];

  const TABLE_ROWS_14 = [
    {
        name: "Address",
        job: "Plot No. 22/23, Sector-B, Sirigitti Industrial Area, Dist. Bilaspur, (CG)- 495004",
      },
      {
        name: "Contact No.-",
        job: "97176492215",
      },
      {
        name: "E-mail id",
        job: "railneerbilaspur@irctc.com",
      },
  ];

  const TABLE_ROWS_15 = [
    {
        name: "Address",
        job: "Super Thermal Power Station premises located at Simhadri, Dist. Visakhapatnam, Andhra Pradesh - 531020",
      },
      {
        name: "Status",
        job: "Under Construction",
      },
  ];

  const TABLE_ROWS_16 = [
    {
        name: "Address",
        job: "Plot No.- 13(P) & 14 (P), Chhatabar Industrial Area, Bhubaneswar- 752054",
      },
      {
        name: "Status",
        job: "Under Construction",
      },
  ];

  const TABLE_ROWS_17 = [
    {
        name: "Address",
        job: "Station, Taluk - Chenagalpattu, Distt. Kanchipuram, Tamilnadu",
      },
      {
        name: "Contact No.-",
        job: "044-27437007",
      },
      {
        name: "E-mail id",
        job: "railneerpalur@irctc.com",
      },
  ];

  const TABLE_ROWS_18 = [
    {
        name: "Address",
        job: "Railway Yard, Near Parassala Railway Station, Kerala-695502",
      },
      {
        name: "Contact No.-",
        job: "0471-2203355",
      },
      {
        name: "E-mail id",
        job: "railneerplantparassala@irctc.com",
      },
  ];

  const TABLE_ROWS_19 = [
    {
        name: "Address",
        job: "Plot no-9/21, Model Industrial Park, Dist. Krishan,Mallavali ,Vijaywada(AP).",
      },
      {
        name: "Status",
        job: "Under Construction",
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
export default function Ourbusiness() {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
    return (
    <>
        <img
            className="h-full w-full contrast-50"
            src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/glff6prs0uhgsudm8gng"
            alt="nature image" />
      <Typography className="mb-2 p-4 font-bold text-sky-800">
          Rail Neer Plants
        </Typography>
        <Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
          Introduction
        </Typography>
        <Typography>
        To enhance passenger amenities, the IRCTC launched Rail Neer, a branded packaged drinking water for the rail commuters. Rail Neer is processed, purified and bottled at state-of-art plants. Completely automatic plant and no manual handling of product water at any stage. IRCTC stands for quality and has a key role in ensuring service and product of the highest quality for the rail passenger as well as visitor to any railway premises. High quality product can only be ensured when production is in-house under full control and supervision of IRCTC.
        </Typography>
        <Typography>
        At present, IRCTC has fourteen operational Rail Neer Plants at Nangloi, Danapur, Palur, Ambernath, Amethi, Parassala, Bilaspur, Sanand, Hapur, Mandideep, Nagpur, Jagiroad, Maneri and Sankrail out of which, Rail Neer Plants at Amethi, Parassala, Nagpur, Sanand, Hapur, Mandideep, Jagiroad, Maneri and Sankrail are under PPP mode, further six more plants are being set up under PPP mode with capital support from IRCTC. Cumulative production capacity of above fourteen Rail Neer Plants is 18.40 lakh bottles per day which will likely be increased to 18.40 lakh bottles per day in FY 2021-22 by setting up six more plants.
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-sky-800">
          Operational Rail Neer Plants
        </Typography>
        <Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
          Nangloi (Delhi)
        </Typography>
        <Typography>
        This is the first plant set up by IRCTC in 2003. This is located in West Delhi. The purpose was to supply safe drinking water to important trains originating from New Delhi and Nizammudin. Plant is provided with solar evaporation pond.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        May 2003
        </Typography>
        <Typography>
        7000 sq mtr
        </Typography>
        <Typography>
        120000 bottles/day
        </Typography>
        <Typography>
            Northern Railway's Wireless Station Area Opp. Nangloi Bus Depot, Nangoli, Delhi-110041,
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/yjoos1zowkriet6pbyyc"
        alt="nature image"
      />
    </div>
</div>
<Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
          Danapur (Patna)
        </Typography>
        <Typography>
        This is the second plant set up by IRCTC in 2004. This is located near Patna in Bihar. The purpose was to supply safe drinking water to trains and stations in state of Bihar and Howrah and Sealdah stations in West Bengal.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        March 2004
        </Typography>
        <Typography>
        10000 sq mtr
        </Typography>
        <Typography>
        102000 bottles/day
        </Typography>
        <Typography>
        Rail Neer Plant, Loco Colony, South of RPF Barracks Khagaul, Danapur, Patna – 801105 ,Ph- 06115-232557, Fax- 06115-232557
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/cy5c9ym2cyvjty4xjpkb"
        alt="nature image"
      />
    </div>
</div>
<Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
          Palur (Chennai)
        </Typography>
        <Typography>
        This is the third plant set up by IRCTC in 2010. This is located near Chennai in Tamil Nadu. The purpose is to supply safe drinking water to trains and stations in the state of Tamilnadu and Karnatka.
        </Typography>
        <Typography>
        The plant has been setup on area of 4500 sq mtrs. The building is constructed in such a manner that there is no need of artificial lighting during day time.
        </Typography>
        <Typography>
        The waste water discharge from Water treatment plant has been reduced to 10%. This is achieved by incorporating concepts of Secondary RO in the Water treatment scheme.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        July,2010
        </Typography>
        <Typography>
        9000 sq mtr
        </Typography>
        <Typography>
        180000 bottles/day
        </Typography>
        <Typography>
        Rail Neer Plant, Palur Railway Station, Chengalpattu – Kanchipuram Main Road, Palur Village, Chengalpattu Taluk, Kanchipuram District, Pin - 603 101, Ph-044-28363725
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/rxv3jq8s5m0utk6m862g"
        alt="nature image"
      />
    </div>
</div>
<Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
          Ambernath (Maharashtra)
        </Typography>
        <Typography>
        This is the fourth plant set up by IRCTC in 2014. This is located near Mumbai in Maharashtra. The purpose is to supply safe drinking water to trains and stations in state of Maharashtra.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        October, 2014
        </Typography>
        <Typography>
        20,000 sq mtr
        </Typography>
        <Typography>
        2,00,000 bottles/day
        </Typography>
        <Typography>
        GIP Dam, Near Additional MIDC, Post- Anand Nagar, Ambarnath, Distt.- Thane (M.H.)- 421506.
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/fifzhib3xupzyqruaqwi"
        alt="nature image"
      />
    </div>
</div>
<Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
Amethi (Uttar Pradesh)
        </Typography>
        <Typography>
        This is the fifth plant (first plant under PPP) set up by IRCTC in 2015. This is located near Gauriganj in Uttar Pradesh. The purpose is to supply safe drinking water to trains and stations in state of Uttar Pradesh.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        March, 2015
        </Typography>
        <Typography>
        8,221 sq mtr
        </Typography>
        <Typography>
        72,000 bottles/day
        </Typography>
        <Typography>
        C-11 & C-12, Industrial Area, Tikaria, Gaurigam, Amethi (U.P.)
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/bnxgq0lk022pjsyt1kog"
        alt="nature image"
      />
    </div>
</div>
<Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
Parassalla (Kerala)
        </Typography>
        <Typography>
        This is the Sixth plant (second plant under PPP) set up by IRCTC in 2016. This is located near Parassala in Trivandrum. The purpose is to supply safe drinking water to trains and stations in state of Kerala.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        June, 2015
        </Typography>
        <Typography>
        4,000 sq mtr
        </Typography>
        <Typography>
        72,000 bottles/day
        </Typography>
        <Typography>
        Survey No. 561/1, in block No. 50 of Parasalla Village.
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/mt2gqlyoaoukuei4vcss"
        alt="nature image"
      />
    </div>
</div>
<Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
Bilaspur (Chhattisgarh)
        </Typography>
        <Typography>
        This is the seventh plant set up by IRCTC in 2017. This is located near Bilaspur in Chhattisgarh. The purpose is to supply safe drinking water to trains and stations in state of Chhattisgarh and Orrisa.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        June, 2017
        </Typography>
        <Typography>
        8,129 sq mtr
        </Typography>
        <Typography>
        72,000 bottles/day
        </Typography>
        <Typography>
        Plot No. 22 & 23, Sec.-B, Sirgitti Industrial Area, Bilaspur, Dist.- Bilaspur (C.G.)-495004
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/v8dvslrafvsvizi0jb42"
        alt="nature image"
      />
    </div>
</div>
<Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
Hapur (Uttar Pradesh)
        </Typography>
        <Typography>
        This is the eighth plant set up by IRCTC in 2019. This is located near Masuri Gulawati Road (NCR) at Hapur in Uttar Pradesh. The purpose is to supply safe drinking water to trains and stations in NCR, Western U.P., Haryana, Uttarakhand and Rajasthan
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        April, 2019
        </Typography>
        <Typography>
        6,000 sq mtr
        </Typography>
        <Typography>
        1,00000 bottles/day
        </Typography>
        <Typography>
        I-2, Phase-III, Industrial Area, Massori- Gulawati Road, Hapur (U.P.).
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/kvihb94bvowdvzlqguwl"
        alt="nature image"
      />
    </div>
</div>
<Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
Sanand (Ahemdabad)
        </Typography>
        <Typography>
        This is the Ninth plant set up by IRCTC in 2019. This is located near Sanand in Ahmadabad. The purpose is to supply safe drinking water to trains and stations in state of Gujarat.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        April, 2019
        </Typography>
        <Typography>
        5,000 sq mtr
        </Typography>
        <Typography>
        72,000 bottles/day
        </Typography>
        <Typography>
        Plot No. 668, Sanand-II, Industrial Estate, Ahmadabad.
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/msusynsijfxseynf8mtw"
        alt="nature image"
      />
    </div>
</div>
<Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
Mandideep (Bhopal)
        </Typography>
        <Typography>
        This is the Tenth plant set up by IRCTC in 2019. This is located near Mandideep in Bhopal. The purpose is to supply safe drinking water to trains and stations in state of Madhya Pradesh.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        July, 2019
        </Typography>
        <Typography>
        5,189.6 sq mtr
        </Typography>
        <Typography>
        72,000 bottles/day
        </Typography>
        <Typography>
        Plot no. 01, Warehousing Complex, Industrial Area, Manideep, Phase-II, Dist. Raisen (MP)
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/bsugxuqapow2mdsa1ypd"
        alt="nature image"
      />
    </div>
</div>
<Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
Nagpur (Maharashtra)
        </Typography>
        <Typography>
        This is the Eleventh plant set up by IRCTC in 2019. This is located at Industrial Area Butibori near Nagpur in Maharashtra. The purpose is to supply safe drinking water to trains and stations in state of Maharashtra.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        August, 2019
        </Typography>
        <Typography>
        6,000 sq mtr
        </Typography>
        <Typography>
        72,000 bottles/day
        </Typography>
        <Typography>
        Plot No.- 01, Warehousing Complex, Industrial Area, Manideep, Phase-II, Dist. Raisen (MP)
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/rxsmusi79cqqxqtwmlpz"
        alt="nature image"
      />
    </div>
</div>
<Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
Jagiroad, Guwahati (Assam)
        </Typography>
        <Typography>
        This is the twelfth Rail Neer Plant set up by IRCTC in 2019. This is located at Amlighat, Dist. - Morigaon, Guwahati in Assam. The purpose is to supply safe drinking water to trains and stations in the state of Assam.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        November, 2019
        </Typography>
        <Typography>
        6,720 sq mtr
        </Typography>
        <Typography>
        72,000 bottles/day
        </Typography>
        <Typography>
        Village Borkhal under Uttar khola Mouza, Amlighat, Dist.Morigaon, Guwahati (Assam) � 782410.
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/hjnr4z40hizeqhtavvi0"
        alt="nature image"
      />
    </div>
</div>
<Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
Sankrail (Howrah)
        </Typography>
        <Typography>
        This is the thirteen Rail Neer Plant set up by IRCTC in 2020. This is located at Food Park, Phase-III, Sankrail in Howrah (West Bengal). The purpose is to supply safe drinking water to trains and stations in the state of West Bengal.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        January, 2020
        </Typography>
        <Typography>
        8,094 sq. mtr.
        </Typography>
        <Typography>
        1,00,000 bottles/day
        </Typography>
        <Typography>
        FP3/8, Food Park, Phase-III, Sankrail, Howrah (West Bengal) - 711302
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/w6yuvb7r5mkqmlw8mjnc"
        alt="nature image"
      />
    </div>
</div>
<Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
Maneri (Jabalpur)
        </Typography>
        <Typography>
        This is the fourteenth Rail Neer Plant set up by IRCTC in 2020. This is located at Maneri Dist. Mandla (near Jabalpur) in Madhya Pradesh. The purpose is to supply safe drinking water to trains and stations in the state of Madhya Pradesh.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        February, 2020
        </Typography>
        <Typography>
        14,500 sq. mtr.
        </Typography>
        <Typography>
        72,000 bottles/day
        </Typography>
        <Typography>
        Plot No. - 11, Sec - E, IGC Maneri Dist. Mandla (Jabalpur), Madhya Pradesh � 481885
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/sfmkf8mhfc4pbtjivumu"
        alt="nature image"
      />
    </div>
</div>
<Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
Una (HP)
        </Typography>
        <Typography>
        This is the fourteenth Rail Neer Plant set up by IRCTC in 2021. This is located at Industrial Area Mehatpur Tehsil, Dist. - Una in Himachal Pradesh. The purpose is to supply safe drinking water to trains and stations in the state of Himachal Pradesh.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        July, 2021
        </Typography>
        <Typography>
        6,188 sq. mtr.
        </Typography>
        <Typography>
        72,000 bottles/day
        </Typography>
        <Typography>
        Plot No. 5-A (1) at Industrial Area Mehatpur Tehsil, Dist.- Una (H.P.) � 174315.
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/ru8ffizzsdq39l1zcxfp"
        alt="nature image"
      />
    </div>
</div>
<Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
Manufacturing Process
        </Typography>
        <div class="grid grid-cols-[1fr,20em] gap-4">
    <div class="space-y-4">
    <Typography>
        Water drawn from bore wells is stored in an underground reservoir and pumped to the state of the art water treatment plant.
        </Typography>
        <Typography>
        The plant technology employs eight stages purification processes capable of yielding water quality conforming to BIS standard IS 14543-2004.
        </Typography>
        <Typography>
            1. Activated Carbon Filter; Stage 1 & 2 – Stage 1 removes dust, dead microbes, odour/colour and stage 2 is for removing pesticides.
        </Typography>
        <Typography>
            2. Auto Softener Unit (ASF) - Hardness of water is removed by ion exchange.
        </Typography>
        <Typography>
            3. Ultra Filtration Unit (0.001 micron membrane)–Colloidal, suspended particles and pyrogenic species are filtered out through Ultra Filtration membranes.
        </Typography>
        <Typography>
            4. Reverse Osmosis (membrane 0.0001 micron) –All dissolved impurities are removed. Anti scaling agent not used. (All competitors use it to enhances membrane life)
        </Typography>
        <Typography>
            5. Marble chip filter- To boost "pH". Exclusive process adopted by Rail Neer.
        </Typography>
        <Typography>
            6. Two stage Micron Filters (first membrane 1 micron followed by 0.2 micron)- Impurities with size more than 0.2 micron are filtered out.
        </Typography>
        <Typography>
            7. Ultra Violet Sterilizer Unit- UV-light causes change in the genetic material of micro organisms and thus prevents them from reproducing.
        </Typography>
        <Typography>
            8. Ozonising Unit- Water comes in contact with ozone gas for final disinfection from the micro organisms. The nascent oxygen is powerful oxidising agent and kills the microbes.
        </Typography>
      </div>
    <div class="space-y-4">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/ilv0fmdg6zfpjurkw3dh"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/rmwgur60uyuafqxmvfkd"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/a0jjs9yguv6nw8cprmfa"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
</div>
<Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
Automatic Bottle Blowing Machine
        </Typography>
        <div class="grid grid-cols-[1fr,20em] gap-4">
    <div class="space-y-4">
    <Typography>
    Rail Neer bottles are manufactured with automatic blowing machine (Make –M/s Sidel India Ltd) at plant with high grade resin performs. Preforms are made only with Husky/Kraussmaffei/ASB machine.
        </Typography>
      </div>
    <div class="space-y-4">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/ot313vlhj3joq5upykpo"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/ckrbvuc6lqiiejtqio4w"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
</div>
<Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
Automatic Rinsing Filling & Capping Machine
        </Typography>
        <div class="grid grid-cols-[1fr,20em] gap-4">
    <div class="space-y-4">
    <Typography>
    Bottle blown at blowing machine travels through air conveyer to automatic Rinsing Filling & Capping machine where bottles are rinsed in inverted position by very high pressure jet and water is completely drained out as bottle is inverted then it get filled with the help of nozzle and passed to capper where the same get capped. The temperature of filling area is kept at 20 degree centigrade and this area is completely enclosed and restricted area and no one except filling operator is allowed to enter the area.
        </Typography>
        <Typography>
        Rail Neer plants at Danapur, Nangloi, Palur and Ambernath are accredited with ISO: 9001- 2008 quality management system certification. Rail Neer Plant at Ambernath is accredited with 22000:2015 certifications. Rail Neer Packaged Drinking Water has been ranked as top performer by "Consumer Voice" Magazine in 2017
        </Typography>
      </div>
    <div class="space-y-4">
      <img
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/hbu3nuwest9px8zt2sul"
        alt="image 2"
        className="h-full w-full object-cover"
      />
    </div>
</div>
<Typography className="mb-2 p-4 font-bold text-sky-800">
Upcoming Rail Neer Plants
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
          {TABLE_ROWS.map(({ sno, location, capacity, status }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={sno}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {sno}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {location}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {capacity}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {status}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography>
    Rail Neer plants at Danapur, Nangloi, Palur and Ambernath are accredited with ISO: 9001- 2008 quality management system certification. Rail Neer Plant at Ambernath is also accredited with 22000:2015 certification. <span class="font-bold">Rail Neer Packaged Drinking Water has been ranked as top performer by "Consumer Voice" Magazine in 2017.</span>
    </Typography>
    <Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
    Address and contact details of Rail Neer Plants:
        </Typography>
        <Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
        West Zone:
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-sky-800">
        Rail Neer Plant Mandideep, Bhopal
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_2.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_2.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography className="mb-2 p-4 font-bold text-sky-800">
    Rail Neer Plant Sanand, Ahmedabad
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_3.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_3.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography className="mb-2 p-4 font-bold text-sky-800">
    Rail Neer Plant, Nagpur
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_4.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_4.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography className="mb-2 p-4 font-bold text-sky-800">
    Rail Neer Plant, Bhusawal
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_5.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_5.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography className="mb-2 p-4 font-bold text-sky-800">
    Rail Neer Plant, Jabalpur
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_6.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_6.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
    East Zone:
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-sky-800">
        Rail Neer Plant, Sankrail
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_7.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_7.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography className="mb-2 p-4 font-bold text-sky-800">
    Rail Neer Plant, Jagi Road (near Guwahati)
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_8.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_8.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography className="mb-2 p-4 font-bold text-sky-800">
    Rail Neer Plant, Danapur
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_9.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_9.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
    North Zone:
        </Typography>
    <Typography className="mb-2 p-4 font-bold text-sky-800">
    Rail Neer Plant, Nangloi
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_10.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_10.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography className="mb-2 p-4 font-bold text-sky-800">
    Rail Neer Plant, Hapur
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_11.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_11.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography className="mb-2 p-4 font-bold text-sky-800">
    Rail Neer Plant, Mehatpur, Dist.-Una
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_12.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_12.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography className="mb-2 p-4 font-bold text-sky-800">
    Rail Neer Plant, Amethi
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_13.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_13.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
    South Central Zone:
        </Typography>
    <Typography className="mb-2 p-4 font-bold text-sky-800">
    Rail Neer Plant, Bilaspur
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_14.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_14.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography className="mb-2 p-4 bg-slate-200 font-bold text-black">
    South Zone:
        </Typography>
    <Typography className="mb-2 p-4 font-bold text-sky-800">
    Rail Neer Plant,NTPC
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_15.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_15.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography className="mb-2 p-4 font-bold text-sky-800">
    Rail Neer Plant, Bhubaneswar
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_16.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_16.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography className="mb-2 p-4 font-bold text-sky-800">
    Rail Neer Plant, Palur
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_17.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_17.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography className="mb-2 p-4 font-bold text-sky-800">
    Rail Neer Plant, Parassala
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_18.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_18.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography className="mb-2 p-4 font-bold text-sky-800">
    Rail Neer Plant, Vijayawada
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_19.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_19.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <br></br>
    <div class="grid grid-cols-2 gap-4 bg-slate-200">
    <div class="space-y-4">
        <Typography>
        Innovations & Initiatives 
        </Typography>
      </div>
    <div class="space-y-4">
    <div className="flex gap-4 float-right">
      <Button className="flex items-center gap-3 text-black">
        <ArrowDownTrayIcon strokeWidth={2} className="h-5 w-5" /> Download
      </Button>
    </div>
    </div>
</div>
<br></br>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/g8cgjargyxktl6up8mnc"
        alt="nature image"
      />
      <Typography className="mb-2 p-4 font-bold text-sky-800">
      HOSPITALITY AND CATERING BUSINESS OF IRCTC:
        </Typography>
        <div class="place-content-center">
        <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/ev8w6k51vhwljj06onwp"
        alt="nature image"
      />
        </div>
        <Typography className="mb-2 p-4 font-bold text-sky-800">
        IRCTC – A Leading Hospitality and Catering Company
        </Typography>
        <Typography class="font-bold">
        IRCTC is one of the largest hospitality and catering companies of the country with a vast gamut of businesses in hospitality and catering spread over passenger trains, railway stations, station premises and other ancillary business activities.
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-sky-800">
        Mobile Catering Business
        </Typography>
        <div class="grid grid-cols-[20em,1fr] gap-4">
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/m2ubnhqypjh6xm5cgato"
        alt="nature image"
      />
      </div>
    <div class="space-y-4">
    <Typography>
    IRCTC manages the entire on-board catering services of Indian Railways in more than 460 passenger trains with pantry cars that includes Rajdhani trains, Shatabdi trains, Duronto Trains, Gatimaan Express and Mail/Express trains and also in newly introduced passenger trains such as Vande Bharat Express and Tejas Trains. In all the above mentioned trains, the on-board catering services is being provided from the pantry cars.
    </Typography>
    </div>
</div>
<Typography className="mb-2 p-4 font-bold text-black">
Cooked food menu
        </Typography>
        <Typography>
        For cooked food menu option please click the below mentioned link:-
        </Typography>
        <div class="w-max text-left">
  <nav aria-label="breadcrumb">
    <ol class="flex w-full flex-wrap items-center rounded-md bg-blue-gray-50 bg-opacity-60 py-2 px-4">
      <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500">
        <a class="text-sky-800" href="https://menurates.irctc.co.in/">
          <span>http://menurates.irctc.co.in/.</span>
        </a>
      </li>
    </ol>
  </nav>
</div>
<Typography className="mb-2 p-4 font-bold text-sky-800">
Train Side Vending (TSV)
        </Typography>
        <Typography>
        IRCTC also manages Train side vending contracts on Mail/Express and Superfast trains which do not have pantry cars. In Train Side Vending, the on-board vendors take orders from the passengers from menu chart provided. In accordance with the specified order, the vendors collect the food at the nominated ‘meal pick up points’ and then supply it to the passengers.
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-sky-800">
        Re-Designing and Development of Pantry Cars
        </Typography>
        <Typography>
        IRCTC is in the process of re-designing the pantry cars of trains with modern equipments. The redesigned pantry cars of Rajdhani and Duronto Express will be fully air-conditioned LHB coaches equipped with all modern kitchen equipments such as Combi Ovens, Brat Pans, Deep fryers etc. and will have adequate storage facility for dry and perishable items, proper exhaust chimneys, appropriate garbage bins and will also have accommodation for kitchen staff.
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-sky-800">
        Food Plaza
        </Typography>
        <Typography>
        Food Plaza is a multi-cuisine plazas giving a variety of choice for eating. The quality and rates for items of food plazas are market-driven. Food Plazas normally provide multi-cuisine food under one roof, in a relaxed dine-in atmosphere with a good ambience and a common kitchen to provide a wide variety of food items. IRCTC is managing 144 Food Plaza on PAN India basis.
        </Typography>
        <div class="grid grid-cols-2 gap-4">
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/epimdip9x1trhpomkzqg"
        alt="nature image"
      />
      </div>
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/gikabudyvns2dzeivydm"
        alt="nature image"
      />
    </div>
</div>
<Typography className="mb-2 p-4 font-bold text-sky-800">     
Fast food unit
        </Typography>
        <Typography>
        Fast Food Units are major units, where through self-service counters, fast food items are sold. In these outlets, packaged food is served to customers in take-away packets. The quality and rates for items in Fast Food Unit is also market-driven. IRCTC is managing 160 Fast Food Units on PAN India basis.
        </Typography>
        <div class="grid grid-cols-2 gap-4">
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/csv487jux2dznqhpkc33"
        alt="nature image"
      />
      </div>
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/kscagpyhz0lrrx2piwam"
        alt="nature image"
      />
    </div>
</div>
<Typography className="mb-2 p-4 font-bold text-sky-800">     
Refreshment Room
        </Typography>
        <Typography>
        As per Catering Policy-2017, IRCTC has been mandated for management of Refreshment Rooms at A1 & A Category Stations only. Refreshment Room serves snacks and a-la-carte items, standard breakfast, standard meals, Janta Khana as authorized by the Railways. In addition, these units also serve approved brands of packed items such as aerated drinks, Biscuits, Chips, Namkeens, Chocolates and Ready to Eat meals (RTE) and Railneer PDW etc. on MRP basis. IRCTC is managing about 180 Refreshment Rooms at A1 & A Category Stations on PAN India basis.
        </Typography>
        <div class="grid grid-cols-4 gap-4">
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/oohqqq485aauqd0vot0d"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/m7kmduvhhpwydgkeqqne"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/nbxs1tcq1p8p6gdmfdq4"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/vbyyhqncsfuuod8vllew"
        alt="nature image"
      />
      </div>
</div>
<Typography className="mb-2 p-4 font-bold text-sky-800">     
Jan Ahar
        </Typography>
        <Typography>
        As per Catering Policy-2017, IRCTC has been mandated for management of Jan Ahaars at Railway Stations. Jan Ahaar serves Snacks and a-la-carte items, standard breakfast, standard meals, Janta Khana, as authorized by the Railways. In addition, Jan Ahaar also serve approved brands of packed items such as aerated drinks, Biscuits, Chips, Namkeens, Chocolates and Ready to Eat meals (RTE) and Railneer PDW etc. on MRP basis. Jan Ahaar meals comprise a variety of economical regional and local items. IRCTC is managing about 58 Jan Ahaars on PAN India basis.
        </Typography>
        <div class="grid grid-cols-4 gap-4">
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/py7fao3mlw58hh5eym25"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/pmgspamttxsdyqdl6iwo"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/i7m3medzsz4061vvif1t"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/wgaocjaplkf5zigtatsq"
        alt="nature image"
      />
      </div>
</div>
<Typography className="mb-2 p-4 font-bold text-sky-800">     
Cell Kitchen
        </Typography>
        <Typography>
        Cell Kitchens are generally the Mini Base Kitchens which supply food to other catering units, static/mobile, and at the same time can sell food and beverages directly to the passengers. IRCTC is managing 02 Cell kitchens on PAN India. 
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-sky-800">     
        Base Kitchens
        </Typography>
        <div class="grid grid-cols-4 gap-4">
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/bkl8x6nckhejc27ntz1e"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/jjn9yjx9dwebr8rbdvng"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/r89ax2ywa59nvpflpfzl"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/uxdkxyazk64atpcixhuc"
        alt="nature image"
      />
      </div>
</div>
        <Typography>
        Base Kitchen is a catering unit having large cooking and packing facility set up in the vicinity of Railway premises whether inside or outside Railway premises, from where food is prepared and supplied in trains or to the static units. There will be no sale of food directly to the passengers from Base kitchen. In order to provide quality meals to the passengers on trains, these kitchens are provided equipped with modern cooking equipments. These kitchens are also enabled with CCTV camera for monitoring. Further, QR code facilities on meal packets being supplied from Base Kitchens are also implemented progressively. Apart from of this, to ensure quality of food production in kitchens, these kitchens are being covered for quality, hygiene check and food sampling by deploying Food Safety Supervisors (FSS). Presently, there 11 Base Kitchens under IRCTC.
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-sky-800">     
        Executive Lounges
        </Typography>
        <div class="grid grid-cols-4 gap-4">
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/w7go2wzabtd6wkiydt6d"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/othubbipdynhiosamxap"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/cuz7ycbjyhifokehsojh"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/need8hjuzwdzugznaavz"
        alt="nature image"
      />
      </div>
</div>
        <Typography>
        To cater to the demands of the mid-segment and high-end passengers for comfortable place to relax at the railway stations with facilities to dine in a clean environment, IRCTC introduced the concept of Executive Lounge. Based on the concept of airport lounges, IRCTC has already opened 08 Executive Lounges in the Railway Stations at New Delhi (Paharganj Side & Ajmeri Gate side), Agra Cantt, Jaipur, Ahmedabad, Madurai, Sealdah and Varanasi. Besides the spacious environment of the executive lounges, many other facilities is being provided to the passengers at nominal charges such as reclining sofa, meals in buffet service, wi-fi internet services, shower facilities and so on. Presently, IRCTC is managing 8 Executive Lounges on PAN India Basis.
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-sky-800">     
        Retiring Rooms
        </Typography>
        <div class="grid grid-cols-4 gap-4">
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/klfivf61p06cwgskqvzy"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/surwvpybyeqli2swqnrq"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/hyuomrb3ayyaywcqppsj"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-full w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/yx57oebncm6tmitl0gvb"
        alt="nature image"
      />
      </div>
</div>
        <Typography>
        IRCTC is managing Retiring Rooms at major railway stations across the country to improve the accommodation facilities for the travelling public. Presently, IRCTC is managing retiring rooms at Railway Stations on PAN India basis. Presently, IRCTC is managing 23 Retiring Rooms on PAN India basis.
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-sky-800">     
        Rail Yatri Niwas/BNR Hotels:
        </Typography>
        <div class="grid grid-cols-4 gap-4">
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/ubebuqszstiq06osdudv"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/iydcfwennoqdw2gvfytk"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/qhi1ztwyadsacyif9dj8"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-full w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/rvxqtvnavmqjyc034hkn"
        alt="nature image"
      />
      </div>
</div>
<div class="grid grid-cols-4 gap-4">
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/kuinmfwaerlqxjggi384"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/abz569a0jpdnfor8vay2"
        alt="nature image"
      />
      </div>
</div>
        <Typography>
        IRCTC is presently operating two Rail Yatri Niwas at New Delhi and Howrah railway stations and two BNR Hotels at Puri and Ranchi.
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-sky-800">     
        Non-Railway Catering(NRC)
        </Typography>
        <div class="grid grid-cols-4 gap-4">
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/aw0xgtlcldp6lz5dirf8"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/pzfrfmud9fkkbodtb18o"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/kfq2m6lvvfh58cgbofts"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
      <img
        className="h-full w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/q1lcf4x5smbbunquvnua"
        alt="nature image"
      />
      </div>
</div>
        <Typography>
        IRCTC manages various canteens; cafeterias, kiosks etc. located in various Govt. as well as non Govt. offices including institutional catering for provision of hospitality and catering services. The NRC unit serves quality & hygienic breakfast, lunch, dinner, snacks etc. Moreover, IRCTC also undertakes outdoor catering events through these units. IRCTC is managing 7 NRC units on PAN India basis.
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-sky-800">     
        E-Catering Business
        </Typography>
        <div class="grid grid-cols-[1fr,20em] gap-4">
    <div class="space-y-4">
    <Typography>
    E-Catering is the latest addition to the catering and hospitality business of IRCTC through which the company has been able to amalgamate technology with food. This internet based service is an initiative of IRCTC that allows passengers to book food of their choice from partner restaurants and food outlets through a mobile application while travelling on train. Food is being delivered to the passengers on their respective seat/berth. Booking can be done in advance.
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-black">     
        The salient features of E-Catering are:
        </Typography>
        <Typography>
          1. The service is available for passengers travelling on reserved tickets only.
        </Typography><Typography>
          2. Passengers can choose from a range of delicacies which are offered in the app on line.
        </Typography>
        <Typography>
          3. The Menu is set by the service providing restaurants and often as per choice of passengers for bulk orders.
        </Typography>
        <Typography>
          4. At present the e-catering service of IRCTC is available at approximately 300 stations and the company is booking approximately 20,000 meals in a day.
        </Typography>
        <Typography>
          5. Passengers can make payment for the meals ordered by pay on delivery (POD) as well as on line (Prepaid).
        </Typography>
        <Typography>
          6. Passengers can give feedback on e-catering website itself after delivery of order.
        </Typography>

      </div>
    <div class="space-y-4">
      <img
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/ucfouv8ebcpc1sqnaifa"
        alt="image 1"
        className="h-300 w-100 object-cover"
      />
    </div>
</div>
<Typography className="mb-2 p-4 font-bold text-sky-800">     
Ensuring Quality in Hospitality And Catering
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-black">     
        Customer Satisfaction Survey
        </Typography>
        <div class="grid grid-cols-[1fr,60em] gap-4">
    <div class="space-y-4">
    <img
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/e2wzigqyesya1epvyqgw"
        alt="image 1"
        className="h-300 w-100 object-cover"
      />
      </div>
    <div class="space-y-4">
      <Typography>
      IRCTC understands the need of providing clean and hygienic food to the traveling passengers across the length and breadth of the railways. The company conducts Customer satisfaction Surveys through third party professionals and empanelled agencies to gauge the quality of food being served to the traveling passengers. During the year 2018-19, IRCTC conducted customer satisfaction survey in 362 passenger trains and 263 Food Plazas and Fast Food Units to assess the quality of food and extent of customer satisfaction.
      </Typography>
    </div>
</div>
    <Typography className="mb-2 p-4 font-bold text-black">     
    Food Safety Audits
        </Typography>
      <Typography>
      Keeping in view the impact of food safety on public health, IRCTC conducts food safety audits through third party agencies accredited by National Board for Certification Bodies (NABCB).
      </Typography>
      <Typography className="mb-2 p-4 font-bold text-black">     
      Complaint Monitoring and Redressal
        </Typography>
        <Typography>
        IRCTC has developed internet based module of Catering Services Information Management or (E-CSIM) with a dedicated comprehensive portal for its catering businesses called <a href="www.catering.irctc.co.in" class="text-sky-800">www.catering.irctc.co.in</a> launched on 01.04.2019. The module is also being used for online redressal of catering complaints of passengers at stations and on trains. Alternatively a passenger can also give feedback or make complaints against catering services on <span class='font-bold'>‘Rail Madad’</span> module that allows passengers to lodge complaints through mobile app/web platform and enables them to check real-time feedback on the status of redressal of their complaints.
        </Typography>
        <Typography>
        For complaints and feedback, please log on to : -
        </Typography>
        <nav aria-label="breadcrumb">
    <ol class="flex w-full flex-wrap items-center rounded-md bg-blue-gray-50 bg-opacity-60 py-2 px-4">
      <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500">
        <a class="text-sky-800" href="www.catering.irctc.co.in">
          <span>www.catering.irctc.co.in</span>
        </a>
      </li>
    </ol>
  </nav>
  <nav aria-label="breadcrumb">
    <ol class="flex w-full flex-wrap items-center rounded-md bg-blue-gray-50 bg-opacity-60 py-2 px-4">
      <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500">
        <a class="text-sky-800" href="www.railmadad.indianrailways.gov.in">
          <span>www.railmadad.indianrailways.gov.in</span>
        </a>
      </li>
    </ol>
  </nav>
  <Typography className="mb-2 p-4 font-bold text-black">     
  Onboard Monitoring
        </Typography>
        <div class="grid grid-cols-[1fr,60em] gap-4">
    <div class="space-y-4">
    <img
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/tykyvs3cv5md54yl8squ"
        alt="image 1"
        className="h-300 w-100 object-cover"
      />
      </div>
    <div class="space-y-4">
    <Typography>
        IRCTC has deployed its brigade of catering supervisors in most of the passenger trains to closely monitor the on-board catering services. Apart from monitoring, these supervisors have been provided with online feedback devices for taking feedback from passengers to ensure better services.
        </Typography>
    </div>
</div>
<br></br>
<div class="relative">
        <img
            className="h-full w-full contrast-50"
            src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/a9q1aapfkorvvzlumko6"
            alt="nature image" />
          <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Travel and Tourism</h1>
        </div>
      <Typography className="mb-2 p-4 font-bold text-sky-800">     
      Tourism
        </Typography>
        <Typography>
        Railway since time immemorial has been the kaleidoscope of tourist in the country. Considering the vast expanse of the country, Railways in India have been moving carrying domestic as well international visitors.
        </Typography>
        <Typography>
        IRCTC, established in 1999, has been mandated by the Government of India to professionalize and upgrade rail based tourism in the country. Over the last twenty years, IRCTC has been a catalyst in the overall promotion and development of rail tourist across the country.
        </Typography>
          <Typography>
          IRCTC is probably the only organization offering packages ranging from Rs. 900 per day to USD 900 per day.
          </Typography>
          <Typography className="mb-2 p-4 font-bold text-sky-800">     
          Tourism Portal
        </Typography>
        <Typography>
        To facilitate the public at large, IRCTC operates a website <a href="www.irctctourism.com" class="text-orange-700">www.irctctourism.com</a> has a plethora of offerings including Rail based Packages, Hotels, Railway Retiring Rooms to provide the users a One Stop Solution to all their travel needs.
        </Typography>
        <Typography>
        Mobile App –IRCTC Tourism (Android & iOS )
        </Typography>
        <div class="flex gap-4">
        <a href="https://www.facebook.com/IRCTCofficial/">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/qpmwgf4czt25dr1qoofp" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          <a href="https://www.instagram.com/irctc.official/">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/zde722wxqs5dtrejwfxo" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
        </div>
        <Typography className="mb-2 p-4 font-bold text-sky-800">     
        Rail Based Tourism
        </Typography>
        <Typography>
          <span class="font-bold">Rail Tour Packages</span> - IRCTC organizes packages to various destinations for which Indian Railways earmarks seats/berths in trains for the to and fro journey. These packages originate from different parts of the country and offer tours to pilgrim destinations, leisure hubs etc. At present IRCTC operates more than 70 Rail Tour Packages.
        </Typography>
        <Typography className="text-sky-800">
        Bookings of these packages are available on <a href="www.irctctourism.com" class="text-orange-700">www.irctctourism.com</a>
        </Typography>
        <Typography>
          <span class="font-bold">Special Tourist Trains</span> – IRCTC organizes train tours for the budget travelers with fixed departure dates and itineraries. These trains are called Bharat Darshan Trains and Aastha Circuit Trains. In the year 2018-19, 99 trips of Bharat Darshan and Aastha Circuit Trains were operated with more than 50,000 tourists travelling on them.
        </Typography>
        <Typography className="text-sky-800">
        Bookings of these trains are available on <a href="www.irctctourism.com" class="text-orange-700">www.irctctourism.com</a>
        </Typography>
        <Typography>
          <span class="font-bold">Special Interest Trains</span> – IRCTC pioneered special interest tours by trains way back in 2007, with the launch of Buddhist Circuit Tourist Train.
        </Typography>
        <Typography className="text-sky-800">
        Bookings of these trains are available on <a href="www.irctctourism.com" class="text-orange-700">www.irctctourism.com</a>
        </Typography>
        <Typography>
          <span class="font-bold">Buddhist Circuit Tourist Train</span> - Launched in 2007, this train tour covers the important destinations linked to Buddha’s life. A new train with state of art features was inducted in 2018 to provide better facilities to guests. The 7 Nights/8 Days package includes Bodhgaya, Nalanda, Sarnath, Sravasti, Rajgir, Varanasi, Lumbini and Agra.
        </Typography>
        <Typography className="text-sky-800">
        Visit Website : <a href="https://www.irctcbuddhisttrain.com/" class="text-orange-700">Buddhist Circuit Tourist Train</a>
        </Typography>
        <div class="flex gap-4">
        <a href="https://www.facebook.com/buddhisttouristtrain/">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/qpmwgf4czt25dr1qoofp" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          <a href="https://twitter.com/buddhistrain">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/n0bmpmx925uyzbxeyoo7" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          <a href="https://www.youtube.com/channel/UC20DGNXrDWsqZyJ4-xM2zRQ">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/zgfk1jnixzeqhmogwp1v" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          <a href="https://www.instagram.com/buddhistcircuittrain/">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/zde722wxqs5dtrejwfxo" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
        </div>
        <Typography>
          <span class="font-bold">Bharat Gaurav Train</span> – IRCTC operates Bharat Gaurav tourist train having AC III Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India s rich cultural heritage".
        </Typography>
        <Typography className="text-sky-800">
        Visit Website : <a href="https://www.irctctourism.com/tourpacakage_search?searchKey=&tagType=&travelType=Domestic&sector=All&bdar=3" class="text-orange-700">BHARAT GAURAV TRAIN</a>
        </Typography>
        <Typography>
          <span class="font-bold">Maharajas’ Express</span> - Arguably the best luxury train in the world, Maharajas’ Express has been voted as the Leading Luxury Train of the World for 7 years in a row since 2012 by World Travel Awards. The itineraries are an eclectic mix of Indian history, culture and wildlife. The train’s interiors feature the best of contemporary world. Into its 10th year of operation, itineraries of the train have been revamped from season 2019-20 onwards.
        </Typography>
        <Typography className="text-sky-800">
        Visit Website : <a href="https://www.the-maharajas.com/" class="text-orange-700">The Maharajas' Express</a>
        </Typography>
        <div class="flex gap-4">
        <a href="https://www.facebook.com/MaharajasExpressIRCTC">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/qpmwgf4czt25dr1qoofp" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          <a href="https://twitter.com/Maharajas_Exp">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/n0bmpmx925uyzbxeyoo7" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          <a href="https://www.youtube.com/user/TheMaharajasexpress">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/zgfk1jnixzeqhmogwp1v" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          <a href="https://www.instagram.com/maharajas_express/">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/zde722wxqs5dtrejwfxo" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
        </div>
        <Typography>
          <span class="font-bold">Golden Chariot Train</span> - IRCTC took over the marketing and operations of Golden Chariot Luxury Train from Karnataka State Tourism Development Corporation Limited in January 2020 for a period of 10 years. The Golden Chariot is a window to the soul of South India, offering a perfect blend of religion, culture, nature and adventure, through three well curated itineraries covering destinations in Karnataka, Tamil Nadu, Kerala and Goa.
        </Typography>
        <Typography className="text-sky-800">
        Visit Website : <a href="https://www.goldenchariot.org/" class="text-orange-700">The Golden chariot</a>
        </Typography>
        <div class="flex gap-4">
        <a href="https://www.facebook.com/goldenchariotofficial">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/qpmwgf4czt25dr1qoofp" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          <a href="https://twitter.com/GoldenChariotIR">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/n0bmpmx925uyzbxeyoo7" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          <a href="https://www.youtube.com/user/goldenchariotofficial/">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/zgfk1jnixzeqhmogwp1v" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          <a href="https://www.instagram.com/UCg6MEK9jPpbyH6w4lthDQkA/">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/zde722wxqs5dtrejwfxo" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
        </div>
        <Typography>
          <span class="font-bold">Train, Coach and Saloon Charters</span> - IRCTC launched the online booking module of trains, coaches and saloons on Charter Basis in 2018. Groups, Families and Corporate Houses can now book full trains on their desired routes or exclusive coaches and saloons to be attached to regular trains through this online module.
        </Typography>
        <a href="https://www.ftr.irctc.co.in/ftr/" class="text-orange-700">Visit website</a>
        <Typography className="mb-2 p-4 font-bold text-sky-800">     
        Air Packages
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-sky-800">     
        1. Domestic Air Packages
        </Typography>
        <Typography>
        IRCTC provides domestic tour packages by Air in 2015, which is inclusive of flight tickets, accommodation, all transfers & sightseeing, meals. These packages originate from different parts of the country and offer tours to various destinations.
        </Typography>
        <Typography className="text-sky-800">
        Bookings of these trains are available on <a href="www.irctctourism.com" class="text-orange-700">www.irctctourism.com</a>
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-sky-800">     
        2. International Packages
        </Typography>
        <Typography>
        IRCTC has took a major step to conquer Outbound travel market by introducing popular travel destination with competitive price and un-beatable service. IRCTC Tour manager escorts the tour to ensure proper services reaches every passenger.
        </Typography>
        <Typography>
        IRCTC has been offering popular foreign tour packages to destination like Dubai, Thailand, Singapore & Malaysia, Srilanka, Russia, Australia, USA, China, Europe, Hong Kong & Macau, Nepal, Dubai etc.
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-sky-800">     
        3. Land Packages
        </Typography>
        <Typography>
        IRCTC provides the Land Tour Packages or Holiday packages which is an unique product of IRCTC . Land Packages are designed, keeping in view of customers interest for sight seeing, to visit famous Temples for Darshan etc. It includes pick up and drop by AC/ Non AC road transport from station/ Airport , Travel Insurance , sight seeing, accommodation is also included.
        </Typography>
        <Typography className="text-sky-800">
        Bookings of these trains are available on <a href="www.irctctourism.com" class="text-orange-700">www.irctctourism.com</a>
        </Typography>
        <Typography>
        Mobile App –IRCTC Tourism (Android & iOS)
        </Typography>
        <Typography className="mb-2 p-4 font-bold text-sky-800">     
        Accommodation
        </Typography>
        <Typography>
        IRCTC offers a wide range of accommodation options ranging from short layovers to long stays at a large number of locations.
        </Typography>
        <Typography className="text-sky-800">
        <span class="font-bold">IRCTC Hotels</span> offers wide ranging hotel booking option to suit all budget needs.
        </Typography>
        <Typography className="text-sky-800">
        Visit Website : <a href="https://hotel.irctctourism.com/" class="text-orange-700">IRCTC Hotels</a>
        </Typography>
        <Typography>
        Mobile App –IRCTC Tourism (Android & iOS)
        </Typography>
        <div class="flex gap-4">
        <a href="https://www.facebook.com/IRCTCofficial/">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/qpmwgf4czt25dr1qoofp" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          <a href="https://www.instagram.com/irctc.official/">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/zde722wxqs5dtrejwfxo" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
        </div>
        <Typography>
          <span class="font-bold">Railway Retiring Rooms</span> – IRCTC is taking over the operations and maintenance of Railway Retiring Rooms at various Railway Stations. Booking of these Retiring Rooms is available online and through the.
        </Typography>
        <Typography>
        <a href="https://www.rr.irctctourism.com/" class="text-orange-700">Visit website</a>
        </Typography>
        <Typography>
        Mobile App –IRCTC Tourism (Android & iOS)
        </Typography>
        <div class="flex gap-4">
        <a href="https://www.facebook.com/irctc.tourism">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/qpmwgf4czt25dr1qoofp" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          <a href="https://www.instagram.com/irctctourism/">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/zde722wxqs5dtrejwfxo" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
        </div>
        <Typography className="mb-2 p-4 font-bold text-sky-800">     
        Air Ticketing
        </Typography>
        <Typography>
        IRCTC Ltd. a PSU under the aegis of Ministry of Railways, is an IATA qualified agency and has been into air ticketing business since 2010. Air tickets can be booked on IRCTC’s dedicated web portal www.air.irctc.co.in for Domestic and International tickets for almost all airlines from anywhere in the world. IRCTC charges only INR 100+GST- as convenience fee Issuing tickets from web portal which is not only the most economical and lowest in the industry but also ,this is the only portal that offers travel insurance worth upto 50 Lakh at zero cost on flight tickets booked through our website.
        </Typography>
        <Typography>
        IRCTC Air Portal has multicity option for both domestic and International sectors. Booking through the portal is very easy and convenient with 50 + multiple payment gateway options to choose from. IRCTC boosts of speedy E-Commerce network that handles 15-18 million transactions per day. As a step towards promoting digitalization initiative of Government of India, IRCTC has introduced user friendly E- Mobile App - IRCTC Air for Android and IOS users.
        </Typography>
        <Typography>
        IRCTC Ltd. has been nominated by Ministry of Finance, Government of India, to issue tickets in government account and has tied up with various PSUs, Ministries and Government departments for Corporate Travel requirements by taking care of their travel needs. IRCTC has been authorised by Ministry of Finance, to issue LTC by Air tickets for employees of Govt. of India and selected PSUs. IRCTC offers attractive fares for group bookings for 10+ passengers.
        </Typography>
        <Typography className="text-sky-800">
        Visit Website : <a href="https://www.air.irctc.co.in/" class="text-orange-700">Air Ticketing Portal</a>
        </Typography>
        <div class="flex gap-4">
        <a href="https://www.facebook.com/IRCTCofficial/">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/qpmwgf4czt25dr1qoofp" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          <a href="https://www.instagram.com/irctcoffc/">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/zde722wxqs5dtrejwfxo" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
        </div>
        <Typography className="mb-2 p-4 font-bold text-sky-800">     
        Bus Ticketing
        </Typography>
        <Typography>
        IRCTC provides Bus bookings for interstate travel within India. It is an intiative take to facilitate multi modal facility to the IRCTC customer with both private and state transport bus availability on the website and mobile apps. Thus IRCTCnow has all three modes of transport viz. Rail, Air and Bus on its online platform, making it a one stop solution for the customer’s travel needs.
        </Typography>
        <Typography className="text-sky-800">
        Visit Website : <a href="https://www.bus.irctc.co.in/" class="text-orange-700">Bus Ticketing Portal</a>
        </Typography>
        <Typography>
        Mobile App –IRCTC Tourism (Android & iOS )
        </Typography>
        <div class="flex gap-4">
        <a href="https://www.facebook.com/IRCTCofficial/">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/qpmwgf4czt25dr1qoofp" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          <a href="https://www.instagram.com/irctcoffc/">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/zde722wxqs5dtrejwfxo" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
        </div>
        <Typography className="mb-2 p-4 font-bold text-sky-800">     
        Cruise Bookings
        </Typography>
        <Typography>
        RCTC has ventured into Domestic and International Cruise Business targeting Domestic market including potential Outbound guests. The products are designed with complete service, hospitality and maintaining the best quality in the tourism industry.
        </Typography>
        <Typography className="text-sky-800">
        Visit Website : <a href="https://irctctourism.com/cruise" class="text-orange-700">Cruise Bookings</a>
        </Typography>
        <Typography className="text-sky-800">
        Visit Website : <a href="https://irctc.com/our-business-tourism.html" class="text-orange-700">Travel and Tourism</a>
        </Typography>
        <div class="flex gap-4">
        <a href="https://www.facebook.com/IRCTCofficial/">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/qpmwgf4czt25dr1qoofp" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          <a href="https://www.instagram.com/irctcoffc/">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/zde722wxqs5dtrejwfxo" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
        </div>
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
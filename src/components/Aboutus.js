import React from "react";
import {
    Typography,
    List,
    ListItem,
    Card
  } from "@material-tailwind/react";
  const TABLE_HEAD = ["Sno", "name", "Designation", "ContactNumber","Email","Photograph"];

  const TABLE_HEAD_2 = ["S.no", "Name", "Designation/Department", "Telephone","Email ID"];
 
  const TABLE_ROWS = [
    {
      Sno: "1",
      name: "Smt. Seema Kumar",
      Designation: "Chairman & Managing Director (Additional Charge)",
      ContactNumber: "011-23311261",
      Email: "cmd@irctc.com",
      Photograph: <img
                    className="h-40 w-35"
                    src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/xg8grlvv7to0gqzfqock"
                    alt="nature image" />
    },
    {
      Sno: "2",
      name: "Sh. K.K. Mishra",
      Designation: "Director (Tourism and Marketing)(Additional Charge)",
      ContactNumber: "011-23311258",
      Email: "dtm@irctc.com",
      Photograph: <img
                    className="h-40 w-35"
                    src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/ez1pjwqb83ldw41073xd"
                    alt="nature image" />
    },
      {
        Sno: "3",
        name: "Shri. Ajit Kumar",
        Designation: "Director (Finance)& CFO",
        ContactNumber: "011-23318273",
        Email: "df@irctc.com",
        Photograph: <img
                      className="h-40 w-35"
                      src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/cvazyoh1nyzmnp0dz5qn"
                      alt="nature image" />
      },
      {
        Sno: "4",
        name: "Dr. Lokiah RaviKumar",
        Designation: "Director (Catering and Services)",
        ContactNumber: "011-23311257",
        Email: "dcs@irctc.com",
        Photograph: <img
                      className="h-40 w-35"
                      src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/xcrsgiapmbyjnwpclooa"
                      alt="nature image" />
      },
      {
        Sno: "5",
        name: "Shri. Neeraj Sharma",
        Designation: "	Government Director",
        ContactNumber: "011-47845352",
        Email: "m.gangeya@gov.in",
        Photograph: <img
                      className="h-40 w-35"
                      src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/bwwlj0bpxscx6hvg1wbc"
                      alt="nature image" />
      },
      {
        Sno: "6",
        name: "	Shri Manoj Kumar Gangeya",
        Designation: "Director (Tourism and Marketing)(Additional Charge)",
        ContactNumber: "011-23311258",
        Email: "dtm@irctc.com",
        Photograph: <img
                      className="h-40 w-35"
                      src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/qdg0yb8bdkbrhwjypgac"
                      alt="nature image" />
      },
      {
        Sno: "7",
        name: "Shri. Vinay Kumar Sharma",
        Designation: "	Independent Director",
        ContactNumber: "8370006170",
        Email: "id.sharmavinaykumar@gmail.com",
        Photograph: <img
                      className="h-40 w-35"
                      src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/fwl5tj0of731vmkdpl0u"
                      alt="nature image" />
      },
      {
        Sno: "8",
        name: "Shri. Namgyal Wangchuk",
        Designation: "Independent Director",
        ContactNumber: "9797345637",
        Email: "namgyalwangchuk04@gmail.com",
        Photograph: <img
                      className="h-40 w-35"
                      src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/t6xf8y5vkglfesc9hcul"
                      alt="nature image" />
      },
      {
        Sno: "9",
        name: "Shri. Devendra Pal Bharti",
        Designation: "Independent Director",
        ContactNumber: "	9412427391",
        Email: "dpbhartiadv@gmail.com",
        Photograph: <img
                      className="h-40 w-35"
                      src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/n0epypcnuunvz2hvog8a"
                      alt="nature image" />
      },
  ];

  const TABLE_ROWS_2 = [
    {
      sno: "1",
      name: "Smt. Seema Kumar",
      des_dep: "Chairman & Managing Director (Additional Charge)",
      telephone: "011-23311261",
      email: "cmd@irctc.com"
    },
    {
      sno: "2",
      name: "Sh. Ajit Kumar",
      des_dep: "Director (Finance)",
      telephone: "011-23318273",
      email: "df@irctc.com"
    },
    {
      sno: "3",
      name: "Dr. Lokiah RaviKumar",
      des_dep: "Director (Catering Services)",
      telephone: "011-23311257",
      email: "dcs@irctc.com"
    },
    {
      sno: "4",
      name: "Sh. K. K. Mishra",
      des_dep: "Director (Tourism and Marketing)",
      telephone: "011-23311258",
      email: "dtm@irctc.com"
    },
    {
      sno: "5",
      name: "Dr. Parag Agrawal",
      des_dep: "Chief Vigilance Officer",
      telephone: "011-23318231",
      email: "cvo@irctc.com"
    },
    {
      sno: "6",
      name: "Sh. Sunil Kumar",
      des_dep: "Group General Manager (Internet Ticketing)",
      telephone: "011-23741116",
      email: "ggmit@irctc.com"
    },
    {
      sno: "7",
      name: "Smt. Rashmi Gautam",
      des_dep: "Group General Manager (Mobile Catering Services)",
      telephone: "011-",
      email: "ggmmcs@irctc.com"
    },
    {
      sno: "8",
      name: "Sh. Tanweer Hasan",
      des_dep: "Group General Manager (Tourism)",
      telephone: "011-",
      email: "ggmtourism@irctc.com"
    },
    {
      sno: "9",
      name: "Sh. Awdesh Kumar",
      des_dep: "Group General Manager (Services)",
      telephone: "011-47537247",
      email: "ggmservices@irctc.com"
    },
    {
      sno: "10",
      name: "Sh. Gaisingam Kabui",
      des_dep: "Group General Manager (Finance)",
      telephone: "011-23718729",
      email: "ggmfin2@irctc.com"
    },
    {
      sno: "11",
      name: "Sh. Sandip Trivedi",
      des_dep: "Group General Manager (HRD)",
      telephone: "011-23701238",
      email: "ggmhrd@irctc.com"
    },
    {
      sno: "12",
      name: "Sh. Sudheesh V.C",
      des_dep: "Group General Manager (IT-2)",
      telephone: "011-23741115",
      email: "ggmit2@irctc.com"
    },
    {
      sno: "13",
      name: "Sh. Sanjay Priyadarshnam",
      des_dep: "Group General Manager (Railneer Projects)",
      telephone: "011-",
      email: "ggmrailneer@irctc.com"
    },
    {
      sno: "14",
      name: "Sh. Vinay Kumar Pathak",
      des_dep: "Group General Manager (Procurement & Tendering)",
      telephone: "011-",
      email: "ggmprocurement@irctc.com"
    },
    {
      sno: "15",
      name: "Sh. Vinay Kumar Pathak",
      des_dep: "Group General Manager (Additional charge Infrastructure)",
      telephone: "011-",
      email: ""
    },
    {
      sno: "16",
      name: "Sh. Rajesh Rana",
      des_dep: "General Manager (Mobile Catering Services)",
      telephone: "011-23311264",
      email: "rrana2473@irctc.com"
    },
    {
      sno: "17",
      name: "Sh. Sudhir Warrier",
      des_dep: "General Manager (Other Catering Services)",
      telephone: "011-23318462",
      email: "swarrier@irctc.com"
    },
    {
      sno: "18",
      name: "Smt. Suman Kalra",
      des_dep: "Company Secretary",
      telephone: "011-23327746",
      email: "companysecretary@irctc.com"
    },
    {
      sno: "19",
      name: "Shri Pradeep Kumar Dhiman",
      des_dep: "General Manager (Tourism)",
      telephone: "011-",
      email: "pdhiman4802@irctc.com"
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

export default function Aboutus() {
    return (
      <>
     <img
            className="h-full w-full"
            src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/dwcshi73jljbagbwi0jc"
            alt="nature image" />
            <Typography className="mb-2 p-4 font-bold text-sky-800">
          About Us
        </Typography>
            <Typography>
            Indian Railway Catering and Tourism Corporation Ltd. (IRCTC) is a “Mini Ratna (Category-I)” Central Public Sector Enterprise under Ministry of Railways, Government of India. IRCTC was incorporated on 27th September, 1999 as an extended arm of the Indian Railways to upgrade, professionalize and manage the catering and hospitality services at stations, on trains and other locations and to promote domestic and international tourism through development of budget hotels, special tour packages, information & commercial publicity and global reservation systems. The authorized capital of the company is 250 crores and paid up capital is 160 crores. It’s registered and Corporate Office is situated at New Delhi.
            </Typography>
            <Typography className="mb-2 p-4 font-bold text-sky-800">
            The core activities of the Company are detailed below:
        </Typography>
        <List
            sx={{
                listStyleType: 'disc',
                listStylePosition: 'inside'
            }}
            >
            <ListItem sx={{ display: 'list-item' }}>1. Catering & Hospitality</ListItem>
            <ListItem sx={{ display: 'list-item' }}>2. Internet Ticketing</ListItem>
            <ListItem sx={{ display: 'list-item' }}>3. Travel &Tourism</ListItem>
            <ListItem sx={{ display: 'list-item' }}>4. Packaged Drinking Water (Rail Neer)</ListItem>
        </List>
        <Typography className="mb-2 p-4 font-bold text-sky-800">
            At present, the Company operates through:
        </Typography>
        <List cl
            sx={{
                listStyleType: 'disc',
                listStylePosition: 'inside'
            }}
            >
            <ListItem sx={{ display: 'list-item' }}>1. Fourteen Rail Neer Plants at Nangloi-Delhi, Danapur-Bihar, Palur-Tamil Nadu, Ambernath-Maharashtra, Amethi (Uttar Pradesh), Parassala-, Tamil Nadu, Bilaspur (Chhatisgarh) Hapur (Uttar Pradedh), Sanand- Gujaratd, Mandideep-Madhya Pradesh, Jagiroad-Assam, Maneri-(Madhya Pradesh), Nagpur, (Maharashtra) and Sankrail-Kolkatta</ListItem>
            <ListItem sx={{ display: 'list-item' }}>2. Eleven Base Kitchens at located at New Delhi, Howrah, Ahmedabad, Patna, Mumbai Central, Mumbai CST, Ballarshah, Nagpur, Balasore, Sealdah and Kharagpur Jn 5 Zonal Offices, namely, New Delhi, Mumbai, Kolkata, Chennai, Secundrabad</ListItem>
            <ListItem sx={{ display: 'list-item' }}>3. Five Zonal Offices at New Delhi, Mumbai, Kolkata, Chennai & Secundrabad</ListItem>
            <ListItem sx={{ display: 'list-item' }}>4. Ten Regional Offices at Lucknow, Chandigarh, Jaipur, Bhopal, Ahmadabad, Guwahati, Bhubaneswar, Patna, Ernakulam and Bangalore</ListItem>
            <ListItem sx={{ display: 'list-item' }}>5. One Internet Ticketing Office at New Delhi</ListItem>
            <ListItem sx={{ display: 'list-item' }}>6. One Tourism office at New Delhi.</ListItem>
        </List>
        <div class="relative">
        <img
            className="h-full w-full contrast-50"
            src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/zu5fakgnccxn0djisvx3"
            alt="nature image" />
          <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Board of Directors</h1>
        </div>
        <Typography className="mb-2 p-4 font-bold text-sky-800">
            Board of Directors
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
          {TABLE_ROWS.map(({ Sno,name, Designation,ContactNumber, Email ,Photograph}, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {Sno}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {Designation}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {ContactNumber}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {Email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {Photograph}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <div class="relative">
        <img
            className="h-full w-full contrast-50"
            src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/qmkufdbjmrccukxo3mko"
            alt="nature image" />
          <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Key Executives</h1>
        </div>
        <Typography className="mb-2 p-4 font-bold text-sky-800">
            Key Executives
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD_2.map((head) => (
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
          {TABLE_ROWS_2.map(({ sno, name, des_dep, telephone, email }, index) => {
            const isLast = index === TABLE_ROWS_2.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {sno}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {des_dep}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {telephone}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {email}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <div class="relative">
        <img
            className="h-full w-full contrast-50"
            src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/wysliyhwyrx3sc7n6qzb"
            alt="nature image" />
          <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          ORGANIZATION STRUCTURE OF IRCTC MANAGEMENT
            </h1>
        </div>
          <Typography className="mb-2 p-4 font-bold text-sky-800">
            ORGANIZATION STRUCRUTE OF IRCTC MANAGEMENT
        </Typography>
        <img
            className="h-full w-full"
            src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/x7rs4vczwjda043xjh7x"
            alt="nature image" />
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
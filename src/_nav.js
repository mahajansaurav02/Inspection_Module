import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilDescription, cilSpeedometer, cilWindowMaximize, cilSpreadsheet, cilFlip, cilZoom, cilLowVision } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { layouts } from 'chart.js'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  {
    component: CNavTitle,
    name: 'Module',
  },
  {
    component: CNavGroup,
    // name: 'Inspection Module', // to: '/Masters',
    name: 'निरीक्षण मॉड्यूल', // to: '/Masters',
    // name: 'संक्षिप्त दफ्तर तपासणी(online)', // to: '/Masters',
    icon: <CIcon icon={cilWindowMaximize} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        // name: 'Online', // to: '/Mandal_Office/DataEntryForm', // to: '/inspection-module/check-inspection-online',
        name: 'संक्षिप्त दफ्तर तपासणी(online)', // to: '/Mandal_Office/DataEntryForm', // to: '/inspection-module/check-inspection-online',
        icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            // name: 'Inspection Check Online',
            name: 'ऑनलाइन तपासणी',
            to: '/inspection-module/check-inspection-online',
            // icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
          },

          // {
          //   component: CNavItem,
          //   name: 'मागणी निचीती',
          //   to: '/inspection-module/inspection-online',
          //   // icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
          // },
          // {
          //   component: CNavItem,
          //   name: 'गाव नमुने',
          //   to: '/inspection-module/inspection-online',
          //   // icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
          // },
          // {
          //   component: CNavItem,
          //   name: 'ई - फेरफार',
          //   to: '/inspection-module/inspection-online',
          //   // icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
          // },
        ],
      },
      {
        component: CNavGroup,
        // name: 'Offline', // to: '/Mandal_Office/DataEntryForm', // to: '/inspection-module/inspection-online/InspectionOnline',
        // name: 'तलाठी दफ्तर (अ-ऑडिट) तपासणी(offline)', // to: '/Mandal_Office/DataEntryForm', // to: '/inspection-module/inspection-online/InspectionOnline',
        name: 'तलाठी दफ्तर (अ-ऑडिट) तपासणी(offline)', // to: '/Mandal_Office/DataEntryForm', // to: '/inspection-module/inspection-online/InspectionOnline',
        icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            // name: 'Inspection Check Offline',
            name: 'ऑफलाइन तपासणी',
            to: '/inspection-module/check-inspection-offline',
            icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
          },
          // {
          //   component: CNavItem,
          //   name: 'Inspection Offline',
          //   to: '/inspection-module/inspection-offline',
          //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
          // },
        ],
      },
      {
        component: CNavItem,
        name: 'फेरफार नोंदवाहि  तपासणी',
        to: '/inspection-module/ferfarNondvahi/ferfarNondwahiSection1',
        icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'ई-हक्क प्रणाली कामकाज तपासणी (Online)',
        to: '/inspection-module/e-hakka-kamkaj-tapasani/eHakkaSection',
        icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'ODC अहवाल तपासणी (Online)',
        to: '/inspection-module/ODC-ahval-tapasani/odcAhvalTapasani',
        icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
        // layout:false
      },
      {
        component: CNavItem,
        name: 'ई-चावडी कामकाज तपासणी ',
        to: '/inspection-module/E-chawadi-kamkaj-tapasani/EChawadiKamkajTap',
        icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
        // layout:false
      },
      // {
      //   component: CNavItem,
      //   name: 'मागणी निचीती',
      //   to: '/inspection-module/inspection-online',
      //   // icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'गाव नमुने',
      //   to: '/inspection-module/inspection-online',
      //   // icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'ई - फेरफार',
      //   to: '/inspection-module/inspection-online',
      //   // icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
      // },
    ],
  },
  //----------------------------------------------------OCR----------------------------------
  // {
  //   component: CNavGroup,
  //   name: 'OCR Trial',
  //   to: '/ocr',
  //   icon: <CIcon icon={cilFlip} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'GR Registration',
  //       to: '/ocr/gr-information',
  //       icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'RRRF Search',
  //       to: '/ocr/rrrf-search',
  //       icon: <CIcon icon={cilZoom} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Compare Documents',
  //       to: '/ocr/compare-documents',
  //       icon: <CIcon icon={cilLowVision} customClassName="nav-icon" />,
  //     },
  //   ],
  // },

  //-------------------------------------------Mandal Office----------------------------------
  // {
  //   component: CNavGroup,
  //   // name: 'Circular Form',
  //   name: 'मंडळ नमुने',
  //   to: '/Mandal_Office',
  //   // icon: <CIcon icon={cilFlip} customClassName="nav-icon" />,
  //   icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavGroup,
  //       // name: 'Data Entry',
  //       name: 'माहिती भरणे',
  //       to: '/Mandal_Office/DataEntryForm',
  //       // icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //       icon: <CIcon icon={cilListRich} customClassName="nav-icon" />,

  //       items: [
  //         // {
  //         //   component: CNavItem,
  //         //   name: 'CircularDataentryForm1',
  //         //   to: '/Mandal_Office/DataEntryForm/CircularDataentryForm1',
  //         //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         // },
  //         {
  //           component: CNavItem,
  //           name: 'मंडळ नमुने १',
  //           to: '/Mandal_Office/DataEntryForm/CircularVillageForm1',
  //           icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         },
  //       ],
  //     },
  //     {
  //       component: CNavGroup,
  //       // name: 'Reports',
  //       name: 'अहवाल',
  //       to: '/Mandal_Office/Reports',
  //       icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //       items: [
  //         {
  //           component: CNavItem,
  //           // name: 'circular-form-1',
  //           // name: 'मंडळ नमूना १ अहवाल',
  //           name: 'मं.न. १ अहवाल',
  //           to: '/Mandal_Office/circular-form-1',
  //           icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         },
  //         {
  //           component: CNavItem,
  //           // name: 'circular-form-2',
  //           name: 'मं.न. २ अहवाल',
  //           to: '/Mandal_Office/circular-form-2',
  //           icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         },
  //         {
  //           component: CNavItem,
  //           // name: 'circular-form-3',
  //           name: 'मं.न. ३ अहवाल',
  //           to: '/Mandal_Office/circular-form-3',
  //           icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         },
  //         {
  //           component: CNavItem,
  //           // name: 'circular-form-5',
  //           name: 'मं.न. ४ अहवाल',
  //           to: '/Mandal_Office/circular-form-5',
  //           icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         },
  //         {
  //           component: CNavItem,
  //           // name: 'circular-form-8',
  //           name: 'मं.न. ५ अहवाल',
  //           to: '/Mandal_Office/circular-form-8',
  //           icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         },
  //         {
  //           component: CNavItem,
  //           // name: 'circular-form-9',
  //           name: 'मं.न. ६ अहवाल',
  //           to: '/Mandal_Office/circular-form-9',
  //           icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         },
  //         {
  //           component: CNavItem,
  //           name: 'मं.न. ७. अहवाल',
  //           to: '/Mandal_Office/circular-form-10',
  //           icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         },
  //       ],
  //     },
  //   ],
  // },
  //-------------------------------------------Taluka Office----------------------------------
  // {
  //   component: CNavGroup,
  //   name: 'Taluka Form',
  //   to: '/Mandal_Office',
  //   // icon: <CIcon icon={cilFlip} customClassName="nav-icon" />,
  //   icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Dataentry',
  //       to: '/Mandal_Office/DataEntryForm',
  //       icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //       items: [
  //         {
  //           component: CNavItem,
  //           name: 'Taluka-form-1',
  //           to: '/Mandal_Office/DataEntryForm/circular-form-1.js',
  //           icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         },
  //       ],
  //     },
  //   ],
  // },
]

export default _nav

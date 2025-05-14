import {
  TbFileAnalytics,
  TbBuildingBank,
  TbReportAnalytics,
  TbCoins,
  TbArrowsExchange,
  TbLayoutDashboard,
  TbArchive,
  TbFileInvoice,
  TbChartPie,
} from "react-icons/tb";
import {
  MdArchive,
  MdGroups,
  MdPayments,
  MdSavings,
  MdOutlineAttachMoney,
  MdOutlineInventory,
  MdSupportAgent,
  MdEmail,
  MdOutlinePayments,
  MdOutlineSavings,
  MdOutlineEmail,
} from "react-icons/md";
import {
  FaMoneyBillWave,
  FaFileInvoiceDollar,
  FaChartPie,
} from "react-icons/fa";
import { AiOutlineAudit } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { HiOutlineMail } from "react-icons/hi";

export const primaryNavItems = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: TbLayoutDashboard,
  },
  {
    name: "Members",
    link: "/members",
    icon: FiUsers,
  },
  {
    name: "Transactions",
    link: "/transactions",
    icon: TbArrowsExchange,
  },
  {
    name: "Reports",
    link: "/reports",
    icon: TbReportAnalytics,
  },
];

export const secondaryNavItems = [
  {
    name: "Collection",
    link: "/collection",
    icon: TbArchive,
  },
  {
    name: "Loans",
    link: "/loans",
    icon: LiaMoneyBillWaveSolid ,
  },
  {
    name: "Repayment",
    link: "/repayment",
    icon: MdOutlinePayments,
  },
  {
    name: "Dividend",
    link: "/dividend",
    icon: MdOutlineSavings,
  },
  {
    name: "Shares",
    link: "/shares",
    icon: TbCoins,
  },
  {
    name: "Commodity",
    link: "/commodity",
    icon: MdOutlineInventory,
  },
  {
    name: "Mortgage",
    link: "/mortgage",
    icon: TbBuildingBank,
  },
  {
    name: "Income",
    link: "/income",
    icon: MdOutlineAttachMoney,
  },
  {
    name: "Expenses",
    link: "/expenses",
    icon: TbFileInvoice,
  },
  {
    name: "Assets",
    link: "/assests",
    icon: TbFileAnalytics,
  },
  {
    name: "Accounting",
    link: "/accounting",
    icon: TbChartPie,
  },
  {
    name: "SMS",
    link: "/sms",
    icon: HiOutlineMail ,
  },
  {
    name: "Group Email",
    link: "/group-email",
    icon: HiOutlineMail,
  },
  {
    name: "Support",
    link: "/support",
    icon: MdSupportAgent,
  },
  {
    name: "Audit Log",
    link: "/audit-log",
    icon: AiOutlineAudit,
  },
];

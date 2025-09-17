import {
  TbFileAnalytics,
  TbBuildingBank,
  TbCoins,
  TbLayoutDashboard,
  TbFileInvoice,
  TbChartPie,
} from "react-icons/tb";
import {
  MdOutlineAttachMoney,
  MdOutlineInventory,
  MdSupportAgent,
  MdOutlinePayments,
  MdOutlineSavings,
} from "react-icons/md";
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
];

export const secondaryNavItems = [
  {
    name: "Tasks",
    link: "/tasks",
    icon: FiUsers,
    sub_members: [
      {
        name: "View Tasks",
        link: "/tasks",
      },
      {
        name: "Task Requests",
        link: "/tasks/task_requests",
      },
    ],
  },
  {
    name: "Meeting Feedbacks",
    link: "/meeting-feedbacks",
    icon: LiaMoneyBillWaveSolid,
    sub_members: [
      {
        name: "All Feedbacks",
        link: "/meeting-feedbacks",
      },
      {
        name: "Pending Feedbacks",
        link: "/meeting-feedbacks/feedback",
      },
    ],
  },
  {
    name: "Announcements",
    link: "/announcements",
    icon: MdOutlinePayments,
  },
  // {
  //   name: "Accounts",
  //   link: "/accounts",
  //   icon: MdOutlineSavings,
  //   sub_members: [
  //     {
  //       name: "All Accounts",
  //       link: "/accounts",
  //     },
  //     {
  //       name: "Account Types",
  //       link: "/accounts/savings_products",
  //     },
  //   ],
  // },
  // {
  //   name: "Deposit",
  //   link: "/shares",
  //   icon: TbCoins,
  // },
  // {
  //   name: "Commodity",
  //   link: "/commodity",
  //   icon: MdOutlineInventory,
  // },
  // {
  //   name: "Mortgage",
  //   link: "/mortgage",
  //   icon: TbBuildingBank,
  // },
  // {
  //   name: "Income",
  //   link: "/income",
  //   icon: MdOutlineAttachMoney,
  // },
  // {
  //   name: "Expenses",
  //   link: "/expenses",
  //   icon: TbFileInvoice,
  // },
  // {
  //   name: "Assets",
  //   link: "/assests",
  //   icon: TbFileAnalytics,
  // },
  // {
  //   name: "Accounting",
  //   link: "/accounting",
  //   icon: TbChartPie,
  // },
  // {
  //   name: "SMS",
  //   link: "/sms",
  //   icon: HiOutlineMail,
  // },
  // {
  //   name: "Group Email",
  //   link: "/group-email",
  //   icon: HiOutlineMail,
  // },
  // {
  //   name: "Support",
  //   link: "/support",
  //   icon: MdSupportAgent,
  // },
  // {
  //   name: "Audit Log",
  //   link: "/audit-log",
  //   icon: AiOutlineAudit,
  // },
];

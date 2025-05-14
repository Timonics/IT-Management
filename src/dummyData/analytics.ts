import { FaMoneyBillWave, FaUserCheck, FaUserTimes } from "react-icons/fa";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { MdOutlinePayments, MdOutlineSavings } from "react-icons/md";
import { TbArchive, TbCoins } from "react-icons/tb";

export const analytics = [
  {
    name: "Active Co-operators",
    icon: FaUserCheck,
    amount: 12000000,
  },
  {
    name: "Inactive Co-operators",
    icon: FaUserTimes,
    amount: 24,
  },
  {
    name: "Total Loans",
    icon: LiaMoneyBillWaveSolid,
    amount: 621,
  },
  {
    name: "Total Collection",
    icon: TbArchive,
    amount: 1029,
  },
  {
    name: "Total Repayments",
    icon: MdOutlinePayments,
    amount: 690,
  },
  {
    name: "Total Debts",
    icon: FaMoneyBillWave,
    amount: 11,
  },
  {
    name: "Total Dividends",
    icon: MdOutlineSavings,
    amount: 84,
  },
  {
    name: "Total Shares",
    icon: TbCoins,
    amount: 312,
  },
];

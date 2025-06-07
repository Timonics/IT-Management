import { FaMoneyBillWave } from "react-icons/fa";
import { MdOutlinePayments, MdOutlineSavings } from "react-icons/md";
import { TbCoins } from "react-icons/tb";

export const analytics = [
  {
    name: "Total Members",
    icon: MdOutlinePayments,
    amount: 690,
    color: "#4f46e5",
    end_color: "#60a5fa",
  },
  {
    name: "Pending Members",
    icon: FaMoneyBillWave,
    amount: 11,
    color: "#34d399",
    end_color: "#6ee7b7",
  },
  {
    name: "Deposit Requests",
    icon: MdOutlineSavings,
    amount: 84,
    color: "#facc15",
    end_color: "#fcd34d",
  },
  {
    name: "Pending Deposits",
    icon: TbCoins,
    amount: 312,
    color: "#ec4899",
    end_color: "#fca5a5",
  },
];

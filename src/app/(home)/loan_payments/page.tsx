import Link from "next/link";
import { GrSearch } from "react-icons/gr";
import { LuCirclePlus } from "react-icons/lu";
import { TbSelector } from "react-icons/tb";

const Repayments = () => {
  return (
    <div className="h-full bg-white/80">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center p-6 bg-black/15">
          <h2 className="urban text-2xl">Loan Repayments</h2>
          <div className="flex items-center gap-4">
            <Link
              href={"members/create"}
              className="flex items-center cursor-pointer gap-1 bg-[#2576eec9] shadow-md p-2 px-4 rounded-md urban"
            >
              <LuCirclePlus size={20} />
              <p>Add Repayment</p>
            </Link>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <p className="flex items-center outfit gap-4">
            Show{" "}
            <span className="border-2 cursor-pointer p-2 flex items-center justify-between gap-4 rounded-md">
              10 <TbSelector />
            </span>{" "}
            Entries
          </p>
          <div className="flex items-center p-2 px-4 rounded-full bg-[#000]/5 urban">
            <input
              className="outline-none mr-2 w-[300px]"
              placeholder="Search"
            />
            <GrSearch
              size={15}
              className="cursor-pointer h-full p-1 w-[30px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-8 p-4 m-4 outfit text-sm font-bold bg-[#e9f3f9c9]">
          <p>Loan ID</p>
          <p>Payment Date</p>
          <p>Principal Amount</p>
          <p>Interest</p>
          <p>Total Amount</p>
          <p>Remark</p>
          <p>Attachment</p>
          <p>Action</p>
        </div>
        <div className="h-[200px] flex justify-center items-center urban">
          <p className="text-3xl font-semibold">No Data Found</p>
        </div>
      </div>
    </div>
  );
};

export default Repayments;

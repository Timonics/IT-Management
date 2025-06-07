"use client"

const PendingRequests = () => {
  return (
    <div className="h-full bg-white/80">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between p-6 bg-black/15">
          <h2 className="urban text-2xl">Members Requests</h2>
        </div>
        <div className="grid grid-cols-9 p-4 m-4 outfit text-sm font-bold bg-[#e9f3f9c9]">
          <p>Photo</p>
          <p>Member No.</p>
          <p>First Name</p>
          <p>Last Name</p>
          <p className="col-span-2">Email</p>
          <p>Branch</p>
          <p className="col-span-2">Action</p>
        </div>
      </div>
    </div>
  );
};

export default PendingRequests;

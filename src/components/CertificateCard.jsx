import React from "react";

const CertificateCard = ({ item }) => {
  return (
    <div className="group w-[320px] h-[220px] shrink-0 [perspective:1200px] hover:scale-[1.02] transition-all duration-500">

      {/* Flip Wrapper */}
<div
  className="relative w-full h-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
>

        {/* ================= FRONT ================= */}
        <div className="absolute inset-0 [backface-visibility:hidden]">

          <div className="relative w-full h-full rounded-[32px] bg-white border border-gray-200 shadow-[0_18px_45px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.16)] transition-all duration-500 p-2">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none"></div>

            {/* Hole Punch */}
{/* Hole Punch */}
<div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
  <div
    className="
      w-6 h-6
      rounded-full
      bg-gradient-to-br
      from-[#d7dce3]
      via-[#f4f4f4]
      to-white
      border
      border-[#d5dbe3]
      shadow-[0_2px_8px_rgba(0,0,0,.12),inset_0_2px_3px_rgba(255,255,255,.7)]
      flex
      items-center
      justify-center
    "
  >
    <div className="w-2 h-2 rounded-full bg-[#9aa4b2] opacity-50"></div>
  </div>
</div>

            {/* Inner Card */}
            <div className="mt-7 h-full rounded-[26px] bg-[#f6f6f6] px-5 py-5 flex flex-col justify-between">

              {/* Top */}
              <div className="flex justify-between items-center">

                <span className="uppercase tracking-[2px] text-[9px] font-bold text-red-500">
                  {item.category}
                </span>

                <span className="italic text-sm font-semibold text-gray-400">
                  {item.number}
                </span>

              </div>

              {/* Center */}
              <div>

                <h2 className="text-[18px] font-extrabold leading-5 text-gray-900 min-h-[44px]">
                  {item.title}
                </h2>

                <p className="mt-2 text-[11px] text-gray-500">
                  {item.issuer}
                </p>

              </div>

              {/* Bottom */}
              <div className="flex justify-between items-end">

                <div>

                  <p className="uppercase text-[9px] tracking-[2px] text-gray-400">
                    Issued
                  </p>

                  <p className="text-sm font-semibold text-gray-700">
                    {item.year}
                  </p>

                </div>

                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-lg">
                  🏅
                </div>

              </div>

            </div>

          </div>

        </div>

{/* ================= BACK ================= */}
<div
  className="
    absolute inset-0
    rounded-[32px]
    bg-[#111827]
    [transform:rotateY(180deg)]
    [backface-visibility:hidden]
    shadow-[0_20px_50px_rgba(0,0,0,0.25)]
    px-5 py-4
    flex flex-col
  "
>

  {/* Top */}
  <div className="flex flex-col items-center">

    <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center transition-transform
duration-300
group-hover:scale-110 ">
      <span className="text-white text-2xl font-bold">✓</span>
    </div>

    <p className="mt-2 uppercase tracking-[5px] text-[9px] text-gray-300 font-semibold">
      VERIFIED
    </p>

  </div>

  {/* Title */}
  <div className="mt-4 text-center px-2">

   <h3
  className="
    text-[15px]
    md:text-[16px]
    font-bold
    text-white
    leading-5
    line-clamp-2
    min-h-[40px]
    px-3
  "
>
      {item.title}
    </h3>

    <p className="mt-2 text-[10px] text-gray-400 leading-4 px-4">
      Click below to view the original certificate.
    </p>

  </div>

  {/* Spacer */}
  <div className="flex-1"></div>

  {/* Divider */}
  <div className="border-t border-white/5 mb-4"></div>

  {/* Button */}
<button
  onClick={() => window.open(item.link, "_blank", "noopener,noreferrer")}
  className="
    w-full
    h-9
    rounded-full
    bg-[#ff3131]
    hover:bg-[#ff4d4d]
    shadow-[0_10px_25px_rgba(255,59,59,0.35)]
    transition-all
    duration-300
    hover:scale-[1.02]
    text-white
    text-sm
    font-semibold
  "
>
  View Certificate →
</button>

</div>

      </div>
    
    </div>
    
  );
};




export default CertificateCard;
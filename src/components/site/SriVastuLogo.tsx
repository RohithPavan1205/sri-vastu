import type { SVGProps } from "react";

export function SriVastuIcon({ className = "h-8 w-8", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Outer White House Silhouette */}
      <path
        d="M 5 34 V 15 L 20 4 L 35 15 V 34 H 25 V 22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Gold Architectural Lines */}
      <path
        d="M 14 34 V 26 L 21 18 H 34"
        stroke="#caa86d"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-4 w-4", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M17.472 14.382c-.301-.15-1.777-.877-2.052-.977-.275-.1-.475-.15-.676.15-.2.301-.776.977-.951 1.178-.175.2-.351.226-.651.075-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.784-1.674-2.084-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.526.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.629-.926-2.23-.244-.587-.492-.507-.676-.516l-.576-.01c-.2 0-.526.075-.801.376-.275.301-1.052 1.027-1.052 2.505 0 1.478 1.077 2.906 1.227 3.106.15.2 2.12 3.236 5.136 4.54.717.31 1.277.495 1.713.633.72.228 1.375.196 1.893.119.577-.087 1.777-.726 2.027-1.428.25-.702.25-1.303.175-1.428-.075-.125-.275-.2-.576-.35z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.982-1.306A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2a8.16 8.16 0 0 1-4.162-1.135l-.298-.177-3.09.81.824-3.011-.194-.31A8.166 8.166 0 0 1 3.8 12C3.8 7.471 7.471 3.8 12 3.8c4.529 0 8.2 3.671 8.2 8.2 0 4.529-3.671 8.2-8.2 8.2z"
      />
    </svg>
  );
}

import React from "react";

const SvgPeople = props => (
  <svg width={18} height={15} fill="none" {...props}>
    <g clipPath="url(#people_svg__clip0)">
      <path
        d="M12.017 9.362c1 0 1.805-.8 1.805-1.785 0-.986-.805-1.786-1.805-1.786-1.001 0-1.814.8-1.814 1.786 0 .985.813 1.785 1.814 1.785zm-5.44-.714a2.15 2.15 0 002.168-2.143 2.15 2.15 0 00-2.168-2.143c-1.204 0-2.176.957-2.176 2.143s.972 2.143 2.176 2.143zm5.44 2.143c-1.328 0-3.99.657-3.99 1.964v1.607h7.979v-1.607c0-1.307-2.662-1.964-3.99-1.964zm-5.44-.715c-1.69 0-5.077.836-5.077 2.5v1.786h5.077v-1.607c0-.607.24-1.671 1.719-2.479-.631-.128-1.24-.2-1.72-.2z"
        fill="#76879A"
      />
    </g>
    <defs>
      <clipPath id="people_svg__clip0">
        <path fill="#fff" transform="translate(0 .446)" d="M0 0h18v14H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPeople;

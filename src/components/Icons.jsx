import React from "react";

const iconProps = (className = "w-4 h-4") => ({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className,
  "aria-hidden": true,
});

export function IconHome({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5.5 9.5V20a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9.5" />
      <path d="M9.5 21v-6.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V21" />
    </svg>
  );
}

export function IconUser({ className }) {
  return (
    <svg {...iconProps(className)}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
    </svg>
  );
}

export function IconFolder({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M3 7a2 2 0 0 1 2-2h4.2l2 2.2H19a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    </svg>
  );
}

export function IconBriefcase({ className }) {
  return (
    <svg {...iconProps(className)}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8.5 7V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2" />
      <path d="M3 12.5h18" />
    </svg>
  );
}

export function IconMail({ className }) {
  return (
    <svg {...iconProps(className)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function IconArrowRight({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconArrowLeft({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M19 12H5" />
      <path d="M11 6l-6 6 6 6" />
    </svg>
  );
}

export function IconArrowUpRight({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function IconGithub({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

export function IconExternal({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M14 4h6v6" />
      <path d="M10 14L20 4" />
      <path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4" />
    </svg>
  );
}

export function IconCopy({ className }) {
  return (
    <svg {...iconProps(className)}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export function IconCheck({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export function IconCode({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M8 9l-4 3 4 3" />
      <path d="M16 9l4 3-4 3" />
      <path d="M14 5l-4 14" />
    </svg>
  );
}

export function IconDatabase({ className }) {
  return (
    <svg {...iconProps(className)}>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.5" />
      <path d="M4.5 5.5v13c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-13" />
      <path d="M4.5 12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5" />
    </svg>
  );
}

export function IconLayers({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" />
      <path d="M3 12l9 4.5 9-4.5" />
      <path d="M3 16.5L12 21l9-4.5" />
    </svg>
  );
}

export function IconSparkles({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" />
      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" />
    </svg>
  );
}

export function IconMenu({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h12" />
    </svg>
  );
}

export function IconX({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function IconMaximize({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M15 4h5v5" />
      <path d="M9 20H4v-5" />
      <path d="M20 4l-6 6" />
      <path d="M4 20l6-6" />
    </svg>
  );
}

export function IconChevronLeft({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M15 6l-6 6 6 6" />
    </svg>
  );
}

export function IconChevronRight({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function IconSend({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M21 3L10 14" />
      <path d="M21 3l-6.5 18-4.5-7-7-4.5L21 3z" />
    </svg>
  );
}

export function IconChart({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M4 19.5h16" />
      <rect x="6" y="12" width="3" height="7.5" rx="0.8" />
      <rect x="11" y="7" width="3" height="12.5" rx="0.8" />
      <rect x="16" y="4" width="3" height="15.5" rx="0.8" />
    </svg>
  );
}

export function IconPackage({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M12 12l8-4.5" />
      <path d="M12 12v9" />
      <path d="M12 12L4 7.5" />
    </svg>
  );
}

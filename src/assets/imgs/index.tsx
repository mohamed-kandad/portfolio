export const IconGithub = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-github"
  >
    <title>GitHub</title>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const IconLinkedIn = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${className} feather feather-linkedin`}
  >
    <title>LinkedIn</title>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const IconLink = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${className} feather feather-external-link`}
  >
    <title>External Link</title>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const Icon = ({ color = "#000" }) => (
  <svg
    version="1.1"
    viewBox="0 0 1728 1728"
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    style={{ margin: "auto" }}
  >
    <path
      transform="translate(902)"
      d="m0 0 22 1 47 5 41 6 36 7 34 8 35 10 36 12 22 8 32 13 20 9 33 16 26 14 24 14 24 15 15 10 20 14 21 16 17 13 28 24 10 9 13 12 43 43 7 8 13 15 11 13 11 14 12 15 10 14 12 17 12 18 12 19 10 17 13 23 11 20 11 23 10 22 12 29 11 29 14 43 11 41 9 42 6 35 5 41 4 43v88l-6 61-7 47-9 45-11 42-13 41-9 25-12 30-11 25-12 25-11 22-13 23-16 27-13 20-15 22-14 19-10 13-12 15-9 11-9 10-9 11-10 10-7 8-37 37-8 7-12 11-11 9-14 12-34 26-20 14-21 14-24 15-21 12-18 10-29 15-28 13-39 16-34 12-31 10-37 10-41 9-41 7-49 6-35 3h-4zm219 273v1181l6-1 37-18 23-13 23-14 18-12 14-10 16-12 14-11 15-13 14-12 10-10 3-2v-2l4-2 5-6 6-5 7-8 6-6v-2h2l9-11 12-14 13-17 12-16 18-27 13-21 13-24 10-19 13-28 14-36 11-33 10-38 8-40 5-38 3-35v-67l-3-37-6-42-5-26-10-40-11-35-13-34-15-33-13-26-14-24-11-18-12-18-13-18-10-13-13-16-11-13-12-13-11-12-18-18-8-7-13-12-11-9-16-13-19-14-13-9-15-10-21-13-27-15-21-11-20-9z"
      fill={color}
    />
    <path
      transform="translate(819)"
      d="m0 0h6v661l-16 9-24 14-26 15-28 16-27 16-23 13-26 15-24 14-52 30-28 16-24 14-28 16-15 9-8 5 5 5 23 13 24 14 26 15 28 16 24 14 52 30 21 12 24 14 78 45 43 25 1 1v661l-36-3-44-5-43-7-34-7-36-9-23-7-3-2v-494l-5-2-19-11-24-14-28-16-26-15-24-14-28-16-24-14-28-16-24-14-28-16-71-41-24-14-21-12-10-6h-2v466l-4-2-8-10-12-14-11-14-14-18-13-18-14-20-12-19-14-23-13-23-13-24-15-31-18-43-10-27-15-46-11-41-8-37-8-50-5-44-2-24v-100l7-63 7-44 8-38 12-45 11-35 9-25 11-28 13-30 19-39 13-23 10-18 20-32 11-16 14-20 10-13 9-12 13-16 18-22 2-3 3 1v305l-1 161 22-12 10-6 26-15 17-10 26-15 24-14 28-16 52-30 24-14 21-12 24-14 28-16 24-14 28-16 26-15 6-4 1-494 25-8 44-11 35-7 39-6 43-5z"
      fill={color}
    />
  </svg>
);

export default Icon;
